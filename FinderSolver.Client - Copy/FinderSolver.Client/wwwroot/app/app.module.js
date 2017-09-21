(function() {
    'use strict';

    angular.module('finderSolver', [
        'ui.router',
        'login',
        'vk-api-angular'
    ]);

    angular.module('finderSolver')
        .config(function (VKApiProvider) {
            VKApiProvider.init(6065292);
        });

})();
