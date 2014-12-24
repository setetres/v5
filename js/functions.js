$(document).ready(function(){

    $(".crop").fullscreenbg();

    $(window).load(function(){
        $(".crop").fullscreenbg();
        $(".fit-video").fitVids();
    });

    initialize('Aeroportos');

});

// map

var map;

function initialize(presenceType){

    var mapOptions = {
        scrollwheel: true,

        mapTypeId: 'Sete Três',

        mapTypeControl: false,
        panControl: false,

        zoom: 12,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },

        scaleControl: true,

        streetViewControl: false,

        center: new google.maps.LatLng(-19.9245018,-43.9352376)
    }

    var styles = [
        {
            "stylers": [
                {
                    "hue": "#ff1a00"
                },
                {
                    "invert_lightness": true
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 33
                },
                {
                    "gamma": 0.5
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1a1a1a"
                }
            ]
        }
    ];

    map = new google.maps.Map(document.getElementById('map'),mapOptions);
    var styledMapType = new google.maps.StyledMapType(styles, {name: 'Sete Três'});
    map.mapTypes.set('Sete Três', styledMapType);

    // custom pin

    var image1 = new google.maps.MarkerImage('../img/pin.svg',
        new google.maps.Size(51, 36),
        new google.maps.Point(0,0),
        new google.maps.Point(15, 34)
    );

     var icon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        strokeColor: 'white',
        strokeWeight: 2
    };

    var markers = [];

    if(presenceType == 'Aeroportos') {

        markers = markers.slice(markers.length);

        // inkstarter.cc session #01

        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(-19.9337667,-43.9262668),
            map: map,
            title: 'InkStarter.cc Session #01',
            icon: icon
        }));

        // inkstarter.cc session #02

        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(-19.9805261,-43.9434383),
            map: map,
            title: 'InkStarter.cc Session #02',
            icon: icon
        }));

        // inkstarter.cc session #03

        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(-19.9273608,-43.9236176),
            map: map,
            title: 'InkStarter.cc Session #03',
            icon: icon
        }));

        // inkstarter.cc session #04

        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(-19.944253,-43.9488501),
            map: map,
            title: 'InkStarter.cc Session #04',
            icon: icon
        }));

        // inkstarter.cc session #06

        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(-19.9422802,-43.9468438),
            map: map,
            title: 'InkStarter.cc Session #06',
            icon: icon
        }));

    }else{

        markers = markers.slice(markers.length);

        markers.push(new google.maps.Marker({
            position:  new google.maps.LatLng(-19.91406, -43.94159),
            map: map,
            title: 'Terminal RodoviÃ¡rio de Belo Horizonte',
            icon: image1
        }));

    }

}

google.maps.event.addDomListener(window, 'load', function(){
    initialize('Aeroportos');
});