vintage.controller('HomeController', function($rootScope, $scope, $stateParams, $state, growl) {
  if ($rootScope.loggedOut) {
    $rootScope.loggedOut = false; 
    growl.addSuccessMessage('Logout Successful', {ttl: 3000});
  }
  
  $scope.search = function(query) {
    $state.go('movies', { action: 'search', query: query });
  };
});

vintage.controller('MoviesController', function($scope, $state, $stateParams, MovieService) {

  // Automatically load the search screen
  if ($stateParams.query) {
    $scope.query = $stateParams.query;
    MovieService.byTitle($stateParams.query).success(function(response) {
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
    $state.go('movies', { action: 'search', query: q });
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
  
});

vintage.controller('MoviesImageController', function($scope) {
  /*
      <img class="media-object" ng-src="{{imgPrefix}}{{result.poster_path}}" alt="" ng-show="result.poster_path">
      <img class="media-object" ng-src="http://placehold.it/92x138&text=No+Poster+Available" alt="" ng-hide="result.poster_path">
  */
  var base = 'http://image.tmdb.org/t/p/w92/',
      unavailable = 'http://placehold.it/92x138&text=Image+Available';
  $scope.getPath = function(path) {
    return path ? (base + path) : unavailable;
  }
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