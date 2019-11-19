$(document).ready(function(){
    'use strict';
    var load_video_setTimer = -999;
    tg.bind('load_video', function (){

        if(typeof tg.player.loadVideoById !== 'undefined'){
            console.log(typeof tg.player.loadVideoById, tg.player.loadVideoById, 'tg.player');
            tg.player.loadVideoById(tg.course_data.youtube_id);
        }else{
            clearTimeout(load_video_setTimer);
            load_video_setTimer = setTimeout(function(){ 
                    tg.trigger('load_video'); 
                },
                1000);
        }
    });

    function onPlayerReady(){
        init_timer();        
        tg.trigger('new_video');
        tg.player.mute();
        tg.player.playVideo();
    }
    

    tg.bind('play_video', function(){
        tg.player.playVideo();      
    });

    tg.bind('pause_video', function(){
        tg.player.pauseVideo();
    });


    function onPlayerStateChange(){
        // console.log('status change ', event);
    }

    function update_triggers(){
        tg.trigger('per_sec', Math.floor(tg.player.getCurrentTime()));
    }


    function init_timer(){
        clearInterval(tg.time_update_interval);
        tg.time_update_interval = setInterval(update_triggers, 1000);
    }


    var onYouTubeIframeAPIReady = function () {
        tg.player = new YT.Player('player', 
            {
              height: '390',
              width: '640',
              // videoId: tg.course_data.youtube_id,
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
                },
               playerVars: {
                 rel:0,
                 controls:0,
                 modestbranding:0,
                 // color: 'white',
              //   playlist: 'taJ60kskkns,FG0fTKAqZ5g',
                 enablejsapi:1,
              //   modestbranding: 1, 
              //   showinfo: 0, 
              //   ecver: 2
              }
            }
            );
           

            
    }

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

});      

      

