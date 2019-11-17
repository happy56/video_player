$(document).ready(function(){
    'use strict';
    tg.bind('quiz',function(e, interp_obj){
        console.log('quiz is open ', interp_obj);
    });
});