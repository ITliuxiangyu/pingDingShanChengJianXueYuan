angular.module('myApp', ['ionic'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                controller: "HomeController"
            });
        $urlRouterProvider.otherwise('/home');


    }])
    .controller('HomeController', ['$scope', '$ionicSideMenuDelegate', function ($scope, $ionicSideMenuDelegate) {

        $scope.waigeLT = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };


    }]);