"use strict"

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

let listof = 500;

function finance(){
    listof = +type + +design + +adopt;
    console.log(type);
    console.log(design);
    console.log(adopt);
    console.log(listof);
    $('#result2').text(listof);
    return listof;
};

$('select[id="site_type1"]').click(function eddittype() {

    $('#331, #332, #333').click(function () {
        type = $(this).attr("value");
        return type;
    });
//    console.log(type);
});


$('select[id="site_type2"]').click(function edditdesign() {

    $('#334, #335, #336').click(function () {
        design = $(this).attr("value");
        return design;
    });
//    console.log(design);
});



$('select[id="site_type3"]').click(function edditadopt() {

    $('#337, #338, #339').click(function () {
        adopt = $(this).attr("value");
        return adopt;
    });
//    console.log(adopt);
    finance();
});





