var $ul = $(".logon_right form ul");
var $phone_way = $(".phone_way");
var $number_way = $(".number_way");
var index = 0;
//控制下标的状态
$.fn.extend({
	current : function(){
		this.css({
			height: 37
		});
		this.find("li").eq(index).css({
			borderBottom : "solid 2px #fff"
		})
		this.find("li").eq(index).siblings().css({
			borderBottom : "solid 1px #dfc9b2"
		})
	}
})

//随机数的获取
function getRan(max,min){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

$ul.current();
$ul.on("click","li",function(){
	index = $(this).attr("num");
	if(index == 0){
		$ul.current();
		$phone_way.css("display","block");
		$number_way.css("display","none");
	}
	if(index == 1){
		$ul.current();
		$phone_way.css("display","none");
		$number_way.css("display","block");
	}
})

//获取改变随机数的按钮
var $p_getran = $(".random_pwd+a");
var $n_getran = $("#n_verify").parent().find("a");
//获取随机数所在的位置
var $p_random = $("#p_verify+i");
var $n_random = $("#n_verify").parent().find("i");;
console.log($n_random );
//初始化随机数
verify($p_random);
verify($n_random);
//点击数随机数发生改变
$p_getran.click(function(){
	verify($p_random);
})

$n_getran.click(function(){
	verify($n_random);
})
//随机数函数
function verify($obj){
	var num = getRan(99,32);
	var ran = num * num;
	$obj.html(ran);
}