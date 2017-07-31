angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        
        // 配置路由
        $routeProvider.when('/home', {
            templateUrl: "home.html",
            controller: "HomeController",
            // 该属性特点: 列表(对象中的key值)可以注入到控制器中使用, 如果key对应的值为字符串, 那么字符串的值必须是服务的名字, 如果是函数呢, 函数的参数也必须是服务的名字
            // resolve: {
            //     // 这里面b必须是服务的名字
            //     a: "b"
            //
            // }
        });
        $routeProvider.when('/other', {
            templateUrl: "other.html",
            controller: "OtherController"
        });
        $routeProvider.otherwise("/home");
            
        
    }])
    .run(['$rootScope', function ($rootScope) {
        // 路由开始切换
        $rootScope.$on('$routeChangeStart', function (evt, next, current) {

            console.log("111111111111");
            // 第一个参数: 事件
            // 第二个参数: 要切换到的路由
            // 第一次进入该方法, 没有当前路由, 第三个参数为undefined
            console.log(evt, next, current);
            // alert(123);
            
        });
        // 路由切换成功以后
        $rootScope.$on('$routeChangeSuccess', function (evt, current, previous) {

            console.log("2222222222222");
            // 第一个参数: 事件
            // 第二个参数: 当前的路由
            // 第三个参数: 上一个路由
            console.log(evt, current, previous);
            
        });
        // 路由切换失败(比如resolve中有错误等等, 都会导致路由切换失败)
        $rootScope.$on('$routeChangeError', function (evt, msg) {
            console.log("33333333333333");
            console.log(evt, msg);

        });

        // 当$location.path发生变化或者$location.url发生变化是触发
        $rootScope.$on('$locationChangeStart', function (evt, msg) {


            console.log("4444444444444444444");


        });

        // 当且仅当path或url变化成功以后会走
        $rootScope.$on('$locationChangeSuccess', function (evt, msg) {
            console.log("55555555555555555555");
        });
        
    }])
    .controller('HomeController', ['$scope', '$location', function ($scope, $location) {
        

        
    }])
    .controller('OtherController', ['$scope', function ($scope) {

    }])
    .controller("xxx" , function ($scope , $location) {
        $scope.goToOtherView = function () {
            $location.path('/other');
        };

        $scope.goBack = function () {
            // window.history.go(-1);
            $location.path('/home');
        };
    });