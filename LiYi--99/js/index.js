//header中二级菜单的制作
//获取二级菜单最外一层
var  $tow_menu = $(".tow_menu");
//添加滑过事件 让二级菜单出来
$tow_menu.hover(function(){
	//当鼠标滑入时 添加边框
	$(this).css({
		border : "solid 1px #999",
		borderBottom : 0
	})
	
// 	$(this).find(".header_click").css({
// 		color : "red",
// 		});

     //当鼠标滑入时 找到二级菜单中的ul 让他出来
	$(this).find(".h_menu").css("display","block");
},function(){
	//当鼠标移出时 二级菜单消失
 	$(this).find(".h_menu").css("display","none");
// 	$(this).find(".header_click").css({
// 		color : "#6c6c6c"
// 		});
	$(this).css({
		border: "solid 1px #fff",
		borderBottom : 0
	})
})

//banner轮播的制作

//获取轮播所在的div
var $bannerCarousel = $(".banner_carousel");
//调用轮播插件
$bannerCarousel.carousel();

// main_2中 滚动的制作
var $mList = $(".m_2_list li");
var index = 0;
getIndex($mList,index);
$mList.hover(function(){
	$(this).css("background","#444444");
},function(){
	$(this).css("background","#cacaca");
	getIndex($mList,index);
})
$mList.click(function(){
	var $m_2_list = $(".main_1_bottom");
	var mLeft;
	$(this).each(function(){
		indexA = $(this).html();
		index = indexA - 1;
		getIndex($mList,index);
		switch(indexA){
			case '1': mLeft = 0;break;
			case '2' : mLeft = -1200; break;
			case '3' : mLeft = -2400; 
		}
		$m_2_list.animate({
			left :mLeft
		},1400)
	})
})

function getIndex($obj,index){
	$obj.each(function(){
		$(this).css("background","#cacaca");
	})
	$obj.eq(index).css("background","#444444");
}



hoverBox($(".main_1_center img"));
hoverBox($(".main_1_bottom dl"));
hoverBox($("#main_3 img"));
hoverBox($(".m_4_center dl"));
hoverBox($(".m_4_center .m4_pic_1"));
hoverBox($(".news_left img"));
//滑过是 出现方框
function hoverBox($obj){
	$obj.hover(function(){
		$(this).css({
			border : "red solid 1px"
		})
	},function(){
		$(this).css({
			border : "#eee solid 1px"
		})
	})
}

//获取会员名
//调用函数 获取key为LiYi_name的cookie 数据
var arr = getCookie("LiYi_name");
var name = arr.name;
var $enter = $(".enter");
var $register = $(".register");


if(eval(name)){
	$enter.remove();
	$register.find("span").html("欢迎您");
	$register.find("span").css("paddingRight","10px");
	$register.find("a").html(name);
}


