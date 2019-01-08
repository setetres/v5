$(document).ready(function(){

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

    $('.setetres').on('didLoadInstagram', didLoadInstagram);
    $('.setetres').instagram({
        userId: 14404969,
        clientId: '352b088c837843868e5266273ad42ae5',
        accessToken: '14404969.352b088.4a9e511c2d03438b8860faf5319b9f69',
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

    // window load

    $(window).load(function(){
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