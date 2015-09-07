define(['app'], function (app) {
  app.controller('BottleDetailController', ['$rootScope', '$scope', '$location', '$routeParams', 'bottleService',
    function($rootScope, $scope, $location, $routeParams, bottleService) {
      if ($rootScope.user == null) {
        $location.path('/');
        return;
      }

      bottleService.get($routeParams.id).
        success(function(data) {
          $scope.bottle = data;
        }).
        error(function(error) {
          console.log(error);
          $location.path('/welcome');
        });
    }]);
});
