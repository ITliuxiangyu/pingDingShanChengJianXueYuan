angular.module('myApp.headDetail', [])
    .controller('HeadDetailController', ['$scope', '$stateParams', function ($scope, $stateParams) {
        alert($stateParams.id);
        
    }]);