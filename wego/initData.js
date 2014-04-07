var mongodb = require('../wego/mongodb.js');






exports.ad=function (argument) {

	console.log("drop table ");

	mongodb.drop("ad")
	mongodb.drop("case")

	console.log("add ad message");
    mongodb.add("ad",{name:"首页广告",location:"index",x:1,y:1,show:true,img:"images/banner.jpg",title:"我们的首页,wego的首页",url:"http://www.weeego.cn"});
    mongodb.add("ad",{name:"首页广告_2",location:"index",x:2,y:1,show:true,img:"images/i_fw.gif",title:"我们专注于做中高端网站设计服务.力求做到简洁.创意.视觉.大气,我们用专业的视角为每一位客户量身定做最匹配的西街与服务",url:"/case"});

 	mongodb.add('case', {
    	title:"深圳同方国际品牌网站",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"日本多漫格",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"上海红酒交易中心",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"深圳百果园商城网站设计 新加坡风景国际",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"新加坡电信",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"台湾karwee",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"台湾弘昌肉品",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"香港修身堂控股 香港盈泰集团",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"加拿大brandpkg",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"悉尼 Mondoscape",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"美国Yrsupply",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"中国电信总部 七匹狼",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"三菱戈蓝",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"上汽依维柯",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"英利集团",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"开磷集团",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"神泽集团",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )
    mongodb.add('case', {
    	title:"英大长安集团",
    	images:"/images/case1.jpg",
    	content:"<p>我这里是介绍</p>",
    	url:"http://www.weeego.cn",date: new Date()
    } )


}
