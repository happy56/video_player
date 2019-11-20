$(document).ready(function(){
    'use strict';
    function update_answer(woking_quiz, answer_index){

    }


    var woking_quiz;
    function answer_quiz(e){
        
        var answer_index =  $(e.target).data('index');
        
        update_answer(woking_quiz, answer_index);

        if(woking_quiz.next_action === 'go_to_link'){
            window.location.assign(woking_quiz.next_url);
        }else{
            tg.trigger('interp_ended');
            
        }
        
    }
    function setup_quiz(interp_obj){
        woking_quiz = interp_obj;

        var i,ilen, html = '<h1 id="q-question">'+interp_obj.question+'</h1>';
        for(i=0,ilen=interp_obj.answers.length; i<ilen; i+=1){
            html += '<button class="qz-ans-btn"  data-index="'
                    + i + '" ">'+interp_obj.answers[i] + '</button> ';
        }

        

        $('#quized').html(html).show();
        $('.qz-ans-btn').click(answer_quiz);
    }


    tg.bind('intrup-quiz',function(e, interp_obj){
        setup_quiz(interp_obj);        
    });
});
