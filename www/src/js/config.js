
angular.module('myApp').config(function($stateProvider,$urlRouterProvider,$translateProvider){
		var lang = window.localStorage.lang ||'zh-cn';
    $translateProvider.preferredLanguage(lang);
    $translateProvider.useStaticFilesLoader({
		prefix:'i18/',
		suffix:'.json'
	});

	$urlRouterProvider.otherwise("/home");
    $stateProvider
		.state('home',{
			url:'/home',
			//templateUrl相对于index路径++
			templateUrl:'modules/home.html',
			controller:'homeController',
			controllerAs:'homeCtrl'
		})
		.state('list',{
			url:'/list',
			templateUrl:'modules/list.html',
			controller:'listController',
			controllerAs:'listCtrl'
		})
})