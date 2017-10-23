
angular.module('myApp').config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
    $stateProvider
		.state('home',{
			url:'/home',
			//templateUrl相对于index路径
			templateUrl:'www/src/modules/home.html',
			controller:'homeController',
			controllerAs:'homeCtrl'
		})
		.state('list',{
			url:'/list',
			templateUrl:'www/src/modules/list.html',
			controller:'listController',
			controllerAs:'listCtrl'
		})
})