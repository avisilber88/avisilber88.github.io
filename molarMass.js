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

	var setupAnswers=function(balancedFormulaArray, cationArray, anionArray){ // the array coming in has [balancedFormula, catNum, anNum];

			// var moles = n1*Math.pow(10, m1)/mW;
			// var molar = moles/(n2*Math.pow(10,m2));
			// var answerString=Number(sigFigs(Number(molar),3))+"";
			
			var molarMass = cationArray[1]*balancedFormulaArray[1]+anionArray[1]*balancedFormulaArray[2];
			var w1molarMass = cationArray[1]*balancedFormulaArray[2]+anionArray[1]*balancedFormulaArray[2]+1;
			var w2molarMass = cationArray[1]*balancedFormulaArray[1]+anionArray[1]*balancedFormulaArray[1]+2;
			var w3molarMass = cationArray[1]*balancedFormulaArray[2]+anionArray[1]*balancedFormulaArray[1]+3;
			
			// balancedFormulaArray
			
			answer=Number(sigFigs(Number(molarMass),5))+" g/mol ";
			wrongAnswer1=Number(sigFigs(Number(w3molarMass),5))+" g/mol ";
			wrongAnswer2=Number(sigFigs(Number(w1molarMass),5))+" g/mol ";
			wrongAnswer3=Number(sigFigs(Number(w2molarMass),5))+" g/mol ";
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
		answers[0]=answer;
		answers[1]=wrongAnswer1;
		answers[2]=wrongAnswer2;
		answers[3]=wrongAnswer3;
		
		for (i=0; i<answers.length; i++){
			
			for (j=0; j<answers.length; j++){
				if ((j!=i)&&(answers[i]===answers[j])){
					setupAnswers(m1, m2, n1, n2, mW, fN);
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
			newName="CaCl"+("2");
		}
		else if (moleculeName=="NaCl"){
			newName="CaCl"+("2");
		}
		else if (moleculeName=="C6H12O6"){
			newName="C"+("6")+"H"+("12")+"O"+("6");
		}
		else if (moleculeName=="(NH4)3N"){
			newName="(NH"+("4")+")"+("3")+"N";
		}
		else if (moleculeName=="H2SO4"){
			newName="H"+("2")+"SO"+("4");
		}
		else if (moleculeName=="KBr"){
			newName="KBr";
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

var getRandomCation=function(charge){
var cation = ["", 0, false]; //where "" is cation and "" is molar mass;

if (charge==1){
randomunitnum=(Math.floor(Math.random()*5));
		if (randomunitnum==0){
			cation = ["Na", 22.99, false];
		}
		else if (randomunitnum==1){
			cation = ["K", 39.10, false];
		}
		else if (randomunitnum==2){
			cation = ["Li", 6.94, false];
		}
		else if (randomunitnum==3){
			cation = ["H", 1.01, false];
		}
		else if (randomunitnum==4){
			cation = ["NH<sub>4</sub>", 18.05, true];
		}
}
else if (charge==2){
randomunitnum=(Math.floor(Math.random()*5));
		if (randomunitnum==0){
			cation = ["Ca", 40.08, false];
		}
		else if (randomunitnum==1){
			cation = ["Ba", 137.33, false];
		}
		else if (randomunitnum==2){
			cation = ["Mg", 24.31, false];
		}
		else if (randomunitnum==3){
			cation = ["Fe", 55.85, false];
		}
		else if (randomunitnum==4){
			cation = ["Be", 9.01, false];
		}
}
else if (charge==3){
randomunitnum=(Math.floor(Math.random()*3));
		if (randomunitnum==0){
			cation = ["Al", 26.98, false];
		}
		else if (randomunitnum==1){
			cation = ["B", 10.81, false];
		}
		else if (randomunitnum==2){
			cation = ["Fe", 55.85, false];
		}
}
return cation;
};
var getRandomAnion=function(charge){
var anion = ["", 0, false]; //where "" is anion and "" is molar mass;

if (charge==1){
randomunitnum=(Math.floor(Math.random()*5));
		if (randomunitnum==0){
			anion = ["F", 22.99, false];
		}
		else if (randomunitnum==1){
			anion = ["Cl", 39.10, false];
		}
		else if (randomunitnum==2){
			anion = ["NO<sub>3</sub>", 6.94, true];
		}
		else if (randomunitnum==3){
			anion = ["NO<sub>2</sub>", 1.01, true];
		}
		else if (randomunitnum==4){
			anion = ["Br", 18.05, false];
		}
}
else if (charge==2){
randomunitnum=(Math.floor(Math.random()*6));
		if (randomunitnum==0){
			anion = ["O", 16.00, false];
		}
		else if (randomunitnum==1){
			anion = ["S", 32.06, false];
		}
		else if (randomunitnum==2){
			anion = ["SO<sub>4</sub>", 96.06, true];
		}
		else if (randomunitnum==3){
			anion = ["SO<sub>3</sub>", 80.06, true];
		}
		else if (randomunitnum==4){
			anion = ["CO<sub>3</sub>", 60.01, true];
		}
		else if (randomunitnum==5){
			anion = ["CrO<sub>4</sub>", 116.00, true];
		}
}
else if (charge==3){
randomunitnum=(Math.floor(Math.random()*4));
		if (randomunitnum==0){
			anion = ["N", 14.01, false];
		}
		else if (randomunitnum==1){
			anion = ["P", 30.97, false];
		}
		else if (randomunitnum==2){
			anion = ["PO<sub>4</sub>", 94.97, true];
		}
		else if (randomunitnum==3){
			anion = ["PO<sub>3</sub>", 78.97, true];
		}
}
return anion;
};

var getBalancedIonicCompound=function(cation, cationCharge, anion, anionCharge){
	var balancedFormula = "";
	var catNum = 1;
	var anNum = 1;
	var catSub = "";
	var anSub = "";
	if (cationCharge==anionCharge){
		balancedFormula = ""+cation[0]+anion[0];
		
	}
	else {
		if (cationCharge>1){
			if (checkPolyatomicIon (anion)){
				anion[0] = "("+anion[0]+")";
			}
			anSub=cationCharge;
		}
		if (anionCharge>1){
			if (checkPolyatomicIon (cation)){
				cation[0] = "("+cation[0]+")";
			}
			catSub=anionCharge;
		}
		catNum = anionCharge;
		anNum = cationCharge;
balancedFormula= ""+cation[0]+"<sub>"+catSub+"</sub>"+anion[0]+"<sub>"+anSub+"</sub>";
		}
	var balancedArray = [balancedFormula, catNum, anNum];
	return balancedArray;
	//return balancedFormula;
};

var checkPolyatomicIon=function(ion){
	var polyCheck = false;
	polyCheck = ion[2];
	
return polyCheck;
};


	var resetQuestion=function(){
		// the below code is for ion picking
		var randomunitnum3=(Math.floor(Math.random()*3)+1);
		var cationCharge = randomunitnum3;
		//alert (cationCharge);
		var cationArray = getRandomCation(cationCharge);
		var randomunitnum2=(Math.floor(Math.random()*3)+1);
		var anionCharge = randomunitnum2;
		var anionArray = getRandomAnion(anionCharge);	
		var balancedFormulaArray = getBalancedIonicCompound (cationArray, cationCharge, anionArray, anionCharge);
		
		
		
		
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		var number=(Math.floor(Math.random()*200));
		// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
		var numbertwo=(Math.floor(Math.random()*200));
		// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');

		var coeff1=((Math.random()*59.9999999-50));
		var mag1=getMagnitude(11);
		var mag2=getMagnitude(mag1);
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

// $('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " + number +" "+ units1 +" of "+ formulaName + " in " +  numbertwo+" " + units2 + " of water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");
document.getElementById("num1").innerHTML = ("What is the molar mass of " + balancedFormulaArray[0]+"?");

// $('body :not(script)').contents().filter(function() {
    // return this.nodeType === 3;
// }).replaceWith(function() {
    // return this.nodeValue.replace(/[0123456789.]/g, '<sub>$&</sub>');
// });

//$('#num1').text("What is the molarity of a "+formulaName+" solution do we get when we mix " +toOurExponential(sigFigs(coeff1, 3))+ units1 " of "+ formulaName + " in " +  toOurExponential(sigFigs(coeff1, 3)) + units2 " of //water? (" +formulaName+" has a molar mass of " + molarMass+" grams/mole)");


			// setupAnswers(mag1, mag2, number, numbertwo, molarMass, formulaName);
			
			setupAnswers(balancedFormulaArray, cationArray, anionArray); 
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