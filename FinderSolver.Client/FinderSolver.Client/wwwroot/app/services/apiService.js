(function() {
    'use strict';

    angular
        .module('finderSolver')
        .service('apiService', apiService)

    apiService.$inject = ['$http'];
    
    function apiService($http){

        this.get = function get(url, config, success, failure) {
            return $http.get(url, config)
                    .then(function (result) {
                        success(result);
                    }, function (error) {
                        failure(error);
                    });
        }
    }

})();