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
})

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});






let type = 0;
let design = 0;
let adopt = 0;

let typeTime = 0;
let designTime = 0;
let adoptTime = 0;

let timeof = 0;
let listof = 0;

function finance() {
    timeof = +typeTime + +designTime + +adoptTime;
    listof = +type + +design + +adopt;
    $('#result1').text(timeof + " - Дни");
    $('#result2').text(listof + " - Рублей");
    console.log(+timeof);
    console.log(+listof);
    return listof, timeof;
};


$('#site_type1').on('change', function(){
    type = $(this).val();
    typeTime = $('#site_type1 :selected').attr('data-time');
    console.log(type);
    console.log(typeTime);
    finance();
});

$('#site_type2').on('change', function(){
    design = $(this).val();
    designTime = $('#site_type2 :selected').attr('data-time');
    console.log(design);
    console.log(designTime);
    finance();
});

$('#site_type3').on('change', function(){
    adopt = $(this).val();
    adoptTime = $('#site_type3 :selected').attr('data-time');
    console.log(adopt);
    console.log(adoptTime);
    finance();
});






