// Variable which tell us what step of the game we're on.
// We'll use this later when we parse noteOn/Off messages
var arraySpot=0;
var metronome=false;
var inversions = false;
var ezmajon=false;
var ezminon=false;
var ez5on=false;
var inversionAddOn = "";
var pickedInversion = 0;
var currentBPM = 120;
var clockTester = 0;
var metroTester = 0;
var newQuestionTime = false;
var currentStep = -1;
var score = 1;
var octaveSetting = 24;
var leadInCounter=0;
var lowestNote=0;
var middleNoteSet=false;
var mostRecentDistanceSpot=0;
var timeCheck=0;
var playerMode=false;
// Timer length
var middleNote=0;
var timerLength = 10 / 60; // in minutes
var timerTripped = false;
var specificNotes=false;
var specificCorrectChord=[];
var beatLength=5;
// Lock 1 variables
var correctNoteSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Amazing Grace in F
var activeNoteSequence = [];
var leadNum=4;
// Lock 2 variables
var correctChord = [11, 4, 5, 7, 15]; // C7 chord starting on middle C
var activeChord = [];
var specificActiveChord = [];
var currentChordName = "Wait for the first chord";
var bassMatched = 0;
var currentImageName = "Blank Keyboard.jpeg"
    var slashRoot = 0;
var presentationType = "sheet"
    //document.getElementById("ez5").addEventListener(select
var moreMeasures=0;

    var firstNoteShown = false;
var lastImageNote;
var currentImageNote;
var rememberSingingGroup;
var rememberTargetGroup;
var referenceGroups = [];
var rememberReferenceGroup;
var notationMode = "movingNotesMode";
var dotTheNote = false;
var dotTheSecondNote = false;
var tieOn = false;
var tieTime = false;
var tieAmountOne = 1;
var tieAmountTwo = 1;
var smallestNoteDenominator = 8;
var wholesToTieAtTheBeginning = 0;
var sequenceOn = false;
var beginning = false;
var isFlat = false;
var trackList=[];
var releaseEarly=1;
var trackSelected=0;
var correctChordQueue=[[12, 4],[9],[12,4], [9], [12, 5],[9],[12,5], [9],[12, 4],[7], [12,4], [7], [11, 2], [7], [11, 2], [7]];
var correctComplexChordQueue = [[[12, 4], 5],[[9], 9],[[12,4], 5], [[9], 9]];
var specificComplexChordQueue = [[[12+48, 4+48], 5],[[9+48], 9],[[12+48,4+48], 5], [[9+48], 9]];
    document.getElementById("dropdown").addEventListener("change", function () {
        //	alert("got");
        if (score > 4) {
            score = score - 3;
            document.getElementById("sp").innerHTML = " ";
        }            
		$("#alertMessage").html("");
            $("#my-dialog").dialog({
            modal: false,
            autoOpen: false,
            buttons: [{
                    text: "Hide",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]

        });
        $("#my-dialog").dialog({
			width: window.innerWidth//document.getElementById('keyboardImg2').getBoundingClientRect().left

        });
		        // $("#my-dialog").dialog({
            // position: {
                // my: 'top',
                // at: 'bottom',
                // of: '#keyboardImg2',
                // collision: 'fit'
            // }

        // });
		// alert(document.getElementById('keyboardImg2').getBoundingClientRect().left);
        // $("#my-dialog").dialog("open");
		// console.warn("restchordfromrunsequence");
        resetChord();
    });
	    
var noteArray = [
    [32.703, "C1", "C1"], //0
    [34.648, "C1#", "D2b"],
    [36.708, "D1", "D1"],
    [38.891, "D1#", "E1b"],
    [41.203, "E1", "E1"],
    [43.654, "F1", "F1"],
    [46.249, "F1#", "G1b"],
    [48.999, "G1", "G1"],
    [51.913, "G1#", "A1b"],
    [55, "A1", "A1"], //9, Avi says this is our first note that we have audio for
    [58.27, "A1#", "B1b"], //10
    [61.735, "B1", "C2b"], //11
    [65.406, "C2", "C2"], //12
    [69.296, "C2#", "D2b"], //13
    [73.416, "D2", "D2"], //14
    [77.782, "D2#", "E2b"], //15
    [82.407, "E2", "E2"],
    [87.307, "F2", "F2"],
    [92.499, "F2#", "G2b"],
    [97.999, "G2", "G2"],
    [103.83, "G2#", "A2b"],
    [110, "A2", "A2"],
    [116.54, "A2#", "B2b"],
    [123.47, "B2", "C3b"],
    [130.81, "C3", "C3"], //24 C's are always multiples of 12
    [138.59, "C3#", "D3b"],
    [146.83, "D3", "D3"],
    [155.56, "D3#", "E3b"],
    [164.81, "E3", "E3"],
    [174.61, "F3", "F3"],
    [185, "F3#", "G3b"],
    [196, "G3", "G3"],
    [207.65, "G3#", "A3b"],
    [220, "A3", "A3"],
    [233.08, "A3#", "B3b"],
    [246.94, "B3", "C4b"],
    [261.63, "C4", "C4"], //36
    [277.18, "C4#", "D4b"],
    [293.66, "D4", "D4"],
    [311.13, "D4#", "E4b"],
    [329.63, "E4", "E4"],
    [349.23, "F4", "F4"],
    [369.99, "F4#", "G4b"],
    [392, "G4", "G4"],
    [415.3, "G4#", "A4b"],
    [440, "A4", "A4"],
    [466.16, "A4#", "B4b"],
    [493.88, "B4", "C5b"],
    [523.25, "C5", "C5"],
    [554.37, "C5#", "D5b"],
    [587.33, "D5", "D5"],
    [622.25, "D5#", "E5b"],
    [659.26, "E5", "E5"],
    [698.46, "F5", "F5"],
    [739.99, "F5#", "G5b"],
    [783.99, "G5", "G5"],
    [830.61, "G5#", "A5b"],
    [880, "A5", "A5"],
    [932.33, "A5#", "B5b"],
    [987.77, "B5", "C6b"],
    [1046.5, "C6", "C6"], //Avi is not sure but he thinks this is 53
    [1108.7, "C6#", "D6b"],
    [1174.7, "D6", "D6"],
    [1244.5, "D6#", "E6b"],
    [1318.5, "E6", "E6"],
    [1396.9, "F6", "F6"],
    [1480, "F6#", "G6b"],
    [1568, "G6", "G6"],
    [1661.2, "G6#", "A6b"],
    [1760, "A6", "A6"],
    [1864.7, "A6#", "B6b"],
    [1975.5, "B6", "B6"]
];
// const VF = Vex.Flow;
//var midiFileParser = require('midi-file-parser');

//var fs = require('fs')

let sourceofmidi = document.getElementById('filereader');
// provide the File source and a callback function

var midiToNoteArray = 24;
var trackPicked = false;
var channels = 0;

// channels=6;

var addAssignmentOption = function (cationOption) {
        var sel = document.getElementById("assignmentSelect");
        var opt = document.createElement('option');
        opt.innerHTML = cationOption;
        //		opt.appendChild(document.createTextNode((cationOption)));
        opt.value = (cationOption);
        sel.appendChild(opt);

}
MidiParser.parse(sourceofmidi, function (obj) {
    $("button.tuneron").click();
	correctComplexChordQueue=[];
	trackList=[];
	specificComplexChordQueue=[];
    let importArray = [];
    let ticksOfThisNote = 0;
    let lastNote = 0;
    let currentNote = 0;
    var midiFormatType = obj.formatType;
    var midiFormatType2 = obj.formatType;
    // alert(midiFormatType);
    // midiFormatType=1;
    if (midiFormatType == 1) {
        let newTempo = obj.timeDivision / 3 * 4;
        let tempNewTempo = 0;
        let noteContainingTrack = 0;
        for (var i = 0; i < (obj.track.length); i++) {
            try {
                for (var j = 0; j < (obj.track[i].event.length); j++) {

					if (obj.track[i].event[j].metaType == 3){
						//console.log (i+" "+j+" "+obj.track[i].event[j].data);
						trackList.push(obj.track[i].event[j].data);
					}

                    if ((obj.track[i].event[j].type == 9) && (!trackPicked)) {
                        //console.log("channel " + obj.track[i].event[j].channel);
                        if (channels < (Number(obj.track[i].event[j].channel))) {
                            channels = obj.track[i].event[j].channel;

                            // alert(channels);
                        }
                        noteContainingTrack = i;
                        // trackPicked=true;// alert(i);
                    }

                    if (obj.track[i].event[j].metaType == 81) {
                        // alert (obj.track[i].event[j].data);
                        tempNewTempo = Math.round(1 / (obj.track[i].event[j].data / 60000000));
                        // alert (tempNewTempo);
                    }

                    // alert(newTempo);
                }

            } catch (error) {
                console.log(error)
            }

        }
		
		//transplanted from uploadgame
		document.getElementById('selectionsBox').innerHTML = "<div class = 'pickassignment'><select id = 'assignmentSelect' name = 'assignmentSelect' style = 'font-size:large'> <option value = 'cation1'> cation1 </option> <option value = 'cation2'> cation2 </option><option value = 'cation3'> cation3 </option><option value = 'cation4'> cation4 </option> </select>  </div>";
        $('#assignmentSelect').empty();
        for (var i = 0; i < trackList.length; i++) {
			//if (dataArray[startRow][i].includes("MAX")){
            addAssignmentOption(trackList[i]);
			//}
			//else{
			//addAssignmentOption(dataArray[startRow][i]);
			//}
        }
		document.getElementById("assignmentSelect").selectedIndex=(noteContainingTrack-1);
        $('#assignmentSelect').change(function () {
			
				correctComplexChordQueue=[];
	
	specificComplexChordQueue=[];
	let importArray = [];
    let ticksOfThisNote = 0;
    let lastNote = 0;
    let currentNote = 0;
            // alert ("hi");
            // if (true){
				//console.log("hi bob");
            for (var i = 0; i < trackList.length; i++) {
                if (document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML == (trackList[i])) {
                    noteContainingTrack = i+1;
					//alert(noteContainingTrack);
                }



            }
			
			if (tempNewTempo > 30) {
            // alert ("hi "+tempNewTempo);
            newTempo = tempNewTempo;
        } else {
            // alert ("hi2 "+tempNewTempo);
            let otherNewTempo = prompt("What tempo is the song you are importing?");
            if (otherNewTempo) {
                newTempo = otherNewTempo;
            }
        }
        // alert (obj.track.length); // when I return to this, elle's song works but hercules doesn't...
        singingTimeArray = [];

        $("#BPMAmount").val(newTempo);

        currentBPM = newTempo;
		document.getElementById("BPMAmount").value=currentBPM;
		var loadingChord=[];
		var specificLoadingChord=[];
        for (var i = 0; i < (obj.track[noteContainingTrack].event.length); i++) {
            // console.log(obj.track[obj.track.length-1].event[0].data);
            // console.log(obj.timeDivision);
            var importTicksPerBeat = obj.timeDivision;

            // console.log(obj.track[2].event[i].deltaTime);
            // console.log(obj.track[noteContainingTrack].event[i].type);
            ticksOfThisNote = ticksOfThisNote + obj.track[noteContainingTrack].event[i].deltaTime; //add the time of the message to the building message.
            if ((obj.track[noteContainingTrack].event[i].type == 9) && (obj.track[noteContainingTrack].event[i].channel == channels)) { //if note on
                // ticksOfThisNote=ticksOfThisNote+obj.track[2].event[i].deltaTime; //add the time of the message to the building message.
                lastNote = currentNote + 0;
                // alert (lastNote);
				//console.warn(lastNote);
                if (lastNote != 0) {
					console.error(lastNote);
                    singingTimeArray.push([lastNote - 24, (60 * (ticksOfThisNote + 0) / importTicksPerBeat) / currentBPM, 0]);
					let beatsOfThisNotes = (ticksOfThisNote + 0) / importTicksPerBeat;
					// if (beatsOfThisNotes ==0){
						// loadingChord.push((lastNote-1)%12+1);
						// specificLoadingChord.push(lastNote);
					// }

					if (Math.round(beatsOfThisNotes*4) == 0){
						loadingChord.push((lastNote-1)%12+1);
						if(!(specificLoadingChord.includes(lastNote)))
						specificLoadingChord.push(lastNote);
					}				
					else{
					
						loadingChord.push((lastNote-1)%12+1);
						if(!(specificLoadingChord.includes(lastNote)))
						specificLoadingChord.push(lastNote);
					correctComplexChordQueue.push([JSON.parse(JSON.stringify(loadingChord)), beatsOfThisNotes*4]);
					specificComplexChordQueue.push([JSON.parse(JSON.stringify(specificLoadingChord)), beatsOfThisNotes*4]);
					loadingChord=[];
					specificLoadingChord=[];
					}

                } else {
					
					console.error(lastNote);
					//THIS IS WHAT I AM NOT SURE ABOUT
                    singingTimeArray.push([12, (60 * (ticksOfThisNote + 0) / importTicksPerBeat) / currentBPM, 0]);
					//correctComplexChordQueue.push([0, 4*(ticksOfThisNote + 0) / importTicksPerBeat]);
                }
                currentNote = obj.track[noteContainingTrack].event[i].data[0];
                ticksOfThisNote = 0;
            }

        }
        lastNote = currentNote + 0;
        // alert (lastNote);

        if (lastNote != 0) {
			
					// console.error(lastNote);
            // singingTimeArray.push([(lastNote-1)%12+1 - 24, (60 * (ticksOfThisNote + 0) / importTicksPerBeat) / currentBPM, 0]);
			// correctComplexChordQueue.push([[(lastNote-1)%12+1], 4*(ticksOfThisNote + 0) / importTicksPerBeat]);
			// specificComplexChordQueue.push([[lastNote], 4*(ticksOfThisNote + 0) / importTicksPerBeat]);
 let beatsOfThisNotes = (ticksOfThisNote + 0) / importTicksPerBeat;
					
						loadingChord.push((lastNote-1)%12+1);
						if(!(specificLoadingChord.includes(lastNote)))
						specificLoadingChord.push(lastNote);
					correctComplexChordQueue.push([JSON.parse(JSON.stringify(loadingChord)), beatsOfThisNotes*4]);
					specificComplexChordQueue.push([JSON.parse(JSON.stringify(specificLoadingChord)), beatsOfThisNotes*4]);
					loadingChord=[];
					specificLoadingChord=[];

 }
			//end of transplant
            // alert(document.getElementById("assignmentSelect").options[document.getElementById("assignmentSelect").selectedIndex].innerHTML);
            // }
            //$(".pickassignment").slideToggle();
            //generateSliders();
			
			 try {
        synth.triggerRelease();
        stopAllNotes();
    } catch (error) {}
    // alert(rhythmSequenceArray.toString());
    sequenceArray = [];
    sequenceCopy = [];
    arpeggioArray = [];
    chordSequenceArray = [];
    chordSequenceCopy = [];
    buttonsCaptured = false;
    captureButtons = true;
    buttonStartEndTimes = [];
    buttonPlay = true;
    // buttonStartEndTimes.push([0, new Date(new Date().getTime())]);
    // if (buttonStartEndTimes.length > 1) {
    // // alert("long");
    // singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000, 0]);
    // buttonStartEndTimes.shift();
    // // console.log(singingTimeArray.toString());
    // }
    captureButtons = false;
    buttonsCaptured = true;
    singingCaptured = true;
    sequencePlay = true;
    nonReferencePlay = true;
    newQuestionTime = true;
	beginning=true;
	leadInCounter=leadNum;
	arraySpot=0;
    arrayOfSungNotesOnly = [];
	allRightAnswer();
	

	//newChord();
    for (i = 0; i < singingTimeArray.length; i++) {
       arrayOfSungNotesOnly.push((singingTimeArray[i][0])%12);
    }
    //console.log(singingTimeArray.toString());
    //findKey(arrayOfSungNotesOnly);

    // console.log(obj.track[2].event[i].data);
	for (var i = 0; i<correctComplexChordQueue.length; i++){ 
	//console.log(correctComplexChordQueue[i][0]+" "+correctComplexChordQueue[i][1]);
	
	console.log(specificComplexChordQueue[i][0]-24+" "+specificComplexChordQueue[i][1]);
	}
        });
        // if (midiFormatType==0){ // A COP OUT. THIS IS ONLY BECAUSE I DONT KNOW WHAT TO DO WITH BIG MIDI LIKE HERCULES
        // channels=1;
        // }
        if (tempNewTempo > 30) {
            // alert ("hi "+tempNewTempo);
            newTempo = tempNewTempo;
        } else {
            // alert ("hi2 "+tempNewTempo);
            let otherNewTempo = prompt("What tempo is the song you are importing?");
            if (otherNewTempo) {
                newTempo = otherNewTempo;
            }
        }
        // alert (obj.track.length); // when I return to this, elle's song works but hercules doesn't...
        singingTimeArray = [];

        $("#BPMAmount").val(newTempo);

        currentBPM = newTempo;
		
		document.getElementById("BPMAmount").value=currentBPM;
		var loadingChord=[];
		var specificLoadingChord=[];
        for (var i = 0; i < (obj.track[noteContainingTrack].event.length); i++) {
            // console.log(obj.track[obj.track.length-1].event[0].data);
            // console.log(obj.timeDivision);
            var importTicksPerBeat = obj.timeDivision;

            // console.log(obj.track[2].event[i].deltaTime);
            // console.log(obj.track[noteContainingTrack].event[i].type);
            ticksOfThisNote = ticksOfThisNote + obj.track[noteContainingTrack].event[i].deltaTime; //add the time of the message to the building message.
            if ((obj.track[noteContainingTrack].event[i].type == 9) && (obj.track[noteContainingTrack].event[i].channel == channels)) { //if note on
                // ticksOfThisNote=ticksOfThisNote+obj.track[2].event[i].deltaTime; //add the time of the message to the building message.
                lastNote = currentNote + 0;
                // alert (lastNote);
				//console.warn(lastNote);
                if (lastNote != 0) {
                    singingTimeArray.push([lastNote - 24, (60 * (ticksOfThisNote + 0) / importTicksPerBeat) / currentBPM, 0]);
					let beatsOfThisNotes = (ticksOfThisNote + 0) / importTicksPerBeat;
					// if (beatsOfThisNotes ==0){
						// loadingChord.push((lastNote-1)%12+1);
						// specificLoadingChord.push(lastNote);
					// }
					if (Math.round(beatsOfThisNotes*4) == 0){
						loadingChord.push((lastNote-1)%12+1);
						
						if(!(specificLoadingChord.includes(lastNote)))
						specificLoadingChord.push(lastNote);
					}	
					else{
					
						loadingChord.push((lastNote-1)%12+1);
						if(!(specificLoadingChord.includes(lastNote)))
						specificLoadingChord.push(lastNote);
					correctComplexChordQueue.push([JSON.parse(JSON.stringify(loadingChord)), beatsOfThisNotes*4]);
					specificComplexChordQueue.push([JSON.parse(JSON.stringify(specificLoadingChord)), beatsOfThisNotes*4]);
					loadingChord=[];
					specificLoadingChord=[];
					}

                } else {
					
					//THIS IS WHAT I AM NOT SURE ABOUT
                    singingTimeArray.push([12, (60 * (ticksOfThisNote + 0) / importTicksPerBeat) / currentBPM, 0]);
					//correctComplexChordQueue.push([0, 4*(ticksOfThisNote + 0) / importTicksPerBeat]);
                }
                currentNote = obj.track[noteContainingTrack].event[i].data[0];
                ticksOfThisNote = 0;
            }

        }
        lastNote = currentNote + 0;
        // alert (lastNote);

        if (lastNote != 0) {
			let beatsOfThisNotes = (ticksOfThisNote + 0) / importTicksPerBeat;
					
 						loadingChord.push((lastNote-1)%12+1);
						if(!(specificLoadingChord.includes(lastNote)))
						specificLoadingChord.push(lastNote);
					correctComplexChordQueue.push([JSON.parse(JSON.stringify(loadingChord)), beatsOfThisNotes*4]);
					specificComplexChordQueue.push([JSON.parse(JSON.stringify(specificLoadingChord)), beatsOfThisNotes*4]);
					loadingChord=[];
					specificLoadingChord=[];
        }

    } else if (midiFormatType == 0) {
        alert("sorry, this midi type is not supported at this time");
    }

    console.log(singingTimeArray.toString());
    try {
        synth.triggerRelease();
        stopAllNotes();
    } catch (error) {}
    // alert(rhythmSequenceArray.toString());
    sequenceArray = [];
    sequenceCopy = [];
    arpeggioArray = [];
    chordSequenceArray = [];
    chordSequenceCopy = [];
    buttonsCaptured = false;
    captureButtons = true;
    buttonStartEndTimes = [];
    buttonPlay = true;
    // buttonStartEndTimes.push([0, new Date(new Date().getTime())]);
    // if (buttonStartEndTimes.length > 1) {
    // // alert("long");
    // singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000, 0]);
    // buttonStartEndTimes.shift();
    // // console.log(singingTimeArray.toString());
    // }
    captureButtons = false;
    buttonsCaptured = true;
    singingCaptured = true;
    sequencePlay = true;
    nonReferencePlay = true;
    newQuestionTime = true;
		beginning=true;
	leadInCounter=leadNum;
	arraySpot=0;
    arrayOfSungNotesOnly = [];
	allRightAnswer();
	
	//newChord();
    for (i = 0; i < singingTimeArray.length; i++) {
       arrayOfSungNotesOnly.push((singingTimeArray[i][0])%12);
    }
    //console.log(singingTimeArray.toString());
    //findKey(arrayOfSungNotesOnly);

    // console.log(obj.track[2].event[i].data);
	for (var i = 0; i<specificComplexChordQueue.length; i++){ 
	//console.log(correctComplexChordQueue[i][0]+" "+correctComplexChordQueue[i][1]);
	
	console.log(specificComplexChordQueue[i][0]+" "+specificComplexChordQueue[i][1]);
	}
	// if leadNum>specificComplexChordQueue.length
	//console.log(correctComplexChordQueue);
	
	            clearInterval(intervalSetting);
            intervalSetting = setInterval(repeatEverySixteenth, 60000 / (4 * currentBPM));
	
});





















$(".lock-input").slideToggle();
// // Create a VexFlow renderer attaced to the DIV element "boo"
// var vf = new VF.Factory({renderer: {elementId: 'staff-box'}});
// var score = vf.EasyScore();
// var system = vf.System();

// // Create a 4/4 treble stave, and add two parallel voices
// system.addStave({
// voices: [
// // Top voice has 4 quarter notes with stems up
// score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up', strokeStyle: 'green'})),

// // Bottom voice has two half notes, with the stem down
// score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
// ]
// }).addClef('treble').addTimeSignature('4/4');

// // Draw it!
// vf.draw();


// // var vf = new VF.Factory({renderer: {elementId: 'staff-box'}});
// var score = vf.EasyScore();
// var system = vf.System();

// // Create a 4/4 treble stave, and add two parallel voices
// system.addStave({
// voices: [
// // Top voice has 4 quarter notes with stems up
// score.voice(score.notes('C#5/q, E4, A4, G#4', {stem: 'up'}).setStemStyle({strokeStyle: 'green'})),

// // Bottom voice has two half notes, with the stem down
// score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
// ]
// }).addClef('treble').addTimeSignature('4/4');
// system.stave
// // Draw it!
// vf.draw();


VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("staff-box")
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(800, 200);
var context = renderer.getContext();

// A tickContext is required to draw anything that would be placed
// in relation to time/rhythm, including StaveNote which we use here.
// In real music, this allows VexFlow to align notes from multiple
// voices with different rhythms horizontally. Here, it doesn't do much
// for us, since we'll be animating the horizontal placement of notes,
// but we still need to add our notes to a tickContext so that they get
// an x value and can be rendered.
//
// If we create a voice, it will automatically apply a tickContext to our
// notes, and space them relative to each other based on their duration &
// the space available. We definitely do not want that here! So, instead
// of creating a voice, we handle that part of the drawing manually.
var tickContext = new VF.TickContext();

// Create a stave of width 10000 at position 10, 40 on the canvas.
var staveOne = new VF.Stave(10, 0, 10000);
var staveTwo = new VF.Stave(10, 75, 10000);
var staveTreble = staveOne.addClef('treble');
var staveBass = staveTwo.addClef('bass');
staveOne.addTimeSignature('4/4');
staveTwo.addTimeSignature('4/4');
staveTreble.setContext(context).draw();
staveBass.setContext(context).draw();

// A tickContext is required to draw anything that would be placed
// in relation to time/rhythm, including StaveNote which we use here.
// In real music, this allows VexFlow to align notes from multiple
// voices with different rhythms horizontally. Here, it doesn't do much
// for us, since we'll be animating the horizontal placement of notes,
// but we still need to add our notes to a tickContext so that they get
// an x value and can be rendered.
//
// If we create a voice, it will automatically apply a tickContext to our
// notes, and space them relative to each other based on their duration &
// the space available. We definitely do not want that here! So, instead
// of creating a voice, we handle that part of the drawing manually.
// Create a stave of width 10000 at position 10, 40 on the canvas.

var durations = ['8', '4', '2', '1.5', '1'];
// var durations = ['16', '8', '4', ', '1']


var noteWhole = [
    ['c', '#', '4'],
    ['e', 'b', '5'],
    ['g', '', '5'],
    ['d', 'b', '4'],
    ['b', 'bb', '3'],
    ['a', 'b', '4'],
    ['f', 'b', '5'],
].map(([letter, acc, octave]) => {
    const note = new VF.StaveNote({
            clef: 'bass',
            keys: [`${letter}${acc}/${octave}`],
            duration: durations[Math.floor(2)],
        })
        .setContext(context)
        .setStave(staveBass);

    // If a StaveNote has an accidental, we must render it manually.
    // This is so that you get full control over whether to render
    // an accidental depending on the musical context. Here, if we
    // have one, we want to render it. (Theoretically, we might
    // add logic to render a natural sign if we had the same letter
    // name previously with an accidental. Or, perhaps every twelfth
    // note or so we might render a natural sign randomly, just to be
    // sure our user who's learning to read accidentals learns
    // what the natural symbol means.)
    if (acc)
        note.addAccidental(0, new VF.Accidental(acc));
    tickContext.addTickable(note)
    return note;
});
var note2 = [
    ['c', '#', '4'],
    ['e', 'b', '5'],
    ['g', '', '5'],
    ['d', 'b', '4'],
    ['b', 'bb', '3'],
    ['a', 'b', '4'],
    ['f', 'b', '5'],
].map(([letter, acc, octave]) => {
    const note = new VF.StaveNote({
            clef: 'bass',
            keys: [`${letter}${acc}/${octave}`],
            duration: durations[Math.floor(2)],
        })
        .setContext(context)
        .setStave(staveBass);

    // If a StaveNote has an accidental, we must render it manually.
    // This is so that you get full control over whether to render
    // an accidental depending on the musical context. Here, if we
    // have one, we want to render it. (Theoretically, we might
    // add logic to render a natural sign if we had the same letter
    // name previously with an accidental. Or, perhaps every twelfth
    // note or so we might render a natural sign randomly, just to be
    // sure our user who's learning to read accidentals learns
    // what the natural symbol means.)
    if (acc)
        note.addAccidental(0, new VF.Accidental(acc));
    tickContext.addTickable(note)
    return note;
});
var notes = [
    ['c', '#', '4'],
    ['e', 'b', '5'],
    ['g', '', '5'],
    ['d', 'b', '4'],
    ['b', 'bb', '3'],
    ['a', 'b', '4'],
    ['f', 'b', '5'],
].map(([letter, acc, octave]) => {
    const note = new VF.StaveNote({
            clef: 'bass',
            keys: [`${letter}${acc}/${octave}`],
            duration: durations[Math.floor(2)],
        })
        .setContext(context)
        .setStave(staveBass);

    // If a StaveNote has an accidental, we must render it manually.
    // This is so that you get full control over whether to render
    // an accidental depending on the musical context. Here, if we
    // have one, we want to render it. (Theoretically, we might
    // add logic to render a natural sign if we had the same letter
    // name previously with an accidental. Or, perhaps every twelfth
    // note or so we might render a natural sign randomly, just to be
    // sure our user who's learning to read accidentals learns
    // what the natural symbol means.)
    if (acc)
        note.addAccidental(0, new VF.Accidental(acc));
    tickContext.addTickable(note)
    return note;
});
notes[0].setKeyStyle(0, {
    fillStyle: 'chartreuse'
});
// The tickContext.preFormat() call assigns x-values (and other
// formatting values) to notes. It must be called after we've
// created the notes and added them to the tickContext. Or, it
// can be called each time a note is added, if the number of
// notes needed is not known at the time of bootstrapping.
//
// To see what happens if you put it in the wrong place, try moving
// this line up to where the TickContext is initialized, and check
// out the error message you get.
//
// tickContext.setX() establishes the left-most x position for all
// of the 'tickables' (notes, etc...) in a context.
tickContext.preFormat().setX(400);

// This will contain any notes that are currently visible on the staff,
// before they've either been answered correctly, or plumetted off
// the staff when a user fails to answer them correctly in time.
// TODO: Add sound effects.
const visibleNoteGroups = [];
const visibleReferenceNoteGroups = [];
const visibleSingingNoteGroups = [];
const visibleTargetNoteGroups = [];

// Add a note to the staff from the notes array (if there are any left).
// document.getElementById('add-note').addEventListener('click', (e) => {
// showANote();
// showANote();
// showANote();
// // if (!firstNoteShown) {

// // makeAndShowANote(37, 2, "referenceNote");
// // makeAndShowANote(50, 2, "referenceNote");
// // makeAndShowANote(40, 2, "singingNote");
// // makeAndShowANote(41, 2, "targetNote");
// // // makeAndShowANote(47,2, "singingNote");
// // firstNoteShown = true;
// // } else {
// // makeAndShowANote(37, 2, "referenceNote");
// // makeAndShowANote(50, 2, "referenceNote");
// // makeAndShowANote(45, 2, "targetNote");
// // makeAndShowANote(47, 2, "singingNote");
// // }
// // note = notes.shift();
// // if(!note) return;
// // const group = context.openGroup();
// // visibleNoteGroups.push(group);
// // note.draw();
// // context.closeGroup();
// // group.classList.add('scroll');
// // // Force a dom-refresh by asking for the group's bounding box. Why? Most
// // // modern browsers are smart enough to realize that adding .scroll class
// // // hasn't changed anything about the rendering, so they wait to apply it
// // // at the next dom refresh, when they can apply any other changes at the
// // // same time for optimization. However, if we allow that to happen,
// // // then sometimes the note will immediately jump to its fully transformed
// // // position -- because the transform will be applied before the class with
// // // its transition rule.
// // const box = group.getBoundingClientRect();
// // group.classList.add('scrolling');

// // // If a user doesn't answer in time make the note fall below the staff
// // window.setTimeout(() => {
// // const index = visibleNoteGroups.indexOf(group);
// // if(index === -1) return;
// // group.classList.add('too-slow');
// // visibleNoteGroups.shift();
// // }, 5000);
// });

// // If a user plays/identifies the note in time, send it up to note heaven.
// document.getElementById('right-answer').addEventListener('click', (e) => {
// rightAnswer();
// })

function durationNoteSelectTwentyFour(localBeatCount) {
    let outOfTwentyFour = Math.round(localBeatCount * 6);
    return outOfTwentyFour;
}

function durationNoteSelectEight(localBeatCount) {
    let outOfEight = Math.round(localBeatCount * 2);
    return outOfEight;
}

function durationNoteSelect(localBeatCount) {

    let beatCount = 1;

    switch (smallestNoteDenominator) {
    case 8:

        beatCount = durationNoteSelectEight(localBeatCount/4);
		console.log(beatCount);
        wholesToTieAtTheBeginning = Math.floor(beatCount / 8);
		
		console.warn("it is " + beatCount);
        beatCount = beatCount % 8;
		
		console.warn("it is " + beatCount);
		beatCount = Math.round(beatCount);
		console.warn("it is " + beatCount);
        //the code below is for 1/8 where each case is the numerator
        switch (beatCount) {
			case 0:
            return 4;
            break;
        case 1:
            return 0;
            break;
        case 2:
            return 1;
            break;
        case 3:
            dotTheNote = true;
            return 1;
            break;
        case 4:
            return 2;
            break;
        case 5:
            tieOn = true;
            tieAmountOne = 2;
            tieAmountTwo = 0;
            return 2;
            break;
        case 6:
            dotTheNote = true;
            return 2;
            break;
        case 7:
            tieOn = true;
            dotTheSecondNote = true;
            tieAmountOne = 2;
            tieAmountTwo = 1;
            return 2;
            break;
        case 8:
            return 4;
            break;

        }

        break;
    }

}

function drawKeySignature(keyName) {
    context.clear();
    staveOne = new VF.Stave(10, 0, 10000);
    staveTwo = new VF.Stave(10, 75, 10000);
    staveTreble = staveOne.addClef('treble');
    staveBass = staveTwo.addClef('bass');
    staveOne.addTimeSignature('4/4');
    staveTwo.addTimeSignature('4/4');
    staveOne.addKeySignature(keyName);
    staveTwo.addKeySignature(keyName);
    staveTreble.setContext(context).draw();
    staveBass.setContext(context).draw();
}

function showANote() {
    var lastImageNote = currentImageNote;
    var currentImageNote = notes.shift();
    if (!currentImageNote)
        return;
    const group = context.openGroup();
    visibleNoteGroups.push(group);
    currentImageNote.draw();
    context.closeGroup();
    group.classList.add('scroll');
    // Force a dom-refresh by asking for the group's bounding box. Why? Most
    // modern browsers are smart enough to realize that adding .scroll class
    // hasn't changed anything about the rendering, so they wait to apply it
    // at the next dom refresh, when they can apply any other changes at the
    // same time for optimization. However, if we allow that to happen,
    // then sometimes the note will immediately jump to its fully transformed
    // position -- because the transform will be applied before the class with
    // its transition rule.
    const box = group.getBoundingClientRect();
    group.classList.add('scrolling');

    // If a user doesn't answer in time make the note fall below the staff
    window.setTimeout(() => {
        const index = visibleNoteGroups.indexOf(group);
        if (index === -1)
            return;
        group.classList.add('too-slow');
        visibleNoteGroups.shift();
    }, (60000*16000) / (currentBPM));
}

$('#sheetButton').click(function () {
    if (presentationType == "sheet") {

        $(".chickens").slideToggle();

        $(".lock-input").slideToggle();
        presentationType = "words";
        document.getElementById("sheetButton").innerHTML = "Change to Sheet Music";

        document.getElementById("sheetButton").style.left = '40vw';
    } else {
        $(".chickens").slideToggle();

        $(".lock-input").slideToggle();
        presentationType = "sheet";

        document.getElementById("sheetButton").innerHTML = "Change To Words";
        document.getElementById("sheetButton").style.left = '50vw';
    }
    if (score > 4) {
        score = score - 3;
        document.getElementById("sp").innerHTML = " ";
    }
	console.warn("restchordfromsheetbutton");
    resetChord();

});

$('#octaveUp').click(function () {
    if (octaveSetting <= 62) {
        octaveSetting = octaveSetting + 12;
        document.getElementById("octaveNumBox").innerHTML = "Octave " + (Math.floor(octaveSetting / 12) + 1);
    }
});
$('#octaveDown').click(function () {
    if (octaveSetting >= 12) {
        octaveSetting = octaveSetting - 12;
        document.getElementById("octaveNumBox").innerHTML = "Octave " + (Math.floor(octaveSetting / 12) + 1);
    }
});

function findMiddleNote(arrayOfNotes) {
console.log(arrayOfNotes);
    let arrayOfNotesLocal = JSON.parse(JSON.stringify(arrayOfNotes));
    // arrayOfNotesLocal.sort();
    let octaveAdder = octaveSetting;

   
    for (var i = 0; i < arrayOfNotesLocal.length; i++) {


        if (i > 0) {

            if (Number(arrayOfNotes[i]) < Number(arrayOfNotes[i - 1])) {

                octaveAdder = octaveAdder + 12;
            }

        }

        // noteStr = noteArray[arrayOfNotes[0]+24][1];
        // partOne = noteStr.slice(0, 1) + '';
        // partTwo = noteStr.slice(+2) + '';
        // partThree = noteStr.slice(1, 2) + '';
        // const note = new VF.StaveNote({
        // clef: 'bass',
        // keys: [partOne, partTwo, partThree],
        // duration: '1',
        // }).setContext(context).setStave(staveBass);
        // if (partTwo)
        // note.addAccidental(0, new VF.Accidental(partTwo));

        if ((pickedInversion != 0)) {
            // alert(pickedInversion);
            if (pickedInversion <= i) {
                // alert("yo" + pickedInversion);
                arrayOfNotesLocal[i] = arrayOfNotesLocal[i] + octaveAdder - 12;
            } else {
                arrayOfNotesLocal[i] = arrayOfNotesLocal[i] + octaveAdder;
            }
        } else {
            arrayOfNotesLocal[i] = arrayOfNotesLocal[i] + octaveAdder;
        }
    }

    // console.error('ordering '+arrayOfNotesLocal.toString());
	try{
	arrayOfNotesLocal.sort();
	}
	catch(error){}
	
    specificCorrectChord = JSON.parse(JSON.stringify(arrayOfNotesLocal));
    for (let jkj = 0; jkj < specificCorrectChord.length; jkj++) {
        specificCorrectChord[jkj] = Number(specificCorrectChord[jkj]) + 24;
    }
    if (arrayOfNotesLocal.lengtth > 2) {
        middleNote = arrayOfNotesLocal[1];
    } else {
        middleNote = arrayOfNotesLocal[0];
    }

    if (Math.abs(middleNote - 36) < 4) {

        middleNote = 37 - (Math.random() * 2);
    }
    middleNoteSet = true;

}


function showNotes(arrayOfNotes) {
	// console.error(arrayOfNotes.toString());
	if (!middleNoteSet){
		console.log("done");
	findMiddleNote(arrayOfNotes);
	}
	let arrayOfNotesLocal=JSON.parse(JSON.stringify(arrayOfNotes));
	
	// console.log(arrayOfNotesLocal);
    // let noteStr = noteArray[arrayOfNotes[0]+24][1];
    // let partOne = noteStr.slice(0, 1) + '';
    // let partTwo = noteStr.slice(+2) + '';
    // let partThree = noteStr.slice(1, 2) + '';
    // // alert (partOne+" "+partTwo+" "+partThree+" ");
    // noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
    // alert(arrayOfNotes.length);
	// pickedInversion=0;
    let octaveAdder = octaveSetting;
    // if (pickedInversion != 0) {
		// console.log(pickedInversion);
        // octaveAdder = octaveSetting + 12; ;
    // }
    for (var i = 0; i < arrayOfNotes.length; i++) {

        if (i > 0) {
            if (arrayOfNotes[i] < arrayOfNotes[i - 1]) {
                octaveAdder = octaveAdder + 12;
            }

        }
		
        // noteStr = noteArray[arrayOfNotes[0]+24][1];
        // partOne = noteStr.slice(0, 1) + '';
        // partTwo = noteStr.slice(+2) + '';
        // partThree = noteStr.slice(1, 2) + '';
        // const note = new VF.StaveNote({
        // clef: 'bass',
        // keys: [partOne, partTwo, partThree],
        // duration: '1',
        // }).setContext(context).setStave(staveBass);
        // if (partTwo)
        // note.addAccidental(0, new VF.Accidental(partTwo));
        if ((pickedInversion != 0)) {
            // alert(pickedInversion);
            if (pickedInversion <= i) {
                // alert("yo" + pickedInversion);
                makeAndShowANote((arrayOfNotes[i] + octaveAdder - 12) + '', '2', "referenceNote");
            } else {
                makeAndShowANote(arrayOfNotes[i] + octaveAdder, '2', "referenceNote");
            }
        } else {
            makeAndShowANote(arrayOfNotes[i] + octaveAdder, '2', "referenceNote");
        }
    }

    // var notes = [
    // ['c', '#', '4'],
    // ['e', 'b', '5'],
    // ['g', '', '5'],
    // ['d', 'b', '4'],
    // ['b', 'bb', '3'],
    // ['a', 'b', '4'],
    // ['f', 'b', '5'],
    // ].map(([letter, acc, octave]) => {
    // const note = new VF.StaveNote({
    // clef: 'bass',
    // keys: [`${letter}${acc}/${octave}`],
    // duration: durations[Math.floor(2)],
    // })
    // .setContext(context)
    // .setStave(staveBass);

    // // If a StaveNote has an accidental, we must render it manually.
    // // This is so that you get full control over whether to render
    // // an accidental depending on the musical context. Here, if we
    // // have one, we want to render it. (Theoretically, we might
    // // add logic to render a natural sign if we had the same letter
    // // name previously with an accidental. Or, perhaps every twelfth
    // // note or so we might render a natural sign randomly, just to be
    // // sure our user who's learning to read accidentals learns
    // // what the natural symbol means.)
    // if (acc)
    // note.addAccidental(0, new VF.Accidental(acc));
    // tickContext.addTickable(note)
    // return note;
    // });
    // notes[0].setKeyStyle(0, {
    // fillStyle: 'chartreuse'
    // });
    // var lastImageNote = currentImageNote;
    // var currentImageNote = notes.shift();
    // if (!currentImageNote)
    // return;
    // const group = context.openGroup();
    // visibleNoteGroups.push(group);
    // currentImageNote.draw();
    // context.closeGroup();
    // group.classList.add('scroll');
    // // Force a dom-refresh by asking for the group's bounding box. Why? Most
    // // modern browsers are smart enough to realize that adding .scroll class
    // // hasn't changed anything about the rendering, so they wait to apply it
    // // at the next dom refresh, when they can apply any other changes at the
    // // same time for optimization. However, if we allow that to happen,
    // // then sometimes the note will immediately jump to its fully transformed
    // // position -- because the transform will be applied before the class with
    // // its transition rule.
    // const box = group.getBoundingClientRect();
    // group.classList.add('scrolling');

    // // If a user doesn't answer in time make the note fall below the staff
    // window.setTimeout(() => {
    // const index = visibleNoteGroups.indexOf(group);
    // if (index === -1)
    // return;
    // group.classList.add('too-slow');
    // visibleNoteGroups.shift();
    // }, 5000);


}

function makeAndShowANote(noteArrayNum, theNoteLength, voiceType) {
	// console.log(theNoteLength);
	middleNote=noteArrayNum;
	// console.log(middleNote);
    // console.log("The Note Message has " + noteArrayNum + " " + voiceType + " " + theNoteLength);
    if (notationMode == "movingNotesMode") {
        // if (Math.round(theNoteLength) == 3) {
        // dotTheNote = true;
        // theNoteLength = 2;
        // } else {
        // theNoteLength = Math.round(theNoteLength);
        // }
        // if (theNoteLength > 4) {
        // theNoteLength = 4;
        // }
        console.log("say who "+theNoteLength);
        theNoteLength = durationNoteSelect(theNoteLength);
        console.log("say what "+theNoteLength);
        var lastImageNote = currentImageNote;
        var currentImageNote = notes[0];
        var currentSecondImageNote = note2[0];
        var currentWholeImageNote = noteWhole[0];

        let noteStr = noteArray[noteArrayNum][1];
		// console.warn(noteStr+" "+currentChordName);
		if (false){
		if (currentChordName.includes('Gb')){
		
		currentChordName = currentChordName.replace("Gb", "F#");
		} 
		else if ((currentChordName.includes('D#'))&&(!(currentChordName.includes('m')))){
		
			noteStr = noteArray[noteArrayNum][2];
		} 
		else if ((currentChordName.includes('G#'))&&(!(currentChordName.includes('m')))){
		
			noteStr = noteArray[noteArrayNum][2];
		} 
		else if ((currentChordName.includes('C#'))&&(!(currentChordName.includes('m')))){
		
			noteStr = noteArray[noteArrayNum][2];
		} 
		else if (currentChordName.includes('Dbm')){}
        else if ((currentChordName.includes('b'))||((currentChordName.includes('Gm'))&&(!(currentChordName.includes('aj'))))||((currentChordName.includes('Cm'))&&(!(currentChordName.includes('aj'))))||((currentChordName.includes('Dm'))&&(!(currentChordName.includes('aj'))))||((currentChordName.includes('F'))&&(!(currentChordName.includes('#'))))) {
            // console.warn(noteStr+' wewentwithsecond');
			noteStr = noteArray[noteArrayNum][2];
        } else if ((noteStr.includes('F'))&&(!(noteStr.includes('#')))){
			if ((currentChordName.includes('C#'))||(currentChordName.includes('F#'))||(currentChordName.includes('G#'))||(currentChordName.includes('D#'))||(currentChordName.includes('A#'))){
			if (currentChordName.includes('maj')){
				noteStr= noteStr.replace('F', 'E');
				noteStr= noteStr+'#';
			}
			
			}
		}
		}
        // noteStr='E5';
        // alert (noteStr);
        let partOne = noteStr.slice(0, 1) + '';
        let partTwo = noteStr.slice(+2) + '';
        let partThree = noteStr.slice(1, 2) + '';
        // alert (partOne+" "+partTwo+" "+partThree+" ");
        noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
		// console.warn(noteStr);
        //Start AREA OF TIES!


        if (wholesToTieAtTheBeginning > 0) {
			
            if (middleNote >= 36) {
                noteWhole = [
                    [partOne, partTwo, partThree]
                ].map(([letter, acc, octave]) => {

                    const note = new VF.StaveNote({
                            clef: 'treble',
                            keys: [`${letter}${acc}/${octave}`],
                            duration: durations[4],
                        })
                        .setContext(context)
                        .setStave(staveTreble);
                    if (acc)
                        note.addAccidental(0, new VF.Accidental(acc));
                    // tickContext.addTickable(note)
                    return note;
                });
            } else {
                noteWhole = [
                    [partOne, partTwo, partThree]
                ].map(([letter, acc, octave]) => {

                    const note = new VF.StaveNote({
                            clef: 'bass',
                            keys: [`${letter}${acc}/${octave}`],
                            duration: durations[4],
                        })
                        .setContext(context)
                        .setStave(staveBass);
                    if (acc)
                        note.addAccidental(0, new VF.Accidental(acc));
                    // tickContext.addTickable(note)
                    return note;
                });
            }
        }
        if (tieOn) {
            console.log("tie on");
            if (middleNote >= 36) {
                notes = [
                    [partOne, partTwo, partThree, tieAmountOne]
                ].map(([letter, acc, octave, tieAmount]) => {

                    const note = new VF.StaveNote({
                            clef: 'treble',
                            keys: [`${letter}${acc}/${octave}`],
                            duration: durations[tieAmount],
                        })
                        .setContext(context)
                        .setStave(staveTreble);

                    // If a StaveNote has an accidental, we must render it manually.
                    // This is so that you get full control over whether to render
                    // an accidental depending on the musical context. Here, if we
                    // have one, we want to render it. (Theoretically, we might
                    // add logic to render a natural sign if we had the same letter
                    // name previously with an accidental. Or, perhaps every twelfth
                    // note or so we might render a natural sign randomly, just to be
                    // sure our user who's learning to read accidentals learns
                    // what the natural symbol means.)
                    if (dotTheNote) {
                        note.addDot(0);
                        dotTheNote = false;
                    }
                    if (acc)
                        note.addAccidental(0, new VF.Accidental(acc));
                    // tickContext.addTickable(note)

                    return note;
                });
                note2 = [
                    [partOne, partTwo, partThree, tieAmountTwo]
                ].map(([letter, acc, octave, tieAmount]) => {

                    const note = new VF.StaveNote({
                            clef: 'treble',
                            keys: [`${letter}${acc}/${octave}`],
                            duration: durations[tieAmount],
                        })
                        .setContext(context)
                        .setStave(staveTreble);

                    // If a StaveNote has an accidental, we must render it manually.
                    // This is so that you get full control over whether to render
                    // an accidental depending on the musical context. Here, if we
                    // have one, we want to render it. (Theoretically, we might
                    // add logic to render a natural sign if we had the same letter
                    // name previously with an accidental. Or, perhaps every twelfth
                    // note or so we might render a natural sign randomly, just to be
                    // sure our user who's learning to read accidentals learns
                    // what the natural symbol means.)
                    if (dotTheSecondNote) {
                        note.addDot(0);
                        dotTheNote = false;
                    }
                    if (acc)
                        note.addAccidental(0, new VF.Accidental(acc));
                    // tickContext.addTickable(note)
                    return note;
                });

            } else {
                notes = [
                    [partOne, partTwo, partThree, tieAmountOne]
                ].map(([letter, acc, octave, tieAmount]) => {

                    const note = new VF.StaveNote({
                            clef: 'bass',
                            keys: [`${letter}${acc}/${octave}`],
                            duration: durations[tieAmount],
                        })
                        .setContext(context)
                        .setStave(staveBass);

                    // If a StaveNote has an accidental, we must render it manually.
                    // This is so that you get full control over whether to render
                    // an accidental depending on the musical context. Here, if we
                    // have one, we want to render it. (Theoretically, we might
                    // add logic to render a natural sign if we had the same letter
                    // name previously with an accidental. Or, perhaps every twelfth
                    // note or so we might render a natural sign randomly, just to be
                    // sure our user who's learning to read accidentals learns
                    // what the natural symbol means.)
                    if (dotTheNote) {
                        note.addDot(0);
                        dotTheNote = false;
                    }
                    if (acc)
                        note.addAccidental(0, new VF.Accidental(acc));
                    // tickContext.addTickable(note)
                    return note;
                });

                note2 = [
                    [partOne, partTwo, partThree, tieAmountTwo]
                ].map(([letter, acc, octave, tieAmount]) => {

                    const note = new VF.StaveNote({
                            clef: 'bass',
                            keys: [`${letter}${acc}/${octave}`],
                            duration: durations[tieAmount],
                        })
                        .setContext(context)
                        .setStave(staveBass);

                    // If a StaveNote has an accidental, we must render it manually.
                    // This is so that you get full control over whether to render
                    // an accidental depending on the musical context. Here, if we
                    // have one, we want to render it. (Theoretically, we might
                    // add logic to render a natural sign if we had the same letter
                    // name previously with an accidental. Or, perhaps every twelfth
                    // note or so we might render a natural sign randomly, just to be
                    // sure our user who's learning to read accidentals learns
                    // what the natural symbol means.)
                    if (dotTheSecondNote) {
                        note.addDot(0);
                        dotTheNote = false;
                    }
                    if (acc)
                        note.addAccidental(0, new VF.Accidental(acc));
                    // tickContext.addTickable(note)
                    return note;
                });

                // tiedNote = new VF.StaveTie({
                // first_note: notes[0],
                // last_note: note2[0],
                // first_indices: [0],
                // last_indices: [0]
                // });
            }
            // tickContext.addTickable(tiedNote.setContext(context));
        } else {

            // console.log("tie off");
            //END AREA OF TIES!
				
			//console.log(theNoteLength);
            //Start AREA OF NO TIES!
            if (middleNote >= 36) {
                notes = [
                    [partOne, partTwo, partThree]
                ].map(([letter, acc, octave]) => {
                    const note = new VF.StaveNote({
                            clef: 'treble',
                            keys: [`${letter}${acc}/${octave}`],
                            duration: durations[theNoteLength],
                        })
                        .setContext(context)
                        .setStave(staveTreble);

                    // If a StaveNote has an accidental, we must render it manually.
                    // This is so that you get full control over whether to render
                    // an accidental depending on the musical context. Here, if we
                    // have one, we want to render it. (Theoretically, we might
                    // add logic to render a natural sign if we had the same letter
                    // name previously with an accidental. Or, perhaps every twelfth
                    // note or so we might render a natural sign randomly, just to be
                    // sure our user who's learning to read accidentals learns
                    // what the natural symbol means.)
                    if (dotTheNote) {
                        note.addDot(0);
                        dotTheNote = false;
                    }
                    if (acc)
                        note.addAccidental(0, new VF.Accidental(acc));
                    tickContext.addTickable(note)

                    return note;
                });

            } else {
                notes = [
                    [partOne, partTwo, partThree]
                ].map(([letter, acc, octave]) => {
                    const note = new VF.StaveNote({
                            clef: 'bass',
                            keys: [`${letter}${acc}/${octave}`],
                            duration: durations[theNoteLength],
                        })
                        .setContext(context)
                        .setStave(staveBass);

                    // If a StaveNote has an accidental, we must render it manually.
                    // This is so that you get full control over whether to render
                    // an accidental depending on the musical context. Here, if we
                    // have one, we want to render it. (Theoretically, we might
                    // add logic to render a natural sign if we had the same letter
                    // name previously with an accidental. Or, perhaps every twelfth
                    // note or so we might render a natural sign randomly, just to be
                    // sure our user who's learning to read accidentals learns
                    // what the natural symbol means.)
                    if (dotTheNote) {
                        note.addDot(0);
                        dotTheNote = false;
                    }
                    if (acc)
                        note.addAccidental(0, new VF.Accidental(acc));
                    tickContext.addTickable(note)

                    return note;
                });
            }

        }
        //END AREA OF NO TIES!

        if (voiceType == "referenceNote") {

            notes[0].setKeyStyle(0, {
                fillStyle: 'black'
            });
            if (notes.length > 1) {
                notes[1].setKeyStyle(0, {
                    fillStyle: 'black'
                });
            }
            tickContext.preFormat().setX(400);
        } else if (voiceType == "targetNote") {
            try {
                // if ((wrongNote) && (!(scoreTimeStart.getTime() > now.getTime()))) {
                // // alert("sup fool");
                // // scorePauseTime= previousScorePauseTime+(now.getTime() - scorePauseTime;
                // // scoreTimeStart.setTime(scoreTimeStart.getTime()+(now.getTime()-scoreTimeStart.getTime())/8);
                // // wrongTimer=new Date();
                // // wrongPoints=0;
                // // scoreTimeSatart=new Date();
                // // newScore=false;
                // }
                // console.log (rememberSingingGroup);
                visibleTargetNoteGroups[0].classList.add('newcorrect');
                visibleTargetNoteGroups.shift();
                // visibleTargetNoteGroups[rememberTargetGroup].classList.add('newcorrect');

            } catch (error) {}
            notes[0].setKeyStyle(0, {
                fillStyle: 'red'
            }); //chartreuse
            try {
                const transformMatrix = window.getComputedStyle(visibleReferenceNoteGroups[visibleReferenceNoteGroups.length - 1]).transform;
                // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
                // where, since we're only translating in x, the 4th property will be
                // the current x-translation. You can dive into the gory details of
                // CSS3 transform matrices (along with matrix multiplication) if you want
                // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
                const x = transformMatrix.split(',')[4].trim();
                tickContext.preFormat().setX(Math.floor(x) + 400);
            } catch (error) {
                // alert ("hi");
                console.error(error.toString());
                tickContext.preFormat().setX(400);
            } //.setX(visibleNoteGroups[0].getX());//.setX(tickContext.getTickables().getX());
            // alert (visibleNoteGroups.getX().toString());
            // alert notes[0].
        } else if (voiceType == "singingNote") {
            try {
                // if ((wrongNote) && (!(scoreTimeStart.getTime() > now.getTime()))) {
                // // alert("sup fool");
                // // scorePauseTime= previousScorePauseTime+(now.getTime() - scorePauseTime;
                // // scoreTimeStart.setTime(scoreTimeStart.getTime()+(now.getTime()-scoreTimeStart.getTime())/8);
                // // wrongTimer=new Date();
                // // wrongPoints=0;
                // // scoreTimeSatart=new Date();
                // // newScore=false;
                // }
                // console.log(rememberSingingGroup);
                // visibleSingingNoteGroups[rememberSingingGroup].classList.add('newcorrect');
                visibleSingingNoteGroups[0].classList.add('newcorrect');
                visibleSingingNoteGroups.shift();
            } catch (error) {}
            notes[0].setKeyStyle(0, {
                fillStyle: 'blue'
            });
            try {
                console.log(visibleReferenceNoteGroups.length + " is the length");
                const transformMatrix = window.getComputedStyle(visibleReferenceNoteGroups[visibleReferenceNoteGroups.length - 1]).transform;
                // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
                // where, since we're only translating in x, the 4th property will be
                // the current x-translation. You can dive into the gory details of
                // CSS3 transform matrices (along with matrix multiplication) if you want
                // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
                const x = transformMatrix.split(',')[4].trim();
                tickContext.preFormat().setX(Math.floor(x) + 400); //.setX(visibleNoteGroups[0].getX());//.setX(tickContext.getTickables().getX());
                // alert (visibleNoteGroups.getX().toString());
                // alert notes[0].
            } catch (error) {
                tickContext.preFormat().setX(400);
            }
        }
        currentImageNote = notes.shift();
        tickContext.addTickable(currentImageNote);
        if (note2.length == 1) {
            currentSecondImageNote = note2.shift();

            tickContext.addTickable(currentSecondImageNote);
        }
        if (noteWhole.length == 1) {
            currentWholeImageNote = noteWhole.shift();
            tickContext.addTickable(currentWholeImageNote);
        }
        if (!currentImageNote)
            return;
        const group = context.openGroup();

        // visibleNoteGroups.push(group);
        // alert(visibleNoteGroups[0].));
        // console.log(voiceType);
        if (voiceType == "singingNote") {
            visibleSingingNoteGroups.push(group);
            rememberSingingGroup = visibleSingingNoteGroups.indexOf(group);
        } else if (voiceType == "targetNote") {
            visibleTargetNoteGroups.push(group);
            rememberTargetGroup = visibleTargetNoteGroups.indexOf(group);
        } else if (voiceType == "referenceNote") {
            visibleReferenceNoteGroups.push(group);
            referenceGroups.push(visibleReferenceNoteGroups.indexOf(group));
            if (sequenceOn) {
                try {
                    // alert ("hi");
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 1].classList.add('currentnote');
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('currentnote');
                    // visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('scroll');
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('partscroll');
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('partscrolling');
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('scroll');
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('scrolling');

                } catch (error) {}
            }
            // console.error(referenceGroups.toString());
        }
		checkDistance();
		console.error(arraySpot+" "+Math.round(specificComplexChordQueue[(arraySpot+leadNum*specificComplexChordQueue.length-1)%specificComplexChordQueue.length][1]));
        let startingSetX = 700 - ((1+leadNum)*50) - wholesToTieAtTheBeginning * 25 + (leadNum-leadInCounter)*50;//+Math.round(specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-2)%specificComplexChordQueue.length][1])*3;
        if (tieOn) {
            startingSetX = startingSetX - 50;
        }
		
        for (i = 0; i < wholesToTieAtTheBeginning; i++) {
            tiedNote = new VF.StaveTie({
                    first_note: currentImageNote,
                    last_note: currentWholeImageNote,
                    first_indices: [0],
                    last_indices: [0]
                })
                tickContext.preFormat().setX(startingSetX);
            currentWholeImageNote.draw();
            tickContext.preFormat().setX(startingSetX + 12);
            tiedNote.setContext(context).draw();
            startingSetX = startingSetX + 25;
        }
	console.log(mostRecentDistanceSpot);
        tickContext.preFormat().setX(startingSetX+mostRecentDistanceSpot);
        currentImageNote.draw();
        if (tieOn) {
            tickContext.preFormat().setX(startingSetX + 25+mostRecentDistanceSpot);
            currentSecondImageNote.draw();
            tiedNote = new VF.StaveTie({
                    first_note: currentImageNote,
                    last_note: currentSecondImageNote,
                    first_indices: [0],
                    last_indices: [0]
                })

                tickContext.preFormat().setX(startingSetX + 12+mostRecentDistanceSpot);
            tiedNote.setContext(context).draw();
        }
		//checkDistance();
        // tiedNote.draw();
        context.closeGroup();

        // console.log(currentImageNote.toString());
        // console.log(group.toString());
        // group.setAttributeNS(null, "fill", "blue");

        group.classList.add('partscroll');

        // Force a dom-refresh by asking for the group's bounding box. Why? Most
        // modern browsers are smart enough to realize that adding .scroll class
        // hasn't changed anything about the rendering, so they wait to apply it
        // at the next dom refresh, when they can apply any other changes at the
        // same time for optimization. However, if we allow that to happen,
        // then sometimes the note will immediately jump to its fully transformed
        // position -- because the transform will be applied before the class with
        // its transition rule.
        const box = group.getBoundingClientRect();
        group.classList.add('partscrolling');
        wholesToTieAtTheBeginning = 0;
        tieOn = false;
        dotTheSecondNote = false;
        // If a user doesn't answer in time make the note fall below the staff
        window.setTimeout(() => {
            if (voiceType == "singingNote") {
                const index = visibleSingingNoteGroups.indexOf(group);
                if (index === -1)
                    return;
                group.classList.add('too-slow');
                visibleSingingNoteGroups.shift();

            } else if (voiceType == "targetNote") {
                const index = visibleTargetNoteGroups.indexOf(group);
                if (index === -1)
                    return;
                group.classList.add('too-slow');
                visibleTargetNoteGroups.shift();

            } else if (voiceType == "referenceNote") {
                const index = visibleReferenceNoteGroups.indexOf(group);
                if (index === -1)
                    return;
                group.classList.add('too-slow');
                //visibleReferenceNoteGroups.shift();
                // if (referenceGroups.includes(index + 0)) {
                // referenceGroups.splice(referenceGroups.indexOf(index + 0), 1);
                // makeAndShowANote(randomNoteNum, 2, "referenceNote");
                // }
                // referenceGroups = referenceGroups.map(function (value) {
                // return value - 1;
                // });
                // if (referenceGroups.includes(index + 0)) {
                // referenceGroups.splice(referenceGroups.indexOf(index + 0), 1);
                // makeAndShowANote(randomNoteNum, 2, "referenceNote");
                // }

            }
            // const index = visibleNoteGroups.indexOf(group);


        }, (60000*2048) / (currentBPM)); // TIMER SETTING FOR WHEN THE NOTE DROPS OFF, CURRENTLY THIS CONSTITUTES 8 S at 120 bpm, or 16 beats, which is 4 measures at 4/4! 
    }
}

function allRightAnswer() {
    try {
        for (var i = 0; i < visibleReferenceNoteGroups.length; i=0) {
            group = visibleReferenceNoteGroups.shift();
			group.classList.remove('prepping');
            group.classList.add('newcorrect');
            // The note will be somewhere in the middle of its move to the left -- by
            // getting its computed style we find its x-position, freeze it there, and
            // then send it straight up to note heaven with no horizontal motion.
            const transformMatrix = window.getComputedStyle(group).transform;
            // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
            // where, since we're only translating in x, the 4th property will be
            // the current x-translation. You can dive into the gory details of
            // CSS3 transform matrices (along with matrix multiplication) if you want
            // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
            const x = transformMatrix.split(',')[4].trim();
			// console.log("current location is "+x);
            // And, finally, we set the note's style.transform property to send it skyward.
            group.style.transform = `translate(${x-750}px, -0px)`;
        }
    } catch (error) {}
}

function rightAnswer() {
	console.error("yo that");
    try {
        for (var i = 0; i < (specificCorrectChord.length); i++) {
			console.log(specificCorrectChord);
            group = visibleReferenceNoteGroups.shift();
			group.classList.remove('prepping');
            group.classList.add('newcorrect');
            // The note will be somewhere in the middle of its move to the left -- by
            // getting its computed style we find its x-position, freeze it there, and
            // then send it straight up to note heaven with no horizontal motion.
            const transformMatrix = window.getComputedStyle(group).transform;
            // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
            // where, since we're only translating in x, the 4th property will be
            // the current x-translation. You can dive into the gory details of
            // CSS3 transform matrices (along with matrix multiplication) if you want
            // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
            const x = transformMatrix.split(',')[4].trim();
            // And, finally, we set the note's style.transform property to send it skyward.
            group.style.transform = `translate(${x-750}px, -0px)`;
        }
    } catch (error) {}
}
function prepAnswer() {
	console.log("LOOKKKKK!!! "+visibleReferenceNoteGroups.length +" "+specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-1)%specificComplexChordQueue.length][0].length);
    try {
        for (var i = 0; i < visibleReferenceNoteGroups.length-specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-1)%specificComplexChordQueue.length][0].length; i++) {
			
           group = visibleReferenceNoteGroups[i];
		   
			// console.log(group.classList[0]);
			
			// console.log(group.classList[1]);
            group.classList.add('prepping');
			for (var j = 0; j < group.classList.length; j++){
				
			console.log(group.classList[j]);
			}
			// console.log(group.classList.length);
			// console.log(group.classList[2]);
            // The note will be somewhere in the middle of its move to the left -- by
            // getting its computed style we find its x-position, freeze it there, and
            // then send it straight up to note heaven with no horizontal motion.
            //const transformMatrix = window.getComputedStyle(group).transform;
            // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
            // where, since we're only translating in x, the 4th property will be
            // the current x-translation. You can dive into the gory details of
            // CSS3 transform matrices (along with matrix multiplication) if you want
            // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/

            const transformMatrix = window.getComputedStyle(group).transform;
			const x = transformMatrix.split(',')[4].trim();
						console.log("current location is "+x);
            // And, finally, we set the note's style.transform property to send it skyward.
            //group.style.transform = `translate(${x}px, -800px)`;
			let timeMultiplier=0;//(Math.round(timerLength*60)-1-timeCheck);
			group.style.transform = `translate(${x-(100*currentBPM/120)}px, -0px)`;
			//group.setX(200);
        }
		//console.log(specificComplexChordQueue[(arraySpot+leadNum*specificComplexChordQueue.length-1-leadNum)%specificComplexChordQueue.length][0]);
		console.log("LOOKKKKK!!! "+visibleReferenceNoteGroups.length +" "+specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-1)%specificComplexChordQueue.length][0].length);
   
		 for (var i = visibleReferenceNoteGroups.length-specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-1)%specificComplexChordQueue.length][0].length; i < visibleReferenceNoteGroups.length; i++) {
           console.log(i);
		   group = visibleReferenceNoteGroups[i];

			// console.log(group.classList.length);
			// console.log(group.classList[2]);
            // The note will be somewhere in the middle of its move to the left -- by
            // getting its computed style we find its x-position, freeze it there, and
            // then send it straight up to note heaven with no horizontal motion.
            //const transformMatrix = window.getComputedStyle(group).transform;
            // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
            // where, since we're only translating in x, the 4th property will be
            // the current x-translation. You can dive into the gory details of
            // CSS3 transform matrices (along with matrix multiplication) if you want
            // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/

            const transformMatrix = window.getComputedStyle(group).transform;
			const x = transformMatrix.split(',')[4].trim();
						console.log("current location is "+x);
            // And, finally, we set the note's style.transform property to send it skyward.
            //group.style.transform = `translate(${x}px, -800px)`;
			let timeMultiplier=0;//(Math.round(timerLength*60)-1-timeCheck);
			group.style.transform = `translate(${x-(10*currentBPM/120)}px, -0px)`;
			//group.setX(200);
        }
		           // group = visibleReferenceNoteGroups[visibleReferenceNoteGroups.length-1];
		            // const transformMatrix = window.getComputedStyle(group).transform;
			// const x = transformMatrix.split(',')[4].trim();
						// console.log("current location is "+x);
            // // And, finally, we set the note's style.transform property to send it skyward.
            // //group.style.transform = `translate(${x}px, -800px)`;
			// let timeMultiplier=0;//(Math.round(timerLength*60)-1-timeCheck);
			// group.style.transform = `translate(${x-(50+75*timeMultiplier)}px, -0px)`;
    } catch (error) {
		console.error(error);
	}
}
function checkDistance() {
	console.log(visibleReferenceNoteGroups.length)
    try {
        for (var i = 0; i < visibleReferenceNoteGroups.length; i++) {
			
           group = visibleReferenceNoteGroups[i];
		   
			// console.log(group.classList[0]);
			
			// console.log(group.classList[1]);
            group.classList.add('prepping');
			console.log(group.classList[0]);
			console.log(group.classList[1]);
			// console.log(group.classList.length);
			// console.log(group.classList[2]);
            // The note will be somewhere in the middle of its move to the left -- by
            // getting its computed style we find its x-position, freeze it there, and
            // then send it straight up to note heaven with no horizontal motion.
            //const transformMatrix = window.getComputedStyle(group).transform;
            // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
            // where, since we're only translating in x, the 4th property will be
            // the current x-translation. You can dive into the gory details of
            // CSS3 transform matrices (along with matrix multiplication) if you want
            // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/

            const transformMatrix = window.getComputedStyle(group).transform;
			//
			const x = transformMatrix.split(',')[4].trim();
						console.log("current location is "+x);
						
            // And, finally, we set the note's style.transform property to send it skyward.
            //group.style.transform = `translate(${x}px, -800px)`;
			//group.style.transform = `translate(${x-1000}px, -0px)`;
        }


		               // const transformMatrix = window.getComputedStyle(group).transform;
			// const x = transformMatrix.split(',')[4].trim();
			// mostRecentDistanceSpot=x
			//group.style.transform = `translate(${x+1000}px, -0px)`;
    } catch (error) {}
	           group = visibleReferenceNoteGroups[0];
		   console.error(window.getComputedStyle(group).transition);
}
function readyAnswer() {
	// console.log(visibleReferenceNoteGroups.length)
    try {
		console.error(arraySpot);
		console.error(specificComplexChordQueue.length);
		console.error(specificComplexChordQueue[(arraySpot+leadNum*specificComplexChordQueue.length-leadNum-1)%specificComplexChordQueue.length][0])
        for (var i = 0; i < specificComplexChordQueue[(arraySpot+leadNum*specificComplexChordQueue.length-leadNum-1)%specificComplexChordQueue.length][0].length; i++) {
			
           group = visibleReferenceNoteGroups[i];
		   if (playerMode){
		   playTheNote(specificComplexChordQueue[(arraySpot+leadNum*specificComplexChordQueue.length-leadNum-1)%specificComplexChordQueue.length][0][i]);
		   }
			// console.log(group.classList[0]);
			
			// console.log(group.classList[1]);
            group.classList.remove('prepping');
			        // The note will be somewhere in the middle of its move to the left -- by
            // getting its computed style we find its x-position, freeze it there, and
            // then send it straight up to note heaven with no horizontal motion.
            //const transformMatrix = window.getComputedStyle(group).transform;
            // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
            // where, since we're only translating in x, the 4th property will be
            // the current x-translation. You can dive into the gory details of
            // CSS3 transform matrices (along with matrix multiplication) if you want
            // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
            //const x = transformMatrix.split(',')[4].trim();
            // And, finally, we set the note's style.transform property to send it skyward.
			
            const transformMatrix = window.getComputedStyle(group).transform;
			            const x = transformMatrix.split(',')[4].trim();
			group.style.transform = `translate(${x-150}px, -0px)`;
        }
		if (playerMode){
		fakeMatch();
		}
    } catch (error) {}
}
if (navigator.requestMIDIAccess) {
    //console.log('This browser supports WebMIDI!');

    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

} else {
    //console.log('WebMIDI is not supported in this browser.');
    document.querySelector('.step0').innerHTML = 'Error: This browser does not support WebMIDI.';
}

function onMIDISuccess(midiAccess) {
    document.querySelector('.step0').innerHTML = 'Click here to begin...';
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;

    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
    }
}
jQuery(function ($) {
    var checkList = $('.dropdown-check-list');
    checkList.on('click', 'span.anchor', function (event) {
        var element = $(this).parent();

        if (element.hasClass('visible')) {
            element.removeClass('visible');
        } else {
            element.addClass('visible');
        }
		console.warn("resetchordfromdropdownlist");
        resetChord();
    });
});

//$("#ez5").change(resetChord());

function playTheNote(note){
	var audio = document.getElementById(soundId(getNoteName(note)));
        //	alert (""+soundId(getNoteName(note)));
        // if audio(const playPromise = audio.play();
        // if (playPromise !== null) {
        // playPromise.catch(() => {
        // audio.pause();
        // audio.volume = 1.0;
        // if (audio.readyState >= 2) {
        // audio.currentTime = 0;
        // // audio.play();
        // }
        // })
        // }
        // if (audio) {

        // }

        //press();
        //playNote(midiNoteToFrequency(note));
        //press(note);

            if (audio) {
                audio.pause();
                audio.volume = 1.0;
                if (audio.readyState >= 2) {
                    audio.currentTime = 0;
                    var promise = audio.play();

                    if (promise !== undefined) {
                        promise.then(_ => {
                            // Autoplay started!
                        }).catch(error => {
                            //alert ("it worked");
                            // Autoplay was prevented.
                            // Show a "Play" button so that user can start playback.
                        });
                    }

                }
            }

}

function resetChord() {
	alert("reset");
	if (countChordTypesSelected()>0){
	console.warn("resetChord");
    //alert ("done");
    clearChord();
   newChord();
	}
}
function onMIDIFailure() {
    document.querySelector('.step0').innerHTML = 'Error: Could not access MIDI devices. Connect a device and refresh to try again.';
}

function getMIDIMessage(message) {
    var command = message.data[0];
    var note = message.data[1];
    var velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command

    switch (command) {
    case 144: // noteOn
        var audio = document.getElementById(soundId(getNoteName(note)));
        //	alert (""+soundId(getNoteName(note)));
        // if audio(const playPromise = audio.play();
        // if (playPromise !== null) {
        // playPromise.catch(() => {
        // audio.pause();
        // audio.volume = 1.0;
        // if (audio.readyState >= 2) {
        // audio.currentTime = 0;
        // // audio.play();
        // }
        // })
        // }
        // if (audio) {

        // }

        //press();
        //playNote(midiNoteToFrequency(note));
        //press(note);
        if (velocity > 0) {
            if (audio) {
                audio.pause();
                audio.volume = 1.0;
                if (audio.readyState >= 2) {
                    audio.currentTime = 0;
                    var promise = audio.play();

                    if (promise !== undefined) {
                        promise.then(_ => {
                            // Autoplay started!
                        }).catch(error => {
                            //alert ("it worked");
                            // Autoplay was prevented.
                            // Show a "Play" button so that user can start playback.
                        });
                    }

                }
            }
            noteOnListener(note, velocity); //
        } else {
            noteOffListener(note);
        }

        break;
    case 128: // noteOff
        noteOffListener(note);
        return function () {
            var audio = document.getElementById("sound-A3");
            if (playPromise !== null) {
                playPromise.catch(() => {
                    audio.pause();
                    audio.volume = 1.0;
                    if (audio.readyState >= 2) {
                        audio.currentTime = 0;
                        audio.pause();
                    }
                })
            }
        };
        //stopNote(midiNoteToFrequency(note));
        noteOffCallback(note);
        break;
        // we could easily expand this switch statement to cover other types of commands such as controllers or sysex
    }
}

function noteOnListener(note, velocity) {

    switch (currentStep) {
        // If the game hasn't started yet.
        // The first noteOn message we get will run the first sequence
    case 0:
        // Run our start up sequence
		
			console.warn('runsequence from noteonlistener');
        runSequence('gamestart');

        // Increment the currentStep so this is only triggered once
        currentStep++;
        currentStep++;

        break;

        // The first lock - playing a correct sequence
    case 1:
        // add the note to the array
        activeNoteSequence.push(arrangeNote(note));

        // show the requisite number of note placeholders
        for (var i = 0; i < activeNoteSequence.length; i++) {
            document.querySelector('.step1 .note:nth-child(' + (i + 1) + ')').classList.add('on');
        }

        // when the array is the same length as the correct sequence, compare the two
        if (activeNoteSequence.length == correctNoteSequence.length) {
            var match = true;
            for (var index = 0; index < activeNoteSequence.length; index++) {
                if (activeNoteSequence[index] != correctNoteSequence[index]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                // Run the next sequence and increment the current step
				
			console.warn('runsequence from match');
                runSequence('lock1');
                currentStep++;
            } else {
                // Clear the array and start over
                activeNoteSequence = [];

                var lockInput = document.querySelector('.step1 .lock-input');

                lockInput.classList.add('error');
                window.setTimeout(function () {
                    lockInput.classList.remove('error');
                    for (var note of lockInput.querySelectorAll('.note')) {
                        note.classList.remove('on');
                    }
                }, 500);

            }
        }
        break;

    case 2:
        // add the note to the active chord array
        //alert((arrangeNote(note)+"" +correctChord[0]));
		
        if (specificActiveChord.includes(note) == false) {
            specificActiveChord.push(note);
            specificActiveChord.sort();
			for (var i = 0; i<specificActiveChord.length; i++){
			console.warn(specificActiveChord[i]);
			}
			for (var i = 0; i<specificCorrectChord.length; i++){
			console.error(specificCorrectChord[i]);
			}
        }

        if (activeChord.includes(arrangeNote(note)) == false) { //4/9/2020 I think I may need to add a new activeChordlisting that includes the actual note and not just the arrangenote, so I can be certain the note order in addition here. Avi
            activeChord.push(arrangeNote(note));
            // console.log(arrangeNote(specificActiveChord[0]));
       } else if ((arrangeNote(note) == correctChord[0]) && (bassMatched > 0) && (bassMatched < 3)) {
            activeChord.push(bassMatched + 12);
            //alert (bassMatched+12); //spot1
            bassMatched++
        }
        //alert(activeChord.length);
        // show the number of active notes
        for (var i = 0; i < activeChord.length; i++) {

            document.querySelector('.step2 .note:nth-child(' + (i + 1) + ')').classList.add('on');
        }

			// console.error(specificActiveChord.toString());
        // If the array is the same length as the correct chord, compare
        if ((specificActiveChord.length == specificCorrectChord.length)) {
			console.log("yo "+activeChord+" "+correctChord);
            var match = true;
			document.getElementById("warning").innerHTML =""
            if (!specificNotes){
			for (var index = 0; index < activeChord.length; index++) {
                if (correctChord.indexOf(activeChord[index]) < 0) {
					document.getElementById("warning").innerHTML = document.getElementById("warning").innerHTML+"<style='fontSize:15px;'>-Incorrect Chord, see notes below.</style><br>"; //(arrangeNote(specificActiveChord[0]));
                    match = false;
                    break;
                }
            }
			if ((match)&&(inversions) & (arrangeNote(specificActiveChord[0]) != correctChord[pickedInversion])) {
                match = false;
                document.getElementById("warning").innerHTML = document.getElementById("warning").innerHTML+"<style='fontSize:15px;'>-Your root note should be " + getNoteNameGeneral(correctChord[pickedInversion])+"</style><br>"; //(arrangeNote(specificActiveChord[0]));
            }
			}
			if ((specificNotes)&&(match)){
				
					console.log(specificCorrectChord+" "+specificActiveChord);
			for (var index = 0; index < specificActiveChord.length; index++) {
                if (specificCorrectChord.indexOf(specificActiveChord[index]) < 0) {
					console.log ("it was "+specificCorrectChord.indexOf(specificActiveChord[index]));
					document.getElementById("warning").innerHTML = document.getElementById("warning").innerHTML+"<style='fontSize:15px;'>-You are playing in the wrong octave.</style>"; //(arrangeNote(specificActiveChord[0]));

                    match = false;
                    break;
                }
            }
			
			}
			// document.getElementById("warning").innerHTML =""

			
            document.getElementById("score").innerHTML = "Current Difficulty = " + score.toFixed(2);
            if ((match)&&(!newQuestionTime)) {
                rightAnswer();
				newChord();
				prepAnswer();
                document.getElementById("warning").innerHTML = "<style='fontSize:0px;'>"
                    score = score + .05;
                timerLength = (11.0 - score) / 60.0;
                document.getElementById("score").innerHTML = "Current Score = " + score.toFixed(2);
				specificActiveChord=[];
			console.warn('runsequence from match lock2');
                runSequence('lock2');
                document.getElementById("keyboardImg2").src = "Blank Keyboard.jpeg";
                //	currentStep--;
            } else if (!newQuestionTime) {
                score = score - .05;
                document.getElementById("score").innerHTML = "Current Score = " + score.toFixed(2);

                document.getElementById("keyboardImg2").src = currentImageName + ".jpeg";
                var lockInput = document.querySelector('.step2 .lock-input');

                lockInput.classList.add('error');
                window.setTimeout(function () {
                    lockInput.classList.remove('error');
                }, 500);
            }
        }
        break;
    }
}

function fakeMatch(){
                rightAnswer();
				newChord();
				prepAnswer();
                document.getElementById("warning").innerHTML = "<style='fontSize:0px;'>"
                //    score = score + .05;
                timerLength = (11.0 - score) / 60.0;
                document.getElementById("score").innerHTML = "Current Score = " + score.toFixed(2);
				specificActiveChord=[];
			console.warn('runsequence from match lock2');
                runSequence('lock2');
                document.getElementById("keyboardImg2").src = "Blank Keyboard.jpeg";
}

function clearSequence() {
    // Clear the array and start over
    activeNoteSequence = [];

    var lockInput = document.querySelector('.step1 .lock-input');

    //lockInput.classList.add('error');
    //window.setTimeout(function () {
    //lockInput.classList.remove('error');
    for (var note of lockInput.querySelectorAll('.note')) {
        note.classList.remove('on');
    }
    //}, 500);
    //startTimer();
	//clearInterval(intervalSetting);
	//intervalSetting = setInterval(repeatEverySixteenth, 60000 / (4 * currentBPM));

    document.querySelector('.hint').innerHTML = "You lose...";
}

function clearChord() {
    // Clear the array and start over
    var lockInput = document.querySelector('.step2 .lock-input');
   startTimer();
		//clearInterval(intervalSetting);
 //intervalSetting = setInterval(repeatEverySixteenth, 60000 / (4 * currentBPM));

    timerTripped = false;
    document.querySelector('.hint').innerHTML = "You lose...";
}

function arrangeNote(a) {
    var b = a;
    //        int timesThrough = 0;
    for (var i = a; i > 0; i = i - 12) {
        b = i;
        //            timesThrough++;
    }
    //9 if equation then a
    //10 if equation then a#
    //11 if equation then b
    //12 if equation then c
    //1 equation then c#
    //2 equation then d
    //3 equation then d#
    //4 equation then e
    //5 equation then f
    //6 equation then f#
    //7 equation then g
    //8 equation then g#
    return b;
};

function getNoteName(noteNum) {
    var b = noteNum;
    var octave = -2;
    //        int timesThrough = 0;
    for (var i = noteNum; i > 0; i = i - 12) {
        b = i;
        octave++;
        //            timesThrough++;
    }
    if (b == 12) {
        octave++;
    }
    //9 if equation then a
    //10 if equation then a#
    //11 if equation then b
    //12 if equation then c
    //1 equation then c#
    //2 equation then d
    //3 equation then d#
    //4 equation then e
    //5 equation then f
    //6 equation then f#
    //7 equation then g
    //8 equation then g#
    return getNoteNameGeneral(b) + "" + octave;
}

function getNoteNameGeneral(genNoteNum) {
    var genNoteName = "C";
    switch (genNoteNum) {
    case 1:
        genNoteName = "Db";
        break;
    case 2:
        genNoteName = "D";
        break;
    case 3:
        genNoteName = "Eb";
        break;
    case 4:
        genNoteName = "E";
        break;
    case 5:
        genNoteName = "F";
        break;
    case 6:
        genNoteName = "Gb";
        break;
    case 7:
        genNoteName = "G";
        break;
    case 8:
        genNoteName = "Ab";
        break;
    case 9:
        genNoteName = "A";
        break;
    case 10:
        genNoteName = "Bb";
        break;
    case 11:
        genNoteName = "B";
        break;
    case 12:
        genNoteName = "C";
        break;
    case 13:
        genNoteName = "Db";
        break;
    case 14:
        genNoteName = "D";
        break;
    case 15:
        genNoteName = "Eb";
        break;
    case 16:
        genNoteName = "E";
        break;
    case 17:
        genNoteName = "F";
        break;
    case 18:
        genNoteName = "Gb";
        break;
    case 19:
        genNoteName = "G";
        break;
    case 20:
        genNoteName = "Ab";
        break;
    case 21:
        genNoteName = "A";
        break;
    case 22:
        genNoteName = "Bb";
        break;
    case 23:
        genNoteName = "B";
        break;
    case 24:
        genNoteName = "C";
        break;
    }
    return genNoteName;
}

function noteOffListener(note) {
    //alert (note);
    switch (currentStep) {
    case 2:
        // Remove the note value from the active chord array
        //alert(activeChord.length);
        //alert (arrangeNote(note)==correctChord[0]);
        specificActiveChord.splice(specificActiveChord.indexOf(note), 1);
        activeChord.splice(activeChord.indexOf(note), 1);
        if (arrangeNote(note) == correctChord[0] && bassMatched > 1) { // what it does: if the note played is the same as the bass note, and it's still looking for more bass notes. does something with octaves, this might be a place for doing the bass note thing
            bassMatched--; //more notes from above Avi 4/9/2020, correctChord[1] is the /3, correctChord [2] is the /5, correctChord [3] in a 7th would be the /7.
        }
        //spot2
        // Hide the last note shown
        document.querySelector('.step2 .note:nth-child(' + (activeChord.length + 1) + ')').classList.remove('on');
        break;
    }
}

function runSequence(sequence) {
    // document.getElementById("dropdown").addEventListener("change", function () {
        // //	alert("got");
        // if (score > 4) {
            // score = score - 3;
            // document.getElementById("sp").innerHTML = " ";
        // }
		// console.warn("restchordfromrunsequence");
        // resetChord();
    // });
	
	// var uncircleAClass = async function (rowclassname) {
    // let targetrollpulldownelements = document.getElementsByClassName('aChordOption');
    // for (var i = 0; i < targetrollpulldownelements.length; i++) {
			// // console.warn(targetrollpulldownelements[i].innerHTML);
			// (function (i) {
		    // targetrollpulldownelements[i].addEventListener('click', function () {
        // //	alert("got");
		// console.warn('selected or unselected');
        // if (score > 4) {
            // score = score - 3;
            // document.getElementById("sp").innerHTML = " ";
        // }
		// console.warn("restchordfromrunsequence");
        // resetChord();
    // });
    // })(i);
	// }
	
	
    switch (sequence) {
    case 'gamestart':
        // Now we'll start a countdown timer...
        startTimer();

        // code to trigger animations, give a clue for the first lock
        advanceScreen();
        successFlicker();
        advanceScreen();
		console.warn("newchordfromgamestart");
		 intervalSetting = setInterval(repeatEverySixteenth, 60000 / (4 * currentBPM));

        newChord();

        break;

    case 'lock1':
        // code to trigger animations and give clue for the next lock
        advanceScreen();
        //clearSequence();
        //document.querySelector('.step3 p').innerHTML = "You lose...";
        successFlicker();
        break;

    case 'lock2':
        // code to trigger animations, stop clock, end game
        //backScreen();
        //activeNoteSequence = [];

        //document.querySelector('.step3 p').innerHTML = "You lose...";
        successFlicker();
		console.warn("newChordfromlock2");
        //newChord();
		newQuestionTime=true;
		clockTester=0;
        //successFlicker();
        break;

    case 'gameover':
        if (!timerTripped) {
            score = score - .1;
            timerTripped = true;
        }
        document.getElementById("score").innerHTML = "Current Score = " + score.toFixed(2);
        document.getElementById("keyboardImg2").src = currentImageName + ".jpeg";
        //currentStep = 3;
        //document.querySelector('.step3 p').innerHTML = "You lose...";
        //document.querySelector('body').dataset.step = "3";
        //document.querySelector('body').classList.add('gameover');
        break;
    }
}	

function setupInversions(theChord) {
    if (inversions == true) {
        pickedInversion = Math.floor(Math.random() * theChord.length);
        inversionAddOn = "/" + getNoteNameGeneral(theChord[pickedInversion]);
    } else {
        pickedInversion = 0;
        inversionAddOn = "";
    }
}

function getChordName() {
    return currentChordName;
}

function newChord() {
	middleNoteSet=false;
	console.warn("newChord");
    document.getElementById("keyboardImg2").src = "Blank Keyboard.jpeg";
    var thisChord = Math.floor(Math.random() * 24) + 1;
	thisChord=((specificComplexChordQueue[arraySpot][0][0]+1)%12+12-1);
	console.log(thisChord);
    switch (thisChord) {
    case 12:
        currentChordName = "C";
        currentImageName = "C";
        break;
    case 1:
        currentChordName = "Db";
        currentImageName = "Db";
        break;
    case 2:
        currentChordName = "D";
        currentImageName = "D";
        break;
    case 3:
        currentChordName = "Eb";
        currentImageName = "Eb";
        break;
    case 4:
        currentChordName = "E";
        currentImageName = "E";
        break;
    case 5:
        currentChordName = "F";
        currentImageName = "F";
        break;
    case 6:
        currentChordName = "Gb";
        currentImageName = "Gb";
        break;
    case 7:
        currentChordName = "G";
        currentImageName = "G";
        break;
    case 8:
        currentChordName = "Ab";
        currentImageName = "Ab";
        break;
    case 9:
        currentChordName = "A";
        currentImageName = "A";
        break;
    case 10:
        currentChordName = "Bb";
        currentImageName = "Bb";
        break;
    case 11:
        currentChordName = "B";
        currentImageName = "B";
        break;
    case 24:
        currentChordName = "C";
        currentImageName = "C";
        break;
    case 13:
        currentChordName = "C#";
        currentImageName = "Db";
        break;
    case 14:
        currentChordName = "D";
        currentImageName = "D";
        break;
    case 15:
        currentChordName = "D#";
        currentImageName = "Eb";
        break;
    case 16:
        currentChordName = "E";
        currentImageName = "E";
        break;
    case 17:
        currentChordName = "F";
        currentImageName = "F";
        break;
    case 18:
        currentChordName = "F#";

        currentImageName = "Gb";
        break;
    case 19:
        currentChordName = "G";
        currentImageName = "G";
        break;
    case 20:
        currentChordName = "G#";
        currentImageName = "Ab";
        break;
    case 21:
        currentChordName = "A";
        currentImageName = "A";
        break;
    case 22:
        currentChordName = "A#";
        currentImageName = "Bb";
        break;
    case 23:
        currentChordName = "B";
        currentImageName = "B";
        break;
    }
	console.log(currentImageName);
    setupChord(fixNote(thisChord));
}

function countChordTypesSelected(){
	let totalselected=0;
	let subtractor=0;
	let insertHTML="";
	document.getElementById('alertMessage').innerHTML="";
if (document.getElementById("jln").selected) { //checking to see if ________ is checked
        totalselected++;
		subtractor++;
    }
    if (document.getElementById("ez5").selected) { //checking to see if ________ is checked
        totalselected++;
		insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Fifths:</strong> (Named 'root note' + '5' ex: C5) <br>&nbsp;Thumb: The root note name <br>  &nbsp;Pinkie: 7 semitones/half-steps above the root note<br><img src='C5.jpeg' style = 'width:60%; position: relative; vertical-align:bottom' alt=''></td>";
   ez5on=true;
	}
	else{
		ez5on=false;
	}
    if (document.getElementById("ezmaj").selected) { //checking to see if ________ is checked
        totalselected++;
				insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Majors:</strong> (Named 'root note' ex: C)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Middle: 4 semitones/half-steps above the root note<br>  &nbsp;Pinkie: 7 semitones/half-steps above the root note<br><img src='C.jpeg' style = 'width:60%; position: relative; bottom:0px' alt=''></td>";
		ezmajon=true;

    }
	else{
		ezmajon=false;
	}
    if (document.getElementById("ezm").selected) { //checking to see if ________ is checked
        totalselected++;
		insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Minors:</strong> (Named 'root note' + 'm' ex: Cm) <br>&nbsp;Thumb: The root note name <br>  &nbsp;Middle: 3 semitones/half-steps above the root note<br>  &nbsp;Pinkie: 7 semitones/half-steps above the root note<br><img src='Cm.jpeg' style = 'width:60%; position: relative; bottom:0px' alt=''></td>";
		ezminon=true;
    }else{
		ezminon=false;
		
	}
    if (document.getElementById("just5").selected) { //checking to see if ________ is checked
       
	
	   if (!ez5on){
		   totalselected++;	
	   insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Fifths:</strong> (Named 'root note' + '5' ex: C5)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Pinkie: 7 semitones/half-steps above the root note</strong><br><img src='C5.jpeg' style = 'width:60%' alt=''></td>";
	   }
	   		if ((totalselected-subtractor)==4){
	    insertHTML=insertHTML+"</tr><tr style = 'border: 1px solid black'>";
	   }
    }
    if (document.getElementById("reg").selected) { //checking to see if ________ is checked

	if (!ezmajon){
		totalselected++;	
			insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Majors:</strong> (Named 'root note' ex: C)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Middle: 4 semitones/half-steps above the root note<br>  &nbsp;Pinkie: 7 semitones/half-steps above the root note<br><img src='C.jpeg' style = 'width:60%' alt=''></td>";
	}
	if ((totalselected-subtractor)==4){
	    insertHTML=insertHTML+"</tr><tr style = 'border: 1px solid black'>";
	   }
    }
    if (document.getElementById("regm").selected) { //checking to see if ________ is document.getElementById"jln".selected
	   if (!ezminon){
		   totalselected++;	
	   		insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Minors: </strong> (Named 'root note' + 'm' ex: Cm)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Middle: 3 semitones/half-steps above the root note<br>  &nbsp;Pinkie: 7 semitones/half-steps above the root note<br><img src='Cm.jpeg' style = 'width:60%' alt=''></td>";
	   }
	   		if ((totalselected-subtractor)==4){
	    insertHTML=insertHTML+"</tr><tr style = 'border: 1px solid black'>";
	   }
    }
    if (document.getElementById("idsus2").selected) { //checking to see if ________ is document.getElementById"jln".selected
        totalselected++;
		insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Suspension 2:</strong> (Named 'root note' + 'sus2' ex: Csus2)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Pointer Finger: 2 semitones/half-steps above the root note<br>  &nbsp;Pinkie: 7 semitones/half-steps above the root note<br><img src='Csus2.jpeg' style = 'width:60%' alt=''></td>";
		if ((totalselected-subtractor)==4){
	    insertHTML=insertHTML+"</tr><tr style = 'border: 1px solid black'>";
	   }
    }
    if (document.getElementById("idsus").selected) { //checking to see if ________ is document.getElementById"jln".selected
        totalselected++;	
		insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Suspension [4]: </strong> (Named 'root note' + 'sus' ex: Csus)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Ring Finger: 5 semitones/half-steps above the root note<br>  &nbsp;Pinkie: 7 semitones/half-steps above the root note<br><img src='Csus.jpeg' style = 'width:60%' alt=''></td>";
		if ((totalselected-subtractor)==4){
	    insertHTML=insertHTML+"</tr><tr style = 'border: 1px solid black'>";
	   }
    }
    if (document.getElementById("m7").selected) { //checking to see if ________ is document.getElementById"jln".selected
        totalselected++;
		   		insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Minor Sevenths: </strong> (Named 'root note' + 'm7' ex: Cm7)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Finger 2: 3 semitones/half-steps above the root note<br>  &nbsp;Finger 4: 7 semitones/half-steps above the root note<br>&nbsp;Finger 5: 10 semitones/half-steps above the root note<br><img src='Cm7.jpeg' style = 'width:60%' alt=''></td>";
			if ((totalselected-subtractor)==4){
	    insertHTML=insertHTML+"</tr><tr style = 'border: 1px solid black'>";
	   }
    }
    if (document.getElementById("maj7").selected) { //checking to see if ________ is document.getElementById"jln".selected
        totalselected++;
	insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Major Sevenths:</strong> (Named 'root note' + 'maj7' ex: Cmaj7)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Finger 2: 4 semitones/half-steps above the root note<br>  &nbsp;Finger 4: 7 semitones/half-steps above the root note<br>&nbsp;Finger 5: 11 semitones/half-steps above the root note<br><img src='Cmaj7.jpeg' style = 'width:60%' alt=''></td>";
			if ((totalselected-subtractor)==4){
	    insertHTML=insertHTML+"</tr><tr style = 'border: 1px solid black'>";
	   }
    }
    if (document.getElementById("d7").selected) { //checking to see if ________ is document.getElementById"jln".selected
       totalselected++;
	   insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Dominant Sevenths:</strong> (Named 'root note' + '7' ex: C7)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Finger 2: 4 semitones/half-steps above the root note<br>  &nbsp;Finger 4: 7 semitones/half-steps above the root note<br>&nbsp;Finger 5: 10 semitones/half-steps above the root note<br><img src='C7.jpeg' style = 'width:60%' alt=''></td>";
		if ((totalselected-subtractor)==4){
	    insertHTML=insertHTML+"</tr><tr style = 'border: 1px solid black'>";
	   } 
 }
    if (document.getElementById("m9").selected) { //checking to see if ________ is document.getElementById"jln".selected
       totalselected++;
    }
    if (document.getElementById("maj9").selected) { //checking to see if ________ is document.getElementById"jln".selected
       totalselected++;
    }
    if (document.getElementById("d9").selected) { //checking to see if ________ is document.getElementById"jln".selected
        totalselected++;
    }
    if (document.getElementById("add9").selected) { //checking to see if ________ is document.getElementById"jln".selected
        totalselected++;
    }
    if (document.getElementById("romanc").selected) { //checking to see if ________ is checked
        totalselected++;
			   // insertHTML=insertHTML+"<td style = 'vertical-align:top'><strong>Roman Numeral Scale Chords in C:</strong> (Named 'root note' + '7' ex: C7)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Finger 2: 4 semitones/half-steps above the root note<br>  &nbsp;Finger 4: 7 semitones/half-steps above the root note<br>&nbsp;Finger 5: 10 semitones/half-steps above the root note<br></td>";

    }
    if (document.getElementById("romana").selected) { //checking to see if ________ is checked
        totalselected++;
			   // $("#alertMessage").html(document.getElementById('alertMessage').innerHTML+"<td style = 'vertical-align:top'><strong>Dominant Sevenths:</strong> (Named 'root note' + '7' ex: C7)<br>&nbsp;Thumb: The root note name <br>  &nbsp;Finger 2: 4 semitones/half-steps above the root note<br>  &nbsp;Finger 4: 7 semitones/half-steps above the root note<br>&nbsp;Finger 5: 10 semitones/half-steps above the root note<br></td>");

    }
	// console.warn(insertHTML);
	try{
	document.getElementById('alertMessage').innerHTML="<table style = 'border: 1px solid black'><tr style = 'border: 1px solid black'>"+insertHTML+"</tr></table>";
	}
	catch(error){
	}
	// console.log(totalselected);
	if (totalselected-subtractor==0){
		document.getElementById('alertMessage').innerHTML="No Chords are currently selected. You may only be playing single notes. Or perhaps nothing at all.";
	
	}
	return totalselected;
}

function setupChord(rootNote) {
	console.warn("setupchord");
    var Chordlist = [];

    // alert(document.getElementById("ez5").selected);
    if (document.getElementById("doubleBass").selected) { //checking to see if ________ is checked
        bassMatched = 1;
    } else {
        bassMatched = 0;
    }
    if (document.getElementById("slashChords").selected) { //checking to see if ________ is checked
        inversions = true;
    } else {
        inversions = false;
    }
	    if (document.getElementById("octavePlaying").selected) { //checking to see if ________ is checked
        specificNotes = true;
    } else {
        specificNotes = false;
    }
    if (document.getElementById("jln").selected) { //checking to see if ________ is checked
        Chordlist.push("justNotes");
    }
    if (document.getElementById("ez5").selected) { //checking to see if ________ is checked
        Chordlist.push("easyFifths");
    }
    if (document.getElementById("ezmaj").selected) { //checking to see if ________ is checked
        Chordlist.push("easyMajors");
    }
    if (document.getElementById("ezm").selected) { //checking to see if ________ is checked
        Chordlist.push("easyMinors");
    }
    if (document.getElementById("just5").selected) { //checking to see if ________ is checked
        Chordlist.push("Fifths");
    }
    if (document.getElementById("reg").selected) { //checking to see if ________ is checked
        Chordlist.push("Major");
    }
    if (document.getElementById("regm").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("Minor");
    }
    if (document.getElementById("idsus2").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("sus2");
    }
    if (document.getElementById("idsus").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("sus");
    }
    if (document.getElementById("m7").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("minorSeventh");
    }
    if (document.getElementById("maj7").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("majorSeventh");
    }
    if (document.getElementById("d7").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("dominantSeventh");
    }
    if (document.getElementById("m9").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("minorNinth");
    }
    if (document.getElementById("maj9").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("majorNinth");
    }
    if (document.getElementById("d9").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("dominantNinth");
    }
    if (document.getElementById("add9").selected) { //checking to see if ________ is document.getElementById"jln".selected
        Chordlist.push("addNinth");
    }
    if (document.getElementById("romanc").selected) { //checking to see if ________ is checked
        Chordlist.push("romanC");
    }
    if (document.getElementById("romana").selected) { //checking to see if ________ is checked
        Chordlist.push("romanA");
    }
    // alert(Chordlist[0]+"");
    var chordType = Chordlist[Math.floor(Math.random() * Chordlist.length)];

	chordType="justNotes";
    switch (chordType) {
    case "justNotes":
        currentChordName = currentChordName + " Note";
if (!(currentImageName.includes ("Note"))){
        currentImageName = currentImageName + " Note";
}
        setupJustNotes(rootNote);

        break;
    case "easyFifths":

        //rootNote = fixNote(rootNote);
        if (rootNote == 1 || rootNote == 3 || rootNote == 6 || rootNote == 10 || rootNote == 8 || rootNote == 13 || rootNote == 15 || rootNote == 18 || rootNote == 20 || rootNote == 22) {
            rootNote++;
            rootNote = fixNote(rootNote);
            currentChordName = getNoteNameGeneral(rootNote);
            currentImageName = getNoteNameGeneral(rootNote);
        }
        currentChordName = currentChordName + "5";
        currentImageName = currentImageName + "5";
        setupEasyFifths(rootNote);
        break;
    case "easyMajors":
        //rootNote = fixNote(rootNote);
        if (rootNote == 1 || rootNote == 3 || rootNote == 6 || rootNote == 10 || rootNote == 8 || rootNote == 13 || rootNote == 15 || rootNote == 18 || rootNote == 20 || rootNote == 22) {
            rootNote++;
            rootNote = fixNote(rootNote);
            currentChordName = getNoteNameGeneral(rootNote)
                //currentImageName = getNoteNameGeneral(rootNote);

        }
        currentImageName = getNoteNameGeneral(rootNote);
        setupEasyMajors(rootNote);
        break;
    case "easyMinors":

        //rootNote = fixNote(rootNote);
        if (rootNote == 1 || rootNote == 3 || rootNote == 6 || rootNote == 10 || rootNote == 8 || rootNote == 13 || rootNote == 15 || rootNote == 18 || rootNote == 20 || rootNote == 22) {
            rootNote++;
            rootNote = fixNote(rootNote);
            //alert(rootNote);
            currentChordName = getNoteNameGeneral(rootNote);

            currentImageName = getNoteNameGeneral(rootNote);
        }

        currentChordName = currentChordName + "m";
        currentImageName = currentImageName + "m";
        setupEasyMinors(rootNote);
        break;
    case "romanC":
        //rootNote = fixNote(rootNote);
        if (rootNote == 10 || rootNote == 22) {
            rootNote = 5;
            currentChordName = getNoteNameGeneral(rootNote);
            currentImageName = getNoteNameGeneral(rootNote);
        } else if (rootNote == 1 || rootNote == 3 || rootNote == 6 || rootNote == 8 || rootNote == 11 || rootNote == 13 || rootNote == 15 || rootNote == 18 || rootNote == 20 || rootNote == 23) {
            rootNote++;
            rootNote = fixNote(rootNote);

            currentChordName = getNoteNameGeneral(rootNote);

            currentImageName = getNoteNameGeneral(rootNote);
        }

        //alert(rootNote);
        setupMajRoman(rootNote);
        //setupEasyMajors(rootNote);
        break;
    case "romanA":
        //rootNote = fixNote(rootNote);
        if (rootNote == 10 || rootNote == 22) {
            rootNote = 5;
            currentChordName = getNoteNameGeneral(rootNote);
            currentImageName = getNoteNameGeneral(rootNote);
        } else if (rootNote == 1 || rootNote == 3 || rootNote == 6 || rootNote == 11 || rootNote == 8 || rootNote == 13 || rootNote == 15 || rootNote == 18 || rootNote == 20 || rootNote == 23) {
            rootNote++;
            rootNote = fixNote(rootNote);
            //alert(rootNote);
            currentChordName = getNoteNameGeneral(rootNote);
            currentImageName = getNoteNameGeneral(rootNote);
        }

        //alert(rootNote);
        setupMinRoman(rootNote);
        //currentChordName = currentChordName + "m";
        break;
    case "Fifths":
        currentChordName = currentChordName + "5";

        currentImageName = currentImageName + "5";
        setupFifths(rootNote);
        break;
    case "Major":
        setupMajorChord(rootNote);
        break;
    case "Minor":
        currentChordName = currentChordName + "m";

        currentImageName = currentImageName + "m";
        setupMinorChord(rootNote);
        break;
    case "sus2":
        currentChordName = currentChordName + "sus2";
        currentImageName = currentImageName + "sus2";
        setupSus2(rootNote);
        break;
    case "sus":
        currentChordName = currentChordName + "sus";
        currentImageName = currentImageName + "sus";
        setupSus(rootNote);
        break;
    case "minorSeventh":
        currentChordName = currentChordName + "m7";
        currentImageName = currentImageName + "m7";
        setupMinorSeventh(rootNote);
        break;
    case "majorSeventh":
        currentChordName = currentChordName + "maj7";
        currentImageName = currentImageName + "maj7";
        setupMajorSeventh(rootNote);
        break;
    case "dominantSeventh":
        currentChordName = currentChordName + "7";
        currentImageName = currentImageName + "7";
        setupDominantSeventh(rootNote);
        break;
    case "minorNinth":
        currentChordName = currentChordName + "m9";
        currentImageName = currentImageName + "m9";
        setupMinorNinth(rootNote);
        break;
    case "majorNinth":
        currentChordName = currentChordName + "maj9";
        currentImageName = currentImageName + "maj9";
        setupMajorNinth(rootNote);
        break;
    case "dominantNinth":
        currentChordName = currentChordName + "9";
        currentImageName = currentImageName + "9";
        setupDominantNinth(rootNote);
        break;
    case "addNinth":
        currentChordName = currentChordName + "madd9";
        currentImageName = currentImageName + "madd9";
        setupAddNinth(rootNote);
        break;
    }

    if (bassMatched > 0) {
        //	alert("tested");
        correctChord.push(13);
        correctChord.push(14);
    }
    //rightAnswer();
    // alert(correctChord.toString());
	//correctChord=correctChordQueue[arraySpot];
	//console.log(arraySpot);
	correctChord=correctComplexChordQueue[arraySpot][0];
	
	let specificCorrectComplexChord=specificComplexChordQueue[(arraySpot+leadNum*specificComplexChordQueue.length-leadNum)%specificComplexChordQueue.length][0];
	previousBeatLength=Math.round(beatLength);
	//alert(previousBeatLength);
	beatLength=correctComplexChordQueue[(arraySpot+leadNum*specificComplexChordQueue.length-leadNum)%specificComplexChordQueue.length][1];
	console.log("current beats "+Math.round(beatLength) +" was " + previousBeatLength);
		arraySpot++;
	if (arraySpot>(correctComplexChordQueue.length-1)){
		arraySpot=0;
	}
	console.log(currentImageName);
	//console.log(arraySpot+ " of "+correctComplexChordQueue.length);
	
	//console.log(correctChord+" "+beatLength);
	specificCorrectChord=[];
	for (var i = 0; i<specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-1)%specificComplexChordQueue.length][0].length;i++){
		//console.log(specificCorrectComplexChord[i]-24+" "+beatLength);
	makeAndShowANote(specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-1)%specificComplexChordQueue.length][0][i]-24, Math.round(specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-1)%specificComplexChordQueue.length][1]), "referenceNote");
		//console.warn(specificCorrectComplexChord[i]);
	//specificCorrectChord.push(specificCorrectComplexChord[i]);
	}
	for (var i = 0; i<specificCorrectComplexChord.length;i++){
		//console.log(specificCorrectComplexChord[i]-24+" "+beatLength);
	//makeAndShowANote(specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length-leadNum)%specificComplexChordQueue.length][0][i]-24, Math.round(beatLength), "referenceNote");
	//console.warn(specificCorrectComplexChord[i]);
	specificCorrectChord.push(specificCorrectComplexChord[i]);
	}
	specificCorrectChord.sort();
   // showNotes(specificCorrectComplexChord);
}

function setupMajRoman(rN) {
    rN = fixNote(rN);
    switch (rN) {
    case 12:
        currentChordName = "I in C";
        currentImageName = "I in C";
        rN = fixNote(rN);
        var third = fixNote(rN + 4);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        // majorChordRoot = fixNote(rN);
        // var third = fixNote(majorChordRoot + 4);
        // var fifth = fixNote(majorChordRoot + 7);
        // correctChord = [majorChordRoot, third, fifth];
        break;
    case 2:
        currentChordName = "ii in C"
            currentImageName = "ii in C"
            rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 4:
        currentChordName = "iii in C"
            currentImageName = "iii in C"
            rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 5:
        currentChordName = "IV in C"
            currentImageName = "IV in C"
            rN = fixNote(rN);
        var third = fixNote(rN + 4);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 7:
        currentChordName = "V in C"
            currentImageName = "V in C"
            rN = fixNote(rN);
        var third = fixNote(rN + 4);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 9:
        currentChordName = "vi in C"
            currentImageName = "vi in C"
            rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    }
    //alert (currentChordName);
}
function setupMinRoman(rN) {
    switch (rN) {
    case 9:
        currentChordName = "i in Am";
        currentImageName = "i in Am";
        rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 12:
        currentChordName = "III in Am"
            currentImageName = "III in Am"
            rN = fixNote(rN);
        rN = fixNote(rN);
        var third = fixNote(rN + 4);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 2:
        currentChordName = "iv in Am"
            currentImageName = "iv in Am"
            rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 4:
        currentChordName = "v in Am"
            currentImageName = "v in Am"
            rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 5:
        currentChordName = "VI in Am"
            currentImageName = "VI in Am"
            rN = fixNote(rN);
        var third = fixNote(rN + 4);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 7:
        currentChordName = "VII in Am"
            currentImageName = "VII in Am"
            rN = fixNote(rN);
        var third = fixNote(rN + 4);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    }

}
function setupMajorChord(majorChordRoot) {
    majorChordRoot = fixNote(majorChordRoot);
    var third = fixNote(majorChordRoot + 4);
    var fifth = fixNote(majorChordRoot + 7);
    correctChord = [majorChordRoot, third, fifth];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupMinorChord(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 3);
    var fifth = fixNote(chordRoot + 7);
    correctChord = [chordRoot, third, fifth];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupJustNotes(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    correctChord = [chordRoot];
}

function setupSus(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 5);
    var fifth = fixNote(chordRoot + 7);
    correctChord = [chordRoot, third, fifth];
}

function setupSus2(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 2);
    var fifth = fixNote(chordRoot + 7);
    correctChord = [chordRoot, third, fifth];
}

function setupMajorSeventh(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 4);
    var fifth = fixNote(chordRoot + 7);
    var seventh = fixNote(chordRoot + 11);
    correctChord = [chordRoot, third, fifth, seventh];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupMinorSeventh(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 3);
    var fifth = fixNote(chordRoot + 7);
    var seventh = fixNote(chordRoot + 10);
    correctChord = [chordRoot, third, fifth, seventh];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupDominantSeventh(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 4);
    var fifth = fixNote(chordRoot + 7);
    var seventh = fixNote(chordRoot + 10);
    correctChord = [chordRoot, third, fifth, seventh];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupEasyFifths(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var fifth = fixNote(chordRoot + 7);
    correctChord = [chordRoot, fifth];
}

function setupFifths(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var fifth = fixNote(chordRoot + 7);
    correctChord = [chordRoot, fifth];
}

function setupEasyMajors(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 4);
    var fifth = fixNote(chordRoot + 7);
    correctChord = [chordRoot, third, fifth];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupEasyMinors(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 3);
    var fifth = fixNote(chordRoot + 7);
    correctChord = [chordRoot, third, fifth];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupMajorNinth(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 4);
    var fifth = fixNote(chordRoot + 11);
    var ninth = fixNote(chordRoot + 2);
    correctChord = [chordRoot, third, fifth, ninth];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupMinorNinth(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 3);
    var fifth = fixNote(chordRoot + 10);
    var ninth = fixNote(chordRoot + 2);
    correctChord = [chordRoot, third, fifth, ninth];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function setupDomininantNinth(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 4);
    var fifth = fixNote(chordRoot + 10);
    var ninth = fixNote(chordRoot + 2);
    correctChord = [chordRoot, third, fifth, ninth];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}
function setupAddNinth(chordRoot) {
    majorChordRoot = fixNote(chordRoot);
    var third = fixNote(chordRoot + 4);
    var fifth = fixNote(chordRoot + 7);
    var ninth = fixNote(chordRoot + 2);
    correctChord = [chordRoot, third, fifth, ninth];
    setupInversions(correctChord);
    currentChordName = currentChordName + inversionAddOn;
}

function fixNote(noteNumber) { //makes the note between 1 and 12
    if (noteNumber > 12) {
        return noteNumber - 12;
    } else {
        return noteNumber;
    }
}
function advanceScreen() {
    document.querySelector('body').dataset.step++;
}
function backScreen() {
    document.querySelector('body').dataset.step--;
}

function successFlicker() {
    var b = document.querySelector('body')
        b.classList.add('success');
    window.setTimeout(function () {
        b.classList.remove('success');
    }, 500);
}


function repeatEverySixteenth() {
    // if (firstTimeThrough) {
        // firstTimeThrough = false;
        // setupStepRhythmSequence();
    // }
	
    thisBeatNum = clockTester % 16 + 1;
    clockTester = clockTester + 1;
    metroTester = metroTester + 1;
	console.log("bpm is "+currentBPM);
    // instrument="rhythmInstruments";
	//console.log("hi");
    chordIsDone = true;
    updateTimer();
    // alertify (clockTester%16);
    // alertify(thisBeatNum);
	if (metronome){
	if (metroTester % 4 == 0) { // if the beat i1 1, 2, 3, or 4
        //instrument = "rhythmInstruments";
		var audio = document.getElementById('sound-clave');
        //	alert (""+soundId(getNoteName(note)));
        // if audio(const playPromise = audio.play();
        // if (playPromise !== null) {
        // playPromise.catch(() => {
        // audio.pause();
        // audio.volume = 1.0;
        // if (audio.readyState >= 2) {
        // audio.currentTime = 0;
        // // audio.play();
        // }
        // })
        // }
        // if (audio) {

        // }

        //press();
        //playNote(midiNoteToFrequency(note));
        //press(note);

            if (audio) {
                audio.pause();
                audio.volume = 0.1;
                if (audio.readyState >= 2) {
                    audio.currentTime = 0;
					
                    var promise = audio.play();

                    if (promise !== undefined) {
                        promise.then(_ => {
                            // Autoplay started!
                        }).catch(error => {
                            //alert ("it worked");
                            // Autoplay was prevented.
                            // Show a "Play" button so that user can start playback.
                        });
                    }

                }
            }
       
 
    }
	}
    if (thisBeatNum % 4 == 0) { // if the beat i1 1, 2, 3, or 4
        //instrument = "rhythmInstruments";
		
       
        // playANote("kick0");
       // parseAndConstructArrays();
        let thisStep = (thisBeatNum / 4);
        // metronomeKeeper(thisStep);

    }
	// console.log(thisBeatNum);
//	console.warn(thisBeatNum + " " + previousBeatLength);

	timeIsRight=false;
if (thisBeatNum%16==Math.round(previousBeatLength+16-releaseEarly)%16){
	if (previousBeatLength>=16){
		previousBeatLength-=16;
	}
	else{
	console.error(thisBeatNum%16+" "+Math.round(previousBeatLength)%16)
	timeIsRight=true;
	}
}
else{
}
//		console.log(thisBeatNum);	
try{
	if (!paused){
    for (var i = 0; i < sixteenStepArray[thisBeatNum - 1].length; i++) {
        playANote(sixteenStepArray[thisBeatNum - 1][i] + "0");
    }
	}
}
catch (error){}
if (beginning){
	console.error("Hi");
	if (thisBeatNum%8==2){
	if (leadInCounter>0){
		leadInCounter=leadInCounter-1;
			for (var i = 0; i<specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length)%specificComplexChordQueue.length][0].length;i++){
		//console.log(specificCorrectComplexChord[i]-24+" "+beatLength);
			makeAndShowANote(specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length)%specificComplexChordQueue.length][0][i]-24, Math.round(specificComplexChordQueue[(arraySpot+specificComplexChordQueue.length)%specificComplexChordQueue.length][1]), "referenceNote");
	//console.warn(specificCorrectComplexChord[i]);
	//specificCorrectChord.push(specificCorrectComplexChord[i]);
	}
	arraySpot++;
	
	console.log("Array Spot: "+arraySpot);
	}
	else{
	leadInCounter=-1;
	beginning=false;
	newChord();
	}
	}
	if (leadInCounter==0){

	}
} else
    if ((newQuestionTime)&&(timeIsRight)) {
        noMorePoints = false;
        numOfThisNoteInSequence = 0;
        // alert ("a new questions!");
        chordSequenceStarted = false;
        // if (!nonReferencePlay) {
            // sequenceStarted = false;
        // }
 //       clearAllNotes();
        //currentScore = 0;
      //  score = 0;
	  
        wrongPoints = 0;
        wrongNote = false;
        newWrong = false;
        newScore = true;
        rhythmSequenceArray = [];
        rhythmSequenceCopy = [];
        kickSequenceArray = [];
        kickSequenceCopy = [];
        clapSequenceArray = []; //inst copy
        clapSequenceCopy = []; //inst copy
        metronomeSequenceArray = []; //inst copy
        metronomeSequenceCopy = []; //inst copy
        inst5SequenceArray = []; //inst copy
        inst5SequenceCopy = []; //inst copy
        inst6SequenceArray = []; //inst copy
        inst6SequenceCopy = []; //inst copy
        inst7SequenceArray = []; //inst copy
        inst7SequenceCopy = []; //inst copy
        hatSequenceArray = [];
        hatSequenceCopy = [];
        snareSequenceArray = [];
        snareSequenceCopy = [];
        newQuestionTime = false;
		clearChord();
		readyAnswer();
		console.log("YO THIS TEMPO IS "+currentBPM);
		//currentBPM=120;
    }

    var minutes = Math.floor(clockTester / 4 / currentBPM);
    var seconds = Math.floor(clockTester * 60 / 4 / currentBPM);
    // alertify(seconds);
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // var distance2 = distance / (totalScore + 1);
    // var minutes2 = Math.floor(distance2 / (1000 * 60));
    // var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    // if (minutes < 10)
    // minutes = "0" + minutes;
    // if (seconds < 10)
    // seconds = "0" + seconds;

   // document.getElementById('countdown').innerText = minutes + ":" + seconds + " ";
    // document.getElementById("averagetime").innerText = minutes2 + ":" + seconds2 + " ";
}
function startTimer() {
    // set timer for 60 minutes from start
    var now = new Date();
    timeEnd = new Date(now.getTime() + (timerLength * 60 * 1000) - 1);

    //updateTimer();
}
/**
 * Function to update the time remaining every second
 */
function updateTimer() {
    var now = new Date();
    var distance = timeEnd.getTime() - now.getTime();
    var minutes = Math.floor(distance / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	timeCheck=0+seconds;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    if (currentStep < 3) {
        let countdownMessage = minutes + ":" + seconds;
        if (presentationType == "words") {
            countdownMessage = countdownMessage + " " + currentChordName;
        }		
		if (newQuestionTime){
		countdownMessage = "Right!";
		}
        document.querySelector('#countdown').innerText = countdownMessage;

        if (minutes > 0 || seconds > 0) {
          //  window.setTimeout(function () {
            //    updateTimer();
           // }, 1000);
        } else if (minutes == 0 && seconds == 0) {
			console.warn('runsequence from updatetimer');
            runSequence('gameover');
        }
		else{
		
		countdownMessage = "Times up!";
        document.querySelector('#countdown').innerText = countdownMessage;
		}
    }
}

/* Piano keyboard pitches. Names match sound files by ID attribute. */



$('#metronomeButton').click(function () {
    if (metronome) {
        document.getElementById("metronomeButton").innerHTML = "Turn on Metronome";
        metronome = false;

    } else {


        document.getElementById("metronomeButton").innerHTML = "Turn off Metronome";
        metronome = true;
		metroTester=0;
		clockTester=0;

    }

});
$('#playerModeButton').click(function () {
    if (playerMode) {
        document.getElementById("playerModeButton").innerHTML = "How should the song sound?";
        playerMode = false;
		releaseEarly=1;
    } else {
releaseEarly=0;

        document.getElementById("playerModeButton").innerHTML = "Let me play it now.";
        playerMode = true;
		readyAnswer();

    }

});

$(function () {
    $("#slider-horizontal-BPMAmount").slider({
        orientation: "horizontal",
        range: "min",
        min: 60,
        max: 200,
        value: 100,
        stop: function (event, ui) {
            $("#BPMAmount").val(ui.value);
            currentBPM = Number(document.getElementById("BPMAmount").value) + 0;
            newQuestionTime = true;
            // alert ("hi");
			metroTester=0;
			clockTester=0;
            clearInterval(intervalSetting);
            intervalSetting = setInterval(repeatEverySixteenth, 60000 / (4 * currentBPM));

        }
    });
    $("#BPMAmount").val($("#slider-horizontal-BPMAmount").slider("value"));
    currentBPM = Number(document.getElementById("BPMAmount").value) + 0;
    // console.log("it is " + sequenceLength);
    // stopAllNotes();
    // clearAllNotes();
    newQuestionTime = true;

});
var keys = [
    'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3',
    'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4',
    'A4', 'Bb4', 'B4', 'C5'
];

/* Corresponding keyboard keycodes, in order w/ 'keys'. */
/* QWERTY layout:
/*   upper register: Q -> P, with 1-0 as black keys. */
/*   lower register: Z -> M, , with A-L as black keys. */

var codes = [
    90, 83, 88, 67, 70, 86, 71, 66, 78, 74, 77, 75,
    81, 50, 87, 69, 52, 82, 53, 84, 89, 55, 85, 56,
    73, 57, 79, 80
];

var pedal = 32; /* Keycode for sustain pedal. */
var tonic = 'A2'; /* Lowest pitch. */

/* Piano state. */

var intervals = {};
var depressed = {};

/* Selectors */

function pianoClass(name) {
    return '.piano-' + name;
};

function soundId(id) {
    return 'sound-' + id;
};

function sound(id) {
    var it = document.getElementById(soundId(id));
    return it;
};

$(function () {
    $('select[multiple].active.3col').multiselect({
        columns: 1,
        placeholder: 'Select Chord Sets',
        search: true,
        searchOptions: {
            'default': 'Search Chords'
        },
        selectAll: true
    });

});

/**
 * Display a nice easy to use multiselect list
 * @Version: 2.4.16
 * @Author: Patrick Springstubbe
 * @Contact: @JediNobleclem
 * @Website: springstubbe.us
 * @Source: https://github.com/nobleclem/jQuery-MultiSelect
 *
 * Usage:
 *     $('select[multiple]').multiselect();
 *     $('select[multiple]').multiselect({ texts: { placeholder: 'Select options' } });
 *     $('select[multiple]').multiselect('reload');
 *     $('select[multiple]').multiselect( 'loadOptions', [{
 *         name   : 'Option Name 1',
 *         value  : 'option-value-1',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     },{
 *         name   : 'Option Name 2',
 *         value  : 'option-value-2',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     }]);
 *
 **/
(function ($) {
    var defaults = {
        columns: 1, // how many columns should be use to show options
        search: false, // include option search box

        // search filter options
        searchOptions: {
            delay: 250, // time (in ms) between keystrokes until search happens
            showOptGroups: false, // show option group titles if no options remaining
            searchText: true, // search within the text
            searchValue: false, // search within the value
            onSearch: function (element) {}
            // fires on keyup before search on options happens
        },

        // plugin texts
        texts: {
            placeholder: 'Select options', // text to use in dummy input
            search: 'Search', // search input placeholder text
            selectedOptions: ' selected', // selected suffix text
            selectAll: 'Select all', // select all text
            unselectAll: 'Unselect all', // unselect all text
            noneSelected: 'None Selected' // None selected text
        },

        // general options
        selectAll: false, // add select all option
        selectGroup: false, // select entire optgroup
        minHeight: 200, // minimum height of option overlay
        maxHeight: null, // maximum height of option overlay
        maxWidth: null, // maximum width of option overlay (or selector)
        maxPlaceholderWidth: null, // maximum width of placeholder button
        maxPlaceholderOpts: 10, // maximum number of placeholder options to show until "# selected" shown instead
        showCheckbox: true, // display the checkbox to the user
        checkboxAutoFit: false, // auto calc checkbox padding
        optionAttributes: [], // attributes to copy to the checkbox from the option element

        // Callbacks
        onLoad: function (element) {}, // fires at end of list initialization
        onOptionClick: function (element, option) {}, // fires when an option is clicked
        onControlClose: function (element) {}, // fires when the options list is closed
        onSelectAll: function (element, selected) {}, // fires when (un)select all is clicked
    };

    var msCounter = 1; // counter for each select list
    var msOptCounter = 1; // counter for each option on page

    // FOR LEGACY BROWSERS (talking to you IE8)
    if (typeof Array.prototype.map !== 'function') {
        Array.prototype.map = function (callback, thisArg) {
            if (typeof thisArg === 'undefined') {
                thisArg = this;
            }

            return $.isArray(thisArg) ? $.map(thisArg, callback) : [];
        };
    }
    if (typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    function MultiSelect(element, options) {
        this.element = element;
        this.options = $.extend(true, {}, defaults, options);
        this.updateSelectAll = true;
        this.updatePlaceholder = true;
        this.listNumber = msCounter;

        msCounter = msCounter + 1; // increment counter

        /* Make sure its a multiselect list */
        if (!$(this.element).attr('multiple')) {
            throw new Error('[jQuery-MultiSelect] Select list must be a multiselect list in order to use this plugin');
        }

        /* Options validation checks */
        if (this.options.search) {
            if (!this.options.searchOptions.searchText && !this.options.searchOptions.searchValue) {
                throw new Error('[jQuery-MultiSelect] Either searchText or searchValue should be true.');
            }
        }

        /** BACKWARDS COMPATIBILITY **/
        if ('placeholder' in this.options) {
            this.options.texts.placeholder = this.options.placeholder;
            delete this.options.placeholder;
        }
        if ('default' in this.options.searchOptions) {
            this.options.texts.search = this.options.searchOptions['default'];
            delete this.options.searchOptions['default'];
        }
        /** END BACKWARDS COMPATIBILITY **/

        // load this instance
        this.load();
    }

    MultiSelect.prototype = {
        /* LOAD CUSTOM MULTISELECT DOM/ACTIONS */
        load: function () {
            var instance = this;

            // make sure this is a select list and not loaded
            if ((instance.element.nodeName != 'SELECT') || $(instance.element).hasClass('jqmsLoaded')) {
                return true;
            }

            // sanity check so we don't double load on a select element
            $(instance.element).addClass('jqmsLoaded ms-list-' + instance.listNumber).data('plugin_multiselect-instance', instance);

            // add option container
            $(instance.element).after('<div id="ms-list-' + instance.listNumber + '" class="ms-options-wrap"><button type="button"><span>None Selected</span></button><div class="ms-options"><ul></ul></div></div>');

            var placeholder = $(instance.element).siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap').find('> button:first-child');
            var optionsWrap = $(instance.element).siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap').find('> .ms-options');
            var optionsList = optionsWrap.find('> ul');

            // don't show checkbox (add class for css to hide checkboxes)
            if (!instance.options.showCheckbox) {
                optionsWrap.addClass('hide-checkbox');
            } else if (instance.options.checkboxAutoFit) {
                optionsWrap.addClass('checkbox-autofit');
            }

            // check if list is disabled
            if ($(instance.element).prop('disabled')) {
                placeholder.prop('disabled', true);
            }

            // set placeholder maxWidth
            if (instance.options.maxPlaceholderWidth) {
                placeholder.css('maxWidth', instance.options.maxPlaceholderWidth);
            }

            // override with user defined maxHeight
            if (instance.options.maxHeight) {
                var maxHeight = instance.options.maxHeight;
            } else {
                // cacl default maxHeight
                var maxHeight = ($(window).height() - optionsWrap.offset().top + $(window).scrollTop() - 20);
            }

            // maxHeight cannot be less than options.minHeight
            maxHeight = maxHeight < instance.options.minHeight ? instance.options.minHeight : maxHeight;

            optionsWrap.css({
                maxWidth: instance.options.maxWidth,
                minHeight: instance.options.minHeight,
                maxHeight: maxHeight,
            });

            // isolate options scroll
            // @source: https://github.com/nobleclem/jQuery-IsolatedScroll
            optionsWrap.on('touchmove mousewheel DOMMouseScroll', function (e) {
                if (($(this).outerHeight() < $(this)[0].scrollHeight)) {
                    var e0 = e.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;

                    if (($(this).outerHeight() + $(this)[0].scrollTop) > $(this)[0].scrollHeight) {
                        e.preventDefault();
                        this.scrollTop += (delta < 0 ? 1 : -1);
                    }
                }
            });

            // hide options menus if click happens off of the list placeholder button
            $(document).off('click.ms-hideopts').on('click.ms-hideopts', function (event) {
                if (!$(event.target).closest('.ms-options-wrap').length) {
                    $('.ms-options-wrap.ms-active > .ms-options').each(function () {
                        $(this).closest('.ms-options-wrap').removeClass('ms-active');

                        var listID = $(this).closest('.ms-options-wrap').attr('id');

                        var thisInst = $(this).parent().siblings('.' + listID + '.jqmsLoaded').data('plugin_multiselect-instance');

                        // USER CALLBACK
                        if (typeof thisInst.options.onControlClose == 'function') {
                            thisInst.options.onControlClose(thisInst.element);
                        }
                    });
                }
                // hide open option lists if escape key pressed
            }).on('keydown', function (event) {
                if ((event.keyCode || event.which) == 27) { // esc key
                    $(this).trigger('click.ms-hideopts');
                }
            });

            // handle pressing enter|space while tabbing through
            placeholder.on('keydown', function (event) {
                var code = (event.keyCode || event.which);
                if ((code == 13) || (code == 32)) { // enter OR space
                    placeholder.trigger('mousedown');
                }
            });

            // disable button action
            placeholder.on('mousedown', function (event) {
                // ignore if its not a left click
                if (event.which && (event.which != 1)) {
                    return true;
                }

                // hide other menus before showing this one
                $('.ms-options-wrap.ms-active').each(function () {
                    if ($(this).siblings('.' + $(this).attr('id') + '.jqmsLoaded')[0] != optionsWrap.parent().siblings('.ms-list-' + instance.listNumber + '.jqmsLoaded')[0]) {
                        $(this).removeClass('ms-active');

                        var thisInst = $(this).siblings('.' + $(this).attr('id') + '.jqmsLoaded').data('plugin_multiselect-instance');

                        // USER CALLBACK
                        if (typeof thisInst.options.onControlClose == 'function') {
                            thisInst.options.onControlClose(thisInst.element);
                        }
                    }
                });

                // show/hide options
                optionsWrap.closest('.ms-options-wrap').toggleClass('ms-active');

                // recalculate height
                if (optionsWrap.closest('.ms-options-wrap').hasClass('ms-active')) {
                    optionsWrap.css('maxHeight', '');

                    // override with user defined maxHeight
                    if (instance.options.maxHeight) {
                        var maxHeight = instance.options.maxHeight;
                    } else {
                        // cacl default maxHeight
                        var maxHeight = ($(window).height() - optionsWrap.offset().top + $(window).scrollTop() - 20);
                    }

                    if (maxHeight) {
                        // maxHeight cannot be less than options.minHeight
                        maxHeight = maxHeight < instance.options.minHeight ? instance.options.minHeight : maxHeight;

                        optionsWrap.css('maxHeight', maxHeight);
                    }
                } else if (typeof instance.options.onControlClose == 'function') {
                    instance.options.onControlClose(instance.element);
                }
            }).click(function (event) {
                event.preventDefault();
            });

            // add placeholder copy
            if (instance.options.texts.placeholder) {
                placeholder.find('span').text(instance.options.texts.placeholder);
            }

            // add search box
            if (instance.options.search) {
                optionsList.before('<div class="ms-search"><input type="text" value="" placeholder="' + instance.options.texts.search + '" /></div>');

                var search = optionsWrap.find('.ms-search input');
                search.on('keyup', function () {
                    // ignore keystrokes that don't make a difference
                    if ($(this).data('lastsearch') == $(this).val()) {
                        return true;
                    }

                    // pause timeout
                    if ($(this).data('searchTimeout')) {
                        clearTimeout($(this).data('searchTimeout'));
                    }

                    var thisSearchElem = $(this);

                    $(this).data('searchTimeout', setTimeout(function () {
                            thisSearchElem.data('lastsearch', thisSearchElem.val());

                            // USER CALLBACK
                            if (typeof instance.options.searchOptions.onSearch == 'function') {
                                instance.options.searchOptions.onSearch(instance.element);
                            }

                            // search non optgroup li's
                            var searchString = $.trim(search.val().toLowerCase());
                            if (searchString) {
                                optionsList.find('li[data-search-term*="' + searchString + '"]:not(.optgroup)').removeClass('ms-hidden');
                                optionsList.find('li:not([data-search-term*="' + searchString + '"], .optgroup)').addClass('ms-hidden');
                            } else {
                                optionsList.find('.ms-hidden').removeClass('ms-hidden');
                            }

                            // show/hide optgroups based on if there are items visible within
                            if (!instance.options.searchOptions.showOptGroups) {
                                optionsList.find('.optgroup').each(function () {
                                    if ($(this).find('li:not(.ms-hidden)').length) {
                                        $(this).show();
                                    } else {
                                        $(this).hide();
                                    }
                                });
                            }

                            instance._updateSelectAllText();
                        }, instance.options.searchOptions.delay));
                });
            }

            // add global select all options
            if (instance.options.selectAll) {
                optionsList.before('<a href="#" class="ms-selectall global">' + instance.options.texts.selectAll + '</a>');
            }

            // handle select all option
            optionsWrap.on('click', '.ms-selectall', function (event) {
                event.preventDefault();

                instance.updateSelectAll = false;
                instance.updatePlaceholder = false;

                var select = optionsWrap.parent().siblings('.ms-list-' + instance.listNumber + '.jqmsLoaded');

                if ($(this).hasClass('global')) {
                    // check if any options are not selected if so then select them
                    if (optionsList.find('li:not(.optgroup, .selected, .ms-hidden)').length) {
                        // get unselected vals, mark as selected, return val list
                        optionsList.find('li:not(.optgroup, .selected, .ms-hidden)').addClass('selected');
                        optionsList.find('li.selected input[type="checkbox"]:not(:disabled)').prop('checked', true);
                    }
                    // deselect everything
                    else {
                        optionsList.find('li:not(.optgroup, .ms-hidden).selected').removeClass('selected');
                        optionsList.find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop('checked', false);
                    }
                } else if ($(this).closest('li').hasClass('optgroup')) {
                    var optgroup = $(this).closest('li.optgroup');

                    // check if any selected if so then select them
                    if (optgroup.find('li:not(.selected, .ms-hidden)').length) {
                        optgroup.find('li:not(.selected, .ms-hidden)').addClass('selected');
                        optgroup.find('li.selected input[type="checkbox"]:not(:disabled)').prop('checked', true);
                    }
                    // deselect everything
                    else {
                        optgroup.find('li:not(.ms-hidden).selected').removeClass('selected');
                        optgroup.find('li:not(.ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop('checked', false);
                    }
                }

                var vals = [];
                optionsList.find('li.selected input[type="checkbox"]').each(function () {
                    vals.push($(this).val());
                });
                select.val(vals).trigger('change');

                instance.updateSelectAll = true;
                instance.updatePlaceholder = true;

                // USER CALLBACK
                if (typeof instance.options.onSelectAll == 'function') {
                    instance.options.onSelectAll(instance.element, vals.length);
                }

                instance._updateSelectAllText();
                instance._updatePlaceholderText();
            });

            // add options to wrapper
            var options = [];
            $(instance.element).children().each(function () {
                if (this.nodeName == 'OPTGROUP') {
                    var groupOptions = [];

                    $(this).children('option').each(function () {
                        var thisOptionAtts = {};
                        for (var i = 0; i < instance.options.optionAttributes.length; i++) {
                            var thisOptAttr = instance.options.optionAttributes[i];

                            if ($(this).attr(thisOptAttr) !== undefined) {
                                thisOptionAtts[thisOptAttr] = $(this).attr(thisOptAttr);
                            }
                        }

                        groupOptions.push({
                            name: $(this).text(),
                            value: $(this).val(),
                            checked: $(this).prop('selected'),
                            attributes: thisOptionAtts
                        });
                    });

                    options.push({
                        label: $(this).attr('label'),
                        options: groupOptions
                    });
                } else if (this.nodeName == 'OPTION') {
                    var thisOptionAtts = {};
                    for (var i = 0; i < instance.options.optionAttributes.length; i++) {
                        var thisOptAttr = instance.options.optionAttributes[i];

                        if ($(this).attr(thisOptAttr) !== undefined) {
                            thisOptionAtts[thisOptAttr] = $(this).attr(thisOptAttr);
                        }
                    }

                    options.push({
                        name: $(this).text(),
                        value: $(this).val(),
                        checked: $(this).prop('selected'),
                        attributes: thisOptionAtts
                    });
                } else {
                    // bad option
                    return true;
                }
            });
            instance.loadOptions(options, true, false);

            // BIND SELECT ACTION
            optionsWrap.on('click', 'input[type="checkbox"]', function () {
                $(this).closest('li').toggleClass('selected');

                var select = optionsWrap.parent().siblings('.ms-list-' + instance.listNumber + '.jqmsLoaded');

                // toggle clicked option
                select.find('option[value="' + instance._escapeSelector($(this).val()) + '"]').prop(
                    'selected', $(this).is(':checked')).closest('select').trigger('change');

                // USER CALLBACK
                if (typeof instance.options.onOptionClick == 'function') {
                    instance.options.onOptionClick(instance.element, this);
                }

                instance._updateSelectAllText();
                instance._updatePlaceholderText();
            });

            // BIND FOCUS EVENT
            optionsWrap.on('focusin', 'input[type="checkbox"]', function () {
                $(this).closest('label').addClass('focused');
            }).on('focusout', 'input[type="checkbox"]', function () {
                $(this).closest('label').removeClass('focused');
            });

            // USER CALLBACK
            if (typeof instance.options.onLoad === 'function') {
                instance.options.onLoad(instance.element);
            }

            // hide native select list
            $(instance.element).hide();
        },

        /* LOAD SELECT OPTIONS */
        loadOptions: function (options, overwrite, updateSelect) {
            overwrite = (typeof overwrite == 'boolean') ? overwrite : true;
            updateSelect = (typeof updateSelect == 'boolean') ? updateSelect : true;

            var instance = this;
            var select = $(instance.element);
            var optionsList = select.siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap').find('> .ms-options > ul');
            var optionsWrap = select.siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap').find('> .ms-options');

            if (overwrite) {
                optionsList.find('> li').remove();

                if (updateSelect) {
                    select.find('> *').remove();
                }
            }

            var containers = [];
            for (var key in options) {
                // Prevent prototype methods injected into options from being iterated over.
                if (!options.hasOwnProperty(key)) {
                    continue;
                }

                var thisOption = options[key];
                var container = $('<li/>');
                var appendContainer = true;

                // OPTION
                if (thisOption.hasOwnProperty('value')) {
                    if (instance.options.showCheckbox && instance.options.checkboxAutoFit) {
                        container.addClass('ms-reflow');
                    }

                    // add option to ms dropdown
                    instance._addOption(container, thisOption);

                    if (updateSelect) {
                        var selOption = $('<option value="' + thisOption.value + '">' + thisOption.name + '</option>');

                        // add custom user attributes
                        if (thisOption.hasOwnProperty('attributes') && Object.keys(thisOption.attributes).length) {
                            selOption.attr(thisOption.attributes);
                        }

                        // mark option as selected
                        if (thisOption.checked) {
                            selOption.prop('selected', true);
                        }

                        select.append(selOption);
                    }
                }
                // OPTGROUP
                else if (thisOption.hasOwnProperty('options')) {
                    var optGroup = $('<optgroup label="' + thisOption.label + '"></optgroup>');

                    optionsList.find('> li.optgroup > span.label').each(function () {
                        if ($(this).text() == thisOption.label) {
                            container = $(this).closest('.optgroup');
                            appendContainer = false;
                        }
                    });

                    // prepare to append optgroup to select element
                    if (updateSelect) {
                        if (select.find('optgroup[label="' + thisOption.label + '"]').length) {
                            optGroup = select.find('optgroup[label="' + thisOption.label + '"]');
                        } else {
                            select.append(optGroup);
                        }
                    }

                    // setup container
                    if (appendContainer) {
                        container.addClass('optgroup');
                        container.append('<span class="label">' + thisOption.label + '</span>');
                        container.find('> .label').css({
                            clear: 'both'
                        });

                        // add select all link
                        if (instance.options.selectGroup) {
                            container.append('<a href="#" class="ms-selectall">' + instance.options.texts.selectAll + '</a>');
                        }

                        container.append('<ul/>');
                    }

                    for (var gKey in thisOption.options) {
                        // Prevent prototype methods injected into options from
                        // being iterated over.
                        if (!thisOption.options.hasOwnProperty(gKey)) {
                            continue;
                        }

                        var thisGOption = thisOption.options[gKey];
                        var gContainer = $('<li/>');
                        if (instance.options.showCheckbox && instance.options.checkboxAutoFit) {
                            gContainer.addClass('ms-reflow');
                        }

                        // no clue what this is we hit (skip)
                        if (!thisGOption.hasOwnProperty('value')) {
                            continue;
                        }

                        instance._addOption(gContainer, thisGOption);

                        container.find('> ul').append(gContainer);

                        // add option to optgroup in select element
                        if (updateSelect) {
                            var selOption = $('<option value="' + thisGOption.value + '">' + thisGOption.name + '</option>');

                            // add custom user attributes
                            if (thisGOption.hasOwnProperty('attributes') && Object.keys(thisGOption.attributes).length) {
                                selOption.attr(thisGOption.attributes);
                            }

                            // mark option as selected
                            if (thisGOption.checked) {
                                selOption.prop('selected', true);
                            }

                            optGroup.append(selOption);
                        }
                    }
                } else {
                    // no clue what this is we hit (skip)
                    continue;
                }

                if (appendContainer) {
                    containers.push(container);
                }
            }
            optionsList.append(containers);

            // pad out label for room for the checkbox
            if (instance.options.checkboxAutoFit && instance.options.showCheckbox && !optionsWrap.hasClass('hide-checkbox')) {
                var chkbx = optionsList.find('.ms-reflow:eq(0) input[type="checkbox"]');
                if (chkbx.length) {
                    var checkboxWidth = chkbx.outerWidth();
                    checkboxWidth = checkboxWidth ? checkboxWidth : 15;

                    optionsList.find('.ms-reflow label').css(
                        'padding-left',
                        (parseInt(chkbx.closest('label').css('padding-left')) * 2) + checkboxWidth);

                    optionsList.find('.ms-reflow').removeClass('ms-reflow');
                }
            }

            // update placeholder text
            instance._updatePlaceholderText();

            // RESET COLUMN STYLES
            optionsWrap.find('ul').css({
                'column-count': '',
                'column-gap': '',
                '-webkit-column-count': '',
                '-webkit-column-gap': '',
                '-moz-column-count': '',
                '-moz-column-gap': ''
            });

            // COLUMNIZE
            if (select.find('optgroup').length) {
                // float non grouped options
                optionsList.find('> li:not(.optgroup)').css({
                    'float': 'left',
                    width: (100 / instance.options.columns) + '%'
                });

                // add CSS3 column styles
                optionsList.find('li.optgroup').css({
                    clear: 'both'
                }).find('> ul').css({
                    'column-count': instance.options.columns,
                    'column-gap': 0,
                    '-webkit-column-count': instance.options.columns,
                    '-webkit-column-gap': 0,
                    '-moz-column-count': instance.options.columns,
                    '-moz-column-gap': 0
                });

                // for crappy IE versions float grouped options
                if (this._ieVersion() && (this._ieVersion() < 10)) {
                    optionsList.find('li.optgroup > ul > li').css({
                        'float': 'left',
                        width: (100 / instance.options.columns) + '%'
                    });
                }
            } else {
                // add CSS3 column styles
                optionsList.css({
                    'column-count': instance.options.columns,
                    'column-gap': 0,
                    '-webkit-column-count': instance.options.columns,
                    '-webkit-column-gap': 0,
                    '-moz-column-count': instance.options.columns,
                    '-moz-column-gap': 0
                });

                // for crappy IE versions float grouped options
                if (this._ieVersion() && (this._ieVersion() < 10)) {
                    optionsList.find('> li').css({
                        'float': 'left',
                        width: (100 / instance.options.columns) + '%'
                    });
                }
            }

            // update un/select all logic
            instance._updateSelectAllText();
        },

        /* UPDATE MULTISELECT CONFIG OPTIONS */
        settings: function (options) {
            this.options = $.extend(true, {}, this.options, options);
            this.reload();
        },

        /* RESET THE DOM */
        unload: function () {
            $(this.element).siblings('#ms-list-' + this.listNumber + '.ms-options-wrap').remove();
            $(this.element).show(function () {
                $(this).css('display', '').removeClass('jqmsLoaded');
            });
        },

        /* RELOAD JQ MULTISELECT LIST */
        reload: function () {
            // remove existing options
            $(this.element).siblings('#ms-list-' + this.listNumber + '.ms-options-wrap').remove();
            $(this.element).removeClass('jqmsLoaded');

            // load element
            this.load();
        },

        // RESET BACK TO DEFAULT VALUES & RELOAD
        reset: function () {
            var defaultVals = [];
            $(this.element).find('option').each(function () {
                if ($(this).prop('defaultSelected')) {
                    defaultVals.push($(this).val());
                }
            });

            $(this.element).val(defaultVals);

            this.reload();
        },

        disable: function (status) {
            status = (typeof status === 'boolean') ? status : true;
            $(this.element).prop('disabled', status);
            $(this.element).siblings('#ms-list-' + this.listNumber + '.ms-options-wrap').find('button:first-child')
            .prop('disabled', status);
        },

        /** PRIVATE FUNCTIONS **/
        // update the un/select all texts based on selected options and visibility
        _updateSelectAllText: function () {
            if (!this.updateSelectAll) {
                return;
            }

            var instance = this;

            // select all not used at all so just do nothing
            if (!instance.options.selectAll && !instance.options.selectGroup) {
                return;
            }

            var optionsWrap = $(instance.element).siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap').find('> .ms-options');

            // update un/select all text
            optionsWrap.find('.ms-selectall').each(function () {
                var unselected = $(this).parent().find('li:not(.optgroup,.selected,.ms-hidden)');

                $(this).text(
                    unselected.length ? instance.options.texts.selectAll : instance.options.texts.unselectAll);
            });
        },

        // update selected placeholder text
        _updatePlaceholderText: function () {
            if (!this.updatePlaceholder) {
                return;
            }

            var instance = this;
            var select = $(instance.element);
            var selectVals = select.val() ? select.val() : [];
            var placeholder = select.siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap').find('> button:first-child');
            var placeholderTxt = placeholder.find('span');
            var optionsWrap = select.siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap').find('> .ms-options');

            // if there are disabled options get those values as well
            if (select.find('option:selected:disabled').length) {
                selectVals = [];
                select.find('option:selected').each(function () {
                    selectVals.push($(this).val());
                });
            }

            // get selected options
            var selOpts = [];
            for (var key in selectVals) {
                // Prevent prototype methods injected into options from being iterated over.
                if (!selectVals.hasOwnProperty(key)) {
                    continue;
                }

                selOpts.push(
                    $.trim(select.find('option[value="' + instance._escapeSelector(selectVals[key]) + '"]').text()));

                if (selOpts.length >= instance.options.maxPlaceholderOpts) {
                    break;
                }
            }

            // UPDATE PLACEHOLDER TEXT WITH OPTIONS SELECTED
            placeholderTxt.text(selOpts.join(', '));

            if (selOpts.length) {
                optionsWrap.closest('.ms-options-wrap').addClass('ms-has-selections');
            } else {
                optionsWrap.closest('.ms-options-wrap').removeClass('ms-has-selections');
            }

            // replace placeholder text
            if (!selOpts.length) {
                placeholderTxt.text(instance.options.texts.placeholder);
            }
            // if copy is larger than button width use "# selected"
            else if ((placeholderTxt.width() > placeholder.width()) || (selOpts.length != selectVals.length)) {
                placeholderTxt.text(selectVals.length + instance.options.texts.selectedOptions);
            }
        },

        // Add option to the custom dom list
        _addOption: function (container, option) {
            var instance = this;
            var thisOption = $('<label/>', {
                    for : 'ms-opt-' + msOptCounter,
                    text: option.name
            });

        var thisCheckbox = $('<input>', {
                type: 'checkbox',
                title: option.name,
                id: 'ms-opt-' + msOptCounter,
                value: option.value
            });

        // add user defined attributes
        if (option.hasOwnProperty('attributes') && Object.keys(option.attributes).length) {
            thisCheckbox.attr(option.attributes);
        }

        if (option.checked) {
            container.addClass('default selected');
            thisCheckbox.prop('checked', true);
        }

        thisOption.prepend(thisCheckbox);

        var searchTerm = '';
        if (instance.options.searchOptions.searchText) {
            searchTerm += ' ' + option.name.toLowerCase();
        }
        if (instance.options.searchOptions.searchValue) {
            searchTerm += ' ' + option.value.toLowerCase();
        }

        container.attr('data-search-term', $.trim(searchTerm)).prepend(thisOption);

        msOptCounter = msOptCounter + 1;
    },

    // check ie version
    _ieVersion: function () {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    },

    // escape selector
    _escapeSelector: function (string) {
        if (typeof $.escapeSelector == 'function') {
            return $.escapeSelector(string);
        } else {
            return string.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&");
        }
    }
};

// ENABLE JQUERY PLUGIN FUNCTION
$.fn.multiselect = function (options) {
    if (!this.length) {
        return;
    }

    var args = arguments;
    var ret;

    // menuize each list
    if ((options === undefined) || (typeof options === 'object')) {
        return this.each(function () {
            if (!$.data(this, 'plugin_multiselect')) {
                $.data(this, 'plugin_multiselect', new MultiSelect(this, options));
            }
        });
    } else if ((typeof options === 'string') && (options[0] !== '_') && (options !== 'init')) {
        this.each(function () {
            var instance = $.data(this, 'plugin_multiselect');

            if (instance instanceof MultiSelect && typeof instance[options] === 'function') {
                ret = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            }

            // special destruct handler
            if (options === 'unload') {
                $.data(this, 'plugin_multiselect', null);
            }
        });

        return ret;
    }
};
}
    (jQuery));

$(document).ready(function () {
    var times = 0;

    $('.step0').click(function () {
        //alert("secrecy" + currentChordName);
        currentStep++;
        noteOnListener(0, 0);

    });
    // $('#keyboardImg2').click(function () {
    // //alert("secrecy" + currentChordName);
    // var passcode = prompt("Admin Passcode");
    // if (passcode == "4a" + currentChordName) {
    // score = prompt("set the new score") + 0;
    // if (score > 19) {
    // score = score / 10;
    // }
    // //	alert(score);
    // document.getElementById("sp").innerHTML = "Set to " + score;
    // }
    $('#keyboardImg2').click(function () {
        //alert("secrecy" + currentChordName);


        score = parseFloat(prompt("set the new score"));
        if (score > 19) {
            score = score / 10;
        }
        //	alert(score);
        document.getElementById("sp").innerHTML = "Set to " + score;

    });

});
        // $("#alertMessage").html("yo");
        // $("#my-dialog").dialog("open");
		$.noConflict();

function alertify(messageThis) {
        $("#alertMessage").html(messageThis);
        // // Show dialog
        $("#my-dialog").dialog({
            modal: true,
            autoOpen: false,
            buttons: [{
                    text: "Ok:",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]

        });
        $("#my-dialog").dialog("open");
    }
			window.onresize=function(){
			        $("#my-dialog").dialog({
			width: window.innerWidth//document.getElementById('keyboardImg2').getBoundingClientRect().left

        });
			}
			$("#alertMessage").html("");
            $("#my-dialog").dialog({
                modal: false,
                autoOpen: false,
                buttons: [{
                        text: "Hide",
                        click: function () {
                            $(this).dialog("close");
                        }
                    }
                ]

            });
			
		$("#my-dialog").dialog("close");
				$("#my-dialog").dialog({
                width: window.innerWidth //document.getElementById('keyboardImg2').getBoundingClientRect().left

            });
			getInfo=function(){
countChordTypesSelected();

    $("#my-dialog").dialog("open");
}