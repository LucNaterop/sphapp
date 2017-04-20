
var acc;
var data = [];
var millis = 50;

$(function(){
	window.addEventListener('devicemotion', function(event) {
		acc = event.acceleration;
	});
	setInterval(() => {
		$('#accX').html('a_x = ' + Math.round(100*acc.x)/100.0 + ' m/s^2');
		$('#accY').html('a_y = ' + Math.round(100*acc.y)/100.0 + ' m/s^2');
		$('#accZ').html('a_z = ' + Math.round(100*acc.z)/100.0 + ' m/s^2');
	}, 100);


	$('#start').click(() => {
		data = [];					// empty the array first
		setInterval(() => {
			var abs_acc = Math.sqrt(acc.x*acc.x + acc.y*acc.y + acc.z*acc.z);
			data.push(abs_acc);
		}, millis)
	});

	$('#stop').click(() => {
		var amountFreeFall = 0;
		for(var i = 0; i<data.length; i++){
			if(7 < data[i] && data[i] < 11) amountFreeFall++;
		}
		var T = amountFreeFall*millis/1000;
		var h = 1/8*9.81*T*T;
		alert('Time in air: ' + T + ' s \nThrow height: ' + h + ' m');
		window.location.href = window.location.href;
	})
});

