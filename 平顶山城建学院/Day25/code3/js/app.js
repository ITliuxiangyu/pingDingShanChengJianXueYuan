angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
        // 第一个参数是状态, 而不是路由, 一般情况下名字和路由的名字一样
        // ui-router是ng-route的一个升级版, 基于状态机来组织接口, 
        // 而不是简单的URL路由, 基于ngRoute的, 能完成一些场景的功能
        // (有很多优秀的特性, 比如ui-view嵌套, ngRoute是无法实现ui-view嵌套的), 尤其是在手机上
            .state('aaa', {
                // 路由
                url: "/home",
                // 这里的属性都和之前ngRoute用法基本一致
                // template: "",
                templateUrl: "home.html",
                // controller: "",
                // resolve: {
                //
                // }
            })
            .state('bbb', {

                url: "/other",
                templateUrl: "other.html"

            });
        // 意外跳转
        // ngRoute 默认跳转路由 "/", 如果when方法中有"/"路由,
        //  即使不写意外跳转页能跳转到相应页面, 但是uiRouter不行, 必须写意外跳转
        // $urlRouterProvider.otherwise("/home");
        $urlRouterProvider.otherwise("home");

    }])