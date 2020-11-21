$(document).ready(function () {
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
	var cationArray;
	var anionArray;
	var balancedFormulaArray;
	function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
	var generateIons=function (cationArray, anionArray){
			
			$('#cations').empty();
			$('#anions').empty();
			var completeArray = shuffle(cationArray.concat(anionArray));
			for (index = 0; index < completeArray.length; index++) { 
				addCationOption(completeArray[index]);
				addAnionOption(completeArray[index]);			
			} 
		}
		
		var addCationOption=function (cationOption){
			var sel = document.getElementById("cations");
			var opt = document.createElement('option');
			opt.innerHTML=cationOption;
	//		opt.appendChild(document.createTextNode((cationOption)));
			opt.value= (cationOption);
			sel.appendChild(opt);
		}
		var addAnionOption=function (anionOption){
			var sel = document.getElementById("anions");
			var opt = document.createElement('option');
			opt.innerHTML=anionOption;
//			opt.appendChild(document.createTextNode((anionOption)));
			opt.value= (anionOption);
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
		n = Math.abs(n);
		var mult = Math.pow(10,
				sig - Math.floor(Math.log(n) / Math.LN10) - 1);
		return Math.round(n * mult) / mult;
	}

	var toOurExponential = function (n1) { //returns a string including the *10^ exoitebct


		var answerString = n1.toExponential() + "";
		//	answerString=round(answerString,3)+"";
		var eSpot = answerString.indexOf("e");
		var exponency = answerString.substring(eSpot + 1, answerString.length);
		if (exponency.substring(0, 1) === "+") {
			exponency = exponency.substring(1, exponency.length);
		}

		var nakedAnswer = answerString.substring(0, eSpot);
		var answerStringFinal = answerString.substring(0, eSpot) + "*10^" + exponency;
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
		wrongAnswer1 = wrongCompound1[0] + ""; //Number(sigFigs(Number(w3molarMass),5))+" g/mol ";
		wrongAnswer2 = wrongCompound2[0] + ""; //Number(sigFigs(Number(w1molarMass),5))+" g/mol ";
		wrongAnswer3 = wrongCompound3[0] + ""; //Number(sigFigs(Number(w2molarMass),5))+" g/mol ";
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
				cation = ["NH&#8324", 18.05, true, "Ammonium", ["NH&#8324", "N", "H"]];
			} else if (randomunitnum == 5) {
				cation = ["Ag", 63.546, false, "Silver", ["Ag"]];
			} else if (randomunitnum == 5) {
				cation = ["Au", 63.546, false, "Gold (I)", ["Au"]];
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
				cation = ["Pb", 9.01, false, "Lead (II)", ["Pb"]];
			} else if (randomunitnum == 6) {
				cation = ["Sn", 9.01, false, "Tin (II)", ["Sn"]];
			} else if (randomunitnum == 7) {
				cation = ["Zn", 9.01, false, "Zinc", ["Zn"]];
			} else if (randomunitnum == 8) {
				cation = ["Co", 9.01, false, "Cobalt (II)", ["Co"]];
			} else if (randomunitnum == 9) {
				cation = ["Cu", 9.01, false, "Copper (II)", ["Cu"]];
			}else if (randomunitnum == 10) {
				cation = ["Au", 55.85, false, "Gold (II)", ["Au"]];
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
				cation = ["Pb", 26.98, false, "Lead (IV)", ["Pb"]];
			} else if (randomunitnum == 1) {
				cation = ["Sn", 10.81, false, "Tin (IV)", ["Sn"]];
			}
		}
		return cation;
	};
	var getRandomAnion = function (charge) {
		var anion = ["", 0, false]; //where "" is anion and "" is molar mass;

		if (charge == 1) {
			randomunitnum = (Math.floor(Math.random() * 12));
			if (randomunitnum == 0) {
				anion = ["F", 22.99, false, "Fluoride", ["F"]];
			} else if (randomunitnum == 1) {
				anion = ["Cl", 39.10, false, "Chloride", ["Cl"]];
			} else if (randomunitnum == 2) {
				anion = ["NO&#8323", 6.94, true, "Nitrate", ["NO&#8323", "N", "O"]];
			} else if (randomunitnum == 3) {
				anion = ["NO&#8322", 1.01, true, "Nitrite", ["NO&#8322", "N", "O"]];
			} else if (randomunitnum == 4) {
				anion = ["Br", 18.05, false, "Bromide", ["Br"]];
			} else if (randomunitnum == 5) {
				anion = ["CN", 18.05, true, "Cyanide", ["CN", "C", "N"]];
			} else if (randomunitnum == 6) {
				anion = ["ClO", 18.05, true, "Hypochlorite", ["ClO", "Cl", "O"]];
			} else if (randomunitnum == 7) {
				anion = ["OH", 18.05, true, "Hydroxide", ["OH", "O", "H"]];
			} else if (randomunitnum == 8) {
				anion = ["ClO&#8324", 18.05, true, "Perchlorate", ["ClO&#8324", "Cl", "O"]];
			} else if (randomunitnum == 9) {
				anion = ["MnO&#8324", 18.05, true, "Permanganate", ["MnO&#8324", "Mn", "O"]];
			} else if (randomunitnum == 10) {
				anion = ["ClO&#8322", 18.05, true, "Chlorite", ["ClO&#8322", "Cl", "O"]];
			} else if (randomunitnum == 11) {
				anion = ["ClO&#8323", 18.05, true, "Chlorate", ["ClO&#8323", "Cl", "O"]];
			}
		} else if (charge == 2) {
			randomunitnum = (Math.floor(Math.random() * 8));
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
				anion = ["Cr&#8322O&#8327", 116.00, true, "Dichromate", ["Cr&#8322O&#8327", "Cr", "O"]];
			} else if (randomunitnum == 7) {
				anion = ["CO&#8323", 116.00, true, "Carbonate", ["CO&#8323", "C", "O"]];
			
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

	var getBalancedIonicCompound = function (cation, cationCharge, anion, anionCharge) {
		var balancedFormula = "";
		var catNum = 1;
		var anNum = 1;
		var catSub = "";
		var anSub = "";
		if (cationCharge == anionCharge) {
			balancedFormula = "" + cation[0] + anion[0];

		} 
	
		
		else {
			if (cationCharge > 1) {
				if ((checkPolyatomicIon(anion)) && (!anion[0].includes("("))) {
					anion[0] = "(" + anion[0] + ")";
				}
				anSub = cationCharge;
			}
			if (anionCharge > 1) {
				if ((checkPolyatomicIon(cation)) && (!cation[0].includes("("))) {
					cation[0] = "(" + cation[0] + ")";
				}
				catSub = anionCharge;
			}
			
			catNum = anionCharge;
			anNum = cationCharge;
			if ((cationCharge == 4)&&(anionCharge==2)){
				catSub = "";
				anSub = "2";
			}
			balancedFormula = "" + cation[0] + "<sub>"+catSub+"</sub>" + anion[0]+ "<sub>" + anSub+"</sub>";
		}
		var balancedArray = [balancedFormula, catNum, anNum, catSub, anSub, cationCharge, anionCharge];
		return balancedArray;
		//return balancedFormula;
	};

	var checkPolyatomicIon = function (ion) {
		var polyCheck = false;
		polyCheck = ion[2];

		return polyCheck;
	};

	var resetQuestion = function () {
				n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML ="</sub>"+ m + " / " + d + " / " + y;
		// the below code is for ion picking
		var randomunitnum3 = (Math.floor(Math.random() * 4) + 1);
		var cationCharge = randomunitnum3;
		//alert (cationCharge);
		cationArray = getRandomCation(cationCharge);
		var randomunitnum2 = (Math.floor(Math.random() * 3) + 1);
		var anionCharge = randomunitnum2;
		anionArray = getRandomAnion(anionCharge);
		balancedFormulaArray = getBalancedIonicCompound(cationArray, cationCharge, anionArray, anionCharge);
		wrongCompound1 = getBalancedIonicCompound(cationArray, (Math.floor(Math.random() * 3) + 1), anionArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		wrongCompound2 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		wrongCompound3 = getBalancedIonicCompound(anionArray, (Math.floor(Math.random() * 3) + 1), cationArray, (Math.floor(Math.random() * 3) + 1)); //gohere813
		

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
		
		document.getElementById("cation").innerHTML = "";//+cationArray[0].replace(/[()]/g, '')+"";//+ (cationCharge+"+").sup();
		document.getElementById("anion").innerHTML = "";//+anionArray[0].replace(/[()]/g, '')+"";// + (anionCharge+"-").sup();
		generateIons(cationArray[4], anionArray[4]);
	if (score>19){
		document.getElementById("num1").innerHTML = "find the coefficients and charges for the dissociation equation of "+balancedFormulaArray[0];// + ". <br>" + balancedFormulaArray[0] + "<sub>(s)</sub> ->  ___" + cationArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub> + ___ " + anionArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub>?";
		}
		else if (score >9){
		document.getElementById("num1").innerHTML = "Find the coefficients and charges for the dissociation equation of "+balancedFormulaArray[0]+".";// + ". <br>" + balancedFormulaArray[0] + "<sub>(s)</sub> ->  ___" + cationArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub> + ___ " + anionArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub>.?";
		}
		else{
		document.getElementById("num1").innerHTML = "Find the coefficients and charges for the dissociation equation of "+balancedFormulaArray[0];// + ". <br>" + balancedFormulaArray[0] + "<sub>(s)</sub> ->  ___" + cationArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub> + ___ " + anionArray[0].replace(/[()]/g, '') + "<sup>___</sup><sub>(aq)</sub>?";
		}
		// removed this because it didn't have the charges built in. $('#num1').text("What ionic compound do you get from " + cationArray[0] + cationCharge+ "+ and "+ anionArray[0]+anionCharge+"-?");

		$('#num1 :not(script)').contents().filter(function () {
			return this.nodeType === 3;
		}).replaceWith(function () {
			return this.nodeValue.replace(/[0123456789.]/g, '<sub>$&</sub>');
		});

		//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " +toOurExponential(sigFigs(coeff1, 3))+ units1 " of "+ formulaName + " in " +  toOurExponential(sigFigs(coeff1, 3)) + units2 " of //water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");

		//thisAnswer = cationArray[3] + " " + anionArray[3];
		
		catCoefficientAnswer = balancedFormulaArray[3]; 
		anCoefficientAnswer = balancedFormulaArray[4];
		catChargeAnswer = balancedFormulaArray[5]; 
		anChargeAnswer = balancedFormulaArray[6];
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
	};

	var anotherQuestion = function (answer) {
		//	var cationcoefficient = prompt("What is the name of the compound above?");
		if ((cationcoefficient != null)&&(anioncoefficient !=null)) {
			if ((cationcoefficient == catCoefficientAnswer)&&(anioncoefficient==anCoefficientAnswer)&&(anioncoefficient==anCoefficientAnswer)&&(anioncoefficient==anCoefficientAnswer)) {
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
	
	$('#cationcoefficient').click(function (e) {
	if (document.getElementById("cationcoefficient").value == "cation coefficient?"){
	document.getElementById("cationcoefficient").value = "";
	}	
	});
	$('#cationcoefficient').blur(function (e) {
	if (document.getElementById("cationcoefficient").value == ""){
	document.getElementById("cationcoefficient").value = "cation coefficient?";
	}	
	});
	$('#anioncoefficient').click(function (e) {

	if (document.getElementById("anioncoefficient").value == "anion coefficient?"){
	
	document.getElementById("anioncoefficient").value = "";
	}	
	});
	$('#anioncoefficient').blur(function (e) {
	if (document.getElementById("anioncoefficient").value == ""){
	document.getElementById("anioncoefficient").value = "anion coefficient?";
	}	
	});
	$('#cationcharge').click(function (e) {
	if (document.getElementById("cationcharge").value == "cation charge?"){
	document.getElementById("cationcharge").value = "";
	}	
	});
	$('#cationcharge').blur(function (e) {
	if (document.getElementById("cationcharge").value == ""){
	document.getElementById("cationcharge").value = "cation charge?";
	}	
	});
	$('#anioncharge').click(function (e) {
	if (document.getElementById("anioncharge").value == "anion charge?"){
	document.getElementById("anioncharge").value = "";
	}	
	});
	$('#anioncharge').blur(function (e) {
	if (document.getElementById("anioncharge").value == ""){
	document.getElementById("anioncharge").value = "anion charge?";
	}	
	});
	$('#cationcoefficient').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitButton').click();
	});
	$('#anioncoefficient').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitButton').click();
	});
	$('#cationcharge').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitButton').click();
	});
	$('#anioncharge').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitButton').click();
	});
	
	$(function(){
    $('#cations').change(function(){
       var selected = $('#cations').find('option:selected');
		resetAnswerProposal();
    });
	});

//$(function(){
    $('#cations').change(function(){
      resetAnswerProposal();
    });
	//});
	 $('#anions').change(function(){
      resetAnswerProposal();
    });
	 $('#cationcharge').change(function(){
      resetAnswerProposal();
    });
	 $('#anioncharge').change(function(){
      resetAnswerProposal();
    });
	 $('#cationcoefficient').change(function(){
      resetAnswerProposal();
    });
	 $('#anioncoefficient').change(function(){
      resetAnswerProposal();
    });
	
	var resetAnswerProposal = function (){
		var cationcoefficient = document.getElementById("cationcoefficient").value;
		var anioncoefficient = document.getElementById("anioncoefficient").value;
		var cationcharge = document.getElementById("cationcharge").value;
		var anioncharge = document.getElementById("anioncharge").value;
		var cationName = document.getElementById("cations").options[document.getElementById("cations").selectedIndex].innerHTML;
	//	alert (cationName+"");
		var anionName = document.getElementById("anions").options[document.getElementById("anions").selectedIndex].innerHTML;
      // document.getElementById("youranswer").innerHTML= document.getElementById("cations").options[document.getElementById("cations").selectedIndex].innerHTML;
		document.getElementById("youranswer").innerHTML= "Your proposed equation:  "+ balancedFormulaArray[0] + "<sub>(s)</sub> -> " + (""+cationcoefficient).replace(/1/g, '')+ cationName.replace(/[()]/g, '') + (cationcharge.replace(/\s/g, '').replace(/\+/g, '')+"+").sup()+"<sub>(aq)</sub> + " + (anioncoefficient+"").replace(/1/g, '')+anionName.replace(/[()]/g, '') + (anioncharge.replace(/\s/g, '').replace(/\-/g, '')+"-").sup()+"<sub>(aq)</sub>";
	
	}
	
	
	$('#submitButton').click(function () {
		//alert (thisAnswer);
		
			document.getElementById("correctanswer").innerHTML= "The answer to your previous question was:     "+balancedFormulaArray[0] + "<sub>(s)</sub> -> " + (""+catCoefficientAnswer).replace(/1/g, '')+ cationArray[0].replace(/[()]/g, '') + (catChargeAnswer+"+").sup()+"<sub>(aq)</sub> + " + (anCoefficientAnswer+"").replace(/1/g, '')+anionArray[0].replace(/[()]/g, '') + (anChargeAnswer+"-").sup()+"<sub>(aq)</sub>";
		var cationcoefficient = document.getElementById("cationcoefficient").value;
		var anioncoefficient = document.getElementById("anioncoefficient").value;
		var cationcharge = document.getElementById("cationcharge").value;
		var anioncharge = document.getElementById("anioncharge").value;
		var cationName = document.getElementById("cations").options[document.getElementById("cations").selectedIndex].value;
	//	alert (cationName+"");
		var anionName = document.getElementById("anions").options[document.getElementById("anions").selectedIndex].value;
		//alert ((anionName)+" "+anionArray[0]);
		if ((cationcoefficient != null)&&(anioncoefficient != null)&&(cationcharge != null)&&(anioncharge != null)&&(cationName != null)&&(anionName != null)) {
			if ((("" + cationcoefficient).toUpperCase().replace(/\s/g, '').replace(/1/g, '') == ("" + catCoefficientAnswer).toUpperCase().replace(/\s/g, ''))&&(("" + anioncoefficient).toUpperCase().replace(/\s/g, '').replace(/1/g, '') == ("" + anCoefficientAnswer).toUpperCase().replace(/\s/g, ''))&&(("" + cationcharge).toUpperCase().replace(/\s/g, '').replace(/\+/g, '') == ("" + catChargeAnswer).toUpperCase().replace(/\s/g, ''))&&(("" + anioncharge).toUpperCase().replace(/\s/g, '').replace(/\-/g, '') == ("" + anChargeAnswer).toUpperCase().replace(/\s/g, ''))&&((cationName) == (cationArray[0].replace(/[()]/g, '')))&&((anionName) == (anionArray[0].replace(/[()]/g, '')))) {
				score = score + 1;
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, (score+""));
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				document.getElementById("cationcoefficient").value = "cation coefficient?";
				document.getElementById("anioncoefficient").value = "anion coefficient?";
				document.getElementById("cationcharge").value = "cation charge?";
				document.getElementById("anioncharge").value = "anion charge?";
			} else {
				if(((""+cationcoefficient).length)==0){
				cationcoefficient=1;
				}
				if(((""+anioncoefficient).length)==0){
				anioncoefficient=1;
				}
				if(((""+catCoefficientAnswer).length)==0){
				catCoefficientAnswer=1;
				}
				if(((""+anCoefficientAnswer).length)==0){
				anCoefficientAnswer=1;
				}
				//document.getElementById("correctanswer").innerHTML= ""+balancedFormulaArray[0] + "<sub>(s)</sub> -> " + catCoefficientAnswer+ cationArray[0].replace(/[()]/g, '') + (catChargeAnswer+"+").sup()+"<sub>(aq)</sub> + " + anCoefficientAnswer+anionArray[0].replace(/[()]/g, '') + (anChargeAnswer+"-").sup()+"<sub>(aq)</sub>";
				alert ("Incorrect, compare your answer (in pink) to the correct answer (in yellow) after you press ok");
				//alert("You wrote: Cation coefficient:" + cationcoefficient + ", Cation charge:"+cationcharge+" Anion coefficient: " + anioncoefficient+", and anion Charge:"+ anioncharge+".                                    The correct answer equation will be written on the page after you click okay.                       But what you should have written in the boxes was...Cation coefficient:" + catCoefficientAnswer + ", Cation charge:"+catChargeAnswer+" Anion coefficient: " + anCoefficientAnswer+", and anion Charge:"+ anChargeAnswer+".");
				//document.getElementById("correctanswer").innerHTML= ""+balancedFormulaArray[0] + "<sub>(s)</sub> -> " + catCoefficientAnswer+ cationArray[0].replace(/[()]/g, '') + (catChargeAnswer+"+").sup()+"<sub>(aq)</sub> + " + anCoefficientAnswer+anionArray[0].replace(/[()]/g, '') + (anChargeAnswer+"-").sup()+"<sub>(aq)</sub>";
				score = score - 1;
				$('#score').text("Score = " + score);
				$('#scoremessage').text(specialMessage(score));
				//anotherQuestion();
				document.getElementById("cationcoefficient").value = "cation coefficient?";
				document.getElementById("anioncoefficient").value = "anion coefficient?";
				document.getElementById("cationcharge").value = "cation charge?";
				document.getElementById("anioncharge").value = "anion charge?";
				
			}
			resetQuestion();
		}
	});

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
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, (score+""));
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
		var thisAppNum = 21;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
		
		

});
