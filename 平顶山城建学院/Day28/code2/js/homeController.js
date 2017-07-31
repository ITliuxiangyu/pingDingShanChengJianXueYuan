angular.module('myApp.home', [])
    .value('MyFactory', { num: 0, isFirst: true })
    .controller('HomeController', ['$scope', '$http', '$ionicScrollDelegate', 'MyFactory', function ($scope, $http, $ionicScrollDelegate, MyFactory) {

        var url = "http://localhost:3000?myUrl=" + "http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html&callback=JSON_CALLBACK";

        $ionicScrollDelegate.$getByHandle('waige').scrollBottom();

        $scope.obj = {
            listArr: [],
            isFirst: !MyFactory.isFirst,
            switch: true
        };

        doRefresh();
        $scope.doRefresh = doRefresh;
        function doRefresh() {

            MyFactory.num = 0;

            // 注意, 请求数据成功或者失败以后一定要停止刷新
            $http({
                url: url,
                method: "jsonp"
            }).then(function success(result) {

                console.log(result);

                var dataArr = result.data.T1348647853363;
                dataArr.splice(0, 1);
                $scope.obj.listArr = dataArr;

                $scope.obj.isFirst = true;

                // 停止刷新
                $scope.$broadcast("scroll.refreshComplete");

            }, function error(e) {
                console.log(e);

                // 停止刷新
                $scope.$broadcast("scroll.refreshComplete");
            });
        };


        $scope.loadMore = loadMore;
        

        function  loadMore() {



            if (MyFactory.isFirst) {
                MyFactory.isFirst = false;

                // 结束刷新
                $scope.$broadcast('scroll.infiniteScrollComplete');
                return;
            }

            if ($scope.obj.switch) {
                $scope.obj.switch = false;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            } else {
                return;
            }

            console.log(1111);

            MyFactory.num += 20;

            // 上拉加载更多
            var moreUrl = "http://localhost:3000?myUrl=" + "http://c.m.163.com/nc/article/headline/T1348647853363/" + 0 + '-' + MyFactory.num + ".html&callback=JSON_CALLBACK";

            $http({

                url: moreUrl,
                method: "jsonp"

            }).then(function success(result) {


                $scope.obj.switch = true;

                var dataArr = result.data.T1348647853363;

                console.log(dataArr.length);

                // 拼接数据
                $scope.obj.listArr = $scope.obj.listArr.concat(dataArr);



                // 结束刷新
                $scope.$broadcast('scroll.infiniteScrollComplete');

                // 如果没有数据了, 就把上拉加载更多控件删除
                // 本来该这样写, 但是网易接口0-80请求不到数据, 大家一定要知道我们的思想
                // if (dataArr.length < 20) {
                //     $scope.obj.isFirst = false;
                // }
                if (MyFactory.num == 140) {
                    $scope.obj.isFirst = false;
                }


            }, function error(e) {

                $scope.$broadcast('scroll.infiniteScrollComplete');

            });


        }



    }]);