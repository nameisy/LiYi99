var $phone = $("#phone");
var $pwd = $("#pwd");
var $btn = $("#sub");
var $affirm_pwd = $(".affirm_pwd input");
var off_1 = false;
var off_2 = false;
var off_3 = false;
//聚焦的事件
$phone.focus(function(){
	$(this).css("border","blue solid 1px")
	$phone.next().html("手机号码/邮箱");
	$phone.next().css("color","#999");
})
$pwd.focus(function(){
	$(this).css("border","blue solid 1px")
	$pwd.next().html("6-20位字母、数字或者符号的组合");
	$pwd.next().css("color","#999");
})
$affirm_pwd.focus(function(){
	$(this).css("border","blue solid 1px")
	$affirm_pwd.next().html("再次输入密码");
	$affirm_pwd.next().css("color","#999");
})
//判断用户名是否存在
$phone.blur(function(){
	var re= /^\d{11}$/; 
	var $uname = $phone.val();
	if(re.test($uname)){
		$.get("php/login.php","uname="+ $uname,function(judge){
			console.log(judge);
			if(!judge){
				$phone.next().html("通过");
				$phone.next().css("color","green");
				off_1 = true;
			}else{
				$phone.css("border","red solid 1px")
				$phone.next().html("用户名已存在");
				$phone.next().css("color","red");
				off_1 = false;
			}
		})
	}else{
		$phone.css("border","red solid 1px")
		$phone.next().html("请输入正确的手机号码或邮箱格式");
		$phone.next().css("color","red");
		off_1 = false;
	}
	
})
//判断密码是否符合标准
var re = /\d/;
var pwd_val = null;
$pwd.blur(function(){
	var $upwd = $pwd.val();
	pwd_val = $upwd;
	if(re.test($upwd)){
		$pwd.next().html("通过");
		$pwd.next().css("color","green");
		off_2 = true;
	}else{
		$pwd.css("border","red solid 1px")
		$pwd.next().html("密码不符合标准");
		$pwd.next().css("color","red");
		off_2 = false;
	}
})

//确认密码
$affirm_pwd.blur(function(){
	if($affirm_pwd.val() == pwd_val){
		$affirm_pwd.next().html("通过");
		$affirm_pwd.next().css("color","green");
		off_3 = true;
	}else{
		$affirm_pwd.css("border","red solid 1px")
		$affirm_pwd.next().html("两次密码不一致，请重新输入");
		$affirm_pwd.next().css("color","red");
		off_4 = false;
	}
})
//提交数据
$btn.click(function(){
	if(off_1 && off_2 && off_3){
		var $uname = $phone.val();
		var $upwd = $pwd.val();
		$.get("php/add.php","uname="+ $uname + "&upwd=" + $upwd,function(){})
		location.href = "index.html";
	}else{
		alert("f");
	}
})
