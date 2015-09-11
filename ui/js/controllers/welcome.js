define(['app'], function (app) {
  app.controller('WelcomeController', ['$rootScope', '$scope', '$cookieStore', '$location',
    'userService', 'bottleService', 'errorService',
    function($rootScope, $scope, $cookieStore, $location,
      userService, bottleService, errorService) {
      $rootScope.user = $cookieStore.get('user');

      if ($rootScope.user == null) {
        $location.path('/');
        return;
      }

      userService.getActivity($scope.dateRange).
        success(function(data) {
          $scope.activity = data;
        }).
        error(function(error) {
          $scope.activityError = errorService.apiError;
          console.log(error);
        });

      bottleService.getList().
        success(function(data) {
          $scope.bottles = data;
        }).
        error(function(error) {
          $scope.bottleError = errorService.apiError;
          console.log(error);
        });

      $scope.activityLink = function(data) {
        switch (data.activity_type) {
          case "bottle":
            return "#/bottles/" + data.detail_id;
          case "taste":
            return "#/tastes/" + data.detail_id;
          default:
            return "#/welcome";
        }
      };
    }]);
});
