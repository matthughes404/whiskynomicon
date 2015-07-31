var app = angular.module('dramApp', ['ngRoute', 'dramServices', 'dramControllers']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        homepage: true,
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'RegisterController'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
      }).
      when('/brands', {
        templateUrl: 'partials/brands.html',
        controller: 'BrandsController'
      }).
      when('/brands/:id', {
        templateUrl: 'partials/brandDetail.html',
        controller: 'BrandDetailController'
      }).
      when('/welcome', {
        templateUrl: 'partials/welcome.html',
        controller: 'WelcomeController'
      }).
      when('/tastes', {
        templateUrl: 'partials/tastes.html',
        controller: 'TastesController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

app.run(['$rootScope', function($rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
          $rootScope.homepage = current.$$route.homepage;
      });
  }]);
