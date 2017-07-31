angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: "home.html",
            controller: "HomeController"
        });
        $routeProvider.when("/other", {
            templateUrl: "other.html",
            controller: "OtherController"
        });
        $routeProvider.otherwise("/home");

    }])
    .controller('HomeController', ['$scope', '$location', function ($scope, $location) {

        $scope.goToOtherView = function () {
          $location.path('/other');
        };

    }])
    .controller('ChildController', ['$scope', '$interval', function ($scope, $interval) {

        $scope.num = 0;
        var interval = $interval(function () {
            $scope.num++;
        }, 1000);

        // 切换路由时, 控制器会被销毁, 控制器会通过$broadcast传播一个名字为$destroy的消息, 
        // 在自作用域中可以监听到这则消息, 在自控制器中我们就可以做一些清理工作, 比如关闭定时器等
        $scope.$on('$destroy', function (evt, msg) {
           alert("父控制器完蛋了, 我也该收拾东西走人了");
            $interval.cancel(interval);
        });

    }])
    .controller('OtherController', ['$scope', function ($scope) {

        $scope.goBack = function () {

            window.history.go(-1);

        }

    }]);