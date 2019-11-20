$(document).ready(function(){
   'use strict';
    tg.bind('open_player_hide_title_id', function(){
        $('.wp-title-vid').toggle();
        $('.wp-body').toggle();
        $('#edit-title').html(tg.course_data.title);

    });
    tg.bind('player_current_time_changed', function(e, time){
        $('#time-of-intrups').html(time + ' second');
    });


    tg.bind('show_interput_list', function(){
        var html = '';
        $(tg.course_data.intreps).each(function(i, item){
            console.log(i, item);
            html += '<div class="iterp-items intp-' + item.action + '">' 
                + item.action 
                + '<br>⏱'+ item.time +' sec ' 
            +'</div>';
        });

        $('#list-intrups').html(html);
    });
});