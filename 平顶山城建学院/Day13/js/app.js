angular.module('myApp', ['myApp.provider'])
.config(["$provide", "fooProvider", function($provide, fooProvider) {

	// 通过装潢器可以直接对服务进行配置, 可以添加属性, 方法, 修改属性, 方法, 这里面的$delegate就是我们的.decorator方法的第一个参数(服务), 在这里面需要注意, 设置完以后必须把$delegate返回给函数, 装潢器不尽可以给我们的服务进行相关配置, 也可以对内置服务进行相关配置
	$provide.decorator('foo', ["$delegate", function($delegate) {

		$delegate.age = 18;
		$delegate.doSometh = function() {
			alert("大家好");
		};
		$delegate.username = "张正";

		return $delegate;

	}]);

	fooProvider.setUsername("歪哥");
	fooProvider.setPassword("12345");



}])
.controller('myController', ['$scope', "foo", function($scope, foo) {

	console.log(foo);
}]);