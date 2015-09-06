define(['app'], function (app) {
//var app = angular.module('whiskyControllers', []);
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
});
