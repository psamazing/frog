$(function(){
    //전체메뉴 클릭이벤트 
	var allMenu = {
		open : function(){
			$('.sitemap-col').addClass('active');
			$('.sitemap-col').fadeIn(200);
			$('.allmenu_overlay').fadeIn(200);
			$('.total_menu').addClass("on");
		},
		close : function(){
			$('.sitemap-col').removeClass('active');
			$('.sitemap-col').fadeOut(200);
			$('.allmenu_overlay').fadeOut(200);
			$('.total_menu').removeClass("on");
		}
	};

	$('.total_menu').on('click',function(){
		if( !$(this).hasClass('on') ){
			allMenu.open();
		} else {
			allMenu.close();
		}
	});
	//scroll header fixed
	var offSet = $('.nav_wrap').offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > offSet.top ) {$( '.nav_wrap' ).addClass( 'fixed' );}
		else {$( '.nav_wrap' ).removeClass( 'fixed' );}
	});

	$(document).on('click',function(e){
		//console.log($(e.target));
		if( $(e.target).hasClass('allmenu_overlay')) {
			allMenu.close();
		}
	});

	// layer open
	$('[data-popup-open]').click(function(e) {
		var targeted_popup_class = $(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
		e.preventDefault();
	});

	// layer close
	$('[data-popup-close]').click(function(e){
		var targeted_popup_class = $(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
		e.preventDefault();
	});

	//skybanner close 
	$('.bt_close_ban').on('click',function(){
		$('.sky_banner').slideUp(500);
	});
});