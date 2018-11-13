// координаты маркеров
var markersData = [
  {
    lat: 55.747230,     // Широта
    lng: 37.601266,    // Долгота
    name: "Адрес 1", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/pin_city.png'
  },
  {
    lat: 55.769072,
    lng: 37.619284,
    name: "Адрес 2",
    url: 'img/pin_orange.png'
  },
  {
    lat: 55.752742,
    lng: 37.648823,
    name: "Адрес 3",
    url: 'img/pin_city.png'
  },
  {
    lat: 55.729838,
    lng: 37.664774,
    name: "Адрес 4",
    url: 'img/pin_orange.png'
  },
  {
    lat: 43.591971,
    lng: 39.741253,
    name: "Адрес 5",
    url: 'img/pin_orange.png'
  },
  {
    lat: 43.606122,
    lng: 39.765655,
    name: "Адрес 6",
    url: 'img/pin_city.png'
  },
  {
    lat: 43.568324,
    lng: 39.770736,
    name: "Адрес 7",
    url: 'img/pin_orange.png'
  },
  {
    lat: 43.590937,
    lng: 39.783139,
    name: "Адрес 8",
    url: 'img/pin_city.png'
  },
  {
    lat: 45.031579,
    lng: 38.987170,
    name: "Адрес 9",
    url: 'img/pin_orange.png'
  },
  {
    lat: 45.056285,
    lng: 39.018123,
    name: "Адрес 10",
    url: 'img/pin_city.png'
  },
  {
    lat: 45.068979,
    lng: 38.914434,
    name: "Адрес 11",
    url: 'img/pin_orange.png'
  },
  {
    lat: 45.047136,
    lng: 38.943943,
    name: "Адрес 12",
    url: 'img/pin_city.png'
  }
];
// координаты центров городов
var centerMaps = [
  {
    latX: 55.755773,
    latY: 37.617761
  },
  {
    latX: 43.581509,
    latY: 39.722882
  },
  {
    latX: 45.048259,
    latY: 38.983913
  },
  {
    latX: 54.733263,
    latY: 55.973696
  },
  {
    latX: 52.603237,
    latY: 39.602029
  },
  {
    latX: 55.743105,
    latY: 52.397817
  },
  {
    latX: 43.214003,
    latY: 27.916140
  },
  {
    latX: 42.696776,
    latY: 23.323950
  }
]
var map, latLng, url, name, mark, marker, thisCenter;
function initMap() {
  thisCenterX = centerMaps[0].latX;
  thisCenterY = centerMaps[0].latY;
  var centerLatLng = new google.maps.LatLng(thisCenterX, thisCenterY);
  var mapOptions = {
    center: centerLatLng,
    zoom: 12,
    scrollwheel: false,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
    styles:
      [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "saturation": 36
            },
            {
              "color": "#dedede"
            },
            {
              "lightness": 40
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            },
            {
              "gamma": "0.56"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "weight": "10.00"
            },
            {
              "invert_lightness": true
            },
            {
              "gamma": "7.24"
            },
            {
              "lightness": "60"
            },
            {
              "saturation": "66"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "invert_lightness": true
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.medical",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.school",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#d2cece"
            },
            {
              "invert_lightness": true
            },
            {
              "weight": "10.00"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#ff0000"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "gamma": "10.00"
            },
            {
              "invert_lightness": true
            },
            {
              "weight": "10.00"
            },
            {
              "color": "#ffffff"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "weight": "5.10"
            },
            {
              "gamma": "0.00"
            },
            {
              "hue": "#ff0000"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            }
          ]
        }
      ]
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);


  // Определяем границы видимой области карты в соответствии с положением маркеров
  var bounds = new google.maps.LatLngBounds();

  for (let i = 0; i < markersData.length; i++){

    latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
    name = markersData[i].name;
    url = markersData[i].url;
    number = markersData[i].number;
    addMarker(latLng, name, url, number);
  }

  // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
  // map.fitBounds(bounds);
  var myoverlay = new google.maps.OverlayView();
  myoverlay.draw = function () {
    this.getPanes().markerLayer.id='markerLayer';
  };
  myoverlay.setMap(map);

}
$('.drop-link').hover(function(){
  let index = $(this).attr("data-number");
  let img = $('#markerLayer img').eq(index);
  img.parent().css({"transform":"scale(2)"});
},
  function(){
    let index = $(this).attr("data-number");
    let img = $('#markerLayer img').eq(index);
    img.parent().css({"transform":"scale(1)"});
  });
$('.main-item-title').click(function(){
  let item = $(this).closest('.main-item').index();
  map.setCenter({lat:centerMaps[item].latX, lng:centerMaps[item].latY})
});
google.maps.event.addDomListener(window, "load", initMap);
function addMarker(latLng, name, url) {
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: name,
    icon: {
      url: url,
      scaledSize: new google.maps.Size(16, 22)
    }
  });
}
