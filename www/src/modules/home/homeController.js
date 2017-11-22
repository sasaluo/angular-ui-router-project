angular.module('myApp')
.controller('homeController',function($scope,$state,i18,timeService){
    // console.log(secondMenu)
    // $scope.datas={};
    // ngNotify.set('Your notification message goes here!');
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
    vm.list = [
        {

        },
        {
            "time":"2017-08-14",
            "name":"LCM",
            "cpuAve":"60%",
            "cpuHigh":"78%",
            "radioAve":"54%",
            "radioHigh":"39",
            "hardTotal":"31",
        }
    ];
    $scope.pageOption = {
        pageSize:8,
        pageIndex:1,
        total:0,
        maxPage:0
    }


    console.log($scope.pageOption)
    // console.log(vm.list)
    $scope.list = [];

    $scope.getData = function(n){
        for(var i=0;i<n;i++){
            $scope.list.push({
                "time":"2017-08-14",
                "name":"LCM",
                "cpuAve":"60%",
                "cpuHigh":"78%",
                "radioAve":"54%",
                "radioHigh":"39",
                "hardTotal":"31",
            })
        };
        $scope.pageOption.total = $scope.list.length;
        $scope.pageOption.maxPage = ($scope.pageOption.total)/($scope.pageOption.pageSize)

        console.log($scope.pageOption)
    }

    $scope.getData(20);

    function changeTime(time){
        console.log(time)
    }

    function queryResult(){
        console.log(vm.params)
    }

})






















