
angular.module('myApp').controller('indexCtrl',function($scope,$state,$translate,i18,$rootScope){$scope.switchLanguage=switchLanguage;$scope.flag=false;$scope.cur_lang=$translate.use();function switchLanguage(lang){$scope.flag=!$scope.flag;console.log(lang)
$translate.use(lang);window.localStorage.lang=lang;$rootScope.lang=lang
window.location.reload();console.log($rootScope.lang)
console.log(window.localStorage.lang)}
function setTimePickerLang(lang){if(lang=='zh-cn'){WdatePicker({lang:'zh-cn'})}else if(lang=='zh-en'){WdatePicker({lang:'en'})}}})