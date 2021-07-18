$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        adaptiveHeight:true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed: 1000,
    });

    $('.feed_slider').slick({
        arrows:false,
        adaptiveHeight:true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed: 1000,
        dots: true,
    });
});

$('.menu_btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu_btn_active');
    $('.menu_nav').toggleClass('menu_nav_active');
});
