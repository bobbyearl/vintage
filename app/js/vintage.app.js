'use strict';

var vintage = angular.module('vintage', ['ngAnimate', 'ui.router', 'Scope.safeApply', 'angular-growl']);

vintage.config(function($stateProvider, $urlRouterProvider, $animateProvider) {
  $animateProvider.classNameFilter(/^((?!(fa-spin)).)*$/);
  $urlRouterProvider.when('', '/home');
});

vintage.run(function($rootScope, $state, $stateParams, AuthService) {
  $rootScope.user = AuthService.user();
  $rootScope.$state = $state;
});