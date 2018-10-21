var brr = getCookie("shoplist");
console.log(brr);
var str = '';
for(var i = 0, len = brr.length; i < len; i ++){
	var shopinfo = brr[i];
	str += '<div class="shop-item clearfix">'+
		'<p class="fl"><input type="checkbox" class="ck"/></p>'+
		'<img class="fl" src="'+ shopinfo.src +'" alt="" />'+
		'<p class="fl big">'+ shopinfo.name +'</p>'+
		'<span class="fl">'+ shopinfo.price +'元</span>'+
		'<p class="fl count" '+
			'data-id="'+ shopinfo.id +'" '+
			'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
			'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
			'>'+
			'<span class="updateCount" data-number="1">+</span>'+
			'<span class="shop-count">'+ shopinfo.sum +'</span>'+
			'<span class="updateCount" data-number="-1">-</span>'+
		'</p>'+
		'<em class="fl sumPrice">'+ (shopinfo.sum * shopinfo.price) +'元</em>'+
		'<i class="fl delBtn">删除</i>'+
	'</div>';
}
$(".shoplist").html( str );
add();
//加减操作
$(".updateCount").click(function(){
	var a = $(this).data("number");
	var id = $(this).parent().data("id");
	var count = $(this).parent().find(".shop-count").html();
	if(a == -1 && count == 1){
		return ;
	}
	for(var i = 0, len = brr.length; i < len; i ++){
		if(id == brr[i].id){
			brr[i].sum += a;
			setCookie("shoplist",JSON.stringify(brr));
			$(this).parent().find(".shop-count").html( brr[i].sum );
			$(this).parent().next().html( brr[i].sum * brr[i].price+"元" );
			add();
			break;
		}
	}
})

//删除操作
$(".delBtn").click(function(){
	var id = $(this).parent().find(".count").data("id");
	for(var i = 0, len = brr.length; i < len; i ++){
		if(id == brr[i].id){
			brr.splice(i,1);
			setCookie("shoplist",JSON.stringify(brr));
			$(this).parent().remove();
			add();
			break;
		}
	}
})
//结算
function add(){
	var money = 0;
	var sum = 0;
	$(".ck:checked").each(function(){
		money += parseInt($(this).parent().parent().find(".sumPrice").html());
		sum += parseInt($(this).parent().parent().find(".shop-count").html());
	})
	$(".count2").html(sum);
	$(".money2").html(money);
}

//点击复选框
$(".ck").click(function(){
	add();
})

//全选操作  判断全选的状态
$("#selectAll").click(function(){
	// $(this).prop("checked") 判断全选的状态 被选中返回 true 否则返回false
	$(".ck").prop("checked",$(this).prop("checked"));
	add();
})

var $btn = $(".lbtn");
$btn.click(function(){
	location.href = "index.html";
})