$(document).ready(function () {
	// body...
	var sidebar=$('#side-list');
	var sidelist=$('.side-list');
	var mask= $('.mask');
	var back=$('.back-top');

	sidebar.click(function (argument) {
		// body...
		sidelist.css('right',0);
		mask.fadeIn();
	})
	mask.click(function (argument) {
		// body...
		sidelist.css('right',-sidelist.width());
		mask.fadeOut();
	})
	back.click(function (argument) {
		// body...
		$('html,body').animate({scrollTop:0},500);
		
	})
	$(window).on('scroll',function (argument) {
		// body...
		if ($(window).scrollTop()>$(window).height()) {
			back.fadeIn();
		}
		else{
			back.fadeOut();
		}
	})
	$(window).trigger('scroll');
})