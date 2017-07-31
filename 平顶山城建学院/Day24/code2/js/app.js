angular.module('myApp', ['ngRoute', 'myApp.factory', 'myApp.home'])
.config(['$routeProvider', function ($routeProvider) {


    $routeProvider.when("/home", {

        templateUrl: "home.html",
        controller: "HomeController"

    });
    $routeProvider.otherwise("/home");


}]);