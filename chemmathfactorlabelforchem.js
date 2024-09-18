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
	// $('#bwordb').innerHTML=(35);
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

var toOurExponential=function(n1){


	var answerString=n1.toExponential()+"";
//	answerString=round(answerString,3)+"";
	var eSpot=answerString.indexOf("e");
	var exponency=answerString.substring(eSpot+1, answerString.length);
	if (exponency.substring(0,1)==="+"){
		exponency=exponency.substring(1,exponency.length);
	}
	

	var nakedAnswer=answerString.substring(0,eSpot);
	if (nakedAnswer.length>3){
			var nakedAnswer=nakedAnswer.substring(0,3);
			//alert (nakedAnswer+"");
		}
	var answerStringFinal=nakedAnswer+"*10"+(exponency+"").sup();
	return answerStringFinal;
}

var setupAnswers=function(n1, n2, thisunits){

//$('#scoremessage').innerHTML=(n1 +" " + n2 + " " +Number(n1)/Number(n2));
		var answerString=Number(sigFigs(Number(n1/n2),3)).toExponential()+"";

		var eSpot=answerString.indexOf("e");
		var exponency=answerString.substring(eSpot+1, answerString.length);


			
if (exponency.substring(0,1)==="+"){
			exponency=exponency.substring(1,exponency.length);
		}
			var nakedAnswer=answerString.substring(0,eSpot);
			if (nakedAnswer.length>3){
			var nakedAnswer=nakedAnswer.substring(0,3);
			//alert (nakedAnswer+"");
			}
		var answerStringFinal=nakedAnswer.substring(0,eSpot)+"*10"+(exponency+"").sup();

			//answer=toOurExponential(sigFigs((n1/n2),3))+" "+thisunits;
			answer = nakedAnswer.substring(0,eSpot)+"*10"+(exponency+"").sup() + " " + thisunits;
			wrongAnswer1=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup()+" "+thisunits;
			wrongAnswer2=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup()+" "+thisunits;
			wrongAnswer3=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup()+" "+thisunits;
		var answers = [];
		answers[0]=answer;
		answers[1]=wrongAnswer1;
		answers[2]=wrongAnswer2;
		answers[3]=wrongAnswer3;
		
		for (i=0; i<answers.length; i++){
			
			for (j=0; j<answers.length; j++){
				if ((j!=i)&&(answers[i]===answers[j])){
					setupAnswers(n1, n2, thisunits);
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
		document.getElementById("bworda").innerHTML=answer;
		document.getElementById("bwordb").innerHTML=wrongAnswer1;
		document.getElementById("bwordc").innerHTML=wrongAnswer2;
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===1){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===2){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===3){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===4){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===5){
		document.getElementById("bworda").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxa').addClass('answer');
		}
		else if (random3===6){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===7){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===8){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===9){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===10){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===11){
		document.getElementById("bwordb").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxb').addClass('answer');
		}
		else if (random3===12){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===13){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===14){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===15){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===16){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===17){
		document.getElementById("bwordc").innerHTML=(answer);
		document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxc').addClass('answer');
		}
		else if (random3===18){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===19){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bworda").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===20){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===21){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===22){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bworda").innerHTML=(wrongAnswer2);
		document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}
		else if (random3===23){
		document.getElementById("bwordd").innerHTML=(answer);
		document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		document.getElementById("bworda").innerHTML=(wrongAnswer3);
		$('#boxd').addClass('answer');
		}

	};
	// $('#num2').innerHTML=($('#num1').val());
	
	
	var getMagnitude=function(othermag){
		var thismag = othermag;
		while (thismag==othermag){
		var rannum = (Math.floor(Math.random()*8))

		if (rannum==0){
			thismag=2;
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
		//else if (rannum==1){
		//	thismag=-6;
		//}
		// else if (rannum==7){
		// 	thismag=6;
		// }
}
		return thismag;

	}

	var getUnit =function(rannum){
		var thismag=""
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
		else if (rannum==2){
			thismag="h";
		}
		return thismag;
	}

	var getRandomUnit=function(){
		unitName="";
		randomunitnum=(Math.floor(Math.random()*4));
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
		
	}

	var resetQuestion=function(){
		// $('#boxb').innerHTML=(35);
		// $('#bwordb').innerHTML=(35);
		// number=(Math.floor(Math.random()*2000000000-1000000000));
		// var finalNum = number*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNum=Number(Math.round(finalNum+'e3')+'e-3');
		// var numbertwo=(Math.floor(Math.random()*2000000000-1000000000));
		// var finalNumtwo = numbertwo*Math.pow(10, -1*Math.floor(Math.random()*11));
		// finalNumtwo=Number(Math.round(finalNumtwo+'e3')+'e-3');

		coeff1=((Math.random()*59.9999999-50));
		mag1=getMagnitude(11);
		mag2=getMagnitude(mag1);

		thisUnitType = getRandomUnit();
		units1 = getUnit(mag1)+thisUnitType;
		units2 = getUnit(mag2)+thisUnitType;



		// $('#num1').innerHTML=(toOurExponential(sigFigs(finalNum, 3)));		
		// $('#den1').innerHTML=(toOurExponential(sigFigs(finalNumtwo, 3)));
if (score>19){
	document.getElementById("num1").innerHTML=("convert "+toOurExponential(sigFigs(coeff1, 3))+" "+units1+" to "+units2);

		}
		else{
			document.getElementById("num1").innerHTML=("Convert "+toOurExponential(sigFigs(coeff1, 3))+" "+units1+" to "+units2);

		}

			setupAnswers(coeff1*Math.pow(10,mag1), Math.pow(10, mag2), units2);
	};

	if($('#num1:contains(704)')){
		// $('#bwordb').innerHTML=(35);
		resetQuestion();
	};




	// $('btna').attr('checked')=false;
	$('.ansbox').hover(function(){
		// $(this).innerHTML=("hi");
		$(this).addClass("highlighted");


		// if (((this).hasID('footer'))){
		// 	$(this).innerHTML=("hi");
		// }
	},
	function(){
		$(this).removeClass("highlighted");


	});
	$('div').click(function(){
		// $('#bwordb').innerHTML=(answer);
		if	($(this).hasClass('answer')){//children('p').contains(answer)){// p.innerHTML=("hello"));
			// $('#bwordb').innerHTML=(answer);
			score=score+1;
			
				addLevelCompleted(whatnameis, m+"/"+d+"/"+y, parseInt(score));
			document.getElementById("score").innerHTML=("Score = " +score);
			$('#scoremessage').innerHTML=(specialMessage(score));
			$(this).removeClass("highlighted");
			resetQuestion();
			// $('#bwordb').innerHTML=(35);
		}
		else if	($(this).hasClass('wrongAnswer')){//children('p').contains(answer)){// p.innerHTML=("hello"));
			// $('#bwordb').innerHTML=(answer);
			$(this).addClass('wrong');
			$(this).removeClass('wrongAnswer');
			score=score-1;
			document.getElementById("score").innerHTML=("Score = " +score);
			$('#scoremessage').innerHTML=(specialMessage(score));
			// $('#bwordb').innerHTML=(35);
		}

		// if (times<5){
		// 	$('<li>').innerHTML=("You are awesome, don't worry").appendTo('ul');
		// }
		// else if (times<10){ 
		// $('li').remove();
		// 	$('<li>').innerHTML=("You are insecure, clicking too much, now you should be worrying... also that is beginning to hurt, stop poking me").appendTo('ul');
		// }
		// else if (times<11){
		// $('<li>').innerHTML=("OK, Now I am Ignoring You!").appendTo('ul');
			
		// }

		// times=times+1;


	// $('p').innerHTML=("hi");
	// if ($('#btna').attr('checked',true)){
	// 	$('#ta').innerHTML=("a");
	// }
	// else{$('#choicea').innerHTML=("");
	// }
	// }if ($('#btnb').attr("checked", true)){
	// 	$('#choiceb').innerHTML=("yayyb");
	// }if ($('#btnc').attr("checked", true)){
	// 	$('#choicec').innerHTML=("yayyc");
	// }if ($('#btnd').attr("checked", true)){
	// 	$('#choiced').innerHTML=("yayyd");
	// 	}
	});
		var thisAppNum = 907;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
});