$(document).ready(function(){
	var times=0;
	
	$('#blocka').click(function(){
		
		$('#blocka').css("left", Math.floor(Math.random()*window.innerWidth-100));

		$('#blocka').css("top", Math.floor(Math.random()*window.innerHeight-100));

	});

});