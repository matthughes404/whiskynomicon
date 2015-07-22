var app = angular.module('dramControllers', []);

app.controller('HomeController', ['$rootScope',
  function($rootScope) {

  }]);

app.controller('LoginController', ['$rootScope', '$scope', 'authService',
  function($rootScope, $scope, authService) {
    $scope.signIn = function(credentials) {
      authService.signIn(credentials).
        success(function(data, status, headers) {
          console.log(data);
          console.log(status);
          console.log(headers);
        }).
        error(function(error) {
          console.log(error);
        });
    };
  }]);


app.controller('BrandsController', ['$rootScope', '$scope', 'brandService',
  function($rootScope, $scope, brandService) {
    brandService.getList().
      success(function(data) {
        $scope.brands = data;
      }).
      error(function(error) {
        console.log(error);
      });
  }]);

app.controller('BrandDetailController', ['$rootScope', '$scope', '$routeParams', 'brandService', 'variantService',
  function($rootScope, $scope, $routeParams, brandService, variantService) {
    brandService.get($routeParams.id).
      success(function(data) {
        $scope.brand = data;
      }).
      error(function(error) {
        console.log(error);
      });

    variantService.getList($routeParams.id).
      success(function(data) {
        $scope.variants = data;
      }).
      error(function(error) {
        console.log(error);
      });
  }]);
