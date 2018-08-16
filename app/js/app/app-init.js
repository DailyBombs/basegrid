
// Change y-axis control to "lightness" or "saturation"
y_axis = "saturation"


width = $(window).width();
height = $(window).height();

$(window).resize(function() {
  width = $(window).width();
  height = $(window).height();
});

var $bg = $(".container");
	$(".scrollValue").focus();


$(".content").scroll(function(e) {
  var x = $(this).scrollTop();
  var height = $(".scrollValue").height() - $(".content").height();

  console.log("x: ", x);
  console.log("height: ", height);

  var lightness = (x*100) / height;

  console.log("Value: ", lightness);

  $('.container').attr('style', 'transform: rotateX(' + lightness + 'deg) translateX(-50%)');

  if (lightnesss >= 100) {
  return;
  }

});


var init = function() {

};


$(document).ready(function() {
  init();
});


