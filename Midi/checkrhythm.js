
var loadDatabase = [];
var db;
var loginMessageShown = true;
$(document).ready(init);
var ourLevelNumber;

// sign-in anonymously
var auth = function () {
	console.log("hello");
    // alert ("auth");
	let email="nwhschemscores@gmail.com";
	let password="nwhschem";
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (result) {
        db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });

        // db.collection("rhythmsenselogins").get().then(function (querySnapshot) {
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
					db.collection("rhythmsenselogins").where("name", "==", whoItIsUsingThis).orderBy("levelcomplete", "desc").limit(1).get().then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
            // db.collection("rhythmsenselogins").doc(loadDatabase[loadlistplace]).get().then(function (doc) {
				// console.error(doc.data());
                if (doc.exists) {
					// console.log ("hi")// we got in here
                    var data = doc.data();
                    // console.warn(data.email);
                    // console.warn(data.name);
                    if ((JSON.stringify(whoItIsUsingThis) === JSON.stringify(data.name))) {
                        //console.log(data.levelcomplete);
						let blob = Number(data.levelcomplete) + 0;
						//console.log(blob);
                        // console.log("you have the score " + blob + " " + levelNumber);
                        try {
                            if (blob > levelNumber) {

                                levelNumber = blob + 0;
                                // alert (levelNumber);


                            }

                        } catch (e) {}

                    }
					console.log(levelNumber);
                    ourLevelNumber = levelNumber + 0;
                    //updateTheLevel(levelNumber);
                } else {
                    console.error("No such record");
                }
            }).catch(function (error) {
                console.error(error);
                console.error("failed to read contact");
            });

        });
		
});

$('#level').click(function () {

alert (Number(ourLevelNumber));

});