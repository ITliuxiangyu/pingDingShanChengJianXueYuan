angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                /*
                 * abstract属性表示抽象模板永远不能被激活,但是可以设置被激活的子节点
                 * 可以使用抽象模板提供一个模板包装器来包裹多个命名视图,或者传递$scope给子节点,你还可以使用它们来传递解析后的依赖或者自定义数据
                 * */

                // abstract: true,
                templateUrl: "home.html",
                controller: function ($scope) {
                    $scope.name = "waige";
                }
            })
            // 通过 .语法的方式实现ui-view的嵌套, home里面的ui-view承载的模板就是other.html
            .state('home.other', {
                url: "/other",
                templateUrl: "other.html"
            });
        // $urlRouterProvider.otherwise("/home/other");

        $urlRouterProvider.otherwise('/home');


    }]);