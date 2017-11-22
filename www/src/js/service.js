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
}).service('menuList',function(){
    this.menulist = [
        {'name':'config','firstMenu':'配置管理','secondMenu':[
            {'name':'网络参数配置','thirdMenu':[
                {'url':'network','name':'网络参数配置'}
            ]},
            {
                'name':'全网服务配置','thirdMenu':[
                    {'url':'changemode','name':'改变配置模式'},
                    {'url':'query','name':'配置下发查询'}
                ]
            }

        ]},
        {
          'name':'warning','firstMenu':'告警管理','secondMenu':[
            {'name':'告警管理','thirdMenu':[
                {'url':'current','name':'当前告警查询'},
                {'name':'历史告警查询'}
            ]}
          ]
        }
    ];
    this.getSecondMenu = function(name){
        // return 1
        if(name){
            var secondMenuList;
               angular.forEach(this.menulist,function(val){
                if(val.name ==name){
                    secondMenuList = val.secondMenu;
                    return secondMenuList;
                }else{
                return null
            }
           }) 
        }
    }
    return this
})