$(document).ready(function () {
	//The following are still unfinished: sing a sequence template; import a midi.
	var studentSchoolNameIdsArray=[];
	var breakoutfilename;
    var data = null;
    var data2 = null;
    var columnOfStudy = 0;
    var columnArray = [];
    var nameArray = [];
    var nameGradeArray = [];
    var smallestScore = 1000;
    var largestScore = 0;
    var scoreCutoffOne = 3;
    var scoreCutoffTwo = 4;
    var groupAArray = [];
    var groupBArray = [];
    var groupCArray = [];
    var allStudentBoxIds = [];
    var allGroupIds = [];
    var groupAShuffle = [];
    var groupBShuffle = [];
    var groupCShuffle = [];
    var groupOfGroupsArray = [];
    var itSelected = false;
    var nameOne = "name";
    var nameTwo = "nameTwo";
    var iOne = 0;
    var iTwo = 0;
    var colorOne = "white";
    var lockNames = false;
    var groupNamesArray = [];
	var nottargetednum=0;
	var groupingMethod="heterogeneous";
	var lockOne=false;
	var lockTwo=false;
    $(".studentsContainerOne").slideToggle();
    $(".studentsContainerTwo").slideToggle();
    //Step 1 Upload the file!
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);
    // Method that checks that the browser supports the HTML5 File API
    function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            isCompatible = true;
        }
        return isCompatible;
    }

    // Method that reads and processes the selected file
    function upload(evt) {
        if (!browserSupportFileUpload()) {
            alert('The File APIs are not fully supported in this browser!');
        } else {
            data = null;
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function (event) {
                var csvData = event.target.result;
                data = $.csv.toArrays(csvData);
                if (data && data.length > 0) {
                    alert('Imported -' + data.length + '- rows successfully!');
                    // console.log (data.toString());
                } else {
                    alert('No data to import!');
                }
            };
            reader.onerror = function () {
                alert('Unable to read ' + file.fileName);
            };
        }
    }
    // The event listener for the file upload
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);

    // Method that checks that the browser supports the HTML5 File API
    function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            isCompatible = true;
        }
        return isCompatible;
    }

    // Method that reads and processes the selected file
    function upload(evt) {
        if (!browserSupportFileUpload()) {
            alert('The File APIs are not fully supported in this browser!');
        } else {
            data = null;
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function (event) {
                var csvData = event.target.result;
                data = $.csv.toArrays(csvData);
                if (data && data.length > 0) {
                    // alert('Imported -' + data.length + '- rows successfully!');
                    // console.log (data[2].toString());

                    $(".fileupload").slideToggle();

                    generateDropdowns(data);
                } else {
                    alert('No data to import!');
                }
            };
            reader.onerror = function () {
                alert('Unable to read ' + file.fileName);
            };
        }
    }


document.getElementById('txtFileUpload2').addEventListener('change', upload2, false);

    // Method that checks that the browser supports the HTML5 File API
    // Method that reads and processes the selected file
    function upload2(evt) {
        if (!browserSupportFileUpload()) {
            alert('The File APIs are not fully supported in this browser!');
        } else {
            data2 = null;
            var file2 = evt.target.files[0];
            var reader2 = new FileReader();
            reader2.readAsText(file2);
            reader2.onload = function (event) {
                var csvData = event.target.result;
                data2 = $.csv.toArrays(csvData);
                if (data2 && data2.length > 0) {
                    // alert('Imported -' + data.length + '- rows successfully!');
                    // console.log (data[2].toString());

                    // $(".fileupload").slideToggle();

                    generateDropdowns2(data2);
                } else {
                    alert('No data to import!');
                }
            };
            reader2.onerror = function () {
                alert('Unable to read ' + file.fileName);
            };
        }
    }
	
	
	var generateNameIDMatchArray = function (dataArray){
		// document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:xx-large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        // $('#assignmentSelect').empty();
		
       let nameArray=getNameIDCol(data2+"", 4);// columnArray = getCol(data, columnOfStudy);
		// console.log(nameArray.toString());
	   let idArray=getNameIDCol(data2, 0);
	   let nameIDArray=[]
        for (var i = 1; i < data2.length; i++) {
           nameIDArray.push([data2[i][4]+"", idArray[i-1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
		console.log(nameIDArray.toString());
		let rowsInExport = [];
	
		
		// for (var i = 0; i < nameIDArray.length; i++) {
			// // console.warn(nameIDArray[i][1]);
           // rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        // }
		let groupThenNameArray=[];
		for (let parentnum = 0; parentnum < groupOfGroupsArray.length; parentnum++){
		let parentDiv = [];
		console.warn(allGroupIds[parentnum]);
	let subgroup = document.getElementById(allGroupIds[parentnum]).childNodes;
	for (let childnum = 0; childnum < subgroup.length; childnum++){
		// console.warn(subgroup[childnum].id);	
		console.warn(allStudentBoxIds.length);
		for (let boxid = 0; boxid < allStudentBoxIds.length; boxid++){
				// console.log(allStudentBoxIds[boxid][0]);
				// console.log(subgroup[childnum].id);
			if (allStudentBoxIds[boxid][0]==subgroup[childnum].id){
				console.warn(allStudentBoxIds[boxid][1]);
						for (var i = 0; i < nameIDArray.length; i++) {
							if (nameIDArray[i][0].includes(allStudentBoxIds[boxid][1])){
								// console.warn(nameIDArray.toString());
								groupThenNameArray.push([JSON.stringify("room"+parentnum), JSON.stringify(allStudentBoxIds[boxid][1]+""), JSON.stringify(nameIDArray[i][1][0]+"@mcpsmd.net")]);
							}
							// rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
						}
				// console.warn(nameIdArray.indexOf(allStudentBoxIds[boxid][1]
			}
		}
		
		
	}
			
}
for (var i = 0; i < groupThenNameArray.length; i++) {
			// console.warn(nameIDArray[i][1]);
			
           rowsInExport.push([groupThenNameArray[i][0], groupThenNameArray[i][2]]);//, groupThenNameArray[i][1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
	// rowsInExport.sort();
	rowsInExport.unshift(["Pre-assign Room Name", "Email Address"]);

		breakoutfilename=prompt ("What would you like to call your breakout rooms pre-assign csv?")+".csv";
 console.warn(groupThenNameArray.toString());
		let csvContent = "data:text/csv;charset=utf-8," + rowsInExport.map(e => e.join(",")).join("\n").replace(/"/g,"");
		var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", breakoutfilename);
document.body.appendChild(link); // Required for FF

link.click();
        // $('#submitAssignment').click(function () {
            // // alert ("hi");
            // // if (true){
            // for (var i = 2; i < dataArray[2].length; i++) {
                // if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == (dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")))) {
                    // columnOfStudy = i + 0;
                // }
            // }

            // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // // }
            // $(".pickassignment").slideToggle();
            // generateSliders();
        // });
	}
	
    // document.getElementById("coefficientNumOne").innerHTML = "<input type='text'  name='organicCompoundCoefficient' id = 'organicCompoundCoefficient' value='coefficient?'></input>"; //<font color= 'white'>";


    //Step 2: Generate dropdown menus.
    var generateDropdowns = function (dataArray) {
		for (let i = 4; i<dataArray.length; i++){
			console.log(dataArray[i][1].replace('@mcpsmd.net','').toString());
		}
		lockOne=true;
		if ((lockOne)&&(lockTwo)){
		combineThings();
		}
		// console.log(dataArray[3].toString());
        // document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:xx-large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        // $('#assignmentSelect').empty();
        // for (var i = 1; i < dataArray[3].length; i++) {
			// if (dataArray[3][i].includes("MAX")){
            // addAssignmentOption(dataArray[3][i].substring(0, dataArray[3][i].indexOf("MAX")));
			// }
			// else{
				// addAssignmentOption(dataArray[3][i]);
			// }
        // }
        // $('#submitAssignment').click(function () {
            // // alert ("hi");
            // // if (true){
            // for (var i = 2; i < dataArray[3].length; i++) {
                // if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == (dataArray[3][i].substring(0, dataArray[3][i].indexOf("MAX")))) {
                    // columnOfStudy = i + 0;
                // }
				// else if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == (dataArray[3][i])) {
                    // columnOfStudy = i + 0;
                // }
				// else if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == ("Grade")){
				// columnOfStudy = 1;
				// }
            // }

            // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // // }
            // $(".pickassignment").slideToggle();
            // generateSliders();
        // });
    }
	var generateDropdowns2 = function (dataArray2) {
		for (let i = 1; i<dataArray2.length; i++){
			console.log(dataArray2[i][0].toString());
		}
		lockTwo=true;
		if ((lockOne)&&(lockTwo)){
		combineThings();
		}
		// console.log(dataArray[3].toString());
        // document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:xx-large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        // $('#assignmentSelect').empty();
        // for (var i = 1; i < dataArray[3].length; i++) {
			// if (dataArray[3][i].includes("MAX")){
            // addAssignmentOption(dataArray[3][i].substring(0, dataArray[3][i].indexOf("MAX")));
			// }
			// else{
				// addAssignmentOption(dataArray[3][i]);
			// }
        // }
        // $('#submitAssignment').click(function () {
            // // alert ("hi");
            // // if (true){
            // for (var i = 2; i < dataArray[3].length; i++) {
                // if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == (dataArray[3][i].substring(0, dataArray[3][i].indexOf("MAX")))) {
                    // columnOfStudy = i + 0;
                // }
				// else if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == (dataArray[3][i])) {
                    // columnOfStudy = i + 0;
                // }
				// else if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == ("Grade")){
				// columnOfStudy = 1;
				// }
            // }

            // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // // }
            // $(".pickassignment").slideToggle();
            // generateSliders();
        // });
    }
    //Step 3: Generate Sliders
var combineThings = function(){
	presentStudents=[];
	for (let i = 4; i<data.length; i++){ //from the zoom export
		
	//	console.log(dataArray[i][1].replace('@mcpsmd.net','').toString());
	
		for (let j = 1; j<data2.length; j++){ //from the id sheet
			if (data[i][1].replace('@mcpsmd.net','').toString()==data2[j][0].toString()){
				presentStudents.push([JSON.stringify(data2[j][4]), JSON.stringify(data[i][2])]);
			}
	//	console.log(dataArray2[i][0].toString());
		}
	}
	presentStudents.sort(function(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
	});
	console.log(presentStudents.toString());
	let tableInfo='';
	for (let k = 0; k<presentStudents.length; k++){	
	if (k<(presentStudents.length-1)){
	if ((JSON.stringify(presentStudents[k][0]).replace(/\"/g, "").replace(/\\/g, ""))==(JSON.stringify(presentStudents[k+1][0]).replace(/\"/g, "").replace(/\\/g, ""))){
console.log(	JSON.stringify(presentStudents[k][1]).replace(/\"/g, "").replace(/\\/g, ""));
console.log(JSON.stringify(presentStudents[k][1]).replace(/\"/g, "").replace(/\\/g, ""));
	presentStudents[k+1][1]=Number(JSON.stringify(presentStudents[k+1][1]).replace(/\"/g, "").replace(/\\/g, ""))+Number(JSON.stringify(presentStudents[k][1]).replace(/\"/g, "").replace(/\\/g, ""))
	}
	else{
		tableInfo=tableInfo+'<tr><td>'+JSON.stringify(presentStudents[k][0]).replace(/\"/g, "").replace(/\\/g, "")+'</td><td>'+JSON.stringify(presentStudents[k][1]).replace(/\"/g, "").replace(/\\/g, "")+'</td></tr>';
	}
	}
	else{
		tableInfo=tableInfo+'<tr><td>'+JSON.stringify(presentStudents[k][0]).replace(/\"/g, "").replace(/\\/g, "")+'</td><td>'+JSON.stringify(presentStudents[k][1]).replace(/\"/g, "").replace(/\\/g, "")+'</td></tr>';
	}
}
		document.getElementById('selectionsBox').innerHTML = "<table><tbody><tr style = 'border: 1px solid black'><td>Name</td><td>time spent</td></tr>"+tableInfo+"</tbody></table>";
let checkIt=false;
let absentStudents="Absent Students:";
let extraStudents="Extra Students:";
	for (let j = 1; j<data2.length; j++){ //from the id sheet
	checkIt=false;
		for (let i = 4; i<data.length; i++){ //from the zoom export
		
	//	console.log(dataArray[i][1].replace('@mcpsmd.net','').toString());
	
			if (data[i][1].replace('@mcpsmd.net','').toString()==data2[j][0].toString()){
				checkIt=true;
				// presentStudents.push([JSON.stringify(data2[j][4]), JSON.stringify(data[i][2])]);
			}
	//	console.log(dataArray2[i][0].toString());
		}
		if (!checkIt){
			absentStudents=absentStudents+"\n"+JSON.stringify(data2[j][4]);
		}
	}
			for (let i = 4; i<data.length; i++){ //from the zoom export
		checkIt=false;
	
		for (let j = 1; j<data2.length; j++){ //from the id sheet

	//	console.log(dataArray[i][1].replace('@mcpsmd.net','').toString());
	
			if (data[i][1].replace('@mcpsmd.net','').toString()==data2[j][0].toString()){
				checkIt=true;
				// presentStudents.push([JSON.stringify(data2[j][4]), JSON.stringify(data[i][2])]);
			}
	//	console.log(dataArray2[i][0].toString());
		}
		if (!checkIt){
			extraStudents=extraStudents+"\n"+JSON.stringify(data[i][0]);
		}
	}
	alert(absentStudents+"\n"+"\n"+extraStudents);
	   // let nameArray=getNameIDCol(data2+"", 4);// columnArray = getCol(data, columnOfStudy);
		// // console.log(nameArray.toString());
	   // let idArray=getNameIDCol(data2, 0);
	   // let nameIDArray=[]
        // for (var i = 1; i < data2.length; i++) {
           // nameIDArray.push([data2[i][4]+"", idArray[i-1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        // }
		// console.log(nameIDArray.toString());
		// let rowsInExport = [];
	
		
		// // for (var i = 0; i < nameIDArray.length; i++) {
			// // // console.warn(nameIDArray[i][1]);
           // // rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        // // }
		// let groupThenNameArray=[];
		// for (let parentnum = 0; parentnum < groupOfGroupsArray.length; parentnum++){
		// let parentDiv = [];
		// console.warn(allGroupIds[parentnum]);
	// let subgroup = document.getElementById(allGroupIds[parentnum]).childNodes;
	// for (let childnum = 0; childnum < subgroup.length; childnum++){
		// // console.warn(subgroup[childnum].id);	
		// console.warn(allStudentBoxIds.length);
		// for (let boxid = 0; boxid < allStudentBoxIds.length; boxid++){
				// // console.log(allStudentBoxIds[boxid][0]);
				// // console.log(subgroup[childnum].id);
			// if (allStudentBoxIds[boxid][0]==subgroup[childnum].id){
				// console.warn(allStudentBoxIds[boxid][1]);
						// for (var i = 0; i < nameIDArray.length; i++) {
							// if (nameIDArray[i][0].includes(allStudentBoxIds[boxid][1])){
								// // console.warn(nameIDArray.toString());
								// groupThenNameArray.push([JSON.stringify("room"+parentnum), JSON.stringify(allStudentBoxIds[boxid][1]+""), JSON.stringify(nameIDArray[i][1][0]+"@mcpsmd.net")]);
							// }
							// // rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
						// }
				// // console.warn(nameIdArray.indexOf(allStudentBoxIds[boxid][1]
			// }
		// }
		
		
	// }
			
// }
// for (var i = 0; i < groupThenNameArray.length; i++) {
			// // console.warn(nameIDArray[i][1]);
			
           // rowsInExport.push([groupThenNameArray[i][0], groupThenNameArray[i][2]]);//, groupThenNameArray[i][1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        // }
	// // rowsInExport.sort();
	// rowsInExport.unshift(["Pre-assign Room Name", "Email Address"]);

		// breakoutfilename=prompt ("What would you like to call your breakout rooms pre-assign csv?")+".csv";
 // console.warn(groupThenNameArray.toString());
		// let csvContent = "data:text/csv;charset=utf-8," + rowsInExport.map(e => e.join(",")).join("\n").replace(/"/g,"");
		// var encodedUri = encodeURI(csvContent);
// var link = document.createElement("a");
// link.setAttribute("href", encodedUri);
// link.setAttribute("download", breakoutfilename);
// document.body.appendChild(link); // Required for FF

// link.click();
}
    var generateSliders = function () {
        columnArray = getCol(data, columnOfStudy);
        console.log(columnOfStudy);
	
        // alert(largestScore + " " + smallestScore);
        $(".studentsContainerOne").slideToggle();
        document.getElementById('selectionsBox').innerHTML = "<div class = 'scoreRangeSelected' style='padding-left:60px; padding-top:60px; font-size:xx-large'>Select the borders in score between your 3 groups<div class = 'sequence-mode row'> <div id='noteLengthSlider' style='width:90%; max-width:800px;'></div></div><div class='row' style = 'padding-top:10vh'><button type ='button' id ='submitScoreRange' style='font-size: xx-large'>Submit</button> </div></div>";
        //<div class='row'><div class='col-sm' id = 'groupa'>underperforming group</div><div class='col-sm' id = 'groupb'>middle-performing group</div><div class='col-sm' id = 'groupc'>top performing group</div></div></div><div class='row'>
		console.log(columnArray.toString());
        columnArray.sort(compareSecondColumn);
        console.log(columnArray);
	
        var slider = document.getElementById('noteLengthSlider');
let stepamount=1;
let values = (largestScore - smallestScore + 1)
// if (largestScore>20)
	if (largestScore==smallestScore){
	largestScore=smallestScore+1;
	}
	
        noUiSlider.create(slider, {
            start: [smallestScore + 1, largestScore - 1],
            connect: true,
            step: stepamount,
            range: {
                'min': smallestScore,
                'max': largestScore
            },

            pips: {
                mode: 'count',
                values: 10,//(largestScore - smallestScore + 1),
                stepped: true,
                density: 100,
            },
            // width: 500px,
        });
		
        // .noUi-background {
        // background-image: linear-gradient(to right, #a2ea4c 20%, #07aa91 20%, #07aa91 80%, #a2ea4c 80%);
        // }
        // $('.noUi-connects').css("background" , "#77D5D5");
        // document.getElementByClassName('noUi-connects').width='500px';
        scoreCutoffOne = Number(slider.noUiSlider.get()[0]);
        scoreCutoffTwo = Number(slider.noUiSlider.get()[1]);
        groupAArray = getBetween(columnArray, smallestScore, scoreCutoffOne);
        groupBArray = getBetween(columnArray, scoreCutoffOne + .01, scoreCutoffTwo);
        groupCArray = getBetween(columnArray, scoreCutoffTwo + .01, largestScore);
        document.getElementById("groupA").innerHTML = "Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(" + groupAArray.length + " members)<p>";
        document.getElementById("groupB").innerHTML = "Students scoring " + scoreCutoffOne + ".01 to " + scoreCutoffTwo + "<br>(" + groupBArray.length + " members)<p>";
        document.getElementById("groupC").innerHTML = "Students scoring " + scoreCutoffTwo + ".01 to " + largestScore + "<br>(" + groupCArray.length + " members)<p>";
        console.log("an array " + groupAArray.toString());
        console.log("an array " + groupBArray.toString());
        console.log("an array " + groupCArray.toString());

        // document.getElementById("groupA").innerHTML = "Lowest Score group <br>(Score of " + smallestScore + " to " + scoreCutoffOne + ")<br>("+groupAArray.length+" members)<p>";
        // document.getElementById("groupB").innerHTML = "Middle Score group <br>(Score of " + scoreCutoffOne + ".01 to " + scoreCutoffTwo + ")<br>("+groupBArray.length+" members)<p>";
        // document.getElementById("groupC").innerHTML = "Highest Score group <br>(Score of " + scoreCutoffTwo + ".01 to " + largestScore + ")<br>("+groupCArray.length+" members)<p>";

        // var totalStudents=groupAArray.length+groupBArray.length+groupCArray.length;
        // var percentA=groupAArray.length/totalStudents*100;

        // var percentB=groupBArray.length/totalStudents*100+percentA;
        // var percentC=groupCArray.length/totalStudents*100+percentB+percentA;

        var totalStudents = largestScore - smallestScore;
        var percentA = (scoreCutoffOne - smallestScore) / totalStudents * 100;

        var percentB = (scoreCutoffTwo - smallestScore) / totalStudents * 100;
        // alert (scoreCutoffOne+" "+scoreCutoffTwo +" "+ totalStudents);
        // var percentC=groupCArray.length/totalStudents*100+percentB+percentA;
        // alert (percentA+" "+percentB+" "+percentC);
        $('.noUi-connects').css("background", 'linear-gradient(to right, #FFBABA ' + percentA + '%, #77D5D5 ' + percentA + '%, #77D5D5 ' + percentA + '%, #77D5D5 ' + percentB + '%, #83EA83 ' + percentB + '%)');
        $('.noUi-connect').css("background", '#77D5D5');

        for (var i = 0; i < groupAArray.length; i++) {
            var testIdName = groupAArray[i][0] + "";
            document.getElementById("groupA").innerHTML = document.getElementById("groupA").innerHTML + "<div class='card low' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
        }
        for (var i = 0; i < groupBArray.length; i++) {
            var testIdName = groupBArray[i][0] + "";
            document.getElementById("groupB").innerHTML = document.getElementById("groupB").innerHTML + "<div class='card medium' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
        }
        for (var i = 0; i < groupCArray.length; i++) {
            var testIdName = groupCArray[i][0] + "";
            document.getElementById("groupC").innerHTML = document.getElementById("groupC").innerHTML + "<div class='card high' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";

        }
        slider.noUiSlider.on('change', function () {
            scoreCutoffOne = Number(slider.noUiSlider.get()[0]);
            scoreCutoffTwo = Number(slider.noUiSlider.get()[1]);

            // var testIdName= "student";
            groupAArray = getBetween(columnArray, smallestScore, scoreCutoffOne);
            groupBArray = getBetween(columnArray, scoreCutoffOne + .01, scoreCutoffTwo);
            groupCArray = getBetween(columnArray, scoreCutoffTwo + .01, largestScore);
            document.getElementById("groupA").innerHTML = "Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(" + groupAArray.length + " members)<p>";
            document.getElementById("groupB").innerHTML = "Students scoring " + scoreCutoffOne + ".01 to " + scoreCutoffTwo + "<br>(" + groupBArray.length + " members)<p>";
            document.getElementById("groupC").innerHTML = "Students scoring " + scoreCutoffTwo + ".01 to " + largestScore + "<br>(" + groupCArray.length + " members)<p>";
            console.log("an array " + groupAArray.toString());
            console.log("an array " + groupBArray.toString());
            console.log("an array " + groupCArray.toString());
            for (var i = 0; i < groupAArray.length; i++) {
                var testIdName = groupAArray[i][0] + "";
                document.getElementById("groupA").innerHTML = document.getElementById("groupA").innerHTML + "<div class='card low' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            }

            for (var i = 0; i < groupBArray.length; i++) {
                var testIdName = groupBArray[i][0] + "";
                document.getElementById("groupB").innerHTML = document.getElementById("groupB").innerHTML + "<div class='card medium' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            }
            for (var i = 0; i < groupCArray.length; i++) {
                var testIdName = groupCArray[i][0] + "";
                document.getElementById("groupC").innerHTML = document.getElementById("groupC").innerHTML + "<div class='card high' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            }

            // "<input type='text'  name='organicCompoundCoefficient' id = '"+ testIdName +"'value='"+testIdName+"'></input>";
            var totalStudents = largestScore - smallestScore;
            var percentA = (scoreCutoffOne - smallestScore) / totalStudents * 100;
            var percentB = (scoreCutoffTwo - smallestScore) / totalStudents * 100;

            // var percentC=groupCArray.length/totalStudents*100+percentB+percentA;
            // alert (percentA+" "+percentB);
            $('.noUi-connects').css("background", 'linear-gradient(to right, #FFBABA ' + percentA + '%, #77D5D5 ' + percentA + '%, #77D5D5 ' + percentA + '%, #77D5D5 ' + percentB + '%, #83EA83 ' + percentB + '%)');

        });
        $('#submitScoreRange').click(function () {
            // alert ("hi");
            // if (true){
            // for (var i = 2; i < dataArray[2].length; i++) {
            // if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML==(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")))) {
            // columnOfStudy=i+0;
            // }
            // }


            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
            $(".scoreRangeSelected").slideToggle();
            generateGroupChoices();

            // alert(noteLengthMin+" sup " +noteLengthMax);
        });
    }
    function compareSecondColumn(a, b) {
        if (a[1] === b[1]) {
            return 0;
        } else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }
    function getCol(matrix, col) { //put data in for matrix
        var column = [];
		
        for (var i = 4; i < matrix.length; i++) {
			if (columnOfStudy==1){
				matrix[i][col]=((matrix[i][col]).replace(/[a-z]/gi, '' ));
				matrix[i][col]=Number((matrix[i][col]).replace(/\//g, ""));
			}
                console.log(Number((matrix[i][col])));
            if (smallestScore > Number((matrix[i][col]))) {
				
                console.log(Number((matrix[i][col])) + 0);
                smallestScore = Number((matrix[i][col])) + 0;
            }
            if (largestScore < Number((matrix[i][col]))) {
                largestScore = Number((matrix[i][col])) + 0;
            }
            column.push([matrix[i][0], Number(matrix[i][col])]);
        }

        return column;
    }
    function getNameIDCol(matrix, col) { //put data in for matrix
        var column = [];
        for (var i = 1; i < matrix.length; i++) {
            if (smallestScore > Number((matrix[i][col]))) {
                smallestScore = Number((matrix[i][col])) + 0;
            }
            if (largestScore < Number((matrix[i][col]))) {
                largestScore = Number((matrix[i][col])) + 0;
            }
            column.push([matrix[i][0], Number(matrix[i][col])]);
        }
		console.warn(column.toString());
        return column;
    }
    function getBetween(matrix, minScore, maxScore) { //put data in for matrix
        let columnLocal = [];

        for (var i = 0; i < matrix.length; i++) {
            if ((minScore <= Number((matrix[i][1]))) && (maxScore >= Number((matrix[i][1])))) {
                columnLocal.push([matrix[i][0], Number(matrix[i][1])]);
            }
        }
	
        return columnLocal;
    }

    var addAssignmentOption = function (cationOption) {
        var sel = document.getElementById("assignmentSelect");
        var opt = document.createElement('option');
        opt.innerHTML = cationOption;
        //		opt.appendChild(document.createTextNode((cationOption)));
        opt.value = (cationOption);
        sel.appendChild(opt);

    }

    // var generateIons = function (cationArray, anionArray) {

    // $('#anions').empty();
    // var completeArray = shuffle(cationArray.concat(anionArray));
    // for (index = 0; index < completeArray.length; index++) {
    // addCationOption(completeArray[index]);
    // addAnionOption(completeArray[index]);
    // }
    // }

    //Step 4:
	var addNotTargetButtonToAnArray = function(theArray){
		for (var i = 0; i < theArray.length; i++) {

            (function (i) {

                document.getElementById(theArray[i + 0][0]).addEventListener("click", function (e) {
                    if (!(document.getElementById(theArray[i+0][0]).classList.contains("nottargetted"))) {
						document.getElementById(theArray[i+0][0]).classList.add("nottargeted");
                    }
					else{
					document.getElementById(theArray[i+0][0]).classList.remove("nottargted");
					}
					
                });

            })(i);
        }

	}
    var generateGroupChoices = function () {
        document.getElementById('selectionsBox').innerHTML = "<div class = 'pickgroupstyle'> <button type ='button' id ='groupByNumGroupsButton' style = 'font-size: xx-large; margin-right: 50px; margin-left: 65px'>Option 1: Select Number Of Groups</button>    <button type ='button' id ='groupByNumStudentsButton' style = 'font-size: xx-large'>Option 2: Select Size of Groups</button> <br><span style = 'font-size: xx-large; margin-top: 10px'> Remove absent students by clicking their names below </span> <input id = 'nameSearch' style = 'font-size: xx-large; margin-top: 20px'' type='text' placeholder='Search names... '></div>";

		for (var i = 0; i < groupAArray.length; i++) {

            (function (i) {

                document.getElementById(groupAArray[i + 0][0]).addEventListener("click", function (e) {
                    if (!(document.getElementById(groupAArray[i+0][0]).classList.contains("nottargeted"))) {
						
						document.getElementById(groupAArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
                    }
					else{
						// alert ('hi2');
						nottargetednum=nottargetednum-1;
					document.getElementById(groupAArray[i+0][0]).classList.remove("nottargeted");
					}
					
                });

            })(i);
        }
				for (var i = 0; i < groupBArray.length; i++) {

            (function (i) {

                document.getElementById(groupBArray[i + 0][0]).addEventListener("click", function (e) {
                    if (!(document.getElementById(groupBArray[i+0][0]).classList.contains("nottargeted"))) {
						document.getElementById(groupBArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
                    }
					else{
							nottargetednum=nottargetednum-1;
					document.getElementById(groupBArray[i+0][0]).classList.remove("nottargeted");
					}
					
                });

            })(i);
        }
				for (var i = 0; i < groupCArray.length; i++) {

            (function (i) {

                document.getElementById(groupCArray[i + 0][0]).addEventListener("click", function (e) {
                    if (!(document.getElementById(groupCArray[i+0][0]).classList.contains("nottargeted"))) {
						nottargetednum++;
						document.getElementById(groupCArray[i+0][0]).classList.add("nottargeted");
                    }
					else{
							nottargetednum=nottargetednum-1;
					document.getElementById(groupCArray[i+0][0]).classList.remove("nottargeted");
					}
					
                });

            })(i);
        }



        $('#nameSearch').keyup(function () {
            // alert ("hi");
            // alert ("hi");
            // if (true){
            let currentValue = document.getElementById('nameSearch').value;
            // alert (currentValue);
            if (document.getElementById('nameSearch').value != "") {
                // alert ("hi");
                for (var i = 0; i < groupAArray.length; i++) {
                    // alert (groupAArray[i][0]);
                    if (groupAArray[i][0].toLowerCase().includes((currentValue + "").toLowerCase())) {
                        document.getElementById(groupAArray[i][0]).style.display = 'block';
                    } else {
						// alert (document.getElementById(groupAArray[i][0]).style.display);
                            document.getElementById(groupAArray[i][0]).style.display = 'none';
                        }
                }

                for (var i = 0; i < groupBArray.length; i++) {
                    if (groupBArray[i][0].toLowerCase().includes((currentValue + "").toLowerCase())) {
                        document.getElementById(groupBArray[i][0]).style.display = 'block';
                    } else {
						
{
    // do stuff
}
                            document.getElementById(groupBArray[i][0]).style.display = 'none';
                        }
                }
                for (var i = 0; i < groupCArray.length; i++) {
                    if (groupCArray[i][0].toLowerCase().includes((currentValue + "").toLowerCase())) {
                        document.getElementById(groupCArray[i][0]).style.display = 'block';
                    } else {
                            document.getElementById(groupCArray[i][0]).style.display = 'none';
                        }
                }

            } else {
                for (var i = 0; i < groupAArray.length; i++) {

                    document.getElementById(groupAArray[i][0]).style.display = 'block';

                }
                for (var i = 0; i < groupBArray.length; i++) {
                    document.getElementById(groupBArray[i][0]).style.display = 'block';
                }
                for (var i = 0; i < groupCArray.length; i++) {
                    document.getElementById(groupCArray[i][0]).style.display = 'block';
                }
            }

            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }

        });

        $('#groupByNumGroupsButton').click(function () {
            // alert ("hi");
            // if (true){

            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
			let groupnums=prompt("How many groups do you want?")
			if (groupnums>0){
            groupByGroups(groupnums);
			}
        });

        $('#groupByNumStudentsButton').click(function () {
            // alert ("hi");
            // if (true){

            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
				let groupnums=prompt("What is your group size? (no group will have larger than this size, and all of your groups will have this size or one less)");
			if (groupnums>0){ 
			groupByStudents(groupnums);
			}

        });
    }
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    var groupByGroups = function (numberOfGroups) {
		
            $(".pickgroupstyle").slideToggle();
            $(".studentsContainerOne").slideToggle();
        document.getElementById('selectionsBox').innerHTML = "<div class = 'finalizeGroups'> <span style='font-size: xx-large'> Finalize Names as Necessary and then click Done:</span> <button type ='button' id ='finalizeGroupsButton' style = 'font-size: xx-large'>Finalize Groups</button></div>";

        $(".studentsContainerTwo").slideToggle();
        console.log(groupAArray.toString());
        shuffle(groupAArray);
        console.log(groupAArray.toString());
        shuffle(groupBArray);
        shuffle(groupCArray);
        var testIdName = "group" + 0 + "";
        allGroupIds.push(testIdName + "");
        document.getElementById("studentContainerTwo").innerHTML = "<div id = '" + testIdName + "'>" + testIdName + "</div>";
        for (var i = 1; i < numberOfGroups; i++) {
            var testIdName = "group" + i + "";
            document.getElementById("studentContainerTwo").innerHTML = document.getElementById("studentContainerTwo").innerHTML + "<div id = '" + testIdName + "'>" + testIdName + "</div>";
            allGroupIds.push(testIdName + "");

        }
        groupOfGroupsArray = [];
        for (var j = 0; j < numberOfGroups; j++) {
            // alert (j);
            groupOfGroupsArray.push(new Array());
        }
        console.log(groupOfGroupsArray.toString());
        let groupPlacement = 0;
        // console.warn(groupCArray[0][0].toString());
        for (var g = 0; g < groupCArray.length; g++) {
            console.log(groupPlacement);

            console.warn(groupCArray[g][0].toString());
			if (!(document.getElementById(groupCArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "#83EA83", "high"]); //to later select the background color for highest groups
            groupPlacement++;
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
        }
        for (var g = 0; g < groupBArray.length; g++) {
			if (!(document.getElementById(groupBArray[g][0]).classList.contains("nottargeted"))){
            groupOfGroupsArray[groupPlacement].push([groupBArray[g][0], "#77D5D5", "medium"]); //to later select the background color for highest groups
            groupPlacement++;
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
        }
        for (var g = 0; g < groupAArray.length; g++) {
			if (!(document.getElementById(groupAArray[g][0]).classList.contains("nottargeted"))){
            groupOfGroupsArray[groupPlacement].push([groupAArray[g][0], "#FFBABA", "low"]) //to later select the background color for highest groups
            groupPlacement++;
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
        }

        for (var k = 0; k < groupOfGroupsArray.length; k++) {
            shuffle(groupOfGroupsArray[k]);
            var testIdName = groupOfGroupsArray[k][0][0] + "";
            var testIdTag = testIdName.replace(/\s+/g, '');
            var groupIdTag = "groupThing" + k;
            var groupIdTagNumber = "groupNumber" + k;
            document.getElementById(allGroupIds[k]).innerHTML = "<div id = '" + groupIdTag + "'>Group: <input type='text'  name='o' id = '" + groupIdTagNumber + "' value='" + (k + 1) + "' style='width: 35%'></input></div><br>" + "<div class='card' id = '" + testIdTag + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            groupNamesArray.push([groupIdTag + "", groupIdTagNumber + ""]);
            document.getElementById(testIdTag + "").classList.add(groupOfGroupsArray[k][0][2]);

            allStudentBoxIds.push([testIdTag + "", testIdName + "", (groupOfGroupsArray[k][0][2]) + ""]);
            for (var i = 1; i < groupOfGroupsArray[k].length; i++) {
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);
                var testIdName = groupOfGroupsArray[k][i][0] + "";
                var testIdTag = testIdName.replace(/\s+/g, '');
                // document.getElementById(allGroupIds[k]).innerHTML = document.getElementById(allGroupIds[k]).innerHTML + "<div class='card'><div class='container'><input type='text'  name='organicCompoundCoefficient' id = '" + testIdTag + "' value='" + testIdName + "' style='background-color:" + groupOfGroupsArray[k][i][1] + "'></input></div></div>";

                document.getElementById(allGroupIds[k]).innerHTML = document.getElementById(allGroupIds[k]).innerHTML + "<div class='card' id = '" + testIdTag + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
                document.getElementById(testIdTag + "").classList.add(groupOfGroupsArray[k][i][2]);
                // if(groupOfGroupsArray[k].length
                // alert(testIdTag);
                allStudentBoxIds.push([testIdTag + "", testIdName + "", groupOfGroupsArray[k][i][2] + ""]);
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);

                // console.warn("yo yo yo "+allStudentBoxIds.toString());

            }

        }

        for (var i = 0; i < allStudentBoxIds.length; i++) {

            (function (i) {

                document.getElementById(allStudentBoxIds[i + 0][0]).addEventListener("click", function (e) {
                    if ((!itSelected) && (!lockNames)) {
                        iOne = i;
                        colorOne = document.getElementById(allStudentBoxIds[i + 0][0]).style.backgroundColor + "";
                        for (var k = 0; k < allStudentBoxIds.length; k++) {
                            if ((k != i) && ((allStudentBoxIds[i][2]) == allStudentBoxIds[k][2])) {
                                document.getElementById(allStudentBoxIds[k][0]).classList.add("targeted");
                            } else if ((k == iOne)) {}
                            else {

                                document.getElementById(allStudentBoxIds[k][0]).classList.add("nottargeted");
                            }
                        }

                        document.getElementById(allStudentBoxIds[i][0]).classList.add("selected");

                        nameOne = allStudentBoxIds[i][1] + "";
                        itSelected = true;
                        // alert (i+" "+nameOne);
                    } else if ((!lockNames) && ((colorOne == (document.getElementById(allStudentBoxIds[i][0]).style.backgroundColor + "")) || (("white" == (document.getElementById(allStudentBoxIds[i][0]).style.backgroundColor + ""))))) {
                        // alert (colorOne);
                        for (var k = 0; k < allStudentBoxIds.length; k++) {
                            if ((k != iOne) && ((allStudentBoxIds[iOne][2]) == allStudentBoxIds[k][2])) {

                                document.getElementById(allStudentBoxIds[k][0]).classList.remove("targeted");
                            } else if ((k == iOne)) {}
                            else {

                                document.getElementById(allStudentBoxIds[k][0]).classList.remove("nottargeted");
                            }
                        }
                        document.getElementById(allStudentBoxIds[iOne][0]).classList.remove("selected");
                        nameTwo = allStudentBoxIds[i][1] + "";
                        document.getElementById(allStudentBoxIds[i][0]).innerHTML = "<div class='container'> <h4><b>" + nameOne + "</b></h4></div>";
                        allStudentBoxIds[i][1] = nameOne;
                        document.getElementById(allStudentBoxIds[iOne][0]).innerHTML = "<div class='container'> <h4><b>" + nameTwo + "</b></h4></div>";
                        allStudentBoxIds[iOne][1] = nameTwo;

                        // alert (i+" "+nameOne+" "+nameTwo);
                        itSelected = false;

                    }
                });

            })(i);
        }
        // alert ("hi");
        // if (true){
        // for (var i = 2; i < dataArray[2].length; i++) {
        // if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML==(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")))) {
        // columnOfStudy=i+0;
        // }
        // }


        // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
        // }


        // alert(noteLengthMin+" sup " +noteLengthMax);

        // allStudentBoxIds.push(testIdTag + "");

        // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="#77D5D5";
        // document.getElementById('studentContainerTwo').innerHTML = "<div>hi</div><div>hi</div><div>hi</div>";
        // document.getElementById('selectionsBox').innerHTML = "<div class = 'pickgroupstyle'> <button type ='button' id ='groupByNumGroupsButton'>Group by the Number of Students per Group</button></div> <button type ='button' id ='groupByNumStudentsButton'>Group by the Maximum Number of Groups</button></div>";

        // $('#groupsByNumGroupsButton').click(function () {
        // // alert ("hi");
        // // if (true){

        // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
        // // }
        // $(".pickgroupstyle").slideToggle();
        // groupByGroups();
        // });

        // $('#groupByNumStudentsButton').click(function () {
        // // alert ("hi");
        // // if (true){

        // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
        // // }
        // $(".pickgroupstyle").slideToggle();
        // groupByStudents();
        // });
        $('#finalizeGroupsButton').click(function () {
            lockNames = true;
            // console.warn("yo yo yo "+allStudentBoxIds[5]);
            // document.getElementById(allStudentBoxIds[5]).style.="";

            // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="gray";
            for (var l = 0; l < groupNamesArray.length; l++) {
                let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + "";

            }
            for (var j = 0; j < allStudentBoxIds.length; j++) {
                // document.getElementById(allStudentBoxIds[0]).innerHTML="";
                // alert	(j);
                // alert (allStudentBoxIds[j][0]);

                document.getElementById(allStudentBoxIds[j][0]).style.backgroundColor = "white";

                document.getElementById(allStudentBoxIds[j][0]).style.borderColor = "white";

                document.getElementById(allStudentBoxIds[j][0]).style.borderWidth = "1px";
                document.getElementById(allStudentBoxIds[j][0]).classList.remove("targeted");
                document.getElementById(allStudentBoxIds[j][0]).classList.remove("selected");
                document.getElementById(allStudentBoxIds[j][0]).classList.remove("nottargeted");
                // document.getElementById('KARENBROWN').style.backgroundColor = "white";
            }
				if (confirm("Are you hoping to export your groups to use with MCPS Zoom Breakout rooms?\n\nIf/when you press okay, you will need to select your 'class list' export file from synergy.")){
		
			document.getElementById('txtFileUpload2').click();
					}   
            $(".finalizeGroups").slideToggle();
        });
    }

    var groupByStudents = function (maxStudents) {
		
            $(".pickgroupstyle").slideToggle();
            $(".studentsContainerOne").slideToggle();
        document.getElementById('selectionsBox').innerHTML = "<div class = 'finalizeGroups'> <span style='font-size: xx-large'> Finalize Names as Necessary and then click Done:</span> <button type ='button' id ='finalizeGroupsButton' style = 'font-size: xx-large'>Finalize Groups</button></div>";

        $(".studentsContainerTwo").slideToggle();
        numberOfGroups = Math.ceil((columnArray.length-nottargetednum) / maxStudents);
        console.log(groupAArray.toString());
        shuffle(groupAArray);
        console.log(groupAArray.toString());
        shuffle(groupBArray);
        shuffle(groupCArray);
        var testIdName = "group" + 0 + "";
        allGroupIds.push(testIdName + "");
        document.getElementById("studentContainerTwo").innerHTML = "<div id = '" + testIdName + "'>" + testIdName + "</div>";
        for (var i = 1; i < numberOfGroups; i++) {
            var testIdName = "group" + i + "";
            document.getElementById("studentContainerTwo").innerHTML = document.getElementById("studentContainerTwo").innerHTML + "<div id = '" + testIdName + "'>" + testIdName + "</div>";
            allGroupIds.push(testIdName + "");

        }
        groupOfGroupsArray = [];
        for (var j = 0; j < numberOfGroups; j++) {
            // alert (j);
            groupOfGroupsArray.push(new Array());
        }
        console.log(groupOfGroupsArray.toString());
        let groupPlacement = 0;
        // console.warn(groupCArray[0][0].toString());
       for (var g = 0; g < groupCArray.length; g++) {
            console.log(groupPlacement);

            console.warn(groupCArray[g][0].toString());
			if (!(document.getElementById(groupCArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "#83EA83", "high"]); //to later select the background color for highest groups
            groupPlacement++;
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
        }
        for (var g = 0; g < groupBArray.length; g++) {
			if (!(document.getElementById(groupBArray[g][0]).classList.contains("nottargeted"))){
            groupOfGroupsArray[groupPlacement].push([groupBArray[g][0], "#77D5D5", "medium"]); //to later select the background color for highest groups
            groupPlacement++;
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
        }
        for (var g = 0; g < groupAArray.length; g++) {
			if (!(document.getElementById(groupAArray[g][0]).classList.contains("nottargeted"))){
            groupOfGroupsArray[groupPlacement].push([groupAArray[g][0], "#FFBABA", "low"]) //to later select the background color for highest groups
            groupPlacement++;
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
        }

        for (var k = 0; k < groupOfGroupsArray.length; k++) {
            shuffle(groupOfGroupsArray[k]);
            var testIdName = groupOfGroupsArray[k][0][0] + "";
            var testIdTag = testIdName.replace(/\s+/g, '');
            var groupIdTag = "groupThing" + k;
            var groupIdTagNumber = "groupNumber" + k;
            document.getElementById(allGroupIds[k]).innerHTML = "<div id = '" + groupIdTag + "'>Group: <input type='text'  name='o' id = '" + groupIdTagNumber + "' value='" + (k + 1) + "' style='width: 35%'></input></div><br>" + "<div class='card' id = '" + testIdTag + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            groupNamesArray.push([groupIdTag + "", groupIdTagNumber + ""]);
            document.getElementById(testIdTag + "").classList.add(groupOfGroupsArray[k][0][2]);

            allStudentBoxIds.push([testIdTag + "", testIdName + "", (groupOfGroupsArray[k][0][2]) + ""]);
            for (var i = 1; i < groupOfGroupsArray[k].length; i++) {
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);
                var testIdName = groupOfGroupsArray[k][i][0] + "";
                var testIdTag = testIdName.replace(/\s+/g, '');
                // document.getElementById(allGroupIds[k]).innerHTML = document.getElementById(allGroupIds[k]).innerHTML + "<div class='card'><div class='container'><input type='text'  name='organicCompoundCoefficient' id = '" + testIdTag + "' value='" + testIdName + "' style='background-color:" + groupOfGroupsArray[k][i][1] + "'></input></div></div>";

                document.getElementById(allGroupIds[k]).innerHTML = document.getElementById(allGroupIds[k]).innerHTML + "<div class='card' id = '" + testIdTag + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
                document.getElementById(testIdTag + "").classList.add(groupOfGroupsArray[k][i][2]);
                // if(groupOfGroupsArray[k].length
                // alert(testIdTag);
                allStudentBoxIds.push([testIdTag + "", testIdName + "", groupOfGroupsArray[k][i][2] + ""]);
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);

                // console.warn("yo yo yo "+allStudentBoxIds.toString());

            }

        }

        for (var i = 0; i < allStudentBoxIds.length; i++) {

            (function (i) {

                document.getElementById(allStudentBoxIds[i + 0][0]).addEventListener("click", function (e) {
                    if ((!itSelected) && (!lockNames)) {
                        iOne = i;
                        colorOne = document.getElementById(allStudentBoxIds[i + 0][0]).style.backgroundColor + "";
                        for (var k = 0; k < allStudentBoxIds.length; k++) {
                            if ((k != i) && ((allStudentBoxIds[i][2]) == allStudentBoxIds[k][2])) {
                                document.getElementById(allStudentBoxIds[k][0]).classList.add("targeted");
                            } else if ((k == iOne)) {}
                            else {

                                document.getElementById(allStudentBoxIds[k][0]).classList.add("nottargeted");
                            }
                        }

                        document.getElementById(allStudentBoxIds[i][0]).classList.add("selected");

                        nameOne = allStudentBoxIds[i][1] + "";
                        itSelected = true;
                        // alert (i+" "+nameOne);
                    } else if ((!lockNames) && ((colorOne == (document.getElementById(allStudentBoxIds[i][0]).style.backgroundColor + "")) || (("white" == (document.getElementById(allStudentBoxIds[i][0]).style.backgroundColor + ""))))) {
                        // alert (colorOne);
                        for (var k = 0; k < allStudentBoxIds.length; k++) {
                            if ((k != iOne) && ((allStudentBoxIds[iOne][2]) == allStudentBoxIds[k][2])) {

                                document.getElementById(allStudentBoxIds[k][0]).classList.remove("targeted");
                            } else if ((k == iOne)) {}
                            else {

                                document.getElementById(allStudentBoxIds[k][0]).classList.remove("nottargeted");
                            }
                        }
                        document.getElementById(allStudentBoxIds[iOne][0]).classList.remove("selected");
                        nameTwo = allStudentBoxIds[i][1] + "";
                        document.getElementById(allStudentBoxIds[i][0]).innerHTML = "<div class='container'> <h4><b>" + nameOne + "</b></h4></div>";
                        allStudentBoxIds[i][1] = nameOne;
                        document.getElementById(allStudentBoxIds[iOne][0]).innerHTML = "<div class='container'> <h4><b>" + nameTwo + "</b></h4></div>";
                        allStudentBoxIds[iOne][1] = nameTwo;

                        // alert (i+" "+nameOne+" "+nameTwo);
                        itSelected = false;

                    }
                });

            })(i);
        }
        // alert ("hi");
        // if (true){
        // for (var i = 2; i < dataArray[2].length; i++) {
        // if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML==(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")))) {
        // columnOfStudy=i+0;
        // }
        // }


        // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
        // }


        // alert(noteLengthMin+" sup " +noteLengthMax);

        // allStudentBoxIds.push(testIdTag + "");

        // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="#77D5D5";
        // document.getElementById('studentContainerTwo').innerHTML = "<div>hi</div><div>hi</div><div>hi</div>";
        // document.getElementById('selectionsBox').innerHTML = "<div class = 'pickgroupstyle'> <button type ='button' id ='groupByNumGroupsButton'>Group by the Number of Students per Group</button></div> <button type ='button' id ='groupByNumStudentsButton'>Group by the Maximum Number of Groups</button></div>";

        // $('#groupsByNumGroupsButton').click(function () {
        // // alert ("hi");
        // // if (true){

        // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
        // // }
        // $(".pickgroupstyle").slideToggle();
        // groupByGroups();
        // });

        // $('#groupByNumStudentsButton').click(function () {
        // // alert ("hi");
        // // if (true){

        // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
        // // }
        // $(".pickgroupstyle").slideToggle();
        // groupByStudents();
        // });
        $('#finalizeGroupsButton').click(function () {
			// alert ("hi")

            lockNames = true;
            // console.warn("yo yo yo "+allStudentBoxIds[5]);
            // document.getElementById(allStudentBoxIds[5]).style.="";

            // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="gray";
            for (var l = 0; l < groupNamesArray.length; l++) {
                let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + "";

            }
            for (var j = 0; j < allStudentBoxIds.length; j++) {
                // document.getElementById(allStudentBoxIds[0]).innerHTML="";
                // alert	(j);
                // alert (allStudentBoxIds[j][0]);

                document.getElementById(allStudentBoxIds[j][0]).style.backgroundColor = "white";

                document.getElementById(allStudentBoxIds[j][0]).style.borderColor = "white";

                document.getElementById(allStudentBoxIds[j][0]).style.borderWidth = "1px";

                document.getElementById(allStudentBoxIds[j][0]).classList.remove("targeted");
                document.getElementById(allStudentBoxIds[j][0]).classList.remove("selected");
                document.getElementById(allStudentBoxIds[j][0]).classList.remove("nottargeted");
                // document.getElementById('KARENBROWN').style.backgroundColor = "white";
            }
						// console.log(groupNamesArray[1].toString());
			// console.log(groupOfGroupsArray[1]);
			// console.log(groupOfGroupsArray[2]);
			// console.log(groupOfGroupsArray[3]);
					if (confirm("Are you hoping to export your groups to use with MCPS Zoom Breakout rooms?\n\nIf/when you press okay, you will need to select your 'class list' export file from synergy.")){
		
			document.getElementById('txtFileUpload2').click();
					}        
		$(".finalizeGroups").slideToggle();

        });
    }
var exportBreakout = function(){
	
	
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", breakoutfilename);
document.body.appendChild(link); // Required for FF

link.click();
}

});


