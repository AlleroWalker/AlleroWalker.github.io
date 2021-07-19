$('.menu_btn').on('click', function(e){
    e.preventDefault;
    $(this). toggleClass('menu_btn_active');
    $('.menu_nav').toggleClass('menu_nav_active');
})
