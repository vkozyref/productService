(function () {
    'use strict';

    angular.module('products').controller('ProductsController', ProductsController);

    ProductsController.$inject = ['ProductsFactory'];

    function ProductsController(ProductsFactory) {
        var vm = this;       

        vm.searchProducts = searchProducts;
        vm.chooseCategory = chooseCategory;

        init();

        function init() {
            
        }

        function searchProducts() {
            
        }
        
        function chooseCategory() {
            
        }
    }
})();