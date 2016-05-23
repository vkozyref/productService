(function () {
    'use strict';

    angular.module('products').factory('ServerCallFactory', ServerCallFactory);

    ServerCallFactory.$inject = ['AppConfig', '$http'];

    function ServerCallFactory(AppConfig, $http) {
        var service = {
            get: get,
            post: post,
            put: put,
            del: del
        };

        return service;

        function get(url, urlParams, headers) {
            return call(url, urlParams, null, headers, 'get');
        }

        function post(url, body, urlParams, headers) {
            return call(url, urlParams, body, headers, 'post');
        }

        function put(url, body, urlParams, headers) {
            return call(url, urlParams, body, headers, 'put');
        }

        function del(url, urlParams, headers) {
            return call(url, urlParams, null, headers, 'delete');
        }

        function call(url, urlParams, body, headers, method) {

            var uri = buildUri(url, urlParams);

            return $http({
                url: uri,
                data: body,
                method: method,                
                headers: headers
            });
        }

        function buildUri(baseUrl, params) {
            if (params) {
                baseUrl += '?' + Object.keys(params).map(function (key) {
                    return key + '=' + params[key];
                }).join('&');
            }

            return baseUrl;
        }
    }
})();