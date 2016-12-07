<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-08 17:18:33
 * @version $Id$
 */
header("Content-type:application/json;charset=utf-8");

require_once ('connect.php');
if ($link) {
	# code...
	$newsid = $_GET['newsid'];
    //在数据库表中，没有newsid这个字段，只有id
	$sql = " SELECT * FROM `news` WHERE `news`.`id`= {$newsid}";

	mysqli_query($link,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);

	$senddata=array();
	while($row = mysqli_fetch_array($result)) {
    		array_push($senddata, array(
    					"id" => $row['id'],
    					"newstype" => $row['newstype'],
    					"newsimg"=> $row['newsimg'],
    					"newstitle" => $row['newstitle'],
    					"newstime" => $row['newstime'],
    					"newssrc"=> $row['newssrc']
    				));
    	}
	echo json_encode($senddata);
}else{
    echo json_encode(array('链接信息' => '链接信息失败' ));
}
mysqli_close($link);
?>