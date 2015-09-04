var app = angular.module('dramServices', []);
var endpoint = 'http://localhost:3000';

app.service('authService', ['$http', function($http, $httpProvider) {
  this.register = function(credentials) {
    return $http.post(endpoint + '/auth', credentials);
  };

  this.signIn = function(credentials) {
    return $http.post(endpoint + '/auth/sign_in', credentials);
  };
}]);

app.service('brandService', ['$http', function($http) {
  this.getList = function() {
    return $http.get(endpoint + '/brands');
  };

  this.get = function(id) {
    return $http.get(endpoint + '/brands/' + id);
  };
}]);

app.service('variantService', ['$http', function($http) {
  this.getList = function(brandId) {
    return $http.get(endpoint + '/brands/' + brandId + '/variants');
  };
}]);

app.service('userService', ['$http', '$rootScope',
  function($http, $rootScope) {
    this.getActivity = function() {
      return $http.get(endpoint + '/activity', { headers: authHeaders($rootScope.user) });
    };

    this.getFriendActivity = function() {
      return $http.get(endpoint + '/friendActivity', { headers: authHeaders($rootScope.user) });
    };
}]);

app.service('tasteService', ['$http', '$rootScope',
  function($http, $rootScope) {
    this.getList = function() {
      return $http.get(endpoint + '/tastes', { headers: authHeaders($rootScope.user) });
    };

    this.get = function(id) {
      return $http.get(endpoint + '/tastes/' + id, { headers: authHeaders($rootScope.user) });
    };
  }]);

app.service('bottleService', ['$http', '$rootScope',
  function($http, $rootScope) {
    this.getList = function() {
      return $http.get(endpoint + '/bottles', { headers: authHeaders($rootScope.user) });
    };

    this.get = function(id) {
      return $http.get(endpoint + '/bottles/' + id, { headers: authHeaders($rootScope.user) });
    };
  }]);

function authHeaders(user) {
  var headers = {
    'access-token': user.accessToken,
    'client': user.client,
    'expiry': user.expiry,
    'token-type': user.tokenType,
    'uid': user.uid
  };

  return headers;
}
