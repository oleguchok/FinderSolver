(function() {
    'use strict';

    angular
        .module('finderSolver')
        .service('authService', authService);

    authService.$inject = ['$localStorage', '$q', 'VKApi'];

    function authService($localStorage, $q, VKApi) {
        this.login = login;
        this.logout = logout;
        this.currentUser = currentUser;

        ////////////////

        function login() {
            return VKApi.Auth.login({
                photos: true
            }).then(
                function(response) {
                    $localStorage.vkSession = response;
                    return response;
                },
                function(response) {
                    var deferred = $q.defer();
                    deferred.reject(response);                    
                    return deferred.promise;
                }
            )
        };

        function logout() {
            if (!angular.isUndefined) {
                delete $localStorage.vkSession;
            }
        }

        function currentUser() {
            if ($localStorage.vkSession) {
                return $localStorage.vkSession.session.user;
            } else {
                return {};
            }
        }
    };
})();