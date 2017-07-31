angular.module('myApp', ["ngRoute"])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when("/home", {

            templateUrl: "home.html",
            controller: "HomeController"


        });
        $routeProvider.otherwise("/home");

    }])
    .controller('HomeController', ['$scope', function ($scope) {

        $scope.content = "Hello, 大家好";
        
    }])
    .controller('ParentController', ['$scope', function ($scope) {

        // 模板加载完成的时候会走该方法
        // 当替换模板的时候 
        // ng-view指令中的作用域会 使用 $emit传播该事件(从子作用域向父作用域传播), 
        // 在父作用域中可以监听到此事件
        $scope.$on('$viewContentLoaded', function (event, msg) {
            console.log(msg);
            alert("111111111");
            event.stopPropagation();
        });
        
    }]);
