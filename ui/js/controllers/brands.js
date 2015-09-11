define(['app'], function (app) {
  app.controller('BrandsController', ['$rootScope', '$scope', 'brandService', 'errorService',
    function($rootScope, $scope, brandService, errorService) {
      brandService.getList().
        success(function(data) {
          $scope.brands = data;
        }).
        error(function(error) {
          $scope.error = errorService.apiError;
          console.log(error);
        });
    }]);
});
