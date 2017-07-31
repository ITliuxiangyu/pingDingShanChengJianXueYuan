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
    .controller('OtherController', ['$scope', '$ionicModal', function ($scope, $ionicModal) {

        $ionicModal.fromTemplateUrl('home.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            console.log(111);
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            console.log(222);
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            console.log(333);
            $scope.modal.hide();
        };
        //当我们用到模型时，清除它！
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // 当隐藏的模型时执行动作
        $scope.$on('modal.hide', function() {
            // 执行动作
        });
        // 当移动模型时执行动作
        $scope.$on('modal.removed', function() {
            // 执行动作
        });


    }])
    .controller('HomeController', ['$scope', '$ionicModal', function ($scope, $ionicModal) {

        $ionicModal.fromTemplateUrl('other.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            console.log(111);
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            console.log(222);
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            console.log(333);
            $scope.modal.hide();
        };
        //当我们用到模型时，清除它！
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // 当隐藏的模型时执行动作
        $scope.$on('modal.hide', function() {
            // 执行动作
        });
        // 当移动模型时执行动作
        $scope.$on('modal.removed', function() {
            // 执行动作
        });


    }]);