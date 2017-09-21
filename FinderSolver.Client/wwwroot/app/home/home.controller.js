(function() {
    'use strict';

    angular
        .module('finderSolver')
        .controller('HomeController', HomeController)

    HomeController.$inject = ['$localStorage'];

    function HomeController($localStorage) {
        var vm = this;

        vm.user = null;

        init();

        function init() {
            if (!angular.isUndefined($localStorage.vkSession)) {
                vm.user = $localStorage.vkSession.session.user;
            }
        }

    }

}());