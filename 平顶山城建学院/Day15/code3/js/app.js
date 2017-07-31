angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home/:name', {
        
        templateUrl: 'home.html',
        controller: 'homeController'
        
    });

    $routeProvider.when('/user', {
       templateUrl: 'user.html',
        controller: 'userController'
    });
    $routeProvider.otherwise('/home/hello');
}])
.controller('homeController', ['$scope', '$location', function($scope, $location) {

    // $location 实际上是 angular对 原生 window下的location对象的一个封装
    // $location 没有刷新页面的功能, 如果需要刷新页面可以注入$window, $window.location.reload()
    // console.log($location);

    // 路由路径
    console.log($location.path());

    // 获取编码后的完整网址
    console.log($location.absUrl());

    // 主机名
    console.log($location.host());

    // 端口号
    console.log($location.port());

    // 协议
    console.log($location.protocol());

    // 设置查询串
    $location.search('num=5');

    // 获取查询串
    console.log($location.search());

    // 获取路径, hash, 查询参数
    console.log($location.url());

    // 设置查询参数, 路径, 返回$location对象
    $location.url("/user?name=waige");


    $scope.mine = {
        name: "hello, 我是homeController",
        goToUserView: function () {
            // .replace, 防止浏览器通过历史记录的方式回退到该页面( history.go(-1) )
            // 场景eg: 比如登录页面以后不让用户返回到登录页面
            $location.path('/user').replace();
        }
    };
    
    
}])
    .controller('userController', ['$scope', '$location', function ($scope, $location) {

        $scope.mine = {
            name: "hi, 我是userController",
            goBack: function () {
                $location.path('/home/张三');
            }
        };

    }]);
