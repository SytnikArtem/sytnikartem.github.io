$(document).ready(function() {
    // $('#header-select').ddslick({
    //     selectText: "Select your favorite social network"
    // })
    $('.third-link').fancybox({
        buttons: [
            "close"
        ]
    });
    $('.fifth-gallery-item').fancybox({
        buttons: [
            "close"
        ]
    });
    $(".sixth-left-first, .sixth-left-second").mCustomScrollbar();
    $('.sixth-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });

    $('.sixth-slider-btn_back').click(function () {
        $('.sixth-slider').slick("slickPrev");
    });
    $('.sixth-slider-btn_next').click(function () {
        $('.sixth-slider').slick("slickNext");
    });
    $('.header-btn').click(function () {
       $(this).toggleClass('active');
       $('.header-nav').toggleClass('active')
       $('.header-hide').toggleClass('hide')
    });
    $(".header-list").on("click","a", function (event) {
        $(this).addClass('active').parent().siblings().find('.header-link').removeClass('active');
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 110;
        $('body,html').animate({scrollTop: top}, 500);
        $('.header-nav').removeClass('active');
        $('.header-btn').removeClass('active');
    });
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       300,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
    var $body = $(window.document.body);

    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0')
        $body.css('overflow', 'auto');
    }
    $('.header-right-btn').click(function (e) {
        e.preventDefault();
        $('.popup').addClass('active');
        bodyFreezeScroll();
    });
    $('.popup-close').click(function () {
        $('.popup').removeClass('active');
        bodyUnfreezeScroll()
    });
});
