angular.module('myApp', [])
.controller('MyController', ['$scope', function ($scope) {

    $scope.name = "suibian";
    
}])
.directive('myDirectiveFalse', function () {

    return {

        restrict: "A",
        template: "<input ng-model='name'>"
        
    };
    
})
.directive('myDirectiveTrue', function () {

    return {

        restrict: "A",
        // 作用域, 值可以为bool, 也可以为对象, 默认值为false
        scope: true,
        template: "<input ng-model='name'>"

    }
    
})
.controller('TrueController', ['$scope', function ($scope) {

    // $scope.mine = {
    //     name: "66666"
    // };
    $scope.name = "555";
    
}]);