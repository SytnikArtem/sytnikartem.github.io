$(document).ready(function() {

    $('.styler').styler();

    $('.nav-mob-menu.dndd').on('click', function() {
      var $this = $(this),
          $header = $('header'),
          headerHeight = $header.height();

      $header.height(headerHeight);

      $('.header-info').hide();
      $this.toggleClass('active');
      $('.menu-mob.drop.menu').fadeToggle('fast', function() {
        if ($('.menu-mob.drop.menu').css('display') == 'none') {
          $('.header-info').show();
          $header.css('height', 'auto');

        }
      });

    });
    // $(".jq-selectbox__select").click(function(){
    //   var s = $(this).index();
    //   $(".phone-number").removeClass("active"), $(".phone-number").eq(s).addClass("active")
    // });
    $(".header-info .jq-selectbox__dropdown ul").on("click", "li", function() {
        var s = $(this).index();
        $(".phone-number").removeClass("active"), $(".phone-number").eq(s).addClass("active")
    })
})
