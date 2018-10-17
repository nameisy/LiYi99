$.fn.extend({
	carousel : function(){
		//获取img
		this.img = this.find("img");
		//获取img的数量
		this.imgNum = this.img.length;
		//初始化当前下标
		this.index = 0;
		//设置左右按钮
		this.whenHover();
		//初始化小圆点
		this.create();
		//初始化图片
		this.getIndex();
		//使图片轮播
		this.sport();
		
	},
	//设置划过时的属性
	whenHover : function(){
		this.hover(function(){
			this.find("span").css("display","block");
			clearInterval(this.timer);
		}.bind(this),function(){
			this.find("span").css("display","none");
			this.sport();
		}.bind(this))
	},
	//设置当前下标
	getIndex : function(){
		this.img.each(function(index,value){
			$(this).css("display","none");
			$(this).parent().find("li").css("background","blue");
		})
		this.img.eq(this.index).css("display","block");
		this.find("li").eq(this.index).css("background","red");
	},
	//创建小圆点
	create : function(){
		var str = "";
		for(var i = 0; i < this.imgNum; i ++){
			str += "<li></li>"
		}
		this.find("ul").html(str);
	},
	//使图片轮播
	sport : function(){
		this.timer = setInterval(function(){
			this.index ++;
			if(this.index >= this.imgNum){
				this.index = 0;
			}
			this.getIndex();
		}.bind(this),2000)
	}
})