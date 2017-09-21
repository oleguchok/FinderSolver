(function() {
    'use strict';

    angular
        .module('finderSolver.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'authService', 'flashService'];

    function LoginController($location, authService, flashService) {
        var vm = this;

        vm.loginTo = login;

        init();

        function init() {
            authService.logout();
        }

        function login() {
            authService
                .login()
                .then(function(response) {
                    $location.path('/');
                })
                .catch(function(reason) {
                    flashService.showError(reason);
                });
        };
    }
}());