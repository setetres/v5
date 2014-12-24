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

    var markers = [];

    if(presenceType == 'Aeroportos') {

        markers = markers.slice(markers.length);

        markers.push(new google.maps.Marker({
            position:  new google.maps.LatLng(-19.9245018,-43.9352376),
            map: map,
            title: 'Belo Horizonte',
            icon: image1
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