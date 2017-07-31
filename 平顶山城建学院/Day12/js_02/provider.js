angular.module('myApp.provider', [])
	.factory('MyFactory', [function() {
		return { username: "歪哥" };
	}])
	.provider('Foo', [function() {

		// 这个地方return的对象其实就是服务提供者
		return {

			setName: "歪哥",

			// $get方法必须写, 在服务都是通过$provide创建的, 在初始化的时候, $injector调用 提供者的$get方法创建一个服务实例: Foo就是$get方法返回的一个对象, value, constant, service, factory服务都是provider服务的简化形式
			$get:function() {
				return {
					username: "帅哥"
				};
			}

		};

	}]);