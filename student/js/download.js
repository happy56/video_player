
$(document).ready(function(){
    'use strict';
   function downloadfile(e){
       // $('#email').val('');
       tg.trigger('interp_ended');
   }

   function setup(interp_obj){
        
        

        $('#download').show();
        $('#download-btn').click(downloadfile);
    }
   tg.bind('intrup-download',function(e, interp_obj){
        setup(interp_obj);        
    });
});