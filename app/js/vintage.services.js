vintage.service('AuthService', function() {
  
  var _user;
  
  this.login = function(u) {
    _user = u;
  };
  
  this.logout = function() {
    _user = {}; 
  }
  
  this.user = function() {
    return _user;
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