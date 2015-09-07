define(['angularAMD', 'angular-route', 'angular-cookies'], function (angularAMD) {
  var app = angular.module('whiskyApp', ['ngRoute', 'ngCookies']);

  app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', angularAMD.route({
          templateUrl: 'partials/home.html',
          controller: 'HomeController',
          controllerUrl: 'controllers/home'
        })).
        when('/register', angularAMD.route({
          templateUrl: 'partials/register.html',
          controller: 'RegisterController',
          controllerUrl: 'controllers/register'
        })).
        when('/login', angularAMD.route({
          templateUrl: 'partials/login.html',
          controller: 'LoginController',
          controllerUrl: 'controllers/login'
        })).
        when('/brands', angularAMD.route({
          templateUrl: 'partials/brands.html',
          controller: 'BrandsController',
          controllerUrl: 'controllers/brands'
        })).
        when('/brands/:id', angularAMD.route({
          templateUrl: 'partials/brandDetail.html',
          controller: 'BrandDetailController',
          controllerUrl: 'controllers/brandDetail'
        })).
        when('/welcome', angularAMD.route({
          templateUrl: 'partials/welcome.html',
          controller: 'WelcomeController',
          controllerUrl: 'controllers/welcome'
        })).
        when('/tastes', angularAMD.route({
          templateUrl: 'partials/tastes.html'
        })).
        when('/tastes/:id', angularAMD.route({
          templateUrl: 'partials/tasteDetail.html',
          controller: 'TasteDetailController',
          controllerUrl: 'controllers/tasteDetail'
        })).
        when('/bottles/', angularAMD.route({
          templateUrl: 'partials/bottles.html'
        })).
        when('/bottles/:id', angularAMD.route({
          templateUrl: 'partials/bottleDetail.html',
          controller: 'BottleDetailController',
          controllerUrl: 'controllers/bottleDetail'
        })).
        otherwise({
          redirectTo: '/'
        });
    }]);

  app.run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.$$route.controller == "HomeController") {
              $rootScope.homepage = true;
            } else {
              $rootScope.homepage = false;
            }
        });
    }]);

  return angularAMD.bootstrap(app);
});
