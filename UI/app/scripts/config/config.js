(function () {
    'use strict';

    angular.module('products').config(Config);

    Config.$inject = ['$locationProvider'];

    function Config($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true
        });
    }
})();