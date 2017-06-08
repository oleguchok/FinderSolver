(function() {
    'use strict';

    angular
        .module('finderSolver')
        .component('login', login());

    login.$inject = ['apiService'];

    function login() {

        function loginController(apiService) {
            var vm = this;

            vm.loginTo = loginTo;

            function loginTo() {
                console.log('x');
                apiService.get('https://oauth.vk.com/authorize', 
                    { params: {
                        clientId:6065292,
                        redirect_uri: 'http://localhost:5000/',
                        display: 'popup'
                    }}, getResult, getResult);
            };

            function getResult(result){
                console.log(result);
            }

        }

        return {
            controller: loginController,
            controllerAs: 'vm',
            templateUrl: "app/login/login.template.html"
        }
    }

}());