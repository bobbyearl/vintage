vintage.controller('HomeController', ['$rootScope', 'growl', function($rootScope, growl) {
  if ($rootScope.loggedOut) {
    $rootScope.loggedOut = false; 
    growl.addSuccessMessage('Logout Successful', {ttl: 3000});
  }
}]);

vintage.controller('SearchController', function($scope, $state, $stateParams, MovieService) {

  $scope.byTitle = function(title) {
    $state.go('home', { query: title });
  };
  
  if ($stateParams.query) {
    $scope.query = $stateParams.query;
    MovieService.byTitle($stateParams.query).success(function(data) {
      console.log(data);
      $scope.results = data.results;
    }).error(function() {        
      $scope.error = 'Error searching.';        
    }).finally(function() {        
        $scope.isSearching = false;
        $scope.$safeApply();        
    });
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