$(document).ready(function(){
  var colorMaps = prompt('Цвет карты', 'red');
  var countryCode = prompt('Код страны', 'UA');
  var countryBlock = (".block_" + countryCode).toLowerCase();
  $('.country-block').find('.land').css({"fill": colorMaps, "stroke": colorMaps});
  $(countryBlock).css("display", "block");
});
