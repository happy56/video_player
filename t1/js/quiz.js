$(document).ready(function(){
    'use strict';

    function setup_quiz(interp_obj){
        var i,ilen, html = '<h1 id="q-question">'+interp_obj.qustion+'</h1>';
        for(i=0,ilen=interp_obj.answers.length; i<ilen; i+=1){
            html += '<button class="qz-ans-btn" id="ans-' + i 
                    + '" >'+interp_obj.answers[i] + '</button>';
        }

        //console.log(html);

        $('#quized').html(html);
    }


    tg.bind('quiz',function(e, interp_obj){
        setup_quiz(interp_obj);

        console.log('quiz is open ', interp_obj);
        console.table(interp_obj);
    });
});