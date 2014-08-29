vintage.service('AuthService', function($q, $window) {
  
  this.fake = function() {
    $window.localStorage.setItem('user', JSON.stringify({
      id: 12345,
      name: 'Bobby Earl',
      token: 'asdf'
    }));
  };
  
  this.login = function(user) {
    
  };
  
  this.logout = function() {
    $window.localStorage.setItem('user', '');
  }
  
  this.user = function() {
    try {
      return angular.fromJson($window.localStorage.getItem('user'));
    } catch(e) {
      return false;
    }
  };
  
});

vintage.service('MovieService', function($http) {
  
  var base = '//api.themoviedb.org/3/';
  var key = '?api_key=39151834c95219c3cae772b4465079d7';
  
  this.byTitle = function(title) {
     return $http.get(base + 'search/movie' + key + '&query=' + title);
  };
  
  this.byId = function(id) {
    return $http.get(base + 'movie/' + id + key);
  };
  
});