$(document).ready(function() {
    $('.main-item-title').click(function(){
       $(this).toggleClass('active');
       $(this).next('.drop').slideToggle();
       $(this).closest('.main-item').siblings().find('.main-item-title').removeClass('active');
       $(this).closest('.main-item').siblings().find('.drop').slideUp();
    });
    $('.open').click(function(){
      $('.main-map').toggleClass('open');
      $('.main-right').toggleClass('active');
      $(this).toggleClass('active');
    });
    if ($('.main-map').height() < 460) {
      $('.main-right').addClass('half');
    }
    else {
      $('.main-right').removeClass('half');
    }
    $('.main-btn').click(function(){
      $('.popup').addClass('active');
      $('.popup-container').removeClass('close');
      $('.popup-container').addClass('open');
    });
  $('.popup-close').click(function(){
    $('.popup').removeClass('active');
    $('.popup-container').removeClass('open');
    $('.popup-container').addClass('close');
  });
  var wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
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
  if($(window).width() > 767) {
    $(".main-list").mCustomScrollbar({
      scrollEasing:"lineaar"
    });
  }


  var $adressList = $('.popup-option_adress');
  var $cityList = $('.popup-option_city');

  $('.select-city').on('change', function() {
    let cityName = $(this).find('option:selected').attr('data-text');

    $adressList.each(function() {
      let $this = $(this);
      if ($this.hasClass(cityName)) {
        $this.show();
        $this.addClass('active');
      } else {
        $this.hide();
        $this.removeClass('active');
      }
    });
    $('option.active').first().prop('selected', true)
  });
  $('.select-adress').on('change', function() {
    let cityName = $(this).find('option:selected').attr('data-text');
    $cityList.each(function() {
      var $this = $(this);

      if ($this.hasClass(cityName)) {
        $this.prop('selected', true);
      }
    });

  });
  $(".mask").mask("+7(999) 999-9999");
});
