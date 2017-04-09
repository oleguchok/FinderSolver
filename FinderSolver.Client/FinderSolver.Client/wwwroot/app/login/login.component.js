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
                constole.log('x');
            };

        }

        return {
            controller: loginController,
            templateUrl: "app/login/login.template.html"
        }
    }

}());