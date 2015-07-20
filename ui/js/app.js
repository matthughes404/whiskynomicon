var app = angular.module('dramApp', ['ngRoute', 'dramControllers', 'dramServices']);
app.constant('endpoint', 'http://localhost:3000/');

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
