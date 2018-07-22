$(document).ready(function(){
	$('p').click(function(){
		var inty = Math.floor(Math.random()*100-50);


		$('<li>').text(inty).appendTo('p');
	});
});

