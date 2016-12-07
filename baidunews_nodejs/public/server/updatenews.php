<?php
header("Content-type:application/json;charset=utf-8");
require_once ('connect.php');
if ($link) {
	# code...
	$newstype=$_POST['newstype'];
	$newstitle=$_POST['newstitle'];
	$newsimg=$_POST['newsimg'];
	$newstime=$_POST['newstime'];
	$newssrc=$_POST['newssrc'];
	$newsid=$_POST['id'];
	mysqli_query($link,"SET NAMES utf8");
	$sql=" UPDATE `news` SET `newstype`='$newstype',`newsimg`='$newsimg',`newstitle`='$newstitle',`newstime`='$newstime',`newssrc`='$newssrc'WHERE `id`=$newsid ";
	
	$result = mysqli_query($link,$sql);

	if(!$result){
		die("修改失败");
	}
	echo json_encode(array('success'=>$sql));
}
mysqli_close($link);
?>