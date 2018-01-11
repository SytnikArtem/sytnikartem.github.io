$(document).ready(function() {

  function res() {
    var blockWidth = $('.container').width();
    var blockHeight = $('.container').height();
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var val;
    if (blockWidth < blockHeight && blockWidth <= windowWidth)   {
      val = blockWidth;
    }
    else if (blockWidth >= blockHeight && blockWidth < windowWidth && windowWidth < windowHeight) {
      val = windowWidth;
    }
    else if (blockWidth > blockHeight && blockHeight <= windowHeight) {
      val = blockHeight;
    }
    else if (blockWidth >= blockHeight && blockHeight < windowHeight && windowWidth > windowHeight) {
      val = windowHeight;
    }
    val = val - 30;
    $('.container').height(val).width(val);
  }

  res();

  $(window).resize(function(){
    res();
  })

  $('.container').hover(function(){
    $('.block-icon').toggleClass('active');
  });

  $('.block').hover(function(){
    var indexItem = $(this).index();
    $('.item-icon').eq(indexItem).toggleClass('active');
  });
});
