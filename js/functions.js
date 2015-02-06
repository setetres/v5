$(document).ready(function(){

    // twitter

     $('#tweet').twittie({
        username: 'setetres',
        dateFormat: '%b %d, %Y',
        template: '{{tweet}} <div class="date">{{date}}</div>',
        count: 20,
        hideReplies: true
    });

    // instagram

    function createPhotoElement(photo) {
        var innerHtml = $('<img>').addClass('instagram-image').attr('src', photo.images.standard_resolution.url);
        innerHtml = $('<a>').attr('target', '_blank').attr('href', photo.link).append(innerHtml);
        return $('<div>').addClass('instagram-placeholder').attr('id', photo.id).append(innerHtml);
    }

    function didLoadInstagram(event, response) {
        var that = this;
        $.each(response.data, function(i, photo) {
            $(that).append(createPhotoElement(photo));
        });
    }

    $('.instagram').on('didLoadInstagram', didLoadInstagram);
    $('.instagram').instagram({
        userId: 14404969,
        clientId: '352b088c837843868e5266273ad42ae5',
        accessToken: '14404969.352b088.631a62607d9142d192c6ec6f304497d6',
        count: 1
    });

    // konami code

    Mousetrap.bind('up up down down left right left right b a', function() {
        $('#guilherme-pangnotta, #pizza').addClass('active');
        $('#toasty')[0].play();
        setTimeout(function() {
            $('#guilherme-pangnotta, #pizza').removeClass('active');
        },666);
    });

    // quotes

    var quotes = new Array("IJUSTWANNAGOHOME", "Konami?", "MAMAHATZ!"),
    randno = quotes[Math.floor(Math.random() * quotes.length)];
    $('.quote').text(randno);

    // taget blank

    $('a[rel=external]').attr('target', '_blank');

    // window load

    $(window).load(function(){
        $('.fit-video, #map #content').fitVids();
    });

    // window scroll

    $(window).scroll(function(){

        // fixed profile

        if ($(window).height() + $(this).scrollTop() > $('.profile').height()){
            $('.profile').addClass('active');
        } else {
            $('.profile').removeClass('active');
        }

        // fixed twitter

        if ($(window).height() + $(this).scrollTop() > $('.twitter').height()){
            $('.twitter').addClass('active');
        } else {
            $('.twitter').removeClass('active');
        }
    });

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
            'stylers': [
                {
                    'hue': '#ff1a00'
                },
                {
                    'invert_lightness': true
                },
                {
                    'saturation': -100
                },
                {
                    'lightness': 33
                },
                {
                    'gamma': 0.5
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#1a1a1a'
                }
            ]
        }
    ];

    map = new google.maps.Map(document.getElementById('map'),mapOptions);

    var styledMapType = new google.maps.StyledMapType(styles, {name: 'Sete Três'});
    map.mapTypes.set('Sete Três', styledMapType);

    // pin

     var icon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 7,
        strokeColor: '#2ecc71',
        strokeWeight: 2,
        fillColor: '#2ecc71',
        fillOpacity: 0.3
    };

    // markers

    //////////////////////////////////////////////////////////////////////////////////////////////////// inkstarter.cc session #01

    var infowindow1 = new google.maps.InfoWindow({
      content: '<div id="content"><iframe width="560" height="315" src="//www.youtube.com/embed/t8_Dclozre0" frameborder="0" allowfullscreen></iframe></div>'
    });

    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(-19.9337667,-43.9262668),
        icon: icon,
        map: map,
        title: 'InkStarter.cc Session #01'
    });

    google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map,marker1);
        $('#map #content').fitVids();
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////// inkstarter.cc session #02

    var infowindow2 = new google.maps.InfoWindow({
      content: '<div id="content"><iframe width="560" height="315" src="//www.youtube.com/embed/5dVHCu3IlTw" frameborder="0" allowfullscreen></iframe></div>'
    });

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(-19.982666,-43.9450603),
        icon: icon,
        map: map,
        title: 'InkStarter.cc Session #02'
    });

    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map,marker2);
        $('#map #content').fitVids();
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////// inkstarter.cc session #03

    var infowindow3 = new google.maps.InfoWindow({
      content: '<div id="content"><iframe width="560" height="315" src="//www.youtube.com/embed/fuAGa7M5v5w" frameborder="0" allowfullscreen></iframe></div>'
    });

    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-19.944253,-43.9488501),
        icon: icon,
        map: map,
        title: 'InkStarter.cc Session #03'
    });

    google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map,marker3);
        $('#map #content').fitVids();
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////// inkstarter.cc session #04

    var infowindow4 = new google.maps.InfoWindow({
      content: '<div id="content"><iframe width="560" height="315" src="//www.youtube.com/embed/1XEq7i45F7A" frameborder="0" allowfullscreen></iframe></div>'
    });

    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(-19.9273002,-43.9236204),
        icon: icon,
        map: map,
        title: 'InkStarter.cc Session #04'
    });

    google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map,marker4);
        $('#map #content').fitVids();
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////// inkstarter.cc session #05

    var infowindow5 = new google.maps.InfoWindow({
      content: '<div id="content"><iframe width="560" height="315" src="//www.youtube.com/embed/wgZtpF9d_Yk" frameborder="0" allowfullscreen></iframe></div>'
    });

    var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(-19.9068912,-43.9318065),
        icon: icon,
        map: map,
        title: 'InkStarter.cc Session #05'
    });

    google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map,marker5);
        $('#map #content').fitVids();
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////// inkstarter.cc session #06

    var infowindow6 = new google.maps.InfoWindow({
      content: '<div id="content"><iframe width="560" height="315" src="//www.youtube.com/embed/6VOzRz6byOM" frameborder="0" allowfullscreen></iframe></div>'
    });

    var marker6 = new google.maps.Marker({
        position: new google.maps.LatLng(-19.9422802,-43.9468438),
        icon: icon,
        map: map,
        title: 'InkStarter.cc Session #06'
    });

    google.maps.event.addListener(marker6, 'click', function() {
        infowindow6.open(map,marker6);
        $('#map #content').fitVids();
    });

}

// initialize map

google.maps.event.addDomListener(window, 'load', function(){
    initialize();
});