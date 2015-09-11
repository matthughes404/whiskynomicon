define(['app'], function (app) {
  app.controller('TasteListController', ['$rootScope', '$scope', 'tasteService',
    function($rootScope, $scope, tasteService) {
      tasteService.getList().
        success(function(data) {
          $scope.tastes = data;
        }).
        error(function(error) {
          console.log(error);
          $location.path('/welcome');
        });
    }]);
});
