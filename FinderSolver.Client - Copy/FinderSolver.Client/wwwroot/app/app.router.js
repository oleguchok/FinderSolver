(function() {
    'use strict';

    angular
        .module('finderSolver')
        .config(routerConfig)

    function routerConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: "app/login/login.template.html"
            });
    }
}());