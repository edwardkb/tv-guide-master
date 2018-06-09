/*Js Jq functions etc*/
jQuery(function(){ // JQuery function call to run code

var objData = [{
    "title": "Walking Dead",
    "rating": "3",
    "description": "bah bah bah bah",
    "rated": "R",
    "channel": "AMC",
    "showtime": "10pm",
    "image": "walkingdead.jpg"
},{
  "title": "Power",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "Starz",
  "showtime": "9pm",
  "image": "walkingdead.jpg"
},{
  "title": "Shark Tank",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "PG",
  "channel": "CNBC",
  "showtime": "8pm",
  "image": "walkingdead.jpg"
},{
  "title": "The Profit",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "PG",
  "channel": "CNBC",
  "showtime": "8pm",
  "image": "walkingdead.jpg"
},{
  "title": "NBC News",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "6",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "CBS News",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "AMC",
  "showtime": "10am",
  "image": "walkingdead.jpg"
},{
  "title": "Simpsons",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "PG-13",
  "channel": "Fox 29",
  "showtime": "8pm",
  "image": "walkingdead.jpg"
},{
  "title": "Family Feud",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "PG-13",
  "channel": "17",
  "showtime": "7pm",
  "image": "walkingdead.jpg"
},{
  "title": "Family Guy",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "FX",
  "showtime": "10pm",
  "image": "walkingdead.jpg"
},{
  "title": "First 48",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "R",
  "channel": "ID",
  "showtime": "9pm",
  "image": "walkingdead.jpg"
},{
  "title": "Originals",
  "rating": "3",
  "description": "bah bah bah bah",
  "rated": "PG-13",
  "channel": "17",
  "showtime": "9pm",
  "image": "walkingdead.jpg"

}
]

var showData;

for (showData = 0; showData < objData.length; showData++) {
  var allData = objData[showData];

  var title = objData[showData]['title'];
  var rating = objData[showData]['rating'];
  var description = objData[showData]['description'];
  var rated = objData[showData]['rated'];
  var channel = objData[showData]['channel'];
  var showtime = objData[showData]['showtime'];
  var image = objData[showData]['image'];


  console.log(title);
  console.log(rating);
  console.log(description);
  console.log(rated);
  console.log(channel);
  console.log(showtime);
  console.log(image);

  	
$( ".tvC" ).append( "<div class='channelBlock'><div class='title'><strong>Title:</strong>"+ title +"</div><div class='rating'>" + rating +"</div><div class='description'><strong>Des :</strong> " + description +"</div><div class='channel'>" + channel +"</div><div class='rated'><strong>Rated : </strong>" + rated +"</div><img class='image' src='..//images/"+ image +"'/></div>" );

  
}

$('.channelBlock').click(function(){
  $('.slideDoor').addClass('active');
});

$('.closeBtn').click(function(){
  $('.slideDoor').removeClass('active');
});




});(jQuery); 


