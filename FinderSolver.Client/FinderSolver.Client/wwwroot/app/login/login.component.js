(function() {
    'use strict';

    angular
        .module('login')
        .component('login', login());


    function login() {

        function loginController() {
            var vm = this;

            vm.loginTo = loginTo;

            function loginTo() {
                console.log('x');
            };

        }

        return {
            controller: loginController,
            controllerAs: 'vm',
            templateUrl: "app/login/login.template.html"
        }
    }

}());