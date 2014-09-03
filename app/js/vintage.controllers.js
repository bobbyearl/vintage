vintage.controller('HomeController', function($rootScope, $scope, $stateParams, $state, growl) {
  if ($rootScope.loggedOut) {
    $rootScope.loggedOut = false; 
    growl.addSuccessMessage('Logout Successful', {ttl: 3000});
  }
  
  $scope.search = function(query) {
    $state.go('movies', { action: 'search', query: query, page: 1 });
  };
});

vintage.controller('MoviesController', function($scope, $state, $stateParams, MovieService) {

  // Automatically load the search screen
  if ($stateParams.query) {
    $scope.query = $stateParams.query;
    MovieService.byTitle($stateParams.query, $stateParams.page).success(function(response) {
      console.log(response);
      $scope.response = response;
    }).error(function() {        
      $scope.error = 'Error searching.';        
    }).finally(function() {        
        $scope.isSearching = false;
        $scope.$safeApply();        
    });
  }
  
  $scope.search = function(q) {
    $state.go('movies', { action: 'search', query: q, page: 1 });
  };
  
  $scope.getDescription = function(id) {
    MovieService.byId(id).success(function(data) {
      console.log(data);
    }).error(function(e) {
      console.log(e);
    }).finally(function() {
      $scope.$safeApply();
    });
  }
  
  $scope.hasMovie = function(movie) {
    return false; 
  }
  
});

vintage.controller('MoviesImageController', function($scope) {
  var base = 'http://image.tmdb.org/t/p/w92/',
      unavailable = 'http://placehold.it/92x138&text=Image+Available';
  $scope.getPath = function(path) {
    return path ? (base + path) : unavailable;
  }
});

vintage.controller('MovieController', function($scope) {
  
});

vintage.controller('LoginController', function($rootScope, $scope, $state, AuthService) {
  $scope.login = function() {
    AuthService.fake();
    $rootScope.user = AuthService.user();
    $state.go('home');
  }
});

vintage.controller('LogoutController', function($rootScope, $state, AuthService) {
  AuthService.logout();
  $rootScope.user = AuthService.user();
  $rootScope.loggedOut = true;
  $state.go('home');
});

vintage.controller('RegisterController', function($scope) {
  
});