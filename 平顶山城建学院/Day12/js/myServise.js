angular.module('myApp.Servises', [])
	// 在factory中我们也可以使用内置服务, 但是不能使用$scope
	.factory('MyFactory', ['$http', function($http) {

		return {
			atrr: "属性",
			func: function() {
				console.log("方法");
			}
		};

	}])
	.service('MyService', ['$http', function($http) {

		this.atrr = "属性";
		this.func = function() {
			console.log("方法");
		};

	}]);

	// service:使用service可以注册一个支持构造函数的服务，它允许我们为服务对象注册一个构造函数，其和factory的工作原理相同，并且其都是单例
	// service和factory的区别：factory返回的是一个对象，当我们使用它的时候手动初始化并返回，而service是在当我们第一个使用的时候angular帮我们初始化一次，然后以后使用的时候返回的都是这个对象



