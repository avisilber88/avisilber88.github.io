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
	var coeff1;
	var mag1;
	var coeff2;
	var mag2;
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

function sigFigs(n, sig) {
	if (n> Math.pow(10, sig)){
		return toOurExponential(n);
	}
	else{
n=Math.abs(n);
    var mult = Math.pow(10,
        sig - Math.floor(Math.log(n) / Math.LN10) - 1);
		//alert ("n is " +n + " sig is " + sig);

    return Math.round(n * mult) / mult;
	}
} 
//sigfigspot

var toOurExponential=function(n1){ //returns a string including the *10^ exoitebct


	var answerString=n1.toExponential()+"";
//	answerString=round(answerString,3)+"";
	var eSpot=answerString.indexOf("e");
	
	var exponency=answerString.substring(eSpot+1, answerString.length);
	if (exponency.substring(0,1)==="+"){
		exponency=exponency.substring(1,exponency.length);
	}
	if (eSpot>5){
	var eSpot=5;
}
	var nakedAnswer=answerString.substring(0,eSpot);
	
	var longerAnswer=nakedAnswer;
	nakedAnswer=Number(nakedAnswer);
	nakedAnswer=nakedAnswer.toFixed(2);
	var answerStringFinal=nakedAnswer+"*10^"+exponency;
	//alert (answerStringFinal + " " + exponency + " " + nakedAnswer + " " + eSpot + "longer "+longerAnswer);
	return answerStringFinal;
};

	var setupAnswers=function(m1, m2, m3, m4, n1, n2, n3, ct, fN){

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
		//	var soluteQuantity = "solutePlaceHolder"
		
		//n1 is C1, n2 is V2, n3 is C2... m1 goes with n1, m2 goes with n3, m3 goes with n2, and m4 goes with unknown.
			//var soluteUnit = "soluteUnitPlaceHolder"
			var C1 = n1*Math.pow(10, m1);
			var V2 = n2*Math.pow(10, m3);
			var C2 = n3*Math.pow(10, m2);
			//var concentrationQuantity = moles/(n2*Math.pow(10,m2));
			var deal=1;
			if (ct=="%"){
				deal = 10;
			}
			var molar = ((V2)*C2*deal)/Math.pow(10, m4);
			var moles =molar*Math.pow(10, m4)
			if (m4==0){
				moles=molar*Math.pow(10, m3);
			}
			var answerString=(sigFigs(Number(molar),3))+"";
			answer=answerString+" "+getUnit(m4) + "g";
			wrongAnswer1=(sigFigs(Number(moles),3))+" "+getUnit(m4) + "g";
			wrongAnswer2=(sigFigs(Number(1/moles),3))+" "+getUnit(m4) + "g";
			wrongAnswer3=(sigFigs(Number(1/molar),3))+" "+getUnit(m4) + "g";
			
			
			// var moles = n1*Math.pow(10, m1)/mW;
			// var molar = moles/(n2*Math.pow(10,m2));
			// var answerString=Number(sigFigs(Number(molar),3))+"";
			// answer=answerString+" M " + fN + " solution";
			// wrongAnswer1=Number(sigFigs(Number(moles),3))+" M " + fN + " solution";
			// wrongAnswer2=Number(sigFigs(Number(1/moles),3))+" M " + fN +" solution";
			// wrongAnswer3=Number(sigFigs(Number(1/molar),3))+" M " + fN + " solution";
			
		var answers = [];
		answers[0]=answer;
		answers[1]=wrongAnswer1;
		answers[2]=wrongAnswer2;
		answers[3]=wrongAnswer3;
		
		for (i=0; i<answers.length; i++){
			
			for (j=0; j<answers.length; j++){
				if ((j!=i)&&(answers[i]===answers[j])){
					setupAnswers(m1, m2, m3, m4, n1, n2, n3, ct, fN);
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

	};
	// $('#num2').text($('#num1').val());
	
	
	var getMagnitude=function(othermag){
		var thismag = othermag;
		while (thismag==othermag){
			var rannum = (Math.floor(Math.random()*3));
			if (rannum==0){
				thismag=-6
			}
			else if (rannum==1){
				thismag=-3
			}
			else if (rannum==2){
				thismag=-0
			}
			
		// var rannum = (Math.floor(Math.random()*8));

		// if (rannum==0){
			// thismag=-9;
		// }
		// else if (rannum==1){
			// thismag=-6;
		// }
		// else if (rannum==2){
			// thismag=-3;
		// }
		// else if (rannum==3){
			// thismag=-2;
		// }
		// else if (rannum==4){
			// thismag=-1;
		// }
		// else if (rannum==5){
			// thismag=0;
		// }
		// else if (rannum==6){
			// thismag=3;
		// }
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
	
	var getRandomConcentrationType=function(){
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
		var number=(Math.floor(Math.random()*200));
		// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
		var numbertwo=(Math.floor(Math.random()*200));
		var numberThree=(Math.floor(Math.random()*200));
		// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');

		var coeff1=((Math.random()*59.9999999-50));
		var mag1=getMagnitude(11);
		var mag2=getMagnitude(mag1);
		var mag3=getMagnitude(11);
		var mag4=getMagnitude(mag3);
		
		var solute = getRandomMolecule();
		var molarMass = getMolarMassText(solute);
		var formulaName = getCorrectChemicalFormula(solute);
// the below text would have generated a random unit type.
		//thisUnitType = getRandomUnit();
		
		var conctype = getRandomConcentrationType();
		if (conctype != "M"){
			mag1=0;
			mag2=0;
		}
			
			
		var units1 = getUnit(mag1)+conctype;
		var units2 = getUnit(mag2)+conctype;
		var units3 = getUnit(mag3)+"L";
		var units4 = getUnit(mag4) + "g";
		//units1 = number+"grams";
		//units2 = numbertwo+"Liters";
//		var units3 = getMolaraMassText(getRandomMolecule());


		// $('#num1').text(toOurExponential(sigFigs(finalNum, 3)));		
		// $('#den1').text(toOurExponential(sigFigs(finalNumtwo, 3)));
//document.getElementById("num1").innerHTML = "What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)";
var questionType = Math.floor(Math.random()*1)+1;
//alert (questionType);
switch (questionType) {
	case 1:
		document.getElementById("num1").innerHTML = "Calculate the mass in " + units4 + " required to make "+numbertwo+""+units3+" of a "+numberThree + ""+ units2 + " solution.";
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


			setupAnswers(mag1, mag2, mag3, mag4, number, numbertwo, numberThree, conctype, formulaName);
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
});