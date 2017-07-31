angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {

            // 这种模板方式也可以
            // template: "<div>我也是一个小模板</div>",

            // 这种方式经常使用
            templateUrl: 'home.html',

            // controller 后面可以跟字符, 也可以跟函数
            // controller: 'homeController'

            controller: function ($scope, $location) {
                $scope.mine = {
                    name: '我是通过函数创建出来的',
                    goToUserView: function () {
                        $location.path('/user');
                    }
                };
            }



        });
        $routeProvider.when('/user', {
            templateUrl: 'user.html',
            controller: 'userController'
        });
        // 如果不写, 默认值为 '/'
        $routeProvider.otherwise('/home');



    }])
    .controller('homeController', ['$scope', '$location', function($scope, $location) {

        $scope.mine = {
            name: 'hello, 我是home页面',
            goToUserView: function () {
                console.log($location.path());
                // 通过.path()方法就可以修改路由路径
                $location.path('/user');
            }
        };

        
    }])
    .controller('userController', ['$scope', '$location', function ($scope, $location) {

        $scope.mine = {
            name: "hello, 我是user页面",
            goBack: function () {
                $location.path('/home');
            }
        };

    }]);

