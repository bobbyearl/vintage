'use strict';

var vintage = angular.module('vintage', ['ngAnimate', 'ui.router', 'Scope.safeApply', 'angular-growl', 'angularMoment']);

vintage.config(function($stateProvider, $urlRouterProvider, $animateProvider) {
  $animateProvider.classNameFilter(/^((?!(fa-spin)).)*$/);
  $urlRouterProvider.when('', '/home');
});

vintage.run(function($rootScope, $state, $stateParams, AuthService) {
  $rootScope.user = AuthService.user();
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});

// http://stackoverflow.com/questions/15417125/submit-form-on-pressing-enter-with-angularjs
vintage.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if(event.which === 13) {
        scope.$apply(function(){
          scope.$eval(attrs.ngEnter, {'event': event});
        });
        event.preventDefault();
      }
    });
  };
});