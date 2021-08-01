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



//$('option[value]').click(function () {
//    let valVal = $(this).attr("value");
//    console.log(valVal);
//    let result = result => result + valVal;
//    console.log(result);
//});





            var type = 0;
            var design = 0;
            var adopt = 0;


            $('select[id="site_type1"]').click(function eddittype() {

                $('option[value]').click(function () {
                    let type = $(this).attr("value");
                    return type = type;
                });
                console.log(type);
            });
            console.log(type);

            $('select[id="site_type2"]').click(function edditdesign() {

                $('option[value]').click(function () {
                    let design = $(this).attr("value");
                    return design;
                });
                console.log(design);
            });



            $('select[id="site_type3"]').click(function edditadopt() {

                $('option[value]').click(function () {
                    let adopt = $(this).attr("value");
                    return adopt;
                });
                console.log(adopt);
            });



//
//            var listof = type + design + adopt;
//            alert(" Примерная цена за ваш заказа составит : " + listof + " Рублей");
//            console.log(listof);


