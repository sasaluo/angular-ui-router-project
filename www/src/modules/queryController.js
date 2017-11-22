angular.module('myApp')
.controller('queryController',function($scope,$state,i18,timeService,$state){
    $scope.gonetwork = function(){
        $state.go('config.network')
    }

})






















