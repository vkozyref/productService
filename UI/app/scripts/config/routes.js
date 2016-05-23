(function () {
    'use strict';

    angular.module('products').config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {
        $stateProvider.
            state('products', {
                templateUrl: 'app/products/products.html',
                controller: 'ProductsController as productsCtrl',
                url: '/'
            });

        $urlRouterProvider.otherwise('/');
    }
})();