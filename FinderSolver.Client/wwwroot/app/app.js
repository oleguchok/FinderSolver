(function() {
    'use strict';

    angular.module('finderSolver', [
            'ngRoute',
            'ngStorage',
            'ngFlash',
            'vk-api-angular',
            'finderSolver.login'
        ])
        .config(vkConfig)
        .config(exceptionConfig)
        .run(run);

    vkConfig.$inject = ['VKApiProvider'];

    function vkConfig(VKApiProvider) {
        VKApiProvider.init(6065292);
    };

    exceptionConfig.$inject = ['$provide'];

    function exceptionConfig($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    };

    extendExceptionHandler.$inject = ['$delegate'];

    function extendExceptionHandler($delegate) {
        return function(exception, cause) {
            $delegate(exception, cause);
            console.log('in custome exception handler');
        };
    };

    run.$inject = ['$rootScope', '$location', '$localStorage'];

    function run($rootScope, $location, $localStorage) {
        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            var availablePages = ['/', '/login'];
            var isRestrictedPage = availablePages.indexOf($location.path()) === -1;
            var isGuest = angular.isUndefined($localStorage.vkSession);
            if (isGuest && isRestrictedPage) {
                $location.path('/login');
            }
        });
    };
}());