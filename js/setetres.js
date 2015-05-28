$(document).ready(function(){

    // twitter

    $('#tweet').twittie({
        username: 'setetres',
        apiPath: 'http://files.setetres.st/js/twitter/tweet.php',
        dateFormat: '%b %d, %Y',
        template: '{{tweet}} <div class="date">{{date}}</div>',
        count: 20,
        hideReplies: true
    });

});