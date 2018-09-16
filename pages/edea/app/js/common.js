$(document).ready(function() {

    $('.btn-click').click(function(e) {
      e.preventDefault();
      $('.enter').fadeOut();
      $(this).closest('.js-active').fadeOut().removeClass('active').next().fadeIn().addClass('active');
    });
    var counter = 0;
    $('.front-form-btn').click(function(e) {
      e.preventDefault();

      var stepNumber = $('.progress-text-number').text();
      if($(this).hasClass('front-form-btn_back')) {
        counter = counter - 1;
        $(this).closest('.front-main').fadeOut().prev().fadeIn();
        $(this).closest('.front-left').find('.progress-item.active').eq(+stepNumber - 1).removeClass('active');
        $('.progress-text-number').text(+stepNumber - 1);
      }
      else {
        counter ++
        $(this).closest('.front-main').fadeOut().next().fadeIn();
        $(this).closest('.front-left').find('.progress-item.active').next().addClass('active');
        $('.progress-text-number').text(+stepNumber + 1);
      }
    });
    $('.services-btn').click(function() {
      $('.popup-first').fadeIn();
    })
    $('.skills-btn').click(function() {
      $('.popup-third').fadeIn();
    })
    $('.popup-third-btn').click(function() {
      $(this).closest('.popup').fadeOut();
    });
    $('.popup-first-link').click(function(e) {
      e.preventDefault();
      let itemIndex = $(this).closest('.popup-first-item').index();
      console.log(itemIndex);
      $('.popup-second-item').eq(itemIndex).addClass('active').siblings().removeClass('active');
      $('.content-item').eq(itemIndex).fadeIn().siblings().fadeOut();
      $('.popup-second').fadeIn();
    });
    $('.popup-second-item').click(function() {
      let clickIndex =   $(this).index();
      console.log(clickIndex);
      $(this).addClass('active').siblings().removeClass('active');
      $('.content-item').eq(clickIndex).fadeIn().siblings().fadeOut();
    });
    $('.content-right-btn').click(function() {
      $('.popup').fadeOut();
    });
    $('.edit-main-item').click(function() {
      let idexMenu = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.edit-content').eq(idexMenu).fadeIn().siblings().fadeOut();
    });
    $('.edit-more').click(function() {
      $(this).parent().find('.edit-photo-list').fadeToggle();
    });
    $('.general-top-video').click(function() {
      $('.ins-video').fadeIn();
    });
    $('.general-top-img').click(function() {
      $('.up-photo').fadeIn();
    });
    $('.ins-video').click(function(e){
      var elem = $(".ins-video-container");
      if(e.target!=elem[0]&&!elem.has(e.target).length)
      {
        $('.ins-video').fadeOut();
      }
    });
    $('.ins-video-close').click(function(e){
        $('.ins-video').fadeOut();
    });
    $('.up-photo').click(function(e){
      var elem = $(".up-photo-container");
      if(e.target!=elem[0]&&!elem.has(e.target).length)
      {
        $('.up-photo').fadeOut();
      }
    });
    $('.ins-video-close').click(function(e){
        $('.ins-video').fadeOut();
    });
    $('.up-photo-close').click(function(e){
        $('.up-photo').fadeOut();
    });
    $(".up-photo-list").mCustomScrollbar({
      theme:"my-theme",
      scrollEasing:"lineaar"
    });
    // $(".network-chat-top").mCustomScrollbar({
    //   theme:"my-theme",
    //   scrollEasing:"lineaar"
    // });
    // $('.select-country').ddslick();
    $('#options').ddslick();
    // $(document).mouseup(function(e) {
    //   var popup = $('.main-center');
    //   if(!popup.is(e.target) && popup.has(e.target).length === 0) {
    //     var index = $('.main-center.active').index();
    //     var prevIndex = index - 1;
    //     console.log(index);
    //     console.log(prevIndex);
    //     $('.js-active').eq(prevIndex).fadeIn().addClass('active');
    //     $('.js-active').eq(index).fadeOut().removeClass('active');
    //   }
    // });
});
