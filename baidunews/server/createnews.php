<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-08 10:04:43
 * @version $Id$
 */
header("Content-type:application/json;charset=utf-8");
require_once ('connect.php');
if ($link) {
	// 链接数据库成功
	$newstype=$_POST['newstype'];
	$newstitle=$_POST['newstitle'];
	$newsimg=$_POST['newsimg'];
	$newstime=$_POST['newstime'];
	$newssrc=$_POST['newssrc'];

	$sql="INSERT INTO `news` (`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";
	mysqli_query($link,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);
	echo json_encode(array('success'=>'ok'));
}else{
    echo json_encode(array('链接信息' => '链接信息失败' ));
}
mysqli_close($link);

?>