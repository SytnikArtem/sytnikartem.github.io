$(document).ready(function() {
  if($(window).width() > 999) {
    $('.reviews-employee-wrapper .comment').on('click', function() {
      var slide = $(this).parent().index();

      console.log(slide);

      $('.popup-review').addClass('show').find('#slick-slide0' + slide).click();
    });

    $('.popup-review, .popup__close').on('click', function() {
      $(this).closest('.popup-review').removeClass('show');
    });

    $('.popup__body').on('click', function(event) {
      event.stopPropagation();
    });
  }
  else {
     $('.reviews-employee-wrapper .comment').on('click', function() {
       var item = $(this).find('p')
      if(item.hasClass('active')) {
        item.removeClass('active');
      }
      else {
        $('.reviews-employee-wrapper .comment p').removeClass('active');
        item.addClass('active');
        $(this).addClass('active');
      }
     });
  }
});
