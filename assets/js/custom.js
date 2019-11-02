jQuery(document).ready(function ($) {
// $('.sao-carousel').find('.col-md-2').addClass('owl-item');
    /*------------------------------------
  HT PreLoader
--------------------------------------*/

    // function preloader() {
    //     $("#load").fadeOut();

    //     $('#ht-preloader').delay(0).fadeOut(3000);
    //     // $('#ht-preloader').addClass('Preload-end');
    // };

    $('.navbar-nav .nav-link').click(function(){
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    $('#item-carousel').owlCarousel({
        loop:true,
        margin:30,
        // autoplay: true,
        // autoplayTimeout: 2000,
        nav:true,
        navText: ["<img src='assets/images/catalog/left.png'>","<img src='assets/images/catalog/right.png'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // $('#item-carousel').find("div.owl-nav").prop('disabled', false);
    $('#comp-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('#desc-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin:20,
        stagePadding: 100,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
    $('#desc-carousel').find('img').click(function () {
        var myString = this.src;
        var parts = myString.split("assets");
        var thePart = parts[1];
        $('.item-main-img').attr('src', "assets"+thePart );
        $('#desc-carousel').find('img').removeClass('hover-clicked');
        $(this).addClass('hover-clicked');
    });
    // function wowanimation() {
    //     // var wow = new WOW({
    //     //     boxClass: 'wow',
    //     //     animateClass: 'animated',
    //     //     offset: 0,
    //     //     mobile: false,
    //     //     live: true
    //     // });
    //     // wow.init();
    //     // $('.Preload-start').hide(100);
    //     // $('.Preload-end').show(100);
    //     $('.Preload-end').addClass('sao');
    // }
    // $('.Preload-end').addClass('sao');
    // $('.Preload-end').fadeIn(2000);
    // $(window).on('load', function() {
    //     // $('.Preload-end').hide();

    //         wowanimation();
    //         preloader();
    // }
    // );
    function preloader(){
    $(() =>{
        let p = $('.preloader');

        p.css('opacity',0);
    });
}

preloader();

    // $('.sao-video').click(function () {
    //     // $('.bottom').css("display", "none");
    //     $('.bottom').toggle();
    //     // console.log('sassa');
    // })


});