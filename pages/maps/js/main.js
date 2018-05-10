$(document).ready(function(){
  var colorMaps = prompt('Цвет карты', 'red');
  // var countryCode = window.country_code;
  var countryCode = "UA";
  var colorLocation = prompt('Цвет города', 'yellow')
  var countryBlock = (".block_" + countryCode).toLowerCase();
  $('.country-block').find('.land').css({"fill": colorMaps, "stroke": colorMaps});
  $('.country-block').find('.water').css({"fill": "transparent", "stroke": "transparent"});
  $(countryBlock).css("display", "block");
  var locationRegion = $('.block-location').text();
  // var locationRegion = "Крим";
  var land = $(".land");

  for (var i = 0; i < land.length; i++) {
    var dataRegion = land[i].getAttribute("data-region");
    if (dataRegion == locationRegion) {
      land[i].classList.add('active');
    }
  }

  $('.land').css({"fill": colorMaps, "stroke": colorMaps})
  $('.land.active').css({"fill": colorLocation, "stroke": colorLocation})

});
