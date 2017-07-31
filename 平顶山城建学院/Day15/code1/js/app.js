angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/home', {
           templateUrl: 'home.html',
            controller: 'homeController',
            // 如果值为true, 每次查询参数发生改变都会引起路由刷新
            // 如果值为false, 查询参数发生改变不会引起路由变化
            reloadOnSearch: false,
        });

        // 添加hash前缀
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise('/home');

    }])
    .controller('homeController', ['$scope', '$location', function ($scope, $location) {

        console.log(1111);
        $scope.mine = {
            name: 'hello, 我是homeController',
            changeSearch: function () {

                var num = Math.floor(Math.random() * 101);

                // 修改查询参数
                $location.search('num=' + num);
            }
        }
    }]);
