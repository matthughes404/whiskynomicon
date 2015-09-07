define(['app'], function (app) {
  app.controller('HomeController', ['$rootScope', '$cookieStore',
    function($rootScope, $cookieStore) {
      $rootScope.user = $cookieStore.get('user');
    }]);
});
