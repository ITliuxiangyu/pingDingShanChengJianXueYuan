angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('aaa', {
                url: "/home",
                templateUrl: "home.html"
            });
        // 意外跳转方式
        // $urlRouterProvider.otherwise("/home");
        // $urlRouterProvider.otherwise("home");
        // $urlRouterProvider.otherwise(function ($injector, $location) {
        //
        //     $location.path('/home');
        //    
        // });


        // 第一个参数: 给空字符串, 想要匹配的入口路径
        // 第二个参数: 重新指向的路由
        // $urlRouterProvider.when('', 'home');
        $urlRouterProvider.when('', function () {
            // 如果第二个参数是函数, 我们需要返回路由路径
            return "home";
        });
        
        // rule()
        // $urlRouterProvider.rule(function ($injector, $location) {
        //     return "/home";
        // });

        // uiRouter 理念: 管理状态, 路由辅助
        



    }])