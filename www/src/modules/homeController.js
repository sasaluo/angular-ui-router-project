angular.module('myApp')
.controller('homeController',function($scope,$state,i18,timeService){
    var vm = this;
    vm.changeTime = changeTime;
    vm.queryResult = queryResult;
    vm.params={
        time:0,
        startTime:timeService.startTime,
        endTime:timeService.endTime
    }
    vm.featureList=[
        {'name':'CPU内存统计'},
        {'name':'进程性能统计'},
        {'name':'磁盘性能统计'},
        {'name':'网卡流量统计'}
    ];
    vm.timeList= [
        {'id':0,'name':'1天'},
        {'id':1,'name':'1周'},
        {'id':2,'name':'1月'},
        {'id':3,'name':'其他'}
    ];

    function changeTime(time){
        console.log(time)
    }

    function queryResult(){
        console.log(vm.params)
    }
    // $scope.name=i18.i18("1002")
})