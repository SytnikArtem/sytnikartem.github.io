$(document).ready(function() {

    $('.btn-click').click(function(e) {
      e.preventDefault();
      $('.enter').fadeOut();
      $(this).closest('.js-active').fadeOut().removeClass('active').next().fadeIn().addClass('active');
      let windowHeight = $(window).height();
      let height = $('.js-active.active').height() + 100;
      if (windowHeight < height && $(window).width() > 994) {
        $('.main').height(height);
      }
    });
    $('.btn-click_last').click(function(){
      $('.main').height('100vh');
    });
    var counter = 0;
    $('.front-form-btn').click(function(e) {
      e.preventDefault();

      var stepNumber = $('.progress-text-number').text();
      if($(this).hasClass('front-form-btn_back')) {
        counter = counter - 1;
        if (counter == 0) {
          $('.front-first').removeClass('counter1');
        }
        if (counter == 1) {
          $('.front-first').removeClass('counter2');
        }
        if (counter == 2) {
          $('.front-first').removeClass('counter3');
        }
        $(this).closest('.front-main').fadeOut().prev().fadeIn();
        $(this).closest('.front-left').find('.progress-item.active').eq(+stepNumber - 1).removeClass('active');
        $('.progress-text-number').text(+stepNumber - 1);
      }
      else {
        counter ++;
        if (counter == 1) {
          $('.front-first').addClass('counter1');
        }
        if (counter == 2) {
          $('.front-first').addClass('counter2');
        }
        if (counter == 3) {
          $('.front-first').addClass('counter3');
        }
        $(this).closest('.front-main').removeClass('active');
        $(this).closest('.front-main').next().addClass('active');
        $(this).closest('.front-main').fadeOut().next().fadeIn();
        $(this).closest('.front-left').find('.progress-item.active').next().addClass('active');
        $('.progress-text-number').text(+stepNumber + 1);
      }
    });
    $('.services-btn').click(function() {
      $('.popup-first').fadeIn();
      $('.fixed-header').addClass('index-fix')
    });
    $('.services-close').click(function(){
      $('.popup-first').fadeOut();
      $('.fixed-header').removeClass('index-fix')
    });
  $('.services2-close').click(function(){
    $('.popup-second').fadeOut();
  });
  $('.skills-close').click(function(){
    $('.popup-third').fadeOut();
    $('.fixed-header').removeClass('index-fix')
  });
    $('.skills-btn').click(function() {
      $('.popup-third').fadeIn();
      $('.fixed-header').addClass('index-fix')
    });
    $('.popup-third-btn').click(function() {
      $(this).closest('.popup').fadeOut();
    });
    $('.popup-first-link').click(function(e) {
      e.preventDefault();
      let itemIndex = $(this).closest('.popup-first-item').index();
      $('.popup-second-item').eq(itemIndex).addClass('active').siblings().removeClass('active');
      // $('.content-item').eq(itemIndex).fadeIn().siblings().fadeOut();
      $('.content-item').eq(itemIndex).addClass('active').siblings().removeClass('active');
      $('.popup-second').fadeIn();
    });
    $('.popup-second-item').click(function() {
      let clickIndex =   $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.content-item').eq(clickIndex).addClass('active').siblings().removeClass('active');
    });
    $('.content-right-btn').click(function() {
      $('.popup').fadeOut();
    });
    $('.info-item').click(function() {
      let indexMenu = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $(this).closest('.edit').find('.edit-content').eq(indexMenu).fadeIn().siblings().fadeOut();
      if (indexMenu > 0 && $(this).closest('.team').length > 0) {
        $(this).closest('.edit-left').find('.edit-photo-circle').addClass('team');
        $(this).closest('.edit-left').find('.general-left-teamtitle').addClass('team');
      }
      else {
        $(this).closest('.edit-left').find('.edit-photo-circle').removeClass('team');
        $(this).closest('.edit-left').find('.general-left-teamtitle').removeClass('team');
      }
      if ($(this).hasClass('mob-edit-item') && $(this).index() > 0) {
        $('.edit-left').fadeOut();
      }
      else {
        $('.edit-left').fadeIn();
      }
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
      let elem = $(".ins-video-container");
      if(e.target!=elem[0]&&!elem.has(e.target).length)
      {
        $('.ins-video').fadeOut();
      }
    });
    $('.ins-video-close').click(function(e){
        $('.ins-video').fadeOut();
    });
    $('.up-photo').click(function(e){
      let elem = $(".up-photo-container");
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
     $(".message-list, .message-chat-scroll").mCustomScrollbar({
      theme:"chat-list",
      scrollEasing:"lineaar"
    });
    if($(window).width() < 994) {
      $(".up-photo-list").mCustomScrollbar("destroy");
      $(".message-list, .message-chat-scroll").mCustomScrollbar("destroy");
    }
    $('.general-center-item').click(function() {

      $(this).addClass('active').siblings().removeClass('active');
      var index = $(this).index();
      $('.general-top-change').eq(index).show().siblings().hide();

      if (index === 2 || index === 0) {
        $('.general-top-input_hide').hide();
      }
      else {
        $('.general-top-input_hide').show();
      }
    });
  $('.general-center-item').click(function() {
    let index = $(this).index();
    if (index > 2) {
      $('.general-top-label').fadeIn();
    }
    else {
      $('.general-top-label').fadeOut();
    }
  });
    $('#options').ddslick();
    $('#options2').ddslick();
    $('.general-left-item-btn').click(function() {
      $(this).closest('.general-left-item').toggleClass('active').siblings().removeClass('active');
      $('.general-left-item').find('.general-left-sublist').slideUp();
      $('.general-left-item.active').find('.general-left-sublist').slideDown();
    });
    $('.general-header-drop').click(function() {
      $(this).next().slideToggle();
    });
    $('.general-post-more').click(function() {
      $(this).find('.general-header-droplist').slideToggle();
    });
    $('.general-left-button-svg').click(function() {
      $(this).closest('.general-left-block').find('.general-left-list').slideToggle();
    });
  $('.general-left-button-svg.filter').click(function() {
    $(this).parent().siblings().find('.network-filter-sublist').slideUp();
    $(this).next().slideToggle();

  });
  $('.user-left-more').click(function() {
    $(this).prev().toggleClass('active');
    $(this).closest('.user-left-second').siblings().find('.user-left-more').prev().removeClass('active');
  });
  $('.general-center-invite-btn').click(function() {
    $('.invite').fadeIn();
  });
  $('.invite').click(function(e){
    let elem = $(".invite-container");
    if(e.target!=elem[0]&&!elem.has(e.target).length)
    {
      $('.invite').fadeOut();
    }
  });
  $('.team-switch-label').click(function() {
    $('.team-popup').fadeIn();
  });
  $('.team-popup-btn').click(function() {
    $('.team-popup').fadeOut();
  });
  $('.team-popup').click(function(e){
    let elem = $(".team-popup-container");
    if(e.target!=elem[0]&&!elem.has(e.target).length)
    {
      $('.team-popup').fadeOut();
    }
  });
  $('.project-popup-btn').click(function() {
    $('.project-popup').fadeIn();
  });
  $('.project-popup').click(function(e){
    let elem = $(".project-popup-container");
    if(e.target!=elem[0]&&!elem.has(e.target).length)
    {
      $('.project-popup').fadeOut();
    }
  });
  $('.user-menu-item').click(function() {
    let indexMenu = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest('.user-right').find('.user-slide').eq(indexMenu).fadeIn().siblings().fadeOut();
  });
  $('.compose-item').click(function() {
    let indexMenu = $(this).index();
    $(this).closest('.edit-content').find('.edit-content-change').eq(indexMenu).fadeIn().siblings().fadeOut();
    if (indexMenu == 0) {
      $(this).closest('.edit-block').find('.edit-subtitle_compose').text('Find the right professional to strengthen your team')
    }
    else if (indexMenu == 1) {
      $(this).closest('.edit-block').find('.edit-subtitle_compose').text('What type of contracting  option would suit you?')
    }
  });
  $('.edit-btn_cumpose').click(function() {
    $(this).closest('.edit-content').fadeOut().next().fadeIn();
  });
  $('.edit-btn_back').click(function() {
    $(this).closest('.edit-content').fadeOut().prev().fadeIn();
  });
  $('.job-close').click(function(){
    $(this).closest('.compose').find('.edit-content').eq(1).fadeOut();
    $(this).closest('.compose').find('.edit-content').eq(0).fadeIn();
  });
  $('.message-checkbox_all').click(function() {
    if($(this).is(':checked')) {
      $('.message-checkbox_item').prop('checked', true);
    }
    else {
      $('.message-checkbox_item').prop('checked', false);
    }
  });
  $('.btn-portfolio.portfolio-user').click(function(){
    $('.portfolio-popup.popup-user').addClass('active');
  });
  $('.btn-portfolio.portfolio-team').click(function(){
    $('.portfolio-popup.popup-team').addClass('active');
  });
  $('.portfolio-close').click(function(){
    $('.portfolio-popup').removeClass('active');
  });
  $('.user .portfolio-popup-item').click(function(){
    $('.user .user-right').addClass('active');
    let index = $(this).index();
    $('.user .user-slide').removeClass('active');
    $('.user .user-slide').eq(index + 1).addClass('active');
  });
  $('.company .portfolio-popup-item').click(function(){
    $('.company .user-right').addClass('active');
    let index = $(this).index();
    $('.company .user-slide').removeClass('active');
    $('.company .user-slide').eq(index + 1).addClass('active');
  });
  $('.portfolio-item-close').click(function(){
    $('.user-right').removeClass('active');
    $('.user-slide').removeClass('active');
  });
  $('.menu-open').click(function(){
    $('.general-menu').toggleClass('active');
  });
  $('.compose-open').click(function(){
    $('.general-compose').addClass('active');
  });
  $('.general-compose-link').click(function(e){
    e.preventDefault();
    $('.general-compose-list').addClass('hide');
    $('.general-top-block').addClass('active');
    var index2 = $(this).parent().index();
    $('.general-top-change2').eq(index2).show().siblings().hide();
      if (index2 === 2 || index2 === 0) {
          $('.general-top-input_hide').hide();
      }
      else {
          $('.general-top-input_hide').show();
      }
  });
  $('.general-compose-link').click(function() {
      var index2 = $(this).parent.index();
      if (index2 > 2) {
          $('.general-top-label').fadeIn();
      }
      else {
          $('.general-top-label').fadeOut();
      }
  });
  $('.user-mob-btn').click(function(){
    $(this).parent().parent().siblings().show();
    $(this).parent().parent().hide();
  });
  $('.edit_btn').click(function(){
    $('.message-label_list').show();
    $('.second-step').show();
    $('.first-step').hide();
  });
  $('.done_btn').click(function(){
    $('.message-label_list').hide();
    $('.second-step').hide();
    $('.first-step').show();
    $('.message-list-hide').hide();
    $('.message-checkbox_item').prop('checked', false);
    $('.delete_btn, .block_btn').removeClass('active');
  });
  $('.message-checkbox_item').click(function(){
    if($('.message-checkbox_item').is(':checked')){
      $('.delete_btn, .block_btn').addClass('active');
    }
    else {
      $('.delete_btn, .block_btn').removeClass('active');
    }
  });
  $('.delete_btn, .block_btn').click(function(){
    if($('.message-checkbox_item').is(':checked')){
      $('.delete_btn, .block_btn').addClass('active');
      $(this).removeClass('active');
      $('.message-checkbox_item').closest('.message-list-item').find('.message-list-hide').hide();
      $('.message-checkbox_item:checked').closest('.message-list-item').find('.message-list-hide').show();
    }
  });
  $('.question-btn').click(function(){
    $(this).closest('.message-list-hide').hide();
    $(this).closest('.message-list-item').find('.message-checkbox_item').prop('checked', false);
    if(!$('.message-checkbox_item').is(':checked')){
      $('.delete_btn, .block_btn').addClass('active');
    }
  });
  $('.message-tabs-item').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.message-list-list').eq($(this).index()).show().siblings().hide();
  });
  $('.message-list-item').swipe({
    swipeLeft:function(event, direction) {
      $(this).find('.message-list-flex').addClass('active');
      $(this).find('.message-actions').addClass('active');
    },
    swipeRight:function(event, direction) {
      $(this).find('.message-list-flex').removeClass('active');
      $(this).find('.message-actions').removeClass('active');
    }
  });
});
