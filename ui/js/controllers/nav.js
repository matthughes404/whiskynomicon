define(['app'], function (app) {
  app.controller('NavController', ['$rootScope', '$scope', '$cookieStore', '$location',
    function($rootScope, $scope, $cookieStore, $location) {
      $rootScope.user = $cookieStore.get('user');

      if ($rootScope.user == null) {
        $rootScope.home = "#/";
      } else {
        $rootScope.home = "#/welcome";
      }

      $scope.signOut = function() {
        $cookieStore.remove('user');
        $rootScope.user = null;
        $location.path('/');
      };
    }]);
});
