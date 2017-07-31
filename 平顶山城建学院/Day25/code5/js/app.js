angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html",

                resolve: {
                    myFoo: "foo",
                    // 在这里, 我们可以使用上面的属性, 这里面和ngRoute里面是不一样的, 上面的key就是服务的名字
                    getName: function (myFoo) {
                        return myFoo.name;
                    },
                    // 如果返回的对象是一个promise, 那么该对象就会在控制器实例化之前解析
                    setHttp: function ($http) {
                       return $http({
                            url: "js/wy.json",
                            method: "get"
                        });
                    },
                    getData: function (setHttp) {
                        return setHttp.data;
                    }

                },
                controller: "HomeController"
            })
            .state('other', {
                url: "/other",
                templateUrl: "other.html"
            });
        $urlRouterProvider.otherwise("/home");


    }])
    .factory('foo', function () {
        return {
            name: "小强",
            age: 18
        };
    })
    .controller('HomeController', ['$scope', 'myFoo', 'getName', 'setHttp', 'getData', function ($scope, myFoo, getName, setHttp, getData) {

        console.log(myFoo);
        console.log(getName);
        console.log(setHttp.data);
        console.log(getData);


    }]);