/**
 * Created by zhangzheng on 16/10/7.
 */
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        // 第一个参数: 路径(地址栏中#号后面的内容), 第二个参数: 路径对应的模板和控制器
        $routeProvider.when('/home', {

            // 模板的路径
            templateUrl: 'home.html',
            // 模板对应的控制器, 这样写相当于以前我们写的 ng-controller, 该模板里面我们可以使用该控制器中作用域的方法和属性
            controller: 'homeController'

        });

        // 其它情况显示的模板和模板对应的控制器(参数可以是字符串或对象, 后面详细介绍)
        $routeProvider.otherwise('/home');


    }])
    .controller('homeController', ['$scope', function ($scope) {


        $scope.mine = {
            name: "大家好, 我是home页面!!!"
        };

    }]);
