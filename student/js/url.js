$(document).ready(function(){
    'use strict';
    function check_hash(){
        var hash = location.hash.substr(1);
        console.log(hash, hash);
        $.get('../backend/data/' + hash +'.json', function(data){
            tg.course_data = data;
            console.log(hash, ' >>>>> hash data', tg.course_data);
            tg.trigger('load_video');
            
        }, 'json');
    }
    check_hash();
});