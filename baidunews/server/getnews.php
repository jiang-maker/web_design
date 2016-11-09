<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-02 14:25:35
 * @version 1.0 */


	header("Content-type:application/json;charset=utf-8");

	require_once ('connect.php');

	if (!$link) {
		# code...
		echo json_encode(array('链接信息' => '链接信息失败' ));
	}
	else{
			
		if ($_GET['newstype']) {
			# code...
			$newstype=$_GET['newstype'];

			$sql = " SELECT * FROM news WHERE `newstype`='{$newstype}'";

			mysqli_query($link,"SET NAMES utf8");
			$result = mysqli_query($link,$sql);

			$senddata=array();
    // 输出每行数据
    		while($row = mysqli_fetch_array($result)) {
    		// $senddata[]=$row;
	    		array_push($senddata, array(
	    					"id" => $row['id'],
	    					"newstype" => $row['newstype'],
	    					"newsimg"=> $row['newsimg'],
	    					"newstitle" => $row['newstitle'],
	    					"newstime" => $row['newstime'],
	    					"newssrc"=> $row['newssrc'],
	    				));
	    	}
    		echo json_encode($senddata);
		}else{
			//如果js中refreshNews('')传入的值为空，则执行以下操作
			$sql = 'SELECT * FROM news';
			mysqli_query($link,"SET NAMES utf8");
			$result = mysqli_query($link,$sql);

			$senddata=array();
	    // 输出每行数据
	    	while($row = mysqli_fetch_array($result)) {
	    		// $senddata[]=$row;
	    		array_push($senddata, array(
	    					"id" => $row['id'],
	    					"newstype" => $row['newstype'],
	    					"newsimg"=> $row['newsimg'],
	    					"newstitle" => $row['newstitle'],
	    					"newstime" => $row['newstime'],
	    					"newssrc"=> $row['newssrc'],
	    				));
	    	}
	    		echo json_encode($senddata);
		}
		
	}
	mysqli_close($link);
?>