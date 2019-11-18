
tg.control_interputs.push('quiz');
$(document).ready(function(){
   'use strict';
   tg.bind('player_current_time_changed', function(e, time_in_sec){
       // console.log(time_in_sec);
   });
   tg.bind('ctr-quiz', function(){
       $('.ctr').hide();
       $('#ctr-quiz').show();
   });

   function save(){
       $.post('../backend/save.php', 

           {
               title: tg.course_data.title,
               data: JSON.stringify(tg.course_data),
           }
           );
   }
   tg.bind('save', save);
   $('#q-add').click(function(){
       var iterput ={
           time: tg.last_current_time,
           answers:[],
           done: false,
           next_action:'play_video',
       };
           
       

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


       // console.log('- ---- --------------- ', tg.course_data);

   });

   $('#q-save').click(function(){

   });

});