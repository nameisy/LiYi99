<?php
	header("content-type:text/html;charset=utf-8");
	$uname = $_GET["uname"];
	
	//1.连接数据库
	$db = mysql_connect("localhost","root","root");
	
	//2.选择数据库
	mysql_select_db("liyi99",$db);
	
	//3.设置数据库字符集
	mysql_query("set names utf-8");
	
	//4.编写mysql语言
	$sql = "SELECT * FROM `user` WHERE 1";
	
	//5.执行sql语句
	$row = mysql_query($sql);
	
	while($arr = mysql_fetch_array($row)){
		if($uname == $arr["uname"]){
			echo "false";
			break;
		}
	}

	
	
	
