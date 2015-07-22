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

  this.add = function(brand) {

  };

  this.update = function(id, brand) {

  };

  this.delete = function(id) {

  };
}]);

app.service('variantService', ['$http', function($http) {
  this.getList = function(brandId) {
    return $http.get(endpoint + '/brands/' + brandId + '/variants');
  };

  this.get = function(brandId, id) {

  };

  this.add = function(brandId, variant) {

  };

  this.update = function(brandId, id, variant) {

  };

  this.delete = function(id) {

  };
}]);
