
tg.interputs.push('quiz');
$(document).ready(function(){
   'use strict';
   tg.bind('player_current_time_changed', function(e, time_in_sec){
       // console.log(time_in_sec);
   });
   tg.bind('ctr-quiz', function(){
       $('.ctr').hide();
       $('#ctr-quiz').show();
   });

   $('#q-save').click(function(){
       
   });
});