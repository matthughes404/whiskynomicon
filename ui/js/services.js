var app = angular.module('dramServices', []);

app.service('brandService', function($http) {
  this.getList = function() {

  };

  this.get = function(id) {

  };

  this.add = function(brand) {

  };

  this.update = function(id, brand) {

  };

  this.delete = function(id) {

  };
});

app.service('variantService', function($http) {
  this.getList = function() {

  };

  this.get = function(id) {

  };

  this.add = function(variant) {

  };

  this.update = function(id, variant) {

  };

  this.delete = function(id) {

  };
});

app.service('tasteService', function($http) {
  this.getList = function(user) {

  };

  this.get = function(user, id) {

  };

  this.add = function(user, taste) {

  };

  this.update = function(user, id, taste) {

  };

  this.delete = function(user, id) {

  };
});

app.service('bottleService', function($http) {
  this.getList = function(user) {

  };

  this.get = function(user, id) {

  };

  this.add = function(user, bottle) {

  };

  this.update = function(user, id, bottle) {

  };

  this.delete = function(user, id) {

  };
});
