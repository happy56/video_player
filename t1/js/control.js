$(document).ready(function(){
    'use strict';

    // alert('control!! 9999');
    // console.log(course_data);



    $('#btn_play').click(function(e){
       
        tg.trigger('play_video');
    });

    $('#btn_pause').click(function(e){
       
        tg.trigger('pause_video');
    });

});