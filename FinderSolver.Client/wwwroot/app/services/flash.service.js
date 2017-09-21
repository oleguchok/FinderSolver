(function(){
    'use strict';

    angular
        .module('finderSolver')
        .factory('flashService', flashService)

    flashService.$inject = ['Flash']

    function flashService(Flash){

        return {
            showError: showError
        }

        function showError(message){
            var id = Flash.create('danger', message, 0, {}, true);
        }
    }

}());