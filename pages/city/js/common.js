$(document).ready(function() {
  $(".bgvideo").click(function() {
    var dataYoutube = $(this).parents('.video').attr('data-youtube');
    $(this).parents('.video').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
  });
  $('.third-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    infinite: false,
    touchMove: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          arrows: false
        }
      }
    ]
  });
  $('.fourth-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    cssEase: 'linear',
    touchMove: true,
    arrows: false
  });
  $('.seventh-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          arrows: false
        }
      }
    ]
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
  $('.fourth-slider-next').click(function () {
    $('.fourth-slider').slick('slickNext');
  });
  $('.fourth-slider-back').click(function () {
    $('.fourth-slider').slick('slickPrev');
  });
  $('.third-slider-btn').click(function() {
    let number = $(this).data('number');
    console.log(number);
    $('.third-popup').eq(number).addClass('active');
    $('.third-popup').eq(number).find('.third-popup-content').removeClass('close');
    $('.third-popup').eq(number).find('.third-popup-content').addClass('active');
  });
  $('.third-close').click(function() {
    $('.popup').removeClass('active');
    $('.third-popup-content').removeClass('active');
    $('.third-popup-content').addClass('close');
  });
  $('.header-btn').click(function() {
    $('.contact-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  $('.seventh-slider-btn').click(function() {
    let number = $(this).data('number');
    $('.seventh-popup').eq(number).addClass('active');
    $('.seventh-popup').eq(number).find('.third-popup-content').removeClass('close');
    $('.seventh-popup').eq(number).find('.third-popup-content').addClass('active');
  });
  $('.first-left-btn').click(function() {
    $('.more-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  $('.valid-form').on('submit', function(event) {
    event.preventDefault();
    $('.thank-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  $('.menu-open').click(function() {
    $('.menu-list').removeClass('opacity');
    $('.menu').addClass('active');
    $('.menu-overlay').addClass('active');
    $('.menu-right-line').addClass('active');
    setTimeout(function(){
      $('.menu-list').addClass('active');
      $('.menu-right-block').addClass('active');
      $('.menu-text').addClass('active');
    }, 500);
  });
  $('.menu-close, .menu-item-link').click(function() {
    setTimeout(function(){
      $('.menu').removeClass('active');
      $('.menu-overlay').removeClass('active');
    }, 500);
    $('.menu-list').removeClass('active');
    $('.menu-text').removeClass('active');
    $('.menu-right-block').removeClass('active');

    $('.menu-right-line').removeClass('active');
  });
  $('.menu-item-link').click(function() {
    $('.menu-list').addClass('opacity');
  });
  $('.sixth-right-label').click(function(e) {
    let item = $(this).closest('.sixth-right-block').find('.sixth-right-input');
    for (let i = 0; i < item.length; i++) {
      if (item.eq(i).is(':checked')) {
        item.eq(i).parent().addClass('active');
      }
      else {
        item.eq(i).parent().removeClass('active');
      }
    }

  });
  $('.sixth-right-btn').click(function() {
    $('.first-step').hide();
    $('.second-step').eq(0).show().addClass('active');
    $('.sixth-right-slider').addClass('active');
    $('.sixth-right-circle').addClass('active');
    fixedblock();
  });
  var index = 0;
  var counter;
  var counter2;
  function fixedblock(){
    if ($(window).width() < 768) {
      let top = $('.sixth').offset().top;
      $('html, body').animate({ scrollTop: top - 60}, 0)
    }
  }
  $('.popup-left-select.first-select').on('change', function(){
    counter = 1;
    goNext();
    fixedblock();
  });
  $('.popup-left-select.second-select').on('change', function(){
    counter2 = 1;
    goNext();
    fixedblock();
  });
  function goNext(){
    let itemCheck = $('.sixth-right-step.active').find('.sixth-right-input');
    let validSelect1 = $('.popup-left-option[name="height"]');
    let validSelect2 = $('.popup-left-option[name="weight"]');
    if (itemCheck.is(':checked') || (validSelect1.is(':selected')) && validSelect2.is(':selected')) {
      index = index + 1;
      $('.second-step').hide().removeClass('active');
      $('.second-step').eq(index).show().addClass('active');
      $('.sixth-right-slider').slick('slickNext');
      $('.circle-slider').slick('slickNext');
    }
  }
  $('.sixth-right-label').click(function() {
    goNext();
    fixedblock();
  });
  $('.sixth-right-slider').slick({
    vertical: true
  });
  $('.circle-slider').slick({
    vertical: true
  });
  $(".mask").mask("+7(999) 999-9999");
  $('.go_to').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100 }, 400);
    }
    return false;
  });
  $('.go_to2').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 85 }, 0);
    }
    return false;
  });
  $('[data-fancybox="gallery"]').fancybox({
    infobar: false,
    buttons: [
      "close"
    ]
  });
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