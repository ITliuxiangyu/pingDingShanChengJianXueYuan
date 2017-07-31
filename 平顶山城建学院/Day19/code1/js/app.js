angular.module('myApp', [])
    .controller('MyController',  function () {

        this.name = "歪哥";
        this.age = 18;
        this.gender = "帅哥";
        
    })
    .directive('myDirective', function () {

        return {

            restrict: "A",
            // 控制器后面可以是字符串, 如果是字符串, 当指令被执行的时候, angular会找对应的已经注册过的控制器
            controller: 'MainController',
            template: "<div>{{ mine.name }}{{ mine.gender }}{{ mine.age }}</div>"


        };




    })
    .controller('MainController', ['$scope', function ($scope) {

        $scope.mine = {

            name: "小黑",
            gender: "男",
            age: 19

        };
        
    }]);