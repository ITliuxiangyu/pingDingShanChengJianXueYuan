angular.module('myApp.home', [])
.controller('HomeController', ['$scope', 'GetData', function ($scope, GetData) {

    $scope.getVal = function () {

        var data = GetData.getDataFromJSON();
        console.log("~~~~~~~~~~~~~~~");
        console.log(data);
        
    };

    $scope.$on('sendData', function (event, msg) {

        console.log("在这里面可以拿到数据, 我们拿到数据以后就可以分析数据, 然后在页面上显示");
        console.log(msg);

    });
    
}]);