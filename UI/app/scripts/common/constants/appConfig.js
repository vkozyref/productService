(function () {
    'use strict';

    angular.module('products').constant('AppConfig', new AppConfig());
    
    function AppConfig() {
        this.api = {
            products: {
                byDefault: 'api/products',
                validateEmacategoriesil: 'api/products/categories'
            }
        };
        
        this.templates = {
            search: 'app/products/directives/search/search.tpl.html',
            productView: 'app/products/directives/productView/productView.tpl.html'
        };
    }
})();