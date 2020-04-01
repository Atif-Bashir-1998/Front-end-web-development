$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });

    AOS.init({
        delay: 500,
        duration: 2000
    });


});