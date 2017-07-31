angular.module('myApp', ['ngRoute', 'myApp.headlineController', 'myApp.detailController'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/headline', {

            templateUrl: "headline.html",
            controller: "headlineController"

        });

        $routeProvider.when('/detail/:postid', {

            templateUrl: 'detail.html',
            controller: 'detailController'

        });

        $routeProvider.otherwise('/headline');


    }]);
