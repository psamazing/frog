$(function(){

    //navi menu mouseover event
    $("nav > ul > li > a").mouseenter(function(){
        $(".sub_nav").stop().slideDown(0);
        });
    $("nav > ul > li > a").mouseleave(function(){
        $(".sub_nav").stop().slideUp(0);
    });
    $(".sub_nav").mouseenter(function(){
        $(".sub_nav").css("display","block");
    });
    $(".sub_nav").mouseleave(function(){
        $(".sub_nav").css("display","none");
    });

    //mobile menu
	$(".accordion_ul li a").click(function() {
		function slideDown(target) {
	  		slideUp(10);
			$(target).addClass('on').next().slideDown(800);
		}
		function slideUp() {
			$('.accordion_ul li a').removeClass('on').next().slideUp();
		}
		$(this).hasClass('on') ? slideUp() : slideDown(this);
	});

    //mobile menu click event
    $(".menu-trigger").on("click",function(){
        if($(".m_menu_list").hasClass("on")){
            $("body").css("overflow","auto");
            $(".m_menu_list").removeClass("on");
        }else{
            $("body").css("overflow","hidden");
            $(".m_menu_list").addClass("on");
        }   
    });

	//scroll header fixed
	var offSet = $('header').offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > offSet.top ) {$( 'header' ).addClass( 'fixed' );}
		else {$( 'header' ).removeClass( 'fixed' );}
	});

    //topbutton click event
    $(".topBtn").click(function(){
        $("html, body").stop().animate({scrollTop:0}, "fast");
    });

	//스크롤시 top 버튼 이벤트 
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.topBtn').addClass("on");
		} else {
			$('.topBtn').removeClass("on");
		}
	});

    //subpage menu click event
    $(".navi_title1").click(function(){
        if($(".con_subnavi").hasClass("on")){
            $(".con_subnavi").removeClass("on");
        }else{
            $(this).next(".con_subnavi").addClass("on");
        }
    });
    $(".navi_title2").click(function(){
        if($(".con_subnavi").hasClass("on")){
            $(".con_subnavi").removeClass("on");
        }else{
            $(this).next(".con_subnavi").addClass("on");
        }
     });
     $(".con_subnavi").mouseleave(function(){
        $(".con_subnavi").removeClass("on");
     });


});   