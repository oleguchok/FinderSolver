(function() {
    'use strict';

    angular
        .module('login')
        .component('login', login());


    function login() {

        function loginController() {

        }

        return {
            controller: loginController,
            templateUrl: "app/login/login.template.html"
        }
    }

}());