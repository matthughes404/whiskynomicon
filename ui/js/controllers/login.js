define(['app'], function (app) {
  app.controller('LoginController', ['$rootScope', '$scope', '$cookieStore', '$location', 'authService',
    function($rootScope, $scope, $cookieStore, $location, authService) {
      $rootScope.user = $cookieStore.get('user');

      if ($rootScope.user != null) {
        $rootScope.authenticated = true;
        $rootScope.home = "#/welcome";
        $location.path('/welcome');
      }

      $scope.signIn = function(credentials) {
        authService.signIn(credentials).
          success(function(response, status, headers) {
            var user = authService.getUser(response, headers);
            $rootScope.user = user;
            $cookieStore.put('user', user);
            $rootScope.authenticated = true;
            $rootScope.home = "#/welcome";
            $location.path('/welcome');
          }).
          error(function(response) {
            console.log(response);

            if (response.errors && response.errors.length > 0) {
              $scope.error = response.errors[0];
            }
          });
      };
    }]);
});
