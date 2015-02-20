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

    var quotes = new Array('IJUSTWANNAGOHOME', 'Konami?', 'MAMAHATZ!'),
    randno = quotes[Math.floor(Math.random() * quotes.length)];
    $('.quote').text(randno);

    // taget blank

    $('a[rel=external]').attr('target', '_blank');
    $('.crop').fullscreenbg();

    // window load

    $(window).load(function(){
        $(".crop").fullscreenbg();
        $(".fit-video").fitVids();
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