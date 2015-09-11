define(['app'], function (app) {
  app.controller('TasteDetailController', ['$rootScope', '$scope', '$location', '$routeParams', 'tasteService',
    function($rootScope, $scope, $location, $routeParams, tasteService) {
      if ($rootScope.user == null) {
        $location.path('/');
        return;
      }

      tasteService.get($routeParams.id).
        success(function(data) {
          $scope.taste = data;
        }).
        error(function(error) {
          console.log(error);
          $location.path('/welcome');
        });
    }]);
});
