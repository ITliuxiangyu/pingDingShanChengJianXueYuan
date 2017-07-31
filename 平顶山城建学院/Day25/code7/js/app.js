angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('index', {
                url: "/index",
                // abstract: true,
                // templateUrl: "index.html",
                // 如果写了views属性, template和templateUrl将失效
                views: {
                    home: {
                        templateUrl: "home.html"
                    },
                    other: {
                        templateUrl: "other.html"
                    }
                }
            });
        $urlRouterProvider.otherwise('/index');



    }]);