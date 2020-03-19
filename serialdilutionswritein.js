$(document).ready(function(){
		n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML ="</sub>"+ m + " / " + d + " / " + y;		

	var whatnameis = prompt ("What is your name?");
	document.getElementById("nameis").innerHTML = whatnameis;
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
	var coeff1;
	var mag1;
	var coeff2;
	var mag2;
	var numberOfDecimalsToCount;
	var thisisanswer;
	var thisisanswerfigs;
	var thisisdiff
	var finalNum
	var thisAnswer;
	var givenAnswer;
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

	var setupAnswers=function(m1, m2, n1, n2, mW, fN){

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

			var moles = n1*Math.pow(10, m1)/mW;
			var molar = moles/(n2*Math.pow(10,m2));
			var answerString=Number(sigFigs(Number(molar),3))+"";
			answer=answerString+" M ";
			wrongAnswer1=Number(sigFigs(Number(moles),3))+" M ";
			wrongAnswer2=Number(sigFigs(Number(1/moles),3))+" M ";
			wrongAnswer3=Number(sigFigs(Number(1/molar),3))+" M ";
			var serialDilution = Math.pow(n2, n1);
			
			// var moles = n1*Math.pow(10, m1)/mW;
			// var molar = moles/(n2*Math.pow(10,m2));
			// var answerString=Number(sigFigs(Number(molar),3))+"";
			// answer=answerString+" M " + fN + " solution";
			// wrongAnswer1=Number(sigFigs(Number(moles),3))+" M " + fN + " solution";
			// wrongAnswer2=Number(sigFigs(Number(1/moles),3))+" M " + fN +" solution";
			// wrongAnswer3=Number(sigFigs(Number(1/molar),3))+" M " + fN + " solution";
			
	resetQuestionDecimals(Number(serialDilution));
	};
	
	var resetQuestionDecimals = function (input) {
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		number = (Math.floor(Math.random() * 200000000 - 100000000));
		//number = -.011;
		//number = -.011;
		finalNum = input; //*Math.pow(10, -1*Math.floor(Math.random()*0))
		//finalNum=Number(round(finalNum, Math.floor(Math.random()*5)))*Math.pow(10, -1*Math.floor(Math.random()*10)-3);
		//finalNum = sigFigs(finalNum, 4); //Number(finalNum.toPrecision(Math.floor(Math.random() * 7) + 1)) * Math.pow(10, -1 * Math.floor(Math.random() * 10) - 3);
		//alert (finalNum);
		////thisisanswerfigs = getSigFigs(finalNum);
		//thisisanswer = getSigDigits(finalNum);
		//thisisdiff = thisisanswer - thisisanswerfigs;
		// if (thisisdiff < 0) {
			// thisisdiff = 0;
		// } else {
			// thisisanswer = thisisanswerfigs;
		// }
	//	numberOfDecimalsToCount = (Math.floor(Math.random() * thisisanswer)) + thisisdiff;
		//	alert (finalNum+" has "+thisisanswer + " and " + numberOfDecimalsToCount);
		// if ((numberOfDecimalsToCount==null)||(numberOfDecimalsToCount==0)){
		// resetQuestion();
		// }
		
		// NOTE THE LINE BELOW IS THE ONE THAT ADDED ON THE DECIMAL STUFF BEFORE TO THE QUESTION
		//	document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + (" to " + numberOfDecimalsToCount + " decimal places below.");
		
		setupAnswersDecimals(finalNum, 0);//numberOfDecimalsToCount);
	};
	var setupAnswersDecimals = function (n1, n2) {
		// 
				thisAnswer = "1/"+n1 + "";
				//alert(thisAnswer);
				//answer=getSigFigs(n1);
				//alert (n1 + " who has " + numSigs1);
			
		

	};
	// $('#num2').text($('#num1').val());
	
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
	var getMagnitude=function(othermag){
		var thismag = othermag;
		while (thismag==othermag){
		var rannum = (Math.floor(Math.random()*8));

		if (rannum==0){
			thismag=-9;
		}
		else if (rannum==1){
			thismag=-6;
		}
		else if (rannum==2){
			thismag=-3;
		}
		else if (rannum==3){
			thismag=-2;
		}
		else if (rannum==4){
			thismag=-1;
		}
		else if (rannum==5){
			thismag=0;
		}
		else if (rannum==6){
			thismag=3;
		}
		// else if (rannum==7){
		// 	thismag=6;
		// }
}
		return thismag;

	};

	var getUnit =function(rannum){
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

	var getRandomMolecule=function(){
		var moleculeName="";
		randomunitnum=(Math.floor(Math.random()*6));
		if (randomunitnum==0){
			moleculeName="CaCl2";
		}
		else if (randomunitnum==1){
			moleculeName="NaCl";
		}
		else if (randomunitnum==2){
			moleculeName="C6H12O6";
		}
		else if (randomunitnum==3){
			moleculeName="(NH4)3N";
		}
		else if (randomunitnum==4){
			moleculeName="H2SO4";
		}
		else if (randomunitnum==5){
			moleculeName="KBr";
		}
		return moleculeName;
		
	};
	var getMolarMassText=function(unitName){
		var mW="";
		if (unitName=="CaCl2"){
			mW=110.98;
		}
		else if (unitName=="NaCl"){
			mW=58.44;
		}
		else if (unitName=="C6H12O6"){
			mW=180.16;
		}
		else if (unitName=="(NH4)3N"){
			mW=68.16;
		}
		else if (unitName=="H2SO4"){
			mW=98.08;
		} 
		else if (unitName=="KBr"){
			mW=119.00;
		}
		return mW;	
	};
  
	var getRandomUnit=function(){
		var unitName="";
		randomunitnum=(Math.floor(Math.random()*6));
		if (randomunitnum==0){
			unitName="L";
		}
		else if (randomunitnum==1){
			unitName="g";
		}
		else if (randomunitnum==2){
			unitName="M";
		}
		else if (randomunitnum==3){
			unitName="m";
		}
		else if (randomunitnum==4){
			unitName="mol";
		}
		else if (randomunitnum==5){
			unitName="atm";
		}
		return unitName;
		
	};

var getCorrectChemicalFormula=function(moleculeName){
		var newName="";
		//randomunitnum=(Math.floor(Math.random()*6));
		if (moleculeName=="CaCl2"){
			newName="CaCl"+("2").sub();
		}
		else if (moleculeName=="NaCl"){
			newName="CaCl"+("2").sub();
		}
		else if (moleculeName=="C6H12O6"){
			newName="C"+("6").sub()+"H"+("12").sub()+"O"+("6").sub();
		}
		else if (moleculeName=="(NH4)3N"){
			newName="(NH"+("4").sub()+")"+("3").sub()+"N";
		}
		else if (moleculeName=="H2SO4"){
			newName="H"+("2").sub()+"SO"+("4").sub();
		}
		else if (moleculeName=="KBr"){
			newName="KBr";
		}
		return newName;
		
				var newName="";
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


	var resetQuestion=function(){
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		var number=(Math.floor(Math.random()*10))+1; //number of steps.
		// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
		var numbertwo=(Math.floor(Math.random()*10))+1; //number of folds..
		// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');
		var numberThree =(Math.floor(Math.random()*100))+1;
		var coeff1=((Math.random()*59.9999999-50));
		var mag1=getMagnitude(11);
		var mag2=getMagnitude(mag1);
		//var mag1=0;
		//var mag2=0;
		var solute = getRandomMolecule();
		var molarMass = getMolarMassText(solute);
		var formulaName = getCorrectChemicalFormula(solute);
// the below text would have generated a random unit type.
		//thisUnitType = getRandomUnit();
		
		
		var units1 = getUnit(mag1)+"g";
		var units2 = getUnit(mag2)+"L";
		//units1 = number+"grams";
		//units2 = numbertwo+"Liters";
//		var units3 = getMolaraMassText(getRandomMolecule());

	
		// $('#num1').text(toOurExponential(sigFigs(finalNum, 3)));		
		// $('#den1').text(toOurExponential(sigFigs(finalNumtwo, 3)));
if (score>19){
document.getElementById("num1").innerHTML = "your supervisor provides you with a "+numberThree+" "+units1+"/"+units2+" of " + formulaName + " solution, and asks you to make a "+number+"-step "+numbertwo+"-fold dilution ("+numbertwo+"<sup>-1</sup> at each step). <br><br> After you have performed the "+number+"-step "+numbertwo+"-fold dilution ("+numbertwo+"<sup>-1</sup> at each step) as requested, what is the dilution factor at the final step (step "+number+")? <br>(make sure to frame it as a fraction ex: '1/4')";
}
else {
	
document.getElementById("num1").innerHTML = "Your supervisor provides you with a "+numberThree+" "+units1+"/"+units2+" of " + formulaName + " solution, and asks you to make a "+number+"-step "+numbertwo+"-fold dilution ("+numbertwo+"<sup>-1</sup> at each step). <br><br> After you have performed the "+number+"-step "+numbertwo+"-fold dilution ("+numbertwo+"<sup>-1</sup> at each step) as requested, what is the dilution factor at the final step (step "+number+")? <br>(make sure to frame it as a fraction ex: '1/4')";
}
//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");

// $('body :not(script)').contents().filter(function() {
    // return this.nodeType === 3;
// }).replaceWith(function() {
    // return this.nodeValue.replace(/[0123456789]/g, '<sub>$&</sub>');
// });

//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " +toOurExponential(sigFigs(coeff1, 3))+ units1 " of "+ formulaName + " in " +  toOurExponential(sigFigs(coeff1, 3)) + units2 " of //water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");


			setupAnswers(mag1, mag2, number, numbertwo, molarMass, formulaName);
	};

	if($('#num1:contains(704)')){
		// $('#bwordb').text(35);
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
		var thisAppNum = 10;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
});