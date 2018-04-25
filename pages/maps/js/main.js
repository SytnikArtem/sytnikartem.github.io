$(document).ready(function(){
  var colorMaps = prompt('Цвет карты', 'red');
  var countryCode = prompt('Код страны', 'UA');
  var countryBlock = (".block_" + countryCode).toLowerCase();
  $('.country-block').find('.land').css({"fill": colorMaps, "stroke": colorMaps});
  $('.country-block').find('.water').css({"fill": "transparent", "stroke": "transparent"});
  $(countryBlock).css("display", "block");
  var land = $(".land");
  land.mouseover(function(){
    land.removeClass("active");
    this.classList.add("active");
    var dataRegion = this.hasAttribute('data-region');
    if (dataRegion) {
      for(let i = 0; i < land.length; i++) {
        if(land[i].getAttribute('data-region') == this.getAttribute('data-region')) {
          land[i].classList.add('active');
        }
      }
    }
  })
});
