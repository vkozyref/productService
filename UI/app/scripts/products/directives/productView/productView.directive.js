(function () {
    'use strict';

    angular.module('users').directive('search', search);

    search.$inject = ['AppConfig'];

    function search(AppConfig) {
        return {
            scope: {
                productEntity: '='
            },
            restrict: 'E',
            templateUrl: AppConfig.templates.productView
        }
    }
})();