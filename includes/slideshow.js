
/* 
* Get some information on the slideshow
*/
var slidePos = 0;
var imageWidth = 500; // Change 500 to the width (in pixels) of each image (all need to be equal in this example)
var numSlides = $("#slideshow .slide .carousel img").length;
var requiredWidth = numSlides * imageWidth; 
$("#slideshow .slide .carousel").css("width", requiredWidth);

/*
* Slide the carousel along by imageWidth
* If the end is reached, go back to the beginning
*/
function changeSlide() {    
    slidePos -= imageWidth;
    if((slidePos * -1) == requiredWidth){
        slidePos = 0;
    }
    $("#slideshow .slide .carousel").animate({
        left: slidePos
    }, 1000, "easeOutQuint", function(){});
}

/*
* Start the timer to change the slide every 6 seconds
*/
$(document).ready(function() {
    slideshowTimer = setInterval("changeSlide()", 6000);
});