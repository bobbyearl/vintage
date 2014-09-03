vintage.service('AuthService', function($q, $window, UserService) {
  
  this.fake = function() {
    UserService.getUser(1).success(function(data) {
      $window.localStorage.setItem('user', JSON.stringify(data));
    });
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

vintage.service('UserService', function($http) {
  this.getUser = function(id) {
    return $http.get('/api/user/' + id);
  }
});

vintage.service('MovieService', function($http) {
  
  var base = '//api.themoviedb.org/3/';
  var params = {
    api_key: '39151834c95219c3cae772b4465079d7'
  };
  
  this.byTitle = function(title, page) {
    params.query = title;
    if (page) {
      params.page = page;
    }
    
    return $http.get(base + 'search/movie' + '?' + $.param(params));
  };
  
  this.byId = function(id) {
    return $http.get(base + 'movie/' + id + '?' + $.param(params));
  };
  
});