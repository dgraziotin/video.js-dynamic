"use strict";

var player;

function videoHTML(videoNumber) {
    return '<video id="video-js" class="video-js vjs-default-skin" ' +
        'controls preload="auto" width="600" height="300" ' +
        'poster="img/' + videoNumber + '.jpg"' +
        'data-setup=\'{"example_option":true}\'>' +
        '\t<source src="videos/' + videoNumber + '.mp4" type="video/mp4" /> \n' +
        '\t\t<track id="video-srt" kind="captions" src="subs/' + videoNumber + '.srt" srclang="it" label="Italian" default></track>\n ' +
        '\t\t<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>\n' +
        '</video>';
}

$("div.video-thumbnail").click(function () {
    $("div.video-thumbnail").css("background-color", "white");
    $(this).css("background-color", "red");

    var videoNumber = $(this).data("video");

    player.dispose();

    var html = videoHTML(videoNumber);

    $('div.video-background').html(html);

    player = videojs('#video-js');
    window.setTimeout('player.play()', 1500);

});

$(document).ready(function () {
    $('div.video-background').html(videoHTML(1));
    player = videojs('#video-js');
});