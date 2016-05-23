(function () {
    'use strict';

    angular.module('users').directive('search', search);

    search.$inject = ['AppConfig'];

    function search(AppConfig) {
        return {
            scope: {
                searchValue: '=',
                searchHandler: '&'
            },
            link: link,
            restrict: 'E',
            templateUrl: AppConfig.templates.search
        }

        function link(scope) {
            scope.processSearch = processSearch;

            function processSearch() {
                _.debounce(function () {
                    scope.$apply(scope.searchHandler);
                }, 400)();
            }
        }
    }
})();