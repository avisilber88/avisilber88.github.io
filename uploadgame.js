$(document).ready(function () {
    var data = null;
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
	var itSelected=false;
	var nameOne="name";
	var nameTwo="nameTwo";
	var iOne=0;
	var iTwo=0;
	var colorOne="white";
	var lockNames=false;

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

    // document.getElementById("coefficientNumOne").innerHTML = "<input type='text'  name='organicCompoundCoefficient' id = 'organicCompoundCoefficient' value='coefficient?'></input>"; //<font color= 'white'>";


    //Step 2: Generate dropdown menus.
    var generateDropdowns = function (dataArray) {
        document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:xx-large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  <button type ='button' id ='submitAssignment' style='font-size: xx-large'>Submit</button></div>";
        $('#assignmentSelect').empty();
        for (var i = 2; i < dataArray[2].length; i++) {
            addAssignmentOption(dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")));
        }
        $('#submitAssignment').click(function () {
            // alert ("hi");
            // if (true){
            for (var i = 2; i < dataArray[2].length; i++) {
                if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == (dataArray[2][i].substring(0, dataArray[2][i].indexOf("MAX")))) {
                    columnOfStudy = i + 0;
                }
            }

            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
            $(".pickassignment").slideToggle();
            generateSliders();
        });
    }

    //Step 3: Generate Sliders

    var generateSliders = function () {
        columnArray = getCol(data, columnOfStudy);
        console.log(columnArray.toString());

        // alert(largestScore + " " + smallestScore);
        $(".studentsContainerOne").slideToggle();
        document.getElementById('selectionsBox').innerHTML = "<div class = 'scoreRangeSelected' style='padding-left:60px; padding-top:60px; font-size:xx-large'>Select the borders in score between your 3 groups<div class = 'sequence-mode row'> <div id='noteLengthSlider' style='width:90%; max-width:800px;'></div></div><div class='row' style = 'padding-top:10vh'><button type ='button' id ='submitScoreRange' style='font-size: xx-large'>Submit</button></div></div>";
        //<div class='row'><div class='col-sm' id = 'groupa'>underperforming group</div><div class='col-sm' id = 'groupb'>middle-performing group</div><div class='col-sm' id = 'groupc'>top performing group</div></div></div><div class='row'>

        columnArray.sort(compareSecondColumn);
        console.log(columnArray);

        var slider = document.getElementById('noteLengthSlider');

        noUiSlider.create(slider, {
            start: [smallestScore + 1, largestScore - 1],
            connect: true,
            step: 1,
            range: {
                'min': smallestScore,
                'max': largestScore
            },

            pips: {
                mode: 'count',
                values: (largestScore - smallestScore+1),
                stepped: true,
                density: 100,
            },
			// width: 500px,
        });
		
		// $('.noUi-connects').css("width" , "500px");
		// document.getElementByClassName('noUi-connects').width='500px';
        scoreCutoffOne = Number(slider.noUiSlider.get()[0]);
        scoreCutoffTwo = Number(slider.noUiSlider.get()[1]);
        document.getElementById("groupA").innerHTML = "Lowest Score group (Score of " + smallestScore + " to " + scoreCutoffOne + ")<p>";
        document.getElementById("groupB").innerHTML = "Middle Score group (Score of " + scoreCutoffOne + ".01 to " + scoreCutoffTwo + ")<p>";
        document.getElementById("groupC").innerHTML = "Highest Score group (Score of " + scoreCutoffTwo + ".01 to " + largestScore + ")<p>";
        groupAArray = getBetween(columnArray, smallestScore, scoreCutoffOne);
        groupBArray = getBetween(columnArray, scoreCutoffOne + .01, scoreCutoffTwo);
        groupCArray = getBetween(columnArray, scoreCutoffTwo + .01, largestScore);
        console.log("an array " + groupAArray.toString());
        console.log("an array " + groupBArray.toString());
        console.log("an array " + groupCArray.toString());
        for (var i = 0; i < groupAArray.length; i++) {
            var testIdName = groupAArray[i][0] + "";
            document.getElementById("groupA").innerHTML = document.getElementById("groupA").innerHTML + "<input type='text'  name='organicCompoundCoefficient' id = '" + testIdName + "'value='" + testIdName + "' style='background-color:pink'></input>";
        }
        for (var i = 0; i < groupBArray.length; i++) {
            var testIdName = groupBArray[i][0] + "";
            document.getElementById("groupB").innerHTML = document.getElementById("groupB").innerHTML + "<input type='text'  name='organicCompoundCoefficient' id = '" + testIdName + "'value='" + testIdName + "' style='background-color:cyan'></input>";
        }
        for (var i = 0; i < groupCArray.length; i++) {
            var testIdName = groupCArray[i][0] + "";
            document.getElementById("groupC").innerHTML = document.getElementById("groupC").innerHTML + "<input type='text'  name='organicCompoundCoefficient' id = '" + testIdName + "'value='" + testIdName + "' style='background-color:green'></input>";
        }
        slider.noUiSlider.on('change', function () {
            scoreCutoffOne = Number(slider.noUiSlider.get()[0]);
            scoreCutoffTwo = Number(slider.noUiSlider.get()[1]);

            // var testIdName= "student";
            document.getElementById("groupA").innerHTML = "Lowest Score group (Score of " + smallestScore + " to " + scoreCutoffOne + ")<p>";
            document.getElementById("groupB").innerHTML = "Middle Score group (Score of " + scoreCutoffOne + ".01 to " + scoreCutoffTwo + ")<p>";
            document.getElementById("groupC").innerHTML = "Highest Score group (Score of " + scoreCutoffTwo + ".01 to " + largestScore + ")<p>";
            groupAArray = getBetween(columnArray, smallestScore, scoreCutoffOne);
            groupBArray = getBetween(columnArray, scoreCutoffOne + .01, scoreCutoffTwo);
            groupCArray = getBetween(columnArray, scoreCutoffTwo + .01, largestScore);
            console.log("an array " + groupAArray.toString());
            console.log("an array " + groupBArray.toString());
            console.log("an array " + groupCArray.toString());
            for (var i = 0; i < groupAArray.length; i++) {
                var testIdName = groupAArray[i][0] + "";
                document.getElementById("groupA").innerHTML = document.getElementById("groupA").innerHTML + "<input type='text'  name='organicCompoundCoefficient' id = '" + testIdName + "'value='" + testIdName + "' style='background-color:pink'></input>";
            }
            for (var i = 0; i < groupBArray.length; i++) {
                var testIdName = groupBArray[i][0] + "";
                document.getElementById("groupB").innerHTML = document.getElementById("groupB").innerHTML + "<input type='text'  name='organicCompoundCoefficient' id = '" + testIdName + "'value='" + testIdName + "' style='background-color:cyan'></input>";
            }
            for (var i = 0; i < groupCArray.length; i++) {
                var testIdName = groupCArray[i][0] + "";
                document.getElementById("groupC").innerHTML = document.getElementById("groupC").innerHTML + "<input type='text'  name='organicCompoundCoefficient' id = '" + testIdName + "'value='" + testIdName + "' style='background-color:green'></input>";
            }

            // "<input type='text'  name='organicCompoundCoefficient' id = '"+ testIdName +"'value='"+testIdName+"'></input>";


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
        for (var i = 3; i < matrix.length; i++) {
            if (smallestScore > Number((matrix[i][col]))) {
                smallestScore = Number((matrix[i][col])) + 0;
            }
            if (largestScore < Number((matrix[i][col]))) {
                largestScore = Number((matrix[i][col])) + 0;
            }
            column.push([matrix[i][0], Number(matrix[i][col])]);
        }

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

    var generateGroupChoices = function () {
        document.getElementById('selectionsBox').innerHTML = "<div class = 'pickgroupstyle'> <button type ='button' id ='groupByNumGroupsButton' style = 'font-size: xx-large'>Group by the Maximum Number of Groups</button><button type ='button' id ='groupByNumStudentsButton' style = 'font-size: xx-large'>Group by the Number of Students per Group</button></div>";

        $('#groupByNumGroupsButton').click(function () {
            // alert ("hi");
            // if (true){

            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
            $(".pickgroupstyle").slideToggle();
            groupByGroups(prompt("How many groups do you want?"));

            $(".studentsContainerOne").slideToggle();
        });

        $('#groupByNumStudentsButton').click(function () {
            // alert ("hi");
            // if (true){

            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
            $(".pickgroupstyle").slideToggle();
            groupByStudents(prompt("What is your group size? (no group will have larger than this size, and all of your groups will have this size or one less)"));

            $(".studentsContainerOne").slideToggle();
        });
    }
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    var groupByGroups = function (numberOfGroups) {
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
        console.warn(groupCArray[0][0].toString());
        for (var g = 0; g < groupCArray.length; g++) {
            console.log(groupPlacement);

            console.warn(groupCArray[g][0].toString());
            (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "green"]); //to later select the background color for highest groups
            groupPlacement++;
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
        }
        for (var g = 0; g < groupBArray.length; g++) {
            groupOfGroupsArray[groupPlacement].push([groupBArray[g][0], "cyan"]); //to later select the background color for highest groups
            groupPlacement++;
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
        }
        for (var g = 0; g < groupAArray.length; g++) {
            groupOfGroupsArray[groupPlacement].push([groupAArray[g][0], "pink"]) //to later select the background color for highest groups
            groupPlacement++;
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
        }


        for (var k = 0; k < groupOfGroupsArray.length; k++) {
            shuffle(groupOfGroupsArray[k]);
            var testIdName = groupOfGroupsArray[k][0][0] + "";
            var testIdTag = testIdName.replace(/\s+/g, '');
            document.getElementById(allGroupIds[k]).innerHTML = "Group Number: " + (k + 1) + "<br>"+"<input type='text'  name='organicCompoundCoefficient' id = '" + testIdTag + "' value='" + testIdName + "' style='background-color:" + groupOfGroupsArray[k][0][1] + "'></input>";
            allStudentBoxIds.push(testIdTag + "");
            for (var i = 1; i < groupOfGroupsArray[k].length; i++) {
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);
                var testIdName = groupOfGroupsArray[k][i][0] + "";
                var testIdTag = testIdName.replace(/\s+/g, '');
                document.getElementById(allGroupIds[k]).innerHTML = document.getElementById(allGroupIds[k]).innerHTML + "<input type='text'  name='organicCompoundCoefficient' id = '" + testIdTag + "' value='" + testIdName + "' style='background-color:" + groupOfGroupsArray[k][i][1] + "'></input>";
                // if(groupOfGroupsArray[k].length
                // alert(testIdTag);
                allStudentBoxIds.push(testIdTag + "");
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);

                // console.warn("yo yo yo "+allStudentBoxIds.toString());

            }

        }


for (var i = 0; i<allStudentBoxIds.length; i++){
	
	 (function(i){  

        document.getElementById(allStudentBoxIds[i+0]).addEventListener("click", function(e){
			if ((!itSelected)&&(!lockNames)){
				iOne=i;
				colorOne=document.getElementById(allStudentBoxIds[i+0]).style.backgroundColor+"";
				document.getElementById(allStudentBoxIds[i]).style.backgroundColor = "white";
				nameOne=document.getElementById(allStudentBoxIds[i]).value+"";
				itSelected=true;
			}
			else if ((!lockNames)&&((colorOne==(document.getElementById(allStudentBoxIds[i]).style.backgroundColor+""))||(("white"==(document.getElementById(allStudentBoxIds[i]).style.backgroundColor+""))))){
				// alert (colorOne);
				document.getElementById(allStudentBoxIds[iOne]).style.backgroundColor = colorOne;
				nameTwo=document.getElementById(allStudentBoxIds[i]).value+"";
				document.getElementById(allStudentBoxIds[i]).value=nameOne;
				document.getElementById(allStudentBoxIds[iOne]).value=nameTwo;	
				
				itSelected=false;
			
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

        // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="cyan";
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
			lockNames=true;
            // console.warn("yo yo yo "+allStudentBoxIds[5]);
            // document.getElementById(allStudentBoxIds[5]).style.="";

            // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="blue";
            for (var i = 0; i < allStudentBoxIds.length; i++) {
                // document.getElementById(allStudentBoxIds[0]).innerHTML="";

                document.getElementById(allStudentBoxIds[i]).style.backgroundColor = "white";
            }
            $(".finalizeGroups").slideToggle();
        });

    }

    var groupByStudents = function (maxStudents) {
        document.getElementById('selectionsBox').innerHTML = "<div class = 'finalizeGroups'> <span style='font-size: xx-large'> Finalize Names as Necessary and then click Done:</span> <button type ='button' id ='finalizeGroupsButton' style = 'font-size: xx-large'>Finalize Groups</button></div>";

        $(".studentsContainerTwo").slideToggle();
		numberOfGroups=Math.ceil(columnArray.length/maxStudents);
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
        console.warn(groupCArray[0][0].toString());
        for (var g = 0; g < groupCArray.length; g++) {
            console.log(groupPlacement);

            console.warn(groupCArray[g][0].toString());
            (groupOfGroupsArray[groupPlacement + 0]).push([groupCArray[g][0], "green"]); //to later select the background color for highest groups
            groupPlacement++;
            if (groupPlacement > (numberOfGroups - 1)) {
                // console.log(groupPlacement);
                groupPlacement = 0;
            }
        }
        for (var g = 0; g < groupBArray.length; g++) {
            groupOfGroupsArray[groupPlacement].push([groupBArray[g][0], "cyan"]); //to later select the background color for highest groups
            groupPlacement++;
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
        }
        for (var g = 0; g < groupAArray.length; g++) {
            groupOfGroupsArray[groupPlacement].push([groupAArray[g][0], "pink"]) //to later select the background color for highest groups
            groupPlacement++;
            if (groupPlacement > (numberOfGroups - 1)) {
                groupPlacement = 0;
            }
        }


        for (var k = 0; k < groupOfGroupsArray.length; k++) {
            shuffle(groupOfGroupsArray[k]);
            var testIdName = groupOfGroupsArray[k][0][0] + "";
            var testIdTag = testIdName.replace(/\s+/g, '');
            document.getElementById(allGroupIds[k]).innerHTML = "Group Number: " + (k + 1) + "<br>"+"<input type='text'  name='organicCompoundCoefficient' id = '" + testIdTag + "' value='" + testIdName + "' style='background-color:" + groupOfGroupsArray[k][0][1] + "'></input>";
            allStudentBoxIds.push(testIdTag + "");
            for (var i = 1; i < groupOfGroupsArray[k].length; i++) {
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);
                var testIdName = groupOfGroupsArray[k][i][0] + "";
                var testIdTag = testIdName.replace(/\s+/g, '');
                document.getElementById(allGroupIds[k]).innerHTML = document.getElementById(allGroupIds[k]).innerHTML + "<input type='text'  name='organicCompoundCoefficient' id = '" + testIdTag + "' value='" + testIdName + "' style='background-color:" + groupOfGroupsArray[k][i][1] + "'></input>";
                // if(groupOfGroupsArray[k].length
                // alert(testIdTag);
                allStudentBoxIds.push(testIdTag + "");
                // alert (groupOfGroupsArray[k].length+" of group " + k+ " person is "+testIdName);

                // console.warn("yo yo yo "+allStudentBoxIds.toString());

            }

        }


for (var i = 0; i<allStudentBoxIds.length; i++){
	
	 (function(i){  

        document.getElementById(allStudentBoxIds[i+0]).addEventListener("click", function(e){
			if ((!itSelected)&&(!lockNames)){
				iOne=i;
				colorOne=document.getElementById(allStudentBoxIds[i+0]).style.backgroundColor+"";
				document.getElementById(allStudentBoxIds[i]).style.backgroundColor = "white";
				nameOne=document.getElementById(allStudentBoxIds[i]).value+"";
				itSelected=true;
			}
			else if ((!lockNames)&&((colorOne==(document.getElementById(allStudentBoxIds[i]).style.backgroundColor+""))||(("white"==(document.getElementById(allStudentBoxIds[i]).style.backgroundColor+""))))){
				// alert (colorOne);
				document.getElementById(allStudentBoxIds[iOne]).style.backgroundColor = colorOne;
				nameTwo=document.getElementById(allStudentBoxIds[i]).value+"";
				document.getElementById(allStudentBoxIds[i]).value=nameOne;
				document.getElementById(allStudentBoxIds[iOne]).value=nameTwo;	
				
				itSelected=false;
			
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

        // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="cyan";
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
			lockNames=true;
            // console.warn("yo yo yo "+allStudentBoxIds[5]);
            // document.getElementById(allStudentBoxIds[5]).style.="";

            // document.getElementById(allStudentBoxIds[0]).style.backgroundColor="blue";
            for (var i = 0; i < allStudentBoxIds.length; i++) {
                // document.getElementById(allStudentBoxIds[0]).innerHTML="";

                document.getElementById(allStudentBoxIds[i]).style.backgroundColor = "white";
            }
            $(".finalizeGroups").slideToggle();
        });
    }

});