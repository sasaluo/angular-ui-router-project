angular.module('myApp').constant('menuList',{
	menulist:[
        {	'name':'config',
        	'firstMenu':'配置管理',
        	'secondMenu':[
            	{
            		'name':'网络参数配置',
            		'thirdMenu':[
                		{'url':'network','name':'网络参数配置'}
            		]
            	},
            	{
                	'name':'全网服务配置',
                	'thirdMenu':[
                    	{'url':'changemode','name':'改变配置模式'},
                    	{'url':'query','name':'配置下发查询'}
                	]
            	}]
    	},
        {
          'name':'warning',
          'firstMenu':'告警管理',
          'secondMenu':[
            {	'name':'告警管理',
            	'thirdMenu':[
                	{'url':'current','name':'当前告警查询'},
                	{'name':'历史告警查询'}
            	]
        	}]
        }
    ],
    name:'sasa'
})