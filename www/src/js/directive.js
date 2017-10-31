angular.module('myApp').directive('timePicker',function($rootScope){
    return{
        restrict: 'A',
        require: 'ngModel',
	        scope: {
	            minDate: '@',
	        },
        link: function (scope, element, attr, ngModel) {
            //讲scope里面的值赋给指令里面的元素
            element.val(ngModel.$viewValue);

            function onpicking(dp) {
                var date = dp.cal.getNewDateStr();
                scope.$apply(function () {
                    ngModel.$setViewValue(date);
                });
            }

            function oncleared(){
                //清空时讲ng-model里面的值置空
                scope.$apply(function () {
                    ngModel.$setViewValue("");
                });
            }

            element.bind('click', function () {
                var lang = window.localStorage.lang;
                if(lang =='zh-en'){
                    lang = 'en'
                };
                console.log(lang)
                WdatePicker({
                    onpicking: onpicking,
                    oncleared: oncleared,
                    dateFmt:'yyyy/MM/dd HH:mm:ss',
                    lang:lang||'zh-cn'

                })
            });
        }
    }
});