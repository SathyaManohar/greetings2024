$("button").on("click",function(){
var audio=new Audio("Ek Tarfa - Darshan Raval 128 Kbps.mp3");
audio.play();
$("body").addClass("helper1");
setTimeout(function(){
    $("button").hide();
     $(".i4").fadeOut();
     $(".i4").text("4");
     $(".i4").fadeIn();
       $(".i4").css("transform", "rotate(45deg)");
    $(".box").css("background-color","#fcf803");
    $("h1").html("<i>WELCOME...2024❤️");
    $(".i").css("background-color","orangered");
      $("h1").css("font-size","60px");
      $("h1").animate({opacity:0.5});
         $("h1").animate({fontSize:70});
$("body").removeClass("helper1");
// $("h1").css("transform", "translate(300px,0px)");
$(".h").css("transform", "translateX(300px, 20px) rotate(0deg)");
$("h1").animate({fontSize:40});
$("body").addClass("helper2");
$(".box").after("<br/><br/><br/>");
$(".box").after("<h2><br/><br/><br/>..Wish You A Very Happy New Year Friends..</h2>");
$("h2").css("color","deeppink");
$("h2").css("font-size","40px");
   $("h1").animate({fontSize:70});
    
  $("h2").animate({fontSize:80});
 setTimeout(function () {
    $(".i4").css("width","80px");
      $(".i4").css("height","80px");
        $(".i4").css("background-color","red");
      $(".i4").css("transform", "rotate(0deg)"); 
    }, 2000);

},1000);

  $("h2").animate({fontSize:40});
$("h1").animate({fontSize:50});
  $("h1").animate({fontSize:70});
});
