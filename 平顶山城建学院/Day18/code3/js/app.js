angular.module('myApp', [])
    .directive('hello', function () {

        return {

            restrict: "A",
            // 值为指令的名字, 也可以是一个数组(数组的每一个成员都是其它指令的名字)

            // 在同级指令寻找控制器, 如果不存在就抛出错误
            // require: "hi",

            // 在同级指令寻找控制器, 如果不存在就会传一个null 给link函数的第四个参数
            // require: "?hi"

            // 如果同级指令里面找不到, 找父级指令, 如果不存在, 抛出错误
            // require: "^hi",

            // 组合使用
            // require: "?^hi",

            // 值也可以为数组, 数组中存放的都是指令的名字
            require: ['?^hi', "?^wei"],
            // $scope注入到模板时会调用该方法
            link: function ($scope, tElement, tAttrs, controller) {
                console.log(controller);
            }


        };
        
    })
    .directive('hi', function () {

        return {

            restrict: "A",
            controller: function () {

                this.name = "waige";

            }
        };
        
    })
    .directive('wei', function () {

        return {

            restrict: "A",
            controller: function () {
                this.age = 19;
            }



        };

    });
