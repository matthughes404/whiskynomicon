define(['app'], function (app) {
  app.controller('RegisterController', ['$rootScope', '$scope', '$location', 'authService', 'errorService',
    function($rootScope, $scope, $location, authService, errorService) {
      $scope.create = function(user) {
        authService.register(user).
          success(function(response, status, headers) {
            var user = authService.getUser(response, headers);
            $rootScope.user = user;
            $rootScope.authenticated = true;
            $rootScope.home = "#/welcome";
            $location.path('/welcome');
          }).
          error(function(response) {
            console.log(response);

            $scope.errors = {};

            if (response != null) {
              if (response.errors.email) {
                $scope.errors.password = "This e-mail address has already been registerd"
              }

              if (response.errors.password) {
                $scope.errors.password = "Passwords must be at least 8 characters"
              }

              if (response.errors.password_confirmation) {
                $scope.errors.passwordMatch = "Passwords do not match"
              }
            } else {
              $scope.errors.message = errorService.apiError;
            }
          });
      };
    }]);
});
