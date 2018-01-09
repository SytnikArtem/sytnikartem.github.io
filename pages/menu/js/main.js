$(document).ready(function() {
  function res() {
    var blockWidth = $('.container').width();
    var blockHeight = $('.container').height();
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var val;
    if (blockWidth < blockHeight && blockWidth <= windowWidth)   {
      val = blockWidth;
      console.log(val)
    }
    else if (blockWidth >= blockHeight && blockWidth < windowWidth && windowWidth < windowHeight) {
      val = windowWidth;
      console.log(val)
    }
    else if (blockWidth > blockHeight && blockHeight <= windowHeight) {
      val = blockHeight;
      console.log(val)
    }
    else if (blockWidth >= blockHeight && blockHeight < windowHeight && windowWidth > windowHeight) {
      val = windowHeight;
      console.log(val)
    }
    $('.container').height(val).width(val);
  }
  res();

  $(window).resize(function(){
    res();
  })
  $('.block').hover(function(){
    $('.container').addClass('active');
  })
});
