$(document).ready(function(){

    <!--connecting animations-->
    // new WOW().init();

<!-- magnific-popup -->
    $('.popup-content').magnificPopup({
            type: 'inline'
        });




    // дл плавной прокруттки страницы по якорю

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

// // закрытие document.ready
});



// Select2
$(document).ready(function() {
    $('.js-example-basic-single').select2();

    // для работы select2 в mfp
$.magnificPopup.instance._onFocusIn = function(e) {
    // Do nothing if target element is select2 input
    if( $(e.target).hasClass('select2-search__field') ) {
        return true;
    }
    // Else call parent method
    $.magnificPopup.proto._onFocusIn.call(this,e);
};

});







