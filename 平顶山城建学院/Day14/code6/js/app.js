/**
 * Created by zhangzheng on 16/10/7.
 */
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        });
        // /:后面的是参数
        $routeProvider.when('/user/:name/:password', {
            templateUrl: 'user.html',
            controller: 'userController',
            // 重新指向, 会触发路由重新指向新的模板
            redirectTo: '/user/a/b'
            // 第一个参数: 对象, 里面的属性都是路由参数
            // 第二个参数: 路由路径
            // 第三个参数: 查询串对象
            // redirectTo: function (a, b, c) {
            //     console.log(a, b, c);
            //     return '/home';
            // }
        });

        $routeProvider.otherwise('/home');

        // 参数可以是字符串, 也可以是对象
        // $routeProvider.otherwise({ redirectTo: '/home' });
    }])
    .controller("homeController", ['$scope', '$location', function ($scope, $location) {
        
        $scope.mine = {
            name: 'hello, 我是homeController',
            goToUserView: function () {
                alert(111);
                // 设置查询串
                $location.search('mima=111');
                $location.path('/user/张三/123456');
            }
        }


    }])
    .controller('userController', ['$scope', '$location', function ($scope, $location) {

        $scope.mine = {
            name: "hello, 我是userController",
            goBack: function () {
                $location.path('/home');
            }
        };

    }]);
