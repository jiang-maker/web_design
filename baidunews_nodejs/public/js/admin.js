$(document).ready(function (argument) {
	// body...
	var $newstable=$('#newstable tbody');
	refreshNews('');
	//绑定提交按钮事件
	$('#submit-btn').on('click',function (e) {
		// body...
		e.preventDefault();
		if ($('select').val()===''||$('#InputTitle').val()===''||$('#inputImg').val()===''||$('#inputTime').val()===''||$('#inputSrc').val()==='') {
			if ($('#InputTitle').val()==='') {
				$('#InputTitle').parent().addClass('has-error');
			} 
			else {
				$('#InputTitle').parent().removeClass('has-error');
			}
			if ($('#InputImg').val()==='') {
				$('#InputImg').parent().addClass('has-error');
			} 
			else {
				$('#InputImg').parent().removeClass('has-error');
			}
			if ($('#InputTime').val()==='') {
				$('#InputTime').parent().addClass('has-error');
			} 
			else {
				$('#InputTime').parent().removeClass('has-error');
			}
			if ($('#InputSrc').val()==='') {
				$('#InputSrc').parent().addClass('has-error');
			} 
			else {
				$('#InputSrc').parent().removeClass('has-error');
			}
		}
		else {
			var news_json={
				newstype:$('#InputType').val(),
				newstitle:$('#InputTitle').val(),
				newsimg:$('#InputImg').val(),
				newstime:$('#InputTime').val(),
				newssrc:$('#InputSrc').val()
			}
			$.ajax({
				url:'/admin/createnews',
				method:'post',
				data:news_json,
				dataType:'json',
				success:function (data) {
					// body...
					refreshNews('');
					
				}
			})
		}
		clean_input();
	})
	$('#cancel-btn').on('click',function (e) {
		// body...
		e.preventDefault();
		clean_input();
	})
	function clean_input(argument) {
		// body...
		$('#InputTitle').val('');
		$('#InputImg').val('');
		$('#InputTime').val('');
		$('#InputSrc').val('');
	}
	// 删除新闻
	var deleteid=null;
	$newstable.on('click','.btn-danger',function (e) {
		// body...
		$('#del-Modal').modal('show');
		deleteid=$(this).parent().prevAll().eq(3).html();
	});
	$('#del-Modal #del-confirm').click(function(e) {
		// body...

		if (deleteid) {
			$.ajax({
				url:'/admin/deletenews',
				method:'POST',
				data:{newsid:deleteid},
				dataType:'json',
				success:function (data) {
					// body...
					// console.log(data);
					$('#del-Modal').modal('hide');
					refreshNews();
				}
			});
		}
	});
	$('#del-Modal #del-cancel').click(function(e){
		$('#del-Modal').modal('hide');
	});


	//修改新闻
	var edit_id=null;
	$newstable.on('click','.btn-primary',function (e) {
		// body...
		$('#edit-Modal').modal('show');
		edit_id=$(this).parent().prevAll().eq(3).html();
		
		$.ajax({
				url:'/admin/editnews',
				method:'GET',
				data:{newsid:edit_id},
				dataType:'json',
				success:function(data) {
					// body...
					// console.log(data);
					$('#edit-Type').val(data[0].newstype);
					$('#edit-Title').val(data[0].newstitle);
					$('#edit-Img').val(data[0].newsimg);
					$('#edit-Time').val(data[0].newstime);
					$('#edit-Src').val(data[0].newssrc);
				}
			});
	});
	$('#edit-Modal #edit-confirm').click(function(e){
	
			// var edit_json={
			// 	newstype:$('#edit-Type').val(),
			// 	newstitle:$('#edit-Title').val(),
			// 	newsimg:$('#edit-Img').val(),
			// 	newstime:$('#edit-Time').val(),
			// 	newssrc:$('#edit-Src').val(),
			// 	id:edit_id
			// };
			$.ajax({
				url:'/admin/updatenews',
				method:'POST',
				data:{
				newstype:$('#edit-Type').val(),
				newstitle:$('#edit-Title').val(),
				newsimg:$('#edit-Img').val(),
				newstime:$('#edit-Time').val(),
				newssrc:$('#edit-Src').val(),
				id:edit_id
				},
				dataType:'json',
				success:function(data) {
					// body..
					// console.log(data);
					$('#edit-Modal').modal('hide');
					refreshNews('');
				}
			});
	});
	$('#edit-Modal #edit-cancel').click(function(e){
		$('#edit-Modal').modal('hide');
	});

	//刷新新闻列表
	function refreshNews(type) {
	// body...
		$newstable.empty();
		$.ajax({
			url:'/admin/getnews',
			method:'GET',
			dataType:'json',
			success:function (data) {
				// body...
				console.log(data);
				data.forEach(function(item,index,array) {
					// body...
					var tdid=$('<td>').html(item.id);
					var tdnewstype=$('<td>').html(item.newstype);
					var tdnewstitle=$('<td>').html(item.newstitle);
					var tdnewstime=$('<td>').html(item.newstime);
					var tdnewssrc=$('<td>').html(item.newssrc);
					var tbbtn=$('<td><button class='+'"btn btn-primary btn-xs"'+'>修改<button class='+'"btn btn-danger btn-xs"'+'>删除</td>');
					var $tr = $('<tr></tr>');
					$tr.append(tdid,tdnewstype,tdnewstitle,tdnewstime,tbbtn);
					$newstable.append($tr);
				})
			}
		});
	};
});


