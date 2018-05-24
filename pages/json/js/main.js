$(document).ready(function(){
    let countryCode = "RU";


    // console.log(block_ua);
    // console.log(blockCurrent);
    let colorMaps = prompt('Цвет карты', 'black');
    let colorBorder = prompt('Цвет границ', 'white');
    // let countryCode = window.country_code;
    $('.active-location').css({"display": "none"});
    let colorLocation = prompt('Цвет города', 'yellow');
    let locationRegion = prompt('Город', 'Киев');
    // let locationRegion = $('.block-location').text();s
    // if(region.length > 0) {
    //   locationRegion = region;
    // }

    // let countryBlock = (".block_" + countryCode).toLowerCase();

    // $(countryBlock).css("display", "block");


    function createMap(){
        $.getJSON('countries.json', function(country) {
            let locationBlock = '<div class="active-location"><span class="active-location-svg"><svg viewbox="0 0 80 80" height="20" width="20"><path d="M 61.615,10.966 C 58.705,8.053 55.306,5.795 51.506,4.25 40.071,-0.382 27.046,2.271 18.328,10.978 12.545,16.77 9.353,24.144 9.353,31.769 c 0,7.613 3.19,14.995 8.975,20.781 l 3.182,3.153 c 6.386,6.31 11.893,11.758 16.618,19.331 L 39.966,78 41.816,75.034 C 46.541,67.461 52.048,62.013 58.423,55.71 l 3.191,-3.17 C 73.658,40.496 73.658,23.011 61.615,10.966 z M 49.477,42.641 c -5.25,5.258 -13.76,5.258 -19.011,0 -5.249,-5.24 -5.249,-13.75 0,-19 5.251,-5.24 13.761,-5.24 19.011,0 5.238,5.25 5.238,13.758 0,19 z" style="fill:#929497" /></svg></span><span class="active-location-text"></span></div>';
            let blockCurrent = country[countryCode];
            $('.country-block').append('<h3 class="title">Доставка осуществляется по всей <span class="current-country"></span></h3>').append(locationBlock).append(blockCurrent);
            let countryCodeValue = countryCode.toLocaleLowerCase()+'.json';
            console.log(countryCodeValue);
            detect(countryCodeValue);
        })
    }

    function detect(code){
        console.log('rew');
        console.log(code);
        $.getJSON(code, function(arr) {
        let titleLocation;
        console.log('re');
        console.log(arr);
        let land = $(".land");
        let currentCountry = arr.country[0];
        $('.current-country').text(currentCountry);
        for (let key in arr) {
            for (let i = 0; i < arr[key].length; i++){
                if (locationRegion === arr[key][i]) {
                    titleLocation = arr[key][0];
                    console.log(arr[key][i]);
                }
            }
        }
        for (let j = 0; j < land.length; j++) {
            let dataRegion = land[j].getAttribute("title");
            if (dataRegion === titleLocation) {
                $('.active-location').css({"display": "block"});
                land.eq(j).addClass('active');
                $('.land.active').css({"fill": colorLocation, "stroke": "transparent"});
                $('.country-block').find('.land').css({"fill": colorMaps, "stroke": colorBorder});
                $('.country-block').find('.water').css({"fill": "transparent", "stroke": "transparent"});
                positionLocation();
            }
        }
        $('.active-location-text').text(titleLocation);
        $('.land.active').css({"fill": colorLocation, "stroke": "transparent"});
        });
    }
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
            console.log('1 зона');
            console.log(blockWidth / 4)
        }
        else if(blockPositionLeft + blockWidth / 4 * 3 > leftPosition) {
            $('.active-location-text').css({"left": - widthLocationText / 2 + locationWidth, "top": "22px"});
            console.log('2 зона');
            console.log(blockWidth / 4 * 3)
        }
        else {
            console.log('3 зона');
            $('.active-location-text').css({"left": - widthLocationText - 5});
        }
    }

    createMap();

    $(window).resize(function() {
        positionLocation();
    });

});
