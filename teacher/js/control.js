$(document).ready(function(){
    'use strict';
    function get_id_from_url(url){
        if(url.match('v=')!== null){
            var video_id = url.split('v=')[1];
            var andp = video_id.indexOf('&');
            if (andp !== -1){
                video_id = video_id.substring(0, andp);
            }
            return video_id;

        }
        return url;
    }



    $('#youtube_id').change(function(){
        var video_id = $('#youtube_id').val();
        video_id = get_id_from_url(video_id);
        tg.player.loadVideoById(video_id);
        $('#youtube_id').val(video_id);
        tg.course_data.youtube_id = video_id;
        tg.trigger('update-student-url');

    });

    $('#course_title').change(function(){
        tg.course_data.title = $('#course_title').val().trim();
        tg.trigger('update-student-url');
    });


   tg.bind('save', function(){
       $.post('../backend/save.php', 
       {
           title: tg.course_data.title,
           data: JSON.stringify(tg.course_data),
       }, 
       function(data){
           console.log('data came back ???', data);
           tg.trigger('show_student_url', data);
           tg.trigger('show_interput_list');
           //alert('post callback !! XXXX  is called');
       });
   });

   function student_url(filename){
       return location.href.split('teacher')[0] 
       + 'student/player.html#' 
       + filename;
   }



   tg.bind('show_student_url', function(e, data){
       var surl = student_url(data.filename);
       $('#student_url').attr('href', surl).html(surl);
   });



    tg.bind('update-student-url', function(){
        if(tg.course_data.title.length > 0 && tg.course_data.youtube_id.length > 0){
            tg.trigger('save');
            tg.trigger('open_player_hide_title_id');
        }
    });

    function init_iterps(){
        var i,ilen, html='';
        
        for(i=0,ilen=tg.control_interputs.length;i<ilen;i+=1){
            html += '<button class="ctl-button" data-control="ctr-'
            + tg.control_interputs[i]+ '" >' + tg.control_interputs[i] 
            + '</button>';
        }

        $('#btns-intrups').html(html);
        $('.ctl-button').click(function(e){
            var type = $(e.target).data('control');
            tg.trigger(type);

        });
    }

    init_iterps();



    
});