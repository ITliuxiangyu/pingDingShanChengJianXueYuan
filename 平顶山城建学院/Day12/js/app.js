angular.module('myApp', ['myApp.Servises'])
	.config(['$provide', '$injector', function($provide, $injector) {
		// value, factory, service, provider, constant服务都是有内置服务$provide创建出来的
		console.log($provide);
		console.log($injector);
	}])
	.controller('myController', ['$scope', 'MyFactory', 'MyService', function($scope, MyFactory, MyService) {

		console.log(MyFactory);
		console.log(MyFactory.atrr);
		MyFactory.func();

		console.log(MyService);

	}]);