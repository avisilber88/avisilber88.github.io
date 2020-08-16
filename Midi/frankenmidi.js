var selectedNotesArray=[];
var resetpianoroll=false;
var accessibleNotesList=[];	
var mouselastpos;
var erasingRightClick=false;
var windowresized=false;
var answerRevealed=false;
// Variable which tell us what step of the game we're on.
// We'll use this later when we parse noteOn/Off messages
var inversions = false;
var inversionAddOn = "";
var pickedInversion = 0;
var currentStep = -1;
var score = 1;
var octaveSetting = 24;
// Timer length
var timerLength = 10 / 60; // in minutes
var timerTripped = false;
// Lock 1 variables
var correctNoteSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Amazing Grace in F
var activeNoteSequence = [];

// Lock 2 variables
var correctChord = [11, 4, 5, 7, 15]; // C7 chord starting on middle C
var activeChord = [];
var specificActiveChord = [];
var currentChordName = "Wait for the first chord";
var bassMatched = 0;
var currentImageName = "Blank Keyboard.jpeg"
    var slashRoot = 0;
var presentationType = "words"
    //document.getElementById("ez5").addEventListener(select

var revealanswer=false;
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
var isFlat = false;

    document.getElementById("dropdown").addEventListener("change", function () {
        //	alert("got");
        if (score > 4) {
            score = score - 3;
            document.getElementById("sp").innerHTML = " ";
        }

        resetChord();
    });

var noteArray = [
    [32.703, "C1", "C1"], //0
    [34.648, "C1#", "C2b"],
    [36.708, "D1", "D1"],
    [38.891, "D1#", "E1b"],
    [41.203, "E1", "E1"],
    [43.654, "F1", "F1"],
    [46.249, "F1#", "G1b"],
    [48.999, "G1", "G1"],
    [51.913, "G1#", "A1b"],
    [55, "A1", "A1"], //9, Avi says this is our first note that we have audio for
    [58.27, "A1#", "B1b"], //10
    [61.735, "B1", "B1"], //11
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
    [123.47, "B2", "B2"],
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
    [246.94, "B3", "B3"],
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
    [493.88, "B4", "B4"],
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
    [987.77, "B5", "B5"],
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
// sheetButton.click();
// sheetButton.click();
checkThisAnswer=function (specificOtherArray, anotherLocalArray){
if ((anotherLocalArray.length == correctChord.length)||(answerRevealed)) {
            var match = true;
            for (var index = 0; index < anotherLocalArray.length; index++) {
                if (correctChord.indexOf(anotherLocalArray[index]) < 0) {
                    match = false;
                    break;
                }
            }
			// IF WE EVER WANT INVERSIONS WE SHOULD REINTRODUCE THIS BELOW AREA OF CODE
            if ((inversions) & (arrangeNote(specificOtherArray[0]) != correctChord[pickedInversion])) {
                match = false;
                document.getElementById("warning").innerHTML = "<style='fontSize:15px;'>Remember, Your root note should be " + getNoteNameGeneral(correctChord[pickedInversion]); //(arrangeNote(specificActiveChord[0]));
            }
            document.getElementById("score").innerHTML = "Current Difficulty = " + score.toFixed(2);
            if ((match)||(answerRevealed)) {
                rightAnswer();
                document.getElementById("warning").innerHTML = "<style='fontSize:0px;'>"
				if (!answerRevealed){
                    score = score + .25;
				}
				else{
				answerRevealed=false;
				}
					// alert(correctChord.length);
                timerLength = (11.0 - score/correctChord.length) / 60.0;
				resetpianoroll=true;
				
				document.getElementById('proll').resetPianoRoll();
                document.getElementById("score").innerHTML = "Current Score = " + score.toFixed(2);
                runSequence('lock2');
                document.getElementById("keyboardImg2").src = "Blank Keyboard.jpeg";
                //	currentStep--;
            } else {
				
                score = score - .25;
                document.getElementById("score").innerHTML = "Current Score = " + score.toFixed(2);

                document.getElementById("keyboardImg2").src = currentImageName + ".jpeg";
                var lockInput = document.querySelector('.step2 .lock-input');

                lockInput.classList.add('error');
                window.setTimeout(function () {
                    lockInput.classList.remove('error');
                }, 500);
            }
        }
		else{
			if (correctChord.length>1){
			document.getElementById("warning").innerHTML = "<style='fontSize:15px;'>Remember, there should be " + correctChord.length+" notes in this chord"; //(arrangeNote(specificActiveChord[0]));
			}
			else{ 
			document.getElementById("warning").innerHTML = "<style='fontSize:15px;'>Remember, there should only be " + correctChord.length+" note in this chord"; //(arrangeNote(specificActiveChord[0]));
		
			}
		}
}
arrangeNoteArray= function (arrayOfNotesLocal){
let localArray=[];
for (let counsing = 0; counsing<arrayOfNotesLocal.length; counsing++){
localArray.push(arrangeNote(arrayOfNotesLocal[counsing]));
}
console.warn(localArray.toString());
return localArray;
}


playAnArray = function (arrayOfNotesLocal){
for (let counsing = 0; counsing<arrayOfNotesLocal.length; counsing++){
playANote(arrayOfNotesLocal[counsing]);
}
}

playANote = function (note){
	
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

        beatCount = durationNoteSelectEight(localBeatCount);
        wholesToTieAtTheBeginning = Math.floor(beatCount / 8);
        beatCount = beatCount % 8;
        //the code below is for 1/8 where each case is the numerator
        switch (beatCount) {
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
    }, 5000);
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

function showNotes(arrayOfNotes) {
    // let noteStr = noteArray[arrayOfNotes[0]+24][1];
    // let partOne = noteStr.slice(0, 1) + '';
    // let partTwo = noteStr.slice(+2) + '';
    // let partThree = noteStr.slice(1, 2) + '';
    // // alert (partOne+" "+partTwo+" "+partThree+" ");
    // noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
    // alert(arrayOfNotes.length);
    let octaveAdder = octaveSetting;
    if (pickedInversion != 0) {

        octaveAdder = octaveSetting + 12; ;
    }
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
            if (pickedInversion == i) {
                // alert("yo" + pickedInversion);
                // makeAndShowANote((arrayOfNotes[i] + octaveAdder - 12) + '', '2', "referenceNote");
            } else {
                // makeAndShowANote(arrayOfNotes[i] + octaveAdder, '2', "referenceNote");
            }
        } else {
            // makeAndShowANote(arrayOfNotes[i] + octaveAdder, '2', "referenceNote");
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
    console.log("The Note Message has " + noteArrayNum + " " + voiceType + " " + theNoteLength);
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
        console.log(theNoteLength);
        theNoteLength = durationNoteSelect(theNoteLength);
        console.log(theNoteLength);
        var lastImageNote = currentImageNote;
        var currentImageNote = notes[0];
        var currentSecondImageNote = note2[0];
        var currentWholeImageNote = noteWhole[0];

        let noteStr = noteArray[noteArrayNum][1];
        if (currentChordName.includes('b')) {
            noteStr = noteArray[noteArrayNum][2];
        }
        // noteStr='E5';
        // alert (noteStr);
        let partOne = noteStr.slice(0, 1) + '';
        let partTwo = noteStr.slice(+2) + '';
        let partThree = noteStr.slice(1, 2) + '';
        // alert (partOne+" "+partTwo+" "+partThree+" ");
        noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
        //Start AREA OF TIES!


        if (wholesToTieAtTheBeginning > 0) {
            if (noteArrayNum >= 36) {
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
            }
        }
        if (tieOn) {
            console.log("tie on");
            if (noteArrayNum >= 36) {
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

            console.log("tie off");
            //END AREA OF TIES!


            //Start AREA OF NO TIES!
            if (noteArrayNum >= 36) {
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
                visibleTargetNoteGroups[0].classList.add('correct');
                visibleTargetNoteGroups.shift();
                // visibleTargetNoteGroups[rememberTargetGroup].classList.add('correct');

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
                // visibleSingingNoteGroups[rememberSingingGroup].classList.add('correct');
                visibleSingingNoteGroups[0].classList.add('correct');
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
        console.log(voiceType);
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
        let startingSetX = 400 - wholesToTieAtTheBeginning * 25;
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
        tickContext.preFormat().setX(startingSetX);
        currentImageNote.draw();
        if (tieOn) {
            tickContext.preFormat().setX(startingSetX + 25);
            currentSecondImageNote.draw();
            tiedNote = new VF.StaveTie({
                    first_note: currentImageNote,
                    last_note: currentSecondImageNote,
                    first_indices: [0],
                    last_indices: [0]
                })

                tickContext.preFormat().setX(startingSetX + 12);
            tiedNote.setContext(context).draw();
        }
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
                visibleReferenceNoteGroups.shift();
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


        }, 10000);
    }
}

function rightAnswer() {
    try {
        for (var i = 0; i < visibleReferenceNoteGroups.length; i = 0) {
            group = visibleReferenceNoteGroups.shift();
            group.classList.add('correct');
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
            group.style.transform = `translate(${x}px, -800px)`;
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
        resetChord();
    });
});

//$("#ez5").change(resetChord());

function resetChord() {

    //alert ("done");
    clearChord();
    newChord();
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
        }

        if (activeChord.includes(arrangeNote(note)) == false) { //4/9/2020 I think I may need to add a new activeChordlisting that includes the actual note and not just the arrangenote, so I can be certain the note order in addition here. Avi
            activeChord.push(arrangeNote(note));
            console.log(arrangeNote(specificActiveChord[0]));
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

        // If the array is the same length as the correct chord, compare
        if (activeChord.length == correctChord.length) {
            var match = true;
            for (var index = 0; index < activeChord.length; index++) {
                if (correctChord.indexOf(activeChord[index]) < 0) {
                    match = false;
                    break;
                }
            }

            if ((inversions) & (arrangeNote(specificActiveChord[0]) != correctChord[pickedInversion])) {
                match = false;
                document.getElementById("warning").innerHTML = "<style='fontSize:15px;'>Remember, Your root note should be " + getNoteNameGeneral(correctChord[pickedInversion]); //(arrangeNote(specificActiveChord[0]));
            }
            document.getElementById("score").innerHTML = "Current Difficulty = " + score.toFixed(2);
            if (match) {
                rightAnswer();
                document.getElementById("warning").innerHTML = "<style='fontSize:0px;'>"
                    score = score + .05;
                timerLength = (11.0 - score) / 60.0;
                document.getElementById("score").innerHTML = "Current Score = " + score.toFixed(2);
                runSequence('lock2');
                document.getElementById("keyboardImg2").src = "Blank Keyboard.jpeg";
                //	currentStep--;
            } else {
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
    startTimer();

    document.querySelector('.hint').innerHTML = "You lose...";
}

function clearChord() {
    // Clear the array and start over
    var lockInput = document.querySelector('.step2 .lock-input');
    startTimer();
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

    switch (sequence) {
    case 'gamestart':
        // Now we'll start a countdown timer...
        startTimer();

        // code to trigger animations, give a clue for the first lock
        advanceScreen();
        successFlicker();
        advanceScreen();
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
        clearChord();
        //document.querySelector('.step3 p').innerHTML = "You lose...";
        successFlicker();
        newChord();

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
    document.getElementById("keyboardImg2").src = "Blank Keyboard.jpeg";
    var thisChord = Math.floor(Math.random() * 24) + 1;
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
    setupChord(fixNote(thisChord));
}

function setupChord(rootNote) {
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

    switch (chordType) {
    case "justNotes":
        currentChordName = currentChordName + " Note";

        currentImageName = currentImageName + " Note";
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
    rightAnswer();
    // alert(correctChord.toString());
    // showNotes(correctChord);
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
        currentChordName = "i in A";
        currentImageName = "i in A";
        rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 12:
        currentChordName = "III in A"
            currentImageName = "III in A"
            rN = fixNote(rN);
        rN = fixNote(rN);
        var third = fixNote(rN + 4);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 2:
        currentChordName = "iv in A"
            currentImageName = "iv in A"
            rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 4:
        currentChordName = "v in A"
            currentImageName = "v in A"
            rN = fixNote(rN);
        var third = fixNote(rN + 3);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 5:
        currentChordName = "VI in A"
            currentImageName = "VI in A"
            rN = fixNote(rN);
        var third = fixNote(rN + 4);
        var fifth = fixNote(rN + 7);
        correctChord = [rN, third, fifth];
        break;
    case 7:
        currentChordName = "VII in A"
            currentImageName = "VII in A"
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

function startTimer() {
    // set timer for 60 minutes from start
    var now = new Date();
    timeEnd = new Date(now.getTime() + (timerLength * 60 * 1000) - 1);

    updateTimer();
}
/**
 * Function to update the time remaining every second
 */
function updateTimer() {
    var now = new Date();
    var distance = timeEnd.getTime() - now.getTime();
    var minutes = Math.floor(distance / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    if (currentStep < 3) {
        let countdownMessage = minutes + ":" + seconds;
        if (presentationType == "words") {
            countdownMessage = countdownMessage + " " + currentChordName;
        }
        document.querySelector('#countdown').innerText = countdownMessage;

        if (minutes > 0 || seconds > 0) {
            window.setTimeout(function () {
                updateTimer();
            }, 1000);
        } else if (minutes == 0 && seconds == 0) {
            runSequence('gameover');
        }
    }
}

/* Piano keyboard pitches. Names match sound files by ID attribute. */

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

customElements.define("webaudio-pianoroll", class Pianoroll extends HTMLElement {
    constructor(){
        super();
    }
    defineprop(){
        const plist=this.module.properties;
        for(let k in plist){
            const v = plist[k];
            this["_"+k] = this.getAttr(k,v.value);
            Object.defineProperty(this, k, {
                get:()=>{return this["_"+k]},
                set:(val)=>{
                    this["_"+k] = val;
                    if(typeof(this[v.observer])=="function")
                        this[v.observer]();
                }
            });
        }        
    }
    connectedCallback(){
        let root;
//        if(this.attachShadow)
//          root=this.attachShadow({mode: 'open'});
//        else
          root=this;
        this.module = {
            is:"webaudio-pianoroll",
            properties:{
                width:              {type:Number, value:640, observer:'layout'},
                height:             {type:Number, value:320, observer:'layout'},
                timebase:           {type:Number, value:1, observer:'layout'},
                editmode:           {type:String, value:"dragpoly"},
                xrange:             {type:Number, value:1, observer:'layout'},
                yrange:             {type:Number, value:16, observer:'layout'},
                xoffset:            {type:Number, value:0, observer:'layout'},
                yoffset:            {type:Number, value:60, observer:'layout'},
                grid:               {type:Number, value:1},
                snap:               {type:Number, value:1},
                wheelzoom:          {type:Number, value:0},
                wheelzoomx:         {type:Number, value:0},
                wheelzoomy:         {type:Number, value:0},
                xscroll:            {type:Number, value:0},
                yscroll:            {type:Number, value:0},
                gridnoteratio:      {type:Number, value:.5, observer:'updateTimer'},
                xruler:             {type:Number, value:24, observer:'layout'},
                yruler:             {type:Number, value:24, observer:'layout'},
                octadj:             {type:Number, value:-1},
                cursor:             {type:Number, value:0, observer:'redrawMarker'},
                markstart:          {type:Number, value:0, observer:'redrawMarker'},
                markend:            {type:Number, value:16, observer:'redrawMarker'},
                defvelo:            {type:Number, value:100},
                collt:              {type:String, value:"#ccc"},
                coldk:              {type:String, value:"#aaa"},
                colgrid:            {type:String, value:"#666"},
                colnote:            {type:String, value:"#f22"},
                colnotesel:         {type:String, value:"#0f0"},
                colnoteborder:      {type:String, value:"#000"},
                colnoteselborder:   {type:String, value:"#fff"},
                colrulerbg:         {type:String, value:"#666"},
                colrulerfg:         {type:String, value:"#fff"},
                colrulerborder:     {type:String, value:"#000"},
                colselarea:         {type:String, value:"rgba(0,0,0,0.3)"},
                bgsrc:              {type:String, value:null, observer:'layout'},
                cursorsrc:          {type:String, value:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4NCjxwYXRoIGZpbGw9InJnYmEoMjU1LDEwMCwxMDAsMC44KSIgZD0iTTAsMSAyNCwxMiAwLDIzIHoiLz4NCjwvc3ZnPg0K"},
                cursoroffset:       {type:Number, value:0},
                markstartsrc:       {type:String, value:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCjxwYXRoIGZpbGw9IiMwYzAiIGQ9Ik0wLDEgMjQsMSAwLDIzIHoiLz4NCjwvc3ZnPg0K"},
                markstartoffset:    {type:Number, value:0},
                markendsrc:         {type:String, value:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCjxwYXRoIGZpbGw9IiMwYzAiIGQ9Ik0wLDEgMjQsMSAyNCwyMyB6Ii8+DQo8L3N2Zz4NCg=="},
                markendoffset:      {type:Number, value:-24},
                kbsrc:              {type:String, value:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSI0ODAiPg0KPHBhdGggZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBkPSJNMCwwIGgyNHY0ODBoLTI0eiIvPg0KPHBhdGggZmlsbD0iIzAwMCIgZD0iTTAsNDAgaDEydjQwaC0xMnogTTAsMTIwIGgxMnY0MGgtMTJ6IE0wLDIwMCBoMTJ2NDBoLTEyeiBNMCwzMjAgaDEydjQwaC0xMnogTTAsNDAwIGgxMnY0MGgtMTJ6Ii8+DQo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIGQ9Ik0wLDYwIGgyNCBNMCwxNDAgaDI0IE0wLDIyMCBoMjQgTTAsMjgwIGgyNCBNMCwzNDAgaDI0IE0wLDQyMCBoMjQiLz4NCjwvc3ZnPg0K", observer:'layout'},
                kbwidth:            {type:Number, value:80},
                loop:               {type:Number, value:0},
                preload:            {type:Number, value:1.0},
                tempo:              {type:Number, value:120, observer:'updateTimer'},
                enable:             {type:Boolean, value:true},
            },
        };
        this.defineprop();
        root.innerHTML =
`<style>
.pianoroll{
    background:#ccc;
}
:host {
    user-select: none;
    display: inline-block;
    font-family: sans-serif;
    font-size: 11px;
    padding:0;
    margin:0;
}
#wac-body {
    position: relative;
    margin:0;
    padding:0;
    width: 50%;
    height: 100%;
    overflow: hidden;
}
#wac-pianoroll {
    cursor: pointer;
    margin:0;
    padding:0;
    width: 50%;
    height: 100%;
    background-position:left bottom;
}
#wac-menu {
    display:none;
    position:absolute;
    top:0px;
    left:0px;
    background:#eef;
    color:#000;
    padding:2px 10px;
    border:1px solid #66f;
    border-radius: 4px;
    cursor:pointer;
}
.marker{
    position: absolute;
    left:0px;
    top:0px;
    cursor:ew-resize;
}
#wac-kb{
    position:absolute;
    left:0px;
    top:0px;
    width:100px;
    height:100%;
    background: repeat-y;
    background-size:100% calc(100%*12/16);
    background-position:left bottom;
}
</style>
<div class="wac-body" id="wac-body" touch-action="none">
<canvas id="wac-pianoroll" touch-action="none" tabindex="0" style="width:600px!important"></canvas>
<div id="wac-kb"></div>
<img id="wac-markstart" class="marker" src="${this.markstartsrc}"/>
<img id="wac-markend" class="marker" src="${this.markendsrc}"/>
<img id="wac-cursor" class="marker" src="${this.cursorsrc}"/>
<div id="wac-menu">Delete</div>
</div>`;
// this.width=600;

		setInterval(this.checkMenu, 500);
        this.sortSequence=function(){
            this.sequence.sort((x,y)=>{return x.t-y.t;});
        };
        this.findNextEv=function(tick){
			
            for(let i=0;i<this.sequence.length;++i){
                const nev=this.sequence[i];
                if(nev.t>=this.markend)
                    return {t1:tick,n2:this.markend,dt:this.markend-tick,i:-1};
                if(nev.t>=tick)
                    return {t1:tick,t2:nev.t,dt:nev.t-tick,i:i};
            }
            return {t1:tick,t2:this.markend,dt:this.markend-tick,i:-1};
        };
        this.locate=function(tick){
            this.cursor=tick;
        };
        this.updateTimer=function(){
            this.tick2time=4*60/this.tempo/this.timebase;
        };
        this.play=function(actx,playcallback,tick){
            function Interval(){
                const current=this.actx.currentTime;
                while(this.timestack.length>1 && current>=this.timestack[1][0]){
                    this.timestack.shift();
                }
                this.cursor=this.timestack[0][1]+(current-this.timestack[0][0])/this.timestack[0][2];
                this.redrawMarker();
                while(current+this.preload>=this.time1){
                    this.time0=this.time1;
                    this.tick0=this.tick1;
                    let e=this.sequence[this.index1];
                    if(!e || e.t>=this.markend){
                        this.timestack.push([this.time1,this.markstart,this.tick2time]);
                        const p=this.findNextEv(this.markstart);
                        this.time1+=p.dt*this.tick2time;
                        this.index1=p.i;
                    }
                    else{
                        this.tick1=e.t;
                        this.timestack.push([this.time1,e.t,this.tick2time]);
                        let gmax=Math.min(e.t+e.g,this.markend)-e.t;
                        if(this.editmode=="gridmono"||this.editmode=="gridpoly")
                            gmax*=this.gridnoteratio;
                        const cbev={t:this.time1,g:this.time1+gmax*this.tick2time,n:e.n};
						console.warn(gmax+" "+e.t+" "+e.n);
                        if(this.playcallback)
                            this.playcallback(cbev);
                        e=this.sequence[++this.index1];
                        if(!e || e.t>=this.markend){
                            this.time1+=(this.markend-this.tick1)*this.tick2time;
                            const p=this.findNextEv(this.markstart);
                            this.timestack.push([this.time1,this.markstart,this.tick2time]);
                            this.time1+=p.dt*this.tick2time;
                            this.index1=p.i;
                        }
                        else
                            this.time1+=(e.t-this.tick1)*this.tick2time;
                    }
                }
            }
            if(typeof(tick)!="undefined")
                this.locate(tick);
            if(this.timer!=null)
                return;
            this.actx=actx;
            this.playcallback=playcallback;
            this.timestack=[];
            this.time0=this.time1=this.actx.currentTime+0.1;
            this.tick0=this.tick1=this.cursor;
            this.tick2time=4*60/this.tempo/this.timebase;
            const p=this.findNextEv(this.cursor);
            this.index1=p.i;
            this.timestack.push([0,this.cursor,0]);
            this.timestack.push([this.time0,this.cursor,this.tick2time]);
            this.time1+=p.dt*this.tick2time;
            if(p.i<0)
                this.timestack.push([this.time1,this.markstart,this.tick2time]);
            else
                this.timestack.push([this.time1,p.t1,this.tick2time]);
            this.timer=setInterval(Interval.bind(this),25);
        };
        this.stop=function(){
            if(this.timer)
                clearInterval(this.timer);
            this.timer=null;
        };
        this.setMMLString=function(s){
            this.sequence=[];
            let i,l,n,t,defo,defl,tie,evlast;
            const parse={s:s,i:i,tb:this.timebase};
            function getNum(p){
                var n=0;
                while(p.s[p.i]>="0"&&p.s[p.i]<="9"){
                    n=n*10+parseInt(p.s[p.i]);
                    ++p.i;
                }
                return n;
            }
            function getLen(p){
                var n=getNum(p);
                if(n==0)
                    n=defl;
                n=p.tb/n;
                var n2=n;
                while(p.s[p.i]=="."){
                    ++p.i;
                    n+=(n2>>=1);
                }
                return n;
            }
            function getNote(p){
                switch(p.s[p.i]){
                case "c": case "C": n=0; break;
                case "d": case "D": n=2; break;
                case "e": case "E": n=4; break;
                case "f": case "F": n=5; break;
                case "g": case "G": n=7; break;
                case "a": case "A": n=9; break;
                case "b": case "B": n=11; break;
                default:
                    n=-1;
                }
                ++p.i;
                if(n<0)
                    return -1;
                for(;;){
                    switch(p.s[p.i]){
                    case "-": --n; break;
                    case "+": ++n; break;
                    case "#": ++n; break;
                    default:
                        return n;
                    }
                    ++p.i;
                }
            }
            defo=4;
            defl=8;
            t=0;
            tie=0;
            evlast=null;
            for(parse.i=0;parse.i<parse.s.length;){
                switch(parse.s[parse.i]){
                case '>':
                    ++parse.i; ++defo; n=-1; l=0;
                    break;
                case '<':
                    ++parse.i; --defo; n=-1; l=0;
                    break;
                case '&': case '^':
                    ++parse.i; tie=1; n=-1; l=0;
                    break;
                case 't': case 'T':
                    ++parse.i; n=-1; l=0;
                    this.tempo=getNum(parse);
                    break;
                case 'o': case 'O':
                    ++parse.i; n=-1; l=0;
                    defo=getNum(parse);
                    break;
                case 'l': case 'L':
                    ++parse.i; n=-1; l=0;
                    defl=getNum(parse);
                    break;
                case 'r': case 'R':
                    ++parse.i; n=-1;
                    l=getLen(parse);
                    break;
                default:
                    n=getNote(parse);
                    if(n>=0)
                        l=getLen(parse);
                    else
                        l=0;
                    break;
                }
				
                if(n>=0){
                    n=(defo-this.octadj)*12+n;
                    if(tie && evlast && evlast.n==n){
                        evlast.g+=l;
                        tie=0;
                    }
                    else
                        this.sequence.push(evlast={t:t,n:n,g:l,f:0});
                }
                t+=l;
            }
            this.redraw();
        };
        this.getMMLString=function(){
            function makeNote(n,l,tb){
                var mmlnote="";
                var ltab=[
                    [960,"1"],[840,"2.."],[720,"2."],[480,"2"],
                    [420,"4.."],[360,"4."],[240,"4"],
                    [210,"8.."],[180,"8."],[120,""],
                    [105,"16.."],[90,"16."],[60,"16"],
                    [45,"32."],[30,"32"],[16,"60"],[15,"64"],
                    [8,"120"],[4,"240"],[2,"480"],[1,"960"]
                ];
                l=l*960/tb;
                while(l>0){
                    for(let j=0;j<ltab.length;++j){
                        while(l>=ltab[j][0]){
                            l-=ltab[j][0];
                            mmlnote+="&"+n+ltab[j][1];
                        }
                    }
                }
                return mmlnote.substring(1);
            }
            var mml="t"+this.tempo+"o4l8";
            var ti=0,meas=0,oct=5,n;
            var notes=["c","d-","d","e-","e","f","g-","g","a-","a","b-","b"];
            for(let i=0;i<this.sequence.length;++i) {
				
                var ev=this.sequence[i];
                if(ev.t>ti) {
                    var l=ev.t-ti;
                    mml+=makeNote("r",l,this.timebase);
                    ti=ev.t;
                }
                var n=ev.n;  // notes
                if(n<oct*12||n>=oct*12+12){
                    oct=(n/12)|0;
                    mml+="o"+(oct+this.octadj);
                }
                n=notes[n%12];
				console.warn(n);
                var l=ev.g;
                if(i+1<this.sequence.length) {
                    var ev2=this.sequence[i+1];
                    if(ev2.t<ev.t+l) {
                        l=ev2.t-ev.t;
                        ti=ev2.t;
                    }
                    else
                        ti=ev.t+ev.g;
                }
                else
                    ti=ev.t+ev.g;
                mml+=makeNote(n,l,this.timebase);
            }
            return mml;
        };
        this.hitTest=function(pos){
            const ht={t:0,n:0,i:-1,m:" "};
            const l=this.sequence.length;
            if(pos.t==this.menu){
                ht.m="m";
                return ht;
            }
            ht.t=(this.xoffset+(pos.x-this.yruler-this.kbwidth)/this.swidth*this.xrange);
            ht.n=this.yoffset-(pos.y-this.height)/this.steph;
            if(pos.y>=this.height || pos.x>=this.width){
                return ht;
            }
            if(pos.y<this.xruler){
                ht.m="x";
                return ht;
            }
            if(pos.x<this.yruler+this.kbwidth){
                ht.m="y";
                return ht;
            }
            for(let i=0;i<l;++i){
                const ev=this.sequence[i];
                if((ht.n|0)==ev.n){
                    if(ev.f && Math.abs(ev.t-ht.t)*this.stepw<8){
                        ht.m="B";
                        ht.i=i;
                        return ht;
                    }
                    if(ev.f && Math.abs(ev.t+ev.g-ht.t)*this.stepw<8){
                        ht.m="E";
                        ht.i=i;
                        return ht;
                    }
                    if(ht.t>=ev.t&&ht.t<ev.t+ev.g){
                        ht.i=i;
                        if(this.sequence[i].f)
                            ht.m="N";
                        else
                            ht.m="n";
                        return ht;
                    }
                }
            }
            ht.m="s";
            return ht;
        };
        this.addNote=function(t,n,g,v,f){
			
            if(t>=0 && n>=0 && n<128){
				
                const ev={t:t,c:0x90,n:n,g:g,v:v,f:f};
                this.sequence.push(ev);
                this.sortSequence();
                this.redraw();
                return ev;
            }
            return null;
        };
        this.selAreaNote=function(t1,t2,n1,n2){
            let t, i=0, e=this.sequence[i];
            if(n1>n2)
                t=n1,n1=n2,n2=t;
            if(t1>t2)
                t=t1,t1=t2,t2=t;
            while(e){
                if(e.t>=t1 && e.t<t2 && e.n>=n1 && e.n <= n2)
                    e.f=1;
                else{
					
                    // e.f=0;
				}
                e=this.sequence[++i];
            }
        };
        this.delNote=function(idx){
            this.sequence.splice(idx,1);
				accessibleNotesList=[]
					    for (var coun=0; coun<this.sequence.length; coun++){
				console.warn(this.sequence[coun].n);
				accessibleNotesList.push(this.sequence[coun].n);
				
			}
            this.redraw();
        };
        this.delAreaNote=function(t,g,n){
            const l=this.sequence.length;
            for(let i=l-1;i>=0;--i){
                const ev=this.sequence[i];
                if(typeof(n)!="undefined" && n!=i){
                    if(t<=ev.t && t+g>=ev.t+ev.g){
                        this.sequence.splice(i,1);
							accessibleNotesList=[]
					    for (var coun=0; coun<this.sequence.length; coun++){
				console.warn(this.sequence[coun].n);
				accessibleNotesList.push(this.sequence[coun].n);
				
			}
                    }
                    else if(t<=ev.t && t+g>ev.t && t+g<ev.t+ev.g){
                        ev.g=ev.t+ev.g-(t+g);
                        ev.t=t+g;
                    }
                    else if(t>=ev.t && t<ev.t+ev.g && t+g>=ev.t+ev.g){
                        ev.g=t-ev.t;
                    }
                    else if(t>ev.t && t+g<ev.t+ev.g){
                        this.addNote(t+g,ev.n,ev.t+ev.g-t-g,this.defvelo);
                        ev.g=t-ev.t;
                    }
                }
            }
        };
        this.delSelectedNote=function(){
            const l=this.sequence.length;
			let eraseThemAll=false;
            for(let i=l-1;i>=0;--i){
                const ev=this.sequence[i];
				console.warn(ev.f);
                if(true){
					if (selectedNotesArray.includes(ev.n)){
						selectedNotesArray.splice(selectedNotesArray.indexOf(ev.n), 1)
						console.warn(selectedNotesArray.toString());
					}
					if (ev.n==mouselastpos){
                    this.sequence.splice(i,1);
					if (ev.f){
					eraseThemAll=true;
					}
					}
				}
				
				
            }
			const k=this.sequence.length;
			if (eraseThemAll){
			 for(let i=k-1;i>=0;--i){
                const ev=this.sequence[i];
				console.warn(ev.f);
                if(ev.f){
                    this.sequence.splice(i,1);
				}
				
				
            }
			}
			accessibleNotesList=[]
					    for (var coun=0; coun<this.sequence.length; coun++){
						console.warn(this.sequence[coun].n);
					accessibleNotesList.push(this.sequence[coun].n);
				
					}
        };
		
		this.delAllNotes=function(){
			// alert("yo");
            const l=this.sequence.length;
            for(let i=l-1;i>=0;--i){
                const ev=this.sequence[i];
				// console.warn(ev.f);
                if(true){
					// if (ev.n==mouselastpos){
                    this.sequence.splice(i,1);
						accessibleNotesList=[]
					    for (var coun=0; coun<this.sequence.length; coun++){
				// console.warn(this.sequence[coun].n);
				accessibleNotesList.push(this.sequence[coun].n);
						}
			}
					// }
				// }
            }
			resetpianoroll=false;
			// redraw();
        };
		
		
        this.moveSelectedNote=function(dt,dn){
            const l=this.sequence.length;
            for(let i=0;i<l;++i){
                const ev=this.sequence[i];
                if(ev.f && ev.ot+dt<0)
                    dt=-ev.ot;
            }
            for(let i=0;i<l;++i){
                const ev=this.sequence[i];
                if(ev.f){
                    ev.t=(((ev.ot+dt)/this.snap+.5)|0)*this.snap;
                    ev.n=ev.on+dn;
                }
            }
        };
        this.clearSel=function(){
            const l=this.sequence.length;
            for(let i=0;i<l;++i){
                this.sequence[i].f=0;
            }
        };
        this.selectedNotes=function(){
            let obj=[];
            for(let i = this.sequence.length - 1; i >= 0; --i){
                const ev=this.sequence[i];
                if(ev.f)
                    obj.push({i:i, ev:ev, t:ev.t, g:ev.g});
            }
            return obj;
        };
        this.editDragDown=function(pos){
            const ht=this.hitTest(pos);
			
            let ev;
            if(ht.m=="N"){
                ev=this.sequence[ht.i];
                this.dragging={o:"D",m:"N",i:ht.i,t:ht.t,n:ev.n,dt:ht.t-ev.t};
                for(let i=0,l=this.sequence.length;i<l;++i){
                    ev=this.sequence[i];
                    if(ev.f)
                        ev.on=ev.n, ev.ot=ev.t, ev.og=ev.g;
                }
                this.redraw();
            }
            else if(ht.m=="n"){
                ev=this.sequence[ht.i];
                this.clearSel();
				// alert("yo");
                ev.f=1;
                this.redraw();
            }
            else if(ht.m=="E"){
                const ev = this.sequence[ht.i];
				
                this.dragging={o:"D", m:"E", i:ht.i, t:ev.t, g:ev.g, ev:this.selectedNotes()};
          
		   }
            else if(ht.m=="B"){
                const ev = this.sequence[ht.i];
				
                this.dragging={o:"D", m:"B", i:ht.i, t:ev.t, g:ev.g, ev:this.selectedNotes()};

            }
            else if(ht.m=="s"&&ht.t>=0){
				// alert ("yo3");
                this.clearSel();
                var t=((ht.t/this.snap)|0)*this.snap;
                this.sequence.push({t:t, n:ht.n|0, g:1, f:1});
                this.dragging={o:"D",m:"E",i:this.sequence.length-1, t:t, g:1, ev:[{t:t,g:1,ev:this.sequence[this.sequence.length-1]}]};
                this.redraw();
				accessibleNotesList=[]
					    for (var coun=0; coun<this.sequence.length; coun++){
				console.warn(this.sequence[coun].n);
				accessibleNotesList.push(this.sequence[coun].n);
				
			}
            }
        };
        this.editDragMove=function(pos){
            const ht=this.hitTest(pos);
			// console.error(ht.m);
			// console.error(this.dragging.o);
            let ev,t;
            if(this.dragging.o=="D"){
                switch(this.dragging.m){
                case "E":
                    if(this.dragging.ev){
                        const dt=((Math.max(0,ht.t)/this.snap+0.9)|0)*this.snap - this.dragging.t - this.dragging.g;
                        const list=this.dragging.ev;
                        for(let i = list.length - 1; i >= 0; --i){
                            const ev = list[i].ev;
                            ev.g = list[i].g + dt;
                            if(ev.g <= 0)
                                ev.g = 1;
                            if(this.editmove=="dragmono")
                                this.delAreaNote(ev.t,ev.g);
                        }

                    }
                    this.redraw();
                    break;
                case "B":
                    if(this.dragging.ev){
                        const dt=((Math.max(0,ht.t)/this.snap+0.9)|0)*this.snap - this.dragging.t;
                        const list=this.dragging.ev;
                        for(let i = list.length - 1; i >= 0; --i){
                            const ev = list[i].ev;
                            ev.t = list[i].t + dt;
                            ev.g = list[i].g - dt;
                            if(ev.g <= 0)
                                ev.g = 1;
                            if(this.editmove=="dragmono")
                                this.delAreaNote(ev.t,ev.g);
                        }

                    }
                    this.redraw();
                    break;

                ev=this.sequence[this.dragging.i];
                    t=((Math.max(0,ht.t)/this.snap+0.5)|0)*this.snap;
                    ev.g=ev.t+ev.g-t;
                    ev.t=t;
                    if(ev.g<0){
                        ev.t+=ev.g;
                        ev.g=-ev.g;
                        this.dragging.m="E";
                    }
                    else if(ev.g==0){
                        ev.t=t-1;
                        ev.g=1;
                    }
                    this.redraw();
                    break;
                case "N":
                    ev=this.sequence[this.dragging.i];
                    this.moveSelectedNote((ht.t-this.dragging.t)|0, (ht.n|0)-this.dragging.n);
                    this.redraw();
                    break;
				 }
            }
				// console.error(this.sequence[this.dragging.i].n1);
					// ev=this.sequence[this.dragging.i];
					// ev.f=1;
					// this.redraw();
			accessibleNotesList=[]
					    for (var coun=0; coun<this.sequence.length; coun++){
				// console.warn(this.sequence[coun].n);
				accessibleNotesList.push(this.sequence[coun].n);
				
			}
        };
		
		this.resetPianoRoll=function(){
		if (resetpianoroll){		
				
                this.delAllNotes();
				this.redraw();
				resetpianoroll=false;
			}
		}
        this.editGridDown=function(pos){
            const ht=this.hitTest(pos);
            if(ht.m=="n"){
				
                this.delNote(ht.i);
                this.dragging={o:"G",m:"0"};
            }
            else if(ht.m=="s"&&ht.t>=0){
                const pt=Math.floor(ht.t);
                if(this.editmode=="gridmono")
                    this.delAreaNote(pt,1,ht.i);
                this.addNote(pt,ht.n|0,1,this.defvelo);
                this.dragging={o:"G",m:"1"};
            }
        };
        this.editGridMove=function(pos){
            const ht=this.hitTest(pos);
            if(this.dragging.o=="G"){
                switch(this.dragging.m){
                case "1":
                    const px=Math.floor(ht.t);
                    if(ht.m=="s"){
                        if(this.editmode=="gridmono"){
                            this.delAreaNote(px,1,ht.i);
						}
                        this.addNote(px,ht.n|0,1,this.defvelo);
                    }
                    break;
                case "0":
                    if(ht.m=="n")
                        this.delNote(ht.i);
                    break;
                }
            }
        };
        this.setListener=function(el,mode){
			
            this.bindcontextmenu = this.contextmenu.bind(this);
            this.bindpointermove = this.pointermove.bind(this);
            this.bindcancel = this.cancel.bind(this);
            el.addEventListener("mousedown",this.pointerdown.bind(this),true);
            el.addEventListener("touchstart",this.pointerdown.bind(this),false);
            if(mode){
                el.addEventListener("mouseover",this.pointerover.bind(this),false);
                el.addEventListener("mouseout",this.pointerout.bind(this),false);
            }
        };
        this.ready=function(){
            this.body=root.children[1];
            this.elem=root.childNodes[2];
            this.proll = this.elem.children[0];
            this.canvas = this.elem.children[0];
            this.kb = this.elem.children[1];
            this.ctx=this.canvas.getContext("2d");
            this.kbimg=this.elem.children[1];
            this.markstartimg=this.elem.children[2];
            this.markendimg=this.elem.children[3];
            this.cursorimg=this.elem.children[4];
            this.menu=this.elem.children[5];
            this.rcMenu={x:0, y:0, width:0, height:0};
            this.lastx=0;
            this.lasty=0;
            this.canvas.addEventListener('mousemove',this.mousemove.bind(this),false);
            this.canvas.addEventListener('keydown',this.keydown.bind(this),false);
            this.canvas.addEventListener('DOMMouseScroll',this.wheel.bind(this),false);
            this.canvas.addEventListener('mousewheel',this.wheel.bind(this),false);
            this.setListener(this.canvas,true);
            this.setListener(this.markendimg,true);
            this.setListener(this.markstartimg,true);
            this.setListener(this.cursorimg,true);
            this.setListener(this.menu,false);
            this.sequence=[];
            this.dragging={o:null};
            this.kbimg.style.height=this.sheight+"px";
            this.kbimg.style.backgroundSize=(this.steph*12)+"px";
            this.layout();
            this.initialized=1;
            this.redraw();
        };
        this.setupImage=function(){
        };
        this.preventScroll=function(e){
            if(e.preventDefault)
                e.preventDefault();
        };
        this.getPos=function(e){
            let t=null;
            if(e){
                t=e.target;
                this.lastx=e.clientX-this.rcTarget.left;
                this.lasty=e.clientY-this.rcTarget.top;
				
            }
            if(this.lastx>=this.rcMenu.x&&this.lastx<this.rcMenu.x+this.rcMenu.width
                    &&this.lasty>=this.rcMenu.y&&this.lasty<this.rcMenu.y+this.rcMenu.height)
                t=this.menu;
            return {t:t, x:this.lastx, y:this.lasty};
        };
        this.contextmenu= function(e){
            e.stopPropagation();
            e.preventDefault();
            window.removeEventListener("contextmenu",this.bindcontextmenu);
            return false;
        };
        this.keydown=function(e){
            switch(e.keyCode){
            case 46://delNote
                this.delSelectedNote();
                this.redraw();
                break;
			case 13://enternote
                sequenceButton.click();
                break;
				case 32://enternote
                sequenceButton.click();
                break;
				}
            
        };
		
		
        this.popMenu=function(pos){
            // const s=this.menu.style;
            // s.display="block";
            // s.top=(pos.y+8)+"px";
            // s.left=(pos.x+8)+"px";
            // this.rcMenu=this.menu.getBoundingClientRect();
        };
        this.longtapcountup=function(){
            if(++this.longtapcount >= 18){
                clearInterval(this.longtaptimer);
                switch(this.downht.m){
                case "N":
                case "B":
                case "E":
                    this.popMenu(this.downpos);
                    this.dragging={o:"m"};
                    break;
                }
            }
        };
        this.pointerdown=function(ev) {// when you click!!
			
            let e;
            if(!this.enable)
                return;
            if(ev.touches)
                e = ev.touches[0];
            else
                e = ev;
            this.rcTarget=this.canvas.getBoundingClientRect();
            this.downpos=this.getPos(e);
            this.downht=this.hitTest(this.downpos);
			if(selectedNotesArray.includes(Math.floor(this.downht.n))){
				
			}
			else{
			selectedNotesArray.push(Math.floor(this.downht.n));
			
			}
			
			console.warn(e.button+" "+this.downht.m);
			// console.warn(selectedNotesArray.toString());
            this.longtapcount = 0;
            this.longtaptimer = setInterval(this.longtapcountup.bind(this),100);
            window.addEventListener("touchmove", this.bindpointermove,false);
            window.addEventListener("mousemove",this.bindpointermove,false);
            window.addEventListener("touchend",this.bindcancel);
            window.addEventListener("mouseup",this.bindcancel);
            window.addEventListener("contextmenu",this.bindcontextmenu);
// alert ('yo');
            if(e.button==2){
				if (e.button==2){
					erasingRightClick=true;
								if (erasingRightClick){
				console.error("last seen at "+ mouselastpos);
				this.delSelectedNote()
				this.redraw();
			}
					
				}
				// alert("yo")
				try{
				mouselastpos=Math.floor(this.downht.n);
				
				}	
					catch(error){console.error(error)}
                switch(this.downht.m){
                case "N":
                case "B":
                case "E":
                    this.popMenu(this.downpos);
                    this.dragging={o:"m"};
                    break;
				case "s":
                    this.popMenu(this.downpos);
                    this.dragging={n1:this.downht.n};
                    // this.dragging={o:"m"};
                    break;
                default:
                    if(this.editmode=="dragmono"||this.editmode=="dragpoly")
                        this.dragging={o:"A",p:this.downpos,p2:this.downpos,t1:this.downht.t,n1:this.downht.n};
                    break;
                }
                ev.preventDefault();
                ev.stopPropagation();
                this.canvas.focus();
                return false;
            }
		     if(e.ctrlKey){
				// alert("yo")
				// ctrlpressed=true;
				try{
				console.warn(this.downpos);
				}	
					catch(error){console.error(error)}
                switch(this.downht.m){
                case "N":
                case "B":
                case "E":
                    this.popMenu(this.downpos);
                    this.dragging={o:"m"};
                    break;
                default:
                    if(this.editmode=="dragmono"||this.editmode=="dragpoly")
                        this.dragging={o:"A",p:this.downpos,p2:this.downpos,t1:this.downht.t,n1:this.downht.n};
                    break;
                }
                ev.preventDefault();
                ev.stopPropagation();
                this.canvas.focus();
                return false;
            }

            switch(e.target){
            case this.markendimg:
                this.dragging={o:"E",x:this.downpos.x,m:this.markend};
                ev.preventDefault();
                ev.stopPropagation();
                return false;
            case this.markstartimg:
                this.dragging={o:"S",x:this.downpos.x,m:this.markstart};
                ev.preventDefault();
                ev.stopPropagation();
                return false;
            case this.cursorimg:
                this.dragging={o:"P",x:this.downpos.x,m:this.cursor};
                ev.preventDefault();
                ev.stopPropagation();
                return false;
            }
            this.dragging={o:null,x:this.downpos.x,y:this.downpos.y,offsx:this.xoffset,offsy:this.yoffset};
            this.canvas.focus();
			console.warn(this.editmode);
            switch(this.editmode){
            case "gridpoly":
            case "gridmono":
				console.warn("this.downpos2");
                this.editGridDown(this.downpos);
                break;
            case "dragpoly":
                this.editDragDown(this.downpos);
            case "dragmono":
				console.warn("this.downpos");
                this.editDragDown(this.downpos);
                break;
            }
            this.press = 1;
            if(ev.preventDefault)
                ev.preventDefault();
            if(ev.stopPropagation)
                ev.stopPropagation();
            return false;
			
			
        };
		this.revealAnswer=function(){
					if (revealanswer){
				// console.error(Object.getOwnPropertyNames(this.sequence[0]));
				// console.error(this.sequence[0]);
				console.warn(mouselastpos);
				let floorOfScale=40;
				
					floorOfScale=Math.floor((mouselastpos-12)/12)*12;
				// try{
				// floorOfScale=Math.floor(this.sequence[0].n/12)*12;
				// }
				// catch(error){
					// floorOfScale=Math.floor((mouselastpos-6)/12)*12;
				// }
				
				this.sequence=[];
				for (let thing1=0; thing1 < correctChord.length; thing1++){
					this.sequence.push({f: 1, g:1, n: correctChord[thing1]+floorOfScale, og: 1, on: correctChord[thing1]+floorOfScale, ot: 0, t: 0});
				}
				this.clearSel();
				revealanswer=false;
				answerRevealed=true;
				this.redraw();
			}
		}
        this.mousemove=function(e){
			// alert("hi");

			this.rcTarget=this.canvas.getBoundingClientRect();
                const pos=this.getPos(e);
               
                const ht=this.hitTest(pos);
			// console.warn(ht.n);
			if (e.button==2){
			erasingRightClick=true;
			}
					try{
				mouselastpos=Math.floor(ht.n);
				
				}	
					catch(error){console.error(error)}
			// console.warn(erasingRightClick);
			if (erasingRightClick){
				// console.error("last seen at "+ mouselastpos);
				this.delSelectedNote()
				this.redraw();
			}
			// console.warn(e.button);
			// if (resetpianoroll){		
				
                // this.delAllNotes();
				// this.redraw();
				// resetpianoroll=false;
			// }
            if(this.dragging.o==null){
				
                this.rcTarget=this.canvas.getBoundingClientRect();
                const pos=this.getPos(e);
                const ht=this.hitTest(pos);
                switch(ht.m){
                    case "E": this.canvas.style.cursor="e-resize"; break;
                    case "B": this.canvas.style.cursor="w-resize"; break;
                    case "N": this.canvas.style.cursor="move"; break;
                    case "n": this.canvas.style.cursor="pointer"; break;
                    case "s": this.canvas.style.cursor="pointer"; break;
                    }
                }
				else{
				// console.warn(this.dragging.o);
				}
		
        };
        this.pointermove=function(ev) {
			if (resetpianoroll){			
                this.delAllNotes();
				resetpianoroll=false;
				
			}
			// console.warn("hi");
            let e;
            this.rcTarget=this.canvas.getBoundingClientRect();
            if(ev.touches)
                e = ev.touches[0];
            else
                e = ev;
			
			if (e.button==2){
			alert("lol");
			}
            if(this.longtaptimer)
                clearInterval(this.longtaptimer);
            const pos=this.getPos(e);
            const ht=this.hitTest(pos);
            switch(this.dragging.o){
            case null:
                if(this.xscroll)
                    this.xoffset=this.dragging.offsx+(this.dragging.x-pos.x)*(this.xrange/this.width);
                if(this.yscroll){
					
                    this.yoffset=this.dragging.offsy+(pos.y-this.dragging.y)*(this.yrange/this.height);
				}
                break;
            case "m":
                if(ht.m=="m"){
                    this.menu.style.background="#ff6";
                }
                else {
                    this.menu.style.background="#eef";
                }
                break;
            case "A":
                this.dragging.p2=pos;
                this.dragging.t2=ht.t;
                this.dragging.n2=ht.n;
				console.log(this.dragging.n2);
				 const l=this.sequence.length;
				for(let i=l-1;i>=0;--i){
                const ev=this.sequence[i];
				console.warn(ev.f);
                if(true){
					if (selectedNotesArray.includes(ev.n)){
						selectedNotesArray.splice(selectedNotesArray.indexOf(ev.n), 1)
						console.warn(selectedNotesArray.toString());
					}
					if (ev.n==Math.floor(this.dragging.n2)){
                    ev.f=1;
						accessibleNotesList=[]
					    for (var coun=0; coun<this.sequence.length; coun++){
						console.warn(this.sequence[coun].n);
							accessibleNotesList.push(this.sequence[coun].n);
				
							}
					}
				}
            }
                this.redraw();
                break;
            case "E":
                var p=Math.max(1,(this.dragging.m+(pos.x-this.dragging.x)/this.stepw+.5)|0);
                if(this.markstart>=p)
                    this.markstart=p-1;
                this.markend=p;
                break;
            case "S":
                var p=Math.max(0,(this.dragging.m+(pos.x-this.dragging.x)/this.stepw+.5)|0);
                if(this.markend<=p)
                    this.markend=p+1;
                this.markstart=p;
                break;
            case "P":
                this.cursor=Math.max(0,(this.dragging.m+(pos.x-this.dragging.x)/this.stepw+.5)|0);
                break;
            }
            switch(this.editmode){
            case "gridpoly":
            case "gridmono":
                this.editGridMove(pos);
                break;
            case "dragpoly":
            case "dragmono":
                this.editDragMove(pos);
                break;
            }
//            ev.preventDefault();
            ev.stopPropagation();
            return false;
        };
        this.cancel= function(ev) {
            let e;
            if(ev.touches)
                e = null;
            else
                e = ev;
            if(this.longtaptimer)
                clearInterval(this.longtaptimer);
            const pos=this.getPos(e);
		
			
			console.warn(e.button); // when 0 it denotes letting go of a note. // when 2 it denotes letting go of the number 2.
			if(e.button==2){
				erasingRightClick=false;
			}
            if(this.dragging.o=="m"){
				
                // this.menu.style.display="none";
                // this.rcMenu={x:0,y:0,width:0,height:0};
				
				
                // if(pos.t==this.menu)
                    // this.delSelectedNote();
                this.redraw();
            }
            if(this.dragging.o=="A"){
                this.selAreaNote(this.dragging.t1,this.dragging.t2,this.dragging.n1,this.dragging.n2);
                this.dragging={o:null};
                this.redraw();
            }
//            if(this.dragging.o=="D"){
                if(this.editmode=="dragmono"){
                    for(let ii=this.sequence.length-1;ii>=0;--ii){
                        const ev=this.sequence[ii];
                        if(ev && ev.f){
                            this.delAreaNote(ev.t,ev.g,ii);
                        }
                    }
                }
                this.redraw();
//            }
            this.dragging={o:null};
            if(this.press){
                this.sortSequence();
            }
            this.press = 0;
//            this.mousemove(e);
            window.removeEventListener('touchstart',this.preventScroll,false);
            window.removeEventListener("mousemove",this.bindpointermove,false);
            window.removeEventListener("touchend",this.bindcancel,false);
            window.removeEventListener("mouseup",this.bindcancel,false);
            ev.preventDefault();
            ev.stopPropagation();
//            window.removeEventListener("contextmenu",this.contextmenu);
            return false;
        };
        this.pointerover=function(e) {
        };
        this.pointerout=function(e) {
//            window.removeEventListener("contextmenu",this.contextmenu);
        };
        this.wheel=function(e) {
			
            let delta = 0;
            const pos=this.getPos(e);
            if(!e)
                e = window.event;
            if(e.wheelDelta)
                delta = e.wheelDelta/120;
            else if(e.detail)
                delta = -e.detail/3;
            const ht=this.hitTest(pos);
			console.warn(e.ctrlKey);
			if (e.ctrlKey){
				
				
                if(delta>0){
                    this.yoffset=ht.n-(ht.n-this.yoffset)/1.2
                    this.yrange/=1.2;
                }
                else{
                    this.yoffset=ht.n-(ht.n-this.yoffset)*1.2
                    this.yrange*=1.2;
                }

            
			}
			else{
			if(delta>0){
                    this.yoffset=ht.n-(ht.n-this.yoffset)/1.2
                    // this.yrange/=1.2;
                }
                else{
                    this.yoffset=ht.n-(ht.n-this.yoffset)*1.2
                    // this.yrange*=1.2;
                }
			}
            if((this.wheelzoomx||this.wheelzoom) && ht.m=="x"){
				alert (delta);
                if(delta>0){
                    this.xoffset=ht.t-(ht.t-this.xoffset)/1.2
                    this.xrange/=1.2;
                }
                else{
                    this.xoffset=ht.t-(ht.t-this.xoffset)*1.2
                    this.xrange*=1.2;
                }
            }
            if((this.wheelzoomy||this.wheelzoom) && ht.m=="y"){
				alert (delta+"delta");
                if(delta>0){
                    this.yoffset=ht.n-(ht.n-this.yoffset)/1.2
                    this.yrange/=1.2;
                }
                else{
                    this.yoffset=ht.n-(ht.n-this.yoffset)*1.2
                    this.yrange*=1.2;
                }

            }
            e.preventDefault();
        };
		window.onresize=function(){
			document.getElementById('proll').layout();
			// $('#wac-pianoroll').style.width=600;
		}
		
        this.layout=function(){
			
			// alert (window.innerWidth);
			if (this.width!=(window.innerWidth*.8)){
				// alert('hi');
			this.width=Number(window.innerWidth)*.8;
			let difference=this.width-800;
			document.getElementById('yrange').style.left=(850+difference)+"px";
			document.getElementById('yoffset').style.left=(850+difference)+"px";
			document.getElementById('xrange').style.left=(700+difference)+"px";
			document.getElementById('xoffset').style.left=(480+difference)+"px";
			// alert (this.width);
			}
            if(typeof(this.kbwidth)=="undefined")
                return;
            const proll = this.proll;
            const bodystyle = this.body.style;
            if(this.bgsrc)
                proll.style.background="url('"+this.bgsrc+"')";
            this.kbimg.style.background="url('"+this.kbsrc+"')";
			// alert(this.width);
			
            if(this.width){
                proll.width = this.width;
                bodystyle.width = proll.style.width = this.width+"px";
            }
            if(this.height) {
                proll.height = this.height;
                bodystyle.height = proll.style.height = this.height+"px";
            }
            this.swidth=proll.width-this.yruler;
            this.swidth-=this.kbwidth;
            this.sheight=proll.height-this.xruler;
            this.redraw();
        };
        this.redrawMarker=function(){
            if(!this.initialized)
                return;
            const cur=(this.cursor-this.xoffset)*this.stepw+this.yruler+this.kbwidth;
            this.cursorimg.style.left=(cur+this.cursoroffset)+"px";
            const start=(this.markstart-this.xoffset)*this.stepw+this.yruler+this.kbwidth;
            this.markstartimg.style.left=(start+this.markstartoffset)+"px";
            const end=(this.markend-this.xoffset)*this.stepw+this.yruler+this.kbwidth;
            this.markendimg.style.left=(end+this.markendoffset)+"px";
        };
        this.redrawGrid=function(){
			// alert (this.swidth +" "+this.kbwidth+" "+this.steph);
            for(let y=0;y<128;++y){
                if(this.semiflag[y%12]&1)
                    this.ctx.fillStyle=this.coldk;
                else
                    this.ctx.fillStyle=this.collt;
                let ys = this.height - (y - this.yoffset) * this.steph;
                this.ctx.fillRect(this.yruler+this.kbwidth, ys|0, this.swidth,-this.steph);
                this.ctx.fillStyle=this.colgrid;
                this.ctx.fillRect(this.yruler+this.kbwidth, ys|0, this.swidth,1);
            }
            for(let t=0;;t+=this.grid){
                let x=this.stepw*(t-this.xoffset)+this.yruler+this.kbwidth;
                this.ctx.fillRect(x|0,this.xruler,1,this.sheight);
                if(x>=this.width)
                    break;
            }
        };
        this.semiflag=[6,1,0,1,0,2,1,0,1,0,1,0];
        this.redrawXRuler=function(){
            if(this.xruler){
                this.ctx.textAlign="left";
                this.ctx.font=(this.xruler/2)+"px 'sans-serif'";
                this.ctx.fillStyle=this.colrulerbg;
                this.ctx.fillRect(0,0,this.width,this.xruler);
                this.ctx.fillStyle=this.colrulerborder;
                this.ctx.fillRect(0,0,this.width,1);
                this.ctx.fillRect(0,0,1,this.xruler);
                this.ctx.fillRect(0,this.xruler-1,this.width,1);
                this.ctx.fillRect(this.width-1,0,1,this.xruler);
                this.ctx.fillStyle=this.colrulerfg;
                for(let t=0;;t+=this.timebase){
                    let x=(t-this.xoffset)*this.stepw+this.yruler+this.kbwidth;
                    this.ctx.fillRect(x,0,1,this.xruler);
                    this.ctx.fillText(t/this.timebase+1,x+4,this.xruler-8);
                    if(x>=this.width)
                        break;
                }
            }
        };
        this.redrawYRuler=function(){
            if(this.yruler){
                this.ctx.textAlign="right";
                this.ctx.font=(this.steph/2)+"px 'sans-serif'";
                this.ctx.fillStyle=this.colrulerbg;
                this.ctx.fillRect(0,this.xruler,this.yruler,this.sheight);
                this.ctx.fillStyle=this.colrulerborder;
                this.ctx.fillRect(0,this.xruler,1,this.sheight);
                this.ctx.fillRect(this.yruler,this.xruler,1,this.sheight);
                this.ctx.fillRect(0,this.height-1,this.yruler,1);
                this.ctx.fillStyle=this.colrulerfg;
                for(let y=0;y<128;y+=12){
                    const ys=this.height-this.steph*(y-this.yoffset);
                    this.ctx.fillRect(0,ys|0,this.yruler,-1);
                    this.ctx.fillText("C"+(((y/12)|0)+this.octadj),this.yruler-4,ys-4);
                }
            }
            this.kbimg.style.top=(this.xruler)+"px";
            this.kbimg.style.left=this.yruler+"px";
            this.kbimg.style.width=this.kbwidth+"px";
            this.kbimg.style.backgroundSize="100% "+(this.steph*12)+"px";
            this.kbimg.style.backgroundPosition="0px "+(this.sheight+this.steph*this.yoffset)+"px";
        };
        this.redrawKeyboard=function(){
            if(this.yruler){
                this.ctx.textAlign="right";
                this.ctx.font=(this.steph/2)+"px 'sans-serif'";
                this.ctx.fillStyle=this.colortab.kbwh;
                this.ctx.fillRect(1,this.xruler,this.yruler,this.sheight);
                this.ctx.fillStyle=this.colortab.kbbk;
                for(y=0;y<128;++y){
                    const ys=this.height-this.steph*(y-this.yoffset);
                    const ysemi=y%12;
                    const fsemi=this.semiflag[ysemi];
                    if(fsemi&1){
                        this.ctx.fillRect(0,ys,this.yruler/2,-this.steph);
                        this.ctx.fillRect(0,(ys-this.steph/2)|0,this.yruler,-1);
                    }
                    if(fsemi&2)
                        this.ctx.fillRect(0,ys|0,this.yruler,-1);
                    if(fsemi&4)
                        this.ctx.fillText("C"+(((y/12)|0)+this.octadj),this.yruler-4,ys-4);
                }
                this.ctx.fillRect(this.yruler,this.xruler,1,this.sheight);
            }
        };
        this.redrawAreaSel=function(){
            if(this.dragging && this.dragging.o=="A"){
                this.ctx.fillStyle=this.colselarea;
                this.ctx.fillRect(this.dragging.p.x,this.dragging.p.y,this.dragging.p2.x-this.dragging.p.x,this.dragging.p2.y-this.dragging.p.y);
            }
        };
        this.redraw=function() { //moving mouse
            let x,w,y,x2,y2;
            if(!this.ctx)
                return;
            this.ctx.clearRect(0,0,this.width,this.height);
            this.stepw = this.swidth/this.xrange;
            this.steph = this.sheight/this.yrange;
            this.redrawGrid();
            const l=this.sequence.length;
            for(let s=0; s<l; ++s){
                const ev=this.sequence[s];
                if(ev.f)
                    this.ctx.fillStyle=this.colnotesel;
                else
                    this.ctx.fillStyle=this.colnote;
                w=ev.g*this.stepw;
                x=(ev.t-this.xoffset)*this.stepw+this.yruler+this.kbwidth;
                x2=(x+w)|0; x|=0;
                y=this.height - (ev.n-this.yoffset)*this.steph;
                y2=(y-this.steph)|0; y|=0;
                this.ctx.fillRect(x,y,x2-x,y2-y);
                if(ev.f)
                    this.ctx.fillStyle=this.colnoteselborder;
                else
                    this.ctx.fillStyle=this.colnoteborder;
                this.ctx.fillRect(x,y,1,y2-y);
                this.ctx.fillRect(x2,y,1,y2-y);
                this.ctx.fillRect(x,y,x2-x,1);
                this.ctx.fillRect(x,y2,x2-x,1);
            }
            this.redrawYRuler();
            this.redrawXRuler();
            this.redrawMarker();
            this.redrawAreaSel();
        };
        this.ready();
    }
    sendEvent(ev){
        let event;
        event=document.createEvent("HTMLEvents");
        event.initEvent(ev,false,true);
        this.dispatchEvent(event);
    }
    getAttr(n,def){
        let v=this.getAttribute(n);
        if(v==""||v==null) return def;
        switch(typeof(def)){
        case "number":
          if(v=="true") return 1;
          v=+v;
          if(isNaN(v)) return 0;
          return v;
        }
        return v;
    }
    disconnectedCallback(){}
	
	
});
	$('#playButton').click(function () {
		playAnArray(accessibleNotesList);
      // for (var coun=0; coun<this.sequence.length; coun++){
				// console.warn(this.sequence[coun].n);
			// }
    });
	$('#sequenceButton').click(function () {
		//delAllNotes();
		
		// chickenthing.delAllNotes();
		// alert (correctChord.toString()+" "+arrangeNoteArray(accessibleNotesList).toString());
		playAnArray(accessibleNotesList);
		checkThisAnswer(accessibleNotesList.sort(), arrangeNoteArray(accessibleNotesList));
		
		
      // for (var coun=0; coun<this.sequence.length; coun++){
				// console.warn(this.sequence[coun].n);
			// }
    });
		$('#revealButton').click(function () {
		//delAllNotes();
		// console.log("sup motha "+document.getElementById('proll').sequence.length);
		// chickenthing.delAllNotes();
			
			// alert (correctChord.toString()+" "+arrangeNoteArray(accessibleNotesList).toString());
	revealanswer=true;
		document.getElementById('proll').revealAnswer();
      // for (var coun=0; coun<this.sequence.length; coun++){
				// console.warn(this.sequence[coun].n);
			// }
    });
	$('#yoButton').click(function () {
		alert ("hi");
      // for (var coun=0; coun<this.sequence.length; coun++){
				// console.warn(this.sequence[coun].n);
			// }
    });
	// chickens = function (){
	// alert(accessibleNotesList.toString());
	// }
