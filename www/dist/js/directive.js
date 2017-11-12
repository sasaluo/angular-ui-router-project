
angular.module('myApp').directive('timePicker',function($rootScope){return{restrict:'A',require:'ngModel',scope:{option1:'='},link:function(scope,element,attr,ngModel){element.val(ngModel.$viewValue);function onpicking(dp){var date=dp.cal.getNewDateStr();scope.$apply(function(){ngModel.$setViewValue(date);});}
function oncleared(){scope.$apply(function(){ngModel.$setViewValue("");});}
element.bind('click',function(){var lang=window.localStorage.lang;if(lang=='zh-en'){lang='en'};console.log(lang)
WdatePicker({onpicking:onpicking,oncleared:oncleared,dateFmt:'yyyy/MM/dd HH:mm:ss',lang:lang||'zh-cn'})});}}});