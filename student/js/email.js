
$(document).ready(function(){
    'use strict';
   function get_email_add(e){
       $('#email').val('');
       tg.trigger('interp_ended');
   }

   function setup(interp_obj){
        
        

        $('#email').show();
        $('#email-btn').click(get_email_add);
    }
   tg.bind('intrup-email',function(e, interp_obj){
        setup(interp_obj);        
    });
});