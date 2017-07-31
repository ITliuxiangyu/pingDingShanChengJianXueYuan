angular.module('myApp', [])
    .directive('mySeperate', function () {

        return {
            restrict: 'A',
            scope: {},
            template:"<input ng-model='name'>"
        };
        
    })
    .controller('SeperateController', ['$scope', function ($scope) {
        $scope.name = "Hello, 大家好";
    }])
    .directive('myInput', function () {
        return {
            restrict: "A",
            // 值如果是@, 单向数据绑定
            scope: {waige: "@"},
            template: "<input ng-model='waige'>"
        };
    })
    .directive('myHello', function () {

        return {

            restrict: "A",
            // 如果值为 "=" 双向数据绑定
            scope: {
                color: '=',
                click: '&'
            },
            template: "<input ng-model='color'>\
                        <button ng-click='click()'>点击</button>"


        };

    })
    .controller('HelloController', ['$scope', function ($scope) {

        $scope.color = "red";
        $scope.go = function () {
          alert(22222);
        };

        
    }])
