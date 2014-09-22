$(document).on('ready', function() {
  
var Arr =[];
var xcoord = 0;
var ycoord = 0;

$(document).on('click', '.coordinates', function(e) {
	xcoord = (e.pageX);
	ycoord = (e.pageY);	
	console.log(xcoord,ycoord);
	var pin = $('<img class="smallpin" src="map-pin.jpg">')
	pin.css({
		'position': 'absolute',
		'left': xcoord,
		'top': ycoord
		})
	$('.coordinates').append(pin);

});

$(document).on('click', '.smallpin' , function(e){
	e.stopPropagation()
	$(this).remove();
} )






});