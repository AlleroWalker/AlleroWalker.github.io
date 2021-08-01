$(document).ready(function () {
    var preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');

        setTimeout(function () {


        }, 4000)
        if ($('#page-preloader').show()) {
            $('#page-preloader').hide();
        };
    };
});
