(function() {
    'use strict';

    angular
        .module('finderSolver')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "app/home/home.template.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            })

            .when('/login', {
                templateUrl: "app/login/login.template.html",
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            
            .otherwise('/');
    };

}());