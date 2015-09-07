define(['app'], function (app) {
  app.controller('BrandDetailController', ['$rootScope', '$scope', '$routeParams', 'brandService', 'variantService',
    function($rootScope, $scope, $routeParams, brandService, variantService) {
      brandService.get($routeParams.id).
        success(function(data) {
          $scope.brand = data;
        }).
        error(function(error) {
          console.log(error);
          $location.path('/welcome');
        });

      variantService.getList($routeParams.id).
        success(function(data) {
          $scope.variants = data;
        }).
        error(function(error) {
          console.log(error);
        });
    }]);
});
