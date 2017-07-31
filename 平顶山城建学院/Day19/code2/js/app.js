angular.module('myApp', [])
    .directive('myDirective', function () {

        // angular的生命周期: 在angular功能启动前, angular是以html文本的格式存储在编译器中, 应用启动后会进行编译和链接, 作用域会同HTML进行绑定, 应用会对用户对html的操作做出响应

        return {


            restrict: "A",
            
            controller: function ($scope) {

                console.log("11111111");

            },
            //
            // compile: function (element, attr) {
            //
            //
            //     console.log("$scope没有注入到DOM元素中");
            //
            //     // 返回的起始就是link函数
            //     return function ($scope, element, attr) {
            //
            //         console.log("$scope 已经 注入到 DOM 元素中");
            //
            //     };
            //
            //
            // },
            // 当有require属性的时候, 第四个参数才会存在
            // 如果compile函数存在, 就不走link函数
            link: function ($scope, element, attr, controller) {

                console.log('当有compile函数的时候, 这里会执行吗?');


            }


            

        };








    });