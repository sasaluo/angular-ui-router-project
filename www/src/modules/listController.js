angular.module('myApp')
    .controller('listController',function($scope,$state){
        console.log('this is homeController')
        $scope.name = 'sasa';
        $scope.gotohome = function(){
            $state.go('home')
        }
    })