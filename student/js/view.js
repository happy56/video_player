$(document).ready(function(){
    'use strict';
    var $overlay = $('#overlay');


    tg.bind('play_video', function(){
        $overlay.addClass('overlay-hide').removeClass('overlay-show');
    });

    tg.bind('pause_video', function(){
        $overlay.removeClass('overlay-hide').addClass('overlay-show');
    });

    

    tg.bind('new_video', function(){
        if(typeof tg.course_data.title === 'string'){
            $('#o-h1').html('Couse : ' + tg.course_data.title);
        }
    });



}); 