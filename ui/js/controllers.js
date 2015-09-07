define(['app'], function (app) {
  var app = angular.module('whiskyControllers', []);

  app.controller('WelcomeController', ['$rootScope', '$scope', '$cookieStore', '$location', 'userService', 'bottleService',
    function($rootScope, $scope, $cookieStore, $location, userService, bottleService) {
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
          console.log(error);
          $location.path('/welcome');
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
          console.log(error);
          $location.path('/welcome');
        });

      bottleService.getList().
        success(function(data) {
          $scope.bottles = data;
        }).
        error(function(error) {
          console.log(error);
          $location.path('/welcome');
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

  app.controller('TastesController', ['$rootScope', '$scope', 'tasteService',
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
