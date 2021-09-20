
var loadDatabase = [];
var db;
var loginMessageShown = true;
$(document).ready(init);
var ourLevelNumber;
var ourDate="never";
// sign-in anonymously
var auth = function () {
	console.log("hello");
    // alert ("auth");
	let email="nwhschemscores@gmail.com";
	let password="nwhschem";
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (result) {
		// console.log("hi");
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
// auth and setup event handlers
var init = function () {
    auth();

    // $('#testthisish').click();
};
auth();
		
		

$('#student').click(function () {
	
nameis=prompt("name?");
levelis=prompt("app #?");
		console.log("yo");
		whoItIsUsingThis = nameis + "";
		console.log(loadDatabase.length);
        //theirEmail = emailis + "";
       // document.getElementById('login-button').innerHTML = whoItIsUsingThis + " (Logged in), (Click to login as someone else)"
            // document.getElementById('welcomefam').hidden=false;
            // document.getElementById('welcomefamprelogin').hidden=true;

            // var emailis= prompt ('what you sent fool?');
            // var nameis= prompt ('what you called fool?');
            //document.getElementById('welcomefam').innerHTML = 'Welcome to Harmony Sense, ' + nameis + '!<br><br>Select your level from above, or select freestyle to open up all of the options and settings (how it used to look before).';
       let levelNumber = 0;
	   
        // alert (loadDatabase.length);
        // for (var loadlistplace = 0; loadlistplace < loadDatabase.length; loadlistplace++) {
                    //console.log ("hi")// we got in here
					console.log(JSON.stringify(levelis));
					// console.log(db.collection("chemtest").where("name", "==", JSON.stringify(whoItIsUsingThis)).where("level","==",levelis).orderBy("score", "desc").limit(1)[0].get().data.score);
					db.collection("chemscores").where("name", "==", whoItIsUsingThis).where("level","==", Number(levelis)).orderBy("score", "desc").limit(1).get().then(function(querySnapshot) {
					// db.collection("chemscores").get().then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
            //  
			
			//doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
			
			if (doc.exists) {
					//console.log ("hi")// we got in here
                    var data = doc.data();
					// var data2 = {
            // date: dateis,
            // name: whatnameis,
            // score: levelcomplete,
			// level: thisAppNum
        // }

                    // console.warn(data.email);
                    // console.warn(data.name);
					if (levelis==data.level){
						//alert ("YO");
				   }
					
                    // if (((JSON.stringify(whoItIsUsingThis) === JSON.stringify(data.name)))&&(levelis==data.level)) {
                        //console.log(data.levelcomplete);
						let blob = Number(data.score) + 0;
						//console.log(blob);
                        // console.log("you have the score " + blob + " " + levelNumber);
                        try {
                            if (blob > levelNumber) {
								
                                levelNumber = blob + 0;
                                // alert (levelNumber);
								// console.log(data.date.seconds);
								ourDate = new Date(data.date.toDate());
								y = ourDate.getFullYear();
m = ourDate.getMonth() + 1;
d = ourDate.getDate();
ourDate=m + " / " + d + " / " + y;	
// console.log(theDate);	

                            }

                        } catch (e) {}

                    // }
					console.log(levelNumber);
                    ourLevelNumber = levelNumber + 0;
                    //updateTheLevel(levelNumber);
					
alert (Number(ourLevelNumber) +" on " + (ourDate));
                } else {
                    console.error("No such record");
                }
				
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
					
					
					// alert ("hi");
					// .where("level","==",levelis)
					// //.orderBy("score", "desc").limit(1)
                   // if (doc.exists) {
					// //console.log ("hi")// we got in here
                    // var data = doc.data();
                    // // console.warn(data.email);
                    // // console.warn(data.name);
					// if (levelis==data.level){
						// //alert ("YO");
				   // }
					
                    // // if (((JSON.stringify(whoItIsUsingThis) === JSON.stringify(data.name)))&&(levelis==data.level)) {
                        // //console.log(data.levelcomplete);
						// let blob = Number(data.score) + 0;
						// //console.log(blob);
                        // // console.log("you have the score " + blob + " " + levelNumber);
                        // try {
                            // if (blob > levelNumber) {
								
                                // levelNumber = blob + 0;
                                // // alert (levelNumber);
								// ourDate = data.date;
								
                            // }

                        // } catch (e) {}

                    // // }
					// console.log(levelNumber);
                    // ourLevelNumber = levelNumber + 0;
                    // //updateTheLevel(levelNumber);
                // } else {
                    // console.error("No such record");
                // }
            // }).catch(function (error) {
                // console.error(error);
                // console.error("failed to read contact");
            // });

        // }
		
});
$('#studentandscore').click(function () {
	
nameis=prompt("name?");
levelis=prompt("app #?");
scoreis=prompt("score #?");
		console.log("yo");
		whoItIsUsingThis = nameis + "";
		console.log(loadDatabase.length);
        //theirEmail = emailis + "";
       // document.getElementById('login-button').innerHTML = whoItIsUsingThis + " (Logged in), (Click to login as someone else)"
            // document.getElementById('welcomefam').hidden=false;
            // document.getElementById('welcomefamprelogin').hidden=true;

            // var emailis= prompt ('what you sent fool?');
            // var nameis= prompt ('what you called fool?');
            //document.getElementById('welcomefam').innerHTML = 'Welcome to Harmony Sense, ' + nameis + '!<br><br>Select your level from above, or select freestyle to open up all of the options and settings (how it used to look before).';
       let levelNumber = 0;
	   
        // alert (loadDatabase.length);
        // for (var loadlistplace = 0; loadlistplace < loadDatabase.length; loadlistplace++) {
                    //console.log ("hi")// we got in here
					console.log(JSON.stringify(levelis));
					// console.log(db.collection("chemtest").where("name", "==", JSON.stringify(whoItIsUsingThis)).where("level","==",levelis).orderBy("score", "desc").limit(1)[0].get().data.score);
					db.collection("chemscores").where("name", "==", whoItIsUsingThis).where("level","==", Number(levelis)).where("score","==", Number(scoreis)).orderBy("date", "desc").limit(1).get().then(function(querySnapshot) {
					// db.collection("chemscores").get().then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
            //  
			
			//doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
			
			if (doc.exists) {
					//console.log ("hi")// we got in here
                    var data = doc.data();
					// var data2 = {
            // date: dateis,
            // name: whatnameis,
            // score: levelcomplete,
			// level: thisAppNum
        // }

                    // console.warn(data.email);
                    // console.warn(data.name);
					if (levelis==data.level){
						//alert ("YO");
				   }
					
                    // if (((JSON.stringify(whoItIsUsingThis) === JSON.stringify(data.name)))&&(levelis==data.level)) {
                        //console.log(data.levelcomplete);
						let blob = Number(data.score) + 0;
						//console.log(blob);
                        // console.log("you have the score " + blob + " " + levelNumber);
                        try {
                            if (blob > levelNumber) {
								
                                levelNumber = blob + 0;
                                // alert (levelNumber);
								ourDate = new Date(data.date.toDate());
								y = ourDate.getFullYear();
								m = ourDate.getMonth() + 1;
								d = ourDate.getDate();
								ourDate=m + " / " + d + " / " + y;	
                            }

                        } catch (e) {}

                    // }
					console.log(levelNumber);
                    ourLevelNumber = levelNumber + 0;
                    //updateTheLevel(levelNumber);
                } else {
                    console.error("No such record");
                }
				
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
					
					
					// alert ("hi");
					// .where("level","==",levelis)
					// //.orderBy("score", "desc").limit(1)
                   // if (doc.exists) {
					// //console.log ("hi")// we got in here
                    // var data = doc.data();
                    // // console.warn(data.email);
                    // // console.warn(data.name);
					// if (levelis==data.level){
						// //alert ("YO");
				   // }
					
                    // // if (((JSON.stringify(whoItIsUsingThis) === JSON.stringify(data.name)))&&(levelis==data.level)) {
                        // //console.log(data.levelcomplete);
						// let blob = Number(data.score) + 0;
						// //console.log(blob);
                        // // console.log("you have the score " + blob + " " + levelNumber);
                        // try {
                            // if (blob > levelNumber) {
								
                                // levelNumber = blob + 0;
                                // // alert (levelNumber);
								// ourDate = data.date;
								
                            // }

                        // } catch (e) {}

                    // // }
					// console.log(levelNumber);
                    // ourLevelNumber = levelNumber + 0;
                    // //updateTheLevel(levelNumber);
                // } else {
                    // console.error("No such record");
                // }
            // }).catch(function (error) {
                // console.error(error);
                // console.error("failed to read contact");
            // });

        // }
		
});

$('#studentanddate').click(function () {
	
nameis=prompt("name?");
levelis=prompt("app #?");
dateis=prompt("date as shown on app? (ex: 12/18/2020)");

dateis=dateis.replace(/\s/g, '');

dateis=firebase.firestore.Timestamp.fromDate(new Date(dateis)) //THIS IS THE ONE THAT WE WILL UNCOMMENT IF THE TRANSITION WORKED
		console.log("yo");
		whoItIsUsingThis = nameis + "";
		console.log(loadDatabase.length);
        //theirEmail = emailis + "";
       // document.getElementById('login-button').innerHTML = whoItIsUsingThis + " (Logged in), (Click to login as someone else)"
            // document.getElementById('welcomefam').hidden=false;
            // document.getElementById('welcomefamprelogin').hidden=true;

            // var emailis= prompt ('what you sent fool?');
            // var nameis= prompt ('what you called fool?');
            //document.getElementById('welcomefam').innerHTML = 'Welcome to Harmony Sense, ' + nameis + '!<br><br>Select your level from above, or select freestyle to open up all of the options and settings (how it used to look before).';
       let levelNumber = 0;
	   
        // alert (loadDatabase.length);
        // for (var loadlistplace = 0; loadlistplace < loadDatabase.length; loadlistplace++) {
                    //console.log ("hi")// we got in here
					console.log(JSON.stringify(levelis));
					// console.log(db.collection("chemtest").where("name", "==", JSON.stringify(whoItIsUsingThis)).where("level","==",levelis).orderBy("score", "desc").limit(1)[0].get().data.score);
					db.collection("chemscores").where("name", "==", whoItIsUsingThis).where("level","==", Number(levelis)).where("date","==", dateis).orderBy("score", "desc").limit(1).get().then(function(querySnapshot) {
					// db.collection("chemscores").get().then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
            //  
			
			//doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
			
			if (doc.exists) {
					//console.log ("hi")// we got in here
                    var data = doc.data();
					// var data2 = {
            // date: dateis,
            // name: whatnameis,
            // score: levelcomplete,
			// level: thisAppNum
        // }

                    // console.warn(data.email);
                    // console.warn(data.name);
					if (levelis==data.level){
						//alert ("YO");
				   }
					
                    // if (((JSON.stringify(whoItIsUsingThis) === JSON.stringify(data.name)))&&(levelis==data.level)) {
                        //console.log(data.levelcomplete);
						let blob = Number(data.score) + 0;
						//console.log(blob);
                        // console.log("you have the score " + blob + " " + levelNumber);
                        try {
                            if (blob > levelNumber) {
								
                                levelNumber = blob + 0;
                                // alert (levelNumber);
								ourDate = new Date(data.date.toDate());
								y = ourDate.getFullYear();
								m = ourDate.getMonth() + 1;
								d = ourDate.getDate();
								ourDate=m + " / " + d + " / " + y;	
								
                            }

                        } catch (e) {}

                    // }
					console.log(levelNumber);
                    ourLevelNumber = levelNumber + 0;
                    //updateTheLevel(levelNumber);
                } else {
                    console.error("No such record");
                }
				
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
					
					
					// alert ("hi");
					// .where("level","==",levelis)
					// //.orderBy("score", "desc").limit(1)
                   // if (doc.exists) {
					// //console.log ("hi")// we got in here
                    // var data = doc.data();
                    // // console.warn(data.email);
                    // // console.warn(data.name);
					// if (levelis==data.level){
						// //alert ("YO");
				   // }
					
                    // // if (((JSON.stringify(whoItIsUsingThis) === JSON.stringify(data.name)))&&(levelis==data.level)) {
                        // //console.log(data.levelcomplete);
						// let blob = Number(data.score) + 0;
						// //console.log(blob);
                        // // console.log("you have the score " + blob + " " + levelNumber);
                        // try {
                            // if (blob > levelNumber) {
								
                                // levelNumber = blob + 0;
                                // // alert (levelNumber);
								// ourDate = data.date;
								
                            // }

                        // } catch (e) {}

                    // // }
					// console.log(levelNumber);
                    // ourLevelNumber = levelNumber + 0;
                    // //updateTheLevel(levelNumber);
                // } else {
                    // console.error("No such record");
                // }
            // }).catch(function (error) {
                // console.error(error);
                // console.error("failed to read contact");
            // });

        // }
		
});
$('#level').click(function () {

alert (Number(ourLevelNumber) +" on " + (ourDate));

});