$(document).ready(function (argument) {
	// body...
	refresh_news('推荐');
	$('nav ul li a').click(function (argument) {
		// body...
		// console.log('jiang');
		$('nav ul li a').removeClass('cur_show');
		$(this).addClass('cur_show');
		var type = $(this).html();
		// console.log(type);
		refresh_news(type);
	});

});
function refresh_news(type) {
	// body...
	var $lists=$('article ul');


	$lists.empty();
	$.ajax({
		url:'../server/getnews.php',
		method:'GET',
		data:{newstype:type},
		dataType:'json',
		success:function (data) {

			data.forEach(function(item,index,array){
		
				var $list =$('<li></li>').addClass('news-list').appendTo($lists);
				var $newsimg =$('<div></div>').addClass('newsimg').appendTo($list);
				var $img=$('<img/>').attr('src',item.newsimg).appendTo($newsimg);
				var $newscontent =$('<div></div>').addClass('newscontent').appendTo($list);
				var $h1=$('<h1></h1>').html(item.newstitle).appendTo($newscontent);
				var $p=$('<p></p>').appendTo($newscontent);
				var $span=$('<span></span>').addClass('news-time').html(item.newstime).appendTo($p);
				var $span=$('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
			
			});

		}
	});

}