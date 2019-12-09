$(document).ready(function () {
		var whatnameis = prompt ("What is your name?");
	document.getElementById("nameis").innerHTML = whatnameis;
		n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML ="</sub>"+ m + " / " + d + " / " + y;		

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
	var elements = [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 35, 36];

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

	function sigFigs(n, sig) {
		if (n > Math.pow(10, sig)) {
			return toOurExponential(n);
		} else {
			n = Math.abs(n);
			var mult = Math.pow(10,
					sig - Math.floor(Math.log(n) / Math.LN10) - 1);
			//alert ("n is " +n + " sig is " + sig);

			return Math.round(n * mult) / mult;
		}
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
	var setupAnswers = function (questionType, atomicNumber) {
		var coinFlip = Math.floor(Math.random() * 0) + 1;
		if ((questionType == 2)) {
			answer = getValence(getGroupNumber(atomicNumber));
			wrongAnswer1 = getValence(getGroupNumber(getRandomAtomicNumber()));
			wrongAnswer2 = getValence(getGroupNumber(getRandomAtomicNumber()));
			wrongAnswer3 = getValence(getGroupNumber(getRandomAtomicNumber()));
		} else if (questionType == 1) {
			answer = getGroupNumber(atomicNumber);
			wrongAnswer1 = getGroupNumber(getRandomAtomicNumber());
			wrongAnswer2 = getGroupNumber(getRandomAtomicNumber());
			wrongAnswer3 = getGroupNumber(getRandomAtomicNumber());
		} else if (questionType == 5) {
			answer = getPeriodNumber(atomicNumber);
			// wrongAnswer1 = getPeriodNumber(getRandomAtomicNumber());
			// wrongAnswer2 = getPeriodNumber(getRandomAtomicNumber());
			// wrongAnswer3 = getPeriodNumber(getRandomAtomicNumber());
			wrongAnswer1 = answer + 1;
			if (wrongAnswer1 > 4) {
				wrongAnswer1 = wrongAnswer1 - 4;
			}
			wrongAnswer2 = answer + 2;
			if (wrongAnswer2 > 4) {
				wrongAnswer2 = wrongAnswer2 - 4;
			}
			wrongAnswer3 = answer + 3;
			if (wrongAnswer3 > 4) {
				wrongAnswer3 = wrongAnswer3 - 4;
			}
		} else if (questionType == 3) {
			var number = getGroupNumber(atomicNumber);
			// wrongAnswer1 = getPeriodNumber(getRandomAtomicNumber());
			// wrongAnswer2 = getPeriodNumber(getRandomAtomicNumber());
			// wrongAnswer3 = getPeriodNumber(getRandomAtomicNumber());
			// var wronganswer1 = answer+ 1;
			// if (wronganswer1 > 4) {
			// wronganswer1 = wronganswer1 - 4;
			// }
			// var wronganswer2 = answer + 2;
			// if (wronganswer2 > 4) {
			// wronganswer2 = wronganswer2 - 4;
			// }
			// var wronganswer3 = answer + 3;
			// if (wronganswer3 > 4) {
			// wronganswer3 = wronganswer3 - 4;
			// }

			answer = getAtomicSymbol(atomicNumber) + getCharge(getGroupNumber(atomicNumber));
			wrongAnswer1 = getAtomicSymbol(atomicNumber) + getCharge(getGroupNumber(getRandomAtomicNumber()));
			wrongAnswer2 = getAtomicSymbol(atomicNumber) + getCharge(getGroupNumber(getRandomAtomicNumber()));
			wrongAnswer3 = getAtomicSymbol(atomicNumber) + getCharge(getGroupNumber(getRandomAtomicNumber()));
		} else if (questionType == 4) {
			var nums = elements.length;
			var answerPosition = elements.indexOf(atomicNumber);
			var wrongElement1 = answerPosition+3;
			if (wrongElement1 > nums) {
				wrongElement1 = wrongElement1 - nums;
			}
			var wrongElement2 = answerPosition-2;
			if (wrongElement1 < 0) {
				wrongElement1 = wrongElement1 + nums;
			}
			var wrongElement3 = answerPosition+1
			if (wrongElement1 > nums) {
				wrongElement1 = wrongElement1 - nums;
			}			
			answer = getLostOrGained(getGroupNumber(atomicNumber));
			wrongAnswer1 = getLostOrGained(getGroupNumber(elements[wrongElement1]));
			wrongAnswer2 = getLostOrGained(getGroupNumber(elements[wrongElement2]));
			wrongAnswer3 = getLostOrGained(getGroupNumber(elements[wrongElement3]));
			// alert (answer + wrongAnswer1 + wrongAnswer2+wrongAnswer3);
		}

		// var moles = n1*Math.pow(10, m1)/mW;
		// var molar = moles/(n2*Math.pow(10,m2));
		// var answerString=Number(sigFigs(Number(molar),3))+"";
		// answer=answerString+" M " + fN + " solution";
		// wrongAnswer1=Number(sigFigs(Number(moles),3))+" M " + fN + " solution";
		// wrongAnswer2=Number(sigFigs(Number(1/moles),3))+" M " + fN +" solution";
		// wrongAnswer3=Number(sigFigs(Number(1/molar),3))+" M " + fN + " solution";

		var answers = [];
		answers[0] = answer;
		answers[1] = wrongAnswer1;
		answers[2] = wrongAnswer2;
		answers[3] = wrongAnswer3;

		for (i = 0; i < answers.length; i++) {

			for (j = 0; j < answers.length; j++) {
				if ((j != i) && (answers[i] === answers[j])) {
					resetQuestionAgain(questionType); //	setupAnswers(m1, m2, m3, m4, n1, n2, n3, ct, fN);
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

	};
	// $('#num2').text($('#num1').val());


	var getMagnitude = function (othermag) {
		var thismag = othermag;
		while (thismag == othermag) {
			var rannum = (Math.floor(Math.random() * 8));

			if (rannum == 0) {
				thismag = -9;
			} else if (rannum == 1) {
				thismag = -6;
			} else if (rannum == 2) {
				thismag = -3;
			} else if (rannum == 3) {
				thismag = -2;
			} else if (rannum == 4) {
				thismag = -1;
			} else if (rannum == 5) {
				thismag = 0;
			} else if (rannum == 6) {
				thismag = 3;
			}
			// else if (rannum==7){
			// 	thismag=6;
			// }
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

	var getRandomTimeUnit = function () {
		var unitName = "";
		randomunitnum = (Math.floor(Math.random() * 5));
		if (randomunitnum == 0) {
			unitName = "seconds";
		} else if (randomunitnum == 1) {
			unitName = "mins";
		} else if (randomunitnum == 2) {
			unitName = "hours";
		} else if (randomunitnum == 3) {
			unitName = "days";
		} else if (randomunitnum == 4) {
			unitName = "years";
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

	var getAtomicName = function (atomicN) {
		var atomicName = "";
		switch (atomicN) {
		case 2:
			atomicName = "Helium";
			break;
		case 3:
			atomicName = "Lithium";
			break;
		case 4:
			atomicName = "Beryllium";
			break;
		case 5:
			atomicName = "Boron";
			break;
		case 7:
			atomicName = "Nitrogen";
			break;
		case 8:
			atomicName = "Oxygen";
			break;
		case 9:
			atomicName = "Fluorine";
			break;
		case 10:
			atomicName = "Neon";
			break;
		case 11:
			atomicName = "Sodium";
			break;
		case 12:
			atomicName = "Magnesium";
			break;
		case 13:
			atomicName = "Aluminum";
			break;
		case 15:
			atomicName = "Phosphorus";
			break;
		case 16:
			atomicName = "Sulfur";
			break;
		case 17:
			atomicName = "Chlorine";
			break;
		case 18:
			atomicName = "Argon";
			break;
		case 19:
			atomicName = "Potassium";
			break;
		case 20:
			atomicName = "Calcium";
			break;
		case 35:
			atomicName = "Bromine";
			break;
		case 36:
			atomicName = "Krypton";
			break;
		}
		return atomicName;
	}
	var getAtomicSymbol = function (atomicN) {
		var atomicName = "";
		switch (atomicN) {
		case 2:
			atomicName = "He";
			break;
		case 3:
			atomicName = "Li";
			break;
		case 4:
			atomicName = "Be";
			break;
		case 5:
			atomicName = "B";
			break;
		case 7:
			atomicName = "N";
			break;
		case 8:
			atomicName = "O";
			break;
		case 9:
			atomicName = "F";
			break;
		case 10:
			atomicName = "Ne";
			break;
		case 11:
			atomicName = "Na";
			break;
		case 12:
			atomicName = "Mg";
			break;
		case 13:
			atomicName = "Al";
			break;
		case 15:
			atomicName = "P";
			break;
		case 16:
			atomicName = "S";
			break;
		case 17:
			atomicName = "Cl";
			break;
		case 18:
			atomicName = "Ar";
			break;
		case 19:
			atomicName = "K";
			break;
		case 20:
			atomicName = "Ca";
			break;
		case 35:
			atomicName = "Br";
			break;
		case 36:
			atomicName = "Kr";
			break;
		}
		return atomicName;
	}
	var getGroupNumber = function (atomicN) {
		var atomicName = "";
		switch (atomicN) {
		case 2:
			atomicName = 18;
			break;
		case 3:
			atomicName = 1;
			break;
		case 4:
			atomicName = 2;
			break;
		case 5:
			atomicName = 13;
			break;
		case 7:
			atomicName = 15;
			break;
		case 8:
			atomicName = 16;
			break;
		case 9:
			atomicName = 17;
			break;
		case 10:
			atomicName = 18;
			break;
		case 11:
			atomicName = 1;
			break;
		case 12:
			atomicName = 2;
			break;
		case 13:
			atomicName = 13;
			break;
		case 15:
			atomicName = 15;
			break;
		case 16:
			atomicName = 16;
			break;
		case 17:
			atomicName = 17;
			break;
		case 18:
			atomicName = 18;
			break;
		case 19:
			atomicName = 1;
			break;
		case 20:
			atomicName = 2;
			break;
		case 35:
			atomicName = 17;
			break;
		case 36:
			atomicName = 18;
			break;
		}
		return atomicName;
	}

	var getPeriodNumber = function (atomicN) {
		var atomicName = "";
		switch (atomicN) {
		case 2:
			atomicName = 1;
			break;
		case 3:
			atomicName = 2;
			break;
		case 4:
			atomicName = 2;
			break;
		case 5:
			atomicName = 2;
			break;
		case 7:
			atomicName = 2;
			break;
		case 8:
			atomicName = 2;
			break;
		case 9:
			atomicName = 2;
			break;
		case 10:
			atomicName = 2;
			break;
		case 11:
			atomicName = 3;
			break;
		case 12:
			atomicName = 3;
			break;
		case 13:
			atomicName = 3;
			break;
		case 15:
			atomicName = 3;
			break;
		case 16:
			atomicName = 3;
			break;
		case 17:
			atomicName = 3;
			break;
		case 18:
			atomicName = 3;
			break;
		case 19:
			atomicName = 4;
			break;
		case 20:
			atomicName = 4;
			break;
		case 35:
			atomicName = 4;
			break;
		case 36:
			atomicName = 4;
			break;
		}
		return atomicName;
	};

	var getValence = function (groupN) {
		var atomicName = 0;
		switch (groupN) {
		case 1:
			atomicName = 1;
			break;
		case 2:
			atomicName = 2;
			break;
		case 13:
			atomicName = 3;
			break;
		case 14:
			atomicName = 4;
			break;
		case 15:
			atomicName = 5;
			break;
		case 16:
			atomicName = 6;
			break;
		case 17:
			atomicName = 7;
			break;
		case 18:
			atomicName = 8;
			break;
		}
		return atomicName;
	};

	var getCharge = function (groupN) {
		var atomicName = "";
		switch (groupN) {
		case 1:
			atomicName = ("+").sup();
			break;
		case 2:
			atomicName = ("2+").sup();
			break;
		case 13:
			atomicName = ("3+").sup();
			break;
		case 15:
			atomicName = ("3-").sup();
			break;
		case 16:
			atomicName = ("2-").sup();
			break;
		case 17:
			atomicName = ("-").sup();
			break;
		case 18:
			atomicName = "";
			break;
		}
		return atomicName;
	}

	var getLostOrGained = function (groupN) {
		var atomicName = "";
		switch (groupN) {
		case 1:
			atomicName = "Lose 1 e" + ("-").sup();
			break;
		case 2:
			atomicName = "Lose 2 e" + ("-").sup() + "'s";
			break;
		case 13:
			atomicName = "Lose 3 e" + ("-").sup() + "'s";
			break;
		case 15:
			atomicName = "Gain 3 e" + ("-").sup() + "'s";
			break;
		case 16:
			atomicName = "Gain 2 e" + ("-").sup() + "'s";
			break;
		case 17:
			atomicName = "Gain 1 e" + ("-").sup();
			break;
		case 18:
			atomicName = "no change";
			break;
		}
		return atomicName;
	}

	var getRandomAtomicNumber = function () {
		return elements[(Math.floor(Math.random() * elements.length))];
	}

	var resetQuestion = function () {
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		var number = (Math.floor(Math.random() * elements.length));
		// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
		var numbertwo = (Math.floor(Math.random() * 200));
		var numberThree = (Math.floor(Math.random() * 7)) + 2;
		// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');

		//HALFLIFE
		//numberThree is going to be the #of half-lives gone by
		//numbertwo is going to be the starting mass.
		//number is going to be the half-life
		// if (numberThree>number){
		// var placeHolderNumber=number;
		// number=numberThree;
		// numberThree=placeHolderNumber;
		// }

		var halfLifeTime = number;
		var startingMass = numbertwo;
		var numHalfLives = numberThree;
		var endingMass = startingMass * Math.pow(.5, numHalfLives)
			var totalTime = numHalfLives * halfLifeTime;
		var demRemaining = Math.pow(2, numHalfLives);
		var fractionRemaining = "1/" + demRemaining;
		var atomicNumber = elements[number];
		var timeUnit = getRandomTimeUnit();

		//units1 = number+"grams";
		//units2 = numbertwo+"Liters";
		//		var units3 = getMolaraMassText(getRandomMolecule());


		// $('#num1').text(toOurExponential(sigFigs(finalNum, 3)));
		// $('#den1').text(toOurExponential(sigFigs(finalNumtwo, 3)));
		//document.getElementById("num1").innerHTML = "What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)";
		var questionType = Math.floor(Math.random() * 5) + 1;

		//alert (questionType);
		switch (questionType) {
		case 1:
			document.getElementById("num1").innerHTML = "What group is " + getAtomicName(atomicNumber) + " in?";
			break;
		case 2:
			document.getElementById("num1").innerHTML = "How many valence electrons does " + getAtomicName(atomicNumber) + " have?";
			break;
		case 3:
			document.getElementById("num1").innerHTML = "What charge does " + getAtomicName(atomicNumber) + " have when it is stable?";
			break;
		case 4:
			document.getElementById("num1").innerHTML = "How many electrons does " + getAtomicName(atomicNumber) + " gain or lose to become stable?";
			break;
		case 5:
			document.getElementById("num1").innerHTML = "What period is " + getAtomicName(atomicNumber) + " in?";
			break;
		}

		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");

		// $('body :not(script)').contents().filter(function() {
		// return this.nodeType === 3;
		// }).replaceWith(function() {
		// return this.nodeValue.replace(/[0123456789]/g, '<sub>$&</sub>');
		// });

		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " +toOurExponential(sigFigs(coeff1, 3))+ units1 " of "+ formulaName + " in " +  toOurExponential(sigFigs(coeff1, 3)) + units2 " of //water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");


		setupAnswers(questionType, atomicNumber);
	};
var resetQuestionAgain = function (questionType) {
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		var number = (Math.floor(Math.random() * elements.length));
		// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
		var numbertwo = (Math.floor(Math.random() * 200));
		var numberThree = (Math.floor(Math.random() * 7)) + 2;
		// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');

		//HALFLIFE
		//numberThree is going to be the #of half-lives gone by
		//numbertwo is going to be the starting mass.
		//number is going to be the half-life
		// if (numberThree>number){
		// var placeHolderNumber=number;
		// number=numberThree;
		// numberThree=placeHolderNumber;
		// }

		var halfLifeTime = number;
		var startingMass = numbertwo;
		var numHalfLives = numberThree;
		var endingMass = startingMass * Math.pow(.5, numHalfLives)
			var totalTime = numHalfLives * halfLifeTime;
		var demRemaining = Math.pow(2, numHalfLives);
		var fractionRemaining = "1/" + demRemaining;
		var atomicNumber = elements[number];
		var timeUnit = getRandomTimeUnit();

		//units1 = number+"grams";
		//units2 = numbertwo+"Liters";
		//		var units3 = getMolaraMassText(getRandomMolecule());


		// $('#num1').text(toOurExponential(sigFigs(finalNum, 3)));
		// $('#den1').text(toOurExponential(sigFigs(finalNumtwo, 3)));
		//document.getElementById("num1").innerHTML = "What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)";
		//var questionType = Math.floor(Math.random() * 5) + 1;

		//alert (questionType);
		switch (questionType) {
		case 1:
			document.getElementById("num1").innerHTML = "What group is " + getAtomicName(atomicNumber) + " in?";
			break;
		case 2:
			document.getElementById("num1").innerHTML = "How many valence electrons does " + getAtomicName(atomicNumber) + " have?";
			break;
		case 3:
			document.getElementById("num1").innerHTML = "What charge does " + getAtomicName(atomicNumber) + " have when it is stable?";
			break;
		case 4:
			document.getElementById("num1").innerHTML = "How many electrons does " + getAtomicName(atomicNumber) + " gain or lose to become stable?";
			break;
		case 5:
			document.getElementById("num1").innerHTML = "What period is " + getAtomicName(atomicNumber) + " in?";
			break;
		}

		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");

		// $('body :not(script)').contents().filter(function() {
		// return this.nodeType === 3;
		// }).replaceWith(function() {
		// return this.nodeValue.replace(/[0123456789]/g, '<sub>$&</sub>');
		// });

		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " +toOurExponential(sigFigs(coeff1, 3))+ units1 " of "+ formulaName + " in " +  toOurExponential(sigFigs(coeff1, 3)) + units2 " of //water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");


		setupAnswers(questionType, atomicNumber);
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
			resetQuestion();
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
		// 	}
	});
});
