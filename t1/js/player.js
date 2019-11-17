$(document).ready(function(){
    'use strict';
    
    function onPlayerReady(){
        init_timer();
        tg.trigger('new_video');
        //tg.player.playVideo();
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
              videoId: tg.course_data.youtube_id,
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

      



      // function onPlayerReady(event) {
      //   event.target.playVideo();
      // }

      // var done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }
      // function stopVideo() {
      //   player.stopVideo();
      //   console.log('video stoped');
      // }