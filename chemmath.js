$(document).ready(function(){
	var whatnameis = prompt ("What is your name?");
	document.getElementById("nameis").innerHTML = whatnameis;
		n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML ="</sub>"+ m + " / " + d + " / " + y;		

	var times=0;
	var numer1;
	var numer2;
	var denom1;
	var denom2;
	var number1;
	var number2;
	var number3;
	var number4;
	var xposit;
	var answer;
	var wrongAnswer1;
	var wrongAnswer2;
	var wrongAnswer3;
	var score=0;
$(window).resize(function(){
//$('.ansbox').css('width',window.innerWidth/4-2);
//$('.ansbox').css('height',window.innerWidth/4-2);

//$('#blocka').css('left',$('blocka').width*0);
//$('#blockb').css('position','absolute');
//$('#blockb').css('left',$('blockb').width*1);


//$('#blockc').css('left',$('blocka').width*2);
//$('#blockd').css('left',$('blocka').width*3);

$('.thequestion').css('font-size', window.innerWidth/100);
});
	// var wrongAnswer4;
	// $('#bwordb').text(35);
function specialMessage(score){
	if (score<0){
		return " \n\ focus young skywalker";
	}
	else if (score<5){
		return "\n\ you are balanced, let's get buff";
	}
	else if (score<10){
		return "\n\ You have only reached a fraction of your potential";
	}	
	else if (score<15){
		return "\n\ Show those denomihaters who's boss";
	}
	else if (score<20){
		return "\n\ you must be a numerator because you are on top of this";
	}	
	else if (score<25){
		return "\n\ In all realness, your skill is like dividing by zero, it cannot be defined";
	}	

	else {
		return "\n\ you are balanced, let's get buff";
	}

}
	function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp  = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}
	var setupAnswers=function(n1, n2, d1, d2, xp){
		// $('#bworda').text(35);
		$('#num1').text(n1);
		$('#num2').text(n2);
		$('#den1').text(d1);
		$('#den2').text(d2);


if ((n1==n2)||(n1==d1)||(n1==d2)||(n2==d1)||(n2==d2)||(d1==d2)){
	resetQuestion();
}
else{
		if (xp===0){
			answer=(n2/d2)*d1;
			wrongAnswer1=(d2/n2)*(d1);
			wrongAnswer2=(d2/d1)*(n2);
			wrongAnswer3=(n2/d2)/(d1);
		}
		if (xp===1){
			answer=(n1/d1)*d2;
			wrongAnswer1=(d2/n1)*(d1);
			wrongAnswer2=(d1/d2)*(n1);
			wrongAnswer3=(n1/d2)/(d1);
			// $('#bworda').text(answer);
		}
		if (xp===2){
			answer=(n1/n2)*d2;	
			wrongAnswer1=(n2/d2)*(n1);
			wrongAnswer2=(n2/n1)*(d2);
			wrongAnswer3=(n2/d2)/(n1);
			// $('#bworda').text(answer);
		}
		if (xp===3){
			answer=(n2/n1)*d1;	
			wrongAnswer1=(n1/n2)*(d1);
			wrongAnswer2=(n2/d1)*(n1);
			wrongAnswer3=(n2/n1)/(d1);
			// $('#bworda').text(answer);
		}

		answer=round(answer,2);
		wrongAnswer1=round(wrongAnswer1, 2);
		wrongAnswer2=round(wrongAnswer2, 2);
		wrongAnswer3=round(wrongAnswer3, 2);
		$("*").removeClass('answer');
		$("*").removeClass('wrongAnswer');
		$("*").removeClass('wrong');
		$("#boxa").addClass('wrongAnswer');
		$("#boxb").addClass('wrongAnswer');
		$("#boxc").addClass('wrongAnswer');
		$("#boxd").addClass('wrongAnswer');
		

		var random3 = Math.floor(Math.random()*24);
		if (random3===0){
		$('#bworda').text(answer);
		$('#bwordb').text(wrongAnswer1);
		$('#bwordc').text(wrongAnswer2);
		$('#bwordd').text(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===1){
		$('#bworda').text(answer);
		$('#bwordc').text(wrongAnswer1);
		$('#bwordb').text(wrongAnswer2);
		$('#bwordd').text(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===2){
		$('#bworda').text(answer);
		$('#bwordc').text(wrongAnswer1);
		$('#bwordd').text(wrongAnswer2);
		$('#bwordb').text(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===3){
		$('#bworda').text(answer);
		$('#bwordd').text(wrongAnswer1);
		$('#bwordb').text(wrongAnswer2);
		$('#bwordc').text(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===4){
		$('#bworda').text(answer);
		$('#bwordb').text(wrongAnswer1);
		$('#bwordd').text(wrongAnswer2);
		$('#bwordc').text(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===5){
		$('#bworda').text(answer);
		$('#bwordd').text(wrongAnswer1);
		$('#bwordc').text(wrongAnswer2);
		$('#bwordb').text(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===6){
		$('#bwordb').text(answer);
		$('#bworda').text(wrongAnswer1);
		$('#bwordc').text(wrongAnswer2);
		$('#bwordd').text(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===7){
		$('#bwordb').text(answer);
		$('#bworda').text(wrongAnswer1);
		$('#bwordd').text(wrongAnswer2);
		$('#bwordc').text(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===8){
		$('#bwordb').text(answer);
		$('#bwordc').text(wrongAnswer1);
		$('#bwordd').text(wrongAnswer2);
		$('#bworda').text(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===9){
		$('#bwordb').text(answer);
		$('#bwordc').text(wrongAnswer1);
		$('#bworda').text(wrongAnswer2);
		$('#bwordd').text(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===10){
		$('#bwordb').text(answer);
		$('#bwordd').text(wrongAnswer1);
		$('#bworda').text(wrongAnswer2);
		$('#bwordc').text(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===11){
		$('#bwordb').text(answer);
		$('#bwordd').text(wrongAnswer1);
		$('#bwordc').text(wrongAnswer2);
		$('#bworda').text(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===12){
		$('#bwordc').text(answer);
		$('#bworda').text(wrongAnswer1);
		$('#bwordb').text(wrongAnswer2);
		$('#bwordd').text(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===13){
		$('#bwordc').text(answer);
		$('#bworda').text(wrongAnswer1);
		$('#bwordd').text(wrongAnswer2);
		$('#bwordb').text(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===14){
		$('#bwordc').text(answer);
		$('#bwordb').text(wrongAnswer1);
		$('#bwordd').text(wrongAnswer2);
		$('#bworda').text(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===15){
		$('#bwordc').text(answer);
		$('#bwordb').text(wrongAnswer1);
		$('#bworda').text(wrongAnswer2);
		$('#bwordd').text(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===16){
		$('#bwordc').text(answer);
		$('#bwordd').text(wrongAnswer1);
		$('#bworda').text(wrongAnswer2);
		$('#bwordb').text(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===17){
		$('#bwordc').text(answer);
		$('#bwordd').text(wrongAnswer1);
		$('#bwordb').text(wrongAnswer2);
		$('#bworda').text(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===18){
		$('#bwordd').text(answer);
		$('#bworda').text(wrongAnswer1);
		$('#bwordb').text(wrongAnswer2);
		$('#bwordc').text(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===19){
		$('#bwordd').text(answer);
		$('#bworda').text(wrongAnswer1);
		$('#bwordc').text(wrongAnswer2);
		$('#bwordb').text(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===20){
		$('#bwordd').text(answer);
		$('#bwordb').text(wrongAnswer1);
		$('#bworda').text(wrongAnswer2);
		$('#bwordc').text(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===21){
		$('#bwordd').text(answer);
		$('#bwordb').text(wrongAnswer1);
		$('#bwordc').text(wrongAnswer2);
		$('#bworda').text(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===22){
		$('#bwordd').text(answer);
		$('#bwordc').text(wrongAnswer1);
		$('#bworda').text(wrongAnswer2);
		$('#bwordb').text(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===23){
		$('#bwordd').text(answer);
		$('#bwordc').text(wrongAnswer1);
		$('#bwordb').text(wrongAnswer2);
		$('#bworda').text(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
	}
	};
	// $('#num2').text($('#num1').val());
	
	
	var resetQuestion=function(){
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		number1= Math.floor(Math.random()*200-100);
		while(number1===0){
		number1= Math.floor(Math.random()*200-100);	
		}

		number2= Math.floor(Math.random()*200-100);
		while(number2===0){
		number2= Math.floor(Math.random()*200-100);	
		}
		number3= Math.floor(Math.random()*200-100);
		while(number3===0){
		number3= Math.floor(Math.random()*200-100);	
		}
		xposit = Math.floor(Math.random()*4);

		if (xposit===0){//x is num 1
			setupAnswers("X", number1, number2, number3, xposit);
		}
		else if (xposit===1){//x is num 2
			setupAnswers(number1, "X", number2, number3, xposit);
		}
		else if (xposit===2){//x is denom 1
			setupAnswers(number1, number2, "X", number3, xposit);
		}
		else if (xposit===3){//x is denom 2
			setupAnswers(number1, number2, number3, "X", xposit);
		}		
	};

	if($('#num1:contains(704)')){
		// $('#bwordb').text(35);
		resetQuestion();
	};




	// $('btna').attr('checked')=false;
	$('.ansbox').hover(function(){
		// $(this).text("hi");
		$(this).addClass("highlighted");


		// if (((this).hasID('footer'))){
		// 	$(this).text("hi");
		// }
	},
	function(){
		$(this).removeClass("highlighted");


	});
	$('div').click(function(){
		// $('#bwordb').text(answer);
		if	($(this).hasClass('answer')){//children('p').contains(answer)){// p.text("hello"));
			// $('#bwordb').text(answer);
			score=score+1;
			$('#score').text("Score = " +score);
			$('#scoremessage').text(specialMessage(score));
			$(this).removeClass("highlighted");
			resetQuestion();
			// $('#bwordb').text(35);
		}
		else if	($(this).hasClass('wrongAnswer')){//children('p').contains(answer)){// p.text("hello"));
			// $('#bwordb').text(answer);
			$(this).addClass('wrong');
			$(this).removeClass('wrongAnswer');
			score=score-1;
			$('#score').text("Score = " +score);
			$('#scoremessage').text(specialMessage(score));
			// $('#bwordb').text(35);
		}

		// if (times<5){
		// 	$('<li>').text("You are awesome, don't worry").appendTo('ul');
		// }
		// else if (times<10){ 
		// $('li').remove();
		// 	$('<li>').text("You are insecure, clicking too much, now you should be worrying... also that is beginning to hurt, stop poking me").appendTo('ul');
		// }
		// else if (times<11){
		// $('<li>').text("OK, Now I am Ignoring You!").appendTo('ul');
			
		// }

		// times=times+1;


	// $('p').text("hi");
	// if ($('#btna').attr('checked',true)){
	// 	$('#ta').text("a");
	// }
	// else{$('#choicea').text("");
	// }
	// }if ($('#btnb').attr("checked", true)){
	// 	$('#choiceb').text("yayyb");
	// }if ($('#btnc').attr("checked", true)){
	// 	$('#choicec').text("yayyc");
	// }if ($('#btnd').attr("checked", true)){
	// 	$('#choiced').text("yayyd");
	// 	}
	});
});