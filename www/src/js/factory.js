angular.module('myApp').factory('i18',function($translate){
    var i18 = {
        i18:function(key){
            if(key){
                return $translate.instant(key)
            }
        }
    }
    return i18;
})