define(['app'], function (app) {
  app.controller('TasteCreateController', ['$rootScope', '$scope', '$cookieStore', '$location', '$routeParams', '$filter',
    'errorService', 'brandService', 'variantService', 'tasteService',
    function($rootScope, $scope, $cookieStore, $location, $routeParams, $filter,
      errorService, brandService, variantService, tasteService) {
      $rootScope.user = $cookieStore.get('user');

      if ($rootScope.user == null) {
        $location.path('/');
        return;
      }

      $scope.brands = [];
      $scope.variants = [];

      brandService.getList().
        success(function(data) {
          $scope.brands = data;
        }).
        error(function(error) {
          $scope.error = errorService.apiError;
          console.log(error);
        });

      $scope.getVariants = function(brandId) {
        variantService.getList(brandId).
          success(function(data) {
            if (data.length > 0) {
              $scope.variant = data[0];
              $scope.variantId = data[0].id;
            }

            $scope.variants = data;
          }).
          error(function(error) {
            $scope.error = errorService.apiError;
            console.log(error);
          });
      };

      $scope.loadDetails = function(variantId) {
        var variant = $filter('filter')($scope.variants, { id: variantId }, false)
        if (variant.length > 0) {
          $scope.variant = variant[0];
        }
      };
    }]);
});
