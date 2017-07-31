angular.module('myApp.nav', [])
    .controller('NavgationController', ['$scope', function ($scope) {

        $scope.$on('xiaoming', function (evt, msg) {
            alert('爷控制器NavigationController收到了' + msg);
        });

    }]);