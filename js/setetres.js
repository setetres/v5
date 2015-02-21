$(document).ready(function(){

    // twitter

    $('#tweet').twittie({
        username: 'setetres',
        apiPath: 'http://file.setetres.st/v5/twitter/tweet.php',
        dateFormat: '%b %d, %Y',
        template: '{{tweet}} <div class="date">{{date}}</div>',
        count: 20,
        hideReplies: true
    });

});