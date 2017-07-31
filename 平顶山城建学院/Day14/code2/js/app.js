angular.module('myApp', [])
.controller('myController', ['$scope', function($scope) {

	$scope.mine = {};
	$scope.mine.templates = [{name: "template1", url: "template1.html"}, {name: "template2", url: "template2.html"}, {name: "other", url: "other.html"}];
	$scope.mine.template = $scope.mine.templates[0];
	// console.log($scope.mine.template);
	$scope.mine.pStyle = {
		background: 'red',
		textAlign: 'center'

	};

	$scope.mine.doSth = function() {
		alert(666);
	};


}]);