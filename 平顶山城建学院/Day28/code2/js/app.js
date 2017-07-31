angular.module('myApp', ['ionic', 'myApp.home', 'myApp.service'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                controller: "HomeController"
            });
        $urlRouterProvider.otherwise('/home');


    }]);