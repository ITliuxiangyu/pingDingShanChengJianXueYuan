angular.module('myApp.headlineController', [])
    .controller('headlineController', ['$scope', '$http', '$location', function ($scope, $http, $location) {


        $scope.mine = {
            // 新闻列表
            newsList: [],
            
            goToDetailView: function (idStr) {
                $location.path("/detail/" + idStr);
            }
        };


        // 首页数据请求
        (function () {
            $http({
                method: 'jsonp',
                url: "http://localhost:3000?myUrl=" + "http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html" + "&callback=JSON_CALLBACK"
            }).then(function success(result) {

                result = result.data;
                // result 是数组
                result = result.T1348647853363;
                // 删除第一个元素
                result.splice(0, 1);

                $scope.mine.newsList = result;

                // console.log($scope.mine.newsList);

            }, function error(e) {
                console.log(e);
            });
        })();



    }]);