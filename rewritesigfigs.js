$(document).ready(function(){

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
        db.settings({
            timestampsInSnapshots: true
        });

        db.collection("chemscores").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // clone template row and append to table body
                // var tr = tempTr.clone();
                // tr.data('id', doc.id);
                // console.warn(doc.id + "");
                loadDatabase.push(doc.id + "");
                // var data = doc.data();
                // // set cell values from Contact data
                // tr.find('td[data-prop]').each(function () {
                // var td = $(this);
                // td.text(data[td.data('prop')] || '');
                // });
                // tblBody.append(tr);
            });
        });
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
	var thisAnswer="";
	var finalNum;
	var thisisanswer;
	var numberOfSigFigsToCount;
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
	var setupAnswers=function(n1, n2){

			if ((getSigFigs(n1) >= 15)||(getSigFigs(n1).toString().length >=12)){
			    resetQuestion();
			}
			else{
			    
			//answer=round(Number(n1), 1*n2);
				answer=sigFigs(Number(n1), n2);
// $('#score').text("Score = " +getSigFigs(answer)+" "+numSigFigs + " " + numSigs1 +
 //" "+numSigs2+" "+answerOriginal+" "+answer);
			if (Number(getSigFigs(answer))<(n2)){
				if (Number(answer)%1!=0){  //the number contains a decimal.
					answer=answer+"0";
				}
				else if (Number(answer)%10!=0){
					answer=answer+".0";
				}
			}//answer=getSigFigs(n1);
			thisAnswer=answer+"";
			//alert ("The answer is: "+answer);
	
		// for (i=0; i<answers.length; i++){
			
			// for (j=0; j<answers.length; j++){
				// if ((j!=i)&&(answers[i]===answers[j])){
					// setupAnswers(n1, n2);
				// }	
			// }
		// }


	
		
}
	};
	// $('#num2').text($('#num1').val());
	
	var resetQuestion=function(){
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		number=(Math.floor(Math.random()*200000000-100000000));
	

		finalNum = number//*Math.pow(10, -1*Math.floor(Math.random()*0))
		//finalNum=Number(round(finalNum, Math.floor(Math.random()*5)))*Math.pow(10, -1*Math.floor(Math.random()*10)-3);
		finalNum=Number(finalNum.toPrecision(Math.floor(Math.random()*7)+1))*Math.pow(10, -1*Math.floor(Math.random()*10)-3);

			thisisanswer=getSigFigs(finalNum);
			numberOfSigFigsToCount = (Math.floor(Math.random()*thisisanswer));
		//	alert (finalNum+" has "+thisisanswer + " and " + numberOfSigFigsToCount);
			if ((numberOfSigFigsToCount==null)||(numberOfSigFigsToCount==0)){
			//	alert ("ahaha!");
				resetQuestion();
				
			}
if (score>19){
	document.getElementById("num1").innerHTML = ("please round "+finalNum+" to "+numberOfSigFigsToCount+" sig figs below.");
}
else {
	document.getElementById("num1").innerHTML = ("Please round "+finalNum+" to "+numberOfSigFigsToCount+" sig figs below.");
}
			setupAnswers(finalNum, numberOfSigFigsToCount);
	};

	if($('#num1:contains(704)')){
		// $('#bwordb').text(35);
		//alert ("umm");
		resetQuestion();
	}




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
	
		var anotherQuestion = function (answer) {
		//	var givenAnswer = prompt("What is the name of the compound above?");
		if (givenAnswer != null) {
			if (givenAnswer == answer) {
				score = score + 1;
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, (score+""));
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				resetQuestion();
			} else {
				score = score - 1;
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				anotherQuestion();
			}
		}
	}
	$('#givenAnswer').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitButton').click();
	});
	$('#submitButton').click(function () {
		//alert (thisAnswer);
		var givenAnswer = document.getElementById("givenAnswer").value;

		if (givenAnswer != null) {
			//alert (givenAnswer.substring(0, 1)+ " and "+ thisAnswer.substring(0, 1));
if (thisAnswer.length>10){
thisAnswer=""+round(thisAnswer, 0);
}	
		if (((givenAnswer.substring(0, 1) != "0")&&(givenAnswer.substring(0,1) !="-")) && (thisAnswer.substring(0, 1) == "0")) {
				givenAnswer = "0"+givenAnswer;
			}
			else if ((givenAnswer.substring(0, 2) !="-0")&&(thisAnswer.substring(0, 2) == "-0")){
				//alert ("happened");
				givenAnswer= "-0"+givenAnswer.substring(1);
			}
		//	alert ("answer is" + round(thisAnswer, 0));
			if (("" + givenAnswer).toUpperCase().replace(/\s/g, '') == ("" + thisAnswer).toUpperCase().replace(/\s/g, '')) {
				score = score + 1;
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, (score+""));
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
		var thisAppNum = 23;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
});