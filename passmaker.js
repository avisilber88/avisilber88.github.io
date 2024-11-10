$(document).ready(function () {
	//The following are still unfinished: sing a sequence template; import a midi.
	var studentSchoolNameIdsArray=[];
	var canvasSectionColumn =4;
	var startRow=2;
	var talieSheet=false;
	var breakoutfilename;
    var data = null;
    var data2 = null;
	var dataImport = null;
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
	var groupingMethod="homogeneous";
	var canvas=false;
	var selectedSection="none";
	var selectedSemester="none";
	var onlyOneInput=true;
	var absentArray=[];
	var outside=false;
	var otherSynergy=false;
	var sectionArray=[];
	var apClassroom=false;
	var apClassroomAllUnits=false;
	var apClassroomAllAssignments=false;
	var startingColumn=0;
	var passArray=[];
	//var groupingStyle="homogeneous";
    $(".studentsContainerOne").slideToggle();
    $(".studentsContainerTwo").slideToggle();
	
	
	
	let board = document.getElementById("board");
function resize() {

  var height = window.innerHeight;

  var ratio = 1;
  board.width = height;
  board.height = height;
  board.style.width = height+'px';
  board.style.height = height+'px';

}

window.addEventListener('load', resize, false);
window.addEventListener('resize', resize, false);
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
    // function upload(evt) {
        // if (!browserSupportFileUpload()) {
            // alert('The File APIs are not fully supported in this browser!');
        // } else {
            // data = null;
            // var file = evt.target.files[0];
            // var reader = new FileReader();
            // reader.readAsText(file);
            // reader.onload = function (event) {
                // var csvData = event.target.result;
                // data = $.csv.toArrays(csvData);
                // if (data && data.length > 0) {
                    // alert('Imported -' + data.length + '- rows successfully!');
                    // // console.log (data.toString());
                // } else {
                    // alert('No data to import!');
                // }
            // };
            // reader.onerror = function () {
                // alert('Unable to read ' + file.fileName);
            // };
        // }
    // }
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
var arrayTest=[];
var ext="";
async function CSV_XLSX_File_Selected_Event() {
    var id = this.id
    var inputElement = document.getElementById(id)
    let ext = inputElement.value
    ext = ext.split(".")
    ext = ext[ext.length - 1]
    var files = inputElement.files || [];
    if (!files.length) return;
    var file = files[0];
    var reader = new FileReader();
    reader.onloadend = async function (event) {
        var arrayBuffer = reader.result;
        var options = { type: 'array' };
        var workbook = XLSX.read(arrayBuffer, options);
        //console.timeEnd();

        var sheetName = workbook.SheetNames
        var sheet = workbook.Sheets[sheetName]
        var sheet_to_html = XLSX.utils.sheet_to_html(sheet)
        var sheet_to_json = XLSX.utils.sheet_to_json(sheet)

        if (sheet_to_json.length === 0) {
            var sheet_to_csv = [XLSX.utils.sheet_to_csv(sheet)]
            var results = sheet_to_csv
        }

        if (sheet_to_json.length > 0) {
            var results = sheet_to_json
        }

        let Parsed_File_Obj = {
            "sheet_to_html": sheet_to_html,
            "results": results,
            "ext": ext,
        }

        console.log('Parsed_File_Obj')
        console.log(Parsed_File_Obj)
    };
    reader.readAsArrayBuffer(file);
}
    // Method that reads and processes the selected file
	
	  function upload(evt) { //realOne
		  //alert("YO");
		  startRow=2;
	 canvasSectionColumn =4;
		  sectionArray=[];
		  absentArray=[];
		  canvas=false;
            data = null;
		  var id = this.id
    var inputElement = document.getElementById(id)
    ext = inputElement.value
    ext = ext.split(".")
    ext = ext[ext.length - 1]
	ext = ext.toLowerCase();
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
		//console.log(sheet["!ref"]);
		console.log(Object.keys(sheet).length);
		console.log(sheet[Object.keys(sheet)[Object.keys(sheet).length-10]]);
		
		let firstSet=sheet["!ref"].substr(0,sheet["!ref"].indexOf(':'));
		let firstSetColumn=firstSet.substr(0,firstSet.search(/\d/));
		let firstSetRow=firstSet.substr(firstSet.search(/\d/),firstSet.length);;
		let secondSet=sheet["!ref"].substr(1+sheet["!ref"].indexOf(':'), sheet["!ref"].length);
		let secondSetColumn=secondSet.substr(0,secondSet.search(/\d/));
		let secondSetRow=(Number)(secondSet.substr(secondSet.search(/\d/),secondSet.length));
		// let sheetlength=workbook.Sheets[sheetName].size;
		// console.log(sheetlength);
		console.log(firstSet+" "+firstSetColumn+" "+firstSetRow);
		console.log(secondSet+" "+secondSetColumn+" "+secondSetRow);	
	
	// const indexFirstNumber = str.search(/\d/);
		// console.log(sheet["!ref"].substr(sheet["!ref"].indexOf(':'), sheet["!ref"].indexOf
		arrayTest=[];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ"]
let alphabetlimit="";
let alphabetlimitnum=0;
for (var z = 3; z<alphabet.length; z++){
console.log(sheet[alphabet[z]+"2"]);
if (sheet[alphabet[z]+"2"]!=null){
	console.log(sheet[alphabet[z]+"2"]);
	alphabetlimit=alphabet[z];
	alphabetlimitnum=z;
}
}
let numberlimit="";
let numberlimitnum=0;
for (var y = 3; y<200; y++){

if (sheet["A"+y]!=null){
	console.log(sheet["A"+y]);
	//numberlimit=alphabet[z];
	numberlimitnum=y;
}
}
console.log(numberlimitnum); //rows
console.log(alphabetlimit); //columns
let columnLength = alphabetlimitnum+1;//alphabet.indexOf(secondSetColumn);
console.log(columnLength); //columns
for (var j = 1; j<(numberlimitnum+1); j++){
	let newRow=[];
for (var i = 0; i<columnLength; i++){
	if (sheet[alphabet[i]+j]==null){
		newRow.push("");	
	}
	else{
		console.log(sheet[alphabet[i]+j].v);
		newRow.push(sheet[alphabet[i]+j].v+"");
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
					console.log(data);
                    $(".fileupload").slideToggle();
					
		$(".fileuploadImport").slideToggle();
		startRow=2;
		
		// console.log(data[0][2].toString().includes('Login'));
// console.log("stillchugging");
console.log(data[0][0].toString());
		if(data[0][0].toString().includes('Student')){

					if(data[0][2].toString().includes('Login')){
			
	 canvasSectionColumn =3;
		}
		else{
		
	 canvasSectionColumn =38;
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
		else if (data[0][0]=="Roster #"){//this means it is an import of talie's trackers
		canvasSectionColumn =1;
		startRow=0;
		console.log("This is Talie");
		talieSheet=true;
		generateDropdowns(data);
		
		}
		else if (data[0][0].toUpperCase().includes("ACADEMIC YEAR")){
			canvasSectionColumn =5;
	 apClassroom=true;
	 apClassroomAllUnits=false;
	 apClassroomAllAssignments=true;
	console.log("district ap");
			for (var i = 1; i < data.length; i++){
			if (!(sectionArray.includes(data[i][canvasSectionColumn]))){
				sectionArray.push(data[i][canvasSectionColumn]);
			}
		// console.log(sectionArray);
		}
				outside=false;
		checkSections(data);
		}
		else if (data[0][0].toUpperCase().includes("SUBJECT")){
			canvasSectionColumn =5;
	 apClassroom=true;
	 apClassroomAllUnits=true;
	 apClassroomAllAssignments=false;
	console.log("subject ap");
			for (var i = 1; i < data.length; i++){
			if (!(sectionArray.includes(data[i][canvasSectionColumn]))){
				sectionArray.push(data[i][canvasSectionColumn]);
			}
		// console.log(sectionArray);
		}
				outside=false;
		checkSections(data);
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
			console.error("xls");
					data=arrayTest;
					
outside=false;
console.log(data);
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

	
	
	
	
	
	
	
	
	
	//old one
    function uploadold(evt) {
		  var id = this.id
    var inputElement = document.getElementById(id)
    let ext = inputElement.value
    ext = ext.split(".")
    ext = ext[ext.length - 1]
	console.log(ext);	
	if ((extension=='xls')||(extension=='xlsx')){
    var files = inputElement.files || [];
    if (!files.length) return;
    var file = files[0];
    var reader = new FileReader();
    reader.onloadend = async function (event) {
        var arrayBuffer = reader.result;
        var options = { type: 'array' };
        var workbook = XLSX.read(arrayBuffer, options);
        //console.timeEnd();

        var sheetName = workbook.SheetNames
        var sheet = workbook.Sheets[sheetName]
        var sheet_to_html = XLSX.utils.sheet_to_html(sheet)
        var sheet_to_json = XLSX.utils.sheet_to_json(sheet)

        if (sheet_to_json.length === 0) {
            var sheet_to_csv = [XLSX.utils.sheet_to_csv(sheet)]
            var results = sheet_to_csv
        }

        if (sheet_to_json.length > 0) {
            var results = sheet_to_json
        }

        let Parsed_File_Obj = {
            "sheet_to_html": sheet_to_html,
            "results": results,
            "ext": ext,
        }

        console.log('Parsed_File_Obj')
        console.log(Parsed_File_Obj)
    };
	}
	else{
    // reader.readAsArrayBuffer(file);
		var extension='csv';
        if (!browserSupportFileUpload()) {
            alert('The File APIs are not fully supported in this browser!');
        } else {
            data = null;
			let fileLoaded=evt.target;
		if (fileLoaded.files && fileLoaded.files[0]) {
        extension = fileLoaded.files[0].name.split('.').pop().toLowerCase();  //file extension from input file
            // isSuccess = fileTypes.indexOf(extension) > -1;  //is extension in acceptable types

        // if (isSuccess) { //yes
            // var reader = new FileReader();
            // reader.onload = function (e) {
                // alert('image has read completely!');
            // }

            // reader.readAsDataURL(fileLoaded.files[0]);
        // }
		}
        else { //no
            //warning
        }
    
            var file = evt.target.files[0];
            reader = new FileReader();
			
				reader.readAsText(file);
			// reader.read(file);
				// reader.readAsDataURL(file);
            reader.onload = function (event) {
				if ((extension=='xls')||(extension=='xlsx')){
					console.log(evt.target.result);
				    var tempData = new Uint8Array(evt.target.result);
					console.log(tempData);
					var workbook = XLSX.read(tempData, {type: 'array'});
					console.log(workbook);
					var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
					 var result = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
					data=result;
					console.log(data);
     // header: 1 instructs xlsx to create an 'array of arrays'
				}
				else{
					
                var csvData = evt.target.result;
                data = $.csv.toArrays(csvData);
				}
			}
                if (data && data.length > 0) {
                    // alert('Imported -' + data.length + '- rows successfully!');
                    // console.log (data[2].toString());

                    $(".fileupload").slideToggle();
					
		$(".fileuploadImport").slideToggle();
		// alert("yo");
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
		canvas=true;
	
		for (var i = 2; i < data.length; i++){
			if (!(sectionArray.includes(data[i][canvasSectionColumn]))){
				sectionArray.push(data[i][canvasSectionColumn]);
			}
		// console.log(sectionArray);
		}
		
		startRow=0;
		if (sectionArray.length>1){
		console.log("hi");	
		outside=false;
		generateDropdowns(data);
		
		// checkSections(data);
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
	var makeListForInvert = function (){
		// document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:xx-large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        // $('#assignmentSelect').empty();
		
       // let nameArray=getNameIDCol(data2+"", 4);// columnArray = getCol(data, columnOfStudy);
		// console.log(nameArray.toString());
	   // let idArray=getNameIDCol(data2, 0);
	   // let nameIDArray=[]
        // for (var i = 1; i < data2.length; i++) {
           // nameIDArray.push([data2[i][4]+"", idArray[i-1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        // }
		// console.log(nameIDArray.toString());
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
				console.warn(allStudentBoxIds[boxid][0]);
				console.warn(document.getElementById(groupNamesArray[parentnum][0]).innerHTML);
						//for (var i = 0; i < nameIDArray.length; i++) {
							//if (nameIDArray[i][0].includes(allStudentBoxIds[boxid][1])){
								//console.warn(nameIDArray.toString());
								groupThenNameArray.push([JSON.parse(JSON.stringify("Group "+parentnum)), JSON.parse(JSON.stringify(allStudentBoxIds[boxid][1])).substring(0, JSON.parse(JSON.stringify(allStudentBoxIds[boxid][1])).length)]);
							//}
							
							// rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
						//}
				// console.warn(nameIdArray.indexOf(allStudentBoxIds[boxid][1]
			}
		}
		
		
	}
	 console.warn(groupThenNameArray.toString());
			
}
for (var i = 0; i < groupThenNameArray.length; i++) {
			// console.warn(nameIDArray[i][1]);
			tempNameHere=groupThenNameArray[i][1];
			groupThenNameArray[i][1] = tempNameHere.split(', ').slice(-1).join(' ')+ " " + tempNameHere.split(', ').slice(0, -1).join(' ');			
           rowsInExport.push([groupThenNameArray[i][0], groupThenNameArray[i][1]]);//, groupThenNameArray[i][1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
	// rowsInExport.sort();
	rowsInExport.unshift(["Group", "Names"]);
	generateInvert(rowsInExport);
		// breakoutfilename=prompt ("What would you like to call your breakout rooms pre-assign csv?")+".csv";
 // console.warn(groupThenNameArray.toString());
		// let csvContent = "data:text/csv;charset=utf-8," + rowsInExport.map(e => e.join(",")).join("\n").replace(/"/g,"");
		// var encodedUri = encodeURI(csvContent);
// var link = document.createElement("a");
// link.setAttribute("href", encodedUri);
// link.setAttribute("download", breakoutfilename);
// document.body.appendChild(link); // Required for FF

// link.click();
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
	
	var generateNameIDArrayForZoom = function (){
	// document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:xx-large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        // $('#assignmentSelect').empty();
		console.warn(data);
	
       let nameArray=getNameIDCol(data+"", 4);// columnArray = getCol(data, columnOfStudy);
if (canvas){
nameArray=getNameIDCol(data+"", 4);
}
		console.log(nameArray.toString());
	   let idArray=getNameIDCol(data, 1);
	   let nameIDArray=[]
        for (var i = 1; i < data.length; i++) {
           nameIDArray.push([data[i][4]+"", idArray[i-1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
		console.log(nameIDArray.toString());
		let rowsInExport = [];
	
		
		for (var i = 0; i < nameIDArray.length; i++) {
			console.warn(nameIDArray[i][1]);
           rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
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
				console.warn(allStudentBoxIds[boxid][0]);
				console.warn(document.getElementById(groupNamesArray[parentnum][0]).innerHTML);
						for (var i = 0; i < nameIDArray.length; i++) {
							if (nameIDArray[i][0].includes(allStudentBoxIds[boxid][1])){
								console.warn(nameIDArray.toString());
								groupThenNameArray.push([JSON.stringify("Group "+parentnum), JSON.stringify(allStudentBoxIds[boxid][1]+""), document.getElementById(groupNamesArray[parentnum][0]).innerHTML.substring(6, document.getElementById(groupNamesArray[parentnum][0]).innerHTML.indexOf("button")-1)]);
							}
							rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
						}
				// console.warn(nameIdArray.indexOf(allStudentBoxIds[boxid][1]
			}
		}
		
		
	}
			
}
for (var i = 0; i < groupThenNameArray.length; i++) {
			console.warn(nameIDArray[i][1]);
			tempNameHere=groupThenNameArray[i][1];
			groupThenNameArray[i][1] = tempNameHere.split(', ').slice(-1).join(' ')+ " " + tempNameHere.split(', ').slice(0, -1).join(' ');			
           rowsInExport.push([groupThenNameArray[i][0], groupThenNameArray[i][1],groupThenNameArray[i][2]]);//, groupThenNameArray[i][1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
	// rowsInExport.sort();
	rowsInExport.unshift(["Group", "Names"]);

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
	
	
	var generateNameIDMatchArray2 = function (){
		// document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:xx-large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        // $('#assignmentSelect').empty();
		
       // let nameArray=getNameIDCol(data2+"", 4);// columnArray = getCol(data, columnOfStudy);
		// console.log(nameArray.toString());
	   // let idArray=getNameIDCol(data2, 0);
	   // let nameIDArray=[]
        // for (var i = 1; i < data2.length; i++) {
           // nameIDArray.push([data2[i][4]+"", idArray[i-1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        // }
		// console.log(nameIDArray.toString());
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
				console.warn(allStudentBoxIds[boxid][0]);
				console.warn(document.getElementById(groupNamesArray[parentnum][0]).innerHTML);
						//for (var i = 0; i < nameIDArray.length; i++) {
							//if (nameIDArray[i][0].includes(allStudentBoxIds[boxid][1])){
								//console.warn(nameIDArray.toString());
								groupThenNameArray.push([JSON.stringify("Group "+parentnum), JSON.stringify(allStudentBoxIds[boxid][1]+""), document.getElementById(groupNamesArray[parentnum][0]).innerHTML.substring(6, document.getElementById(groupNamesArray[parentnum][0]).innerHTML.indexOf("button")-1)]);
							//}
							// rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
						//}
				// console.warn(nameIdArray.indexOf(allStudentBoxIds[boxid][1]
			}
		}
		
		
	}
			
}
for (var i = 0; i < groupThenNameArray.length; i++) {
			// console.warn(nameIDArray[i][1]);
			tempNameHere=groupThenNameArray[i][1];
			groupThenNameArray[i][1] = tempNameHere.split(', ').slice(-1).join(' ')+ " " + tempNameHere.split(', ').slice(0, -1).join(' ');			
           rowsInExport.push([groupThenNameArray[i][0], groupThenNameArray[i][1],groupThenNameArray[i][2]]);//, groupThenNameArray[i][1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
	// rowsInExport.sort();
	rowsInExport.unshift(["Group", "Names"]);

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
	var generateNameIDMatchArray = function (dataArray){
		// document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:xx-large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        // $('#assignmentSelect').empty();
		let nameIDArray=[]
if (!canvas){
       let nameArray=getNameIDColNew(data2+"", 0);// columnArray = getCol(data, columnOfStudy);
		// console.log(nameArray.toString());
	   let idArray=getNameIDColNew(data2, 0);
	   console.error(idArray);
	   // let nameIDArray=[]
        for (var i = 1; i < data2.length; i++) {
		  // let temporaryFullName = data2[i][canvasSectionColumn]+"";
		  // let temporaryIdName = temporaryFullName.split(', ').slice(-1).join(' ')+ " " + temporaryFullName.split(', ').slice(0, -1).join(' ');	
          // let temporaryIDTag = temporaryIdName.replace(/\s+/g, '');
           nameIDArray.push([nameArray[i]+"", idArray[i-1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
}
else{
	   let nameArray=getNameIDCol(data+"", canvasSectionColumn);// columnArray = getCol(data, columnOfStudy);
		console.log(nameArray.toString());
	   let idArray=getNameIDColNew(data, 3);
	   console.error(idArray);
	   
        for (var i = 1; i < data.length; i++) {
 		  // let temporaryFullName = data[i][canvasSectionColumn]+"";
		  // let temporaryIdName = temporaryFullName.split(', ').slice(-1).join(' ')+ " " + temporaryFullName.split(', ').slice(0, -1).join(' ');	
          // let temporaryIDTag = temporaryIdName.replace(/\s+/g, '');
           // nameIDArray.push([temporaryIDTag, idArray[i-1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
          nameIDArray.push([data[i][canvasSectionColumn]+"", idArray[i-1]]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
}
		console.log(nameIDArray);
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
		console.warn(subgroup[childnum].id);	
		console.warn(allStudentBoxIds.length);
		for (let boxid = 0; boxid < allStudentBoxIds.length; boxid++){
				console.log(allStudentBoxIds[boxid][0]);
				console.log(subgroup[childnum].id);
			if (allStudentBoxIds[boxid][0]==subgroup[childnum].id){
				console.warn(allStudentBoxIds[boxid][1]);
						for (var i = 0; i < nameIDArray.length; i++) {
							if (nameIDArray[i][1].includes(allStudentBoxIds[boxid][0])){
								console.warn(nameIDArray.toString());
								// groupThenNameArray.push([JSON.stringify("room"+parentnum), JSON.stringify(allStudentBoxIds[boxid][1]+""), JSON.stringify(nameIDArray[i][1][0]+"@mcpsmd.net")]);
								groupThenNameArray.push([JSON.stringify("room"+parentnum), JSON.stringify(allStudentBoxIds[boxid][1]+""), JSON.stringify(nameIDArray[i][1][1])]);
							}
							// rowsInExport.push(["room"+i, (nameIDArray[i][1][0]+"@mcpsmd.net")]); //addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
						}
				// console.warn(nameIdArray.indexOf(allStudentBoxIds[boxid][1]
			}
		}
		
		
	}
			
}
for (var i = 0; i < groupThenNameArray.length; i++) {
			console.warn(nameIDArray[i][1]);
			
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

    var checkSections = function (data) {
		document.getElementById('selectionsBox').innerHTML = "<div class = 'picksection' style = 'width:auto'>What Period do you want the passes delivered to?<br><select id = 'sectionSelect' name = 'sectionSelect' style = 'font-size:large; width:auto; max-width:300px;'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitSection' style='font-size: xx-large'>Submit</button></div>";
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
		checkSemester(data);
        });

	};
	
	 var checkSemester = function (data) {
		document.getElementById('selectionsBox').innerHTML = "<div class = 'picksection' style = 'width:auto'>What Semester do you want?<br><select id = 'sectionSelect' name = 'sectionSelect' style = 'font-size:large; width:auto; max-width:300px;'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitSection' style='font-size: xx-large'>Submit</button></div>";
  				$('#sectionSelect').empty();
				
addSectionOption('S1');
addSectionOption('S2');
	
        
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
			selectedSemester=(document.getElementById("sectionSelect").options[document.getElementById("sectionSelect").selectedIndex].innerHTML);
            // }

            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
            $(".picksection").slideToggle();
		generateDropdowns(data);
        });

	};
	
	
    //Step 2: Generate dropdown menus.
    var generateDropdowns = function (dataArray) {
		console.log(dataArray);
		//console.log(dataArray[2][0]);
		console.log(canvas);
		if (canvas){
		}
		else if(dataArray[2][0].toString().includes('Student')){
			
		}
		else if (dataArray[3][0].toString().includes('Student')){
			startRow=3;
		}
		else if (dataArray[0][0].toString().includes('Student')){
		console.error("OTHER SYNERGY");
		otherSynergy=true;
		startRow=1;
		}
		if (apClassroom){
			startRow=0;
			console.log(startRow);
		}
		console.log(dataArray[startRow].toString());
        document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment' style = 'width:auto'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:large; width:auto; max-width:300px;'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        $('#assignmentSelect').empty();
		if (canvas){
			for (var i = (canvasSectionColumn+1); i < dataArray[startRow].length; i++) {
			if (dataArray[startRow][i].includes("MAX")){
				addAssignmentOption(dataArray[startRow][i].substring(0, dataArray[startRow][i].indexOf("MAX")));
			}			
			else if (dataArray[startRow+1][i]==(0)){
				// addAssignmentOption(dataArray[startRow][i]);
			}
			else{
				addAssignmentOption(dataArray[startRow][i]);
			}
        }
		
        $('#submitAssignment').click(function () {
            // alert ("hi");
            // if (true){
				
            // for (var i = (canvasSectionColumn+1); i < dataArray[startRow].length; i++) {
				// // console.error(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML+" "+(dataArray[startRow][i]));
				
					// console.log(dataArray[startRow][i].toString()+"");
				// // console.log(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
				// // console.log(dataArray[startRow][i]);
				// if (((document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML+"").replace('&amp;', '&'))==(dataArray[startRow][i].toString()+"")) {
                    // columnOfStudy = i + 0;
				// // alert ("hi");
                // }
				// else if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == ("Grade")){
				// columnOfStudy = 1;
				// }
				// else{
								
				// }
				
			
				// }
			
				
				
				// if (apClassroomAllAssignments){
				
				// }
				// else if (apClassroomAllUnits){
				
				// }
				
            // // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // // }
			
			for (var i = 1; i < dataArray.length; i++){
				//console.log(dataArray[i][canvasSectionColumn]);
				if ((selectedSection==dataArray[i][canvasSectionColumn])&&(selectedSemester==dataArray[i][50])){ //if row i
				console.warn("Dear "+dataArray[i][41] +" please give this pass to "+dataArray[i][3]+ " "+dataArray[i][4]+" to take pictures on date ");
				passArray.push([dataArray[i][41], dataArray[i][3], dataArray[i][4]]);
				}
			}
			generatePasses();
            $(".pickassignment").slideToggle();
           // generateSliders();
        });
		}
		else{
			if (otherSynergy){
				console.log(startRow);
				console.log(dataArray[startRow]);
			for (var i = 3; i < dataArray[startRow].length; i++) {
		   console.log(dataArray[startRow][i]=="");
			
            // addAssignmentOption(dataArray[startRow][i].substring(0, dataArray[startRow][i].indexOf("MAX")));
			
			// if (dataArray[startRow][i]==("")){
				// // addAssignmentOption(dataArray[startRow][i]);
			// }
			// else{
				addAssignmentOption(dataArray[startRow][i]);
			// }
        }
			}
			else{
	   for (var i = 1; i < dataArray[startRow].length; i++) {
		   // console.log(dataArray[startRow][i]=="");
			if (dataArray[startRow][i].includes("MAX")){
            addAssignmentOption(dataArray[startRow][i].substring(0, dataArray[startRow][i].indexOf("MAX")));
			}
			else if (dataArray[startRow][i]==("")){
				// addAssignmentOption(dataArray[startRow][i]);
			}
						else if (dataArray[startRow][i]==("Name")){
				// addAssignmentOption(dataArray[startRow][i]);
			}
			else{
				addAssignmentOption(dataArray[startRow][i]);
			}
        }
			}
        $('#submitAssignment').click(function () {
            // alert ("hi");
            // if (true){
				// console.log(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
				// console.log(dataArray[startRow][i]);
			let startingRow=1;
			if (otherSynergy){
			startingRow=3;
			}
			if (apClassroom){
				startingRow=0;
			}
			console.error(startingRow + " and start row is "+startRow);
            for (var i = startingRow; i < dataArray[startRow].length; i++) {
				console.log(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML.replace('&amp;', '&'));
				console.log((dataArray[startRow][i]));
                if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == (dataArray[startRow][i].substring(0, dataArray[startRow][i].indexOf("MAX")))) {
                    columnOfStudy = i + 0;
                }
				else if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML.replace('&amp;', '&') == (dataArray[startRow][i])) {
                    columnOfStudy = i + 0;
                }
				else if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == ("Grade")){
				columnOfStudy = 1;
				}
				if (apClassroom){
					console.log(dataArray[startRow][i].toString()+"");
            if ((dataArray[startRow][i].toString()+"").toUpperCase().includes("POINTS EARNED")){
				if (apClassroomAllAssignments){
					if ((dataArray[startRow][i].toString()+"").includes("(teacher scored)")){
						columnOfStudy=i+0;
					}
				console.error("Points Earned");
				
				}
				else{
					columnOfStudy=i+0;
				}
			}
			else if ((dataArray[startRow][i].toString()+"").toUpperCase().includes("LAST NAME")){
				console.error("Last Name");
				startingColumn=i;
			}
				}
            }
			console.log(columnOfStudy);
            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
            $(".pickassignment").slideToggle();
            generateSliders();
        });

		}
		document.getElementById('submitAssignment').click();
				if (apClassroom){
		document.getElementById('submitAssignment').click();
		}
		
    }


//Step 2B: Grouping Style


    var generatePasses = function () {
		document.getElementById('selectionsBox').innerHTML = '<div class="col-xs-8 col-xs-offset-2" >		<font color= "Black"> Reason for the pass:<br>	<font color= "black">		<input type="text" name="programAnswer" id = "programAnswer" value=""><br><br>	Write Date of Pass Here:<br>	<font color= "black">		<input type="text" name="dayAnswer" id = "dayAnswer" value=""><br><br>	Write Time Here:<br>	<font color= "black">		<input type="text" name="timeAnswer" id = "timeAnswer" value=""><br><br>	Write Destination Here:<br><font color= "black">		<input type="text" name="locationAnswer" id = "locationAnswer" value=""><br><br>		<button type ="button" id ="submitAssignment">submit</button> <br><br>Below is an example of what each pass will look like based on your above inputs: <br><br> <span id="textExample"></span>	</div>'
		let tableStyle= "style = 'border-style: dashed; border-width:1px; padding: 20px '";
        let tableWriter="<table "+tableStyle+">";
		passArray.sort();
			$('#submitAssignment').click(function () {
		let programName=document.getElementById("programAnswer").value;
		let dateName=document.getElementById("dayAnswer").value;
		let timeName=document.getElementById("timeAnswer").value;
		let locationName=document.getElementById("locationAnswer").value;
	
		for (var i=0; i < passArray.length; i++){
		tableWriter=tableWriter+'\n'+'<tr  '+tableStyle+">"+'<td '+tableStyle+">"+"Dear "+passArray[i][0] +" please give this pass to "+passArray[i][1]+ " "+passArray[i][2]+" so they can participate in "+programName+" on " + dateName + " at " + timeName + " in "+locationName+"."+ '</td></tr>';
		console.warn("Dear "+passArray[i][0] +" please give this pass to "+passArray[i][1]+ " "+passArray[i][2]+" to take pictures on date ");
		}
		tableWriter=tableWriter+'</table>';
		
		document.getElementById('selectionsBox').innerHTML = tableWriter;
		})
		document.getElementsByName("programAnswer")[0].addEventListener('input', doThing);
		document.getElementsByName("dayAnswer")[0].addEventListener('input', doThing);
		document.getElementsByName("timeAnswer")[0].addEventListener('input', doThing);
		document.getElementsByName("locationAnswer")[0].addEventListener('input', doThing);
		

/* Function */
		function doThing(){
		let programName2=document.getElementById("programAnswer").value;
		let dateName2=document.getElementById("dayAnswer").value;
		let timeName2=document.getElementById("timeAnswer").value;
		let locationName2=document.getElementById("locationAnswer").value;
			document.getElementById("textExample").innerHTML="Dear [Teacher Name] please give this pass to [Student Name]  so they can participate in "+programName2+" on " + dateName2 + " at " + timeName2 + " in "+locationName2+".";
		}
			$('#timeAnswer').keypress(function (e) {
		if (e.keyCode == 13)
			$('#submitAssignment').click();
		
		$('#timeAnswer')
	});
		
	}

    //Step 3: Generate Sliders

    var generateSliders = function () {
		// largestScore=1;
		// smallestScore=0;
		nottargetednum=0;
		console.log(data);
		console.log(columnOfStudy);
        columnArray = getCol(data, columnOfStudy);
for(var i=0; i < columnArray.length; i++) {
	console.warn(columnArray[i].toString());
 //columnArray[i] = columnArray[i].replace('Ex', 0);
}
	
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
		console.log(groupAArray);
        groupAArray = getBetween(columnArray, smallestScore-.01, scoreCutoffOne);
        groupBArray = getBetween(columnArray, scoreCutoffOne, scoreCutoffTwo);
        groupCArray = getBetween(columnArray, scoreCutoffTwo, largestScore+.01);
		
			let groupAAbsent=0;
			let groupBAbsent=0;
			let groupCAbsent=0;
					for (var i = 0; i < groupAArray.length; i++) {
										if (canvas){
			if (groupAArray[i][0].includes('('))
				groupAArray[i][0] = groupAArray[i][0].substr(0,groupAArray[i][0].indexOf('(')) + "";
			}
				if (absentArray.includes(groupAArray[i][0])){
					groupAAbsent++;
			}
			}
			for (var i = 0; i < groupBArray.length; i++) {
				 			if (canvas){
			if (groupBArray[i][0].includes('('))
				groupBArray[i][0] = groupBArray[i][0].substr(0,groupBArray[i][0].indexOf('(')) + "";
			}
         		if (absentArray.includes(groupBArray[i][0])){
				groupBAbsent++;
				}

			}
				for (var i = 0; i < groupCArray.length; i++) {
									  						if (canvas){
            			if (groupCArray[i][0].includes('('))
							groupCArray[i][0] = groupCArray[i][0].substr(0,groupCArray[i][0].indexOf('(')) + "";
			}
					if (absentArray.includes(groupCArray[i][0])){
					groupCAbsent++;
					}
			}
		console.log(groupAArray);
        document.getElementById("groupA").innerHTML = "Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(<span id = 'groupACount'>"+(groupAArray.length-groupAAbsent) + "</span> members)<p>";
            document.getElementById("groupB").innerHTML = "Students scoring " + scoreCutoffOne + ".01 to " + scoreCutoffTwo + "<br>(<span id = 'groupBCount'>"+(groupBArray.length-groupBAbsent) + "</span> members)<p>";
            document.getElementById("groupC").innerHTML = "Students scoring " + scoreCutoffTwo + ".01 to " + largestScore + "<br>(<span id = 'groupCCount'>"+(groupCArray.length-groupCAbsent) + "</span> members)<p>";
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
		if (canvas){
			if (groupAArray[i][0].includes('('))
				groupAArray[i][0] = groupAArray[i][0].substr(0,groupAArray[i][0].indexOf('(')) + "";
			}
			var testIdName = groupAArray[i][0] + "";

            document.getElementById("groupA").innerHTML = document.getElementById("groupA").innerHTML + "<div class='card low' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
        }
        for (var i = 0; i < groupBArray.length; i++) {
 			if (canvas){
			if (groupBArray[i][0].includes('('))
				groupBArray[i][0] = groupBArray[i][0].substr(0,groupBArray[i][0].indexOf('(')) + "";
			}
			var testIdName = groupBArray[i][0] + "";

            document.getElementById("groupB").innerHTML = document.getElementById("groupB").innerHTML + "<div class='card medium' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
        }
        for (var i = 0; i < groupCArray.length; i++) {
  						if (canvas){
			if (groupCArray[i][0].includes('('))
				groupCArray[i][0] = groupCArray[i][0].substr(0,groupCArray[i][0].indexOf('(')) + "";
			}
			var testIdName = groupCArray[i][0] + "";

            document.getElementById("groupC").innerHTML = document.getElementById("groupC").innerHTML + "<div class='card high' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";

        }
		for (var i = 0; i < groupAArray.length; i++) {
				if ((absentArray.includes(groupAArray[i][0]))&&(!(document.getElementById(groupAArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupAArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
				}
			}
			for (var i = 0; i < groupBArray.length; i++) {

         		if ((absentArray.includes(groupBArray[i][0]))&&(!(document.getElementById(groupBArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupBArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
				}

			}
				for (var i = 0; i < groupCArray.length; i++) {
					if ((absentArray.includes(groupCArray[i][0]))&&(!(document.getElementById(groupCArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupCArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
					}

			}
        slider.noUiSlider.on('change', function () {
			
            scoreCutoffOne = Number(slider.noUiSlider.get()[0]);
            scoreCutoffTwo = Number(slider.noUiSlider.get()[1]);
			nottargetednum=0;
            // var testIdName= "student";
			console.warn(groupAArray);
			console.warn(columnArray.toString());
            groupAArray = getBetween(columnArray, smallestScore - .01, scoreCutoffOne);
            groupBArray = getBetween(columnArray, scoreCutoffOne, scoreCutoffTwo);
            groupCArray = getBetween(columnArray, scoreCutoffTwo, largestScore+.01);
			
			let groupAAbsent=0;
			let groupBAbsent=0;
			let groupCAbsent=0;
			
			for (var i = 0; i < groupAArray.length; i++) {
										if (canvas){
			if (groupAArray[i][0].includes('('))
				groupAArray[i][0] = groupAArray[i][0].substr(0,groupAArray[i][0].indexOf('(')) + "";
			}
				if (absentArray.includes(groupAArray[i][0])){
					groupAAbsent++;
			}
			}
			for (var i = 0; i < groupBArray.length; i++) {
				 			if (canvas){
			if (groupBArray[i][0].includes('('))
				groupBArray[i][0] = groupBArray[i][0].substr(0,groupBArray[i][0].indexOf('(')) + "";
			}
         		if (absentArray.includes(groupBArray[i][0])){
				groupBAbsent++;
				}

			}
				for (var i = 0; i < groupCArray.length; i++) {
									  						if (canvas){
            			if (groupCArray[i][0].includes('('))
							groupCArray[i][0] = groupCArray[i][0].substr(0,groupCArray[i][0].indexOf('(')) + "";
			}
					if (absentArray.includes(groupCArray[i][0])){
					groupCAbsent++;
					}
			}
			console.warn(groupAArray);
       
        document.getElementById("groupA").innerHTML = "Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(<span id = 'groupACount'>"+(groupAArray.length-groupAAbsent) + "</span> members)<p>";
            document.getElementById("groupB").innerHTML = "Students scoring " + scoreCutoffOne + ".01 to " + scoreCutoffTwo + "<br>(<span id = 'groupBCount'>"+(groupBArray.length-groupBAbsent) + "</span> members)<p>";
            document.getElementById("groupC").innerHTML = "Students scoring " + scoreCutoffTwo + ".01 to " + largestScore + "<br>(<span id = 'groupCCount'>"+(groupCArray.length-groupCAbsent) + "</span> members)<p>";
			console.log("an array " + groupAArray.toString());
            console.log("an array " + groupBArray.toString());
            console.log("an array " + groupCArray.toString());
            for (var i = 0; i < groupAArray.length; i++) {
						if (canvas){
			if (groupAArray[i][0].includes('('))
				groupAArray[i][0] = groupAArray[i][0].substr(0,groupAArray[i][0].indexOf('(')) + "";
			}
                var testIdName = groupAArray[i][0] + "";
			if (canvas){
            // testIdName = groupAArray[i][0].substr(0,groupAArray[i][0].indexOf('(')) + "";
			}
                document.getElementById("groupA").innerHTML = document.getElementById("groupA").innerHTML + "<div class='card low' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            }

            for (var i = 0; i < groupBArray.length; i++) {
				 			if (canvas){
			if (groupBArray[i][0].includes('('))
				groupBArray[i][0] = groupBArray[i][0].substr(0,groupBArray[i][0].indexOf('(')) + "";
			}
                var testIdName = groupBArray[i][0] + "";
						if (canvas){
            // testIdName = groupBArray[i][0].substr(0,groupBArray[i][0].indexOf('(')) + "";
			}
                document.getElementById("groupB").innerHTML = document.getElementById("groupB").innerHTML + "<div class='card medium' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            }
            for (var i = 0; i < groupCArray.length; i++) {
				  						if (canvas){
            			if (groupCArray[i][0].includes('('))
							groupCArray[i][0] = groupCArray[i][0].substr(0,groupCArray[i][0].indexOf('(')) + "";
			}
                var testIdName = groupCArray[i][0] + "";
				if (canvas){
            // testIdName = groupCArray[i][0].substr(0,groupCArray[i][0].indexOf('(')) + "";
			}
                document.getElementById("groupC").innerHTML = document.getElementById("groupC").innerHTML + "<div class='card high' id = '" + testIdName + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            }

            // "<input type='text'  name='organicCompoundCoefficient' id = '"+ testIdName +"'value='"+testIdName+"'></input>";
            var totalStudents = largestScore - smallestScore;
            var percentA = (scoreCutoffOne - smallestScore) / totalStudents * 100;
            var percentB = (scoreCutoffTwo - smallestScore) / totalStudents * 100;

            // var percentC=groupCArray.length/totalStudents*100+percentB+percentA;
            // alert (percentA+" "+percentB);
            $('.noUi-connects').css("background", 'linear-gradient(to right, #FFBABA ' + percentA + '%, #77D5D5 ' + percentA + '%, #77D5D5 ' + percentA + '%, #77D5D5 ' + percentB + '%, #83EA83 ' + percentB + '%)');
			for (var i = 0; i < groupAArray.length; i++) {
				if ((absentArray.includes(groupAArray[i][0]))&&(!(document.getElementById(groupAArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupAArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
				}
			}
			for (var i = 0; i < groupBArray.length; i++) {

         		if ((absentArray.includes(groupBArray[i][0]))&&(!(document.getElementById(groupBArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupBArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
				}

			}
				for (var i = 0; i < groupCArray.length; i++) {
					if ((absentArray.includes(groupCArray[i][0]))&&(!(document.getElementById(groupCArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupCArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
					}

			}
        });
		
			for (var i = 0; i < groupAArray.length; i++) {
				if ((absentArray.includes(groupAArray[i][0]))&&(!(document.getElementById(groupAArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupAArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
				}
			}
			for (var i = 0; i < groupBArray.length; i++) {

         		if ((absentArray.includes(groupBArray[i][0]))&&(!(document.getElementById(groupBArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupBArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
				}

			}
				for (var i = 0; i < groupCArray.length; i++) {
					if ((absentArray.includes(groupCArray[i][0]))&&(!(document.getElementById(groupCArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupCArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
					}
					

			}
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
	// if (otherSynergy){
	// col=col+3;
	// }
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
			
				console.log(matrix[i][0]);
			// }
					console.log(col);
							
                console.log(Number((matrix[1][col])));
		
				largestScore=Number((matrix[1][col]));
				}
				catch (error){
				}
				console.error(matrix[i][col]);
			matrix[i][col]=matrix[i][col].replace('EX', 0);
			console.error(matrix[i][col]);
            if (smallestScore > Number((matrix[i][col]))) {
				
                console.log(Number((matrix[i][col])) + 0);
                smallestScore = Number((matrix[i][col])) + 0;
            }
            if (largestScore < Number((matrix[i][col]))) {
                largestScore = Number((matrix[i][col])) + 0;
            }
			console.log("largest score is "+largestScore);
			console.error(matrix[i][canvasSectionColumn]);
			matrix[i][0]=matrix[i][0].replace(/'/g, '');
			matrix[i][0]=matrix[i][0].replace('Ex', 0);
            column.push([matrix[i][0], Number(matrix[i][col]), matrix[i][canvasSectionColumn]]);
        }
		}	
		else{
        for (var i = (startRow+1); i < matrix.length; i++) {
			console.log(matrix[i][col]);
			console.log(matrix[i][1]);
			matrix[i][0]=matrix[i][0].replace(/'/g, '');
			if (apClassroom){
				
				matrix[i][startingColumn]=matrix[i][startingColumn].replace(/'/g, '');
				matrix[i][startingColumn+1]=matrix[i][startingColumn+1].replace(/'/g, '');
			}
				try {
				if (matrix[i][col].includes(" ")){
				matrix[i][col]=matrix[i][col].substr(0,matrix[i][col].indexOf(' '));
				}
				}
				catch (error){
					console.error(error);
				}
				matrix[i][col]=Number((matrix[i][col]));
				console.log(matrix[i][col]);
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
				console.log("text");
				if (talieSheet){
				
			console.log("THIS IS TALIE's");
			
				column.push([matrix[i][1], Number(matrix[i][col])]);
				}
			else if (!apClassroom){	
            column.push([matrix[i][0], Number(matrix[i][col])]);
			}
			else{
			console.log(""+matrix[i][startingColumn+1]+" "+matrix[i][startingColumn]);
            column.push([matrix[i][startingColumn+1]+" "+matrix[i][startingColumn], Number(matrix[i][col]), matrix[i][canvasSectionColumn]]);
			}
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
			matrix[i][0]=matrix[i][0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
            column.push([matrix[i][0], Number(matrix[i][col])]);
        }
		console.warn(column.toString());
        return column;
    }
	    function getNameIDColNew(matrix, col) { //put data in for matrix
        var column = [];
		if (canvas){
        for (var i = 1; i < matrix.length; i++) {
		
			let temporaryFullName = matrix[i][0]+"";
			matrix[i][0]=matrix[i][0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		  let preTempIdName = temporaryFullName.split('(S').slice(0, -1).join(' ')
		  let temporaryIdName = preTempIdName.split(', ').slice(-1).join(' ')+ " " + preTempIdName.split(', ').slice(0, -1).join(' ');	
		  //temporaryIdName = temporaryIdName.replace(/[^\p{L}\s]/gu,"");
          let temporaryIDTag = temporaryIdName.replace(/-|\s+/g, '');
           // nameIDArray.push([temporaryIDTag, idArray[i-1]]);
		
            column.push([temporaryIDTag, (matrix[i][col])]);
        }
		}
		else{
		        for (var i = 1; i < matrix.length; i++) {
		
			let temporaryFullName = matrix[i][4]+"";
			
			matrix[i][4]=matrix[i][4].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		let preTempIdName = temporaryFullName;
		if (preTempIdName.includes('.')){
			// alert ("yo");
		  preTempIdName = temporaryFullName.substring (0, temporaryFullName.length-3);
		  console.error(preTempIdName);
		}
		  let temporaryIdName = preTempIdName.split(', ').slice(-1).join(' ')+ " " + preTempIdName.split(', ').slice(0, -1).join(' ');	
		  //temporaryIdName = temporaryIdName.replace(/[^\p{L}\s]/gu,"");
          let temporaryIDTag = temporaryIdName.replace(/\s+/g, '');
           // nameIDArray.push([temporaryIDTag, idArray[i-1]]);
		
            column.push([temporaryIDTag, (matrix[i][0])+'@mcpsmd.net']);
        }
		
		}
		console.warn(column.toString());
        return column;
    }
    function getBetween(matrix, minScore, maxScore) { //put data in for matrix
		console.warn(matrix);
		let columnLocal = [];
		console.log(minScore+ " "+maxScore);
        for (var i = 0; i < matrix.length; i++) {
			console.warn((matrix[i][1]).toString());
			console.warn(" "+matrix[i][1]);
			console.warn(minScore +" "+maxScore);
			
            if ((minScore < Number((matrix[i][1]))) && (maxScore >= Number((matrix[i][1])))) {
				if (canvas){
					console.error(selectedSection+" "+matrix[i][2]);
				if ((selectedSection=="none")||(selectedSection==matrix[i][2])){
					console.error(matrix[i][0]);
                columnLocal.push([matrix[i][0], Number(matrix[i][1])]);
				}
				else{
					console.error(matrix[i][0]);
				nottargetednum++;
				}
				}
				else if (apClassroom){
					console.error(selectedSection+" "+matrix[i][2]);
				if ((selectedSection=="none")||(selectedSection.replace('&amp;', '&')==matrix[i][2])){
					console.error(matrix[i][0]);
                columnLocal.push([matrix[i][0], Number(matrix[i][1])]);
				}
				else{
					console.error(matrix[i][0]);
				nottargetednum++;
				}
				}
				else if (talieSheet){
					console.error(selectedSection+" "+matrix[i][2]);
				if ((selectedSection=="none")||(selectedSection.replace('&amp;', '&')==matrix[i][2])){
					console.error(matrix[i][0]);
                columnLocal.push([matrix[i][0], Number(matrix[i][1])]);
				}
				else{
					console.error(matrix[i][0]);
				nottargetednum++;
				}
				}
				else{
                columnLocal.push([matrix[i][0], Number(matrix[i][1])]);
				}
            }
        }
		console.warn(columnLocal);
		console.warn(nottargetednum);
        return columnLocal;
    }
    var addSectionOption = function (cationOption) {
        var sel = document.getElementById("sectionSelect");
        var opt = document.createElement('option');
        opt.innerHTML = cationOption;
        //		opt.appendChild(document.createTextNode((cationOption)));
        opt.value = (cationOption);
        sel.appendChild(opt);

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
	
	var clearHighlights= function () {
			// for (var i = 1; i < groupOfGroupsArray[localGroupNumber].length; i++) {
				
				for (var j = 0; j < groupOfGroupsArray.length; j++) {
				for (var i = 0; i < groupOfGroupsArray[j].length; i++) {
					document.getElementById("group"+j).children[i+1].style.backgroundColor='white';
				}
			// }
		}
	}
	    var highlightGroup = function (localGroupNumber) {
			// for (var i = 1; i < groupOfGroupsArray[localGroupNumber].length; i++) {
				for (var i = 0; i < groupOfGroupsArray[localGroupNumber].length; i++) {
				document.getElementById("group"+localGroupNumber).children[i+1].style.backgroundColor='white';
				}
				let childNumber=Math.floor(Math.random() * groupOfGroupsArray[localGroupNumber].length)+1;
				document.getElementById("group"+localGroupNumber).children[childNumber].style.backgroundColor='yellow';
			// }
		}
	// Step 4: Generate Group Choices - Note, above is the method for attendance.
    var generateGroupChoices = function () {
        document.getElementById('selectionsBox').innerHTML = "<div class = 'pickgroupstyle'> <button type ='button' id ='groupByNumGroupsButton' style = 'font-size: xx-large; margin-right: 50px; margin-left: 65px'>Option 1: Select Number Of Groups</button>    <button type ='button' id ='groupByNumStudentsButton' style = 'font-size: xx-large'>Option 2: Select Size of Groups</button> <br><span style = 'font-size: xx-large; margin-top: 10px'> Remove absent students by clicking their names below </span> <input id = 'nameSearch' style = 'font-size: xx-large; margin-top: 20px'' type='text' placeholder='Search names... '></div>";
		console.log(groupAArray.toString());
		
				let groupAAbsentCount=0;
				let temporaryTotalA=(Number)(document.getElementById("groupACount").innerHTML);
		for (var i = 0; i < groupAArray.length; i++) {

            (function (i) {
				// console.warn (absentArray.length + "and "+ groupAArray[i][0]);
				if ((absentArray.includes(groupAArray[i][0]))&&(!(document.getElementById(groupAArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupAArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
						groupAAbsentCount++;
				}
                document.getElementById(groupAArray[i + 0][0]).addEventListener("click", function (e) {
                    if (!(document.getElementById(groupAArray[i+0][0]).classList.contains("nottargeted"))) {
						
						document.getElementById(groupAArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
						groupAAbsentCount++;
                    }
					else{
						// alert ('hi2');
						nottargetednum=nottargetednum-1;
						groupAAbsentCount=groupAAbsentCount-1;
					document.getElementById(groupAArray[i+0][0]).classList.remove("nottargeted");
					}
					document.getElementById("groupACount").innerHTML=temporaryTotalA-groupAAbsentCount;//tempHTML.substring(0, tempHTML.indexOf("members"));//"Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(" + (groupAArray.length-groupAAbsent) + " 

                });

            })(i);
        }
				let groupBAbsentCount=0;
				let temporaryTotalB=(Number)(document.getElementById("groupBCount").innerHTML);
				for (var i = 0; i < groupBArray.length; i++) {

            (function (i) {
				if ((absentArray.includes(groupBArray[i][0]))&&(!(document.getElementById(groupBArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupBArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
						groupBAbsentCount++;
				}
                document.getElementById(groupBArray[i + 0][0]).addEventListener("click", function (e) {
                    if (!(document.getElementById(groupBArray[i+0][0]).classList.contains("nottargeted"))) {
						document.getElementById(groupBArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
						
						groupBAbsentCount++;
                    }
					else{
							nottargetednum=nottargetednum-1;
						groupBAbsentCount=groupBAbsentCount-1;
					document.getElementById(groupBArray[i+0][0]).classList.remove("nottargeted");
					}
					document.getElementById("groupBCount").innerHTML=temporaryTotalB-groupBAbsentCount;//tempHTML.substring(0, tempHTML.indexOf("members"));//"Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(" + (groupAArray.length-groupAAbsent) + " 

                });

            })(i);
        }
		
				let groupCAbsentCount=0;
				let temporaryTotalC=(Number)(document.getElementById("groupCCount").innerHTML);
				for (var i = 0; i < groupCArray.length; i++) {
console.log(groupCArray);
            (function (i) {
				if ((absentArray.includes(groupCArray[i][0]))&&(!(document.getElementById(groupCArray[i+0][0]).classList.contains("nottargeted")))){
						document.getElementById(groupCArray[i+0][0]).classList.add("nottargeted");
						nottargetednum++;
						groupCAbsentCount++;
				}
                document.getElementById(groupCArray[i + 0][0]).addEventListener("click", function (e) {
					//let tempHTML=document.getElementById("groupA").innerHTML;
					//alert(tempHTML);
					
					 if (!(document.getElementById(groupCArray[i+0][0]).classList.contains("nottargeted"))) {
						nottargetednum++;
						document.getElementById(groupCArray[i+0][0]).classList.add("nottargeted");
						
						groupCAbsentCount++;
                    }
					else{
							nottargetednum=nottargetednum-1;
							
						groupCAbsentCount=groupCAbsentCount-1;
					document.getElementById(groupCArray[i+0][0]).classList.remove("nottargeted");
					}
					document.getElementById("groupCCount").innerHTML=temporaryTotalC-groupCAbsentCount;//tempHTML.substring(0, tempHTML.indexOf("members"));//"Students scoring " + smallestScore + " to " + scoreCutoffOne + "<br>(" + (groupAArray.length-groupAAbsent) + " 
                   
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
            groupByGroupsCheck(groupnums);
			}
        });

        $('#groupByNumStudentsButton').click(function () {
            // alert ("hi");
            // if (true){
// alert(nottargetednum);
            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
				let groupnums=prompt("What is your group size? (no group will have larger than this size, and all of your groups will have this size or one less)");
			if (groupnums>0){ 
				groupByStudentsCheck(groupnums);
			}

        });
    }
	

	// function selectGroupByStudents(groupnums, secondsForAlert, nextAction) { //not setup yet
    // $("#my-dialog-prev-next-timed").dialog({
        // modal: false,
        // autoOpen: false,
        // buttons: [{
                // text: "take: A look",
                // click: function () {
                    // $(this).dialog("close");
                    // // window.setTimeout(reopenDialog, secondsForAlert * 1000);
                    // // $("#alertMessage2").html(messageThis);
                // }
            // }, {
                // text: "next:",
                // click: function () {
                    // $(this).dialog("close");
                    // // window.setTimeout(nextAction, 200);
                    // // $("#alertMessage2").html(messageThis);
                // }
            // }
        // ]
    // });
    // $('.ui-dialog-buttonpane').find('button:contains("next")').focus();

    // console.log($("#my-dialog-prev-next-timed").dialog.childElementCount);
    // $("#my-dialog-prev-next-timed").dialog("open")

    // // window.setTimeout($("#my-dialog-timed").dialog("open"), 5000);

// }
	
	
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
	
	    var groupByGroupsCheck = function (numberOfGroups) {
	 document.getElementById('selectionsBox').innerHTML = "<div class = 'groupMethodDecision'> <span style='font-size: large'> How would you like to sort your students into groups? </span> <br><button type ='button' id ='heterogeneousButtonByGroups' style = 'font-size: xx-large; margin-right: 50px; margin-left: 65px'>Option 1: Heterogeneous (each group has a mix of scores) </button>  <br><br>  <button type ='button' id ='homogeneousButtonByGroups' style = 'font-size: xx-large; margin-right: 50px; margin-left: 65px'>Option 2: Homogeneous (students with similar scores together)</button></div>";
         
		$('#heterogeneousButtonByGroups').click(function () {
			groupingMethod="heterogeneous";
			groupByGroups(numberOfGroups);
		});
		$('#homogeneousButtonByGroups').click(function () {
			groupingMethod="homogeneous";
			groupByGroups(numberOfGroups);
		});
	}
    var groupByGroups = function (numberOfGroups) {
		lockNames=false;
		allStudentBoxIds=[];
		allGroupIds=[];
		absentArray=[];
		groupNamesArray=[];
            $(".pickgroupstyle").slideToggle();
            $(".studentsContainerOne").slideToggle();
        document.getElementById('selectionsBox').innerHTML = "<div class = 'finalizeGroups'> <span style='font-size: large'> Finalize Names as Necessary and then click Done:</span><button type ='button' id ='finalizeGroupsButton' style = 'font-size: large'>Finalize Groups</button></div>  <div class = 'groupAgain'><button type ='button' id ='pickOneOverall' style = 'font-size: large' hidden>Pick Random Student</button>    <button type ='button' id ='pickOneEach' style = 'font-size: large' hidden>Pick One From Each Group</button></div>";
        document.getElementById('underButtons').innerHTML =  "<div class = 'finalizeGroups'></div> <div class = 'groupAgain'><button type ='button' id ='remakeGroupsButton' style = 'font-size: large'>Remake Groups</button>   <button type ='button' id ='invertGroups' style = 'font-size: large' hidden>Invert Groups</button>    <button type ='button' id ='importGroups' style = 'font-size: large' hidden>Import Groups</button>    <button type ='button' id ='exportGroups' style = 'font-size: large' hidden>Export Groups</button></div>";
        
        $(".studentsContainerTwo").slideToggle();
        console.log(groupAArray.toString());
        shuffle(groupAArray);
        console.log(groupAArray.toString());
        shuffle(groupBArray);
        shuffle(groupCArray);
        var testIdName = "group" + 0 + "";
		let upperMaxStudents=Math.ceil((columnArray.length-nottargetednum) / numberOfGroups);
		let lowerMaxStudents=Math.floor((columnArray.length-nottargetednum) / numberOfGroups);
		let groupItSwitches=((columnArray.length-nottargetednum) % numberOfGroups);
		console.log("array length is "+columnArray.length);
		console.warn("nottargetednum is "+nottargetednum);
		
		console.error("total size is "+ (columnArray.length-nottargetednum)+" and upperMaxStudents is " + upperMaxStudents +" and lowerMaxStudents is "+lowerMaxStudents+" and groupItSwitchesIs "+ groupItSwitches + " and numberOfGroupsIs "+numberOfGroups);
		console.log(columnArray);
        allGroupIds.push(testIdName + "");
        document.getElementById("studentContainerTwo").innerHTML = "<div id = '" + testIdName + "'>" + testIdName + "</div>";
        for (var i = 1; i < numberOfGroups; i++) {
            var testIdName = "group" + i + "";
            document.getElementById("studentContainerTwo").innerHTML = document.getElementById("studentContainerTwo").innerHTML + "<div id = '" + testIdName + "'>" + testIdName + "</div>";
            allGroupIds.push(testIdName + "");

        }
        groupOfGroupsArray = [];
        for (var j = 0; j < numberOfGroups; j++) { //make the groupOfGroupsArray with empty arrays
            // alert (j);
            groupOfGroupsArray.push(new Array());
        }
        console.log(groupOfGroupsArray.toString());
        let groupPlacement = 0;

        for (var g = 0; g < groupCArray.length; g++) { //deal out the groupCArray into groups using groupPlacement
		if (groupingMethod=="heterogeneous"){
            console.log(groupPlacement);

            console.warn(groupCArray[g][0].toString());
			if (!(document.getElementById(groupCArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "#83EA83", "high"]); //to later select the background color for highest groups
            groupPlacement++;
			}
			else{
			absentArray.push(groupCArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
		}
		else{
			if (!(document.getElementById(groupCArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "#83EA83", "high"]); //to later select the background color for highest groups
			}
			else{
			absentArray.push(groupCArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
			if (groupPlacement<(groupItSwitches)){ //if we are in the upperAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=upperMaxStudents){
				groupPlacement++;
				}
			}
			else{//if we are in the lowerAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=lowerMaxStudents){
				groupPlacement++;
				}
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
			
		}
        }
        for (var g = 0; g < groupBArray.length; g++) {
			if (groupingMethod=="heterogeneous"){
			if (!(document.getElementById(groupBArray[g][0]).classList.contains("nottargeted"))){
            groupOfGroupsArray[groupPlacement].push([groupBArray[g][0], "#77D5D5", "medium"]); //to later select the background color for highest groups
            groupPlacement++;
			}
						else{
			absentArray.push(groupBArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
			}
		else{
			if (!(document.getElementById(groupBArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupBArray[g][0], "#77D5D5", "medium"]); //to later select the background color for highest groups
			}
			else{
			absentArray.push(groupBArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
			if (groupPlacement<(groupItSwitches)){ //if we are in the upperAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=upperMaxStudents){
				groupPlacement++;
				}
			}
			else{//if we are in the lowerAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=lowerMaxStudents){
				groupPlacement++;
				}
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
			
		}
        }
        for (var g = 0; g < groupAArray.length; g++) {
			if (groupingMethod=="heterogeneous"){
			if (!(document.getElementById(groupAArray[g][0]).classList.contains("nottargeted"))){
            groupOfGroupsArray[groupPlacement].push([groupAArray[g][0], "#FFBABA", "low"]) //to later select the background color for highest groups
            groupPlacement++;
			}
						else{
							
			absentArray.push(groupAArray[g][0]+"");
			console.log("The absent list is now "+absentArray);
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
			}
		else{
			if (!(document.getElementById(groupAArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupAArray[g][0], "#FFBABA", "low"]); //to later select the background color for highest groups
			}
			else{
			absentArray.push(groupAArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
			if (groupPlacement<(groupItSwitches)){ //if we are in the upperAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=upperMaxStudents){
				groupPlacement++;
				}
			}
			else{//if we are in the lowerAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=lowerMaxStudents){
				groupPlacement++;
				}
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
			
		}
        }

        for (var k = 0; k < groupOfGroupsArray.length; k++) {
            shuffle(groupOfGroupsArray[k]);
			var testTempIdName = groupOfGroupsArray[k][0][0]+""
            var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
            var testIdTag = testIdName.replace(/\s+/g, '');
            var groupIdTag = "groupThing" + k;
            var groupIdTagNumber = "groupNumber" + k;
            document.getElementById(allGroupIds[k]).innerHTML = "<div id = '" + groupIdTag + "'>Group: <input type='text'  name='o' id = '" + groupIdTagNumber + "' value='" + (k + 1) + "' style='width: 35%'></input></div>" + "<div class='card' id = '" + testIdTag + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            groupNamesArray.push([groupIdTag + "", groupIdTagNumber + ""]);
            document.getElementById(testIdTag + "").classList.add(groupOfGroupsArray[k][0][2]);

            allStudentBoxIds.push([testIdTag + "", testIdName + "", (groupOfGroupsArray[k][0][2]) + ""]);
            for (var i = 1; i < groupOfGroupsArray[k].length; i++) {
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);
              	var testTempIdName = groupOfGroupsArray[k][i][0]+""
				var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
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
		        $('#remakeGroupsButton').click(function () { //go back to the beginning but see if attendance remains
			generateDropdowns(data);
			console.log("error of absent is "+absentArray);
			
			document.getElementById('remakeGroupsButton').hidden=true;
			document.getElementById('exportGroups').hidden=true;
			
			document.getElementById('importGroups').hidden=true;
			document.getElementById('invertGroups').hidden=true;
			$(".finalizeGroups").slideToggle();
			$(".remakeGroups").slideToggle();
			
        $(".studentsContainerTwo").slideToggle();
			console.log("error of absent is "+absentArray);
			const objsArrStr = JSON.stringify(absentArray);
			const objsArrDeepCopy = JSON.parse(objsArrStr);	
			absentArray=objsArrDeepCopy;
		});
		 $('#pickOneEach').click(function () {
			 for (var l = 0; l < groupNamesArray.length; l++) {
				highlightGroup(l);
			 }
		 });
		 		  $('#pickOneOverall').click(function () {
			  let randomGroup = Math.floor(Math.random() * groupNamesArray.length);
			  clearHighlights();
				highlightGroup(randomGroup);
		 });
		  $('#exportGroups').click(function () {
			  if (confirm('Is this for zoom breakout rooms (click OK) ? Or for your records (click cancel)')){
				  			if (!canvas) {
			document.getElementById('txtFileUpload2').click();
				}
			generateNameIDMatchArray();
			  }
			  else{
				  
			  generateNameIDMatchArray2();
			  }
			  
		 });
		  $('#importGroups').click(function () {
		$(".fileuploadImport").slideToggle();
					document.getElementById('pickOneEach').hidden=true;
			
			document.getElementById('pickOneOverall').hidden=true;
			
			document.getElementById('remakeGroupsButton').hidden=true;
			document.getElementById('exportGroups').hidden=true;
			
			document.getElementById('importGroups').hidden=true;
			document.getElementById('invertGroups').hidden=true;
		$(".fileupload").slideToggle();
        $(".studentsContainerTwo").slideToggle();
		 });
		 
		 		 		  $('#invertGroups').click(function () {
		// $(".fileuploadImport").slideToggle();
		

		makeListForInvert();
			// $(".remakeGroups").slideToggle();
					document.getElementById('pickOneEach').hidden=false;
					
					if (outside){
						document.getElementById('remakeGroupsButton').hidden=true;
					}
					else{
						document.getElementById('remakeGroupsButton').hidden=false;			
					}
					
			document.getElementById('pickOneOverall').hidden=false;
			
			document.getElementById('exportGroups').hidden=false;
			
			document.getElementById('importGroups').hidden=false;
			document.getElementById('invertGroups').hidden=false;
		// $(".fileupload").slideToggle();
        $(".studentsContainerTwo").slideToggle();
		 });
        $('#finalizeGroupsButton').click(function () {
            lockNames = true;
			document.getElementById('pickOneEach').hidden=false;
			
			document.getElementById('pickOneOverall').hidden=false;
			
			document.getElementById('exportGroups').hidden=false;
			
			document.getElementById('importGroups').hidden=false;
			document.getElementById('invertGroups').hidden=false;
			document.getElementById('studentContainerTwo').style.height='80%';
            // console.warn("yo yo yo "+allStudentBoxIds[5]);
            // document.getElementById(allStudentBoxIds[5]).style.="";
            
            // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="gray";
            for (var l = 0; l < groupNamesArray.length; l++) {
				(function (l) {
                let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + " " + "<button type ='button' id ='"+(groupNamesArray[l][0]+"button")+"' style='font-size: medium'>pick randomly </button>";
				 // document.getE.click(function () {
				document.getElementById(groupNamesArray[l][0]+"button").addEventListener("click", function (e) {
					highlightGroup(l);
					});
				document.getElementById("group"+l).style.paddingLeft='0px';
            })(l);
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
					if (confirm("Do you want to export your groups to a spreadsheet?")){
						  if (confirm('Is this for zoom breakout rooms (click OK) ? Or for your records (click cancel)')){
				  			if (!canvas) {
			document.getElementById('txtFileUpload2').click();
				}
			generateNameIDMatchArray();
			  }
			  else{
				  
			  generateNameIDMatchArray2();
			  }
					}  
            $(".finalizeGroups").slideToggle();
        });
    }

    var groupByStudentsCheck = function (maxStudents) {
		document.getElementById('selectionsBox').innerHTML = "<div class = 'groupMethodDecision'> <span style='font-size: large'> How would you like to sort your students into groups? </span> <br><button type ='button' id ='heterogeneousButtonByStudents' style = 'font-size: xx-large; margin-right: 50px; margin-left: 65px'>Option 1: Heterogeneous (each group has a mix of scores) </button>  <br><br>  <button type ='button' id ='homogeneousButtonByStudents' style = 'font-size: xx-large; margin-right: 50px; margin-left: 65px'>Option 2: Homogeneous (students with similar scores together)</button></div>";
        
		$('#heterogeneousButtonByStudents').click(function () {
			groupingMethod="heterogeneous";
			groupByStudents(maxStudents);
		});
		$('#homogeneousButtonByStudents').click(function () {
			groupingMethod="homogeneous";
			groupByStudents(maxStudents);
		});
	}
		
	var groupByStudents = function (maxStudents) {
		lockNames=false;
		allGroupIds=[];
		absentArray=[];
		groupNamesArray=[];
            $(".pickgroupstyle").slideToggle();
            $(".studentsContainerOne").slideToggle();
        document.getElementById('selectionsBox').innerHTML = "<div class = 'finalizeGroups'> <span style='font-size: large'> Finalize Names as Necessary and then click Done:</span><button type ='button' id ='finalizeGroupsButton' style = 'font-size: large'>Finalize Groups</button></div>  <div class = 'groupAgain'><button type ='button' id ='pickOneOverall' style = 'font-size: large' hidden>Pick Random Student</button>    <button type ='button' id ='pickOneEach' style = 'font-size: large' hidden>Pick One From Each Group</button></div>";
        document.getElementById('underButtons').innerHTML =  "<div class = 'finalizeGroups'></div> <div class = 'groupAgain'><button type ='button' id ='remakeGroupsButton' style = 'font-size: large'>Remake Groups</button>   <button type ='button' id ='invertGroups' style = 'font-size: large' hidden>Invert Groups</button>    <button type ='button' id ='importGroups' style = 'font-size: large' hidden>Import Groups</button>    <button type ='button' id ='exportGroups' style = 'font-size: large' hidden>Export Groups</button></div>";
         
        $(".studentsContainerTwo").slideToggle();
        numberOfGroups = Math.ceil((columnArray.length-nottargetednum) / maxStudents);
		let upperMaxStudents=Math.ceil((columnArray.length-nottargetednum) / numberOfGroups);
		let lowerMaxStudents=Math.floor((columnArray.length-nottargetednum) / numberOfGroups);
		let groupItSwitches=((columnArray.length-nottargetednum) % numberOfGroups);

		console.log("array length is "+columnArray.length);
		console.warn("nottargetednum is "+nottargetednum);
		
		console.error("total size is "+ (columnArray.length-nottargetednum)+" and upperMaxStudents is " + upperMaxStudents +" and lowerMaxStudents is "+lowerMaxStudents+" and groupItSwitchesIs "+ groupItSwitches + " and numberOfGroupsIs "+numberOfGroups);
		console.log(columnArray);
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
              for (var g = 0; g < groupCArray.length; g++) { //deal out the groupCArray into groups using groupPlacement
		if (groupingMethod=="heterogeneous"){
            console.log(groupPlacement);

            console.warn(groupCArray[g][0].toString());
			if (!(document.getElementById(groupCArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "#83EA83", "high"]); //to later select the background color for highest groups
            groupPlacement++;
			}
			else{
			absentArray.push(groupCArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
		}
		else{
			if (!(document.getElementById(groupCArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "#83EA83", "high"]); //to later select the background color for highest groups
			}
			else{
			absentArray.push(groupCArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
			if (groupPlacement<(groupItSwitches)){ //if we are in the upperAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=upperMaxStudents){
				groupPlacement++;
				}
			}
			else{//if we are in the lowerAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=lowerMaxStudents){
				groupPlacement++;
				}
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
			
		}
        }
        for (var g = 0; g < groupBArray.length; g++) {
			if (groupingMethod=="heterogeneous"){
			if (!(document.getElementById(groupBArray[g][0]).classList.contains("nottargeted"))){
            groupOfGroupsArray[groupPlacement].push([groupBArray[g][0], "#77D5D5", "medium"]); //to later select the background color for highest groups
            groupPlacement++;
			}
						else{
			absentArray.push(groupBArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
			}
		else{
			if (!(document.getElementById(groupBArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupBArray[g][0], "#77D5D5", "medium"]); //to later select the background color for highest groups
			}
			else{
			absentArray.push(groupBArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
			if (groupPlacement<(groupItSwitches)){ //if we are in the upperAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=upperMaxStudents){
				groupPlacement++;
				}
			}
			else{//if we are in the lowerAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=lowerMaxStudents){
				groupPlacement++;
				}
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
			
		}
        }
        for (var g = 0; g < groupAArray.length; g++) {
			if (groupingMethod=="heterogeneous"){
			if (!(document.getElementById(groupAArray[g][0]).classList.contains("nottargeted"))){
            groupOfGroupsArray[groupPlacement].push([groupAArray[g][0], "#FFBABA", "low"]) //to later select the background color for highest groups
            groupPlacement++;
			}
						else{
							
			absentArray.push(groupAArray[g][0]+"");
			console.log("The absent list is now "+absentArray);
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
			}
		else{
			if (!(document.getElementById(groupAArray[g][0]).classList.contains("nottargeted"))){
            (groupOfGroupsArray[groupPlacement + 0]).push([groupAArray[g][0], "#FFBABA", "low"]); //to later select the background color for highest groups
			}
			else{
			absentArray.push(groupAArray[g][0]);
			console.log("The absent list is now "+absentArray);
			}
			if (groupPlacement<(groupItSwitches)){ //if we are in the upperAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=upperMaxStudents){
				groupPlacement++;
				}
			}
			else{//if we are in the lowerAmountOfGroups
				if (groupOfGroupsArray[groupPlacement + 0].length>=lowerMaxStudents){
				groupPlacement++;
				}
			}
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
			
		}
        }

		console.error(groupOfGroupsArray.length);
		allStudentBoxIds=[];
        for (var k = 0; k < groupOfGroupsArray.length; k++) {
			
            shuffle(groupOfGroupsArray[k]);
            var testTempIdName = groupOfGroupsArray[k][0][0]+""
            var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
            var testIdTag = testIdName.replace(/\s+/g, '');
            var groupIdTag = "groupThing" + k;
            var groupIdTagNumber = "groupNumber" + k;
            document.getElementById(allGroupIds[k]).innerHTML = "<div id = '" + groupIdTag + "'>Group: <input type='text'  name='o' id = '" + groupIdTagNumber + "' value='" + (k + 1) + "' style='width: 35%'></input></div>" + "<div class='card' id = '" + testIdTag + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            groupNamesArray.push([groupIdTag + "", groupIdTagNumber + ""]);
            document.getElementById(testIdTag + "").classList.add(groupOfGroupsArray[k][0][2]);

            allStudentBoxIds.push([testIdTag + "", testIdName + "", (groupOfGroupsArray[k][0][2]) + ""]);
            for (var i = 1; i < groupOfGroupsArray[k].length; i++) {
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);
                // var testIdName = groupOfGroupsArray[k][i][0] + "";
				var testTempIdName = groupOfGroupsArray[k][i][0]+""
				var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
            var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
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
		console.error(allStudentBoxIds);
        for (var i = 0; i < allStudentBoxIds.length; i++) {

				console.warn(document.getElementById(allStudentBoxIds[i + 0][0]));
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
		
        $('#remakeGroupsButton').click(function () { //go back to the beginning but see if attendance remains
			generateDropdowns(data);
			console.log("error of absent is "+absentArray);
						document.getElementById('remakeGroupsButton').hidden=true;
			document.getElementById('exportGroups').hidden=true;
			
			document.getElementById('importGroups').hidden=true;
			document.getElementById('invertGroups').hidden=true;
			$(".finalizeGroups").slideToggle();
			$(".remakeGroups").slideToggle();
			
        $(".studentsContainerTwo").slideToggle();
			// console.log("error of absent is "+absentArray);
			const objsArrStr = JSON.stringify(absentArray);
			const objsArrDeepCopy = JSON.parse(objsArrStr);	
			absentArray=objsArrDeepCopy;
		});
				 $('#pickOneEach').click(function () {
			 for (var l = 0; l < groupNamesArray.length; l++) {
				highlightGroup(l);
			 }
		 });
		  $('#pickOneOverall').click(function () {
			  let randomGroup = Math.floor(Math.random() * groupNamesArray.length);
			  clearHighlights();
				highlightGroup(randomGroup);
		 });
		  $('#exportGroups').click(function () {
			  if (confirm('Is this for zoom breakout rooms (click OK) ? Or for your records (click cancel)')){
				  			if (!canvas) {
			document.getElementById('txtFileUpload2').click();
				}
			generateNameIDMatchArray();
			  }
			  else{
				  generateNameIDMatchArray2();
			  }
			  
		 });
		  $('#importGroups').click(function () {
		$(".fileuploadImport").slideToggle();
					document.getElementById('pickOneEach').hidden=true;
						document.getElementById('remakeGroupsButton').hidden=true;

			document.getElementById('pickOneOverall').hidden=true;
			
			document.getElementById('exportGroups').hidden=true;
			
			document.getElementById('importGroups').hidden=true;
			document.getElementById('invertGroups').hidden=true;
		$(".fileupload").slideToggle();
        $(".studentsContainerTwo").slideToggle();
		 });
		 		 		  $('#invertGroups').click(function () {
		// $(".fileuploadImport").slideToggle();
		

		makeListForInvert();
			// $(".remakeGroups").slideToggle();
					document.getElementById('pickOneEach').hidden=false;
					
					if (outside){
						document.getElementById('remakeGroupsButton').hidden=true;
					}
					else{
						document.getElementById('remakeGroupsButton').hidden=false;			
					}
					
			document.getElementById('pickOneOverall').hidden=false;
			
			document.getElementById('exportGroups').hidden=false;
			
			document.getElementById('importGroups').hidden=false;
			document.getElementById('invertGroups').hidden=false;
		// $(".fileupload").slideToggle();
        $(".studentsContainerTwo").slideToggle();
		 });
        $('#finalizeGroupsButton').click(function () {
			// alert ("hi")

			document.getElementById('pickOneEach').hidden=false;
			
			document.getElementById('pickOneOverall').hidden=false;
			
			document.getElementById('exportGroups').hidden=false;
			
			document.getElementById('importGroups').hidden=false;
			document.getElementById('invertGroups').hidden=false;
            lockNames = true;
            // console.warn("yo yo yo "+allStudentBoxIds[5]);
            // document.getElementById(allStudentBoxIds[5]).style.="";

            // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="gray";
            // for (var l = 0; l < groupNamesArray.length; l++) {
                // let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                // document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + "";

            // }
			            for (var l = 0; l < groupNamesArray.length; l++) {
				(function (l) {
                let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + " " + "<button type ='button' id ='"+(groupNamesArray[l][0]+"button")+"' style='font-size: medium'>pick randomly </button>";
				 // document.getE.click(function () {
				document.getElementById(groupNamesArray[l][0]+"button").addEventListener("click", function (f) {
					highlightGroup(l);
					});
				document.getElementById("group"+l).style.paddingLeft='0px';
            })(l);
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
					if (confirm("Do you want to export your groups to a spreadsheet?")){
						  if (confirm('Is this for zoom breakout rooms (click OK) ? Or for your records (click cancel)')){
				  			if (!canvas) {
			document.getElementById('txtFileUpload2').click();
				}
			generateNameIDMatchArray();
			  }
			  else{
				  
			  generateNameIDMatchArray2();
			  }
					}        
		$(".finalizeGroups").slideToggle();

        });
    }
	
var generateImports = function (dataArray) {
	
        // $(".fileupload").slideToggle();
		console.log(dataArray[0].toString());
	
        document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment' style = 'width:auto'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:large; width:auto; max-width:300px;'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        // $('#assignmentSelect').empty();
		// if (canvas){
			// for (var i = 5; i < dataArray[startRow].length; i++) {
			// if (dataArray[startRow][i].includes("MAX")){
				// addAssignmentOption(dataArray[startRow][i].substring(0, dataArray[startRow][i].indexOf("MAX")));
			// }
			// else{
				// addAssignmentOption(dataArray[startRow][i]);
			// }
        // }
		// }
		let arrayOfGroupNames=[];
		let arrayOfGroupIndexes=[];
		let tempGroupNum=-1;
		for (var i = 1; i < dataArray.length; i++){
			// console.log(dataArray[i]);
			if (!(arrayOfGroupNames.includes(dataArray[i][0]))){
				// tempGroupNum++;
				arrayOfGroupNames.push(dataArray[i][0]);
				arrayOfGroupIndexes.push(i);
			}
			// console.log(arrayOfGroupNames);
			// console.log(dataArray[i]);
			// groupOfGroupsArray[tempGroupNum].push([dataArray[i][1], "#77D5D5", "medium"]); //to later select the background color for highest groups

		}


		allGroupIds=[];
		absentArray=[];
		groupNamesArray=[];
        document.getElementById('selectionsBox').innerHTML = "<div class = 'finalizeGroups'> <span style='font-size: large'> Finalize Names as Necessary and then click Done:</span><button type ='button' id ='finalizeGroupsButton' style = 'font-size: large'>Finalize Groups</button></div>  <div class = 'groupAgain'><button type ='button' id ='pickOneOverall' style = 'font-size: large' hidden>Pick Random Student</button>    <button type ='button' id ='pickOneEach' style = 'font-size: large' hidden>Pick One From Each Group</button></div>";
        document.getElementById('underButtons').innerHTML =  "<div class = 'finalizeGroups'></div> <div class = 'groupAgain'><button type ='button' id ='remakeGroupsButton' style = 'font-size: large'>Remake Groups</button>   <button type ='button' id ='invertGroups' style = 'font-size: large' hidden>Invert Groups</button>    <button type ='button' id ='importGroups' style = 'font-size: large' hidden>Import Groups</button>    <button type ='button' id ='exportGroups' style = 'font-size: large' hidden>Export Groups</button></div>";
          
        $(".studentsContainerTwo").slideToggle();
        numberOfGroups = arrayOfGroupNames.length;

        var testIdName = "group" + 0 + "";
        allGroupIds.push(testIdName + "");
		console.log(dataArray[1].length);
        document.getElementById("studentContainerTwo").innerHTML = "<div id = '" + testIdName + "'>" + testIdName + "</div>";
        for (var i = 1; i < numberOfGroups; i++) {
			if (dataArray[1].length>2){
			// var testIdName = "group" + dataArray[1][2]+"";
            var testIdName = "group" + i + "";
			}
			else{
            var testIdName = "group" + i + "";
			}
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
		arrayOfGroupNames=[];
		for (var i = 1; i < dataArray.length; i++){
			console.log(dataArray[i]);
			if (!(arrayOfGroupNames.includes(dataArray[i][0]))){
				tempGroupNum++;
				arrayOfGroupNames.push(dataArray[i][0]);
			}
			console.log(tempGroupNum);
			console.log(arrayOfGroupNames);
			console.log(dataArray[i]);
			groupOfGroupsArray[tempGroupNum].push([dataArray[i][1], "#77D5D5", "medium"]); //to later select the background color for highest groups

		}
        // console.warn(groupCArray[0][0].toString());
       // for (var g = 0; g < groupCArray.length; g++) {
            // console.log(groupPlacement);
			// // groupOfGroupsArray.push(
            // // console.warn(groupCArray[g][0].toString());
			// if (!(document.getElementById(groupCArray[g][0]).classList.contains("nottargeted"))){
            // (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "#83EA83", "high"]); //to later select the background color for highest groups
            // groupPlacement++;
			// }
						// else{
			// absentArray.push(groupCArray[g][0]);
			// console.log("The absent list is now "+absentArray);
			// }
            // if (groupPlacement > (numberOfGroups - 1)) {
                // // console.log(groupPlacement);
                // groupPlacement = 0;
            // }
        // }
        // for (var g = 0; g < groupBArray.length; g++) {
			// if (!(document.getElementById(groupBArray[g][0]).classList.contains("nottargeted"))){
            // groupOfGroupsArray[groupPlacement].push([groupBArray[g][0], "#77D5D5", "medium"]); //to later select the background color for highest groups
            // groupPlacement++;
			// }
						// else{
			// absentArray.push(groupBArray[g][0]);
			// console.log("The absent list is now "+absentArray);
			// }
            // if (groupPlacement > (numberOfGroups - 1)) {
                // groupPlacement = 0;
            // }
        // }
        // for (var g = 0; g < groupAArray.length; g++) {
			// if (!(document.getElementById(groupAArray[g][0]).classList.contains("nottargeted"))){
            // groupOfGroupsArray[groupPlacement].push([groupAArray[g][0], "#FFBABA", "low"]) //to later select the background color for highest groups
            // groupPlacement++;
			// }
						// else{
			// absentArray.push(groupAArray[g][0]);
			// console.log("The absent list is now "+absentArray);
			// }
            // if (groupPlacement > (numberOfGroups - 1)) {
                // groupPlacement = 0;
            // }
        // }

		console.error(groupOfGroupsArray.length);
		allStudentBoxIds=[];
		var spot=0;
        for (var k = 0; k < groupOfGroupsArray.length; k++) {
			
            shuffle(groupOfGroupsArray[k]);
            var testTempIdName = groupOfGroupsArray[k][0][0]+""
            var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
            var testIdTag = testIdName.replace(/\s+/g, '');
            var groupIdTag = "groupThing" + k;
			
			
			// var testIdName = "group" + dataArray[1][2]+"";

            var groupIdTagNumber = "groupNumber" + k;
			spot = k+1;
			console.error(spot);
			if (dataArray[1].length>2){
				spot = dataArray[arrayOfGroupIndexes[k]][2]+"";
			}
			console.warn(k+" "+spot);
            document.getElementById(allGroupIds[k]).innerHTML = "<div id = '" + groupIdTag + "'>Group: <input type='text'  name='o' id = '" + groupIdTagNumber + "' value='" + spot + "' style='width: 35%'></input></div>" + "<div class='card' id = '" + testIdTag + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            groupNamesArray.push([groupIdTag + "", groupIdTagNumber + ""]);
            document.getElementById(testIdTag + "").classList.add(groupOfGroupsArray[k][0][2]);

            allStudentBoxIds.push([testIdTag + "", testIdName + "", (groupOfGroupsArray[k][0][2]) + ""]);
            for (var i = 1; i < groupOfGroupsArray[k].length; i++) {
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);
                // var testIdName = groupOfGroupsArray[k][i][0] + "";
				var testTempIdName = groupOfGroupsArray[k][i][0]+""
				var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
            var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
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
		console.error(allStudentBoxIds);
        for (var i = 0; i < allStudentBoxIds.length; i++) {

				console.warn(document.getElementById(allStudentBoxIds[i + 0][0]));
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
		// $(".fileupload").slideToggle();
		

        $('#remakeGroupsButton').click(function () { //go back to the beginning but see if attendance remains
			generateDropdowns(data);
			console.log("error of absent is "+absentArray);
						document.getElementById('remakeGroupsButton').hidden=true;
			document.getElementById('exportGroups').hidden=true;
			
			document.getElementById('importGroups').hidden=true;
			document.getElementById('invertGroups').hidden=true;
			$(".finalizeGroups").slideToggle();
			$(".remakeGroups").slideToggle();
			
        $(".studentsContainerTwo").slideToggle();
			// console.log("error of absent is "+absentArray);
			const objsArrStr = JSON.stringify(absentArray);
			const objsArrDeepCopy = JSON.parse(objsArrStr);	
			absentArray=objsArrDeepCopy;
		});
				 $('#pickOneEach').click(function () {
			 for (var l = 0; l < groupNamesArray.length; l++) {
				highlightGroup(l);
			 }
		 });
		  $('#pickOneOverall').click(function () {
			  let randomGroup = Math.floor(Math.random() * groupNamesArray.length);
			  clearHighlights();
				highlightGroup(randomGroup);
		 });
		  $('#exportGroups').click(function () {
			
			generateNameIDMatchArray();
		 });
		  $('#importGroups').click(function () {
		$(".fileuploadImport").slideToggle();
		
			// $(".remakeGroups").slideToggle();
					document.getElementById('pickOneEach').hidden=true;
						document.getElementById('remakeGroupsButton').hidden=true;

			document.getElementById('pickOneOverall').hidden=true;
			
			document.getElementById('exportGroups').hidden=true;
			
			document.getElementById('importGroups').hidden=true;
			document.getElementById('invertGroups').hidden=true;
		$(".fileupload").slideToggle();
        $(".studentsContainerTwo").slideToggle();
		 });
		 $('#invertGroups').click(function () {
		// $(".fileuploadImport").slideToggle();
		

		makeListForInvert();
			// $(".remakeGroups").slideToggle();
					document.getElementById('pickOneEach').hidden=false;
					
					if (outside){
						document.getElementById('remakeGroupsButton').hidden=true;
					}
					else{
						document.getElementById('remakeGroupsButton').hidden=false;			
					}
					
			document.getElementById('pickOneOverall').hidden=false;
			
			document.getElementById('exportGroups').hidden=false;
			
			document.getElementById('importGroups').hidden=false;
			document.getElementById('invertGroups').hidden=false;
		// $(".fileupload").slideToggle();
        $(".studentsContainerTwo").slideToggle();
		 });
        $('#finalizeGroupsButton').click(function () {
			// alert ("hi")

			document.getElementById('pickOneEach').hidden=false;
			
			document.getElementById('pickOneOverall').hidden=false;
			
			document.getElementById('exportGroups').hidden=false;
			
			document.getElementById('importGroups').hidden=false;
			document.getElementById('invertGroups').hidden=false;
            lockNames = true;
            // console.warn("yo yo yo "+allStudentBoxIds[5]);
            // document.getElementById(allStudentBoxIds[5]).style.="";

            // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="gray";
            // for (var l = 0; l < groupNamesArray.length; l++) {
                // let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                // document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + "";

            // }
			            for (var l = 0; l < groupNamesArray.length; l++) {
				(function (l) {
                let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + " " + "<button type ='button' id ='"+(groupNamesArray[l][0]+"button")+"' style='font-size: medium'>pick randomly </button>";
				 // document.getE.click(function () {
				document.getElementById(groupNamesArray[l][0]+"button").addEventListener("click", function (f) {
					highlightGroup(l);
					});
				document.getElementById("group"+l).style.paddingLeft='0px';
            })(l);
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
					// if (confirm("Do you want to export your groups to a spreadsheet?")){
		
			// // document.getElementById('txtFileUpload2').click();
			// generateNameIDArrayForZoom();
					// }        
		$(".finalizeGroups").slideToggle();
		$(".fileuploadImport").slideToggle();
		document.getElementById('remakeGroupsButton').hidden=true;
		
		document.getElementById('exportGroups').hidden=true;

        });
				let tempSetup=true;
		if (tempSetup==true){
		document.getElementById('finalizeGroupsButton').click();
		// alert("done");
		}
}
	
var generateInvert = function (dataArray) {
	
        // $(".fileupload").slideToggle();
		console.log(dataArray[0].toString());
	
        document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment' style = 'width:auto'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:large; width:auto; max-width:300px;'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        
		// $('#assignmentSelect').empty();
		// if (canvas){
			// for (var i = 5; i < dataArray[startRow].length; i++) {
			// if (dataArray[startRow][i].includes("MAX")){
				// addAssignmentOption(dataArray[startRow][i].substring(0, dataArray[startRow][i].indexOf("MAX")));
			// }
			// else{
				// addAssignmentOption(dataArray[startRow][i]);
			// }
        // }
		// }
		let arrayOfGroupNames=[];
		let arrayOfGroupIndexes=[];
		let tempGroupNum=-1;
		console.log(dataArray);
		for (var i = 1; i < dataArray.length; i++){
			// console.log(dataArray[i]);
			if (dataArray[i][0]=='Group 0'){
				arrayOfGroupNames.push(dataArray[i][0]);
				arrayOfGroupIndexes.push(i);
			}
			// console.log(arrayOfGroupNames);
			// console.log(dataArray[i]);
			// groupOfGroupsArray[tempGroupNum].push([dataArray[i][1], "#77D5D5", "medium"]); //to later select the background color for highest groups

		}


		allGroupIds=[];
		// absentArray=[];
		groupNamesArray=[];
        document.getElementById('selectionsBox').innerHTML = "<div class = 'finalizeGroups'> <span style='font-size: large'> Finalize Names as Necessary and then click Done:</span><button type ='button' id ='finalizeGroupsButton' style = 'font-size: large'>Finalize Groups</button></div>  <div class = 'groupAgain'><button type ='button' id ='pickOneOverall' style = 'font-size: large' hidden>Pick Random Student</button>    <button type ='button' id ='pickOneEach' style = 'font-size: large' hidden>Pick One From Each Group</button></div>";
        document.getElementById('underButtons').innerHTML =  "<div class = 'finalizeGroups'></div> <div class = 'groupAgain'><button type ='button' id ='remakeGroupsButton' style = 'font-size: large'>Remake Groups</button>   <button type ='button' id ='invertGroups' style = 'font-size: large' hidden>Invert Groups</button>    <button type ='button' id ='importGroups' style = 'font-size: large' hidden>Import Groups</button>    <button type ='button' id ='exportGroups' style = 'font-size: large' hidden>Export Groups</button></div>";
          
        $(".studentsContainerTwo").slideToggle();
        numberOfGroups = arrayOfGroupNames.length;
		console.log(arrayOfGroupNames.length);
        var testIdName = "group" + 0 + "";
        allGroupIds.push(testIdName + "");
		console.log(dataArray[1].length);
        document.getElementById("studentContainerTwo").innerHTML = "<div id = '" + testIdName + "'>" + testIdName + "</div>";
        for (var i = 1; i < numberOfGroups; i++) {
			if (dataArray[1].length>2){
			// var testIdName = "group" + dataArray[1][2]+"";
            var testIdName = "group" + i + "";
			}
			else{
            var testIdName = "group" + i + "";
			}
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
		arrayOfGroupNames=[];
		for (var i = 1; i < dataArray.length; i++){
			console.log(dataArray[i]);
			console.log(dataArray[i][1]);
			if (!(arrayOfGroupNames.includes(dataArray[i][0]))){
				// tempGroupNum=i%numberOfGroups;
				// arrayOfGroupNames.push(dataArray[i][0]);
			}
			tempGroupNum=(i-1)%numberOfGroups;
			console.log(tempGroupNum);
			console.log(numberOfGroups);
			console.log(arrayOfGroupNames);
			console.log(dataArray[i]);
			console.log(groupOfGroupsArray);
			groupOfGroupsArray[tempGroupNum].push([dataArray[i][1]+"", "#77D5D5", "medium"]); //to later select the background color for highest groups

			console.log(groupOfGroupsArray);
		}
        // console.warn(groupCArray[0][0].toString());
       // for (var g = 0; g < groupCArray.length; g++) {
            // console.log(groupPlacement);
			// // groupOfGroupsArray.push(
            // // console.warn(groupCArray[g][0].toString());
			// if (!(document.getElementById(groupCArray[g][0]).classList.contains("nottargeted"))){
            // (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "#83EA83", "high"]); //to later select the background color for highest groups
            // groupPlacement++;
			// }
						// else{
			// absentArray.push(groupCArray[g][0]);
			// console.log("The absent list is now "+absentArray);
			// }
            // if (groupPlacement > (numberOfGroups - 1)) {
                // // console.log(groupPlacement);
                // groupPlacement = 0;
            // }
        // }
        // for (var g = 0; g < groupBArray.length; g++) {
			// if (!(document.getElementById(groupBArray[g][0]).classList.contains("nottargeted"))){
            // groupOfGroupsArray[groupPlacement].push([groupBArray[g][0], "#77D5D5", "medium"]); //to later select the background color for highest groups
            // groupPlacement++;
			// }
						// else{
			// absentArray.push(groupBArray[g][0]);
			// console.log("The absent list is now "+absentArray);
			// }
            // if (groupPlacement > (numberOfGroups - 1)) {
                // groupPlacement = 0;
            // }
        // }
        // for (var g = 0; g < groupAArray.length; g++) {
			// if (!(document.getElementById(groupAArray[g][0]).classList.contains("nottargeted"))){
            // groupOfGroupsArray[groupPlacement].push([groupAArray[g][0], "#FFBABA", "low"]) //to later select the background color for highest groups
            // groupPlacement++;
			// }
						// else{
			// absentArray.push(groupAArray[g][0]);
			// console.log("The absent list is now "+absentArray);
			// }
            // if (groupPlacement > (numberOfGroups - 1)) {
                // groupPlacement = 0;
            // }
        // }

		console.error(groupOfGroupsArray.length);
		allStudentBoxIds=[];
		var spot=0;
        for (var k = 0; k < groupOfGroupsArray.length; k++) {
			
            // shuffle(groupOfGroupsArray[k]);
            var testTempIdName = groupOfGroupsArray[k][0][0]+""
            var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
            var testIdTag = testIdName.replace(/\s+/g, '');
            var groupIdTag = "groupThing" + k;
			
			
			// var testIdName = "group" + dataArray[1][2]+"";

            var groupIdTagNumber = "groupNumber" + k;
			spot = k+1;
			console.error(spot);
			if (dataArray[1].length>2){
				spot = dataArray[arrayOfGroupIndexes[k]][2]+"";
			}
			console.warn(k+" "+spot);
            document.getElementById(allGroupIds[k]).innerHTML = "<div id = '" + groupIdTag + "'>Group: <input type='text'  name='o' id = '" + groupIdTagNumber + "' value='" + spot + "' style='width: 35%'></input></div>" + "<div class='card' id = '" + testIdTag + "'><div class='container'> <h4><b>" + testIdName + "</b></h4></div></div>";
            groupNamesArray.push([groupIdTag + "", groupIdTagNumber + ""]);
            document.getElementById(testIdTag + "").classList.add(groupOfGroupsArray[k][0][2]);

            allStudentBoxIds.push([testIdTag + "", testIdName + "", (groupOfGroupsArray[k][0][2]) + ""]);
            for (var i = 1; i < groupOfGroupsArray[k].length; i++) {
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);
                // var testIdName = groupOfGroupsArray[k][i][0] + "";
				var testTempIdName = groupOfGroupsArray[k][i][0]+""
				var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
            var testIdName = testTempIdName.split(', ').slice(-1).join(' ')+ " " + testTempIdName.split(', ').slice(0, -1).join(' ');	
           
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
		console.error(allStudentBoxIds);
        for (var i = 0; i < allStudentBoxIds.length; i++) {

				console.warn(document.getElementById(allStudentBoxIds[i + 0][0]));
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
		// $(".fileupload").slideToggle();
		

        $('#remakeGroupsButton').click(function () { //go back to the beginning but see if attendance remains
			generateDropdowns(data);
			console.log("error of absent is "+absentArray);
						document.getElementById('remakeGroupsButton').hidden=true;
			document.getElementById('exportGroups').hidden=true;
			
			document.getElementById('importGroups').hidden=true;
			document.getElementById('invertGroups').hidden=true;
			$(".finalizeGroups").slideToggle();
			$(".remakeGroups").slideToggle();
			
        $(".studentsContainerTwo").slideToggle();
			// console.log("error of absent is "+absentArray);
			const objsArrStr = JSON.stringify(absentArray);
			const objsArrDeepCopy = JSON.parse(objsArrStr);	
			absentArray=objsArrDeepCopy;
		});
				 $('#pickOneEach').click(function () {
			 for (var l = 0; l < groupNamesArray.length; l++) {
				highlightGroup(l);
			 }
		 });
		  $('#pickOneOverall').click(function () {
			  let randomGroup = Math.floor(Math.random() * groupNamesArray.length);
			  clearHighlights();
				highlightGroup(randomGroup);
		 });
		  $('#exportGroups').click(function () {
			  if (confirm('Is this for zoom breakout rooms (click OK) ? Or for your records (click cancel)')){
				  			if (!canvas) {
			document.getElementById('txtFileUpload2').click();
				}
			generateNameIDMatchArray();
			  }
			  else{
				  generateNameIDMatchArray2();
			  }
			  
		 });
		  $('#importGroups').click(function () {
		$(".fileuploadImport").slideToggle();
		
		// alert("hi2");
			// $(".remakeGroups").slideToggle();
					document.getElementById('pickOneEach').hidden=true;
						document.getElementById('remakeGroupsButton').hidden=true;

			document.getElementById('pickOneOverall').hidden=true;
			
			document.getElementById('exportGroups').hidden=true;
			
			document.getElementById('importGroups').hidden=true;
			document.getElementById('invertGroups').hidden=true;
		$(".fileupload").slideToggle();
        $(".studentsContainerTwo").slideToggle();
		 });
		$('#invertGroups').click(function () {
		// $(".fileuploadImport").slideToggle();
		

		makeListForInvert();
			// $(".remakeGroups").slideToggle();
					document.getElementById('pickOneEach').hidden=false;
					
					if (outside){
						document.getElementById('remakeGroupsButton').hidden=true;
					}
					else{
						document.getElementById('remakeGroupsButton').hidden=false;			
					}
					
			document.getElementById('pickOneOverall').hidden=false;
			
			document.getElementById('exportGroups').hidden=false;
			
			document.getElementById('importGroups').hidden=false;
			document.getElementById('invertGroups').hidden=false;
		// $(".fileupload").slideToggle();
        $(".studentsContainerTwo").slideToggle();
		 });
        $('#finalizeGroupsButton').click(function () {
			// alert ("hi")

			document.getElementById('pickOneEach').hidden=false;
			
			document.getElementById('pickOneOverall').hidden=false;
			
			document.getElementById('exportGroups').hidden=false;
			
			document.getElementById('importGroups').hidden=false;
			document.getElementById('invertGroups').hidden=false;
            lockNames = true;
            // console.warn("yo yo yo "+allStudentBoxIds[5]);
            // document.getElementById(allStudentBoxIds[5]).style.="";

            // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="gray";
            // for (var l = 0; l < groupNamesArray.length; l++) {
                // let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                // document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + "";

            // }
			            for (var l = 0; l < groupNamesArray.length; l++) {
				(function (l) {
                let tempnum = document.getElementById(groupNamesArray[l][1]).value + "";
                document.getElementById(groupNamesArray[l][0]).innerHTML = "Group: " + tempnum + " " + "<button type ='button' id ='"+(groupNamesArray[l][0]+"button")+"' style='font-size: medium'>pick randomly </button>";
				 // document.getE.click(function () {
				document.getElementById(groupNamesArray[l][0]+"button").addEventListener("click", function (f) {
					highlightGroup(l);
					});
				document.getElementById("group"+l).style.paddingLeft='0px';
            })(l);
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
					// if (confirm("Do you want to export your groups to a spreadsheet?")){
		
			// // document.getElementById('txtFileUpload2').click();
			// generateNameIDMatchArray2();
					// }        
		$(".finalizeGroups").slideToggle();
		$(".fileuploadImport").slideToggle();
		document.getElementById('remakeGroupsButton').hidden=true;
		
		document.getElementById('exportGroups').hidden=true;

        });
				let tempSetup=true;
		if (tempSetup==true){
		document.getElementById('finalizeGroupsButton').click();
		// alert("done");
		}
}
	
function uploadImport(evt) {
	// alert ("hi");
	onlyOneInput=false;
        if (!browserSupportFileUpload()) {
            alert('The File APIs are not fully supported in this browser!');
        } else {
            dataImport = null;
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function (event) {
				
                var csvData = event.target.result;
                dataImport = $.csv.toArrays(csvData);
                if (dataImport && dataImport.length > 0) {
                    // alert('Imported -' + data.length + '- rows successfully!');
                    generateImports(dataImport);
              
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
    document.getElementById('txtFileUpload3').addEventListener('change', uploadImport, false);

var exportBreakout = function(){
	
	
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", breakoutfilename);
document.body.appendChild(link); // Required for FF

link.click();
}

});


