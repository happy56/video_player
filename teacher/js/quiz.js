tg.control_interputs.push('quiz');

$(document).ready(function(){
   'use strict';
   tg.bind('player_current_time_changed', function(e, time_in_sec){
       // console.log(time_in_sec);
   });
   tg.bind('ctr-quiz', function(){
       $('.ctr').hide();
       $('#ctr-quiz').toggle();
       tg.trigger('pause-video');
   });

   
    var static_iterput = {
           action: 'quiz',
           time: tg.player_current_time,
           answers:[],
           done: false,
           next_action:'play_video',
       };


   $('#q-add').click(function(){
       var iterput = Object.assign({}, static_iterput);
       iterput.time = tg.player_current_time;
       iterput.answers = [];
       
       var answer, question = $('#question').val().trim();
       if (question !== ''){
           iterput.question = question;
       }
       $('.q-ans').each(function(index, e){
           answer = $(e).val().trim();
           if(answer !== ''){
               iterput.answers.push(answer);
           }
           
       });


       tg.course_data.intreps.push(iterput);
       tg.trigger('save');
       $('.q-a').each(function(i, e){
           $(e).val('');
       })

   });

   $('#q-save').click(function(){

   });

});