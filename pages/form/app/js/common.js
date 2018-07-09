$(document).ready(function(){
  $(".menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 10}, 500);
  });
  $('.select').click(function(){
    $(this).toggleClass('rotate').find('.select-container').toggleClass('active');
  });
  $('.select-option').click(function(){
    var optionText = $(this).text();
    $('.select-selected').text(optionText).parent().parent().find('.select').addClass('active');
  })
});
