$(document).ready(function(){
    'use strict';
    var $overlay = $('#overlay');


    tg.bind('play_video', function(){
        $overlay.addClass('overlay-hide').removeClass('overlay-show');
    });

    tg.bind('pause_video', function(){
        $overlay.removeClass('overlay-hide').addClass('overlay-show');
    });

    





}); 