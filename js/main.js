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

$('#site_type1').click(function () {

    $('#331, #332, #333').click(function () {
        typeTime = $(this).attr('get-time');
        type = $(this).attr('value');
        console.log(+typeTime);
        console.log(+type);
        return type, typeTime;
    });
    finance();
});


$('#site_type2').click(function () {

    $('#334, #335, #336').click(function () {
        designTime = $(this).attr("get-time");
        design = $(this).attr("value");
        console.log(+designTime);
        console.log(+design);

        return design, designTime;
    });
    finance();
});

$('#site_type3').click(function () {

    $('#337, #338, #339').click(function () {
        adoptTime = $(this).attr("get-time");
        adopt = $(this).attr("value");
        console.log(+adoptTime);
        console.log(+adopt);
        finance();
        return adopt, adoptTime;
    });
      finance();
});





