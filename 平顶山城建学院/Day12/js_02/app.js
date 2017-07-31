angular.module('myApp', ['myApp.provider', 'myApp.provider2'])
	// config方法里面参数可以是一个函数或者是数组, 配置哪个provider创建的服务, 就在该服务 名字后面 加一个 Provider, eg: LoginProvider
	.config([ "LoginProvider", function(LoginProvider) {

		// 注意, 在这里LoginProvider是提供者, 这里的方法走完以后, $injector会调用LoginProvider的$get方法创建实例(Login服务初始化的时候生成的对象)
		console.log("~~~~~~~~~~~~~");
		console.log(LoginProvider);
		LoginProvider.setUsername("歪哥");
		LoginProvider.setPassword("123456");

	}])
	.controller('MyController', ["$scope", "MyFactory", "Foo", "Login", function($scope, MyFactory, Foo, Login) {
		console.log(MyFactory);
		console.log(Foo);
		console.log(Login);
	}]);