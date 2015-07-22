var app = angular.module('dramApp', ['ngRoute', 'dramServices', 'dramControllers']);


app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/brands', {
        templateUrl: 'partials/brands.html',
        controller: 'BrandsController'
      }).
      when('/brands/:id', {
        templateUrl: 'partials/brandDetail.html',
        controller: 'BrandDetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
