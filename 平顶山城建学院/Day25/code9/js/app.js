angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                controller: "HomeController"
            })
            .state('other', {
                // url: "/other",
                // url: "/other/:id",
                // url: "/other/{id}",
                // 跟正则针对的是$location服务
                // url: "/other/{id: [0-9]}",
                // 查询参数
                // 这样写, 查询参数会暴露到地址栏中
                // url: "/other?id",
                url: "/other",
                // 把参数写到params对象中更安全(参照POST请求)
                params: {
                    id: "",
                    name: "",
                    age: ""
                },
                templateUrl: "other.html",
                controller: "OtherController",
                // 进入页面会走该方法
                onEnter: function () {
                  alert('进入该页面');
                },
                onExit: function () {
                    alert("离开此页面?");
                }

                // 离开页面会走该方法
            });
        $urlRouterProvider.otherwise('/home');

    }])
    .controller('HomeController', ['$scope', '$location', '$state', function ($scope, $location, $state) {
        
        $scope.goToOtherView = function () {

            // 跟的是路由
            // $location.path('/other');
            // 跟的是状态
            // $state.go('other');

            // $location.path('/other/hello');
            // $state.go('other', {id: 124});

            // $location.path('/other/15');

            // 查询参数
            // $location.url("/other?id=123");

            $state.go("other", {id: 333});
        };
        
    }])
    .controller('OtherController', ['$scope', '$stateParams', function ($scope, $stateParams) {

        $scope.goBack = function () {
            window.history.go(-1);
        };
        console.log($stateParams.id);
        
    }]);