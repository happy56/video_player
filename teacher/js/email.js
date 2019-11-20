tg.control_interputs.push('email');

$(document).ready(function(){
   'use strict';
   tg.bind('ctr-email', function(){
       $('.ctr').hide();
       $('#ctr-email').toggle();
       tg.trigger('pause-video');
   });

   var static_iterput = {
           action: 'email',
           time: tg.player_current_time,
           done: false,
           next_action:'play_video',
       };

   $('#e-add').click(function(){
        var iterput = Object.assign({}, static_iterput);
        iterput.time = tg.player_current_time;
        tg.course_data.intreps.push(iterput);
        tg.trigger('save');

        $('#mail_uuid').val('');
   });
});