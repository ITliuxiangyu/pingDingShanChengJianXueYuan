angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                controller: "HomeController"
            })
            .state('other', {
                url: "/other",
                templateUrl: "other.html",
                controller: "OtherController"
            });
        $urlRouterProvider.otherwise("/home");



    }])
    .run(['$rootScope', function ($rootScope) {

        // 从一个状态过渡到另一个状态时触发这个事件
        $rootScope.$on('$stateChangeStart', function (evt, next, current) {

            console.log(11111111111111111);
            console.log(evt, next, current);

        });

        // 过渡完成时触发这个事件
        $rootScope.$on('$stateChangeSuccess', function (evt, msg) {
            console.log(22222222222222222);
        });

        // 状态过渡过程中发生错误时触发, 通常是模板不能被解析或者解析promise失败时触发
        $rootScope.$on('$stateChangeError', function (evt, msg) {
           console.log(33333333);

        });

        // 视图开始加载时
        $rootScope.$on('$viewContentLoading', function (evt, msg) {

            console.log("hhhhhhhh");
            alert("视图加载中。。。。");
            console.log(evt);

        });




    }])
    .controller('HomeController', ['$scope', '$state', function ($scope, $state) {

        $scope.goToOtherView = function () {
            $state.go('other');
        };

    }])
    .controller('OtherController', ['$scope', '$state', function ($scope, $state) {

        $scope.goBack = function () {
            $state.go('home');
        };


        // 视图加载完成
        $scope.$on('$viewContentLoaded', function (evt, msg) {
            alert('视图加载完成');
        });


    }]);