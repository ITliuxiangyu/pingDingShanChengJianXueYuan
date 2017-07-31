angular.module('myApp.factory', [])
.factory('GetData', ['$http', '$rootScope', function ($http, $rootScope) {

    return {

        getDataFromJSON: function () {

            $http({
                method: "get",
                url: "js/wy.json"
            }).success(function (result) {

                console.log("===================");
                console.log(result);

                // 这里是一个延迟回调, 请求数据成功以后才会回调
                // 我们只能在这里拿到数据

                $rootScope.$broadcast('sendData', result);

                return result;
                
            }).error(function (e) {
                console.log(e);
                return e;
            });
            
        }


    };


    
}]);