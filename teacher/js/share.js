tg.control_interputs.push('share');

$(document).ready(function(){
   'use strict';
   tg.bind('ctr-share', function(){
       $('.ctr').hide();
       $('#ctr-share').toggle();
       tg.trigger('pause-video');
   });

   var static_iterput = {
           action: 'share',
           time: tg.player_current_time,
           done: false,
           next_action:'play_video',
       };

   $('#s-add').click(function(){
        var iterput = Object.assign({}, static_iterput);
        iterput.time = tg.player_current_time;
        tg.course_data.intreps.push(iterput);
        tg.trigger('save');
   });
});