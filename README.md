# VanhackHackathon Project : Thinkific Interactive Course Builder and Player

This is a interactive Course builder and player which is made using HTML / CSS / JS. there is simple backend which is made with PHP. Only Youtube iframe api,  jQuery and google's web font Roboto has been used as extrenal library and asset. 



"CHALLENGE 1 - CHOOSE YOUR OWN ADVENTURE VIDEO MAKER"



## Demo

Go to this link for live Demo : <https://talgol.com/thinkific-video/teacher/teacher.html>



## Usage

1. Goto http://localhost/thinkific-video/teacher/teacher.html 

   1. Type your course title 
   2. Add a video url from youtube
   3. add interaction 
   4. Get of the **url** of the course from top right corner 

2. Goto player using url from last step. If the player does not load (please refresh)

   1. Play the video 
   2. enjoy the interactive course. 

   



## Sections

This demo project contents 3 parts. 

1. teacher (course builder)
2. student (course Player)
3. backend 



## Dependance 

There is 2 dependce, 

1. The base folder name "video_player" should be "thinkific-video"
2. Data folder inside the backend folder should be writeable. (if your are using mac or linux)



## Installation

1. Insall Apache severver / Xampp / Nginx with PHP. 
2. goto your web root
3. git clone git@github.com:happy56/video_player.git thinkific-video
4. make /thinkific-video/backend/data writeable 



## Project Planning /  Design Decision 

Building an engaging course meterials for students is a challange for the teachers. To make that process easier for the teachers this project is designed. 

#### Prototyping

For this project, I had very little amount of time. So, I was planning to a quick prototype of course builder and gradually i'll add specificaiton. 

#### Why Youtube ?

I am using youtube videos cause they the well documented api. and almost everyone in internet knows how to play youtube video. 



#### How the UX is designed ?

The example course builders I found very complicated and hard to follow. You need a 4-5 hour training to understand what to do and how it should be done. Personally, I like simplicity. I designed the whole experince using the familiar youtube video player. 



#### Why the design does not show all the options at a time ?

To keep the user interface simple and easy to use. we kept the most of the option hidden. which will not over warm a new user. The app ask what ever is requied at that time of the point.



#### How the the app is structure works ?

This is an non-blocking web app. I made using a "event driven" architecture. There are event lisetener and everything from user click, youtube players info, server response everthing triggers (try to trigger) a event. 

if the there is no eventlisner the software does not fails or breaks. browsers handdles the events accodingly so the app does not get stuck. 







