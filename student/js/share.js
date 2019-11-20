$(document).ready(function(){
    'use strict';
   function share(e){
       // $('#email').val('');
       tg.trigger('interp_ended');
   }

   function setup(interp_obj){
        
        

        $('#share').show();
        $('.ashare-btn').click(share);
    }
   tg.bind('intrup-share',function(e, interp_obj){
        setup(interp_obj);        
    });
});