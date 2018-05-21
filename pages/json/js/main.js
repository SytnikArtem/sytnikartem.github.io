$(document).ready(function(){
    let colorMaps = prompt('Цвет карты', 'black');
    let colorBorder = prompt('Цвет границ', 'white');
    // let countryCode = window.country_code;
    let countryCode = "UA";
    let colorLocation = prompt('Цвет города', 'yellow');
    let region = prompt('Город', '');
    // let locationRegion = "Бровары";
    let locationRegion = $('.block-location').text();
    if(region.length > 0) {
      locationRegion = region;
    }
    let land = $(".land");
    let countryBlock = (".block_" + countryCode).toLowerCase();
    $('.country-block').find('.land').css({"fill": colorMaps, "stroke": colorBorder});
    $('.country-block').find('.water').css({"fill": "transparent", "stroke": "transparent"});
    $(countryBlock).css("display", "block");

    function positionLocation(){
    let positionPath = $(".land.active").position();
    let positionBlock = $(".top-block").offset();
    let widthPath = $(".land.active")[0].getBoundingClientRect().width / 2;
    let heightPath = $(".land.active")[0].getBoundingClientRect().height / 2;
    let leftPosition = positionPath.left;
    let topPosition = positionPath.top;
    let positionBlockTop = positionBlock.top;
    let locationWidth = $('.active-location').innerWidth() / 2;
    let leftSum = leftPosition + widthPath - 10;
    let topSum = topPosition - positionBlockTop + heightPath - 10;
    $('.active-location').css({"left": leftSum, "top": topSum});

    let widthLocationText = $('.active-location-text').width();
    let blockWidth = $('.country-block').width();
    let blockPositionLeft = $('.country-block').offset().left;;
    console.log(blockWidth);
    console.log(blockPositionLeft);
    if (blockPositionLeft + blockWidth / 4 > leftPosition) {
        console.log('1 зона')
        console.log(blockWidth / 4)
    }
    else if(blockPositionLeft + blockWidth / 4 * 3 > leftPosition) {
        $('.active-location-text').css({"left": - widthLocationText / 2 + locationWidth, "top": "22px"});
        console.log('2 зона');
        console.log(blockWidth / 4 * 3)
    }
    else {
        console.log('3 зона')
        $('.active-location-text').css({"left": - widthLocationText - 5});
    }
    }

    let titleLocation;
    let arrUA;

    function detect(code){
    $.getJSON(code, function(arr) {
        let titleLocation;
        let currentCountry = arr.country[0];
        $('.current-country').text(currentCountry);
        for (let key in arr) {
            for (let i = 0; i < arr[key].length; i++){
                if (locationRegion === arr[key][i]) {
                    titleLocation = arr[key][0];
                }
            }

        }
        for (let j = 0; j < land.length; j++) {
            let dataRegion = land[j].getAttribute("title");
            console.log(dataRegion);
            if (dataRegion === titleLocation) {
                land.eq(j).addClass('active');
            }
        }
        $('.active-location-text').text(titleLocation);
        $('.land.active').css({"fill": colorLocation, "stroke": "transparent"});
        positionLocation();

        $(window).resize(function() {
            positionLocation();
        });
        return arrUA;
    });
    }
    let countryCodeValue = countryCode.toLocaleLowerCase()+'.json';
    detect(countryCodeValue)
});
