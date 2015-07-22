var app = angular.module('dramControllers', []);

app.controller('HomeController', ['$rootScope', function($rootScope) {

}]);

app.controller('BrandController', ['$rootScope', '$scope', 'brandService', function($rootScope, $scope, brandService) {
  brandService.getList().
    success(function(data) {
      $scope.brands = data;
      //$scope.refresh();
    }).
    error(function(error) {
      console.log(error);
    });
}]);
