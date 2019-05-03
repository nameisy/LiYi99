//获取小图
var $samllImg = $(".l_img img");
//获取遮罩层
var $shade = $(".l_img .shade");
//获取大图所在的方框
var $imgBox = $(".l_bigimg")
//获取大图
var $bigImg = $(".l_bigimg img");
//获取小方块
var $smallBox = $(".l_img span");
//获取购物车按钮
var $btn = $(".rbtn");


//获取商品名 
var $tradeName = $(".l_top .right h4 p");
//获取编号
var $id = $(".l_top .right h4 b");
//获取价钱
var $price = $(".l_top .right .price span");
//获取编号
var $id =  $(".l_top .right h4 b"); 

//获取图片的src
var str = location.href;
var str = str.split("&");
var arr1 = str[0].split("=")[1];
var arr2 = str[1].split("=")[1];
console.log(arr1);
console.log(arr2);
$samllImg.attr("src",arr1);
$bigImg.attr("src",arr1);
$id.html(arr2);

//添加购物车
$btn.click(function(){
	//定义一个数组存放cookie
	var arr = [];
	//开关 当存放同一个cookie时 
	var flag = true;
	
	//获取数组中存放的对象
	var json = {
		"id" : $id.html(),
		"name" : $tradeName.html(),
		"price" : $price.html(),
		"src" : $samllImg.attr("src"),
		"sum" : 1
	}
	//调用函数 获取key为shoplist的cookie 数据
	var drr = getCookie("shoplist");
	//判断是否有shoplist的cookie
	if(drr.length != 0){
		//遍历获取的cookie数据 判断是否相同的数据
		for(var i = 0, len = drr.length; i < len; i ++){
			if(json.id == drr[i].id){
				//如果cookie中存在这条 累加处理
				drr[i].sum ++;
				//让开关为false 使得这条数据不加入cookie中 累加后的数据重新加人cookie
				flag = false;
				break;
			}
		}
		//获取的cookie赋值给arr 防止清空
		arr = drr;
	}
	//如果false 这条数据不加入cookie中
	if(flag){
		arr.push(json);
	}
	//创建cookie
	setCookie("shoplist",JSON.stringify(arr));
	alert("添加成功")
})




















$shade.hover(function(){
	$smallBox.css("display","block");
	$imgBox.css("display","block");
},function(){
	$smallBox.css("display","none");
	$imgBox.css("display","none");
})

//给遮罩层添加移动事件
$shade.mousemove(function(evt){
	var e = evt || event;
	//初始化小方块的位置
	var left = e.offsetX - $smallBox.width()/2;
	var top = e.offsetY - $smallBox.height()/2;
	if(left <= 0){
		left = 0;
	}
	if(left >= $(this).width() - $smallBox.width()){
		left = $(this).width() - $smallBox.width();
	}
	if(top <= 0){
		top = 0;
	}
	if(top >= $(this).height() - $smallBox.height()){
		top = $(this).height() - $smallBox.height();
	} 
	$smallBox.css({
		left : left,
		top : top
	})
	
	//获取小图移动比例
	var scaleX = left / ($(this).width() - $smallBox.width());
	var scaleY = top / ($(this).height() - $smallBox.height());
	
	//大图移动比例
	var bigLeft = Math.floor(-scaleX * ($bigImg.width() - $imgBox.width()));
	var bigTop = Math.floor(-scaleY * ($bigImg.height() - $imgBox.height()));
	// console.log(bigTop)
	$bigImg.css({
		left : bigLeft,
		top : bigTop
	})
})
		
//获取li中的a
var $oA = $(".l_top .left ul li a");
//获取大图的src
var $src =  $bigImg.attr("src");

$oA.each(function(){
	var str = `
		<img src="${$src}">
	`;
	$(this).html(str);
})

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
