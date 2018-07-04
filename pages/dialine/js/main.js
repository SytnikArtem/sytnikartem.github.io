$( document ).ready(function() {
       $(".twelfth-click").click(function() {
        $(this).parent(".twelfth-item").find(".twelfth-textblock").toggleClass("active"), $(this).toggleClass("active")
    }), $(".twelfth-btn_popup1").click(function() {
        $(".popup-container").show(), $(".popup-container").mouseup(function(p) {
            var e = $(".popup-container");
            0 === e.has(p.target).length && (e.hide(), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active"), $(".popup-review").val(""))
        })
    }), $(".popup-btn").click(function() {
        $(".popup-review").val().length > 0 && ($(".popup-block-second").addClass("active"), $(".popup-block-first").addClass("active"))
    }), $(".popup-close").click(function() {
        $(".popup-container").hide(), $(".popup-review").val(""), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active")
    })

});

var animTimer;

function animate() {
    animTimer = setInterval(function () {
        var item = $('.item-number');
        var block = $('.fourth-item');
        var green = $('.sector-green');
        for (var i = 0; i < item.length; i++) {
          var num = item.eq(i).text();
          if (num == 0) {
              item.eq(i).text('6');
              block.eq(i).removeClass('red');
              block.eq(i).find(green).removeClass('red');
          }
          else {
            num = --num;
            item.eq(i).text(num);
              if (num == 0) {
                block.eq(i).addClass('red');
                block.eq(i).find(green).addClass('red');
              }
          }
        }

    }, 1000)
};
$(function () {
  var animateBlock = $('.fourth');
  var flag = true;
  $(window).scroll(function(){
    var scrollEvent = ($(window).scrollTop() > (animateBlock.position().top - $(window).height()));
    if (scrollEvent && flag) {
      flag = false;
      animate();
    }
  });
});
