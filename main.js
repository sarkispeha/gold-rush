$(document).on('ready', function() {
  
var Arr =[];
var xcoord = 0;
var ycoord = 0;


$(document).on('click', 'img', function(e) {
	xcoord = (e.pageX);
	ycoord = (e.pageY);	
	console.log(xcoord,ycoord);
	$('body').append('<div class="marker"><img src="map-pin.jpg"></div>');
	$('.marker').css({
		'position': 'absolute',
		'left': xcoord,
		'top': ycoord,
		})


});







});