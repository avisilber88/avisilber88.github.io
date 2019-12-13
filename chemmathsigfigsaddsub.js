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

function multiplicationProblem() {
$('#f1').css('border-width', '0px');
}

function divisionProblem(){
$('#f1').css('border-width', '3px');
//boxa "col-xs-5 col-xs-offset-1 col-md-2 col-md-offset-2 col-lg-3 col-lg-offset-0"
}

	// var wrongAnswer4;
	// $('#bwordb').text(35);




function sigFigs(n, sig) {
	isNeg=0;
	if (n<0){
		n=n*(-1);
		isNeg=1;
//$('#scoremessage').text("yea");
	}

    var mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
    mult=Math.round(n * mult) / mult;

    if (isNeg==1){
    	mult=-1*mult;
    }
    return mult;


}

function decimalPlaces(num) {
  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
       0,
       // Number of digits right of decimal point.
       (match[1] ? match[1].length : 0)
       // Adjust for scientific notation.
       - (match[2] ? +match[2] : 0));
}

function sigDigits(n, sig) {
	isNeg=0;
	if (n<0){
		n=n*(-1);
		isNeg=1;
//$('#scoremessage').text("yea");
	}

    var mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
    mult=Math.round(n * mult) / mult;

    if (isNeg==1){
    	mult=-1*mult;
    }
    return mult;


}


function specialMessage(score){
	if (score<0){
		return " \n\ Focus young Skywalker";
	}
	else if (score<5){
		return "\n\ You are balanced, let's get buff";
	}
	else if (score<10){
		return "\n\ You have only reached a fraction of your potential";
	}	
	else if (score<15){
		return "\n\ Show those denomihaters who's boss";
	}
	else if (score<20){
		return "\n\ Tou must be a numerator because you are on top of this";
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
    resetQuestion();
  }
  var n = String(num).trim(),
  FIND_FRONT_ZEROS_SIGN_DOT_EXP = /^[\D0]+|\.|([e][^e]+)$/g,
  FIND_RIGHT_ZEROS = /0+$/g;
 
  if (!/\./.test(num)) {
    n = n.replace(FIND_RIGHT_ZEROS, "");
  }
  return n.replace(FIND_FRONT_ZEROS_SIGN_DOT_EXP, "").length;
};


function getSigDigits(n){

	if ((decimalPlaces (n)==0)||(decimalPlaces(n)==NaN)){
	//	$('#score').text(Number(parseInt(Number(n), 10).toString().length)+" ");
		var digitAmount=Number(parseInt(Number(n), 10).toString().length);
		if (n<1){
			digitAmount=digitAmount-1;
		}

		return getSigFigs(n)-digitAmount;

	}
	else {
		//$('#score').text(decimalPlaces(n)+" ");

		return decimalPlaces(n);

	}

}



function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp  = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)){
  
    return NaN;
   }
  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}






var setupAnswers=function(n1, n2, signI){
 numSigs1=parseInt(getSigDigits(n1));
 numSigs2=parseInt(getSigDigits(n2));
 numSigFigs =parseInt(numSigs1)+0;
 if (numSigFigs>numSigs2){
	numSigFigs=(numSigs2)+0;
 }
 if (numSigFigs>10){
	resetQuestion();
	
//	$('#scoremessage').text("yea");

 }
 else
 {
//$('#scoremessage').text(" "+numSigFigs+" "+numSigs2+" "+numSigs1);

 answerOriginal=0;
 //$('#score').text("Score = " +signI+" "+numSigFigs + " " + numSigs1 +
 //" "+numSigs2+" "+answer);
 if ((Number(signI))>=1){
	answerOriginal=Number(n1)+Number(n2);
	numsigs1="hiadd";
 }
 else {
	answerOriginal=Number(n1)-Number(n2);
	numSigs2="lowsub"
 }




			answer=round(Number(answerOriginal), 1*numSigFigs);
// $('#score').text("Score = " +getSigDigits(answer)+" "+numSigFigs + " " + numSigs1 +
//  " "+numSigs2+" "+answerOriginal+" "+answer);
			if (Number((getSigDigits(answer))<(numSigFigs))&&(Number(answer)%1!=0)){
				// if (Number(answer)%1!=0){  //the number contains a decimal.
					answer=answer.Fixed(numSigFigs);
					
				// }
			// else if (Number(answer)%10!=0){
					// answer=answer+".0";
			// }

			}
			// else if (Number(getSigDigits(answer))>(numSigFigs)){
			// 	resetQuestion();
			// 	//answer=sigFigs(Number(answer), numSigFigs);

			// }
			else{
			wrongAnswer1=round(Number(answerOriginal), Math.floor(Math.random()*10)-5);
			var counting = 0;
			while (wrongAnswer1==answer){
			wrongAnswer1=round(Number(answerOriginal), Math.floor(Math.random()*10)-5);	
			counting=counting+1;
			if (counting>10){
				wrongAnswer1=" ";
				break;
			}

			}
			var counting = 0;
			wrongAnswer2=round(Number(answerOriginal), Math.floor(Math.random()*10)-5);
			while ((wrongAnswer2==answer) || (wrongAnswer2==wrongAnswer1)){
			wrongAnswer2=round(Number(answerOriginal), Math.floor(Math.random()*10)-5);	
			counting=counting+1;
			if (counting>10){
				wrongAnswer2=" ";
				break;
			}
			}			
	
			wrongAnswer3=round(Number(answerOriginal), Math.floor(Math.random()*10)-5);	
			var counting = 0;
			while (wrongAnswer3==answer || wrongAnswer3==wrongAnswer1 || wrongAnswer3==wrongAnswer2){
			wrongAnswer3=round(Number(answerOriginal), Math.floor(Math.random()*10)-5);	
			counting=counting+1;
			if (counting>10){
				wrongAnswer3=" ";
				break;
			}
			}			

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
}
 	};
	// $('#num2').text($('#num1').val());
	
	
var resetQuestion=function(){
		// $('#boxb').text(35);
		// $('#bwordb').text(35);

		var signIs = Math.floor(Math.random()*2);

		number1=(Math.floor(Math.random()*2000000-1000000));
		var finalNum1 = number1*Math.pow(10, -1*Math.floor(Math.random()*9))
		finalNum1=round(finalNum1, Math.floor(Math.random()*4));
		


		number2=(Math.floor(Math.random()*2000000-1000000));
		var finalNum2 = number2*Math.pow(10, -1*Math.floor(Math.random()*9))
		finalNum2=round(finalNum2, Math.floor(Math.random()*4));
		
		if (signIs>=1) {
		$('#num1').text(finalNum1+" + "+finalNum2);
		$('#den1').text("");
		$('#den1').css("color", "#FF22FF");
		$('#firstNum').removeClass("col-xs-10 col-xs-offset-1")
		$('#firstNum').addClass("col-xs-10 col-xs-offset-1")
		$('#firstNum').css("text-align", "center");
		multiplicationProblem();		
		}
		else {
		$('#num1').text(finalNum1+" - "+finalNum2);
		$('#den1').text("");
		$('#den1').css("color", "#FF22FF");
		$('#firstNum').removeClass("col-xs-10 col-xs-offset-1")
		$('#firstNum').addClass("col-xs-10 col-xs-offset-1")
		$('#firstNum').css("text-align", "center");
		multiplicationProblem();		
		}
		//$('#scoremessage').text(signIs);

			setupAnswers(finalNum1, finalNum2, signIs);
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
		var thisAppNum = 3;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
});