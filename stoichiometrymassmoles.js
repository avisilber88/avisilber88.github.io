$(document).ready(function () {
//beginning of the things to replace
	var whatnameis = ""// prompt ("What is your name?");


var endSpace="";

	var askagain = function (whatnameis){
	whatnameis = prompt ("What is your full name (first and last)?");
	whatnameis=whatnameis.replace(/\s+/g, ' ');
	// console.error(whatnameis);
	// console.log(whatnameis.slice(0, 1));
	// alert("hello"+whatnameis);
	if (whatnameis.slice(0, 1)==' '){
	whatnameis=whatnameis.slice(1);
	}
	endSpace = whatnameis.slice(-1);
	if (whatnameis.length<2){
		askagain();
	}
	else if (!(/\s/.test(whatnameis))) {
    // It has any kind of whitespace
		askagain();
	}
	else if(endSpace==" ") {
        console.log("ends with space");
		askagain();
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
    firebase.auth().signInAnonymously().then(function (result) {
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

	var molarMassArray=[];
	var coefficientArray=[];
	var reactantAmount=0;
	var mWReactantOne = 0;
	var mWReactantTwo = 0;
	var mWProductOne = 0;
	var mWProductTwo = 0;
	var equationArray = [];
	var productChoice = 0;
	var reactantChoice = 0;
	var formulaOne = "";
	var formulaTwo = "";
	var formulaThree = "";
	var formulaFour = "";
	var setElementsToDD = 0;
	var startedNumber = 0;
	var setElementsToSD = 0;
	var reactionArray = [];
	var singleAnion;
	n = new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	document.getElementById("date").innerHTML = "</sub>" + m + " / " + d + " / " + y;
	var proposedAnswerStatement;
	var reactantOneFormula = "";
	var reactantTwoFormula = "";
	var productOneFormulaSelect = "";
	var productTwoFormulaSelect = "";
	var organicCompoundName = "";
	var times = 0;
	var numer1;
	var numer2;
	var denom1;
	var denom2;
	var cationCharge;
	var anionCharge;
	var cationTwoCharge;
	var anionTwoCharge;
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
	var wrongCompound1;
	var wrongCompound2;
	var wrongCompound3;
	var thisAnswer = "";
	var catCoefficientAnswer = "";
	var anCoefficientAnswer = "";
	var catChargeAnswer = "";
	var anChargeAnswer = "";
	var catCoefficientAnswer = "";
	var anCoefficientAnswer = "";
	var organicCompoundCoefficientAnswer = "";
	var oxygenCoefficientAnswer = "";
	var cationArray;
	var anionArray;
	var cationTwoArray;
	var anionTwoArray;
	var balancedFormulaArray;
	var balancedReactantOneFormulaArray;
	var balancedReactantTwoFormulaArray;
	var cNo = 0;
	var oNo = 0;
	var hNo = 0;
	var questionType = "singleDisplacement";
	function shuffle(array) {
		var currentIndex = array.length,
		temporaryValue,
		randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
	var generateIons = function (cationArray, anionArray) {

		$('#cations').empty();
		$('#anions').empty();
		var completeArray = shuffle(cationArray.concat(anionArray));
		for (index = 0; index < completeArray.length; index++) {
			addCationOption(completeArray[index]);
			addAnionOption(completeArray[index]);
		}
	}

	var addCationOption = function (cationOption) {
		var sel = document.getElementById("cations");
		var opt = document.createElement('option');
		opt.innerHTML = cationOption;
		//		opt.appendChild(document.createTextNode((cationOption)));
		opt.value = (cationOption);
		sel.appendChild(opt);
	}
	var addAnionOption = function (anionOption) {
		var sel = document.getElementById("anions");
		var opt = document.createElement('option');
		opt.innerHTML = anionOption;
		//			opt.appendChild(document.createTextNode((anionOption)));
		opt.value = (anionOption);
		sel.appendChild(opt);
	}
	$(window).resize(function () {
		//$('.ansbox').css('width',window.innerWidth/4-2);
		//$('.ansbox').css('height',window.innerWidth/4-2);

		//$('#blocka').css('left',$('blocka').width*0);
		//$('#blockb').css('position','absolute');
		//$('#blockb').css('left',$('blockb').width*1);


		//$('#blockc').css('left',$('blocka').width*2);
		//$('#blockd').css('left',$('blocka').width*3);

		//$('.thequestion').css('font-size', window.innerWidth/100);
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

function sigFigs(n, sig) {
n=Math.abs(n);
    var mult = Math.pow(10,
        sig - Math.floor(Math.log(n) / Math.LN10) - 1);
    return Math.round(n * mult) / mult;
}

var toOurExponential=function(n1){ //returns a string including the *10^ exoitebct


	var answerString=n1.toExponential()+"";
//	answerString=round(answerString,3)+"";
	var eSpot=answerString.indexOf("e");
	var exponency=answerString.substring(eSpot+1, answerString.length);
	if (exponency.substring(0,1)==="+"){
		exponency=exponency.substring(1,exponency.length);
	}

	var nakedAnswer=answerString.substring(0,eSpot);
	var answerStringFinal=answerString.substring(0,eSpot)+"*10^"+exponency;
	return answerStringFinal;
};
	var setupAnswers = function (balancedFormulaArray, cationArray, anionArray) { // the array coming in has [balancedFormula, catNum, anNum];

		// var moles = n1*Math.pow(10, m1)/mW;
		// var molar = moles/(n2*Math.pow(10,m2));
		// var answerString=Number(sigFigs(Number(molar),3))+"";

		var molarMass = cationArray[1] * balancedFormulaArray[1] + anionArray[1] * balancedFormulaArray[2];
		var w1molarMass = cationArray[1] * balancedFormulaArray[2] + anionArray[1] * balancedFormulaArray[2] + 1;
		var w2molarMass = cationArray[1] * balancedFormulaArray[1] + anionArray[1] * balancedFormulaArray[1] + 2;
		var w3molarMass = cationArray[1] * balancedFormulaArray[2] + anionArray[1] * balancedFormulaArray[1] + 3;

		// balancedFormulaArray
		//	$('#num1').text("What is the molar mass of " + balancedFormulaArray[0]+"?");

		// $('body :not(script)').contents().filter(function() {
		// return this.nodeType === 3;
		// }).replaceWith(function() {
		// return this.nodeValue.replace(/[0123456789.]/g, '<sub>$&</sub>');
		// });

		answer = balancedFormulaArray[0] + ""; //Number(sigFigs(Number(molarMass),5))+" g/mol ";
		// wrongAnswer1 = wrongCompound1[0] + ""; //Number(sigFigs(Number(w3molarMass),5))+" g/mol ";
		// wrongAnswer2 = wrongCompound2[0] + ""; //Number(sigFigs(Number(w1molarMass),5))+" g/mol ";
		// wrongAnswer3 = wrongCompound3[0] + ""; //Number(sigFigs(Number(w2molarMass),5))+" g/mol ";
		//$('#scoremessage').text(n1 +" " + n2 + " " +Number(n1)/Number(n2));
		// var answerString=Number(sigFigs(Number(n1/n2),3)).toExponential()+"";

		// var eSpot=answerString.indexOf("e");
		// var exponency=answerString.substring(eSpot+1, answerString.length);


		// if (exponency.substring(0,1)==="+"){
		// exponency=exponency.substring(1,exponency.length);
		// }
		// var nakedAnswer=answerString.substring(0,eSpot);
		// var answerStringFinal=answerString.substring(0,eSpot)+"*10^"+exponency;


		// answer=toOurExponential(sigFigs((n1/n2),3))+" "+thisunits;
		// wrongAnswer1=nakedAnswer+"*10^"+(Math.floor(Math.random()*20)-10)+" "+thisunits;
		// wrongAnswer2=nakedAnswer+"*10^"+(Math.floor(Math.random()*20)-10)+" "+thisunits;
		// wrongAnswer3=nakedAnswer+"*10^"+(Math.floor(Math.random()*20)-10)+" "+thisunits;


		// var eSpot=answerString.indexOf("e");
		// var exponency=answerString.substring(eSpot+1, answerString.length);

		// if (exponency.substring(0,1)==="+"){
		// exponency=exponency.substring(1,exponency.length);
		// }
		// var nakedAnswer=answerString.substring(0,eSpot);
		// var answerStringFinal=answerString.substring(0,eSpot)+"*10^"+exponency;


		// answer="a";
		// wrongAnswer1="b";
		// wrongAnswer2="c";
		// wrongAnswer3="d";

		// var moles = n1*Math.pow(10, m1)/mW;
		// var molar = moles/(n2*Math.pow(10,m2));
		// var answerString=Number(sigFigs(Number(molar),3))+"";
		// answer=answerString+" M ";
		// wrongAnswer1=Number(sigFigs(Number(moles),3))+" M ";
		// wrongAnswer2=Number(sigFigs(Number(1/moles),3))+" M ";
		// wrongAnswer3=Number(sigFigs(Number(1/molar),3))+" M ";


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
					resetQuestion();
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
		$('body :not(script)').contents().filter(function () {
			return this.nodeType === 3;
		}).replaceWith(function () {
			return this.nodeValue.replace(/[0123456789.]/g, '<sub>$&</sub>');
		});
		//check above
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

	var getCorrectChemicalFormula = function (moleculeName) {
		var newName = "";
		//randomunitnum=(Math.floor(Math.random()*6));
		if (moleculeName == "CaCl2") {
			newName = "CaCl" + ("2");
		} else if (moleculeName == "NaCl") {
			newName = "CaCl" + ("2");
		} else if (moleculeName == "C6H12O6") {
			newName = "C" + ("6") + "H" + ("12") + "O" + ("6");
		} else if (moleculeName == "(NH4)3N") {
			newName = "(NH" + ("4") + ")" + ("3") + "N";
		} else if (moleculeName == "H2SO4") {
			newName = "H" + ("2") + "SO" + ("4");
		} else if (moleculeName == "KBr") {
			newName = "KBr";
		}
		return newName;

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

	var getRandomCation = function (charge) {
		var cation = ["", 0, false, ""]; //where "" is cation and "" is molar mass;

		if (charge == 1) {
			randomunitnum = (Math.floor(Math.random() * 6));
			if (randomunitnum == 0) {
				cation = ["Na", 22.99, false, "Sodium", ["Na"]];
			} else if (randomunitnum == 1) {
				cation = ["K", 39.10, false, "Potassium", ["K"]];
			} else if (randomunitnum == 2) {
				cation = ["Li", 6.94, false, "Lithium", ["Li"]];
			} else if (randomunitnum == 3) {
				cation = ["Cu", 63.546, false, "Copper (I)", ["Cu"]];
			} else if (randomunitnum == 4) {
				cation = ["NH&#8324", 18.04, true, "Ammonium", ["NH&#8324", "N", "H"]];
			} else if (randomunitnum == 5) {
				cation = ["Ag", 107.87, false, "Silver", ["Ag"]];
			} else if (randomunitnum == 5) {
				cation = ["Au", 196.97, false, "Gold (I)", ["Au"]];
			}
		} else if (charge == 2) {
			randomunitnum = (Math.floor(Math.random() * 11));
			if (randomunitnum == 0) {
				cation = ["Ca", 40.08, false, "Calcium", ["Ca"]];
			} else if (randomunitnum == 1) {
				cation = ["Ba", 137.33, false, "Barium", ["Ba"]];
			} else if (randomunitnum == 2) {
				cation = ["Mg", 24.31, false, "Magnesium", ["Mg"]];
			} else if (randomunitnum == 3) {
				cation = ["Fe", 55.85, false, "Iron (II)", ["Fe"]];
			} else if (randomunitnum == 4) {
				cation = ["Be", 9.01, false, "Beryllium", ["Be"]];
			} else if (randomunitnum == 5) {
				cation = ["Pb", 207.2, false, "Lead (II)", ["Pb"]];
			} else if (randomunitnum == 6) {
				cation = ["Sn", 118.71, false, "Tin (II)", ["Sn"]];
			} else if (randomunitnum == 7) {
				cation = ["Zn", 65.38, false, "Zinc", ["Zn"]];
			} else if (randomunitnum == 8) {
				cation = ["Co", 58.93, false, "Cobalt (II)", ["Co"]];
			} else if (randomunitnum == 9) {
				cation = ["Cu", 63.55, false, "Copper (II)", ["Cu"]];
			} else if (randomunitnum == 10) {
				cation = ["Au", 196.97, false, "Gold (II)", ["Au"]];
			}
		} else if (charge == 3) {
			randomunitnum = (Math.floor(Math.random() * 3));
			if (randomunitnum == 0) {
				cation = ["Al", 26.98, false, "Aluminum", ["Al"]];
			} else if (randomunitnum == 1) {
				cation = ["B", 10.81, false, "Boron", ["B"]];
			} else if (randomunitnum == 2) {
				cation = ["Fe", 55.85, false, "Iron (III)", ["Fe"]];
			}
		} else if (charge == 4) {
			randomunitnum = (Math.floor(Math.random() * 2));
			if (randomunitnum == 0) {
				cation = ["Pb", 207.2, false, "Lead (IV)", ["Pb"]];
			} else if (randomunitnum == 1) {
				cation = ["Sn", 118.71, false, "Tin (IV)", ["Sn"]];
			}
		}
		return cation;
	};
	var getRandomAnionGas = function (charge) { //Avi says we may have to return here 4/11/2020 if the numbers on gases don't work
		var anion = ["", 0, false]; //where "" is anion and "" is molar mass;
		if (charge == 1) {
			randomunitnum = (Math.floor(Math.random() * 4));
			if (randomunitnum == 0) {
				anion = ["F", 19.00, false, "Fluoride", ["F"]];
			} else if (randomunitnum == 1) {
				anion = ["Cl", 35.45, false, "Chloride", ["Cl"]];
			} else if (randomunitnum == 2) {
				anion = ["Br", 79.90, false, "Bromide", ["Br"]];
			} else if (randomunitnum == 3) {
				anion = ["I", 126.90, false, "Iodide", ["I"]];
			}
		} else if (charge == 2) {
			randomunitnum = (Math.floor(Math.random() * 1));
			if (randomunitnum == 0) {
				anion = ["O", 16.00, false, "Oxide", ["O"]];
			}
		} else if (charge == 3) {
			randomunitnum = (Math.floor(Math.random() * 1));
			if (randomunitnum == 0) {
				anion = ["N", 14.01, false, "Nitride", ["N"]];
			}
		}
		return anion;
	};
	var getRandomAnion = function (charge) {
		var anion = ["", 0, false]; //where "" is anion and "" is molar mass;

		if (charge == 1) {
			randomunitnum = (Math.floor(Math.random() * 12));
			if (randomunitnum == 0) {
				anion = ["F", 19.00, false, "Fluoride", ["F"]];
			} else if (randomunitnum == 1) {
				anion = ["Cl", 35.45, false, "Chloride", ["Cl"]];
			} else if (randomunitnum == 2) {
				anion = ["NO&#8323", 62.01, true, "Nitrate", ["NO&#8323", "N", "O"]];
			} else if (randomunitnum == 3) {
				anion = ["NO&#8322", 46.01, true, "Nitrite", ["NO&#8322", "N", "O"]];
			} else if (randomunitnum == 4) {
				anion = ["Br", 79.90, false, "Bromide", ["Br"]];
			} else if (randomunitnum == 5) {
				anion = ["CN", 26.02, true, "Cyanide", ["CN", "C", "N"]];
			} else if (randomunitnum == 6) {
				anion = ["ClO", 51.45, true, "Hypochlorite", ["ClO", "Cl", "O"]];
			} else if (randomunitnum == 7) {
				anion = ["OH", 18.05, true, "Hydroxide", ["OH", "O", "H"]];
			} else if (randomunitnum == 8) {
				anion = ["ClO&#8324", 99.45, true, "Perchlorate", ["ClO&#8324", "Cl", "O"]];
			} else if (randomunitnum == 9) {
				anion = ["MnO&#8324", 118.94, true, "Permanganate", ["MnO&#8324", "Mn", "O"]];
			} else if (randomunitnum == 10) {
				anion = ["ClO&#8322", 67.45, true, "Chlorite", ["ClO&#8322", "Cl", "O"]];
			} else if (randomunitnum == 11) {
				anion = ["ClO&#8323", 83.45, true, "Chlorate", ["ClO&#8323", "Cl", "O"]];
			}
		} else if (charge == 2) {
			randomunitnum = (Math.floor(Math.random() * 7));
			if (randomunitnum == 0) {
				anion = ["O", 16.00, false, "Oxide", ["O"]];
			} else if (randomunitnum == 1) {
				anion = ["S", 32.06, false, "Sulfide", ["S"]];
			} else if (randomunitnum == 2) {
				anion = ["SO&#8324", 96.06, true, "Sulfate", ["SO&#8324", "S", "O"]];
			} else if (randomunitnum == 3) {
				anion = ["SO&#8323", 80.06, true, "Sulfite", ["SO&#8323", "S", "O"]];
			} else if (randomunitnum == 4) {
				anion = ["CO&#8323", 60.01, true, "Carbonate", ["CO&#8323", "C", "O"]];
			} else if (randomunitnum == 5) {
				anion = ["CrO&#8324", 116.00, true, "Chromate", ["CrO&#8324", "Cr", "O"]];
			} else if (randomunitnum == 6) {
				anion = ["Cr&#8322O&#8327", 216.00, true, "Dichromate", ["Cr&#8322O&#8327", "Cr", "O"]];
			}
		} else if (charge == 3) {
			randomunitnum = (Math.floor(Math.random() * 4));
			if (randomunitnum == 0) {
				anion = ["N", 14.01, false, "Nitride", ["N"]];
			} else if (randomunitnum == 1) {
				anion = ["P", 30.97, false, "Phosphide", ["P"]];
			} else if (randomunitnum == 2) {
				anion = ["PO&#8324", 94.97, true, "Phosphate", ["PO&#8324", "P", "O"]];
			} else if (randomunitnum == 3) {
				anion = ["PO&#8323", 78.97, true, "Phosphite", ["PO&#8323", "P", "O"]];
			}
		}
		return anion;
	};

	var getBalancedIonicCompound = function (cation, thisCationCharge, anion, thisAnionCharge) {
		// console.log ("cat catcharge an ancharge " + cation[0] + thisCationCharge + anion[0] + thisAnionCharge)
		var balancedFormula = "";
		var catNum = 1;
		var anNum = 1;
		var catSub = "";
		var anSub = "";
		if (anion[0].includes("(")) {
			anion[0] = anion[0].replace(/[()]/g, '');
		}
		if (cation[0].includes("(")) {
			cation[0] = cation[0].replace(/[()]/g, '');
		}
		if (thisCationCharge == thisAnionCharge) {
			balancedFormula = "" + cation[0] + anion[0];

		} else {
			if (thisCationCharge > 1) {
				if ((checkPolyatomicIon(anion)) && (!anion[0].includes("("))) {
					anion[0] = "(" + anion[0] + ")";
				}
				if (thisCationCharge == 2) {
					anSub = "&#8322";
				} else if (thisCationCharge == 3) {
					anSub = "&#8323";
				} else if (thisCationCharge == 4) {
					anSub = "&#8324";
				}
			}

			if (thisAnionCharge > 1) {
				if ((checkPolyatomicIon(cation)) && (!cation[0].includes("("))) {
					cation[0] = "(" + cation[0] + ")";
				}
				if (thisAnionCharge == 2) {
					catSub = "&#8322";
				} else if (thisAnionCharge == 3) {
					catSub = "&#8323";
				} else if (thisAnionCharge == 4) {
					catSub = "&#8324";
				}
			}

			catNum = thisAnionCharge;
			anNum = thisCationCharge;
			if (thisCationCharge == thisAnionCharge) {
				catNum = 1;
				anNum = 1;
			}
			if ((thisCationCharge == 4) && (thisAnionCharge == 2)) {
				catSub = "";
				anSub = "&#8322";
				catNum = 1;
				anNum = 2;
			}
			balancedFormula = "" + cation[0] + catSub + anion[0] + anSub;
		}
		var balancedArray = [balancedFormula, catNum, anNum, catSub, anSub, thisCationCharge, thisAnionCharge];
		return balancedArray;
		//return balancedFormula;
	};

	var checkPolyatomicIon = function (ion) {
		var polyCheck = false;
		polyCheck = ion[2];

		return polyCheck;
	};

	var getOrganicPrefix = function (carbonx) {
		var prefix = "blank";
		switch (carbonx) {
		case 1:
			prefix = "meth";
			break;
		case 2:
			prefix = "eth";
			break;
		case 3:
			prefix = "prop";
			break;
		case 4:
			prefix = "but";
			break;
		case 5:
			prefix = "pent";
			break;
		case 6:
			prefix = "hex";
			break;
		case 7:
			prefix = "hept";
			break;
		case 8:
			prefix = "oct";
			break;
		case 9:
			prefix = "non";
			break;
		case 10:
			prefix = "dec";
			break;
		}
		return prefix;
	};

	var getOrganicSuffix = function (quality) {
		var suffix = "blank";
		switch (quality) {
		case 1:
			suffix = "ane";
			break;
		case 2:
			suffix = "ene";
			break;
		case 3:
			suffix = "yne";
			break;
		case 4:
			suffix = "anol";
			break;
		}
		return suffix;
	};
	var getOrganicFormula = function (carbonx, quality) {
		var organicFormula = "blank";
		var carbony = carbonx;
		if (carbony == 1) {
			carbony = "";
		}
		switch (quality) {
		case 1:
			//alert ("2");
			organicFormula = "C" + ("" + carbony).sub() + "H" + ("" + (carbonx * 2 + 2)).sub();
			cNo = carbonx;
			hNo = cNo * 2 + 2;
			oNo = 0;
			break;
		case 2:
			//alert ("3");
			organicFormula = "C" + ("" + carbony).sub() + "H" + ("" + (carbonx * 2)).sub();
			cNo = carbonx;
			hNo = cNo * 2;
			oNo = 0;
			break;
		case 3:
			//alert ("4");
			organicFormula = "C" + ("" + carbony).sub() + "H" + ("" + (carbonx * 2 - 2)).sub();
			cNo = carbonx;
			hNo = cNo * 2 - 2;
			oNo = 0;
			break;
		case 4:
			//alert ("1");
			organicFormula = "C" + ("" + carbony).sub() + "H" + ("" + (carbonx * 2 + 1)).sub() + "OH";
			cNo = carbonx;
			hNo = cNo * 2 + 2;
			oNo = 1;
			break;
		}
		//alert (organicFormula);
		return organicFormula;
	};

	// var getOrganicWeight = function (carbonx, quality) {
	// var organicWeight = "0";
	// var carbony = carbonx;
	// if (carbony == 1) {
	// carbony = "";
	// }
	// switch (quality) {
	// case 1:
	// //alert ("2");
	// organicFormula = "C" + ("" + carbony).sub() + "H" + ("" + (carbonx * 2 + 2)).sub();
	// cNo = carbonx;
	// hNo = cNo * 2 + 2;
	// oNo = 0;
	// organicWeight=cNo*
	// break;
	// case 2:
	// //alert ("3");
	// organicFormula = "C" + ("" + carbony).sub() + "H" + ("" + (carbonx * 2)).sub();
	// cNo = carbonx;
	// hNo = cNo * 2;
	// oNo = 0;
	// break;
	// case 3:
	// //alert ("4");
	// organicFormula = "C" + ("" + carbony).sub() + "H" + ("" + (carbonx * 2 - 2)).sub();
	// cNo = carbonx;
	// hNo = cNo * 2 - 2;
	// oNo = 0;
	// break;
	// case 4:
	// //alert ("1");
	// organicFormula = "C" + ("" + carbony).sub() + "H" + ("" + (carbonx * 2 + 1)).sub() + "OH";
	// cNo = carbonx;
	// hNo = cNo * 2 + 2;
	// oNo = 1;
	// break;
	// }
	// //alert (organicFormula);
	// return organicFormula;
	// };

	var countIonsDouble = function (moleculeOne, moleculeTwo, moleculeThree, moleculeFour) {
		var catNumOne = convertSubs(moleculeOne[3]);
		var catNumTwo = convertSubs(moleculeTwo[3]);
		var catNumThree = convertSubs(moleculeThree[3]);
		var catNumFour = convertSubs(moleculeFour[3]);
		var anNumOne = convertSubs(moleculeOne[4]);
		var anNumTwo = convertSubs(moleculeTwo[4]);
		var anNumThree = convertSubs(moleculeThree[4]);
		var anNumFour = convertSubs(moleculeFour[4]);

		// alert (moleculeOne[4]+" "+moleculeTwo[4]+" "+moleculeThree[4]+" "+moleculeFour[4]+" ");
		//alert (anNumOne+" "+anNumTwo+" "+anNumThree+" "+anNumFour+" ");
		coefficientOne = 1;
		coefficientTwo = 1;
		coefficientThree = 1;
		coefficientFour = 1;
		//this is where we are on 03-30-2020
		//We seem to be in a crashed/infinite loop.

		//	while (((coefficientOne * catNumOne) != (coefficientThree * catNumThree)) || ((coefficientOne * anNumOne) != (coefficientFour * anNumFour)) || ((coefficientTwo * catNumTwo) != (coefficientFour * catNumFour)) || ((coefficientTwo * anNumTwo) != (coefficientThree * catNumThree)) || (coefficientOne<7)) {
		var i = 0;
		while (i < 100) {
			//console.log("cats" + coefficientOne + " " + coefficientTwo + " " + coefficientThree + " " + coefficientFour + " ");

			if ((coefficientOne * catNumOne) < (coefficientThree * catNumThree)) {
				// console.log("one");
				coefficientOne++;
			} else if ((coefficientOne * catNumOne) > (coefficientThree * catNumThree)) {
				// console.log("two");
				coefficientThree++;
			} else if ((coefficientTwo * catNumTwo) < (coefficientFour * catNumFour)) {
				coefficientTwo++;
				// console.log("three");
			} else if ((coefficientTwo * catNumTwo) > (coefficientFour * catNumFour)) {
				coefficientFour++;
				// console.log("four");
			} else if ((coefficientOne * anNumOne) < (coefficientFour * anNumFour)) {
				coefficientOne++;
				// console.log("five");
			} else if ((coefficientOne * anNumOne) > (coefficientFour * anNumFour)) {
				coefficientFour++;
				// console.log("six");
			} else if ((coefficientTwo * anNumTwo) < (coefficientThree * anNumThree)) {
				coefficientTwo++;
				// console.log("seven");
			} else if ((coefficientTwo * anNumTwo) > (coefficientThree * anNumThree)) {
				coefficientThree++;
				// console.log("eight");
			}
			i++;
			//I am on this line 03-30-2020>>>>>>>	//in here start doing the process of adding things in
		}
		organicCompoundCoefficientAnswer = coefficientOne;
		// console.log("organic Compound Coefficient is " + organicCompoundCoefficientAnswer);
		oxygenCoefficientAnswer = coefficientTwo;
		catCoefficientAnswer = coefficientThree;
		anCoefficientAnswer = coefficientFour;

	};

	var countIonsSingleCation = function (moleculeOne, moleculeTwo, moleculeThree) {
		var catNumOne = convertSubs(moleculeOne[3]);
		var catNumTwo = 1;
		var catNumThree = convertSubs(moleculeThree[3]);
		var catNumFour = 1;
		var anNumOne = convertSubs(moleculeOne[4]);
		var anNumTwo = 0;
		var anNumThree = convertSubs(moleculeThree[4]);
		var anNumFour = 0;

		// alert (moleculeOne[4]+" "+moleculeTwo[4]+" "+moleculeThree[4]+" "+moleculeFour[4]+" ");
		//alert (anNumOne+" "+anNumTwo+" "+anNumThree+" "+anNumFour+" ");
		coefficientOne = 1;
		coefficientTwo = 1;
		coefficientThree = 1;
		coefficientFour = 1;
		//this is where we are on 03-30-2020
		//We seem to be in a crashed/infinite loop.

		//	while (((coefficientOne * catNumOne) != (coefficientThree * catNumThree)) || ((coefficientOne * anNumOne) != (coefficientFour * anNumFour)) || ((coefficientTwo * catNumTwo) != (coefficientFour * catNumFour)) || ((coefficientTwo * anNumTwo) != (coefficientThree * catNumThree)) || (coefficientOne<7)) {
		var i = 0;
		while (i < 100) {
			//console.log("cats" + coefficientOne + " " + coefficientTwo + " " + coefficientThree + " " + coefficientFour + " ");

			if ((coefficientOne * catNumOne) < (coefficientFour * catNumFour)) {
				// console.log("one");
				coefficientOne++;
			} else if ((coefficientOne * catNumOne) > (coefficientFour * catNumFour)) {
				// console.log("two");
				coefficientFour++;
			} else if ((coefficientTwo * catNumTwo) < (coefficientThree * catNumThree)) {
				coefficientTwo++;
				// console.log("three");
			} else if ((coefficientTwo * catNumTwo) > (coefficientThree * catNumThree)) {
				coefficientThree++;
				// console.log("four");
			} else if ((coefficientOne * anNumOne) < (coefficientThree * anNumThree)) {
				coefficientOne++;
				// console.log("five");
			} else if ((coefficientOne * anNumOne) > (coefficientThree * anNumThree)) {
				coefficientThree++;
				// console.log("six");
			} else if ((coefficientTwo * anNumTwo) < (coefficientFour * anNumFour)) {
				coefficientTwo++;
				// console.log("seven");
			} else if ((coefficientTwo * anNumTwo) > (coefficientFour * anNumFour)) {
				coefficientFour++;
				// console.log("eight");
			}
			i++;
			//I am on this line 03-30-2020>>>>>>>	//in here start doing the process of adding things in
		}
		organicCompoundCoefficientAnswer = coefficientOne;
		// console.log("organic Compound Coefficient is " + organicCompoundCoefficientAnswer);
		oxygenCoefficientAnswer = coefficientTwo;
		catCoefficientAnswer = coefficientThree;
		anCoefficientAnswer = coefficientFour;

	};
	var countIonsSingleAnion = function (moleculeOne, moleculeTwo, moleculeThree) {
		var catNumOne = convertSubs(moleculeOne[3]);
		var catNumTwo = 0;
		var catNumThree = convertSubs(moleculeThree[3]);
		var catNumFour = 0;
		var anNumOne = convertSubs(moleculeOne[4]);
		var anNumTwo = 2;
		var anNumThree = convertSubs(moleculeThree[4]);
		var anNumFour = 2;

		// alert (moleculeOne[4]+" "+moleculeTwo[4]+" "+moleculeThree[4]+" "+moleculeFour[4]+" ");
		//alert (anNumOne+" "+anNumTwo+" "+anNumThree+" "+anNumFour+" ");
		coefficientOne = 1;
		coefficientTwo = 1;
		coefficientThree = 1;
		coefficientFour = 1;
		//this is where we are on 03-30-2020
		//We seem to be in a crashed/infinite loop.

		//	while (((coefficientOne * catNumOne) != (coefficientThree * catNumThree)) || ((coefficientOne * anNumOne) != (coefficientFour * anNumFour)) || ((coefficientTwo * catNumTwo) != (coefficientFour * catNumFour)) || ((coefficientTwo * anNumTwo) != (coefficientThree * catNumThree)) || (coefficientOne<7)) {
		var i = 0;
		while (i < 100) {
			//console.log("cats" + coefficientOne + " " + coefficientTwo + " " + coefficientThree + " " + coefficientFour + " ");

			if ((coefficientOne * catNumOne) < (coefficientThree * catNumThree)) {
				// console.log("one");
				coefficientOne++;
			} else if ((coefficientOne * catNumOne) > (coefficientThree * catNumThree)) {
				// console.log("two");
				coefficientThree++;
			} else if ((coefficientTwo * catNumTwo) < (coefficientFour * catNumFour)) {
				coefficientTwo++;
				// console.log("three");
			} else if ((coefficientTwo * catNumTwo) > (coefficientFour * catNumFour)) {
				coefficientFour++;
				// console.log("four");
			} else if ((coefficientOne * anNumOne) < (coefficientFour * anNumFour)) {
				coefficientOne++;
				// console.log("five");
			} else if ((coefficientOne * anNumOne) > (coefficientFour * anNumFour)) {
				coefficientFour++;
				// console.log("six");
			} else if ((coefficientTwo * anNumTwo) < (coefficientThree * anNumThree)) {
				coefficientTwo++;
				// console.log("seven");
			} else if ((coefficientTwo * anNumTwo) > (coefficientThree * anNumThree)) {
				coefficientThree++;
				// console.log("eight");
			}
			i++;
			//I am on this line 03-30-2020>>>>>>>	//in here start doing the process of adding things in
		}
		organicCompoundCoefficientAnswer = coefficientOne;
		// console.log("organic Compound Coefficient is " + organicCompoundCoefficientAnswer);
		oxygenCoefficientAnswer = coefficientTwo;
		catCoefficientAnswer = coefficientThree;
		anCoefficientAnswer = coefficientFour;

	};

	var convertSubs = function (weirdNumber) {
		// console.log(weirdNumber);
		if (weirdNumber == "&#8322") {
			return 2;
		} else if (weirdNumber == "&#8323") {
			return 3;
		} else if (weirdNumber == "&#8324") {
			return 4;
		} else if (weirdNumber == "&#8327") {
			return 7;
		} else if (weirdNumber == "") {
			return 1;
		} else if (weirdNumber == "1") {
			return 1;
		}
	};

	var getMathType = function (numChoice) {
		var mathType = "massToMass";
		if (numChoice == 0) {
			mathType = "moleToMole";
		} else if (numChoice == 1) {
			mathType = "massToMole";
		} else if (numChoice == 2) {
			mathType = "moleToMass";
		}
		return mathType;
	}

	var setupInputs = function () {
		//document.getElementById("coefficientNumFour").innerHTML="";//<input type='text'  name='thisanioncoefficient' id = 'thisanioncoefficient' value='coefficient?'> <font color= 'white'>";
		document.getElementById("coefficientNumOne").innerHTML = "<input type='text'  name='organicCompoundCoefficient' id = 'organicCompoundCoefficient' value='coefficient?'></input>"; //<font color= 'white'>";
		document.getElementById("coefficientNumTwo").innerHTML = "<input  type='text' name='oxygenCoefficient' id = 'oxygenCoefficient' value='coefficient?'> <font color= 'white'></input>"; //<font color= 'white'>";
		document.getElementById("coefficientNumThree").innerHTML = "<input  type='text' name='cationcoefficient' id = 'cationcoefficient' value='coefficient?'> <font color= 'white'></input>"; //<font color= 'white'>";
		document.getElementById("coefficientNumFour").innerHTML = "<input type='text' name='anioncoefficient' id = 'anioncoefficient' value='coefficient?'></input> "; //<font color= 'white'>";
		$('#anioncoefficient').click(function (e) {
			// alert ("hi");
			if (document.getElementById('anioncoefficient').value == 'coefficient?') {
				document.getElementById('anioncoefficient').value = "";
			}
		});
		$('#organicCompoundCoefficient').click(function (e) {

			if (document.getElementById("organicCompoundCoefficient").value == "coefficient?") {

				document.getElementById("organicCompoundCoefficient").value = "";
			}
		});
		$('#organicCompoundCoefficient').blur(function (e) {
			if (document.getElementById("organicCompoundCoefficient").value == "") {
				document.getElementById("organicCompoundCoefficient").value = "coefficient?";
			}
		});
		$('#oxygenCoefficient').click(function (e) {
			if (document.getElementById("oxygenCoefficient").value == "coefficient?") {
				document.getElementById("oxygenCoefficient").value = "";
			}
		});

		$('#oxygenCoefficient').blur(function (e) {
			if (document.getElementById("oxygenCoefficient").value == "") {
				document.getElementById("oxygenCoefficient").value = "coefficient?";
			}
		});
		$('#cationcoefficient').click(function (e) {
			if (document.getElementById("cationcoefficient").value == "coefficient?") {
				document.getElementById("cationcoefficient").value = "";
			}
		});
		$('#cationcoefficient').blur(function (e) {
			if (document.getElementById("cationcoefficient").value == "") {
				document.getElementById("cationcoefficient").value = "coefficient?";
			}
		});

		$('#anioncoefficient').blur(function (e) {
			// alert ("hi");
			if (document.getElementById("anioncoefficient").value == "") {
				document.getElementById("anioncoefficient").value = "coefficient?";
			}
		});

		$('#organicCompoundCoefficient').change(function () { //this is the 1st compound
			resetAnswerProposal();
		});
		$('#oxygenCoefficient').change(function () { //this is the 2nd compound
			resetAnswerProposal();
		});
		$('#cationcoefficient').change(function () { //this is the 1st product
			resetAnswerProposal();
		});
		$('#anioncoefficient').change(function () { //this is the 2nd product
			resetAnswerProposal();
		});

		$('#cationcoefficient').keypress(function (e) {
			if (e.keyCode == 13)
				$('#submitButton').click();
		});
		$('#anioncoefficient').keypress(function (e) {
			if (e.keyCode == 13)
				$('#submitButton').click();
		});
		// $('#cationcharge').keypress(function (e) {
		// if (e.keyCode == 13)
		// $('#submitButton').click();
		// });
		// $('#anioncharge').keypress(function (e) {
		// if (e.keyCode == 13)
		// $('#submitButton').click();
		// });

		$(function () {
			$('#cations').change(function () {
				var selected = $('#cations').find('option:selected');
				resetAnswerProposal();
			});
		});

		$(function () {
			$('#firstproductoptions').change(function () {
				productOneFormulaSelect = $('#firstproductoptions').find('option:selected');
				// productOneFormulaSelect = document.getElementById("firstproductoptions").options[document.getElementById("firstproductoptions").selectedIndex].innerHTML;
				// console.log(document.getElementById("firstproductoptions").options[document.getElementById("firstproductoptions").selectedIndex].innerHTML);
				resetAnswerProposal();
			});
		});
		$(function () {
			$('#secondproductoptions').change(function () {
				productTwoFormulaSelect = $('#secondproductoptions').find('option:selected');
				// productTwoFormulaSelect = document.getElementById("secondproductoptions").options[document.getElementById("secondproductoptions").selectedIndex].innerHTML;
				resetAnswerProposal();
			});
		});
	}

	var getReactionArray = function () {
		var pickAReaction = Math.floor(Math.random() * 6) + 1;
		switch (pickAReaction) {
		case 1:
			reactionArray = [1, 'CaO', 1, 'CO&#8322', 1, 'CaCO&#8323'];
			break;
		case 2:
			reactionArray = [1, 'H&#8322', 1, 'Cl&#8322', 2, 'HCl'];
			break;
		case 3:
			reactionArray = [6, 'C', 3, 'H&#8322', 1, 'C&#8326H&#8326'];
			break;
		case 4:
			reactionArray = [1, 'Na&#8322O', 1, 'CO&#8322', 1, 'Na&#8322CO&#8323'];
			break;
		case 5:
			reactionArray = [1, 'C&#8322H&#8324', 1, 'Cl&#8322', 1, 'C&#8322H&#8324Cl&#8322'];
			break;
		case 6:
			reactionArray = [1, 'H&#8322O', 1, 'SO&#8322', 1, 'H&#8322SO&#8323'];
			break;
		}
	};
	var resetQuestion = function () {

		var mathType = getMathType(Math.floor(Math.random() * 2)+1);
		questionTypeNumber = Math.floor(Math.random() * 3) + 1; //set to not include synthesis or decomposition

		switch (questionTypeNumber) {
		case 1:
			questionType = "combustion";
			break;
		case 2:
			questionType = "singleDisplacement";
			break;
		case 3:
			questionType = "doubleDisplacement";
			break;
		case 4:
			questionType = "synthesis";
			break;
		case 5:
			questionType = "decomposition";
			break;

		}
		// questionType = "singleDisplacement";
		if (questionType == "synthesis") {
			// setupInputs();
			// document.getElementById("coefficientNumOne").innerHTML = ""; //<input type='text'  name='organicCompoundCoefficient' id = 'organicCompoundCoefficient' value='coefficient?'></input>"; //<font color= 'white'>";
			// document.getElementById("coefficientNumTwo").innerHTML = ""; //<input  type='text' name='oxygenCoefficient' id = 'oxygenCoefficient' value='coefficient?'> <font color= 'white'></input>"; //<font color= 'white'>";
			// document.getElementById("coefficientNumThree").innerHTML = ""; //<input  type='text' name='cationcoefficient' id = 'cationcoefficient' value='coefficient?'> <font color= 'white'></input>"; //<font color= 'white'>";
			//juicy code goes here
			getReactionArray();
			
			
		} else if (questionType == "decomposition") {
			// setupInputs();
			// document.getElementById("coefficientNumOne").innerHTML = ""; //<input type='text'  name='organicCompoundCoefficient' id = 'organicCompoundCoefficient' value='coefficient?'></input>"; //<font color= 'white'>";
			//setupDecompositionInputs();
			//fix below
			getReactionArray();
			
			// juicy code goes here
		
		} else if (questionType == "combustion") { //resetquestion
			// setupInputs();

			// alert ("sup");
			
			n = new Date();
			y = n.getFullYear();
			m = n.getMonth() + 1;
			d = n.getDate();
			var randomunitnum4 = (Math.floor(Math.random() * 10) + 1);
			var carbonNumber = randomunitnum4;
			//alert (cationCharge);
			//var cationArray = getRandomCation(cationCharge);
			//carbonNumber=1;
			if (carbonNumber == 1) {
				var randomunitnum5 = (Math.floor(Math.random() * 2)) * 3 + 1;
			} else {
				var randomunitnum5 = (Math.floor(Math.random() * 4) + 1);
			}
			var organicQuality = randomunitnum5;

			var molecule = "organic";
			organicCompoundName = getOrganicFormula(carbonNumber, organicQuality);
			var formulaOne = organicCompoundName;
			var formulaTwo = "O<sub>2</sub>";
			var formulaThree = "CO<sub>2</sub>";
			var formulaFour = "H<sub>2</sub>O";
			//from here on out is the old stuff.

			document.getElementById("date").innerHTML = "</sub>" + m + " / " + d + " / " + y;
			// the below code is for ion picking


			var randomunitnum3 = (Math.floor(Math.random() * 4) + 1);
			cationCharge = randomunitnum3;
			//alert (cationCharge);
			cationArray = getRandomCation(cationCharge);
			var randomunitnum2 = (Math.floor(Math.random() * 3) + 1);
			anionCharge = randomunitnum2;
			anionArray = getRandomAnion(anionCharge);
			balancedFormulaArray = getBalancedIonicCompound(cationArray, cationCharge, anionArray, anionCharge);
			// wrongCompound1 = getBalancedIonicCompound(cationArray, (Math.floor(Math.random() * 3) + 1), anionArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
			// wrongCompound2 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
			// wrongCompound3 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813


			// $('#boxb').text(35);
			// $('#bwordb').text(35);
			var number = (Math.floor(Math.random() * 200));
			// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
			// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
			var numbertwo = (Math.floor(Math.random() * 200));
			// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
			// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');

			var coeff1 = ((Math.random() * 59.9999999 - 50));
			var mag1 = getMagnitude(11);
			var mag2 = getMagnitude(mag1);
			var solute = getRandomMolecule();
			var molarMass = getMolarMassText(solute);
			var formulaName = getCorrectChemicalFormula(solute);
			// the below text would have generated a random unit type.
			//thisUnitType = getRandomUnit();


			var units1 = getUnit(mag1) + "g";
			var units2 = getUnit(mag2) + "L";
			//units1 = number+"grams";
			//units2 = numbertwo+"Liters";
			//		var units3 = getMolaraMassText(getRandomMolecule());


			// $('#num1').text(toOurExponential(sigFigs(finalNum, 3)));
			// $('#den1').text(toOurExponential(sigFigs(finalNumtwo, 3)));

			// $('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");
			//$('#num1').text("What is the molar mass of " + balancedFormulaArray[0]+"?");
			var romanNumeral = "";
			if (cationArray[0].includes("Fe")) {
				if (cationCharge == 2) {
					romanNumeral = "(II)";
				} else if (cationCharge == 3) {
					romanNumeral = "(III)";
				}
				//$('#num1').text("What ionic compound do you get from " + cationArray[0] + romanNumeral+" and "+ anionArray[0]+"?");
			}
			// removed this because it didn't have the charges built in. $('#num1').text("What ionic compound do you get from " + cationArray[0] + cationCharge+ "+ and "+ anionArray[0]+anionCharge+"-?");

			$('#num1 :not(script)').contents().filter(function () {
				return this.nodeType === 3;
			}).replaceWith(function () {
				return this.nodeValue.replace(/[0123456789.]/g, '<sub>$&</sub>');
			});

			//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " +toOurExponential(sigFigs(coeff1, 3))+ units1 " of "+ formulaName + " in " +  toOurExponential(sigFigs(coeff1, 3)) + units2 " of //water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");

			//thisAnswer = cationArray[3] + " " + anionArray[3];

			catCoefficientAnswer = cNo;
			anCoefficientAnswer = hNo / 2;
			oxygenCoefficientAnswer = cNo + hNo / 4 - (.5 * oNo);
			organicCompoundCoefficientAnswer = 1;
			while ((Math.floor(catCoefficientAnswer) != catCoefficientAnswer) || (Math.floor(oxygenCoefficientAnswer) != oxygenCoefficientAnswer) || (Math.floor(organicCompoundCoefficientAnswer) != organicCompoundCoefficientAnswer) || (Math.floor(anCoefficientAnswer) != anCoefficientAnswer)) {
				catCoefficientAnswer = catCoefficientAnswer * 2;
				anCoefficientAnswer = anCoefficientAnswer * 2;
				oxygenCoefficientAnswer = oxygenCoefficientAnswer * 2;
				organicCompoundCoefficientAnswer = organicCompoundCoefficientAnswer * 2;
			}
			//alert (catCoefficientAnswer + " CO2, "+anCoefficientAnswer+ " H2O, " + oxygenCoefficientAnswer + " O2, " + organicCompoundCoefficientAnswer + " "+organicCompoundName);
			//catChargeAnswer = balancedFormulaArray[5];
			//anChargeAnswer = balancedFormulaArray[6];
			// setupAnswers(mag1, mag2, number, numbertwo, molarMass, formulaName);
			// var cationcoefficient = prompt("What is the name of the compound above?");
			// if (cationcoefficient != null) {
			// if (cationcoefficient == answer) {
			// score = score + 1;
			// $('#score').text("Score = " + score);
			// $('#scoremessage').text(specialMessage(score));
			// resetQuestion();
			// } else {
			// score = score - 1;
			// $('#score').text("Score = " + score);
			// $('#scoremessage').text(specialMessage(score));
			// anotherQuestion();
			// }
			// }
			var mWReactantOne = cNo * 12.01 + hNo * 1.01 + oNo * 16.00;
			var mWReactantTwo = 32.00;
			var mWProductOne = 44.01;
			var mWProductTwo = 18.02;

			if (molecule == "organic") {}
		} else if (questionType == "doubleDisplacement") { //resetquestion
			// setupInputs();
			//document.getElementById("co2").innerHTML =  " CO<sub>2</sub>"; //1st product
			//document.getElementById("oxygen").innerHTML =  " O<sub>2</sub>"; //2nd reactant //CHANGELATER I'll have to change this later to take into account the reactant decided upon.
			//document.getElementById("h2o").innerHTML =  " H<sub>2</sub>O"; //2nd product
			//above will be updated later.
			//below is ubiquitous
			n = new Date();
			y = n.getFullYear();
			m = n.getMonth() + 1;
			d = n.getDate();
			document.getElementById("date").innerHTML = "</sub>" + m + " / " + d + " / " + y;
			//above is ubiquitous
			//below make our first reactant
			var randomunitnum4 = (Math.floor(Math.random() * 10) + 1);
			var randomunitnum3 = (Math.floor(Math.random() * 4) + 1);
			cationCharge = randomunitnum3;
			cationArray = getRandomCation(cationCharge);
			var randomunitnum2 = (Math.floor(Math.random() * 3) + 1);
			anionCharge = randomunitnum2;
			anionArray = getRandomAnion(anionCharge);
			balancedReactantOneFormulaArray = getBalancedIonicCompound(cationArray, cationCharge, anionArray, anionCharge);
			//below make our second reactant
			var randomunitnum8 = (Math.floor(Math.random() * 10) + 1);
			var randomunitnum6 = (Math.floor(Math.random() * 4) + 1);
			cationTwoCharge = randomunitnum6;
			cationTwoArray = getRandomCation(cationTwoCharge);
			while (cationTwoArray[0] == cationArray[0]) {
				var randomunitnum6 = (Math.floor(Math.random() * 4) + 1);
				cationTwoCharge = randomunitnum6;
				cationTwoArray = getRandomCation(cationTwoCharge);
			}
			var randomunitnum4 = (Math.floor(Math.random() * 3) + 1);
			anionTwoCharge = randomunitnum4;
			anionTwoArray = getRandomAnion(anionTwoCharge);
			while (anionTwoArray[0] == anionArray[0]) {
				// alert("sup");
				var randomunitnum4 = (Math.floor(Math.random() * 3) + 1);
				anionTwoCharge = randomunitnum4;
				anionTwoArray = getRandomAnion(anionTwoCharge);
			}
			balancedReactantTwoFormulaArray = getBalancedIonicCompound(cationTwoArray, cationTwoCharge, anionTwoArray, anionTwoCharge);
			// generateOptionsDouble(cationArray, anionArray, cationTwoArray, anionTwoArray);
			var productOneFormulaAnswer = getBalancedIonicCompound(cationArray, cationCharge, anionTwoArray, anionTwoCharge);
			var productTwoFormulaAnswer = getBalancedIonicCompound(cationTwoArray, cationTwoCharge, anionArray, anionCharge);
			var mWReactantOne = cationArray[1] * balancedReactantOneFormulaArray[1] + anionArray[1] * balancedReactantOneFormulaArray[2];
			var mWReactantTwo = cationTwoArray[1] * balancedReactantTwoFormulaArray[1] + anionTwoArray[1] * balancedReactantTwoFormulaArray[2];
			var mWProductOne = cationArray[1] * productOneFormulaAnswer[1] + anionTwoArray[1] * productOneFormulaAnswer[2];
			var mWProductTwo = cationTwoArray[1] * productTwoFormulaAnswer[1] + anionArray[1] * productTwoFormulaAnswer[2];
			var formulaThree = productOneFormulaAnswer[0];
			var formulaFour = productTwoFormulaAnswer[0];
			var formulaOne = balancedReactantOneFormulaArray[0];
			var formulaTwo = balancedReactantTwoFormulaArray[0];
			// alert ("yo");
			// removed this because it didn't have the charges built in. $('#num1').text("What ionic compound do you get from " + cationArray[0] + cationCharge+ "+ and "+ anionArray[0]+anionCharge+"-?");

			//catCoefficientAnswer = ; //reactant one
			//anCoefficientAnswer = ; //reatant two
			//oxygenCoefficientAnswer = ; //product two
			//organicCompoundCoefficientAnswer = ; //product one
			// while ((Math.floor(catCoefficientAnswer) != catCoefficientAnswer) || (Math.floor(oxygenCoefficientAnswer) != oxygenCoefficientAnswer) || (Math.floor(organicCompoundCoefficientAnswer) != organicCompoundCoefficientAnswer) || (Math.floor(anCoefficientAnswer) != anCoefficientAnswer)) {
			// catCoefficientAnswer = catCoefficientAnswer * 2;
			// anCoefficientAnswer = anCoefficientAnswer * 2;
			// oxygenCoefficientAnswer = oxygenCoefficientAnswer * 2;
			// organicCompoundCoefficientAnswer = organicCompoundCoefficientAnswer * 2;
			// }

		} else if (questionType == "singleDisplacement") { //reset question
			// setupInputs();
			//in resetquestion actual
			var pickAnIon = (Math.floor(Math.random() * 2));

			
			if (pickAnIon == 0) {
				console.log("anion");
				singleAnion = true;
			} else {
				console.log("cation");
				singleAnion = false;
			}
			//above will be updated later.
			//below is ubiquitous
			n = new Date();
			y = n.getFullYear();
			m = n.getMonth() + 1;
			d = n.getDate();
			document.getElementById("date").innerHTML = "</sub>" + m + " / " + d + " / " + y;
			//above is ubiquitous
			//below make our first reactant
			var randomunitnum4 = (Math.floor(Math.random() * 10) + 1);
			var randomunitnum3 = (Math.floor(Math.random() * 4) + 1);

			cationCharge = randomunitnum3;
			cationArray = getRandomCation(cationCharge);
			var randomunitnum2 = (Math.floor(Math.random() * 3) + 1);
			

			anionCharge = randomunitnum2;
			anionArray = getRandomAnion(anionCharge);
			if (singleAnion) {
				anionArray = getRandomAnionGas(anionCharge);
			}
			balancedReactantOneFormulaArray = getBalancedIonicCompound(cationArray, cationCharge, anionArray, anionCharge);
			//below make our second reactant
			var randomunitnum8 = (Math.floor(Math.random() * 10) + 1);
			var randomunitnum6 = (Math.floor(Math.random() * 4) + 1);
			cationTwoCharge = randomunitnum6;
			cationTwoArray = getRandomCation(cationTwoCharge);
			while ((cationTwoArray[0] == cationArray[0]) || (cationTwoArray[3].includes("I"))) {
				var randomunitnum6 = (Math.floor(Math.random() * 3) + 1);
				cationTwoCharge = randomunitnum6;
				cationTwoArray = getRandomCation(cationTwoCharge);
			}
			var randomunitnum4 = (Math.floor(Math.random() * 3) + 1);
			
			anionTwoCharge = randomunitnum4;
			anionTwoArray = getRandomAnionGas(anionTwoCharge);
			while (anionTwoArray[0] == anionArray[0]) {
				// alert("sup");
				var randomunitnum4 = (Math.floor(Math.random() * 3) + 1);
				anionTwoCharge = randomunitnum4;
				anionTwoArray = getRandomAnionGas(anionTwoCharge);
			}
			balancedReactantTwoFormulaArray = getBalancedIonicCompound(cationTwoArray, cationTwoCharge, anionTwoArray, anionTwoCharge);
			if (singleAnion) {
				var productOneFormulaAnswer = getBalancedIonicCompound(cationArray, cationCharge, anionTwoArray, anionTwoCharge);
			} else {
				var productOneFormulaAnswer = getBalancedIonicCompound(cationTwoArray, cationTwoCharge, anionArray, anionCharge);
			}
			var mWReactantOne = cationArray[1] * balancedReactantOneFormulaArray[1] + anionArray[1] * balancedReactantOneFormulaArray[2];
			var mWProductOne = cationArray[1] * productOneFormulaAnswer[1] + anionArray[1] * productOneFormulaAnswer[2];
			var formulaThree = productOneFormulaAnswer[0];
			var formulaOne = balancedReactantOneFormulaArray[0];
			if (singleAnion) {
				var mWReactantTwo = anionTwoArray[1] * 2;
				var mWProductTwo = anionArray[1] * 2;
				var formulaFour = anionArray[0].replace(/[()]/g, '') + "&#8322";
				var formulaTwo = anionTwoArray[0].replace(/[()]/g, '') + "&#8322";
			} else {
				var mWReactantTwo = cationTwoArray[1];
				var mWProductTwo = cationArray[1];
				var formulaFour = cationArray[0];
				var formulaTwo = cationTwoArray[0];
			}

		
		}
		// 4-11-20 the above information is  currently sort of unimportant except to setup the equation.

		//getAnswer
	
		reactantAmount=(Math.floor(Math.random()*2000)+1)/200
		var unitArray = getUnitArray(mathType);
		reactantChoice = Math.floor(Math.random() * 2);
		productChoice = Math.floor(Math.random() * 2) + 2;
		equationArray = [formulaOne, formulaTwo, formulaThree, formulaFour];
		molarMassArray = [Number(mWReactantOne), Number(mWReactantTwo), Number(mWProductOne), Number(mWProductTwo)]
		if (score > 19) {
			document.getElementById("num1").innerHTML = "how many " + unitArray[1] + " of " + equationArray[productChoice] + " do we get if we react " + reactantAmount + " " + unitArray[0] + " of " + equationArray[reactantChoice] + " based on the below reaction?"; // + organicCompoundName; // + ". <br>" + balancedFormulaArray[0] + "<sub>(s)</sub> ->  ___" + cationArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub> + ___ " + anionArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub>?";
		} else if (score > 9) {
			document.getElementById("num1").innerHTML = "How many " + unitArray[1] + " of " + equationArray[productChoice] + " do we get if we react " + reactantAmount + " " + unitArray[0] + " of " + equationArray[reactantChoice] + " based on the below reaction."; // + organicCompoundName + "."; // + ". <br>" + balancedFormulaArray[0] + "<sub>(s)</sub> ->  ___" + cationArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub> + ___ " + anionArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub>.?";
		} else {
			document.getElementById("num1").innerHTML = "How many " + unitArray[1] + " of " + equationArray[productChoice] + " do we get if we react " + reactantAmount + " " + unitArray[0] + " of " + equationArray[reactantChoice] + " based on the below reaction?"; // + organicCompoundName; // + ". <br>" + balancedFormulaArray[0] + "<sub>(s)</sub> ->  ___" + cationArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub> + ___ " + anionArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub>?";
		}
		
		setupBalancedEquation();
		coefficientArray = [Number(organicCompoundCoefficientAnswer), Number(oxygenCoefficientAnswer), Number(catCoefficientAnswer), Number(anCoefficientAnswer)];
		console.log(equationArray);
		console.log(molarMassArray);
		console.log(coefficientArray);
	
		var prada = doMathBasedOnUnits(mathType);
		
		resetQuestionDecimals(Number(prada));
	};
	
	
	var doMathBasedOnUnits= function(mathType){
		// alert (reactantAmount+" "+molarMassArray[reactantChoice]+" "+coefficientArray[reactantChoice]);
		pradaAnswer=0;
		if (mathType == "massToMass"){
			pradaAnswer=((reactantAmount/molarMassArray[reactantChoice])*coefficientArray[productChoice]/coefficientArray[reactantChoice])*molarMassArray[productChoice];
		}
		else if (mathType=="massToMole"){
		pradaAnswer=((reactantAmount/molarMassArray[reactantChoice])*coefficientArray[productChoice]/coefficientArray[reactantChoice]);
		}
		else if (mathType=="moleToMole"){
		pradaAnswer=((reactantAmount)*coefficientArray[productChoice]/coefficientArray[reactantChoice]);
		}
		else if (mathType=="moleToMass"){
		pradaAnswer=((reactantAmount)*coefficientArray[productChoice]/coefficientArray[reactantChoice])*molarMassArray[productChoice];
		}
		// alert (pradaAnswer+" " + mathType);
		return pradaAnswer;
		
	}
	
	var getUnitArray = function (mathType) { // I am working here now Avi 4/11/2020
		var unitTypes = [];
		if (mathType == "massToMass") {
			unitTypes = ["grams", "grams"];
		} else if (mathType == "massToMole") {
			unitTypes = ["grams", "moles"];
		} else if (mathType == "moleToMole") {

			unitTypes = ["moles", "moles"];
		} else if (mathType == "moleToMass") {

			unitTypes = ["moles", "grams"];
		}
		return unitTypes;
	}

	var anotherQuestion = function (answer) {
		//	var cationcoefficient = prompt("What is the name of the compound above?");
		if ((cationcoefficient != null) && (anioncoefficient != null) && (organicCompoundCoefficient != null) && (oxygenCoefficient != null)) {
			if ((cationcoefficient == catCoefficientAnswer) && (anioncoefficient == anCoefficientAnswer) && (oxygenCoefficient == oxygenCoefficientAnswer) && (organicCompoundCoefficient == organicCompoundCoefficientAnswer)) {
				score = score + 1;
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, parseInt(score));
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

	$('#organicCompoundCoefficient').click(function (e) {

		if (document.getElementById("organicCompoundCoefficient").value == "coefficient?") {

			document.getElementById("organicCompoundCoefficient").value = "";
		}
	});
	$('#organicCompoundCoefficient').blur(function (e) {
		if (document.getElementById("organicCompoundCoefficient").value == "") {
			document.getElementById("organicCompoundCoefficient").value = "coefficient?";
		}
	});
	$('#oxygenCoefficient').click(function (e) {
		if (document.getElementById("oxygenCoefficient").value == "coefficient?") {
			document.getElementById("oxygenCoefficient").value = "";
		}
	});

	$('#oxygenCoefficient').blur(function (e) {
		if (document.getElementById("oxygenCoefficient").value == "") {
			document.getElementById("oxygenCoefficient").value = "coefficient?";
		}
	});
	$('#cationcoefficient').click(function (e) {
		if (document.getElementById("cationcoefficient").value == "coefficient?") {
			document.getElementById("cationcoefficient").value = "";
		}
	});
	$('#cationcoefficient').blur(function (e) {
		if (document.getElementById("cationcoefficient").value == "") {
			document.getElementById("cationcoefficient").value = "coefficient?";
		}
	});
	$('#anioncoefficient').click(function (e) {
		//alert ("hi");
		if (document.getElementById('anioncoefficient').value == 'coefficient?') {
			document.getElementById('anioncoefficient').value = "";
		}
	});
	$('#anioncoefficient').blur(function (e) {
		//alert ("hi");
		if (document.getElementById("anioncoefficient").value == "") {
			document.getElementById("anioncoefficient").value = "coefficient?";
		}
	});
	// $('#cationcharge').click(function (e) {
	// if (document.getElementById("cationcharge").value == "cation charge?") {
	// document.getElementById("cationcharge").value = "";
	// }
	// });
	// $('#cationcharge').blur(function (e) {
	// if (document.getElementById("cationcharge").value == "") {
	// document.getElementById("cationcharge").value = "cation charge?";
	// }
	// });
	// $('#anioncharge').click(function (e) {
	// if (document.getElementById("anioncharge").value == "anion charge?") {
	// document.getElementById("anioncharge").value = "";
	// }
	// });
	// $('#anioncharge').blur(function (e) {
	// if (document.getElementById("anioncharge").value == "") {
	// document.getElementById("anioncharge").value = "anion charge?";
	// }
	// });
	$('#cationcoefficient').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitButton').click();
	});
	$('#anioncoefficient').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitButton').click();
	});
	// $('#cationcharge').keypress(function (e) {
	// if (e.keyCode == 13)
	// $('#submitButton').click();
	// });
	// $('#anioncharge').keypress(function (e) {
	// if (e.keyCode == 13)
	// $('#submitButton').click();
	// });

	$(function () {
		$('#cations').change(function () {
			var selected = $('#cations').find('option:selected');
			resetAnswerProposal();
		});
	});
	$(function () {
		$('#reactionTypes').change(function () {
			var selected = $('#reactionTypes').find('option:selected');
		});
	});
	$(function () {
		$('#firstproductoptions').change(function () {
			productOneFormulaSelect = $('#firstproductoptions').find('option:selected');
			// productOneFormulaSelect = document.getElementById("firstproductoptions").options[document.getElementById("firstproductoptions").selectedIndex].innerHTML;
			// console.log(document.getElementById("firstproductoptions").options[document.getElementById("firstproductoptions").selectedIndex].innerHTML);
			resetAnswerProposal();
		});
	});
	$(function () {
		$('#secondproductoptions').change(function () {
			productTwoFormulaSelect = $('#secondproductoptions').find('option:selected');
			// productTwoFormulaSelect = document.getElementById("secondproductoptions").options[document.getElementById("secondproductoptions").selectedIndex].innerHTML;
			resetAnswerProposal();
		});
	});
	//$(function(){
	// $('#cations').change(function () {
	// resetAnswerProposal();
	// });
	// //});
	// $('#anions').change(function () {
	// resetAnswerProposal();
	// });
	// $('#cationcharge').change(function () {
	// resetAnswerProposal();
	// });
	// $('#anioncharge').change(function () {
	// resetAnswerProposal();
	// });

	$('#organicCompoundCoefficient').change(function () { //this is the 1st compound
		resetAnswerProposal();
	});
	$('#oxygenCoefficient').change(function () { //this is the 2nd compound
		resetAnswerProposal();
	});
	$('#cationcoefficient').change(function () { //this is the 1st product
		resetAnswerProposal();
	});
	$('#anioncoefficient').change(function () { //this is the 2nd product
		resetAnswerProposal();
	});

	var generateOptionsDouble = function (thisCationArray, thisAnionArray, thisCationTwoArray, thisAnionTwoArray) { //moleculeNumber is (1=reactant 1) (2=reactant 2) (3=product1) (4=product2)
		//	wrongCompound1 = getBalancedIonicCompound(cationArray, (Math.floor(Math.random() * 3) + 1), anionArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//wrongCompound2 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//wrongCompound3 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//below code generates all of the possible compounds for moleculeOne
		// alert ("ay");
		var completeArray = [];
		var completeSecondArray = [];

		for (i = 1; i < 5; i++) {
			for (j = 1; j < 5; j++) {
				if ((i != j) || (i == 1)) {
					//console.log(i + " i and j is " + j);
					var possibleCompound = getBalancedIonicCompound(thisCationArray, i, thisAnionTwoArray, j);
					var possibleSecondCompound = getBalancedIonicCompound(thisCationTwoArray, i, thisAnionArray, j);
					completeArray.push(possibleCompound[0]);
					completeSecondArray.push(possibleSecondCompound[0]);
				}
			}
		}
		$('#firstproductoptions').empty(); //change this according to what I inserted in generate questions
		$('#secondproductoptions').empty(); //change this according to what I inserted in generate questions

		// var completeArray = shuffle(completeArray); //combines and shuffles the different array sets.
		// var completeSecondArray = shuffle(completeSecondArray); //combines and shuffles the different array sets.

		for (index = 0; index < completeArray.length; index++) {
			addProductOneOption(completeArray[index]);
		}
		for (index = 0; index < completeSecondArray.length; index++) {
			addProductTwoOption(completeSecondArray[index]);
		}
	}
	var generateOptionsSingleCation = function (thisCationArray, thisAnionArray, thisCationTwoArray) { //moleculeNumber is (1=reactant 1) (2=reactant 2) (3=product1) (4=product2)
		//	wrongCompound1 = getBalancedIonicCompound(cationArray, (Math.floor(Math.random() * 3) + 1), anionArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//wrongCompound2 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//wrongCompound3 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//below code generates all of the possible compounds for moleculeOne
		var completeArray = [];
		var completeSecondArray = [];

		for (i = 1; i < 5; i++) {
			for (j = 1; j < 5; j++) {
				if ((i != j) || (i == 1)) {
					//console.log(i + " i and j is " + j);
					var possibleCompound = getBalancedIonicCompound(thisCationTwoArray, i, thisAnionArray, j);
					//	var possibleSecondCompound = getBalancedIonicCompound(thisCationTwoArray, i, thisAnionArray, j);
					completeArray.push(possibleCompound[0]);
					//completeSecondArray.push(possibleSecondCompound[0]);
				}
			}
		}
		$('#firstproductoptions').empty(); //change this according to what I inserted in generate questions
		//$('#secondproductoptions').empty(); //change this according to what I inserted in generate questions

		// var completeArray = shuffle(completeArray); //combines and shuffles the different array sets.
		// var completeSecondArray = shuffle(completeSecondArray); //combines and shuffles the different array sets.

		for (index = 0; index < completeArray.length; index++) {
			addProductOneOption(completeArray[index]);
		}
		for (index = 0; index < completeSecondArray.length; index++) {
			addProductTwoOption(completeSecondArray[index]);
		}
	}

	var generateOptionsSingleAnion = function (thisCationArray, thisAnionArray, thisAnTwoArray) { //moleculeNumber is (1=reactant 1) (2=reactant 2) (3=product1) (4=product2)
		//	wrongCompound1 = getBalancedIonicCompound(cationArray, (Math.floor(Math.random() * 3) + 1), anionArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//wrongCompound2 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//wrongCompound3 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		//below code generates all of the possible compounds for moleculeOne
		var completeArray = [];
		var completeSecondArray = [];

		for (i = 1; i < 5; i++) {
			for (j = 1; j < 5; j++) {
				if ((i != j) || (i == 1)) {
					//console.log(i + " i and j is " + j);
					var possibleCompound = getBalancedIonicCompound(thisCationArray, i, thisAnTwoArray, j);
					//	var possibleSecondCompound = getBalancedIonicCompound(thisCationTwoArray, i, thisAnionArray, j);
					completeArray.push(possibleCompound[0]);
					//completeSecondArray.push(possibleSecondCompound[0]);
				}
			}
		}
		$('#firstproductoptions').empty(); //change this according to what I inserted in generate questions
		//$('#secondproductoptions').empty(); //change this according to what I inserted in generate questions

		// var completeArray = shuffle(completeArray); //combines and shuffles the different array sets.
		// var completeSecondArray = shuffle(completeSecondArray); //combines and shuffles the different array sets.

		for (index = 0; index < completeArray.length; index++) {
			addProductOneOption(completeArray[index]);
		}
		for (index = 0; index < completeSecondArray.length; index++) {
			addProductTwoOption(completeSecondArray[index]);
		}
	}
	var addProductOneOption = function (cationOption) {
		var sel = document.getElementById("firstproductoptions"); //change this according to what I inserted in generate questions
		var opt = document.createElement('option');
		opt.innerHTML = cationOption; //change this according to what I inserted in generate questions
		//		opt.appendChild(document.createTextNode((cationOption)));
		opt.value = (cationOption); //change this according to what I inserted in generate questions
		sel.appendChild(opt);
	}
	var addProductTwoOption = function (anionOption) {
		var sel = document.getElementById("secondproductoptions"); //change this according to what I inserted in generate questions
		var opt = document.createElement('option');
		opt.innerHTML = anionOption; //change this according to what I inserted in generate questions
		//			opt.appendChild(document.createTextNode((anionOption)));
		opt.value = (anionOption); //change this according to what I inserted in generate questions
		sel.appendChild(opt);
	}
	var resetAnswerProposal = function () {
		if (questionType == "synthesis") {
			var cationcoefficient = document.getElementById("cationcoefficient").value;
			// var anioncoefficient = document.getElementById("anioncoefficient").value;
			var oxygenCoefficient = document.getElementById("oxygenCoefficient").value;
			var organicCompoundCoefficient = document.getElementById("organicCompoundCoefficient").value;

			// var cationcharge = document.getElementById("cationcharge").value;
			// var anioncharge = document.getElementById("anioncharge").value;
			// var cationName = document.getElementById("cations").options[document.getElementById("cations").selectedIndex].innerHTML;
			// //	alert (cationName+"");
			// var anionName = document.getElementById("anions").options[document.getElementById("anions").selectedIndex].innerHTML;
			// // document.getElementById("youranswer").innerHTML= document.getElementById("cations").options[document.getElementById("cations").selectedIndex].innerHTML;
			var organicCompoundCoefficientWrite = organicCompoundCoefficient;
			if (organicCompoundCoefficient == 1) {
				organicCompoundCoefficientWrite = (organicCompoundCoefficient + "").replace(/1/g, '');
			}
			var oxygenCoefficientWrite = oxygenCoefficient;
			if (oxygenCoefficient == 1) {
				oxygenCoefficientWrite = (oxygenCoefficient + "").replace(/1/g, '');
			}
			var cationcoefficientWrite = cationcoefficient;
			if (cationcoefficient == 1) {
				cationcoefficientWrite = (cationcoefficient + "").replace(/1/g, '');
			}
			// var anioncoefficientWrite = anioncoefficient;
			// if (anioncoefficient == 1) {
			// anioncoefficientWrite = (anioncoefficient + "").replace(/1/g, '');
			document.getElementById("youranswer").innerHTML = "Your proposed equation:  " + organicCompoundCoefficientWrite + reactionArray[1] + " + " + oxygenCoefficientWrite + reactionArray[3] + " -> " + cationcoefficientWrite + reactionArray[5];
		} else if (questionType == "decomposition") {
			var cationcoefficient = document.getElementById("cationcoefficient").value;
			var anioncoefficient = document.getElementById("anioncoefficient").value;
			// var oxygenCoefficient = document.getElementById("oxygenCoefficient").value;
			var organicCompoundCoefficient = document.getElementById("organicCompoundCoefficient").value;

			// var cationcharge = document.getElementById("cationcharge").value;
			// var anioncharge = document.getElementById("anioncharge").value;
			// var cationName = document.getElementById("cations").options[document.getElementById("cations").selectedIndex].innerHTML;
			// //	alert (cationName+"");
			// var anionName = document.getElementById("anions").options[document.getElementById("anions").selectedIndex].innerHTML;
			// // document.getElementById("youranswer").innerHTML= document.getElementById("cations").options[document.getElementById("cations").selectedIndex].innerHTML;
			var organicCompoundCoefficientWrite = organicCompoundCoefficient;
			if (organicCompoundCoefficient == 1) {
				organicCompoundCoefficientWrite = (organicCompoundCoefficient + "").replace(/1/g, '');
			}
			// var oxygenCoefficientWrite = oxygenCoefficient;
			// if (oxygenCoefficient == 1) {
			// oxygenCoefficientWrite = (oxygenCoefficient + "").replace(/1/g, '');
			// }
			var cationcoefficientWrite = cationcoefficient;
			if (cationcoefficient == 1) {
				cationcoefficientWrite = (cationcoefficient + "").replace(/1/g, '');
			}
			var anioncoefficientWrite = anioncoefficient;
			if (anioncoefficient == 1) {
				anioncoefficientWrite = (anioncoefficient + "").replace(/1/g, '');
			}

			document.getElementById("youranswer").innerHTML = "Your proposed equation:  " + organicCompoundCoefficientWrite + reactionArray[5] + " -> " + cationcoefficientWrite + reactionArray[1] + " + " + anioncoefficientWrite + reactionArray[3];

		} else if (questionType == "combustion") { //reset answer proposal
			var cationcoefficient = document.getElementById("cationcoefficient").value;
			var anioncoefficient = document.getElementById("anioncoefficient").value;
			var oxygenCoefficient = document.getElementById("oxygenCoefficient").value;
			var organicCompoundCoefficient = document.getElementById("organicCompoundCoefficient").value;

			// var cationcharge = document.getElementById("cationcharge").value;
			// var anioncharge = document.getElementById("anioncharge").value;
			// var cationName = document.getElementById("cations").options[document.getElementById("cations").selectedIndex].innerHTML;
			// //	alert (cationName+"");
			// var anionName = document.getElementById("anions").options[document.getElementById("anions").selectedIndex].innerHTML;
			// // document.getElementById("youranswer").innerHTML= document.getElementById("cations").options[document.getElementById("cations").selectedIndex].innerHTML;
			var organicCompoundCoefficientWrite = organicCompoundCoefficient;
			if (organicCompoundCoefficient == 1) {
				organicCompoundCoefficientWrite = (organicCompoundCoefficient + "").replace(/1/g, '');
			}
			var oxygenCoefficientWrite = oxygenCoefficient;
			if (oxygenCoefficient == 1) {
				oxygenCoefficientWrite = (oxygenCoefficient + "").replace(/1/g, '');
			}
			var cationcoefficientWrite = cationcoefficient;
			if (cationcoefficient == 1) {
				cationcoefficientWrite = (cationcoefficient + "").replace(/1/g, '');
			}
			var anioncoefficientWrite = anioncoefficient;
			if (anioncoefficient == 1) {
				anioncoefficientWrite = (anioncoefficient + "").replace(/1/g, '');
			}
			document.getElementById("youranswer").innerHTML = "Your proposed equation:  " + organicCompoundCoefficientWrite + organicCompoundName + "<sub></sub> + " + oxygenCoefficientWrite + "O<sub>2 (g)</sub>" + " -> " + cationcoefficientWrite + ("CO<sub>2</sub>").replace(/[()]/g, '') + "<sub> (g)</sub> + " + anioncoefficientWrite + ("H<sub>2</sub>O").replace(/[()]/g, '') + "<sub> (l)</sub>";

		} else if (questionType == "doubleDisplacement") { //propose answer
			var cationcoefficient = document.getElementById("cationcoefficient").value; //gets the 1st product coefficient.
			var anioncoefficient = document.getElementById("anioncoefficient").value; //gets the 2nd product coefficient
			var oxygenCoefficient = document.getElementById("oxygenCoefficient").value; //gets the 2nd reactant coefficient
			var organicCompoundCoefficient = document.getElementById("organicCompoundCoefficient").value; //gets the 1st reactant coefficient
			var organicCompoundCoefficientWrite = organicCompoundCoefficient;
			var productOneFormulaSelect = document.getElementById("firstproductoptions").options[document.getElementById("firstproductoptions").selectedIndex].innerHTML;
			// //	alert (cationName+"");
			var productTwoFormulaSelect = document.getElementById("secondproductoptions").options[document.getElementById("secondproductoptions").selectedIndex].innerHTML;
			if (organicCompoundCoefficient == 1) {
				organicCompoundCoefficientWrite = (organicCompoundCoefficient + "").replace(/1/g, '');
			}
			var oxygenCoefficientWrite = oxygenCoefficient;
			if (oxygenCoefficient == 1) {
				oxygenCoefficientWrite = (oxygenCoefficient + "").replace(/1/g, '');
			}
			var cationcoefficientWrite = cationcoefficient;
			if (cationcoefficient == 1) {
				cationcoefficientWrite = (cationcoefficient + "").replace(/1/g, '');
			}
			var anioncoefficientWrite = anioncoefficient;
			if (anioncoefficient == 1) {
				anioncoefficientWrite = (anioncoefficient + "").replace(/1/g, '');
			}
			// so far everything is the same as in combustion reactions
			proposedAnswerStatement = organicCompoundCoefficientWrite + balancedReactantOneFormulaArray[0] + " + " + oxygenCoefficientWrite + balancedReactantTwoFormulaArray[0] + " -> " + cationcoefficientWrite + productOneFormulaSelect.innerHTML + " + " + anioncoefficientWrite + productTwoFormulaSelect.innerHTML;
			document.getElementById("youranswer").innerHTML = "Your proposed equation:  " + organicCompoundCoefficientWrite + balancedReactantOneFormulaArray[0] + " + " + oxygenCoefficientWrite + balancedReactantTwoFormulaArray[0] + " -> " + cationcoefficientWrite + productOneFormulaSelect + " + " + anioncoefficientWrite + productTwoFormulaSelect;
			//this is the ionic compound answer creation.
		} else if (questionType == "singleDisplacement") { //in resetanswerproposal (not done)
			var cationcoefficient = document.getElementById("cationcoefficient").value; //gets the 1st product coefficient.
			var anioncoefficient = document.getElementById("anioncoefficient").value; //gets the 2nd product coefficient
			var oxygenCoefficient = document.getElementById("oxygenCoefficient").value; //gets the 2nd reactant coefficient
			var organicCompoundCoefficient = document.getElementById("organicCompoundCoefficient").value; //gets the 1st reactant coefficient
			var organicCompoundCoefficientWrite = organicCompoundCoefficient;
			var productOneFormulaSelect = document.getElementById("firstproductoptions").options[document.getElementById("firstproductoptions").selectedIndex].innerHTML;
			// //	alert (cationName+"");
			// var productTwoFormulaSelect = document.getElementById("secondproductoptions").options[document.getElementById("secondproductoptions").selectedIndex].innerHTML;
			if (organicCompoundCoefficient == 1) {
				organicCompoundCoefficientWrite = (organicCompoundCoefficient + "").replace(/1/g, '');
			}
			var oxygenCoefficientWrite = oxygenCoefficient;
			if (oxygenCoefficient == 1) {
				oxygenCoefficientWrite = (oxygenCoefficient + "").replace(/1/g, '');
			}
			var cationcoefficientWrite = cationcoefficient;
			if (cationcoefficient == 1) {
				cationcoefficientWrite = (cationcoefficient + "").replace(/1/g, '');
			}
			var anioncoefficientWrite = anioncoefficient;
			if (anioncoefficient == 1) {
				anioncoefficientWrite = (anioncoefficient + "").replace(/1/g, '');
			}
			// so far everything is the same as in combustion reactions
			// proposedAnswerStatement=organicCompoundCoefficientWrite + balancedReactantOneFormulaArray[0] + " + " + oxygenCoefficientWrite + balancedReactantTwoFormulaArray[0] + " -> " + cationcoefficientWrite + productOneFormulaSelect.innerHTML + " + " + anioncoefficientWrite + productTwoFormulaSelect.innerHTML;
			if (singleAnion) {
				document.getElementById("youranswer").innerHTML = "Your proposed equation:  " + organicCompoundCoefficientWrite + balancedReactantOneFormulaArray[0] + " + " + oxygenCoefficientWrite + anionTwoArray[0].replace(/[()]/g) + "&#8322" + " -> " + cationcoefficientWrite + productOneFormulaSelect + " + " + anioncoefficientWrite + anionArray[0].replace(/[()]/g) + "&#8322";
			} else {
				document.getElementById("youranswer").innerHTML = "Your proposed equation:  " + organicCompoundCoefficientWrite + balancedReactantOneFormulaArray[0] + " + " + oxygenCoefficientWrite + cationTwoArray[0] + " -> " + cationcoefficientWrite + productOneFormulaSelect + " + " + anioncoefficientWrite + cationArray[0];
			}
			//this is the ionic compound answer creation.
		}
	}

	var generateQuestionTypes = function (optionName) {
		// alert("hi");
		var sel = document.getElementById("reactionTypes");
		var opt = document.createElement('option');
		opt.innerHTML = optionName;
		//		opt.appendChild(document.createTextNode((cationOption)));
		opt.value = (optionName);
		sel.appendChild(opt);
	};

	var getQuestionTypeFromName = function () {
		var selectInfo = "" + document.getElementById("reactionTypes").options[document.getElementById("reactionTypes").selectedIndex].value;
		// alert (selectInfo);
		var questionName = "";
		if (selectInfo == "Combustion") {
			questionName = "combustion";
		} else if (selectInfo == "Double Replacement") {
			questionName = "doubleDisplacement";
		} else if (selectInfo == "Single Replacement") {
			questionName = "singleDisplacement";
		} else if (selectInfo == "Decomposition") {
			questionName = "decomposition";
		} else if (selectInfo == "Synthesis") {
			questionName = "synthesis";
		}
		return questionName;
	};

	$('#submitButton').click(function () {
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
				alert("You wrote: " + givenAnswer + ". The correct answer was " + thisAnswer);
				score = score - 1;
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				//anotherQuestion();
				document.getElementById("givenAnswer").value = "";
			}
			// thisAnswer="";
			resetQuestion();
		}
	});
	
	var resetQuestionDecimals = function (input) {
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		
		number = (Math.floor(Math.random() * 200000000 - 100000000));
		//number = -.011;
		//number = -.011;
		var finalNum = input*1; //*Math.pow(10, -1*Math.floor(Math.random()*0))
		//finalNum=Number(round(finalNum, Math.floor(Math.random()*5)))*Math.pow(10, -1*Math.floor(Math.random()*10)-3);
		finalNum = sigFigs(finalNum, 3); //Number(finalNum.toPrecision(Math.floor(Math.random() * 7) + 1)) * Math.pow(10, -1 * Math.floor(Math.random() * 10) - 3);
		thisisanswerfigs = getSigFigs(finalNum);
		// alert (finalNum);
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
		
			document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + ("Round your answer to " + numberOfDecimalsToCount + " decimal places below.");
		
		setupAnswersDecimals(finalNum, numberOfDecimalsToCount);
	};
	var setupAnswersDecimals = function (n1, n2) {
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
	var setupBalancedEquation = function () {

		if (questionType == "synthesis") {
			var organicCompoundCoefficientAnswerWrite = reactionArray[0];
			if (reactionArray[0] == 1) {
				organicCompoundCoefficientAnswerWrite = (reactionArray[0] + "").replace(/1/g, '');
			}
			var oxygenCoefficientAnswerWrite = reactionArray[2];
			if (reactionArray[2] == 1) {
				oxygenCoefficientAnswerWrite = (reactionArray[2] + "").replace(/1/g, '');
			}
			var catCoefficientAnswerWrite = reactionArray[4];
			if (reactionArray[4] == 1) {
				catCoefficientAnswerWrite = (reactionArray[4] + "").replace(/1/g, '');
			}
			// var anCoefficientAnswerWrite = reactionArray[2];
			// if (anCoefficientAnswer == 1) {
			// anCoefficientAnswerWrite = (reactionArray[2] + "").replace(/1/g, '');
			// }
			document.getElementById("correctanswer").innerHTML = "<p>" + (organicCompoundCoefficientAnswerWrite) + reactionArray[1] + " + " + (oxygenCoefficientAnswerWrite) + reactionArray[3] + " -> " + (catCoefficientAnswerWrite) + reactionArray[5];

		} else if (questionType == "decomposition") {

			var organicCompoundCoefficientAnswerWrite = 0 + reactionArray[4];
			// alert (o);
			if (reactionArray[4] == 1) {
				organicCompoundCoefficientAnswerWrite = (reactionArray[4] + "").replace(/1/g, '');
			}
			// var oxygenCoefficientAnswerWrite = oxygenCoefficientAnswer;
			// if (oxygenCoefficientAnswer == 1) {
			// oxygenCoefficientAnswerWrite = (oxygenCoefficientAnswer + "").replace(/1/g, '');
			// }
			var catCoefficientAnswerWrite = reactionArray[0];
			if (reactionArray[0] == 1) {
				catCoefficientAnswerWrite = (reactionArray[0] + "").replace(/1/g, '');
			}
			var anCoefficientAnswerWrite = reactionArray[2];
			if (reactionArray[2] == 1) {
				anCoefficientAnswerWrite = (reactionArray[2] + "").replace(/1/g, '');
			}
			document.getElementById("correctanswer").innerHTML = "<p>" + (organicCompoundCoefficientAnswerWrite) + reactionArray[5] + " -> " + (catCoefficientAnswerWrite) + reactionArray[1] + " + " + (anCoefficientAnswerWrite) + reactionArray[3];

		} else if (questionType == "combustion") { //submit
			var organicCompoundCoefficientAnswerWrite = organicCompoundCoefficientAnswer;
			if (organicCompoundCoefficientAnswer == 1) {
				organicCompoundCoefficientAnswerWrite = (organicCompoundCoefficientAnswer + "").replace(/1/g, '');
			}
			var oxygenCoefficientAnswerWrite = oxygenCoefficientAnswer;
			if (oxygenCoefficientAnswer == 1) {
				oxygenCoefficientAnswerWrite = (oxygenCoefficientAnswer + "").replace(/1/g, '');
			}
			var catCoefficientAnswerWrite = catCoefficientAnswer;
			if (catCoefficientAnswer == 1) {
				catCoefficientAnswerWrite = (catCoefficientAnswer + "").replace(/1/g, '');
			}
			var anCoefficientAnswerWrite = anCoefficientAnswer;
			if (anCoefficientAnswer == 1) {
				anCoefficientAnswerWrite = (anCoefficientAnswer + "").replace(/1/g, '');
			}
			document.getElementById("correctanswer").innerHTML = "<p>" + (organicCompoundCoefficientAnswerWrite) + organicCompoundName + "<sub></sub> + " + (oxygenCoefficientAnswerWrite) + "O<sub>2 (g)</sub>" + " -> " + (catCoefficientAnswerWrite) + ("CO<sub>2</sub>").replace(/[()]/g, '') + "<sub> (g)</sub> + " + (anCoefficientAnswerWrite) + ("H<sub>2</sub>O").replace(/[()]/g, '') + "<sub> (l)</sub>";

		} else if (questionType == "doubleDisplacement") { //submit
			var productOneFormulaAnswer = getBalancedIonicCompound(cationArray, cationCharge, anionTwoArray, anionTwoCharge);
			var productTwoFormulaAnswer = getBalancedIonicCompound(cationTwoArray, cationTwoCharge, anionArray, anionCharge);
			//alert (cationArray+ " "+ cationCharge + " " + anionTwoArray+ " "+ anionTwoCharge+ " "+ cationTwoArray+ " "+ cationTwoCharge+ " "+ anionArray+ " "+ anionCharge+ " ");
			countIonsDouble(balancedReactantOneFormulaArray, balancedReactantTwoFormulaArray, productOneFormulaAnswer, productTwoFormulaAnswer);

			var organicCompoundCoefficientAnswerWrite = organicCompoundCoefficientAnswer;
			if (organicCompoundCoefficientAnswer == 1) {
				organicCompoundCoefficientAnswerWrite = (organicCompoundCoefficientAnswer + "").replace(/1/g, '');
			}
			var oxygenCoefficientAnswerWrite = oxygenCoefficientAnswer;
			if (oxygenCoefficientAnswer == 1) {
				oxygenCoefficientAnswerWrite = (oxygenCoefficientAnswer + "").replace(/1/g, '');
			}
			var catCoefficientAnswerWrite = catCoefficientAnswer;
			if (catCoefficientAnswer == 1) {
				catCoefficientAnswerWrite = (catCoefficientAnswer + "").replace(/1/g, '');
			}
			var anCoefficientAnswerWrite = anCoefficientAnswer;
			if (anCoefficientAnswer == 1) {
				anCoefficientAnswerWrite = (anCoefficientAnswer + "").replace(/1/g, '');
			}
			// alert (oxygenCoefficientWrite+"a");
			// alert (oxygenCoefficient+"b");
			document.getElementById("correctanswer").innerHTML = "<p>" + (organicCompoundCoefficientAnswerWrite) + balancedReactantOneFormulaArray[0] + " + " + (oxygenCoefficientAnswerWrite) + balancedReactantTwoFormulaArray[0] + " -> " + (catCoefficientAnswerWrite) + productOneFormulaAnswer[0] + " + " + (anCoefficientAnswerWrite) + productTwoFormulaAnswer[0];

		} else if (questionType == "singleDisplacement") { //submit
			if (singleAnion) {
				var productOneFormulaAnswer = getBalancedIonicCompound(cationArray, cationCharge, anionTwoArray, anionTwoCharge);
			} else {
				var productOneFormulaAnswer = getBalancedIonicCompound(cationTwoArray, cationTwoCharge, anionArray, anionCharge);
			}
			if (singleAnion) {
				countIonsSingleAnion(balancedReactantOneFormulaArray, balancedReactantTwoFormulaArray, productOneFormulaAnswer);
			} else {
				countIonsSingleCation(balancedReactantOneFormulaArray, balancedReactantTwoFormulaArray, productOneFormulaAnswer);
			}
		
			var organicCompoundCoefficientAnswerWrite = organicCompoundCoefficientAnswer;
			if (organicCompoundCoefficientAnswer == 1) {
				organicCompoundCoefficientAnswerWrite = (organicCompoundCoefficientAnswer + "").replace(/1/g, '');
			}
			var oxygenCoefficientAnswerWrite = oxygenCoefficientAnswer;
			if (oxygenCoefficientAnswer == 1) {
				oxygenCoefficientAnswerWrite = (oxygenCoefficientAnswer + "").replace(/1/g, '');
			}
			var catCoefficientAnswerWrite = catCoefficientAnswer;
			if (catCoefficientAnswer == 1) {
				catCoefficientAnswerWrite = (catCoefficientAnswer + "").replace(/1/g, '');
			}
			var anCoefficientAnswerWrite = anCoefficientAnswer;
			if (anCoefficientAnswer == 1) {
				anCoefficientAnswerWrite = (anCoefficientAnswer + "").replace(/1/g, '');
			}
			// alert (oxygenCoefficientWrite+"a");
			// alert (oxygenCoefficient+"b");
			if (singleAnion) {
				document.getElementById("correctanswer").innerHTML = "<p>" + (organicCompoundCoefficientAnswerWrite) + balancedReactantOneFormulaArray[0] + " + " + (oxygenCoefficientAnswerWrite) + anionTwoArray[0].replace(/[()]/g, '') + "&#8322" + " -> " + (catCoefficientAnswerWrite) + productOneFormulaAnswer[0] + " + " + (anCoefficientAnswerWrite) + anionArray[0].replace(/[()]/g, '') + "&#8322";
			} else {
				document.getElementById("correctanswer").innerHTML = "<p>" + (organicCompoundCoefficientAnswerWrite) + balancedReactantOneFormulaArray[0] + " + " + (oxygenCoefficientAnswerWrite) + cationTwoArray[0] + " -> " + (catCoefficientAnswerWrite) + productOneFormulaAnswer[0] + " + " + (anCoefficientAnswerWrite) + cationArray[0];
			}

		}
		document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + "<p><font color= 'blue'>"+document.getElementById("correctanswer").innerHTML
			document.getElementById("correctanswer").innerHTML = "";
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

	var thisAppNum = 34;
	$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert(" You, " + whatnameis + " got a score of " + score + " on " + m + " / " + d + " / " + y + " on app " + thisAppNum);
	});

});
//	document.getElementById("oxygen").innerHTML = "<select id = 'cations' name = 'cations'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>";
// the above code is an example of how to insert a pulldown menu in the middle of another section of text.
