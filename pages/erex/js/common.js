$(document).ready(function() {
    $('.block3-item-btn, .block5-item-btn').click(function() {
        $(this).parent().toggleClass('active');
        var text = $(this).text();
        if (text == "+") {
            $(this).text("-")
        }
        else {
            $(this).text("+")
        }
    });
    function parallax() {
        var scene = document.getElementById('scene');
        var scene2 = document.getElementById('scene2');
        var scene3 = document.getElementById('scene3');
        var scene4 = document.getElementById('scene4');
        var scene5 = document.getElementById('scene5');
        var scene6 = document.getElementById('scene6');
        var parallax = new Parallax(scene);
        var parallax2 = new Parallax(scene2);
        var parallax3 = new Parallax(scene3);
        var parallax4 = new Parallax(scene4);
        var parallax5 = new Parallax(scene5);
        var parallax6 = new Parallax(scene6);
    }
    parallax();
    $(window).resize(function() {
        if($(window).width() > 1024) {
            parallax();
        }
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: false,
        nav: true,
        initialSlide: 2,
        adaptiveHeight: true,
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
  $(document).on("click", ".event_anchor", function(o) {
          o.preventDefault(), $("html, body").animate({
              scrollTop: $($.attr(this, "href")).offset().top
          }, 800)
  });
  var show = true;
  var countbox = ".block8";
  $(window).on("scroll load resize", function(){
   if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
   var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
   var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
   var w_height = $(window).height();        // Высота окна браузера
   var d_height = $(document).height();      // Высота всего документа
   var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
   if(w_top >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){

    $('.count').css('opacity','1');
    $('.count').each(function(){
     $(this).animate({
      count: $(this).data("name")
     }, {
      duration: 2000,
      easing: 'swing',
      step:function(now){
       $(this).text(Math.ceil(now) + '%');
      }
     });
    });

    show = false;
   }
  });
});
$(window).scroll(function () {
    var windowTop = $(window).scrollTop();
    var firstTop = $('.block11').offset().top;
    var windowHeight = $(window).height();
    if (windowTop > firstTop) {
        $('.block11-right-bottom').addClass('active')
    }
    else if (windowTop < firstTop - windowHeight){
        $('.block11-right-bottom').removeClass('active')
    }
});
