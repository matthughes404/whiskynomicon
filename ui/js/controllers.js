var app = angular.module('whiskyControllers', []);

app.controller('HomeController', ['$rootScope', '$cookieStore',
  function($rootScope, $cookieStore) {
    $rootScope.user = $cookieStore.get('user');
  }]);

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

app.controller('RegisterController', ['$rootScope', '$scope', '$location', 'authService',
  function($rootScope, $scope, $location, authService) {
    $scope.create = function(user) {
      authService.register(user).
        success(function(response, status, headers) {
          var user = getUser(response, headers);
          $rootScope.user = user;
          $rootScope.authenticated = true;
          $rootScope.home = "#/welcome";
          $location.path('/welcome');
        }).
        error(function(response) {
          console.log(response);

          $scope.errors = {};

          if (response.errors.email) {
            $scope.errors.password = "This e-mail address has already been registerd"
          }

          if (response.errors.password) {
            $scope.errors.password = "Passwords must be at least 8 characters"
          }

          if (response.errors.password_confirmation) {
            $scope.errors.passwordMatch = "Passwords do not match"
          }
        });
    };
  }]);

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
          var user = getUser(response, headers);
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
        $location.path('/welcome');
      });

    variantService.getList($routeParams.id).
      success(function(data) {
        $scope.variants = data;
      }).
      error(function(error) {
        console.log(error);
      });
  }]);

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

function getUser(response, headers) {
  var user = {
    //properties for UI
    username: response.data.username,
    name: response.data.name,
    email: response.data.email,

    //properties for auth requests
    accessToken: headers("access-token"),
    client: headers("client"),
    expiry: headers("expiry"),
    tokenType: headers("token-Type"),
    uid: headers("uid")
  }

  return user;
}
