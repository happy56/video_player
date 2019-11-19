$(document).ready(function(){
    'use strict';

    // alert('control!! 9999');
    // console.log(course_data);
    var intups_list = [];

    tg.bind('new_video', function(){
        var i,ilen;
        
        for(i=0,ilen=tg.course_data.intreps.length; i<ilen; i+=1){
            intups_list.push(tg.course_data.intreps[i].time);
        }
        console.log(intups_list);
    });

    

    $('#btn_play').click(function(e){
        tg.trigger('play_video');
    });

    $('#btn_pause').click(function(e){
        tg.trigger('pause_video');
    });

    tg.bind('per_sec', function(e, video_current_time){
        var indx = intups_list.indexOf(video_current_time); 
        if(indx !== -1){
            tg.trigger('interp_call', indx);
        }
    });

    tg.bind('interp_call', function(e, interp_indx){
        var interp_obj = tg.course_data.intreps[interp_indx];
        console.log(interp_obj);
        if(interp_obj.done === false){
            tg.trigger('pause_video');
            tg.trigger(interp_obj.action, interp_obj);
            interp_obj.done = true;
            console.log('intrup called');
        }
    });



});