angular.module('myApp.provider2', [])
	.provider('Login', [function() {
		var username = "admin";
		var password = "admin";

		return {

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
			$get: function() {
				return {
					username: username,
					password: password
				};
			}

		};



	}]);