define(['app'], function (app) {
  app.controller('BottlesController', ['$rootScope', '$scope', 'bottleService',
    function($rootScope, $scope, bottleService) {
      bottleService.getList().
        success(function(data) {
          $scope.brands = data;
        }).
        error(function(error) {
          console.log(error);
        });
    }]);
});
