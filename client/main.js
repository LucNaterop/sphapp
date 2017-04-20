// our code goes here

var acc;
$(function(){
	window.addEventListener('devicemotion', function(event) {
		acc = event.acceleration;
	});
	setInterval(() => {
		$('#accX').html('a_x = ' + Math.round(100*acc.x)/100.0 + ' m/s^2')
		$('#accY').html('a_y = ' + Math.round(100*acc.y)/100.0 + ' m/s^2')
		$('#accZ').html('a_z = ' + Math.round(100*acc.z)/100.0 + ' m/s^2')
		
	}, 100);

});

