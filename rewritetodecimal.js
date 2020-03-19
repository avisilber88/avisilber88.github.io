$(document).ready(function () {

	var whatnameis = prompt("What is your name?");
	document.getElementById("nameis").innerHTML = whatnameis;

	n = new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	document.getElementById("date").innerHTML = "</sub>" + m + " / " + d + " / " + y;
	var times = 0;
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
	var score = 0;
	var numberOfDecimalsToCount;
	var thisisanswer;
	var thisisanswerfigs;
	var thisisdiff
	var finalNum
	var thisAnswer;
	var givenAnswer;
	$(window).resize(function () {
		//$('.ansbox').css('width',window.innerWidth/4-2);
		//$('.ansbox').css('height',window.innerWidth/4-2);

		//$('#blocka').css('left',$('blocka').width*0);
		//$('#blockb').css('position','absolute');
		//$('#blockb').css('left',$('blockb').width*1);


		//$('#blockc').css('left',$('blocka').width*2);
		//$('#blockd').css('left',$('blocka').width*3);

		$('.thequestion').css('font-size', window.innerWidth / 100);
	});
	// var wrongAnswer4;
	// $('#bwordb').text(35);
	function specialMessage(score) {
		if (score < 0) {
			return " \n\ focus young skywalker";
		} else if (score < 5) {
			return "\n\ you are balanced, let's get buff";
		} else if (score < 10) {
			return "\n\ You have only reached a fraction of your potential";
		} else if (score < 15) {
			return "\n\ Show those denomihaters who's boss";
		} else if (score < 20) {
			return "\n\ you must be a numerator because you are on top of this";
		} else if (score < 25) {
			return "\n\ In all realness, your skill is like dividing by zero, it cannot be defined";
		} else {
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
		var valueSign=1;
		if (value<0){
		value = -1*value;
		valueSign=-1;
		}
		
		
		if (typeof exp === 'undefined' || +exp === 0)
			return valueSign*(Math.round(value));

		value = +value;
		exp = +exp;

		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
			return NaN;

		// Shift
		value = value.toString().split('e');
		value = Math.round( + (value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
		value = value*valueSign;
		// Shift back
		value = value.toString().split('e');
		return  + (value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
	}

	function getSigDigits(n) {

		if ((decimalPlaces(n) == 0) || (decimalPlaces(n) == NaN)) {
			//	$('#score').text(Number(parseInt(Number(n), 10).toString().length)+" ");
			var digitAmount = Number(parseInt(Number(n), 10).toString().length);
			if (n < 1) {
				digitAmount = digitAmount - 1;
			}

			return getSigFigs(n) - digitAmount;

		} else {
			//$('#score').text(decimalPlaces(n)+" ");

			return decimalPlaces(n);

		}

	}
	var setupAnswers = function (n1, n2) {
		numSigs1 = parseInt(getSigDigits(n1));
		numSigFigs = parseInt(numSigs1) + 0;
		// if (numSigFigs>numSigs2){
		// numSigFigs=(numSigs2)+0;
		// }
		if (numSigs1 < 1) {
			//alert ("numsigs1");

			resetQuestion();
		} else if (numSigFigs > 10) {
			resetQuestion();

			//	$('#scoremessage').text("yea");

		} else {
			//$('#scoremessage').text(" "+numSigFigs+" "+numSigs2+" "+numSigs1);

			//answerOriginal = 0;
			//$('#score').text("Score = " +signI+" "+numSigFigs + " " + numSigs1 +
			//" "+numSigs2+" "+answer);
			answer = round(Number(n1), 1 * n2);
			if (answer == 0) {
				resetQuestion();
			} else {
				if (Number((getSigDigits(answer)) < (numSigFigs)) && (Number(answer) % 1 != 0)) {
					// if (Number(answer)%1!=0){  //the number contains a decimal.
					answer = Number(answer).toFixed(n2);
					numToAdd=0;
					if (answer<0){
					numToAdd=1;
					}
					//answer=(""+answer).substring(0, answer.length)
					//alert ("it did have to fix that ish");
					// }
					// else if (Number(answer)%10!=0){
					// answer=answer+".0";falert
					
					// }

				}
				thisAnswer = answer + "";
				//alert(thisAnswer);
				//answer=getSigFigs(n1);
				//alert (n1 + " who has " + numSigs1);
			}
		}

	};
	// $('#num2').text($('#num1').val());

	// function round(value, exp) {
		
		
		// var valueSign=1;
		// if (value<0){
		// value = -1*value;
		// valueSign=-1;
		// }
		
		
		// if (typeof exp === 'undefined' || +exp === 0)
			// return Math.round(value);

		// value = +value;
		// exp = +exp;

		// if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
			// return NaN;

		// // Shift
		// value = value.toString().split('e');
		// value = Math.round( + (value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
		// value = value*valueSign;
		// // Shift back
		// value = value.toString().split('e');
		// return  + (value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
		
		
	// }
	function decimalPlaces(num) {
		var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
		if (!match) {
			return 0;
		}
		return Math.max(
			0,
			// Number of digits right of decimal point.
			(match[1] ? match[1].length : 0)
			// Adjust for scientific notation.
			 - (match[2] ? +match[2] : 0));
	}
	var resetQuestion = function () {
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		number = (Math.floor(Math.random() * 200000000 - 100000000));
		//number = -.011;
		//number = -.011;
		finalNum = number; //*Math.pow(10, -1*Math.floor(Math.random()*0))
		//finalNum=Number(round(finalNum, Math.floor(Math.random()*5)))*Math.pow(10, -1*Math.floor(Math.random()*10)-3);
		finalNum = Number(finalNum.toPrecision(Math.floor(Math.random() * 7) + 1)) * Math.pow(10, -1 * Math.floor(Math.random() * 10) - 3);

		thisisanswerfigs = getSigFigs(finalNum);
		thisisanswer = getSigDigits(finalNum);
		thisisdiff = thisisanswer - thisisanswerfigs;
		if (thisisdiff < 0) {
			thisisdiff = 0;
		} else {
			thisisanswer = thisisanswerfigs;
		}
		numberOfDecimalsToCount = (Math.floor(Math.random() * thisisanswer)) + thisisdiff;
		//	alert (finalNum+" has "+thisisanswer + " and " + numberOfDecimalsToCount);
		// if ((numberOfDecimalsToCount==null)||(numberOfDecimalsToCount==0)){
		// resetQuestion();
		// }
		if (score > 19) {
			document.getElementById("num1").innerHTML = ("please round " + finalNum + " to " + numberOfDecimalsToCount + " decimal places below.");
		} else {
			document.getElementById("num1").innerHTML = ("Please round " + finalNum + " to " + numberOfDecimalsToCount + " decimal places below.");
		}
		setupAnswers(finalNum, numberOfDecimalsToCount);
	};

	if ($('#num1:contains(704)')) {
		// $('#bwordb').text(35);
		resetQuestion();
	}

	// $('btna').attr('checked')=false;
	$('.ansbox').hover(function () {
		// $(this).text("hi");
		$(this).addClass("highlighted");

		// if (((this).hasID('footer'))){
		// 	$(this).text("hi");
		// }
	},
		function () {
		$(this).removeClass("highlighted");

	});
	$('div').click(function () {
		// $('#bwordb').text(answer);
		if ($(this).hasClass('answer')) { //children('p').contains(answer)){// p.text("hello"));
			// $('#bwordb').text(answer);
			score = score + 1;
			$('#score').text("Score = " + score);
			$('#scoremessage').text(specialMessage(score));
			$(this).removeClass("highlighted");
			//resetQuestion();
			// $('#bwordb').text(35);
		} else if ($(this).hasClass('wrongAnswer')) { //children('p').contains(answer)){// p.text("hello"));
			// $('#bwordb').text(answer);
			$(this).addClass('wrong');
			$(this).removeClass('wrongAnswer');
			score = score - 1;
			$('#score').text("Score = " + score);
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
		// 	}$('#givenAnswer').keypress(function (e) {
	});
	$('#givenAnswer').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitButton').click();
	});
	$('#submitButton').click(function () {
		//alert (thisAnswer);
		givenAnswer = document.getElementById("givenAnswer").value;

		if (givenAnswer != null) {
			//alert (givenAnswer.substring(0, 1)+ " and "+ thisAnswer.substring(0, 1));
			// if (thisAnswer.length>10){
			// thisAnswer=""+round(thisAnswer, 0);
			// }
			if (((givenAnswer.substring(0, 1) != "0")&&(givenAnswer.substring(0,1) !="-")) && (thisAnswer.substring(0, 1) == "0")) {
				givenAnswer = "0" + givenAnswer;
			} else if ((givenAnswer.substring(0, 2) != "-0") && (thisAnswer.substring(0, 2) == "-0")) {
				//alert ("happened");
				givenAnswer = "-0" + givenAnswer.substring(1);
			}
			//	alert ("answer is" + round(thisAnswer, 0));
			if (("" + givenAnswer).toUpperCase().replace(/\s/g, '') == ("" + thisAnswer).toUpperCase().replace(/\s/g, '')) {
				score = score + 1;
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				document.getElementById("givenAnswer").value = "";
			} else {
				alert("You wrote: " + givenAnswer + ". The correct answer was " + thisAnswer);
				score = score - 1;
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				//anotherQuestion();
				document.getElementById("givenAnswer").value = "";
			}
			resetQuestion();
		}

	});
	var thisAppNum = 24;
	$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert(" You, " + whatnameis + " got a score of " + score + " on " + m + " / " + d + " / " + y + " on app " + thisAppNum);
	});
});
