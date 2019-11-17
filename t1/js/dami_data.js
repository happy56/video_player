$(document).ready(function(){
    'use strict';
    var course_data = {
        youtube_id: 'MAoOAa_izh0',//'SLGJHvnmkoU',
        intreps: [
            {
                
                time: 2,
                action: 'quiz',
                qusiton_id: 0,
                qustion:'What are the OS you use?', 
                answers: [
                    'Windows 7',
                    'OS X',
                    'linux',
                    'Unix',
                ],
                done: false,

            },
            {

                time: 5,
                action: 'quiz',
                qusiton_id: 1,
                qustion:'Which flavor of ice cream do you love?', 
                answers: [
                    'Vanila',
                    'Potatp Chip',
                    'Chocolate',
                    'Raspberry',
                    'Blue berry',
                    'Stawberry',
                ],
                done: false,

            }
        ]
    };
    tg.course_data = course_data;

});   