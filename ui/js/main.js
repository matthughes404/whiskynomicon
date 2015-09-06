require.config({
    baseUrl: "js",

/*
<script src="bower_components/requirejs/requirejs.js"></script>
*/

    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angularAMD': '../bower_components/angularAMD/angularAMD'
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'] },
    deps: ['app']
});

require(
    [
        'app',
        'services',
        'controllers',
        'controllers/brandsController'
    ]);
