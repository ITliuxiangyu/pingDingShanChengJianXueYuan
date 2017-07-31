angular.module('myApp.home', [])
    .controller('HomeController', ['$scope', '$http', 'HomeModel', 'HomeFactory', function ($scope, $http, HomeModel, HomeFactory) {

        $scope.obj = {
            listArr: [],
            isFirst: !HomeModel.isFirst,
            switch: true,
            isDown: true
        };

        $scope.doRefresh = doRefresh;

        doRefresh('down');
        function doRefresh(str) {

            if (str == "down") {
                // 下拉
                HomeModel.num = 20;
                $scope.obj.isDown = true;
            } else {

                $scope.obj.isDown = false;

                // 判断是不是第一次进来
                if (HomeFactory.isFirst) {
                    HomeFactory.isFirst = false;
                    // 结束刷新
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    return;
                }

                // 上拉加载数据, 如果数据请求不成功就不能上拉
                if ($scope.obj.switch) {
                    $scope.obj.switch = false;
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                } else {
                    return;
                }

                HomeModel.num += 20;
            }
            // 设置url
            var urlStr = HomeFactory.setUrl(HomeModel.num);

            // 网络请求
            HomeFactory.ajaxRequest(urlStr);
        }

        // 请求数据成功
        $scope.$on('success', function (evt, result) {

            var dataArr = result.data.T1348647853363;
            if ($scope.obj.isDown) {

                dataArr.splice(0, 1);
                $scope.obj.listArr = dataArr;
                $scope.obj.isFirst = true;

                // 停止下拉刷新
                $scope.$broadcast("scroll.refreshComplete");
            } else {
                $scope.obj.switch = true;
                // 拼接数据
                $scope.obj.listArr = $scope.obj.listArr.concat(dataArr);

                // 结束刷新
                $scope.$broadcast('scroll.infiniteScrollComplete');

                if (HomeModel.num == 140) {
                    $scope.obj.isFirst = false;
                }
            }
        });

        // 监听错误方法
        $scope.$on('error', function (evt, msg) {
            if ($scope.obj.isDown) {
                // 停止下拉刷新
                $scope.$broadcast("scroll.refreshComplete");
            } else {
                // 结束刷新
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }
        });
    }]);