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
    .controller('HomeController', ['$scope', function ($scope) {

        $scope.scroll = function () {
            console.log(11111);
        };
        $scope.scrollComplete = function () {
            alert("滚动完成");
        };

    }]);