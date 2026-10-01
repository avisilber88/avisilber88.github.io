$(document).ready(function () {
//beginning of the things to replace
	var whatnameis = ""// prompt ("What is your name?");
	var typeOfMath = "subtractnegative";
var finalNum;
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
		n = new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	document.getElementById("date").innerHTML = "</sub>" + m + " / " + d + " / " + y;
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
	var setupAnswers=function(n1){

answerString=n1.toExponential()+"";
eSpot=answerString.indexOf("e");
exponency=answerString.substring(eSpot+1, answerString.length);
if (exponency.substring(0,1)==="+"){
exponency=exponency.substring(1,exponency.length);
}

nakedAnswer=answerString.substring(0,eSpot);
answerStringFinal=answerString.substring(0,eSpot)+"*10"+(""+exponency).sup();
			answer=answerStringFinal;
			wrongAnswer1=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup();
			wrongAnswer2=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup();
			wrongAnswer3=nakedAnswer+"*10"+((Math.floor(Math.random()*20)-10)+"").sup();
		answers = [];
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


		// $("*").removeClass('answer');
		// $("*").removeClass('wrongAnswer');
		// $("*").removeClass('wrong');
		// $("#boxa").addClass('wrongAnswer');
		// $("#boxb").addClass('wrongAnswer');
		// $("#boxc").addClass('wrongAnswer');
		// $("#boxd").addClass('wrongAnswer');
		

			// var random3 = Math.floor(Math.random()*24);
		// if (random3===0){
		// document.getElementById("bworda").innerHTML=answer;
		// document.getElementById("bwordb").innerHTML=wrongAnswer1;
		// document.getElementById("bwordc").innerHTML=wrongAnswer2;
		// document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		// $('#boxa').addClass('answer');
		// }
		// else if (random3===1){
		// document.getElementById("bworda").innerHTML=(answer);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		// $('#boxa').addClass('answer');
		// }
		// else if (random3===2){
		// document.getElementById("bworda").innerHTML=(answer);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		// $('#boxa').addClass('answer');
		// }
		// else if (random3===3){
		// document.getElementById("bworda").innerHTML=(answer);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		// $('#boxa').addClass('answer');
		// }
		// else if (random3===4){
		// document.getElementById("bworda").innerHTML=(answer);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		// $('#boxa').addClass('answer');
		// }
		// else if (random3===5){
		// document.getElementById("bworda").innerHTML=(answer);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		// $('#boxa').addClass('answer');
		// }
		// else if (random3===6){
		// document.getElementById("bwordb").innerHTML=(answer);
		// document.getElementById("bworda").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		// $('#boxb').addClass('answer');
		// }
		// else if (random3===7){
		// document.getElementById("bwordb").innerHTML=(answer);
		// document.getElementById("bworda").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		// $('#boxb').addClass('answer');
		// }
		// else if (random3===8){
		// document.getElementById("bwordb").innerHTML=(answer);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		// document.getElementById("bworda").innerHTML=(wrongAnswer3);
		// $('#boxb').addClass('answer');
		// }
		// else if (random3===9){
		// document.getElementById("bwordb").innerHTML=(answer);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		// document.getElementById("bworda").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		// $('#boxb').addClass('answer');
		// }
		// else if (random3===10){
		// document.getElementById("bwordb").innerHTML=(answer);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		// document.getElementById("bworda").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		// $('#boxb').addClass('answer');
		// }
		// else if (random3===11){
		// document.getElementById("bwordb").innerHTML=(answer);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		// document.getElementById("bworda").innerHTML=(wrongAnswer3);
		// $('#boxb').addClass('answer');
		// }
		// else if (random3===12){
		// document.getElementById("bwordc").innerHTML=(answer);
		// document.getElementById("bworda").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		// $('#boxc').addClass('answer');
		// }
		// else if (random3===13){
		// document.getElementById("bwordc").innerHTML=(answer);
		// document.getElementById("bworda").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		// $('#boxc').addClass('answer');
		// }
		// else if (random3===14){
		// document.getElementById("bwordc").innerHTML=(answer);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer2);
		// document.getElementById("bworda").innerHTML=(wrongAnswer3);
		// $('#boxc').addClass('answer');
		// }
		// else if (random3===15){
		// document.getElementById("bwordc").innerHTML=(answer);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		// document.getElementById("bworda").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer3);
		// $('#boxc').addClass('answer');
		// }
		// else if (random3===16){
		// document.getElementById("bwordc").innerHTML=(answer);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		// document.getElementById("bworda").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		// $('#boxc').addClass('answer');
		// }
		// else if (random3===17){
		// document.getElementById("bwordc").innerHTML=(answer);
		// document.getElementById("bwordd").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		// document.getElementById("bworda").innerHTML=(wrongAnswer3);
		// $('#boxc').addClass('answer');
		// }
		// else if (random3===18){
		// document.getElementById("bwordd").innerHTML=(answer);
		// document.getElementById("bworda").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		// $('#boxd').addClass('answer');
		// }
		// else if (random3===19){
		// document.getElementById("bwordd").innerHTML=(answer);
		// document.getElementById("bworda").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		// $('#boxd').addClass('answer');
		// }
		// else if (random3===20){
		// document.getElementById("bwordd").innerHTML=(answer);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		// document.getElementById("bworda").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer3);
		// $('#boxd').addClass('answer');
		// }
		// else if (random3===21){
		// document.getElementById("bwordd").innerHTML=(answer);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer2);
		// document.getElementById("bworda").innerHTML=(wrongAnswer3);
		// $('#boxd').addClass('answer');
		// }
		// else if (random3===22){
		// document.getElementById("bwordd").innerHTML=(answer);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		// document.getElementById("bworda").innerHTML=(wrongAnswer2);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer3);
		// $('#boxd').addClass('answer');
		// }
		// else if (random3===23){
		// document.getElementById("bwordd").innerHTML=(answer);
		// document.getElementById("bwordc").innerHTML=(wrongAnswer1);
		// document.getElementById("bwordb").innerHTML=(wrongAnswer2);
		// document.getElementById("bworda").innerHTML=(wrongAnswer3);
		// $('#boxd').addClass('answer');
		// }

	};
	// $('#num2').text($('#num1').val());
	
	
	var resetQuestion=function(){
		// $('#boxb').text(35);
		// $('#bwordb').text(35);
		number=(Math.floor(Math.random()*2000000000-1000000000));
		//alert (number);
	
	finalNum = number*Math.pow(10, Math.floor(Math.random()*6)-Math.floor(Math.random()*11)-6)
		finalNum=round(finalNum, Math.floor(Math.random()*8));
		
		thisAnswer=finalNum+"";
let answerStringLocal=finalNum.toExponential()+"";
let eSpotLocal=answerStringLocal.indexOf("e");
let exponencyLocal=answerStringLocal.substring(eSpotLocal+1, answerStringLocal.length);
if (exponencyLocal.substring(0,1)==="+"){
exponencyLocal=exponencyLocal.substring(1,exponencyLocal.length);
}

let nakedAnswerLocal=answerStringLocal.substring(0,eSpotLocal);
let answerStringFinalLocal=answerStringLocal.substring(0,eSpotLocal)+"*10"+(""+exponencyLocal).sup();

	if (score>19){
	document.getElementById("num1").innerHTML=("what is "+answerStringFinalLocal + " in decimal notation? ");		
}
else {
	document.getElementById("num1").innerHTML=("What is "+answerStringFinalLocal +" in decimal notation? ");		
}


			//setupAnswers(finalNum);
	};

	if(($('#num1:contains(704)')) ||($('#num1:contains("e-")')) ||($('#num1:contains("is 0*")'))|| (finalNum==0)){
		// $('#bwordb').text(35);
		resetQuestion();
		alert ("reset");
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

				alert("The question was: "+ document.getElementById("num1").innerHTML+"\n\nYou wrote: " + givenAnswer + ". The correct answer was " + thisAnswer);

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
	
	document.getElementById('givenAnswer').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
     document.getElementById('submitButton').click();
    }
	});
	// $('div').click(function(){
		// // $('#bwordb').text(answer);
		// if	($(this).hasClass('answer')){//children('p').contains(answer)){// p.text("hello"));
			// // $('#bwordb').text(answer);
			// score=score+1;
			// $('#score').text("Score = " +score);
			// $('#scoremessage').text(specialMessage(score));
			// $(this).removeClass("highlighted");
			// resetQuestion();
			// // $('#bwordb').text(35);
		// }
		// else if	($(this).hasClass('wrongAnswer')){//children('p').contains(answer)){// p.text("hello"));
			// // $('#bwordb').text(answer);
			// $(this).addClass('wrong');
			// $(this).removeClass('wrongAnswer');
			// score=score-1;
			// $('#score').text("Score = " +score);
			// $('#scoremessage').text(specialMessage(score));
			// // $('#bwordb').text(35);
		// }

		// // if (times<5){
		// // 	$('<li>').text("You are awesome, don't worry").appendTo('ul');
		// // }
		// // else if (times<10){ 
		// // $('li').remove();
		// // 	$('<li>').text("You are insecure, clicking too much, now you should be worrying... also that is beginning to hurt, stop poking me").appendTo('ul');
		// // }
		// // else if (times<11){
		// // $('<li>').text("OK, Now I am Ignoring You!").appendTo('ul');
			
		// // }

		// // times=times+1;


	// // $('p').text("hi");
	// // if ($('#btna').attr('checked',true)){
	// // 	$('#ta').text("a");
	// // }
	// // else{$('#choicea').text("");
	// // }
	// // }if ($('#btnb').attr("checked", true)){
	// // 	$('#choiceb').text("yayyb");
	// // }if ($('#btnc').attr("checked", true)){
	// // 	$('#choicec').text("yayyc");
	// // }if ($('#btnd').attr("checked", true)){
	// // 	$('#choiced').text("yayyd");
	// // 	}
	// });
		var thisAppNum = 501;
		$('#scoreButton').click(function () {
		//alert (thisAnswer);
		alert (" You, "+whatnameis+" got a score of "+score + " on "+ m + " / " + d + " / " + y +" on app " + thisAppNum);
		});
});