<<<<<<< HEAD
$(document).ready(function(){$(".slider").slick({arrows:!0,adaptiveHeight:!0,speed:1e3,autoplay:!0,autoplaySpeed:1e3}),$(".feed_slider").slick({arrows:!1,adaptiveHeight:!0,speed:1e3,autoplay:!0,autoplaySpeed:1e3,dots:!0}),$(".menu_btn").on("click",function(e){e.preventDefault(),$(this).toggleClass("menu_btn_active"),$(".menu_nav").toggleClass("menu_nav_active")}),$('a[href^="#"]').click(function(){let e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-50+"px"})});let e=0,t=0,a=0,n=0,s=0,i=0,o=0,l=0;function c(){return o=+n+ +s+ +i,l=+e+ +t+ +a,$("#result1").text(o+" - Дни"),$("#result2").text(l+" - Рублей"),console.log(+o),console.log(+l),o}$("#site_type1").on("change",function(){e=$(this).val(),n=$("#site_type1 :selected").attr("data-time"),console.log(e),console.log(n),c()}),$("#site_type2").on("change",function(){t=$(this).val(),s=$("#site_type2 :selected").attr("data-time"),console.log(t),console.log(s),c()}),$("#site_type3").on("change",function(){a=$(this).val(),i=$("#site_type3 :selected").attr("data-time"),console.log(a),console.log(i),c()});const d=document.querySelectorAll("._anim-items");if(d.length>0){function r(){for(let e=0;e<d.length;e++){const t=d[e],a=t.offsetHeight,n=u(t).top,s=3;let i=window.innerHeight-a/s;a>window.innerHeight&&(i=window.innerHeight-window.innerHeight/s),pageYOffset>n-i&&pageYOffset<n+a?(t.classList.add("_active"),t.classList.contains("myMainAbility")&&t.classList.add("animate__tada"),t.classList.contains("MyCases")&&t.classList.add("animate__backInDown"),t.classList.contains("someStatistic")&&t.classList.add("animate__bounceInDown"),t.classList.contains("feedbacks")&&t.classList.add("animate__bounceInUp"),t.classList.contains("myContacts")&&t.classList.add("animate__bounceInUp")):t.classList.contains("_anim-no-hide")||t.classList.remove("_active")}}function u(e){const t=e.getBoundingClientRect(),a=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+a}}window.addEventListener("scroll",r),setTimeout(()=>{r()},2e3)}$("#massage_me").submit(function(e){""!=$("#client_name").val()&&""!=$("#client_email").val()&&""!=$("#massage1").val()||(e.preventDefault(),alert("Пожалуйста, заполните все поля"))});new HystModal({linkAttributeName:"data-hystmodal"});$("#phone_number").mask("+7(999) 999-9999",{autoclear:!1}),$("#massage_me").submit(function(e){return e.preventDefault(),$.ajax({type:"post",url:"php/mail1.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Сообщение отправлено!"),$("#massage_me").trigger("reset")}),!1}),$("#massage_me2").submit(function(e){return e.preventDefault(),$.ajax({type:"post",url:"php/mail2.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Сообщение отправлено!"),$("#massage_me2").trigger("reset")}),!1})});
=======
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






>>>>>>> parent of 9290f68 (Add files via upload)
