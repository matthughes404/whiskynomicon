define([
    'angular',
    'angularRoute',
    'angularCookies',
    'q',
    './controllers/home'
], function () {
    'use strict';
    
    var app = angular.module('app', ['ngRoute', 'ngCookies']);

    app.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider, $rootScope) {
        $routeProvider.
          when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
          }).
          /*
          when('/register', {
            templateUrl: 'partials/register.html',
            controller: require(['controllers/register'])
          }).
          when('/login', {
            templateUrl: 'partials/login.html',
            controller: require(['controllers/login'])
          }).
          when('/brands', {
            templateUrl: 'partials/brands.html',
            controller: require(['controllers/brands'])
          }).
          when('/brands/:id', {
            templateUrl: 'partials/brandDetail.html',
            controller: require(['controllers/brandDetail'])
          }).
          when('/welcome', {
            templateUrl: 'partials/welcome.html',
            controller: require(['controllers/welcome'])
          }).
          when('/tastes', {
            templateUrl: 'partials/tastes.html'
          }).
          when('/tastes/:id', {
            templateUrl: 'partials/tasteDetail.html',
            controller: require(['controllers/tasteDetail'])
          }).
          when('/bottles/', {
            templateUrl: 'partials/bottles.html'
          }).
          when('/bottles/:id', {
            templateUrl: 'partials/bottleDetail.html',
            controller: require(['controllers/bottleDetail'])
          }).
          */
          otherwise({
            redirectTo: '/'
          });
      }]);

    var resolveController = ['$q', 'path', function resolveController($q, path) {
        var deferred = $q.defer();
        var script = document.createElement('script');
        script.src = path;
        script.onload = function() {
            $scope.$apply(deferred.resolve());
        };
        document.body.appendChild(script);
        return deferred.promise;
    }];

    /*
    app.run(['$rootScope', function($rootScope) {
          $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
              if (current.$$route.controller == "HomeController") {
                $rootScope.homepage = true;
              } else {
                $rootScope.homepage = false;
              }
          });
      }]);
    */

    return app;
});
