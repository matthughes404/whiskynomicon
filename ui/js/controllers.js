var app = angular.module('dramControllers', []);

app.controller('HomeController', ['$rootScope',
  function($rootScope) {

  }]);

  app.controller('NavController', ['$rootScope', '$location',
    function($rootScope, $location) {
      console.log($location.url());
      if ($location == '#/') {
        alert('hooooome');
      }
    }]);

app.controller('RegisterController', ['$rootScope', '$scope', 'authService',
  function($rootScope, $scope, authService) {
    $scope.create = function(user) {
      authService.register(user).
        success(function(data, status, headers) {
          console.log(data);
        }).
        error(function(response) {
          console.log(response);

          $scope.errors = {};

          if (response.errors.password) {
            $scope.errors.password = "Passwords must be at least 8 characters"
          }

          if (response.errors.password_confirmation) {
            $scope.errors.passwordMatch = "Passwords do not match"
          }
        });
    };
  }]);

app.controller('LoginController', ['$rootScope', '$scope', 'authService',
  function($rootScope, $scope, authService) {
    $scope.signIn = function(credentials) {
      authService.signIn(credentials).
        success(function(data, status, headers) {
          console.log(data);
          console.log(status);
          console.log(headers);
        }).
        error(function(response) {
          console.log(response);

          if (response.errors && response.errors.length > 0) {
            $scope.error = response.errors[0];
          }
        });
    };
  }]);

app.controller('BrandsController', ['$rootScope', '$scope', 'brandService',
  function($rootScope, $scope, brandService) {
    brandService.getList().
      success(function(data) {
        $scope.brands = data;
      }).
      error(function(error) {
        console.log(error);
      });
  }]);

app.controller('BrandDetailController', ['$rootScope', '$scope', '$routeParams', 'brandService', 'variantService',
  function($rootScope, $scope, $routeParams, brandService, variantService) {
    brandService.get($routeParams.id).
      success(function(data) {
        $scope.brand = data;
      }).
      error(function(error) {
        console.log(error);
      });

    variantService.getList($routeParams.id).
      success(function(data) {
        $scope.variants = data;
      }).
      error(function(error) {
        console.log(error);
      });
  }]);
