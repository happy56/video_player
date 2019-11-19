var tg = {};
tg.control_interputs = [];

$(document).ready(function(){
    'use strict';
    tg.$doc = $(document);
    tg.bind = function(evt_name, func){
        tg.$doc.bind(evt_name, func);
    };
    tg.trigger = function(evt_name, data){
        console.info(evt_name, 'tg trigger');
        tg.$doc.trigger(evt_name, data);
    };
    tg.time_update_interval = -999;
    tg.last_current_time = -99;
    tg.course_data = {
        youtube_id: '',
        title: '',
        intreps: []
    };

});



// $(document).ready(function(){
//     'use strict';
    
// });