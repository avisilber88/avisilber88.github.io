$(document).ready(function(){
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
var finalNum1;
var finalNum2;
var signIs;
var counting;
var answers=[];
document.getElementById("date").innerHTML ="</sub>"+ m + " / " + d + " / " + y;		

//beginning of the things to replace
	var whatnameis = ""// prompt ("What is your name?");
	var askagain = function (whatnameis){
	whatnameis = prompt ("What is your full name (first and last)?");
	if (whatnameis.length<2){
		askagain();
	}
	else if (!(/\s/.test(whatnameis))) {
    // It has any kind of whitespace
		askagain()
	}
	else{
	document.getElementById("nameis").innerHTML = whatnameis;
	}
    }
	askagain();
	whatnameis=document.getElementById("nameis").innerHTML;
	var loadDatabase = [];
var db;
var loginMessageShown = true;
	var auth = function () {
    // alert ("auth");
    firebase.auth().signInAnonymously()
    .then(function (result) {
        db = firebase.firestore();
        // db.settings({
            // timestampsInSnapshots: true
        // });

        // db.collection("chemscores").get().then(function (querySnapshot) {
            // querySnapshot.forEach(function (doc) {
                // // clone template row and append to table body
                // // var tr = tempTr.clone();
                // // tr.data('id', doc.id);
                // // console.warn(doc.id + "");
                // loadDatabase.push(doc.id + "");
                // // var data = doc.data();
                // // // set cell values from Contact data
                // // tr.find('td[data-prop]').each(function () {
                // // var td = $(this);
                // // td.text(data[td.data('prop')] || '');
                // // });
                // // tblBody.append(tr);
            // });
        // });
    })
    .catch(function (error) {
        alert("failed to anonymously sign-in");
    });

};
var init = function () {
    auth();

    // $('#testthisish').click();
};

auth();
function addLevelCompleted(nameis, dateis, levelcomplete) {
        // alert (levelcomplete);
        // let levelcompletenumber = 0;
        // if (levelcomplete === "levelOne") {
        // levelcompletenumber = 1;
        // } else if (levelcomplete === "levelTwo") {
        // levelcompletenumber = 2;
        // } else if (levelcomplete === "levelThree") {
        // levelcompletenumber = 3;
        // } else if (levelcomplete === "levelFour") {
        // levelcompletenumber = 4;
        // } else if (levelcomplete === "levelFive") {
        // levelcompletenumber = 5;
        // } else if (levelcomplete === "levelSix") {
        // levelcompletenumber = 6;
        // } else if (levelcomplete === "levelSeven") {
        // levelcompletenumber = 7;
        // } else if (levelcomplete === "levelEight") {
        // levelcompletenumber = 8;
        // } else if (levelcomplete === "levelNine") {
        // levelcompletenumber = 9;
        // } else if (levelcomplete === "levelTen") {
        // levelcompletenumber = 10;
        // }
        dateis=dateis.replace(/\s/g, '');
	dateis=firebase.firestore.Timestamp.fromDate(new Date(dateis)); 
        var data = { 
            date: dateis,
            name: whatnameis,
            score: levelcomplete,
			level: thisAppNum
        }
        db.collection("chemscores").add(data).then(function (result) {
            // list();
        })
        .catch(function (error) {
            console.warn("failed to save contact");
        });
    }

//end of the things to replace
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

var toOurExponential=function(n1){


	var answerString=Number(n1).toExponential()+"";
//	answerString=round(answerString,3)+"";
	var eSpot=answerString.indexOf("e");
	var exponency=answerString.substring(eSpot+1, answerString.length);
	if (exponency.substring(0,1)==="+"){
		exponency=exponency.substring(1,exponency.length);
	}
	//nakedAnswer is the resolution, exponency is the other thing
	var decimallessAnswer=(n1+"").split('.').join("");
	// console.log(decimallessAnswer);
	var nakedAnswer=decimallessAnswer;
	if (nakedAnswer.length>numSigFigs){
			var nakedAnswer=nakedAnswer.substring(0,numSigFigs);
			//alert (nakedAnswer+"");
		}		
		console.log(nakedAnswer);
	if (nakedAnswer[0]=="-"){
	var nakedAnswer = nakedAnswer.slice(0, 2) + "." + nakedAnswer.slice(2, nakedAnswer.length);
		
	}else{
	var nakedAnswer = nakedAnswer.slice(0, 1) + "." + nakedAnswer.slice(1, nakedAnswer.length);
	}
		// console.log(nakedAnswer);
	var answerStringFinal=nakedAnswer+"*10"+(""+exponency).sup();
	return answerStringFinal;
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






var setupAnswersMult=function(n1, n2, signI){
	// console.log(n1);
 numSigs1=parseInt(getSigFigs(n1));
 numSigs2=parseInt(getSigFigs(n2));
 numSigFigs =parseInt(numSigs1)+0;
 if (numSigFigs>numSigs2){
	numSigFigs=(numSigs2)+0;
 }
 if (numSigFigs<=0){
	resetQuestion();
	
	//$('#scoremessage').text("yea");

 }
 else
 {

 answerOriginal=0;
 //$('#score').text("Score = " +signI+" "+numSigFigs + " " + numSigs1 +
 //" "+numSigs2+" "+answer);
 if ((Number(signI))>=1){
	answerOriginal=Number(n1)*Number(n2);
	numSigs1="himult";
 }
 else {
	answerOriginal=Number(n1)/Number(n2);
	numSigs2="lowdiv"
 }




			answer=sigFigs(Number(answerOriginal), numSigFigs);
			// console.error(answer);
// $('#score').text("Score = " +getSigFigs(answer)+" "+numSigFigs + " " + numSigs1 +
 //" "+numSigs2+" "+answerOriginal+" "+answer);
 // console.log(getSigFigs(("0.1690")));
			if (Number(getSigFigs(answer))<(numSigFigs)){
				if (Number(answer)%1!=0){  //the number contains a decimal.
					// console.log (answer+" "+getSigFigs(answer)+" "+numSigFigs);
					if ((answer+"").includes("e")){
						resetQuestion();
					}
					while (Number(getSigFigs(answer))<(numSigFigs)){
					answer=answer+"0";
					}
					// console.log("here");
					// resetQuestion();
				}
				else if (Number(answer)%10!=0){
					answer=answer+".0";
					// resetQuestion();
				}
				else{
					answer=answer+".";
					// alert ("WAIT");
					// console.log("length is "+answer.length+" "+numSigFigs);
					if ((answer.length-1)!=numSigFigs){
						answer =toOurExponential(answer);
					}
					
					resetQuestion();
				}
				// console.log("happenone");
			}
			else if (Number(getSigFigs(answer))>(numSigFigs)){
			// console.log("happentwo");
				resetQuestion();
				//answer=sigFigs(Number(answer), numSigFigs);

			}
			else{
			// console.log("happenthree");
				// resetQuestion();
			
			}
			wrongAnswer1=sigFigs(Number(answerOriginal), Math.floor(Math.random()*10));
			counting = 0;
			while (wrongAnswer1==answer && (wrongAnswer1!=" ")){
			wrongAnswer1=sigFigs(Number(answerOriginal), Math.floor(Math.random()*10));	
			counting=counting+1;
			if (counting>10){
				wrongAnswer1=" ";
				
				
			}

			}
			counting = 0;
			wrongAnswer2=sigFigs(Number(answerOriginal), Math.floor(Math.random()*10));
 while (((wrongAnswer2==answer) || (wrongAnswer2==wrongAnswer1)) && (wrongAnswer2!=" ")){
			wrongAnswer2=sigFigs(Number(answerOriginal), Math.floor(Math.random()*10));	
			counting=counting+1;
			if (counting>10){
				wrongAnswer2=" ";
				}
			}			
	
			wrongAnswer3=sigFigs(Number(answerOriginal), Math.floor(Math.random()*10));	
			counting = 0;
			while ((wrongAnswer3==answer || wrongAnswer3==wrongAnswer1 || wrongAnswer3==wrongAnswer2) && (wrongAnswer3!=" ")){
			wrongAnswer3=sigFigs(Number(answerOriginal), Math.floor(Math.random()*10));	
			counting=counting+1;
			if (counting>10){
				wrongAnswer3=" ";
				
			}
			}			
			
// console.warn("way way before");
		answers = [];
		answers[0]=answer;
		answers[1]=wrongAnswer1;
		answers[2]=wrongAnswer2;
		answers[3]=wrongAnswer3;
		
// console.warn("way before");
		for (i=0; i<answers.length; i++){
			
			for (j=0; j<answers.length; j++){
				if ((j!=i)&&(answers[i]===answers[j])){
					// alert("this is it?");
					// setupAnswers(n1, n2, signI);
					resetQuestion();
				}	
			}
		}

// console.warn("before");
		$("*").removeClass('answer');
		$("*").removeClass('wrongAnswer');
		$("*").removeClass('wrong');
		$("#boxa").addClass('wrongAnswer');
		$("#boxb").addClass('wrongAnswer');
		$("#boxc").addClass('wrongAnswer');
		$("#boxd").addClass('wrongAnswer');
		

		var random3 = Math.floor(Math.random() * 24);
		if (random3 === 0) {
			document.getElementById("bworda").innerHTML = answer;
			document.getElementById("bwordb").innerHTML = wrongAnswer1;
			document.getElementById("bwordc").innerHTML = wrongAnswer2;
			document.getElementById("bwordd").innerHTML = (wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 1) {
			document.getElementById("bworda").innerHTML = (answer);
			document.getElementById("bwordc").innerHTML = (wrongAnswer1);
			document.getElementById("bwordb").innerHTML = (wrongAnswer2);
			document.getElementById("bwordd").innerHTML = (wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 2) {
			document.getElementById("bworda").innerHTML = (answer);
			document.getElementById("bwordc").innerHTML = (wrongAnswer1);
			document.getElementById("bwordd").innerHTML = (wrongAnswer2);
			document.getElementById("bwordb").innerHTML = (wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 3) {
			document.getElementById("bworda").innerHTML = (answer);
			document.getElementById("bwordd").innerHTML = (wrongAnswer1);
			document.getElementById("bwordb").innerHTML = (wrongAnswer2);
			document.getElementById("bwordc").innerHTML = (wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 4) {
			document.getElementById("bworda").innerHTML = (answer);
			document.getElementById("bwordb").innerHTML = (wrongAnswer1);
			document.getElementById("bwordd").innerHTML = (wrongAnswer2);
			document.getElementById("bwordc").innerHTML = (wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 5) {
			document.getElementById("bworda").innerHTML = (answer);
			document.getElementById("bwordd").innerHTML = (wrongAnswer1);
			document.getElementById("bwordc").innerHTML = (wrongAnswer2);
			document.getElementById("bwordb").innerHTML = (wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 6) {
			document.getElementById("bwordb").innerHTML = (answer);
			document.getElementById("bworda").innerHTML = (wrongAnswer1);
			document.getElementById("bwordc").innerHTML = (wrongAnswer2);
			document.getElementById("bwordd").innerHTML = (wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 7) {
			document.getElementById("bwordb").innerHTML = (answer);
			document.getElementById("bworda").innerHTML = (wrongAnswer1);
			document.getElementById("bwordd").innerHTML = (wrongAnswer2);
			document.getElementById("bwordc").innerHTML = (wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 8) {
			document.getElementById("bwordb").innerHTML = (answer);
			document.getElementById("bwordc").innerHTML = (wrongAnswer1);
			document.getElementById("bwordd").innerHTML = (wrongAnswer2);
			document.getElementById("bworda").innerHTML = (wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 9) {
			document.getElementById("bwordb").innerHTML = (answer);
			document.getElementById("bwordc").innerHTML = (wrongAnswer1);
			document.getElementById("bworda").innerHTML = (wrongAnswer2);
			document.getElementById("bwordd").innerHTML = (wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 10) {
			document.getElementById("bwordb").innerHTML = (answer);
			document.getElementById("bwordd").innerHTML = (wrongAnswer1);
			document.getElementById("bworda").innerHTML = (wrongAnswer2);
			document.getElementById("bwordc").innerHTML = (wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 11) {
			document.getElementById("bwordb").innerHTML = (answer);
			document.getElementById("bwordd").innerHTML = (wrongAnswer1);
			document.getElementById("bwordc").innerHTML = (wrongAnswer2);
			document.getElementById("bworda").innerHTML = (wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 12) {
			document.getElementById("bwordc").innerHTML = (answer);
			document.getElementById("bworda").innerHTML = (wrongAnswer1);
			document.getElementById("bwordb").innerHTML = (wrongAnswer2);
			document.getElementById("bwordd").innerHTML = (wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 13) {
			document.getElementById("bwordc").innerHTML = (answer);
			document.getElementById("bworda").innerHTML = (wrongAnswer1);
			document.getElementById("bwordd").innerHTML = (wrongAnswer2);
			document.getElementById("bwordb").innerHTML = (wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 14) {
			document.getElementById("bwordc").innerHTML = (answer);
			document.getElementById("bwordb").innerHTML = (wrongAnswer1);
			document.getElementById("bwordd").innerHTML = (wrongAnswer2);
			document.getElementById("bworda").innerHTML = (wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 15) {
			document.getElementById("bwordc").innerHTML = (answer);
			document.getElementById("bwordb").innerHTML = (wrongAnswer1);
			document.getElementById("bworda").innerHTML = (wrongAnswer2);
			document.getElementById("bwordd").innerHTML = (wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 16) {
			document.getElementById("bwordc").innerHTML = (answer);
			document.getElementById("bwordd").innerHTML = (wrongAnswer1);
			document.getElementById("bworda").innerHTML = (wrongAnswer2);
			document.getElementById("bwordb").innerHTML = (wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 17) {
			document.getElementById("bwordc").innerHTML = (answer);
			document.getElementById("bwordd").innerHTML = (wrongAnswer1);
			document.getElementById("bwordb").innerHTML = (wrongAnswer2);
			document.getElementById("bworda").innerHTML = (wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 18) {
			document.getElementById("bwordd").innerHTML = (answer);
			document.getElementById("bworda").innerHTML = (wrongAnswer1);
			document.getElementById("bwordb").innerHTML = (wrongAnswer2);
			document.getElementById("bwordc").innerHTML = (wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 19) {
			document.getElementById("bwordd").innerHTML = (answer);
			document.getElementById("bworda").innerHTML = (wrongAnswer1);
			document.getElementById("bwordc").innerHTML = (wrongAnswer2);
			document.getElementById("bwordb").innerHTML = (wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 20) {
			document.getElementById("bwordd").innerHTML = (answer);
			document.getElementById("bwordb").innerHTML = (wrongAnswer1);
			document.getElementById("bworda").innerHTML = (wrongAnswer2);
			document.getElementById("bwordc").innerHTML = (wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 21) {
			document.getElementById("bwordd").innerHTML = (answer);
			document.getElementById("bwordb").innerHTML = (wrongAnswer1);
			document.getElementById("bwordc").innerHTML = (wrongAnswer2);
			document.getElementById("bworda").innerHTML = (wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 22) {
			document.getElementById("bwordd").innerHTML = (answer);
			document.getElementById("bwordc").innerHTML = (wrongAnswer1);
			document.getElementById("bworda").innerHTML = (wrongAnswer2);
			document.getElementById("bwordb").innerHTML = (wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 23) {
			document.getElementById("bwordd").innerHTML = (answer);
			document.getElementById("bwordc").innerHTML = (wrongAnswer1);
			document.getElementById("bwordb").innerHTML = (wrongAnswer2);
			document.getElementById("bworda").innerHTML = (wrongAnswer3);
			$('#boxd').addClass('answer');
		}
 }

 	};
	// $('#num2').text($('#num1').val());
	
	
var resetQuestion=function(){
		// $('#boxb').text(35);
		// $('#bwordb').text(35);

let questionTypeRandom=Math.floor(Math.random()*2);
if (questionTypeRandom==0){
resetQuestionAdd();
}
else{
	resetQuestionMult();
}
}
var resetQuestionMult=function(){
signIs = Math.floor(Math.random()*2);

		number1=(Math.floor(Math.random()*2000000-1000000));
		finalNum1 = number1*Math.pow(10, -1*Math.floor(Math.random()*9))
		finalNum1=round(finalNum1, Math.floor(Math.random()*4));
		


		number2=(Math.floor(Math.random()*2000000-1000000));
		finalNum2 = number2*Math.pow(10, -1*Math.floor(Math.random()*9))
		finalNum2=round(finalNum2, Math.floor(Math.random()*4));
		
		if (signIs>=1) {
		$('#num1').text(finalNum1+" * "+finalNum2);
		$('#den1').text(":)");
		$('#den1').css("color", "#FF22FF");
		$('#firstNum').removeClass("col-xs-8 col-xs-offset-2")
		$('#firstNum').addClass("col-xs-10 col-xs-offset-1")
		$('#firstNum').css("text-align", "center");
		multiplicationProblem();		
		}
		else {
		$('#num1').text(" "+finalNum1);	
		$('#den1').text(" "+finalNum2);
		$('#den1').css("color", "black");
		$('#firstNum').removeClass("col-xs-10 col-xs-offset-1")
		$('#firstNum').addClass("col-xs-8 col-xs-offset-2")
		$('#firstNum').css("text-align", "center");
	
		divisionProblem();		
		}
		//$('#scoremessage').text(signIs);

			setupAnswersMult(finalNum1, finalNum2, signIs);
	};


var resetQuestionAdd=function(){
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

			setupAnswersAdd(finalNum1, finalNum2, signIs);
	};
var setupAnswersAdd=function(n1, n2, signI){
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
					//answer=answer.Fixed(numSigFigs);
					resetQuestion();
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
			
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, parseInt(score));
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
	var thisAppNum = 39;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
});