angular.module('myApp', ['ionic'])
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
        $urlRouterProvider.otherwise('/home');


    }])
    .controller('HomeController', ['$scope', function ($scope) {
        


    }])
    .controller('OtherController', ['$scope', function ($scope) {



    }]);