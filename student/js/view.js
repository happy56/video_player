$(document).ready(function(){
    'use strict';
    var $overlay = $('#overlay');


    tg.bind('play_video', function(){
        $overlay.addClass('overlay-hide').removeClass('overlay-show');
    });

    tg.bind('pause_video', function(){
        $overlay.removeClass('overlay-hide').addClass('overlay-show');
    });
    // $('.overlay').click(function(){
    //     tg.trigger('user_pause_video');
    // });
    tg.bind('interp_call', function(){
        $('#paused').hide();
    })

    tg.bind('interp_ended', function(){
        $('.overlay_cnts').hide();
        $('#paused').show();
    })

    tg.bind('new_video', function(){
        if(typeof tg.course_data.title === 'string'){
            $('#o-h1').html(tg.course_data.title);
        }
    });

    tg.bind('load_video', function(){
        $('.wp-loading').hide();
        $('.wp-body').show();
    });

    // $('#btn_play_pos').click(function(){
    //     tg.trigger('play_pasu_video');
    // })

    $('#btn_play').click(function(e){
        tg.trigger('play_video');
    });

    $('#btn_pause').click(function(e){
        tg.trigger('pause_video');
    });


}); 