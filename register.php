<?php
	//1、接收客户端的数据
	$userTel = $_POST['userTel'];
	$userPass = $_POST['userPass'];	
	//
	header("Content-type","text/html;charset=utf-8");
	
	//1、建立连接（搭桥）
	$conn = mysql_connect("localhost:3306","heyang","123456");
	
	//2、选择数据库
	mysql_select_db("mydb1702",$conn);
	
	//3、执行SQL语句
	$sqlStr ="insert into userInfo(userTel,userPass) values('".$userTel."','".$userPass."')";
	
	mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);
	
	echo "1111！<a href='header.html'>进入主页</a>";
?>