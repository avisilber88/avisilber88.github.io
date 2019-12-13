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

var getSigFigs = function (num) {
  if (!isFinite(Number(num))) {
    return -1;
  }
  var n = String(num).trim(),
  FIND_FRONT_ZEROS_SIGN_DOT_EXP = /^[\D0]+|\.|([e][^e]+)$/g,
  FIND_RIGHT_ZEROS = /0+$/g;
 
  if (!/\./.test(num)) {
    n = n.replace(FIND_RIGHT_ZEROS, "");
  }
  return n.replace(FIND_FRONT_ZEROS_SIGN_DOT_EXP, "").length;
};


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
	var setupAnswers=function(n1){

var answerString=n1.toExponential()+"";
var eSpot=answerString.indexOf("e");
var exponency=answerString.substring(eSpot+1, answerString.length);
if (exponency.substring(0,1)==="+"){
exponency=exponency.substring(1,exponency.length);
}

nakedAnswer=answerString.substring(0,eSpot);
answerStringFinal=answerString.substring(0,eSpot)+"*10"+(""+exponency).sup();
			answer=answerStringFinal;
			wrongAnswer1=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup();
			wrongAnswer2=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup();
			wrongAnswer3=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup();
		var answers = [];
		answers[0]=answer;
		answers[1]=wrongAnswer1;
		answers[2]=wrongAnswer2;
		answers[3]=wrongAnswer3;
		
		for (i=0; i<answers.length; i++){
			
			for (j=0; j<answers.length; j++){
				if ((j!=i)&&(answers[i]===answers[j])){
					setupAnswers(n1);
				}	
			}
		}


		$("*").removeClass('answer');
		$("*").removeClass('wrongAnswer');
		$("*").removeClass('wrong');
		$("#boxa").addClass('wrongAnswer');
		$("#boxb").addClass('wrongAnswer');
		$("#boxc").addClass('wrongAnswer');
		$("#boxd").addClass('wrongAnswer');
		

			var random3 = Math.floor(Math.random()*24);
		if (random3===0){
		document.getElementById("bworda").innerHTML=answer;
		document.getElementById("bwordb").innerHTML=wrongAnswer1;
		document.getElementById("bwordc").innerHTML=wrongAnswer2;
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===1){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===2){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===3){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===4){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===5){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===6){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===7){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===8){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===9){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===10){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===11){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===12){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===13){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===14){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===15){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===16){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===17){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===18){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===19){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===20){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===21){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===22){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===23){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}

	};
	// $('#num2').text($('#num1').val());
	
	
	var resetQuestion=function(){
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		number=(Math.floor(Math.random()*2000000000-1000000000));
		

		var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11))
		finalNum=round(finalNum, Math.floor(Math.random()*8));
		document.getElementById("num1").innerHTML=("What is "+finalNum +" in scientific notation?");		

			setupAnswers(finalNum);
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
		var thisAppNum = 5;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
});