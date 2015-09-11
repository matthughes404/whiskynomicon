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

      userService.getActivity($scope.dateRange).
        success(function(data) {
          var fa = data;
          var last = data.length - 1;
          fa.splice(last, 1);
          var today = new Date().toISOString();

          fa.push({ date: today, description: 'placeholder for now... copying user activity' });
          $scope.friendActivity = fa;
        }).
        error(function(error) {
          $scope.friendError = errorService.apiError;
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
