$(function() {

  $('.owl-carousel').owlCarousel({
    nav : true,
    dots : true,
    loop : true,
    items : 3,
    margin : 15,
    navSpeed : 900,
    dotsEach : 1,
    dotsSpeed : 900,
    startPosition : 1,
    navText: ['', ''],
    responsive : {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      767: {
        items: 3,
      },
    }
  });



    if($(window).width() > 767) {

      var item = $('.help-item');

        item.click(function () {

            if ($(this).hasClass('active-bg')) {
                $(this).removeClass('active-bg')
            }
            else {
                item.removeClass('active-bg');
                $(this).addClass('active-bg')
            }
        });
    }
    else
    {
        var item = $('.help-item');
        item.click(function () {
          item.removeClass('active-bg');
    });
    }
});
