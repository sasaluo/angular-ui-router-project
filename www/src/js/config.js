
angular.module('myApp').config(function($stateProvider,$urlRouterProvider,$translateProvider,menuList){

	var menuList = menuList.menulist;
		var lang = window.localStorage.lang ||'zh-cn';
	    $translateProvider.preferredLanguage(lang);
	    $translateProvider.useStaticFilesLoader({
			prefix:'www/src/i18/',
			suffix:'.json'
		});

	$urlRouterProvider.otherwise("/config/network");
    $stateProvider
		.state('config',{
			url:'/config',
			templateUrl:'www/src/modules/template.html',
			controller:function($scope){
				$scope.secondMenuList = getSecondName('config');						 
			}				
		})
		.state('config.network',{
			url:'/network',
			templateUrl:'www/src/modules/home.html',
			controller:"homeController"
		})
		.state('config.changemode',{
			url:'/changemode',
			templateUrl:'www/src/modules/changemode.html',
			controller:"changemodeController"
		})
		.state('config.query',{
			url:'/query',
			templateUrl:'www/src/modules/query.html',
			controller:"queryController"
		})

 
		.state('warning',{
			url:'/warning',
			//templateUrl相对于index路径++
			templateUrl:'www/src/modules/template.html',
			// resolve:{ secondMenu:"menuList"},
			controller: function($scope){
				$scope.secondMenuList = getSecondName('warning');
				console.log($scope.secondMenuList)
				
			}
		})
		.state('warning.current',{
			url:'/current',
			templateUrl:'www/src/modules/current.html',
			controller:"currentController"
		})

		function getSecondName(name){
			if(name&&menuList){
				for(var i=0;i<menuList.length;i++){
					if(menuList[i].name==name){
						return menuList[i].secondMenu
					}
				}
			}				 
		}; 
})