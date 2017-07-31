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
    .controller('HomeController', ['$scope', '$ionicScrollDelegate', function ($scope, $ionicScrollDelegate) {

        $scope.mainScrollToTop = function () {
            $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
        };

        $scope.smallScrollToTop = function () {
            $ionicScrollDelegate.$getByHandle('smallScroll').scrollTop(true);
        }

        $scope.scroll = function () {
            // console.log(111);
            var position = $ionicScrollDelegate.$getByHandle('smallScroll').getScrollPosition();
            console.log(position.left, position.top);
        };
        

    }]);
