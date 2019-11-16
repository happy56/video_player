$(document).ready(function(){
    'use strict';
    
    function onPlayerReady(){
        tg.player.playVideo();
    }


    function onPlayerStateChange(){
        console.log('status change ', event);
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
                 color: 'white',
              //   playlist: 'taJ60kskkns,FG0fTKAqZ5g',
                 enablejsapi:1 ,
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