var tg = {};
tg.interputs = [];

$(document).ready(function(){
    'use strict';
    tg.$doc = $(document);
    tg.bind = function(evt_name, func){
        tg.$doc.bind(evt_name, func);
    };
    tg.trigger = function(evt_name, data){
        tg.$doc.trigger(evt_name, data);
    };
    tg.time_update_interval = -999;
    tg.last_current_time = -99;

});



// $(document).ready(function(){
//     'use strict';
    
// });