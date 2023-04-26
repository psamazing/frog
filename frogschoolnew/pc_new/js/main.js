$(function(){
    //main banner slick event
    $('.main_banner').slick({
        autoplay: false,
        dots:true,
        autoplaySpeed: 3000,
        fade:true,
        cssEase: 'ease-in-out'
    });
    //main banner play/pause event
    $('.btnPlay').click( function() {
    if (!$(this).hasClass("pause")){
        $('.main_banner').slick('slickPause');
        $(this).children().attr('src','../img/play.png');
        $(this).addClass("pause");  

    } else {
            $('.main_banner').slick('slickPlay');
            $(this).children().attr('src','../img/pause.png');
            $(this).removeClass("pause");
        }  
    });

     //수익인증 slick event
    $('.best_review').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        useTransform: false
    });

    //수강생 필기 인증 slick event
    $('.photo_review_list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        useTransform: false
    });
    
    //수익인증 slick event
    $('.beneauthlist').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding:'100px',
        centerMode: true,
        useTransform: false
    });

    //floating menu click & scroll event 
    $(".contents_move ul li a").mPageScroll2id({
		highlightSelector:".contents_move ul li a"
	});
});