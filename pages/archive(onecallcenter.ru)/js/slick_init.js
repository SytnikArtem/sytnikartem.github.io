$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        infinite: true,
        arrows: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 520,
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
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        infinite: true,
        arrows: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.career-slider-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        infinite: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
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

    $('.review-sliderr').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        height: true,
        infinite: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 4000
    });
});
