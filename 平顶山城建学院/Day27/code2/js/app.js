angular.module('myApp', ['ionic'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html"
            });
        $urlRouterProvider.otherwise("/home");

    }]);