/**
 * Created by zhangzheng on 16/10/7.
 */
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController',
            resolve: {
                // 该对象的所有属性和方法都可以注入到homeController中使用
                // 属性的值必须是服务的名字
                coolBoy: 'CoolBoy',
                // 函数的参数必须是服务的名字
                getDataFromJSON: function (GetData) {
                    return GetData;
                },
                recieveData: function (GetDataTwo) {
                    return GetDataTwo.getDataFromFile;
                }
            }
        });
        $routeProvider.when('/user', {
            templateUrl: 'user.html',
            controller: 'userController'
        });
        $routeProvider.when('/other', {
            templateUrl: 'other.html',
            // 控制器可以使用多次的
            controller: 'userController'
        });

        $routeProvider.otherwise('/home');

        
    }])
    .factory('CoolBoy', function () {
        return "aaaa";
    })
    .factory('GetData', ['$http', function ($http) {

        return function () {
            // $http.get('js/wy.json')
            return $http({method: 'get', url: 'js/wy.json'});
        };

    }])
    .factory('GetDataTwo', ['$http', function ($http) {
        return {
            getDataFromFile: $http({method: 'get', url: 'js/wy.json'})
        };
    }])
    .controller('homeController', ['$scope', '$location', 'coolBoy', 'getDataFromJSON', 'recieveData', function ($scope, $location, coolBoy, getDataFromJSON, recieveData) {

        alert(coolBoy);
        getDataFromJSON().success(function(data) {
            console.log(data);
        });
        console.log('------------------------');
        console.log(recieveData.data);

        $scope.mine = {

            name: '我是homeController',
            goToUserView: function () {
                $location.path('/user');
            }

        };


    }])
    .controller('userController', ['$scope', '$location', function ($scope, $location) {

        $scope.mine = {
            name: '我是userController',
            goBack: function () {
                $location.path('/home');
            }
        };

    }]);