angular.module('myApp').service('timeService',function(){
    var myDate=new Date();
    var yy = myDate.getFullYear();
    var mm = myDate.getMonth()+1;
    var dd = myDate.getDate();
    var hh = myDate.getHours();
    var min = myDate.getMinutes();
    var ss = myDate.getSeconds();
    var startTime = yy+'/'+mm+'/'+dd+' '+'00:00:00';
    var endTime = yy+'/'+mm+'/'+dd+' '+hh+':'+min+':'+ss;
    return {'startTime':startTime,'endTime':endTime};
})