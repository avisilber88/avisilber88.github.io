// Variable which tell us what step of the game we're on.
// We'll use this later when we parse noteOn/Off messages

var currentStep = 0;
var score = 1;
// Timer length
var timerLength = 10 / 60; // in minutes
var timerTripped = false;
// Lock 1 variables
var correctNoteSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Amazing Grace in F
var activeNoteSequence = [];

// Lock 2 variables
var correctChord = [11, 4, 5, 7]; // C7 chord starting on middle C
var activeChord = [];
var currentChordName = "Wait for the first chord";

if (navigator.requestMIDIAccess) {
	console.log('This browser supports WebMIDI!');

	navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

} else {
	console.log('WebMIDI is not supported in this browser.');
	document.querySelector('.step0').innerHTML = 'Error: This browser does not support WebMIDI.';
}

function onMIDISuccess(midiAccess) {
	document.querySelector('.step0').innerHTML = 'Press any note to begin...';
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
	});
});
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
					audio.play();
				}
			}
			noteOnListener(note, velocity);
		} else {
			noteOffListener(note);
		}

		break;
	case 128: // noteOff
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
		//currentStep++;

		break;

		// The first lock - playing a correct sequence
	case 1:
		// add the note to the array
		activeNoteSequence.push(arrangeNote(note));

		// show the requisite number of note placeholders
		for (var i = 0; i < activeNoteSequence.length; i++) {
			document.querySelector('.step1 .note:nth-child(' + (i + 1) + ')').classList.add('on');
			if (document.getElementById("showNote").selected) { //checking to see if ________ is checked
				document.getElementById("keyboardImg2").src = getNoteNameGeneral(correctNoteSequence[i + 1]) + " Note.jpeg"; //might have missed a close bracket on my if statement.
				//alert(getNoteNameGeneral(correctNoteSequence[i])+" Note.jpeg");
			}
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
				score = score + .05;
				timerLength = (11 - score) / 60;
				document.getElementById("score").innerHTML = "Current Score = " + score;
				runSequence('lock1');
				//currentStep++;
			} else {
				// Clear the array and start over
				score = score - .05;
				document.getElementById("score").innerHTML = "Current Score = " + score;

				//document.getElementById("keyboardImg2").src = currentChordName + ".jpeg";
				var lockInput = document.querySelector('.step2 .lock-input');

				lockInput.classList.add('error');
				window.setTimeout(function () {
					lockInput.classList.remove('error');
				}, 500);
				clearSequence();

			}
		}
		break;

	case 2:
		// add the note to the active chord array
		activeChord.push(arrangeNote(note));

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
			document.getElementById("score").innerHTML = "Current Difficulty = " + score;
			if (match) {
				score = score + .05;
				timerLength = (11 - score) / 60;
				document.getElementById("score").innerHTML = "Current Score = " + score;
				runSequence('lock2');
				document.getElementById("keyboardImg2").src = "Blank Keyboard.jpeg";
				//	currentStep--;
			} else {
				score = score - .05;
				document.getElementById("score").innerHTML = "Current Score = " + score;

				document.getElementById("keyboardImg2").src = currentChordName + ".jpeg";
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
	if (document.getElementById("showNote").selected) { //checking to see if ________ is checked
		document.getElementById("keyboardImg2").src = getNoteNameGeneral(fixNote(correctNoteSequence[0])) + " Note.jpeg"; //might have missed a close bracket on my if statement.
		//alert(getNoteNameGeneral(fixNote(thisChord))+" Note.jpeg");
	}
	startTimer();

	//document.querySelector('.hint').innerHTML = "You lose...";
}

function clearChord() {
	// Clear the array and start over
	var lockInput = document.querySelector('.step2 .lock-input');
	startTimer();
	timerTripped = false;
	//document.querySelector('.hint').innerHTML = "You lose...";
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
	var genNoteName = "blank";
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
	}
	return genNoteName;
}

function noteOffListener(note) {

	switch (currentStep) {
	case 2:
		// Remove the note value from the active chord array
		activeChord.splice(activeChord.indexOf(note), 1);

		// Hide the last note shown
		document.querySelector('.step2 .note:nth-child(' + (activeChord.length + 1) + ')').classList.remove('on');
		break;
	}
}

function runSequence(sequence) {
	switch (sequence) {
	case 'gamestart':
	document.getElementById("reset").addEventListener("click", function(){
  clearSequence();
});
	document.getElementById("dropdown").addEventListener("click", function(){
	//	alert("got");
	if (score >4){
		score=score-3;
	}
runSequence('lock1');
});


		// Now we'll start a countdown timer...
		startTimer();

		// code to trigger animations, give a clue for the first lock
		advanceScreen();
		successFlicker();
		//advanceScreen();
		newChord();

		break;

	case 'lock1':
		// code to trigger animations and give clue for the next lock
		//advanceScreen();
		clearSequence();
		//document.querySelector('.step3 p').innerHTML = "You lose...";
		newChord();
		successFlicker();
		break;

	case 'lock2':
		// code to trigger animations, stop clock, end game
		//backScreen();
		//activeNoteSequence = [];
		clearChord();
		//document.querySelector('.step3 p').innerHTML = "You lose...";
		newChord();
		successFlicker();
		//successFlicker();
		break;

	case 'gameover':
		if (!timerTripped) {
			score = score - .1;
			timerTripped = true;
		}
		document.getElementById("score").innerHTML = "Current Score = " + score;
		//document.getElementById("keyboardImg2").src = currentChordName + ".jpeg"; //This only needs to be there if we are showing images of the scales.
		//currentStep = 3;
		//document.querySelector('.step3 p').innerHTML = "You lose...";
		//document.querySelector('body').dataset.step = "3";
		//document.querySelector('body').classList.add('gameover');
		break;
	}
}

function getChordName() {
	return currentChordName;
}

function newChord() {
	var thisChord = Math.floor(Math.random() * 24) + 1;
	switch (thisChord) {
	case 12:
		currentChordName = "C";
		break;
	case 1:
		currentChordName = "Db";
		break;
	case 2:
		currentChordName = "D";
		break;
	case 3:
		currentChordName = "Eb";
		break;
	case 4:
		currentChordName = "E";
		break;
	case 5:
		currentChordName = "F";
		break;
	case 6:
		currentChordName = "Gb";
		break;
	case 7:
		currentChordName = "G";
		break;
	case 8:
		currentChordName = "Ab";
		break;
	case 9:
		currentChordName = "A";
		break;
	case 10:
		currentChordName = "Bb";
		break;
	case 11:
		currentChordName = "B";
		break;
	case 24:
		currentChordName = "C";
		break;
	case 13:
		currentChordName = "Db";
		break;
	case 14:
		currentChordName = "D";
		break;
	case 15:
		currentChordName = "Eb";
		break;
	case 16:
		currentChordName = "E";
		break;
	case 17:
		currentChordName = "F";
		break;
	case 18:
		currentChordName = "Gb";
		break;
	case 19:
		currentChordName = "G";
		break;
	case 20:
		currentChordName = "Ab";
		break;
	case 21:
		currentChordName = "A";
		break;
	case 22:
		currentChordName = "Bb";
		break;
	case 23:
		currentChordName = "B";
		break;
	}
	setupChord(fixNote(thisChord));
	if (document.getElementById("showNote").selected) { //checking to see if ________ is checked
		document.getElementById("keyboardImg2").src = getNoteNameGeneral(fixNote(thisChord)) + " Note.jpeg"; //might have missed a close bracket on my if statement.
		//alert(getNoteNameGeneral(fixNote(thisChord))+" Note.jpeg");
	}
}

function setupChord(rootNote) {
	var Chordlist = [];

	// alert(document.getElementById("ez5").selected);
	if (document.getElementById("majS").selected) { //checking to see if ________ is checked
		Chordlist.push("majorScale");
	}
	if (document.getElementById("minS").selected) { //checking to see if ________ is checked
		Chordlist.push("naturalMinorScale");
	}
	if (document.getElementById("harmS").selected) { //checking to see if ________ is checked
		Chordlist.push("harmonicMinorScale");
	}
	if (document.getElementById("pentaS").selected) { //checking to see if ________ is checked
		Chordlist.push("pentatonicScale");
	}
	if (document.getElementById("boogieS").selected) { //checking to see if ________ is checked
		Chordlist.push("boogieWoogieScale");
	}
	if (document.getElementById("bluesS").selected) { //checking to see if ________ is checked
		Chordlist.push("bluesScale");
	}
	if (document.getElementById("dorianS").selected) { //checking to see if ________ is checked
		Chordlist.push("dorianScale");
	}
	if (document.getElementById("phrygianS").selected) { //checking to see if ________ is checked
		Chordlist.push("phrygianScale");
	}
	if (document.getElementById("lydianS").selected) { //checking to see if ________ is checked
		Chordlist.push("lydianScale");
	}
	if (document.getElementById("mixolydianS").selected) { //checking to see if ________ is checked
		Chordlist.push("mixolydianScale");
	}
	if (document.getElementById("locrianS").selected) { //checking to see if ________ is checked
		Chordlist.push("locrianScale");
	}

	// alert(Chordlist[0]+"");
	var chordType = Chordlist[Math.floor(Math.random() * Chordlist.length)];

	switch (chordType) {
	case "majorScale":
		currentChordName = currentChordName + " Major Scale";
		setupMajorScale(rootNote);
		break;
	case "naturalMinorScale":
		currentChordName = currentChordName + " Natural Minor Scale";
		setupNaturalMinorScale(rootNote);
		break;
	case "harmonicMinorScale":
		currentChordName = currentChordName + " Harmonic Minor Scale";
		setupHarmonicMinorScale(rootNote);
		break;
	case "pentatonicScale":
		currentChordName = currentChordName + " Pentatonic Minor Scale";
		setupPentatonicScale(rootNote);
		break;
	case "boogieWoogieScale":
		currentChordName = currentChordName + " Boogie-Woogie Scale";
		setupBoogieWoogieScale(rootNote);
		break;
	case "bluesScale":
		currentChordName = currentChordName + " Blues Scale";
		setupBluesScale(rootNote);
		break;
	case "dorianScale":
		currentChordName = currentChordName + " Dorian Scale";
		setupScale(rootNote, 2, 3, 5, 7, 9, 10);
		break;
	case "phrygianScale":
		currentChordName = currentChordName + " Phrygian Scale";
		setupScale(rootNote, 1, 3, 5, 7, 8, 10);
		break;
	case "lydianScale":
		currentChordName = currentChordName + " Lydian Scale";
		setupScale(rootNote, 2, 4, 6, 7, 9, 11);
		break;
	case "mixolydianScale":
		currentChordName = currentChordName + " Mixolydian Scale";
		setupScale(rootNote, 2, 4, 5, 7, 9, 10);
		break;
	case "locrianScale":
		currentChordName = currentChordName + " Locrian Scale";
		setupScale(rootNote, 1, 3, 5, 6, 8, 10);
		break;
	}
	if (document.getElementById("upDown").selected) {
		var chordLength=correctNoteSequence.length;
		for (var index = 1; index < (chordLength); index++) {
				correctNoteSequence.push(correctNoteSequence[chordLength-index-1]);
		}
	}
}

function setupScale(majorChordRoot, second, third, fourth, fifth, sixth, seventh) {
	var first = fixNote(majorChordRoot)
		correctNoteSequence = [first, fixNote(first + second), fixNote(first + third), fixNote(first + fourth), fixNote(first + fifth), fixNote(first + sixth), fixNote(first + seventh), first];
}

function setupMajorScale(majorChordRoot) {
	majorChordRoot = fixNote(majorChordRoot);
	var second = fixNote(majorChordRoot + 2);
	var third = fixNote(majorChordRoot + 4);
	var fourth = fixNote(majorChordRoot + 5);
	var fifth = fixNote(majorChordRoot + 7);
	var sixth = fixNote(majorChordRoot + 9);
	var seventh = fixNote(majorChordRoot + 11);
	correctNoteSequence = [majorChordRoot, second, third, fourth, fifth, sixth, seventh, majorChordRoot];
}

function setupNaturalMinorScale(majorChordRoot) {
	majorChordRoot = fixNote(majorChordRoot);
	var second = fixNote(majorChordRoot + 2);
	var third = fixNote(majorChordRoot + 3);
	var fourth = fixNote(majorChordRoot + 5);
	var fifth = fixNote(majorChordRoot + 7);
	var sixth = fixNote(majorChordRoot + 8);
	var seventh = fixNote(majorChordRoot + 10);
	correctNoteSequence = [majorChordRoot, second, third, fourth, fifth, sixth, seventh, majorChordRoot];
}

function setupHarmonicMinorScale(majorChordRoot) {
	majorChordRoot = fixNote(majorChordRoot);
	var second = fixNote(majorChordRoot + 2);
	var third = fixNote(majorChordRoot + 3);
	var fourth = fixNote(majorChordRoot + 5);
	var fifth = fixNote(majorChordRoot + 7);
	var sixth = fixNote(majorChordRoot + 8);
	var seventh = fixNote(majorChordRoot + 11);
	correctNoteSequence = [majorChordRoot, second, third, fourth, fifth, sixth, seventh, majorChordRoot];
}

function setupPentatonicScale(majorChordRoot) {
	majorChordRoot = fixNote(majorChordRoot);
	var third = fixNote(majorChordRoot + 3);
	var fourth = fixNote(majorChordRoot + 5);
	var fifth = fixNote(majorChordRoot + 7);
	var sixth = fixNote(majorChordRoot + 10);
	correctNoteSequence = [majorChordRoot, third, fourth, fifth, sixth, majorChordRoot];
}

function setupBoogieWoogieScale(majorChordRoot) {
	majorChordRoot = fixNote(majorChordRoot);
	var third = fixNote(majorChordRoot + 4);
	var fourth = fixNote(majorChordRoot + 7);
	var fifth = fixNote(majorChordRoot + 9);
	var sixth = fixNote(majorChordRoot + 10);
	correctNoteSequence = [majorChordRoot, third, fourth, fifth, sixth];
}
function setupBluesScale(majorChordRoot) {
	majorChordRoot = fixNote(majorChordRoot);
	var third = fixNote(majorChordRoot + 3);
	var fourth = fixNote(majorChordRoot + 5);
	var fifth = fixNote(majorChordRoot + 6);
	var sixth = fixNote(majorChordRoot + 7);
	var seventh = fixNote(majorChordRoot + 11);
	correctNoteSequence = [majorChordRoot, third, fourth, fifth, sixth, majorChordRoot];
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
	}, 2500);
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
		document.querySelector('#countdown').innerText = minutes + ":" + seconds + " " + currentChordName;

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

	$('#keyboardImg2').click(function () {
		alert("secrecy" + currentChordName);
		var passcode = prompt("Admin Passcode");
		if (passcode == "secrecy" + currentChordName) {
			score = prompt("set the new score");

		}

	});

});
// The below code is just to test things!! it allows us to click on the first page and go past it if we do not have a keyboard attached.
$(document).ready(function () { //this is to bypass first page
	var times = 0;

	$('.step0').click(function () {
		noteOnListener(10, 10);

	});

});
