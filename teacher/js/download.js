tg.control_interputs.push('download');

$(document).ready(function(){
   'use strict';
   tg.bind('ctr-download', function(){
       $('.ctr').hide();
       $('#ctr-download').toggle();
       tg.trigger('pause-video');
   });

   var static_iterput = {
           action: 'download',
           time: tg.player_current_time,
           done: false,
           next_action:'play_video',
       };

   $('#d-add').click(function(){
        var iterput = Object.assign({}, static_iterput);
        iterput.time = tg.player_current_time;
        iterput.download_url = $('#download_url').val().trim();
        
        if(iterput.download_url.length > 0){
          tg.course_data.intreps.push(iterput);
          tg.trigger('save');
          $('#download_url').val('');
        }
   });
});