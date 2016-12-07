<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-08 14:13:17
 * @version $Id$
 */
header("Content-type:application/json;charset=utf-8");

require_once ('connect.php');
if ($link) {
	
	$newsid = $_POST['newsid'];

	$sql = " DELETE FROM `news` WHERE `news`.`id`= {$newsid}";

	mysqli_query($link,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);
	echo json_encode(array('success'=>'ok'));
}else{
    echo json_encode(array('链接信息' => '链接信息失败' ));
}
mysqli_close($link);
?>

