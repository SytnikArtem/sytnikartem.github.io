$(document).ready(function() {
    var numberSlide;
    $('.fourth-slider').slick({
      infinite: false,
      dots: false,
      asNavFor: '.number-slider'
    });
    $('.mob-slider').slick({
      infinite: false,
      dots: true,
      fade: true,
      adaptiveHeight: true
    });
    $('.number-slider').slick({
      vertical: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: false,
      dots: false,
      arrows: false,
      asNavFor: '.fourth-slider'
    });
    $('.popup-form-slider').slick({
      vertical: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: false,
      dots: false,
      arrows: false,
      // asNavFor: '.fourth-slider'
    });
    var index = 0;
    var counter;
    var counter2;
    function fixedblock(){
      if ($(window).width() < 768) {
        let top = $('.sixth-main').offset().top;
        $('html, body').animate({ scrollTop: top - 50}, 0)
      }
    }
  $('.popup-left-select.first-select').on('change', function(){
    fixedblock();
    counter = 1;
    goNext();
  });
  $('.popup-left-select.second-select').on('change', function(){
    fixedblock();
    counter2 = 1;
    goNext();
  });
  function goNext(){
    let itemCheck = $('.popup-left-step.active').find('.popup-left-input');
    let validSelect1 = $('.popup-left-option[name="height"]');
    let validSelect2 = $('.popup-left-option[name="weight"]');
    if (itemCheck.is(':checked') || counter == 1 & counter2 == 1) {
      $('.popup-form-slider').slick('slickNext');
      index = index + 1;
      $('.popup-left-step').eq(index).addClass('active').siblings().removeClass('active');
      $('.animation-hide-text').removeClass('active');
      // $('.animation-hide-text').removeClass('active2');
      $('.animation-hide-text').addClass('active2');
      let height = $('.popup-left-step.active').height();
      $('.popup-left-block').height(height);
      // let height2 = $('.second-step.active').height();
      // $('.sixth-main').height(height2);
      if(index == 1) {
        $('.popup-form-left').find('.animation-hide-text').eq(0).text('Какова ваша цель');
      }
      if(index == 2) {
        $('.popup-form-left').find('.animation-hide-text').eq(0).text('Ваш рост');
      }
      if(index == 3) {
        $('.popup-form-left').find('.animation-hide-text').eq(0).text('Ваша скидка 30%');
        $('.popup-form-left').find('.animation-hide-text').eq(1).text('действительна 5 дней');
        $('.popup-form-left').find('.animation-hide-text').eq(2).text('Внесите контактные данные и получите чек-лист с рекомендациями по достижению Вашей цели');
        $('.popup-form-left').find('.animation-hide-text').addClass('small');
        $('.popup-form-title_new1').addClass('active');
        $('.popup-form-title_new2').addClass('active');
      }
    }
  }
  $('.popup-left-label').click(function(){
    goNext();
    fixedblock();
    });
  $('.fourth-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    numberSlide = 1;
    numberSlide = numberSlide + nextSlide;
    let textNumber = '0' + numberSlide;
    setTimeout(function() {
      $('.fourth-value').text(textNumber);
    },1000)
    if ($(window).width() > 993) {
      wowSlide.init();
      setTimeout(function(){

        let top = $(window).scrollTop();
        $('body,html').animate({scrollTop: top + 1});
      }, 200)
    }

  });
  $('.seventh-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if ($(window).width() > 993) {
      wowSlide.init();
      setTimeout(function(){
        let top = $(window).scrollTop();
        $('body,html').animate({scrollTop: top + 1});
      }, 200);
    }
  });
  $('.seventh-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          variableWidth: true,
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.header-menu').click(function() {
    $('.menu').addClass('active');
    setTimeout(function(){
      $('.menu-list').addClass('active');
      $('.menu-img').addClass('active');
    }, 500)
  });
  $('.menu-close, .menu-item-link').click(function() {
    setTimeout(function(){
      $('.menu').removeClass('active');
    }, 500)
    $('.menu-list').removeClass('active');
    $('.menu-img').removeClass('active');
  });
  $('.third-close').click(function() {
    $('.popup').removeClass('active');
    $('.third-popup-content').removeClass('active');
    $('.third-popup-content').addClass('close');
  });
  $('.third-item').click(function() {
    let number = $(this).data('number');
    $('.third-popup').eq(number).addClass('active');
    $('.third-popup').eq(number).find('.third-popup-content').removeClass('close');
    $('.third-popup').eq(number).find('.third-popup-content').addClass('active');
  });
  $('.seventh-btn').click(function() {
    $('.seventh-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  $('.header-btn').click(function() {
    $('.contact-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  $('.valid-form').on('submit', function(event) {
    event.preventDefault();
    $('.thank-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  $('.first-btn').click(function() {
    $('.more-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  var wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      callback:     function(box) {
        // функция срабатывает каждый раз при старте анимации
        // аргумент box — элемент, для которого была запущена анимация
      },
      scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
      resetAnimation: true
    }
  );
  wow.init();
  var wowSlide = new WOW(
    {
      boxClass:     'wowSlide',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      callback:     function(box) {
        // функция срабатывает каждый раз при старте анимации
        // аргумент box — элемент, для которого была запущена анимация
      },
      scrollContainer: ('slider-row-block') // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
  );
  wowSlide.init();
    $(".bgvideo").click(function() {
      var dataYoutube = $(this).parents('.video').attr('data-youtube');
      $(this).parents('.video').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });
    $('[data-fancybox="gallery"]').fancybox({
    infobar: false,
    buttons: [
      "close"
    ]
  });
    $('.popup-left-text').click(function(){
      $(this).toggleClass('active');
      if($(this).hasClass('radio')) {

        $(this).closest('.popup-left-label').siblings().find('.popup-left-text').removeClass('active');
        $(this).closest('.popup-left-label').find('.popup-left-text').addClass('active');
      }
    });
    $('.sixth-btn').click(function(){
      if ($(window).width() < 768) {
        let top = $('.sixth-main').offset().top;
        $('html, body').animate({ scrollTop: top - 50}, 0)
      }
      $('.popup-left-step.firstt').addClass('active');
      $('.first-step').removeClass('active');
      $('.second-step').addClass('active');
      $('.animation-hide-text').addClass('active');
      let height = $('.popup-left-step.active').height();
      $('.popup-left-block').height(height);
      let height2 = $('.second-step.active').height();
      $('.sixth-main').height(height2 + 50);
    });
  $('.menu-item-link').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top -40 }, 500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
  $(".mask").mask("+7(999) 999-9999");
});
$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 299) {
    $('.header-fixed').addClass('active');
  }
  else if (scrollTop < 299) {
    $('.header-fixed').removeClass('active');
  }
});