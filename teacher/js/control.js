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

    });
    $('#course_title').change(function(){
        tg.course_data.title = $('#course_title').val().trim();
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
        console.log(html);
    }
    init_iterps();
});