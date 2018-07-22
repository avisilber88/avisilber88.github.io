$(document).ready(function(){
	var times=0;
	
	$('p').click(function(){
		if (times<5){
			$('<li>').text("You are awesome, don't worry").appendTo('ul');
		}
		else if (times<10){ 
			$('<li>').text("You are insecure, clicking too much, now you should be worrying... also that is beginning to hurt, stop poking me").appendTo('ul');
		}
		else if (times<11){
		$('<li>').text("OK, Now I am Ignoring You!").appendTo('ul');
			
		}

		times=times+1;

	});

});