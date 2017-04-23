var dawacare_app = angular.module('dawacare_app', ['ngRoute', 'ngCookies']);

  dawacare_app.config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: './partials/index.html',
        controller: 'indexController',
        controllerAs: 'indexCtrl'
      })
      .when('/test', {
        templateUrl: './partials/test',
        controller: 'testController',
        controllerAs: 'testCtrl'
      })
  })
