$(document).ready(function () {
var roundType="decimal";
var thisAnswer="4";
var givenAnswer;
var	finalNum = 0;
var thisisanswer = 0;
var numberOfSigFigsToCount =0;
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
	var coeff1;
	var mag1;
	var coeff2;
	var mag2;
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
	function round(value, exp) {
		if (typeof exp === 'undefined' || +exp === 0)
			return Math.round(value);

		value = +value;
		exp = +exp;

		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
			return NaN;

		// Shift
		value = value.toString().split('e');
		value = Math.round( + (value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

		// Shift back
		value = value.toString().split('e');
		return  + (value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
	}

	// function sigFigs(n, sig) {
		// if (n > Math.pow(10, sig)) {
			// return toOurExponential(n);
		// } else {
			// n = Math.abs(n);
			// var mult = Math.pow(10,
					// sig - Math.floor(Math.log(n) / Math.LN10) - 1);
			// //alert ("n is " +n + " sig is " + sig);

			// return Math.round(n * mult) / mult;
		// }
	// }

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

	var toOurExponential = function (n1) { //returns a string including the *10^ exoitebct


		var answerString = n1.toExponential() + "";
		//	answerString=round(answerString,3)+"";
		var eSpot = answerString.indexOf("e");

		var exponency = answerString.substring(eSpot + 1, answerString.length);
		if (exponency.substring(0, 1) === "+") {
			exponency = exponency.substring(1, exponency.length);
		}
		if (eSpot > 5) {
			var eSpot = 5;
		}
		var nakedAnswer = answerString.substring(0, eSpot);

		var longerAnswer = nakedAnswer;
		nakedAnswer = Number(nakedAnswer);
		nakedAnswer = nakedAnswer.toFixed(2);
		var answerStringFinal = nakedAnswer + "*10^" + exponency;
		//alert (answerStringFinal + " " + exponency + " " + nakedAnswer + " " + eSpot + "longer "+longerAnswer);
		return answerStringFinal;
	};

var C1;
var C2;
var V1;
var V2;
var molar;
var declength;


	var setupAnswersDilution = function (m1, m2, m3, m4, n1, n2, n3, ct, fN) {
		if (questionClass=="dilution"){
		
				C1 = n1 * Math.pow(10, m1);
		V2 = n2 * Math.pow(10, m3);
		C2 = n3 * Math.pow(10, m2);
		//var concentrationQuantity = moles/(n2*Math.pow(10,m2));
		molar = ((C2 * V2) / C1) / Math.pow(10, m4);
		declength = decimalPlaces(molar);
		// console.error (molar);
		
		// console.warn((molar+"").length);
		// console.log(declength);
		// console.error((molar+"").length-declength);

		if (roundType=="decimal"){
			// console.warn("decimal");
		if ((molar+"").includes("e")){
			resetQuestion();
		}
		else if (((molar+"").length-declength)>8){
			resetQuestion();
			//console.error("here");
			return;
		}
		numSigs1 = parseInt(getSigDigits(molar));
		numSigFigs = parseInt(numSigs1) + 0;
		// if (numSigFigs>numSigs2){
		// numSigFigs=(numSigs2)+0;
		// }
		if (numSigs1 < 1) {
			//alert ("numsigs1");

			resetQuestion();
			//console.error("here");
			return;
		} else if (numSigFigs > 10) {
			resetQuestion();
			//console.error("here");
			return;

			//	$('#scoremessage').text("yea");

		} else {
			//$('#scoremessage').text(" "+numSigFigs+" "+numSigs2+" "+numSigs1);

			//answerOriginal = 0;
			//$('#score').text("Score = " +signI+" "+numSigFigs + " " + numSigs1 +
			//" "+numSigs2+" "+answer);
			molar = round(Number(molar), 1 * numberOfSigFigsToCount);
			if (answer == 0) {
				resetQuestion();
			//console.error("here");
				return;
			} else {
				if (Number((getSigDigits(molar)) < (numSigFigs)) && (Number(molar) % 1 != 0)) {
					// if (Number(answer)%1!=0){  //the number contains a decimal.
					molar = Number(molar).toFixed(numberOfSigFigsToCount);
					numToAdd=0;
					if (molar<0){
					numToAdd=1;
					}
					//answer=(""+answer).substring(0, answer.length)
					//alert ("it did have to fix that ish");
					// }
					// else if (Number(answer)%10!=0){
					// answer=answer+".0";falert
					
					// }

				}
				thisAnswer = molar + "";
				let tempThisAnswer=thisAnswer+"";
				// BELOW HERE substring of thisanswer after the decimal
			// console.error(tempThisAnswer.substring(thisAnswer.indexOf('.')+1, tempThisAnswer.length).length);
			// console.warn("out of "+numberOfSigFigsToCount);
			// if (tempThisAnswer.substring(thisAnswer.indexOf('.'), tempThisAnswer.length)<numberOfSigFigsToCount)
			while (tempThisAnswer.substring(thisAnswer.indexOf('.')+1, tempThisAnswer.length).length<numberOfSigFigsToCount){
				tempThisAnswer=tempThisAnswer+"0";
			}
			// console.error("it is "+tempThisAnswer);
			thisAnswer=tempThisAnswer;
				//alert(thisAnswer);
				//answer=getSigFigs(n1);
				//alert (n1 + " who has " + numSigs1);
			}
		}
	}
	else{
		// console.log("sigFigs");
		if ((molar+"").includes("e")){
			resetQuestion();
			//console.error("here");
			return;
		}
		else if (((molar+"").length-declength)>5){
			resetQuestion();
			//console.error("here");
			return;
		}
		molar=sigFigs(molar, numberOfSigFigsToCount);
				if (Number(getSigFigs(molar))<(numberOfSigFigsToCount)){
				if (Number(molar)%1!=0){  //the number contains a decimal.
					molar=molar+"0";
				}
				else if (Number(molar)%10!=0){
					molar=molar+".0";
				}
			}//answer=getSigFigs(n1);
		thisAnswer=(molar+"");
		// console.log(thisAnswer);
	}
		var moles = molar * Math.pow(10, m4)
			if (m4 == 0) {
				moles = molar * Math.pow(10, m3);
			}
			var answerString = (sigFigs(Number(molar), 3)) + "";
		answer = answerString + " " + getUnit(m4) + "L";
		wrongAnswer1 = (sigFigs(Number(moles), 3)) + " " + getUnit(m4) + "L";
		wrongAnswer2 = (sigFigs(Number(1 / moles), 3)) + " " + getUnit(m4) + "L";
		wrongAnswer3 = (sigFigs(Number(1 / molar), 3)) + " " + getUnit(m4) + "L";
		}
else{//percent solutions
					C1 = n1 * Math.pow(10, m1);
		V2 = n2 * Math.pow(10, m3);
		C2 = n3 * Math.pow(10, m2);
		//var concentrationQuantity = moles/(n2*Math.pow(10,m2));
		
			var deal=1;
			if (ct=="%"){
				deal = 10;
			}
			molar = ((V2)*C2*deal)/Math.pow(10, m4);
		declength = decimalPlaces(molar);
		// console.error (molar);
		
		// console.warn((molar+"").length);
		// console.log(declength);
		// console.error((molar+"").length-declength);
			//var concentrationQuantity = moles/(n2*Math.pow(10,m2));
			
if (roundType=="decimal"){
			// console.warn("decimal");
		if ((molar+"").includes("e")){
			resetQuestion();
			//console.error("here");
			return;
		}
		else if (((molar+"").length-declength)>8){
			resetQuestion();
			//console.error("here");
			return;
		}
		numSigs1 = parseInt(getSigDigits(molar));
		numSigFigs = parseInt(numSigs1) + 0;
		// if (numSigFigs>numSigs2){
		// numSigFigs=(numSigs2)+0;
		// }
		if (numSigs1 < 1) {
			//alert ("numsigs1");

			resetQuestion();
			//console.error("here");
			return;
		} else if (numSigFigs > 10) {
			resetQuestion();
			//console.error("here");
			return;

			//	$('#scoremessage').text("yea");

		} else {
			//$('#scoremessage').text(" "+numSigFigs+" "+numSigs2+" "+numSigs1);

			//answerOriginal = 0;
			//$('#score').text("Score = " +signI+" "+numSigFigs + " " + numSigs1 +
			//" "+numSigs2+" "+answer);
			molar = round(Number(molar), 1 * numberOfSigFigsToCount);
			if (answer == 0) {
				resetQuestion();
			//console.error("here");
				return;
			} else {
				if (Number((getSigDigits(molar)) < (numSigFigs)) && (Number(molar) % 1 != 0)) {
					// if (Number(answer)%1!=0){  //the number contains a decimal.
					molar = Number(molar).toFixed(numberOfSigFigsToCount);
					numToAdd=0;
					if (molar<0){
					numToAdd=1;
					}
					//answer=(""+answer).substring(0, answer.length)
					//alert ("it did have to fix that ish");
					// }
					// else if (Number(answer)%10!=0){
					// answer=answer+".0";falert
					
					// }

				}
				thisAnswer = molar + "";
				let tempThisAnswer=thisAnswer+"";
				// BELOW HERE substring of thisanswer after the decimal
			// console.error(tempThisAnswer.substring(thisAnswer.indexOf('.')+1, tempThisAnswer.length).length);
			// console.warn("out of "+numberOfSigFigsToCount);
			// if (tempThisAnswer.substring(thisAnswer.indexOf('.'), tempThisAnswer.length)<numberOfSigFigsToCount)
			while (tempThisAnswer.substring(thisAnswer.indexOf('.')+1, tempThisAnswer.length).length<numberOfSigFigsToCount){
				tempThisAnswer=tempThisAnswer+"0";
			}
			// console.error("it is "+tempThisAnswer);
			thisAnswer=tempThisAnswer;
				//alert(thisAnswer);
				//answer=getSigFigs(n1);
				//alert (n1 + " who has " + numSigs1);
			}
		}
	}
	else{
		// console.log("sigFigs");
		if ((molar+"").includes("e")){
			resetQuestion();
			//console.error("here");
			return;
		}
		else if (((molar+"").length-declength)>5){
			resetQuestion();
			//console.error("here");
			return;
		}
		molar=sigFigs(molar, numberOfSigFigsToCount);
				if (Number(getSigFigs(molar))<(numberOfSigFigsToCount)){
				if (Number(molar)%1!=0){  //the number contains a decimal.
					molar=molar+"0";
				}
				else if (Number(molar)%10!=0){
					molar=molar+".0";
				}
			}//answer=getSigFigs(n1);
		thisAnswer=(molar+"");
		// console.log(thisAnswer);
	}
	
	
			var moles =molar*Math.pow(10, m4)
			if (m4==0){
				moles=molar*Math.pow(10, m3);
			}
			var answerString=(sigFigs(Number(molar),3))+"";
			answer=answerString+" "+getUnit(m4) + "g";
			wrongAnswer1=(sigFigs(Number(moles),3))+" "+getUnit(m4) + "g";
			wrongAnswer2=(sigFigs(Number(1/moles),3))+" "+getUnit(m4) + "g";
			wrongAnswer3=(sigFigs(Number(1/molar),3))+" "+getUnit(m4) + "g";
}

		var answers = [];
		answers[0] = answer;
		answers[1] = wrongAnswer1;
		answers[2] = wrongAnswer2;
		answers[3] = wrongAnswer3;

		for (i = 0; i < answers.length; i++) {

			for (j = 0; j < answers.length; j++) {
				if ((j != i) && (answers[i] === answers[j])) {
					resetQuestion();
					break;					//	setupAnswers(m1, m2, m3, m4, n1, n2, n3, ct, fN);
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

		var random3 = Math.floor(Math.random() * 24);
		if (random3 === 0) {
			$('#bworda').text(answer);
			$('#bwordb').text(wrongAnswer1);
			$('#bwordc').text(wrongAnswer2);
			$('#bwordd').text(wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 1) {
			$('#bworda').text(answer);
			$('#bwordc').text(wrongAnswer1);
			$('#bwordb').text(wrongAnswer2);
			$('#bwordd').text(wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 2) {
			$('#bworda').text(answer);
			$('#bwordc').text(wrongAnswer1);
			$('#bwordd').text(wrongAnswer2);
			$('#bwordb').text(wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 3) {
			$('#bworda').text(answer);
			$('#bwordd').text(wrongAnswer1);
			$('#bwordb').text(wrongAnswer2);
			$('#bwordc').text(wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 4) {
			$('#bworda').text(answer);
			$('#bwordb').text(wrongAnswer1);
			$('#bwordd').text(wrongAnswer2);
			$('#bwordc').text(wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 5) {
			$('#bworda').text(answer);
			$('#bwordd').text(wrongAnswer1);
			$('#bwordc').text(wrongAnswer2);
			$('#bwordb').text(wrongAnswer3);
			$('#boxa').addClass('answer');
		} else if (random3 === 6) {
			$('#bwordb').text(answer);
			$('#bworda').text(wrongAnswer1);
			$('#bwordc').text(wrongAnswer2);
			$('#bwordd').text(wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 7) {
			$('#bwordb').text(answer);
			$('#bworda').text(wrongAnswer1);
			$('#bwordd').text(wrongAnswer2);
			$('#bwordc').text(wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 8) {
			$('#bwordb').text(answer);
			$('#bwordc').text(wrongAnswer1);
			$('#bwordd').text(wrongAnswer2);
			$('#bworda').text(wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 9) {
			$('#bwordb').text(answer);
			$('#bwordc').text(wrongAnswer1);
			$('#bworda').text(wrongAnswer2);
			$('#bwordd').text(wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 10) {
			$('#bwordb').text(answer);
			$('#bwordd').text(wrongAnswer1);
			$('#bworda').text(wrongAnswer2);
			$('#bwordc').text(wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 11) {
			$('#bwordb').text(answer);
			$('#bwordd').text(wrongAnswer1);
			$('#bwordc').text(wrongAnswer2);
			$('#bworda').text(wrongAnswer3);
			$('#boxb').addClass('answer');
		} else if (random3 === 12) {
			$('#bwordc').text(answer);
			$('#bworda').text(wrongAnswer1);
			$('#bwordb').text(wrongAnswer2);
			$('#bwordd').text(wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 13) {
			$('#bwordc').text(answer);
			$('#bworda').text(wrongAnswer1);
			$('#bwordd').text(wrongAnswer2);
			$('#bwordb').text(wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 14) {
			$('#bwordc').text(answer);
			$('#bwordb').text(wrongAnswer1);
			$('#bwordd').text(wrongAnswer2);
			$('#bworda').text(wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 15) {
			$('#bwordc').text(answer);
			$('#bwordb').text(wrongAnswer1);
			$('#bworda').text(wrongAnswer2);
			$('#bwordd').text(wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 16) {
			$('#bwordc').text(answer);
			$('#bwordd').text(wrongAnswer1);
			$('#bworda').text(wrongAnswer2);
			$('#bwordb').text(wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 17) {
			$('#bwordc').text(answer);
			$('#bwordd').text(wrongAnswer1);
			$('#bwordb').text(wrongAnswer2);
			$('#bworda').text(wrongAnswer3);
			$('#boxc').addClass('answer');
		} else if (random3 === 18) {
			$('#bwordd').text(answer);
			$('#bworda').text(wrongAnswer1);
			$('#bwordb').text(wrongAnswer2);
			$('#bwordc').text(wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 19) {
			$('#bwordd').text(answer);
			$('#bworda').text(wrongAnswer1);
			$('#bwordc').text(wrongAnswer2);
			$('#bwordb').text(wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 20) {
			$('#bwordd').text(answer);
			$('#bwordb').text(wrongAnswer1);
			$('#bworda').text(wrongAnswer2);
			$('#bwordc').text(wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 21) {
			$('#bwordd').text(answer);
			$('#bwordb').text(wrongAnswer1);
			$('#bwordc').text(wrongAnswer2);
			$('#bworda').text(wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 22) {
			$('#bwordd').text(answer);
			$('#bwordc').text(wrongAnswer1);
			$('#bworda').text(wrongAnswer2);
			$('#bwordb').text(wrongAnswer3);
			$('#boxd').addClass('answer');
		} else if (random3 === 23) {
			$('#bwordd').text(answer);
			$('#bwordc').text(wrongAnswer1);
			$('#bwordb').text(wrongAnswer2);
			$('#bworda').text(wrongAnswer3);
			$('#boxd').addClass('answer');
		}

	};
	// $('#num2').text($('#num1').val());


	var getMagnitude = function (othermag) {
		var thismag = othermag;
		while (thismag == othermag) {
			var rannum = (Math.floor(Math.random() * 5));

			if (rannum == 0) {
				thismag = 0;
			} else if (rannum == 1) {
				thismag = -6;
			} else if (rannum == 2) {
				thismag = -3;
			} else if (rannum == 3) {
				thismag = 0;

			// } else if (rannum == 4) {

			// } else if (rannum == 5) {

			// } else if (rannum == 6) {
				// thismag = 3;
			}
			// else if (rannum==7){
			// 	thismag=6;
			// }
		}
		return thismag;

	};
var getUnitSolution =function(rannum){
		var thismag="";
			if (rannum==0){
		}
		else if (rannum==-6){
			thismag="\u03BC";
		}
		else if (rannum==-3){
			thismag="m";
		}
		else if (rannum==-2){
			thismag="c";
		}
		else if (rannum==-1){
			thismag="d";
		}
		else if (rannum==3){
			thismag="k";
		}
		// else if (rannum==6){
		// 	thismag="M";
		// }
		else if (rannum==-9){
			thismag="n";
		}
		return thismag;
	};
	var getUnit = function (rannum) {
		var thismag = "";
		if (rannum == 0) {}
		else if (rannum == -6) {
			thismag = "\u03BC";
		} else if (rannum == -3) {
			thismag = "m";
		} else if (rannum == -2) {
			thismag = "c";
		} else if (rannum == -1) {
			thismag = "d";
		} else if (rannum == 3) {
			thismag = "k";
		}
		// else if (rannum==6){
		// 	thismag="M";
		// }
		else if (rannum == -9) {
			thismag = "n";
		}
		return thismag;
	};

	var getRandomMolecule = function () {
		var moleculeName = "";
		randomunitnum = (Math.floor(Math.random() * 6));
		if (randomunitnum == 0) {
			moleculeName = "CaCl2";
		} else if (randomunitnum == 1) {
			moleculeName = "NaCl";
		} else if (randomunitnum == 2) {
			moleculeName = "C6H12O6";
		} else if (randomunitnum == 3) {
			moleculeName = "(NH4)3N";
		} else if (randomunitnum == 4) {
			moleculeName = "H2SO4";
		} else if (randomunitnum == 5) {
			moleculeName = "KBr";
		}
		return moleculeName;

	};
	var getMolarMassText = function (unitName) {
		var mW = "";
		if (unitName == "CaCl2") {
			mW = 110.98;
		} else if (unitName == "NaCl") {
			mW = 58.44;
		} else if (unitName == "C6H12O6") {
			mW = 180.16;
		} else if (unitName == "(NH4)3N") {
			mW = 68.16;
		} else if (unitName == "H2SO4") {
			mW = 98.08;
		} else if (unitName == "KBr") {
			mW = 119.00;
		}
		return mW;
	};


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
	
	var getRandomUnit = function () {
		var unitName = "";
		randomunitnum = (Math.floor(Math.random() * 6));
		if (randomunitnum == 0) {
			unitName = "L";
		} else if (randomunitnum == 1) {
			unitName = "g";
		} else if (randomunitnum == 2) {
			unitName = "M";
		} else if (randomunitnum == 3) {
			unitName = "m";
		} else if (randomunitnum == 4) {
			unitName = "mol";
		} else if (randomunitnum == 5) {
			unitName = "atm";
		}
		return unitName;

	};

	var getRandomConcentrationType = function () {
		var unitName = "";
		randomunitnum = (Math.floor(Math.random() * 7));
		if (randomunitnum == 0) {
			unitName = "X";
		} else if (randomunitnum == 1) {
			unitName = "mg/mL";
		} else if (randomunitnum == 2) {
			unitName = "%";
		} else if (randomunitnum == 3) {
			unitName = "M";
		} else if (randomunitnum == 4) {
			unitName = "g/L";
		} else if (randomunitnum == 5) {
			unitName = "ppm";
		} else if (randomunitnum == 6) {
			unitName = ":";
		}
		return unitName;
	};
		var getRandomConcentrationTypeSolution = function () {
		var unitName="";
		randomunitnum=(Math.floor(Math.random()*2));
		if (randomunitnum==0){
			unitName="%";
		}
		else if (randomunitnum==1){
			unitName="mg/mL";
		}
		else if (randomunitnum==2){
	
		}
		else if (randomunitnum==3){
			unitName="M";
		}
		else if (randomunitnum==4){
			unitName="g/L";
		}
		else if (randomunitnum==5){
			unitName="ppm";
		}
		return unitName;
	};

	var getCorrectChemicalFormula = function (moleculeName) {
		var newName = "";
		//randomunitnum=(Math.floor(Math.random()*6));
		if (moleculeName == "CaCl2") {
			newName = "CaCl" + ("2").sub();
		} else if (moleculeName == "NaCl") {
			newName = "CaCl" + ("2").sub();
		} else if (moleculeName == "C6H12O6") {
			newName = "C" + ("6").sub() + "H" + ("12").sub() + "O" + ("6").sub();
		} else if (moleculeName == "(NH4)3N") {
			newName = "(NH" + ("4").sub() + ")" + ("3").sub() + "N";
		} else if (moleculeName == "H2SO4") {
			newName = "H" + ("2").sub() + "SO" + ("4").sub();
		} else if (moleculeName == "KBr") {
			newName = "KBr";
		}
		return newName;

		var newName = "";
		//randomunitnum=(Math.floor(Math.random()*6));
		// if (moleculeName=="CaCl2"){
		// newName="CaCl"+("2");
		// }
		// else if (moleculeName=="NaCl"){
		// newName="CaCl"+("2");
		// }
		// else if (moleculeName=="C6H12O6"){
		// newName="C"+("6")+"H"+("12")+"O"+("6");
		// }
		// else if (moleculeName=="(NH4)3N"){
		// newName="(NH"+("4")+")"+("3")+"N";
		// }
		// else if (moleculeName=="H2SO4"){
		// newName="H"+("2")+"SO"+("4");
		// }
		// else if (moleculeName=="KBr"){
		// newName="KBr";
		// }
		// return newName;
	};
var number;
var numbertwo;
var numberThree;
var coeff1;
var coeff2;
var mag1;
var mag2;
var mag3;
var mag4;
var conctype;
var placeHolderNumber;
var coinFlip;
var roundTypeName;
var coinFlipQuestion;
var questionClass = "dilution";
var questionType;
var resetQuestion = function () {
			coinFlipQuestion= (Math.floor(Math.random()*2));
		if (coinFlipQuestion==0){
questionClass = "dilution";
		}
else {
questionClass = "preparation";
}
	if (questionClass == "dilution"){
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		coinFlip= (Math.floor(Math.random()*2));
		if (coinFlip==0){
			roundType="decimal";
			roundTypeName="decimal places";
		}
		else{
		roundType="sigFigs";
		roundTypeName="significant figures";
		}
		number = (Math.floor(Math.random() * 200));
		// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
		numbertwo = (Math.floor(Math.random() * 200));
		numberThree = (Math.floor(Math.random() * 200));
		// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');
				finalNum=(Math.floor(Math.random()*200000000-100000000));
	

				finalNum=Number(finalNum.toPrecision(Math.floor(Math.random()*7)+1))*Math.pow(10, -1*Math.floor(Math.random()*10)-3);

			thisisanswer=getSigFigs(finalNum);
			
			numberOfSigFigsToCount = (Math.floor(Math.random()*thisisanswer));
			// console.log(numberOfSigFigsToCount);
		if ((numberOfSigFigsToCount==null)||(numberOfSigFigsToCount==0)||(numberOfSigFigsToCount>=5)){
			// console.error("ahaha!");
				// resetQuestion();
				numberOfSigFigsToCount=2;
				
			}
		if (numberThree > number) {
			placeHolderNumber = number;
			number = numberThree;
			numberThree = placeHolderNumber;
		}
		coeff1 = ((Math.random() * 59.9999999 - 50));
		mag1 = getMagnitude(11);
		mag2 = getMagnitude(mag1);
		mag3 = getMagnitude(11);
		mag4 = getMagnitude(mag3);

		solute = getRandomMolecule();
		molarMass = getMolarMassText(solute);
		formulaName = getCorrectChemicalFormula(solute);
		// the below text would have generated a random unit type.
		//thisUnitType = getRandomUnit();

		conctype = getRandomConcentrationType();
		if (conctype != "M") {
			mag1 = 0;
			mag2 = 0;
		}

		units1 = getUnit(mag1) + conctype;
		units2 = getUnit(mag2) + conctype;
		units3 = getUnit(mag3) + "L";
		units4 = getUnit(mag4) + "L";

		if (conctype == ":") {
			//number=1;
		}
		//units1 = number+"grams";
		//units2 = numbertwo+"Liters";
		//		var units3 = getMolaraMassText(getRandomMolecule());


		// $('#num1').text(toOurExponential(sigFigs(finalNum, 3)));
		// $('#den1').text(toOurExponential(sigFigs(finalNumtwo, 3)));
		//document.getElementById("num1").innerHTML = "What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)";
		questionType = Math.floor(Math.random() * 3) + 1;
		if (conctype == ":") {
			//alert ("it");
			questionType = 4;
			number = Math.floor(number);
			numberThree = 1;
		}
		//alert (questionType);
		switch (questionType) {
		case 1:
			if (score > 19) {
				document.getElementById("num1").innerHTML = "how many " + units4 + " of " + number + units1 + " stock solution of " + formulaName + " will we need to make " + numbertwo + " " + units3 + " of " + numberThree + "" + units2 + " " + formulaName + " solution? Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";

			} else {
				document.getElementById("num1").innerHTML = "How many " + units4 + " of " + number + units1 + " stock solution of " + formulaName + " will we need to make " + numbertwo + " " + units3 + " of " + numberThree + "" + units2 + " " + formulaName + " solution? Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";

			}
			break;
		case 2:
			if (score > 19) {
				document.getElementById("num1").innerHTML = "calculate the volume in " + units4 + " of " + number + units1 + " " + formulaName + " required to make " + numbertwo + " " + units3 + " of a " + numberThree + "" + units2 + " solution of " + formulaName + " in water? Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";

			} else {
				document.getElementById("num1").innerHTML = "Calculate the volume in " + units4 + " of " + number + units1 + " " + formulaName + " required to make " + numbertwo + " " + units3 + " of a " + numberThree + "" + units2 + " solution of " + formulaName + " in water? Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";

			}
			break;
		case 3:
			if (score > 19) {
				document.getElementById("num1").innerHTML = "calculate the volume in " + units4 + " of a " + number + units1 + " " + formulaName + " stock solution required to make " + numbertwo + "" + units3 + " with a final concentration of " + formulaName + " at " + numberThree + "" + units2 + ". Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";

			} else {
				document.getElementById("num1").innerHTML = "Calculate the volume in " + units4 + " of a " + number + units1 + " " + formulaName + " stock solution required to make " + numbertwo + "" + units3 + " with a final concentration of " + formulaName + " at " + numberThree + "" + units2 + ". Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";

			}
			break;
		case 4:
			if (score > 19) {
				document.getElementById("num1").innerHTML = "a technician is asked to prepare a dilution of a common laboratory disinfectant. The label indicates that a " + numberThree + ":" + number + " dilution in water is required prior to use. Calculate the volume in " + units4 + " of disinfectant required to make " + numbertwo + "" + units3+". Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";

			} else {
				document.getElementById("num1").innerHTML = "A technician is asked to prepare a dilution of a common laboratory disinfectant. The label indicates that a " + numberThree + ":" + number + " dilution in water is required prior to use. Calculate the volume in " + units4 + " of disinfectant required to make " + numbertwo + "" + units3+". Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";

			}
			break;
		}

		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");

		// $('body :not(script)').contents().filter(function() {
		// return this.nodeType === 3;
		// }).replaceWith(function() {
		// return this.nodeValue.replace(/[0123456789]/g, '<sub>$&</sub>');
		// });

		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " +toOurExponential(sigFigs(coeff1, 3))+ units1 " of "+ formulaName + " in " +  toOurExponential(sigFigs(coeff1, 3)) + units2 " of //water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");


		setupAnswersDilution(mag1, mag2, mag3, mag4, number, numbertwo, numberThree, conctype, formulaName);
	}
	else {
			// $('#boxb').text(35);
		// $('#bwordb').text(35);
		coinFlip= (Math.floor(Math.random()*2));
		if (coinFlip==0){
			roundType="decimal";
			roundTypeName="decimal places";
		}
		else{
		roundType="sigFigs";
		roundTypeName="significant figures";
		}
		number = (Math.floor(Math.random() * 200));
		// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
		numbertwo = (Math.floor(Math.random() * 200));
		numberThree = (Math.floor(Math.random() * 200));
		// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');
				finalNum=(Math.floor(Math.random()*200000000-100000000));
	

				finalNum=Number(finalNum.toPrecision(Math.floor(Math.random()*7)+1))*Math.pow(10, -1*Math.floor(Math.random()*10)-3);

			thisisanswer=getSigFigs(finalNum);
			
			numberOfSigFigsToCount = (Math.floor(Math.random()*thisisanswer));
			// console.log(numberOfSigFigsToCount);
		if ((numberOfSigFigsToCount==null)||(numberOfSigFigsToCount==0)||(numberOfSigFigsToCount>=5)){
			// console.error("ahaha!");
				// resetQuestion();
				numberOfSigFigsToCount=2;
				
			}
		if (numberThree > number) {
			placeHolderNumber = number;
			number = numberThree;
			numberThree = placeHolderNumber;
		}
		coeff1 = ((Math.random() * 59.9999999 - 50));
		mag1 = getMagnitude(11);
		mag2 = getMagnitude(mag1);
		mag3 = getMagnitude(11);
		mag4 = getMagnitude(mag3);

		solute = getRandomMolecule();
		molarMass = getMolarMassText(solute);
		formulaName = getCorrectChemicalFormula(solute);
		// the below text would have generated a random unit type.
		//thisUnitType = getRandomUnit();

		conctype = getRandomConcentrationTypeSolution();
		if (conctype != "M") {
			mag1 = 0;
			mag2 = 0;
		}

		units1 = getUnitSolution(mag1) + conctype;
		units2 = getUnitSolution(mag2) + conctype;
		units3 = getUnitSolution(mag3) + "L";
		units4 = getUnitSolution(mag4) + "g";

		if (conctype == ":") {
			//number=1;
		}
		//units1 = number+"grams";
		//units2 = numbertwo+"Liters";
		//		var units3 = getMolaraMassText(getRandomMolecule());


		// $('#num1').text(toOurExponential(sigFigs(finalNum, 3)));
		// $('#den1').text(toOurExponential(sigFigs(finalNumtwo, 3)));
		//document.getElementById("num1").innerHTML = "What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)";

questionType = Math.floor(Math.random()*1)+1;
//alert (questionType);
switch (questionType) {
	case 1:
		
		if (score > 19) {
			document.getElementById("num1").innerHTML = "calculate the mass in " + units4 + " required to make "+numbertwo+""+units3+" of a "+numberThree + ""+ units2 + " solution. Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";
		
			} else {
			document.getElementById("num1").innerHTML = "Calculate the mass in " + units4 + " required to make "+numbertwo+""+units3+" of a "+numberThree + ""+ units2 + " solution. Please round your final answer to "+numberOfSigFigsToCount+" "+roundTypeName+" below.";
		
			}
			break;
	case 2:
	//	document.getElementById("num1").innerHTML = "Calculate the volume in " + units4+ " of "+ number + units1 + " "+ formulaName+ " required to make " + numbertwo + " "+units3+" of a "+ numberThree + " " +units2+" solution of "+ formulaName +" in water?";
	break;
	case 3:
		//document.getElementById("num1").innerHTML = "Calculate the volume in " + units4+ " of a "+ number + units1 + " " + formulaName+ " stock solution required to make "+ numbertwo + " " + units3+" with a final concentration of " + formulaName + " at "+ numberThree + " " + units2 + ".";
	break;
	// case 4:
		// //document.getElementById("num1").innerHTML = "We have a "+ cOne + units1 + " stock solution of "+ formulaName+ " How much will we need of it to make " + vTwo + " of "+ cTwo + " " + formulaName " solution?"
		// break;
}
		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");

		// $('body :not(script)').contents().filter(function() {
		// return this.nodeType === 3;
		// }).replaceWith(function() {
		// return this.nodeValue.replace(/[0123456789]/g, '<sub>$&</sub>');
		// });

		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " +toOurExponential(sigFigs(coeff1, 3))+ units1 " of "+ formulaName + " in " +  toOurExponential(sigFigs(coeff1, 3)) + units2 " of //water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");


		setupAnswersDilution(mag1, mag2, mag3, mag4, number, numbertwo, numberThree, conctype, formulaName);
	}
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
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, parseInt(score));
			$('#score').text("Score = " + score);
			$('#scoremessage').text(specialMessage(score));
			$(this).removeClass("highlighted");
			resetQuestion();
			
			// $('#bwordb').text(35);
		} else if ($(this).hasClass('wrongAnswer')) { //children('p').contains(answer)){// p.text("hello"));
			// $('#bwordb').text(answer);
			$(this).addClass('wrong');
			$(this).removeClass('wrongAnswer');
			score = score - 2;
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
		// 	}
	});
	
	$('#givenAnswer').keypress(function (e) {
		if (e.keyCode == 13){

			//console.error("here");
			$('#submitButton').click();
		}
	});
	$('#submitButton').click(function () {
		
			//console.error("here");
		if (roundType=="decimal"){
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
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, parseInt(score));
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				document.getElementById("givenAnswer").value = "";
			} else {
				let reason=" huh ";
				
				if (((Number(givenAnswer+0)/Number(thisAnswer+0))>1.5) || ((Number(givenAnswer+0)/Number(thisAnswer+0))<0.75)){
				reason = "It seems like the reason was because of your math, not your rounding.";
				}
				else{
				reason = "It seems like the reason was because of your rounding, not your math.";
				
				}
				alert("You wrote: " + givenAnswer + ". The correct answer was " + thisAnswer+". \r\n \r\n"+reason);
				score = score - 2;
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				//anotherQuestion();
				document.getElementById("givenAnswer").value = "";
			}
			resetQuestion();
			
		}
		}
		else if (roundType=="sigFigs"){
			givenAnswer = document.getElementById("givenAnswer").value;

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
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, parseInt(score));
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				document.getElementById("givenAnswer").value = "";
			} else {
				let reason=" huh ";
				
				if (((Number(givenAnswer+0)/Number(thisAnswer+0))>1.5) || ((Number(givenAnswer+0)/Number(thisAnswer+0))<0.75)){
				reason = "It seems like the reason was because of your math, not your rounding.";
				}
				else{
				reason = "It seems like the reason was because of your rounding, not your math.";
				
				}
				alert("You wrote: " + givenAnswer + ". The correct answer was " + thisAnswer+". \r\n \r\n"+reason);
				score = score - 2;
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				//anotherQuestion();
				document.getElementById("givenAnswer").value = "";
			}
			resetQuestion();
				
		}
		}

	});
		var thisAppNum = 52;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
});