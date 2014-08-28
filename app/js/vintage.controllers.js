vintage.controller('HomeController', function($scope, $state, $stateParams, MovieService) {

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

vintage.controller('LoginController', function($scope) {
  
});