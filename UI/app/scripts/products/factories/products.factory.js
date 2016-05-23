(function () {
    'use strict';

    angular.module('products').factory('ProductsFactory', ProductsFactory);

    ProductsFactory.$inject = ['ServerCallFactory', 'AppConfig'];

    function ProductsFactory(ServerCallFactory, AppConfig) {
        var service = {
            getProducts: getProducts,
            getProductsByCategory: getProductsByCategory,
            getProductCategories: getProductCategories
        };

        return service;

        function getProducts(searchText) {
            return ServerCallFactory.get(AppConfig.api.products.byDefault, {text: searchText || ''});
        }
        
        function getProductsByCategory(categoryId) {
            return ServerCallFactory.get(AppConfig.api.products.byDefault + '/' + categoryId);
        }
        
        function getProductCategories() {
            return ServerCallFactory.get(AppConfig.api.products.categories);
        }
    }
})();