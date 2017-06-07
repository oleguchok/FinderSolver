(function() {
    'use strict';

    angular
        .module('finderSolver')
        .config(routerConfig)

    function routerConfig($routeProvider) {

        $routeProvider
            .when('/login', {
                template: '<login></login>'
            })
            .otherwise({
                template: '<login></login>'
            });
    }

}());