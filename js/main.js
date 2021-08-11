// Загрузка слайдера! ===============

$(document).ready(function () {
            $('.slider').slick({
                arrows: true,
                adaptiveHeight: true,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 1000,
            });

            $('.feed_slider').slick({
                arrows: false,
                adaptiveHeight: true,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 1000,
                dots: true,
            });



            // Анимация копки Меню для мобильной версии! ===============

            $('.menu_btn').on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('menu_btn_active');
                $('.menu_nav').toggleClass('menu_nav_active');
            })


            // Прокрутка страницы по нажатию на пункты навигации! ===============

            $('a[href^="#"]').click(function () {
                let valHref = $(this).attr("href");
                $('html, body').animate({
                    scrollTop: $(valHref).offset().top - 50 + "px"
                });
            });





            // Калькулятор на сайте, для посчёта стоимости работы! ===============

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


            $('#site_type1').on('change', function () {
                type = $(this).val();
                typeTime = $('#site_type1 :selected').attr('data-time');
                console.log(type);
                console.log(typeTime);
                finance();
            });

            $('#site_type2').on('change', function () {
                design = $(this).val();
                designTime = $('#site_type2 :selected').attr('data-time');
                console.log(design);
                console.log(designTime);
                finance();
            });

            $('#site_type3').on('change', function () {
                adopt = $(this).val();
                adoptTime = $('#site_type3 :selected').attr('data-time');
                console.log(adopt);
                console.log(adoptTime);
                finance();
            });








            // Анимация на сайте многих элементов во время прокрутки! ===============

            const animItems = document.querySelectorAll('._anim-items');

            if (animItems.length > 0) {
                window.addEventListener('scroll', animOnScroll);

                function animOnScroll() {
                    for (let index = 0; index < animItems.length; index++) {
                        const animItem = animItems[index];
                        const animItemHeight = animItem.offsetHeight;
                        const animItemOffset = offset(animItem).top;
                        const animStart = 3;

                        let animItemPoint = window.innerHeight - animItemHeight / animStart;

                        if (animItemHeight > window.innerHeight) {
                            animItemPoint = window.innerHeight - window.innerHeight / animStart;
                        }

                        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                            animItem.classList.add('_active');
                            if (animItem.classList.contains('myMainAbility')) {
                                animItem.classList.add('animate__tada')
                            }
                            if (animItem.classList.contains('MyCases')) {
                                animItem.classList.add('animate__backInDown')
                            }
                            if (animItem.classList.contains('someStatistic')) {
                                animItem.classList.add('animate__bounceInDown')
                            }
                            if (animItem.classList.contains('feedbacks')) {
                                animItem.classList.add('animate__bounceInUp')
                            }
                            if (animItem.classList.contains('myContacts')) {
                                animItem.classList.add('animate__bounceInUp')
                            }
                        } else {
                            if (!animItem.classList.contains('_anim-no-hide')) {
                                animItem.classList.remove('_active');
                            }
                        }
                    }
                }

                function offset(el) {
                    const rect = el.getBoundingClientRect(),
                        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    return {
                        top: rect.top + scrollTop,
                        left: rect.left + scrollLeft
                    }
                }

                setTimeout(() => {
                    animOnScroll();
                }, 2000);

            }



            // Форма обратной связи, валидация! ===============

            $('#massage_me').submit(function (event) {
                if ($('#client_name').val() == "" || $('#client_email').val() == "" || $('#massage1').val() == "") {
                    event.preventDefault();
                    alert("Пожалуйста, заполните все поля");
                };
            });







                const myModal = new HystModal({
                    linkAttributeName: "data-hystmodal",
                });



                $('#phone_number').mask("+7(999) 999-9999", {
                    autoclear: false
                });


    $('#massage_me').submit(function(event){
        event.preventDefault();

        $.ajax({
            type: "post",
            url: "php/mail1.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            alert("Сообщение отправлено!");
            $("#massage_me").trigger("reset");
        });
        return false;
    });


    $('#massage_me2').submit(function (event) {
        event.preventDefault();

        $.ajax({
            type: "post",
            url: "php/mail2.php",
            data: $(this).serialize()
        }).done(function () {
            if ($('#phone_number').val() == "" || $('#massage2').val() == "") {
                event.preventDefault();
                alert("Пожалуйста, заполните все поля");
            } else {
                $(this).find("input").val("");
                alert("Сообщение отправлено!");
                $("#massage_me2").trigger("reset");
                $('.hystmodal__close').trigger("click");
            }
        });
        return false;
    });



        });
















