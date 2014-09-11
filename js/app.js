'use strict';

var ngModem = angular.module('modemcontroller', ['ui.bootstrap', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      // Application routes
      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'partials/home.html',
          controller: 'HomeCtrl'
        });
      // For unmatched routes
      $urlRouterProvider.otherwise('/');
}]);
