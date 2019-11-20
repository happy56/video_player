$(document).ready(function(){
    'use strict';
    
    var load_video_setTimer = -999;

    tg.bind('load_video', function (){

        tg.player.loadVideoById(tg.course_data.youtube_id);
        tg.trigger('new_video');
        // tg.player.mute();
        tg.trigger('play_video');
        // tg.player.playVideo();
    });

    function onPlayerReady(){
        tg.trigger('good_to_go');
        init_timer();                
    }
    
    tg.bind('good_to_go', function(){
        if(typeof tg.player.loadVideoById !== 'function'){
            return;
        }
        if(tg.course_data === false){
            return;   
        }
        tg.trigger('load_video');
    });

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

      

