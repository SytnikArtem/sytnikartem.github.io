$(document).ready(function() {
    $('.block4-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    if ($(window).width() > 1020) {
        $('.block3-item-name, .block3-item-img').hover(function () {
            $('.block3-item-img').removeClass('hover');
            $('.block3-item').removeClass('active');
            $(this).parent().find('.block3-item-img').addClass('hover');
            $(this).parent().addClass('active');
            var index = $(this).parent().index();
            $('.block3-tab').removeClass('active');
            $('.block3-tab').eq(index).addClass('active');
        });

        var firstTop = $('.block3-item-first').offset().top - 500;
        var secondTop = $('.block3-item-second').offset().top - 400;
        var thirdTop = $('.block3-item-third').offset().top - 300;
        $(window).scroll(function () {
            var windowTop = $(window).scrollTop();
            var scrollFirst = windowTop > firstTop && windowTop < secondTop;
            var scrollSecond = windowTop > secondTop && windowTop < thirdTop;
            var scrollThird = windowTop > thirdTop;
            if (scrollFirst) {
                $('.block3-tab').removeClass('active');
                $('.block3-tab').eq(0).addClass('active');
                $('.block3-item-img').removeClass('hover');
                $('.block3-item-img').eq(0).addClass('hover');
                $('.block3-item').removeClass('active');
                $('.block3-item').eq(0).addClass('active');
            }
            else if (scrollSecond) {
                $('.block3-tab').removeClass('active');
                $('.block3-tab').eq(1).addClass('active');
                $('.block3-item-img').removeClass('hover');
                $('.block3-item-img').eq(1).addClass('hover');
                $('.block3-item').removeClass('active');
                $('.block3-item').eq(1).addClass('active');
            }
            else if (scrollThird) {
                $('.block3-tab').removeClass('active');
                $('.block3-tab').eq(2).addClass('active');
                $('.block3-item-img').removeClass('hover');
                $('.block3-item-img').eq(2).addClass('hover');
                $('.block3-item').removeClass('active');
                $('.block3-item').eq(2).addClass('active');
            }
        });
    };

    if($(window).width() > 767) {
        $('.block4-slider-btn').click(function () {
            $(this).parent().toggleClass('active');
            let text = $(this).text();
            if (text == "+") {
                $(this).text("-");
            }
            else {
                $(this).text("+");
            }
        });
    }

    if($(window).width() <= 767) {
        $('.block4-slider-current').text('1');
    }
    else if($(window).width() > 767 && $(window).width() < 1020) {
        $('.block4-slider-current').text('3');
    }
    $('.block4-slider').on('afterChange', function(event, slick, currentSlide){

        var currentNumber = currentSlide + 4;
        if (currentNumber == '16') {
            currentNumber = 14;
        }
        $('.block4-slider-current').text(currentNumber);

        $('.block4-slider-current').text(currentNumber);
        if($(window).width() < 1020 && $(window).width() > 767) {
            var currentNumber = currentSlide + 3;
            if (currentNumber == '15') {
                currentNumber = 14;
            }
            $('.block4-slider-current').text(currentNumber);
        }
        if($(window).width() <= 767) {
            var currentNumber = currentSlide + 1;
            $('.block4-slider-current').text(currentNumber);
        }
    });

    $('.block8-item-text, .block8-item-img').hover(function () {
        $(this).parent().find('.block8-item-img').toggleClass('active');
    })
});
