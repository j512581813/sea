$(function() {
	$('.site-nav-multi-menu').on('mouseover', function() {
		$(this).addClass('bg').addClass('site-nav-menu-hover');
		//$(this).css({background:"#FFF",border:'1px solid #EEE'});
		$(this).find('.site-bd-panle-wrap').show();
	});
	$('.site-nav-multi-menu').on('mouseout', function() {
		$(this).removeClass('site-nav-menu-hover');
		$(this).removeClass('bg');
		$(this).find('.site-bd-panle-wrap').hide();
	});
})