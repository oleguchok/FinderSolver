(function() {
    'use strict';

    angular
        .module('finderSolver')
        .component('login', login());

    login.$inject = ['apiService', 'VKApi'];

    function login() {

        function loginController(apiService, VKApi, $http) {
            var vm = this;

            vm.loginTo = loginTo;

            function loginTo() {
                console.log('x');

                VKApi.Auth.login({
                    photos: true
                }).then(
                    function (response) {
                        console.log(response);
                        console.log("success");
                    },
                    function (response) {
                        console.log(response);
                        console.log("error");
                    }
                )

                // VK.Auth.login(callback, 2);

                // VK.Api.call('users.get', {user_ids: 6492}, function(r) {
                //     if(r.response) {
                //         alert('Привет, ' + r.response[0].first_name);
                //     }
                // });

                // function callback(data) {
                //     console.log(data);
                // }
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