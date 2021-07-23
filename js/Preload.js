window.onload = function () {
        var preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');

            function () {


                var typemas = [500, 1000, 4000];
                var designmas = [1000, 2000, 5000];
                var adoptmas = [1000, 1500, 2000];



                var type = 0;
                var design = 0;
                var adopt = 0;


                function eddittype() {

                    type = prompt("Выберите желаемый тип сайта: 1 - Лендинг 2 - Визитка 3 - Магазин");

                    if (type > 3 || type < 1) {
                        alert("Ошибка!");
                        eddittype(type);
                    } else if (type--, type != typemas.length) {
                        console.log(typemas[type]);
                    }
                    return type = typemas[type];
                }

                eddittype(eddittype);

                console.log(type);


                function edditdesign() {

                    design = prompt("Выберите желаемый дизайн сайта: 1 - Минималистичный 2 - Функциональный 3 - Свой");

                    if (design > 3 || design < 1) {
                        alert("Ошибка!");
                        edditdesign(design);
                    } else if (design--, design != designmas.length) {
                        console.log(designmas[design]);
                    }
                    return design = designmas[design];
                }

                edditdesign(edditdesign);

                console.log(design);


                function edditadopt() {

                    adopt = prompt("Выберите желаемую адаптивность сайта: 1 - Базовый вариант 2 - Углублённый 3 - Все устройства");

                    if (adopt > 3 || adopt < 1) {
                        alert("Ошибка!");
                        edditadopt(adopt);
                    } else if (adopt--, adopt != adoptmas.length) {
                        console.log(adoptmas[adopt]);
                    }

                    return adopt = adoptmas[adopt];
                }

                edditadopt(edditadopt);

                console.log(adopt);

                var listof = type + design + adopt;
                alert(" Примерная цена за ваш заказа составит : " + listof + " Рублей");
                console.log(listof);

            }
    };
};
