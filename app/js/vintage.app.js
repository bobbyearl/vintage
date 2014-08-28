'use strict';

var vintage = angular.module('vintage', ['ngAnimate', 'ui.router']);

vintage.config(function($stateProvider, $urlRouterProvider, $animateProvider) {
  
  $animateProvider.classNameFilter(/^((?!(fa-spin)).)*$/);
  $urlRouterProvider.when('', '/home');

  $stateProvider.state('home', {
      templateUrl: 'partials/home.html',
      url: '/home',
      controller: 'HomeController'
  });
  
  $stateProvider.state('login', {
      templateUrl: 'partials/login.html',
      url: '/login',
      controller: 'LoginController'
  });
  
});

vintage.run(function($rootScope, $state) {});