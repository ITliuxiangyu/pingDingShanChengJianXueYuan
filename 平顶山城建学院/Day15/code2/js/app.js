angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        });

        $routeProvider.when('/user/:name', {
            templateUrl: 'user.html',
            controller: 'userController'
        });
        $routeProvider.otherwise('/home');
        
    }])
    .controller('homeController', ['$scope', '$location', function ($scope, $location) {

        $scope.mainModel = {
            name: 'hello, 我是homeController'
            // animal: 'dog'
        };
        
        $scope.mainModel.goToUserView = function () {
            $location.path('/user/' + $scope.mainModel.animal);
        }
        
    }])
    .controller('userController', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {


        $scope.mainModel = {
            name: $routeParams.name == "undefined" ? false : $routeParams.name,
            goBack: function () {

                $location.path('/home');
            }
        };
    }]);
