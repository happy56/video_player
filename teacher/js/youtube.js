$(document).ready(function(){
    'use strict';
   
   function onPlayerStateChange(event){
       // console.log('status change ', event);
       clearInterval(tg.time_update_interval);
       tg.time_update_interval = setInterval(update_triggers, 500);
   }

   function onPlayerReady(e){
       
   }

   function update_triggers(){
       var player_time = Math.floor(tg.player.getCurrentTime());
       tg.player_current_time = player_time;
       
       if(tg.last_current_time !== tg.player_current_time){
           tg.last_current_time = player_time;
       }else{
           if(tg.last_player_status === tg.player.getPlayerState()){
               return;
           }else{
               tg.last_player_status = tg.player.getPlayerState();
           }
       }
       
               
       tg.trigger('player_current_time_changed', player_time);
           
   }

    var onYouTubeIframeAPIReady = function () {
        tg.player = new YT.Player('player', 
            {
              height: '390',
              width: '640',
              videoId: 'aFZ7bBaYpcw',
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
                },
               playerVars: {
                 rel:0,
                 // controls:0,
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
        
    };

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    tg.bind('pause-video', function(){
        if(tg.player !== false){
            if(typeof tg.player.pauseVideo === 'function'){
                if(tg.player.getPlayerState() === 1){
                    tg.player.pauseVideo();
                }
            }
        }
        // tg.trigger('video-paused', );
        update_triggers()
    });


    
});