angular.module('myApp.tab', [])
    .controller('TabBarController', ['$scope', function ($scope) {

        $scope.$on('xiaoming', function (evt, msg) {
            alert('父控制器tabBarController收到了' + msg);
        });

    }]);