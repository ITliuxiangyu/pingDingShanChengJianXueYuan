/**
 * Created by zhangzheng on 16/10/7.
 */
angular.module('myApp', [])
.controller('myController', ['$scope', function ($scope) {

    $scope.mine = {

        fruitArray: [{name: "banana"}, {name: "orange"}, {name: "apple"}, {name: "pear"}, {name: "grape"}],
        selected: 'apple'

    };


}]);