$(document).ready(function () {
	//The following are still unfinished: sing a sequence template; import a midi.
	var studentSchoolNameIdsArray=[];
	var canvasSectionColumn =4;
	var breakoutfilename;
	var repeatingStudents=true;
    var data = null;
    var data2 = null;
    var columnOfStudy = 0;
    var columnArray = [];
    var nameArray = [];
    var nameGradeArray = [];
		var startRow=2;
	var outside=false;
		var sectionArray=[];
    var smallestScore = 1000;
	var countedStudents=[];
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
    $(".studentsContainerOne").slideToggle();
    $(".studentsContainerTwo").slideToggle();
		var sectionArray=[];
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
		  startRow=2;
	 canvasSectionColumn =4;
		  absentArray=[];
		  canvas=false;
            data = null;
		  var id = this.id
    var inputElement = document.getElementById(id)
    ext = inputElement.value
    ext = ext.split(".")
    ext = ext[ext.length - 1]
	console.log(ext);	
	// if (true){
		// alert("hi");
    var files = inputElement.files || [];
    if (!files.length) return;
    var file = files[0];
    var reader = new FileReader();
    reader.onloadend = async function (event) {
		
		if ((ext=='xls')||(ext=='xlsx')){
        var arrayBuffer = reader.result;
        var options = {type: 'array', codepage: false ? 65001 : void 0};
        var workbook = XLSX.read(arrayBuffer, options);
			console.log(workbook);
        var sheetName = workbook.SheetNames
        var sheet = workbook.Sheets[sheetName]
		console.log(sheet["!ref"]);
		let firstSet=sheet["!ref"].substr(0,sheet["!ref"].indexOf(':'));
		let firstSetColumn=firstSet.substr(0,firstSet.search(/\d/));
		let firstSetRow=firstSet.substr(firstSet.search(/\d/),firstSet.length);;
		let secondSet=sheet["!ref"].substr(1+sheet["!ref"].indexOf(':'), sheet["!ref"].length);
		let secondSetColumn=secondSet.substr(0,secondSet.search(/\d/));
		let secondSetRow=(Number)(secondSet.substr(secondSet.search(/\d/),secondSet.length));
console.log(firstSet+" "+firstSetColumn+" "+firstSetRow);
console.log(secondSet+" "+secondSetColumn+" "+secondSetRow);	

	// const indexFirstNumber = str.search(/\d/);
		// console.log(sheet["!ref"].substr(sheet["!ref"].indexOf(':'), sheet["!ref"].indexOf
		arrayTest=[];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ"]

let columnLength = alphabet.indexOf(secondSetColumn);
// console.log(columnLength);
for (var j = 1; j<(secondSetRow+1); j++){
	let newRow=[];
for (var i = 0; i<columnLength; i++){
	if (sheet[alphabet[i]+j]==null){
		newRow.push("");	
	}
	else{
		newRow.push(sheet[alphabet[i]+j].v);
	}
}
	arrayTest.push(newRow);
}
console.log(arrayTest);
		}
		else{
			 var csvData = event.target.result;
                data = $.csv.toArrays(csvData);
                if (data && data.length > 0) {
                    // alert('Imported -' + data.length + '- rows successfully!');
                    // console.log (data[2].toString());

                    $(".fileupload").slideToggle();
					
		$(".fileuploadImport").slideToggle();
		startRow=2;
		console.log(data[0][2].toString().includes('Login'));

		if(data[0][0].toString().includes('Student')){

					if(data[0][2].toString().includes('Login')){
			
	 canvasSectionColumn =3;
		}
		else{
		
	 canvasSectionColumn =4;
		}
		// alert ("Canvas!");
		console.log(canvasSectionColumn);
		canvas=true;
	
		for (var i = 2; i < data.length; i++){
			if (!(sectionArray.includes(data[i][canvasSectionColumn]))){
				sectionArray.push(data[i][canvasSectionColumn]);
			}
		// console.log(sectionArray);
		}
		
		startRow=0;
		if (sectionArray.length>1){
			
		outside=false;
		checkSections(data);
		}		
		else{
		outside=false;
		generateDropdowns(data);
		}
		}
		else if (data[0][0]=="Group"){//this means it is an import of a groupmaker export
		onlyOneInput=true;
		document.getElementById("dvImportSegments3").hidden=true;
		outside=true;
        generateImports(data);
		}
			
		else{ //this means that we are in a synergy export
		outside=false;
		generateDropdowns(data);
		}
	
                } else {
                    alert('No data to import!');
                }
            }


        // var sheet_to_html = XLSX.utils.sheet_to_html(sheet)
        // var sheet_to_json = XLSX.utils.sheet_to_json(sheet)
		

        // if (sheet_to_json.length === 0) {
            // var sheet_to_csv = [XLSX.utils.sheet_to_csv(sheet)]
            // var results = sheet_to_csv
        // }

        // if (sheet_to_json.length > 0) {
            // var results = sheet_to_json
        // }

        // let Parsed_File_Obj = {
            // "sheet_to_html": sheet_to_html,
            // "results": results,
            // "ext": ext,
        // // }

        // console.log('Parsed_File_Obj')
        // console.log(Parsed_File_Obj)
		if ((ext=='xls')||(ext=='xlsx')){
					data=arrayTest;
					
outside=false;
generateDropdowns(data);

                    $(".fileupload").slideToggle();
					// console.log(evt.target.result);
				    // var tempData = new Uint8Array(evt.target.result);
					// console.log(tempData);
					// var workbook = XLSX.read(tempData, {type: 'array'});
					// console.log(workbook);
					// var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
					 // var result = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
// console.log($.csv.toArrays(sheet_to_csv));
// console.log(sheet_to_json);	
					// console.log(typeof (Parsed_File_Obj.results));
					// console.log(Parsed_File_Obj.results);
					// console.log(results[0,0,4]);
										// data=JSON.parse(results);
     // header: 1 instructs xlsx to create an 'array of arrays'
				}
				else{
				}
    };
	
				if ((ext=='xls')||(ext=='xlsx')){
				reader.readAsArrayBuffer(file);
				}
				else if (ext=='csv'){
					// alert("HI");
				reader.readAsText(file);
				}
	// }
	if(false){
	}
	else{
    // reader.readAsArrayBuffer(file);
		// alert("hi");
    
            // var file = evt.target.files[0];
            // reader = new FileReader();
			
			// reader.read(file);
				// reader.readAsDataURL(file);
            // reader.onload = function (event) {
				
			// }
			}
                
	
    };


document.getElementById('txtFileUpload2').addEventListener('change', upload2, false);
    var checkSections = function (data) {
		document.getElementById('selectionsBox').innerHTML = "<div class = 'picksection' style = 'width:auto'><select id = 'sectionSelect' name = 'sectionSelect' style = 'font-size:large; width:auto; max-width:300px;'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitSection' style='font-size: xx-large'>Submit</button></div>";
  				$('#sectionSelect').empty();
				
			for (var i = 0; i < sectionArray.length; i++) {
				// alert(sectionArray.toString());
				addSectionOption(sectionArray[i]);
			}
	
        
				$('#submitSection').click(function () {
            // alert ("hi");
            // if (true){

            // for (var i = 5; i < data[startRow].length; i++) {
                // if (document.getElementById("sectionSelect").options[document.getElementById("sectionSelect").selectedIndex].innerHTML == (dataArray[startRow][i].substring(0, dataArray[startRow][i].indexOf("MAX")))) {
                    // columnOfStudy = i + 0;
                // }
				// else if (document.getElementById("sectionSelect").options[document.getElementById("sectionSelect").selectedIndex].innerHTML == (dataArray[startRow][i])) {
                    // columnOfStudy = i + 0;
                // }
				// else if (document.getElementById("sectionSelect").options[document.getElementById("sectionSelect").selectedIndex].innerHTML == ("Grade")){
				// columnOfStudy = 1;
				// }
			selectedSection=(document.getElementById("sectionSelect").options[document.getElementById("sectionSelect").selectedIndex].innerHTML);
            // }

            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
            $(".picksection").slideToggle();
		generateDropdowns(data);
        });

	};
	var addSectionOption = function (cationOption) {
        var sel = document.getElementById("sectionSelect");
        var opt = document.createElement('option');
        opt.innerHTML = cationOption;
        //		opt.appendChild(document.createTextNode((cationOption)));
        opt.value = (cationOption);
        sel.appendChild(opt);

    }
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

                    generateNameIDMatchArray(data2);
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
	var shuffleStudents = function(){
		let randomStudentNum=Math.floor(Math.random()*columnArray.length)
						   columnArray.sort();
				   countedStudents.sort();
				   console.log(columnArray.length+" "+columnArray.toString());

				   console.log(countedStudents.length+" "+countedStudents.toString());
		// for (var i = 0; i < columnArray.length; i++) {
			// alert(columnArray[randomStudentNum][0]);
			var fullName = columnArray[randomStudentNum][0].split(', ');
            var testIdName = fullName[1] + " "+fullName[0];
			// if ((i==randomStudentNum)){
				if ((!(countedStudents.includes(JSON.stringify(columnArray[randomStudentNum][0]))))){
					console.warn(columnArray[randomStudentNum][0]);
					if (!repeatingStudents){
						countedStudents.push(JSON.stringify(columnArray[randomStudentNum][0]));
					}
					document.getElementById("groupA").innerHTML = "<div class='card low' id = '" + testIdName + "'><div class='container' style = 'horizontal-align:center; width: 100%'> <h2 style = 'text-align:center'><b>" + testIdName + "</b></h2></div></div>";
				}
				else if (countedStudents.length==columnArray.length){
					alert ("Each card has been pulled, they are now shuffled and beginning again.");
					countedStudents=[];
					shuffleStudents();
					
				}
				else {
					shuffleStudents();
					// break;
				}
	}
	
	
    var generateDropdowns = function (dataArray) {
		
		document.getElementById('shuffleSection').hidden=false;
		document.getElementById('repeatsButton').hidden=false;
		document.getElementById('repeatingMessage').hidden=false;
        columnArray = getCol(data, columnOfStudy);
		document.getElementById('selectionsBox').innerHTML = "<div class = 'scoreRangeSelected row' style='padding-left:60px; padding-top:20px; font-size:xx-large'>Press New Card to pick a new random student<table><tr><td><div class='column' style = 'width: 100%;padding-top:20vh; margin-left: -30px; margin-right: 30px'><button type ='button' id ='submitAssignment' style='font-size: xx-large; padding-top:0px'>New Card</button> </div></td><td><div class = 'sequence-mode column'> <div id='groupA'style = 'width: 50%'></div></div></td></tr></table></div>";
		let stillGotStudents=false;
		// console.log(dataArray[3].toString());
      // document.getElementById("groupA").innerHTML = "Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(" + groupAArray.length + " members)<p>";
                   // $('#assignmentSelect').empty();

				   
		
				
				// }
			// }
		
	
		
        // for (var i = 1; i < dataArray[3].length; i++) {
			// if (dataArray[3][i].includes("MAX")){
            // addAssignmentOption(dataArray[3][i].substring(0, dataArray[3][i].indexOf("MAX")));
			// }
			// else{
				// addAssignmentOption(dataArray[3][i]);
			// }
        // }
        $('#submitAssignment').click(function () {
            // alert ("hi");
            // if (true){
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
// alert ('yo');
console.log("YOU CLICKED ME!!!");
shuffleStudents();
            // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // // }
            // $(".pickassignment").slideToggle();
            // generateSliders();
        });
		        
    }
$('#repeatsButton').click(function () {
	if (repeatingStudents){
	// document.getElementById('repeatsButton').innerHTML="Turn Student Repeating On";
	document.getElementById('repeatsOn').style.backgroundColor='white';
	document.getElementById('repeatsOff').style.backgroundColor='red';
	document.getElementById('repeatingMessage').innerHTML="Students names currently will NOT repeat, they are being taken out of the deck until the deck is complete";
	repeatingStudents=false;
	}
	else{
	// document.getElementById('repeatsButton').innerHTML="Turn Student Repeating Off";
	document.getElementById('repeatingMessage').innerHTML="Students names are currently able to repeat, they are being shuffled back in";
	repeatingStudents=true;
	document.getElementById('repeatsOn').style.backgroundColor='green';
	document.getElementById('repeatsOff').style.backgroundColor='white';
	}
	countedStudents=[];
	     // columnArray = getCol(data, columnOfStudy);
		// document.getElementById('selectionsBox').innerHTML = "<div class = 'scoreRangeSelected' style='padding-left:60px; padding-top:60px; font-size:xx-large; position: absolute'>Press New Card to pick a new random student<div class = 'sequence-mode row'> <div id='groupA'style = 'width: 100%'></div></div><div class='row' style = 'width: 100%;padding-top:10vh'><button type ='button' id ='submitAssignment' style='font-size: xx-large'>New Card</button> </div></div>";
  
		// console.log(dataArray[3].toString());
      // document.getElementById("groupA").innerHTML = "Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(" + groupAArray.length + " members)<p>";
                   // $('#assignmentSelect').empty();
		randomStudentNum=Math.floor(Math.random()*columnArray.length)
		// for (var i = 0; i < columnArray.length; i++) {
			// // var fullName = columnArray[i][0].split(', ');
            // // var testIdName = fullName[1] + " "+fullName[0];
			// if (i==randomStudentNum){
            // // document.getElementById("groupA").innerHTML = document.getElementById("groupA").innerHTML + "<div class='card low' id = '" + testIdName + "'><div class='container' style = 'horizontal-align:center; width: 100%'> <h2 style = 'text-align:center'><b>" + testIdName + "</b></h2></div></div>";
        // }
            // alert ("hi");
            // if (true){
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
// alert ('yo');
// repeats=false;
            // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // // }
            // $(".pickassignment").slideToggle();
            // generateSliders();
        });
    //Step 3: Generate Sliders

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
        // var column = [];
		
        // for (var i = 4; i < matrix.length; i++) {
			// if (columnOfStudy==1){
				// matrix[i][col]=((matrix[i][col]).replace(/[a-z]/gi, '' ));
				// matrix[i][col]=Number((matrix[i][col]).replace(/\//g, ""));
			// }
                // console.log(Number((matrix[i][col])));
            // if (smallestScore > Number((matrix[i][col]))) {
				
                // console.log(Number((matrix[i][col])) + 0);
                // smallestScore = Number((matrix[i][col])) + 0;
            // }
            // if (largestScore < Number((matrix[i][col]))) {
                // largestScore = Number((matrix[i][col])) + 0;
            // }
            // column.push([matrix[i][0], Number(matrix[i][col])]);
        // }

        // return column;
    // }
    // function getNameIDCol(matrix, col) { //put data in for matrix
        // var column = [];
        // for (var i = 1; i < matrix.length; i++) {
            // if (smallestScore > Number((matrix[i][col]))) {
                // smallestScore = Number((matrix[i][col])) + 0;
            // }
            // if (largestScore < Number((matrix[i][col]))) {
                // largestScore = Number((matrix[i][col])) + 0;
            // }
            // column.push([matrix[i][0], Number(matrix[i][col])]);
        // }
		// console.warn(column.toString());
        // return column;
    // }
    // function getBetween(matrix, minScore, maxScore) { //put data in for matrix
        // let columnLocal = [];

        // for (var i = 0; i < matrix.length; i++) {
            // if ((minScore <= Number((matrix[i][1]))) && (maxScore >= Number((matrix[i][1])))) {
                // columnLocal.push([matrix[i][0], Number(matrix[i][1])]);
            // }
        // }
	
        // return columnLocal;
		largestScore=0;
	smallestScore=1000;
        var column = [];
		if (canvas){
			for (var i = (startRow+2); i < matrix.length; i++) {
				try {
				//matrix[i][col]=matrix[i][col].substr(0,matrix[i][col].indexOf(' '));
				}
				catch (error){
				}
				try{
				// console.error(matrix[1][col]);
				if (matrix[1][col]=='(read only)')
				{
				matrix[1][col]=100;
					
				}
		
			// if (columnOfStudy==1){
				// // matrix[i][col]=((matrix[i][col]).replace(/[a-z]/gi, '' ));
				// // matrix[i][col]=Number((matrix[i][col]).replace(/\//g, ""));
				// matrix[i][col]=matrix[i][col].substr(0,matrix[i][col].indexOf(' '));
			
				// matrix[i][col]=Number((matrix[i][col]));
			
				// // console.log(matrix[i][col]);
			// }
					console.log(col);
							
                console.log(Number((matrix[1][col])));
		
				largestScore=Number((matrix[1][col]));
				}
				catch (error){
				}
            if (smallestScore > Number((matrix[i][col]))) {
				
                console.log(Number((matrix[i][col])) + 0);
                smallestScore = Number((matrix[i][col])) + 0;
            }
            if (largestScore < Number((matrix[i][col]))) {
                largestScore = Number((matrix[i][col])) + 0;
            }
							try {
				if (matrix[i][col].includes("(Student)")){
					matrix[i][col]=(matrix[i][col].substr(0,matrix[i][col].indexOf("("))+matrix[i][col].substr(matrix[i][col].indexOf(")")+1, matrix[i][col].length));
				// matrix[i][col]=matrix[i][col].substr(0,matrix[i][col].indexOf(' '));
				}
				}
				catch (error){
					console.error(error);
				}
			console.log("largest score is "+largestScore);
			console.error(matrix[i][canvasSectionColumn]);
            column.push([matrix[i][0], (matrix[i][col]), matrix[i][canvasSectionColumn]]);
        }
		}
		else{
        for (var i = (startRow+1); i < matrix.length; i++) {
			console.log(matrix[i][col]);
				try {
				if (matrix[i][col].includes("(student)")){
				// matrix[i][col]=matrix[i][col].substr(0,matrix[i][col].indexOf(' '));
				}
				}
				catch (error){
					console.error(error);
				}
				// matrix[i][col]=Number((matrix[i][col]));
				console.log(matrix[i][col]);
				
				// console.log(matrix[i][
			// if (columnOfStudy==1){
				// // matrix[i][col]=((matrix[i][col]).replace(/[a-z]/gi, '' ));
				// // matrix[i][col]=Number((matrix[i][col]).replace(/\//g, ""));
				// matrix[i][col]=matrix[i][col].substr(0,matrix[i][col].indexOf(' '));
			
				// matrix[i][col]=Number((matrix[i][col]));
			
				// // console.log(matrix[i][col]);
			// }
                console.log(Number((matrix[i][col])));
            if (smallestScore > Number((matrix[i][col]))) {
				
                console.log(Number((matrix[i][col])) + 0);
                smallestScore = Number((matrix[i][col])) + 0;
            }
            if (largestScore < Number((matrix[i][col]))) {
                largestScore = Number((matrix[i][col])) + 0;
            }
			if (canvas){
			}
			else{
            column.push([matrix[i][0], (matrix[i][col])]);
        }
		}
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


