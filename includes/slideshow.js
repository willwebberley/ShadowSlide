var slidePos = 0;
var numSlides = $("#slideshow .slide .carousel img").length;
var requiredWidth = numSlides * 500;
$("#slideshow .slide .carousel").css("width", requiredWidth);

function changeSlide() {    
    slidePos -= 500;
    if((slidePos * -1) == requiredWidth){
        slidePos = 0;
    }
    $("#slideshow .slide .carousel").animate({
        left: slidePos
    }, 1000, "easeOutQuint", function(){});
}

$(document).ready(function() {
    $(".active").css("opacity", "1.0");
        slideshowTimer = setInterval("changeSlide()", 6000);
});