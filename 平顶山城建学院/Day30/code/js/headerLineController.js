angular.module('myApp.header', [])
    .controller('HeaderLineController', ['$scope', '$state', function ($scope, $state) {

        $scope.enterDetail = function (str) {
            $state.go('tab.headDetail', {id: str});
        };

        $scope.emitSome = function () {
            $scope.$emit("xiaoming", "100元");
        };

    }]);