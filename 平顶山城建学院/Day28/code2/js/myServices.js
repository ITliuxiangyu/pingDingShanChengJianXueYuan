angular.module('myApp.service', [])
    .value('HomeModel', { num: 0, isFirst: true })
    .factory('HomeFactory', ['$http', '$rootScope', 'HomeModel', function ($http, $rootScope, HomeModel) {

        alert(HomeModel.num);

        return {

            /*
            * 设置url, 并返回url
            * 参数是数字
            * */
            setUrl: function (num) {
                return "http://localhost:3000?myUrl=http://c.m.163.com/nc/article/headline/T1348647853363/0-" + num + ".html&callback=JSON_CALLBACK";
            },


            /*
            *  请求
            *  参数是url字符串
            * */
            ajaxRequest: function (urlStr) {

                $http({
                    method: "jsonp",
                    url: urlStr
                }).then(function success(result) {
                    $rootScope.$broadcast('success', result);
                }, function error(e) {
                    $rootScope.$broadcast('error', e);
                });

            }
        };



    }]);