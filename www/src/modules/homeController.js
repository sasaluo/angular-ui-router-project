angular.module('myApp')
.controller('homeController',function($scope,$state){
	console.log('this is homeController')
	$scope.name = 'sasa';
    $scope.gotoList = function(){
        $state.go('list')
	}
})