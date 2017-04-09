(function() {
    'use strict';

    angular
        .module('finderSolver')
        .config(routerConfig)

    function routerConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'index.html'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.template.html'
            });
    }

}());