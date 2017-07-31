angular.module('myApp', ['ionic', 'myApp.tab', 'myApp.header', 'myApp.headDetail', 'myApp.nav'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            // tabBarController
            .state('tab', {
                url: "/tab",
                templateUrl: "templates/tab.html",
                abstract: true,
                // 父控制器
                controller: "TabBarController"
            })
            // 网易tabBar
            .state('tab.headerLine', {
                url: "/headerLine",
                views: {
                    "tab-news": {
                        templateUrl: "templates/headerLine.html",
                        controller: "HeaderLineController"
                    }
                }
            })
            // 详情
            .state('tab.headDetail', {
                url: "/headDetail",
                views: {
                    'tab-news': {
                        templateUrl: "templates/headDetails.html",
                        controller: "HeadDetailController"
                    }
                },
                params: {
                    id: ""
                }
            })

        $urlRouterProvider.otherwise('/tab/headerLine');





    }]);