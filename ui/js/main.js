'use strict';

require.config({
  baseUrl: "js",

  paths: {
    'angular': '../bower_components/angular/angular.min',
    'angularRoute': '../bower_components/angular-route/angular-route.min',
    'angularCookies': '../bower_components/angular-cookies/angular-cookies.min',
    'q': '../bower_components/q/q',
    'jquery': '../bower_components/jquery/jquery.min'
  },
  shim: { 'angular': { exports: 'angular' }, 'angularRoute': ['angular'], 'angularCookies': ['angular'] },

  /*
  shim: {
		'angular' : { 'exports' : 'angular' },
		'angularRoute': { deps: ['angular'] },
		'angularCookies': { deps: ['angular'] }
	},
  */

  priority: [
    'angular'
  ]
});

require([
	'angular',
  'app'
], function(angular) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['app']);
		});
	}
);
