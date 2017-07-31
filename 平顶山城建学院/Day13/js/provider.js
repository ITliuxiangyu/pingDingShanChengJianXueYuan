angular.module('myApp.provider', [])
.provider('foo', [function() {

	var username = "admin";
	var password = "admin";
	var setFunc = function() {

	};
	var age = 0;

	return {
		setAge: function(str) {
			if (str) {
				age = str;
			}
		},

		setUsername: function(str) {
			if (str) {
				username = str;
			}
		},
		setPassword: function(str) {
			if (str) {
				password = str;
			}
		},

		setFunc: function(func) {
			if (func) {
				setFunc = func;
			}
		},

		$get: function() {
			return{
				username: username,
				password: password,
				fun c: setFunc,
				age: age
			}
		}

	};


}]);