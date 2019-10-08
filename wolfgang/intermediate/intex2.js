var Hotels = [
'Hilton',
'Easy',
'Park']




var hotel = new Object();
   hotel.name = 'Hilton';
   hotel.rooms = 40;
   hotel.booked = 25;
   roomTypes = ['twin', 'double', 'suite'];
   hotel.checkAvailability = function() {
       var random = Math.floor(Math.random()*10+1);
       var nights = document.getElementById("nights").value;
       if(nights > random){
       	document.getElementById("output").innerHTML = "Sorry we have no room for you";


       }
       else {
       document.getElementById("output").innerHTML = "Hurra we have room for you";

       }
       

   };
   var element=document.getElementById("button");
   element.addEventListener('click', hotel.checkAvailability,false);



   var hotel = new Object();
   hotel.name = 'Easy';
   hotel.rooms = 40;
   hotel.booked = 35;
   roomTypes = ['twin', 'double', 'suite'];
   hotel.checkAvailability = function() {
        var random = Math.floor(Math.random()*10+1);
       var nights = document.getElementById("nights").value;
       if(nights > random){
       	document.getElementById("output1").innerHTML = "Yo, Sorry we have no room for you";


       }
       else {
       document.getElementById("output1").innerHTML = "yeah we have room for you";

       }
   };
      var element=document.getElementById("button1");
   element.addEventListener('click', hotel.checkAvailability,false);


   var hotel = new Object();
   hotel.name = 'Park';
   hotel.rooms = 40;
   hotel.booked = 25;
   roomTypes = ['twin', 'double', 'suite'];
   hotel.checkAvailability = function() {
        var random = Math.floor(Math.random()*10+1);
       var nights = document.getElementById("nights").value;
       if(nights > random){
       	document.getElementById("output2").innerHTML = " Yo,Sorry we have no room for you";


       }
       else {
       document.getElementById("output2").innerHTML = "yeah we have room for you";

       }
   };


      var element=document.getElementById("button2");
   element.addEventListener('click', hotel.checkAvailability,false);


