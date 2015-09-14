require.config({
    baseUrl: "js",

    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angularAMD': '../bower_components/angularAMD/angularAMD',
        'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls'
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'], 'angular-cookies': ['angular'],
            'angular-bootstrap': ['angular'] },

    deps: ['app']
});

require(
    [
        'app',
        'services',
        'controllers/nav',
        'services/error'
    ]);
