var noteAdapter = 24;
var currentTag = "";
var grumpsofar = [];
var grumpsofarmajor = [];
var grumpsofarminor = [];
var instrument = "piano";
var audioArray = [];
var keyType = "major";
var justPlayingScaleFam = true;
var cChoice = "unselected";
var csChoice = "unselected";
var dChoice = "unselected";
var dsChoice = "unselected";
var eChoice = "unselected";
var fChoice = "unselected";
var fsChoice = "unselected";
var gChoice = "unselected";
var gsChoice = "unselected";
var aChoice = "unselected";
var asChoice = "unselected";
var bChoice = "unselected";
var currentSong;
var mySubmissionKeys = [];
var currentSongKeys = [];
var clickToPlay = false;
var buttonColor = '#00cc00';
var buttonNormalColor = 'buttonface';
var songTitleSelected = "";

var score = 0;
var playingState = "invisible"
    var referenceVolume = 60;
var rhythmVolume = 50;
var accompanimentVolume = 60;

var foreverNoteCounter=0;
var scheduledNoteCounter=0;
const audioCtx = window.AudioContext ? new AudioContext() : new webkitAudioContext();

async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  // ! A callback has been added here as a second param for Safari only !
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer, function() {return});
  return audioBuffer;
}

let playbackRate = 1;
function playSample(audioContext, audioBuffer, time) {
  const gainNode = audioContext.createGain();
  console.error(accompanimentVolume/100);
  gainNode.gain.value = accompanimentVolume/100;
  gainNode.connect(audioContext.destination);
  const sampleSource = audioContext.createBufferSource();
  
  sampleSource.buffer = audioBuffer;
  // sampleSource.buffer.volume
  sampleSource.playbackRate.value = playbackRate;
  sampleSource.connect(gainNode);
  // sampleSource.connect(audioContext.destination)
  sampleSource.start(time);
  return sampleSource;
}

async function setupSample(noteString) {
  let filePath = noteString;
  // Here we're `await`ing the async/promise that is `getFile`.
  // To be able to use this keyword we need to be within an `async` function
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
let tempo = 60.0;

const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.02; // How far ahead to schedule audio (sec)
const stepsPerBeat = 4;
let currentStepPosition = 0; // The note we are currently playing
let nextStepTime = 0.0; // when the next note is due.

function nextNote() {
  const secondsPerStep = (60.0 / tempo)/stepsPerBeat;
	
  nextStepTime += secondsPerStep; // Add beat length to last beat time

  // Advance the beat number, wrap to zero
  currentStepPosition++;
 // if (currentStepPosition === 4) {//this is assuming we have 4 spots and not 16.
   // currentStepPosition = 0;
  //}

}

// Create a queue for the notes that are to be played, with the current time that we want them to play:
const notesInQueue = [];
let dtmf;


function scheduleNote(stepNumber, nextTime) {
  // push the note on the queue, even if we're not playing.
  if (scheduledNoteCounter<foreverNoteCounter){
	  scheduledNoteCounter++;
  notesInQueue.push({note: stepNumber, nextTime: nextTime});//this is pushing an array including a note with the value stepNumber, and a time with a value time
  }
  // console.log(stepNumber, time);

  // if (pads[0].querySelectorAll('button')[stepNumber].getAttribute('aria-checked') === 'true') {
    // playSweep(time);
  // }
  // if (pads[1].querySelectorAll('button')[stepNumber].getAttribute('aria-checked') === 'true') {
    // playPulse(time);
  // }
  // if (pads[2].querySelectorAll('button')[stepNumber].getAttribute('aria-checked') === 'true') {
    // playNoise(time);
  // }
  //if (pads[3].querySelectorAll('button')[stepNumber].getAttribute('aria-checked') === 'true') {
	//alert(notesInQueue.length);
  
   if (notesInQueue.length>0){
	   
		playSample(audioCtx, dtmf, nextTime);
		
		}
		
		notesInQueue.splice(0,1) 
  //}

}

let timerID;
function scheduler() {
  // while there are notes that will need to play before the next interval,
  // schedule them and advance the pointer.
  while (nextStepTime < audioCtx.currentTime + scheduleAheadTime ) {
	  scheduleNote(currentStepPosition, nextStepTime);
      nextNote();
  }
  timerID = window.setTimeout(scheduler, lookahead);
}

let isPlaying = false;

var noteArray = [
    [32.703, "C1", "C1"], //0  midinumber+24
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
    [523.25, "C5", "C5"], //48
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
    [1046.5, "C6", "C6"], //Avi is not sure but he thinks this is 60
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
    [1975.5, "B6", "B6"],
    [1000000, "rest", "rest"],
];
var cMajorScale = ["A", "B", "C", "D", "E", "F", "G"];
var cSharpMajorScale = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
var dMajorScale = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
var dSharpMajorScale = ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "G#/Ab"];
var eMajorScale = ["A", "B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab"];
var fMajorScale = ["A", "A#/Bb", "C", "D", "E", "F", "G"];
var fSharpMajorScale = ["A#/Bb", "B", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
var gMajorScale = ["A", "B", "C", "D", "E", "F#/Gb", "G"];
var gSharpMajorScale = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "G", "G#/Ab"];
var aMajorScale = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"];
var aSharpMajorScale = ["A", "A#/Bb", "C", "D", "D#/Eb", "F", "G"];
var bMajorScale = ["A#/Bb", "B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab"];

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
    width: window.innerWidth //document.getElementById('keyboardImg2').getBoundingClientRect().left

});
$("#my-dialog").dialog({
    position: {
        my: 'top',
        at: 'bottom',
        of: '.navbar',
        collision: 'fit'
    },
    overflow: 'auto'
});

var sharpOrderMessage = "<strong>F</strong>anny <strong>C</strong>an't <strong>G</strong>o <strong>D</strong>riving <strong>A</strong>fter <strong>E</strong>ating <strong>B</strong>reakfast."
    // var sharpTable="<table style = 'border: 1px solid black'><tbody><tr><td>Num of Sharps&nbsp;&nbsp;</td><td>Which sharps there are</td></tr><tr><td>1</td><td>F&rarr;F#</td></tr><tr><td>2</td><td>F&rarr;F#, C&rarr;C#</td></tr><tr><td>3</td><td>F&rarr;F#, C&rarr;C#, G&rarr;G# </td></tr><tr><td>4</td><td>F&rarr;F#, C&rarr;C#, G&rarr;G#, D&rarr;D# </td></tr><tr><td>5</td><td>F&rarr;F#, C&rarr;C#, G&rarr;G#, D&rarr;D#, A&rarr;A# </td></tr><tr><td>6</td><td>F&rarr;F#, C&rarr;C#, G&rarr;G#, D&rarr;D#, A&rarr;A#, E&rarr;E#(aka F)  </td></tr><tr><td>7</td><td>F&rarr;F#, C&rarr;C#, G&rarr;G#, D&rarr;D#, A&rarr;A#, E&rarr;E#(aka F), B&rarr;B#(aka C)  </td></tr></tbody></table>"
    // var flatTable="<table style = 'border: 1px solid black'><tbody><tr><td>Num of Flats&nbsp;&nbsp;</td><td>Which flats there are</td></tr><tr><td>1</td><td>B&rarr;Bb</td></tr><tr><td>2</td><td>B&rarr;Bb, E&rarr;Eb</td></tr><tr><td>3</td><td>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab </td></tr><tr><td>4</td><td>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab, D&rarr;Db </td></tr><tr><td>5</td><td>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab, D&rarr;Db, G&rarr;Gb </td></tr><tr><td>6</td><td>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab, D&rarr;Db, G&rarr;Gb, C&rarr;Cb(aka B)  </td></tr><tr><td>7</td><td>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab, D&rarr;Db, G&rarr;Gb, C&rarr;Cb(aka B), F&rarr;Fb(aka E)  </td></tr></tbody></table>"
    var sharpTable = "<table style = 'border: 1px solid black'><tbody><tr><td style ='border: .5px solid black;'>Num of Sharps&nbsp;&nbsp;</td><td style ='border: .5px solid black;'>Which sharps there are</td></tr><tr><td style ='border: .5px solid black;'>1</td><td style ='border: .5px solid black;'>F&rarr;F#</td></tr><tr><td style ='border: .5px solid black;'>2</td><td style ='border: .5px solid black;'>F&rarr;F#, C&rarr;C#</td></tr><tr><td style ='border: .5px solid black;'>3</td><td style ='border: .5px solid black;'>F&rarr;F#, C&rarr;C#, G&rarr;G# </td></tr><tr><td style ='border: .5px solid black;'>4</td><td style ='border: .5px solid black;'>F&rarr;F#, C&rarr;C#, G&rarr;G#, D&rarr;D# </td></tr><tr><td style ='border: .5px solid black;'>5</td><td style ='border: .5px solid black;'>F&rarr;F#, C&rarr;C#, G&rarr;G#, D&rarr;D#, A&rarr;A# </td></tr><tr><td style ='border: .5px solid black;'>6</td><td style ='border: .5px solid black;'>F&rarr;F#, C&rarr;C#, G&rarr;G#, D&rarr;D#, A&rarr;A#, E&rarr;E#(aka F)  </td></tr><tr><td style ='border: .5px solid black;'>7</td><td style ='border: .5px solid black;'>F&rarr;F#, C&rarr;C#, G&rarr;G#, D&rarr;D#, A&rarr;A#, E&rarr;E#(aka F), B&rarr;B#(aka C)  </td></tr></tbody></table>"
    var flatTable = "<table style = 'border: 1px solid black'><tbody><tr><td style ='border: .5px solid black;'>Num of Flats&nbsp;&nbsp;</td><td style ='border: .5px solid black;'>Which flats there are</td></tr><tr><td style ='border: .5px solid black;'>1</td><td style ='border: .5px solid black;'>B&rarr;Bb</td></tr><tr><td style ='border: .5px solid black;'>2</td><td style ='border: .5px solid black;'>B&rarr;Bb, E&rarr;Eb</td></tr><tr><td style ='border: .5px solid black;'>3</td><td style ='border: .5px solid black;'>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab </td></tr><tr><td style ='border: .5px solid black;'>4</td><td style ='border: .5px solid black;'>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab, D&rarr;Db </td></tr><tr><td style ='border: .5px solid black;'>5</td><td style ='border: .5px solid black;'>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab, D&rarr;Db, G&rarr;Gb </td></tr><tr><td style ='border: .5px solid black;'>6</td><td style ='border: .5px solid black;'>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab, D&rarr;Db, G&rarr;Gb, C&rarr;Cb(aka B)  </td></tr><tr><td style ='border: .5px solid black;'>7</td><td style ='border: .5px solid black;'>B&rarr;Bb, E&rarr;Eb, A&rarr;Ab, D&rarr;Db, G&rarr;Gb, C&rarr;Cb(aka B), F&rarr;Fb(aka E)  </td></tr></tbody></table>"
    var majorKeyChain = "<table style = 'border: 1px solid black'><tbody><tr><td style ='border: .5px solid black;text-align: left'>Major Key:</td><td style ='border: .5px solid black;text-align:center'>Gb</td><td style ='border: .5px solid black;text-align:center'>Db</td><td style ='border: .5px solid black;text-align:center'>Ab</td><td style ='border: .5px solid black;text-align:center'>Eb</td><td style ='border: .5px solid black;text-align:center'>Bb</td><td style ='border: .5px solid black;text-align:center'>F</td><td style ='border: .5px solid black;text-align:center'>C</td><td style ='border: .5px solid black;text-align:center'>G</td><td style ='border: .5px solid black;text-align:center'>D</td><td style ='border: .5px solid black;text-align:center'>A</td><td style ='border: .5px solid black;text-align:center'>E</td><td style ='border: .5px solid black;text-align:center'>B</td><td style ='border: .5px solid black;text-align:center'>F#</td></tr><tr><td style ='border: .5px solid black;text-align: left'>Num of Sharps/Flats:</td><td style ='border: .5px solid black;text-align:center'>6 flats</td><td style ='border: .5px solid black;text-align:center'>5 flats</td><td style ='border: .5px solid black;text-align:center'>4 flats</td><td style ='border: .5px solid black;text-align:center'>3 flats</td><td style ='border: .5px solid black;text-align:center'>2 flats</td><td style ='border: .5px solid black;text-align:center'>1 flat</td><td style ='border: .5px solid black;text-align:center'>0 sharps or flats</td><td style ='border: .5px solid black;text-align:center'>1 sharp</td><td style ='border: .5px solid black;text-align:center'>2 sharps</td><td style ='border: .5px solid black;text-align:center'>3 sharps</td><td style ='border: .5px solid black;text-align:center'>4 sharps</td><td style ='border: .5px solid black;text-align:center'>5 sharps</td><td style ='border: .5px solid black;text-align:center'>6 sharps</td></tr></tbody></table>"
    var minorKeyChain = "<table style = 'border: 1px solid black'><tbody><tr><td style ='border: .5px solid black;text-align: left'>Natural Minor Key:</td><td style ='border: .5px solid black;text-align:center'>Eb</td><td style ='border: .5px solid black;text-align:center'>Bb</td><td style ='border: .5px solid black;text-align:center'>F</td><td style ='border: .5px solid black;text-align:center'>C</td><td style ='border: .5px solid black;text-align:center'>G</td><td style ='border: .5px solid black;text-align:center'>D</td><td style ='border: .5px solid black;text-align:center'>A</td><td style ='border: .5px solid black;text-align:center'>E</td><td style ='border: .5px solid black;text-align:center'>B</td><td style ='border: .5px solid black;text-align:center'>F#</td><td style ='border: .5px solid black;text-align:center'>C#</td><td style ='border: .5px solid black;text-align:center'>G#</td><td style ='border: .5px solid black;text-align:center'>D#</td></tr><tr><td style ='border: .5px solid black;text-align: left'>Num of Sharps/Flats:</td><td style ='border: .5px solid black;text-align:center'>6 flats</td><td style ='border: .5px solid black;text-align:center'>5 flats</td><td style ='border: .5px solid black;text-align:center'>4 flats</td><td style ='border: .5px solid black;text-align:center'>3 flats</td><td style ='border: .5px solid black;text-align:center'>2 flats</td><td style ='border: .5px solid black;text-align:center'>1 flat</td><td style ='border: .5px solid black;text-align:center'>0 sharps or flats</td><td style ='border: .5px solid black;text-align:center'>1 sharp</td><td style ='border: .5px solid black;text-align:center'>2 sharps</td><td style ='border: .5px solid black;text-align:center'>3 sharps</td><td style ='border: .5px solid black;text-align:center'>4 sharps</td><td style ='border: .5px solid black;text-align:center'>5 sharps</td><td style ='border: .5px solid black;text-align:center'>6 sharps</td></tr></tbody></table>"
    $("#alertMessage").html(sharpOrderMessage + "<br><table><tbody><tr><td>" + sharpTable + "</td><td>&nbsp;&nbsp;&nbsp;</td><td>" + flatTable + "</td></tr></tbody></table><br>" + majorKeyChain + "<br>" + minorKeyChain);
// $("#alertMessage").html(sharpOrderMessage+"<br>"+sharpTable+flatTable);
function soundId(id) {
    if (instrument == "humanVoice") {
        // alert ("human");
        return 'vsound-' + id;
    } else {
        // console.log ('sound-' +id);
        return 'sound-' + id;
    }
};
function sound(id) {
    var it = document.getElementById(soundId(id));
    return it;
};

async function playANote(arrayPlace) { // where we Play Notes  //important chordIsDone means we are not playing the chord. !chordIsDone means we are playing the chord or arpeggios.

	
    var noteStr = noteArray[arrayPlace][2]; // error spot 1
    noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
	setupSample("https://www.nwhsaob.com/Midi/samplestwo/"+noteStr+".mp3")
  .then((sample) => {
    //loadingEl.style.display = 'none';

    dtmf = sample; // to be used in our playSample function
		foreverNoteCounter++;
		//alert ("hi");
    // playButton.addEventListener('click', ev => {
      // isPlaying = !isPlaying;
	isPlaying=true;
      if (isPlaying) { // start playing

        // check if context is in suspended state (autoplay policy)
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        currentStepPosition = 0;
        nextStepTime = audioCtx.currentTime;
        scheduler(); // kick off scheduling
        requestAnimationFrame(draw); // start the drawing loop.
        // ev.target.dataset.playing = 'true';
      } else {
        window.clearTimeout(timerID);
        // ev.target.dataset.playing = 'false';
      }
    })
  // });
    let audiophone ="https://www.nwhsaob.com/Midi/samplestwo/"+noteStr;
    console.warn(noteStr);
    // var audioContextual= amplifyMedia(audio, 1);
    // audio.crossOrigin = "anonymous";
    var newNote = true;
    try {
        for (var i = 0; i < audioArray.length; i++) {
            // console.log(audioArray[i].includes(noteArray[arrayPlace][1]));}
            // console.log(audioArray.length);

            if ((audioArray[i].includes([noteStr, (instrument + "")])) == true) {
                //	console.log("hi");
                console.log(audioArray[i][0]);
                audioArray[i][0].pause();
                newNote = false;
                audioArray[i] = [audiophone, [noteStr, (instrument + "")]];
            }
        }
    } catch (error) {
        console.error(error)
    }
    if (newNote == true) {

        audioArray.push([audiophone, [arrayPlace, (instrument + "")]])

    }
	let lastNoteDrawn=3;
function draw() { //THIS IS FOR DRAWING BUT IT IS STILL SORT OF IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let drawNote = lastNoteDrawn;
  const currentTime = audioCtx.currentTime;

  while (notesInQueue.length && notesInQueue[0].time < currentTime) {
    drawNote = notesInQueue[0].note;
    notesInQueue.splice(0,1);   // remove note from queue
  }

  // We only need to draw if the note has moved.
  if (lastNoteDrawn !== drawNote) {
  //  pads.forEach(el => {
      //el.children[lastNoteDrawn].style.borderColor = 'hsla(0, 0%, 10%, 1)';
     // el.children[drawNote].style.borderColor = 'hsla(49, 99%, 50%, 1)';
   // });

    lastNoteDrawn = drawNote;
  }
  // set up to draw again
  requestAnimationFrame(draw);
}
    //console.log(audioArray.toString());
    // if (audio) {
        // try {

            // audio.volume = ((0.01 + accompanimentVolume)) / 100 - .0001; //accompanimentVolume/50;


        // } catch (error) {
            // console.error(error)
        // }
        // // audioContextual.amplify(accompanimentVolume/50);//1.0;


        // if (audio.readyState >= 2) {
            // audio.currentTime = 0;

           // // var promise = audio.play();

            // if (promise !== undefined) {
                // promise.then(_ => {}).catch(error => {
                    // console.error(error)
                // });
            // }

        // }
    // }
}

async function playASong(songTitle) { // where we Play Notes  //important chordIsDone means we are not playing the chord. !chordIsDone means we are playing the chord or arpeggios.

    var noteStr = songTitle;
    // var noteStr = noteArray[arrayPlace][2]; // error spot 1
    // noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
    let audio = (document.getElementById(soundId(noteStr)));
    console.warn(noteStr);
    // var audioContextual= amplifyMedia(audio, 1);
    // audio.crossOrigin = "anonymous";
    var newNote = true;
    try {
        for (var i = 0; i < audioArray.length; i++) {
            // console.log(audioArray[i].includes(noteArray[arrayPlace][1]));}
            // console.log(audioArray.length);

            if ((audioArray[i].includes([noteStr, (instrument + "")])) == true) {
                //	console.log("hi");
                console.log(audioArray[i][0]);
                audioArray[i][0].pause();
                newNote = false;
                audioArray[i] = [audio, [noteStr, (instrument + "")]];
            }
        }
    } catch (error) {
        console.error(error)
    }
    if (newNote == true) {

        audioArray.push([audio, [songTitle, "song"]])

    }

    //console.log(audioArray.toString());
    if (audio) {
        try {

            audio.volume = ((0.01 + rhythmVolume)) / 400.0 - .00001; //accompanimentVolume/50;


        } catch (error) {
            console.error(error)
        }
        // audioContextual.amplify(accompanimentVolume/50);//1.0;


        if (audio.readyState >= 2) {
            audio.currentTime = 0;

            var promise = audio.play();

            if (promise !== undefined) {
                promise.then(_ => {}).catch(error => {
                    console.error(error)
                });
            }

        }
    }
}

async function playASongLink(songTitle) { // where we Play Notes  //important chordIsDone means we are not playing the chord. !chordIsDone means we are playing the chord or arpeggios.
    resetSwitches();
    if (playingState == "invisible") {
        document.getElementById('pausePlayButton').hidden = false;
        document.getElementById('pausePlayButton').innerHTML = "&nbsp;&#9613;&#9613;";
        playingState = "playing";
    }
    if (playingState == "paused") {
        document.getElementById('pausePlayButton').innerHTML = "&nbsp;&#9613;&#9613;";
        playingState = "playing";
    }
    var noteStr = songTitle;
    // var noteStr = noteArray[arrayPlace][2]; // error spot 1
    // noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
try{	currentSong.src =("https://www.nwhsaob.com/Midi/samplestwo/" + songTitle);
}
catch(error){
   currentSong = new Audio("https://www.nwhsaob.com/Midi/samplestwo/" + songTitle);
// alert("did it");
}
    currentSong.play();

    currentSong.volume = ((0.01 + rhythmVolume)) / 400.0 - .00001;
    console.warn(noteStr);
    // var audioContextual= amplifyMedia(audio, 1);
    // audio.crossOrigin = "anonymous";
    intializePlayer();
}

$('#whitec').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(0 + (noteAdapter)));
    } else {
        (playANote(0 + (noteAdapter)));
    }

});
$('#whitecs').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(1 + (noteAdapter)));
    } else {
        (playANote(1 + (noteAdapter)));
    }

});
$('#whited').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(2 + (noteAdapter)));
    } else {
        (playANote(2 + (noteAdapter)));
    }

});
$('#whiteds').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(3 + (noteAdapter)));
    } else {
        (playANote(3 + (noteAdapter)));
    }

});
$('#whitee').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(4 + (noteAdapter)));
    } else {
        (playANote(4 + (noteAdapter)));
    }

});
$('#whitef').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(5 + (noteAdapter)));
    } else {
        (playANote(5 + (noteAdapter)));
    }

});
$('#whitefs').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(6 + (noteAdapter)));
    } else {
        (playANote(6 + (noteAdapter)));
    }

});
$('#whiteg').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(7 + (noteAdapter)));
    } else {
        (playANote(7 + (noteAdapter)));
    }

});
$('#whitegs').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(8 + (noteAdapter)));
    } else {
        (playANote(8 + (noteAdapter)));
    }

});
$('#whitea').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(9 + (noteAdapter)));
    } else {
        (playANote(9 + (noteAdapter)));
    }

});
$('#whiteas').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(10 + (noteAdapter)));
    } else {
        (playANote(10 + (noteAdapter)));
    }

});
$('#whiteb').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(11 + (noteAdapter)));
    } else {
        (playANote(11 + (noteAdapter)));
    }

});

$('#whitectwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(12 + (noteAdapter)));
    } else {
        (playANote(12 + (noteAdapter)));
    }

});
$('#whitecstwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(13 + (noteAdapter)));
    } else {
        (playANote(13 + (noteAdapter)));
    }

});
$('#whitedtwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(14 + (noteAdapter)));
    } else {
        (playANote(14 + (noteAdapter)));
    }

});
$('#whitedstwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(15 + (noteAdapter)));
    } else {
        (playANote(15 + (noteAdapter)));
    }

});
$('#whiteetwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(16 + (noteAdapter)));
    } else {
        (playANote(16 + (noteAdapter)));
    }

});
$('#whiteftwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(17 + (noteAdapter)));
    } else {
        (playANote(17 + (noteAdapter)));
    }

});
$('#whitefstwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(18 + (noteAdapter)));
    } else {
        (playANote(18 + (noteAdapter)));
    }

});
$('#whitegtwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(19 + (noteAdapter)));
    } else {
        (playANote(19 + (noteAdapter)));
    }

});
$('#whitegstwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(20 + (noteAdapter)));
    } else {
        (playANote(20 + (noteAdapter)));
    }

});
$('#whiteatwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(21 + (noteAdapter)));
    } else {
        (playANote(21 + (noteAdapter)));
    }

});
$('#whiteastwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(22 + (noteAdapter)));
    } else {
        (playANote(22 + (noteAdapter)));
    }

});
$('#whitebtwo').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(23 + (noteAdapter)));
    } else {
        (playANote(23 + (noteAdapter)));
    }

});

onOffButtonHandle = function (choiceVariable, onButtonName, offButtonName) {
    if (choiceVariable == "unselect") {
        document.getElementById(onButtonName).classList.remove('onButtonSelected');
        document.getElementById(offButtonName).classList.remove('onButtonSelected');
        document.getElementById(onButtonName).classList.remove('offButtonSelected');
        document.getElementById(offButtonName).classList.remove('offButtonSelected');
    } else if (choiceVariable == "off") {
        choiceVariable = "off"
            document.getElementById(onButtonName).classList.remove('onButtonSelected');
        document.getElementById(offButtonName).classList.remove('onButtonSelected');
        document.getElementById(onButtonName).classList.add('offButtonSelected');
        document.getElementById(offButtonName).classList.add('offButtonSelected');
    } else if (choiceVariable == "on") {
        choiceVariable = "on"
            document.getElementById(onButtonName).classList.add('onButtonSelected');
        document.getElementById(offButtonName).classList.add('onButtonSelected');
        document.getElementById(onButtonName).classList.remove('offButtonSelected');
        document.getElementById(offButtonName).classList.remove('offButtonSelected');
    }
    updateOnOffCounters();
}

$('#cOnButton').click(function () {
    switch (cChoice) {
    case "unselected":
        cChoice = "on"
            break;
    case "on":
        cChoice = "off"
            break;
    case cChoice = "off":
            cChoice = "on"
            break;
    }
    onOffButtonHandle(cChoice, 'cOnButton', 'cOffButton');
});
$('#cOffButton').click(function () {
    switch (cChoice) {
    case "unselected":
        cChoice = "off"
            break;
    case "on":
        cChoice = "off"
            break;
    case cChoice = "off":
            cChoice = "on"
            break;
    }
    onOffButtonHandle(cChoice, 'cOnButton', 'cOffButton');
});

$('#csOnButton').click(function () {
    switch (csChoice) {
    case "unselected":
        csChoice = "on"
            break;
    case "on":
        csChoice = "off"
            break;
    case csChoice = "off":
            csChoice = "on"
            break;
    }
    onOffButtonHandle(csChoice, 'csOnButton', 'csOffButton');
});
$('#csOffButton').click(function () {
    switch (csChoice) {
    case "unselected":
        csChoice = "off"
            break;
    case "on":
        csChoice = "off"
            break;
    case csChoice = "off":
            csChoice = "on"
            break;
    }
    onOffButtonHandle(csChoice, 'csOnButton', 'csOffButton');
});

$('#dOnButton').click(function () {
    switch (dChoice) {
    case "unselected":
        dChoice = "on"
            break;
    case "on":
        dChoice = "off"
            break;
    case dChoice = "off":
            dChoice = "on"
            break;
    }
    onOffButtonHandle(dChoice, 'dOnButton', 'dOffButton');
});
$('#dOffButton').click(function () {
    switch (dChoice) {
    case "unselected":
        dChoice = "off"
            break;
    case "on":
        dChoice = "off"
            break;
    case dChoice = "off":
            dChoice = "on"
            break;
    }
    onOffButtonHandle(dChoice, 'dOnButton', 'dOffButton');
});

$('#dsOnButton').click(function () {
    switch (dsChoice) {
    case "unselected":
        dsChoice = "on"
            break;
    case "on":
        dsChoice = "off"
            break;
    case dsChoice = "off":
            dsChoice = "on"
            break;
    }
    onOffButtonHandle(dsChoice, 'dsOnButton', 'dsOffButton');
});
$('#dsOffButton').click(function () {
    switch (dsChoice) {
    case "unselected":
        dsChoice = "off"
            break;
    case "on":
        dsChoice = "off"
            break;
    case dsChoice = "off":
            dsChoice = "on"
            break;
    }
    onOffButtonHandle(dsChoice, 'dsOnButton', 'dsOffButton');
});

$('#eOnButton').click(function () {
    switch (eChoice) {
    case "unselected":
        eChoice = "on"
            break;
    case "on":
        eChoice = "off"
            break;
    case eChoice = "off":
            eChoice = "on"
            break;
    }
    onOffButtonHandle(eChoice, 'eOnButton', 'eOffButton');
});
$('#eOffButton').click(function () {
    switch (eChoice) {
    case "unselected":
        eChoice = "off"
            break;
    case "on":
        eChoice = "off"
            break;
    case eChoice = "off":
            eChoice = "on"
            break;
    }
    onOffButtonHandle(eChoice, 'eOnButton', 'eOffButton');
});

$('#fOnButton').click(function () {
    switch (fChoice) {
    case "unselected":
        fChoice = "on"
            break;
    case "on":
        fChoice = "off"
            break;
    case fChoice = "off":
            fChoice = "on"
            break;
    }
    onOffButtonHandle(fChoice, 'fOnButton', 'fOffButton');
});
$('#fOffButton').click(function () {
    switch (fChoice) {
    case "unselected":
        fChoice = "off"
            break;
    case "on":
        fChoice = "off"
            break;
    case fChoice = "off":
            fChoice = "on"
            break;
    }
    onOffButtonHandle(fChoice, 'fOnButton', 'fOffButton');
});

$('#fsOnButton').click(function () {
    switch (fsChoice) {
    case "unselected":
        fsChoice = "on"
            break;
    case "on":
        fsChoice = "off"
            break;
    case fsChoice = "off":
            fsChoice = "on"
            break;
    }
    onOffButtonHandle(fsChoice, 'fsOnButton', 'fsOffButton');
});
$('#fsOffButton').click(function () {
    switch (fsChoice) {
    case "unselected":
        fsChoice = "off"
            break;
    case "on":
        fsChoice = "off"
            break;
    case fsChoice = "off":
            fsChoice = "on"
            break;
    }
    onOffButtonHandle(fsChoice, 'fsOnButton', 'fsOffButton');
});

$('#gOnButton').click(function () {
    switch (gChoice) {
    case "unselected":
        gChoice = "on"
            break;
    case "on":
        gChoice = "off"
            break;
    case gChoice = "off":
            gChoice = "on"
            break;
    }
    onOffButtonHandle(gChoice, 'gOnButton', 'gOffButton');
});
$('#gOffButton').click(function () {
    switch (gChoice) {
    case "unselected":
        gChoice = "off"
            break;
    case "on":
        gChoice = "off"
            break;
    case gChoice = "off":
            gChoice = "on"
            break;
    }
    onOffButtonHandle(gChoice, 'gOnButton', 'gOffButton');
});

$('#gsOnButton').click(function () {
    switch (gsChoice) {
    case "unselected":
        gsChoice = "on"
            break;
    case "on":
        gsChoice = "off"
            break;
    case gsChoice = "off":
            gsChoice = "on"
            break;
    }
    onOffButtonHandle(gsChoice, 'gsOnButton', 'gsOffButton');
});
$('#gsOffButton').click(function () {
    switch (gsChoice) {
    case "unselected":
        gsChoice = "off"
            break;
    case "on":
        gsChoice = "off"
            break;
    case gsChoice = "off":
            gsChoice = "on"
            break;
    }
    onOffButtonHandle(gsChoice, 'gsOnButton', 'gsOffButton');
});

$('#aOnButton').click(function () {
    switch (aChoice) {
    case "unselected":
        aChoice = "on"
            break;
    case "on":
        aChoice = "off"
            break;
    case aChoice = "off":
            aChoice = "on"
            break;
    }
    onOffButtonHandle(aChoice, 'aOnButton', 'aOffButton');
});
$('#aOffButton').click(function () {
    switch (aChoice) {
    case "unselected":
        aChoice = "off"
            break;
    case "on":
        aChoice = "off"
            break;
    case aChoice = "off":
            aChoice = "on"
            break;
    }
    onOffButtonHandle(aChoice, 'aOnButton', 'aOffButton');
});

$('#asOnButton').click(function () {
    switch (asChoice) {
    case "unselected":
        asChoice = "on"
            break;
    case "on":
        asChoice = "off"
            break;
    case asChoice = "off":
            asChoice = "on"
            break;
    }
    onOffButtonHandle(asChoice, 'asOnButton', 'asOffButton');
});
$('#asOffButton').click(function () {
    switch (asChoice) {
    case "unselected":
        asChoice = "off"
            break;
    case "on":
        asChoice = "off"
            break;
    case asChoice = "off":
            asChoice = "on"
            break;
    }
    onOffButtonHandle(asChoice, 'asOnButton', 'asOffButton');
});

$('#bOnButton').click(function () {
    switch (bChoice) {
    case "unselected":
        bChoice = "on"
            break;
    case "on":
        bChoice = "off"
            break;
    case bChoice = "off":
            bChoice = "on"
            break;
    }
    onOffButtonHandle(bChoice, 'bOnButton', 'bOffButton');
});
$('#bOffButton').click(function () {
    switch (bChoice) {
    case "unselected":
        bChoice = "off"
            break;
    case "on":
        bChoice = "off"
            break;
    case bChoice = "off":
            bChoice = "on"
            break;
    }
    onOffButtonHandle(bChoice, 'bOnButton', 'bOffButton');
});

$('#octave2').click(function () {
    document.getElementById("octave2").innerHTML = "Octave 2 (selected)";
    document.getElementById("octave3").innerHTML = "Octave 3";
    document.getElementById("octave4").innerHTML = "Octave 4";
    document.getElementById("octave2").style.background = buttonColor;
    document.getElementById("octave3").style.background = buttonNormalColor;
    document.getElementById("octave4").style.background = buttonNormalColor;
    document.getElementById("octave5").innerHTML = "Octave 5";
    document.getElementById("octave5").style.background = buttonNormalColor;
    noteAdapter = 12;
});

$('#octave3').click(function () {
    document.getElementById("octave2").style.background = buttonNormalColor;
    document.getElementById("octave3").style.background = buttonColor;
    document.getElementById("octave4").style.background = buttonNormalColor;
    document.getElementById("octave2").innerHTML = "Octave 2";
    document.getElementById("octave3").innerHTML = "Octave 3 (selected)";
    document.getElementById("octave4").innerHTML = "Octave 4";
    document.getElementById("octave5").innerHTML = "Octave 5";
    document.getElementById("octave5").style.background = buttonNormalColor;
    noteAdapter = 24;
});

$('#octave4').click(function () {
    document.getElementById("octave2").style.background = buttonNormalColor;
    document.getElementById("octave4").style.background = buttonColor;
    document.getElementById("octave3").style.background = buttonNormalColor;
    document.getElementById("octave2").innerHTML = "Octave 2";
    document.getElementById("octave3").innerHTML = "Octave 3";
    document.getElementById("octave4").innerHTML = "Octave 4 (selected)";

    document.getElementById("octave5").innerHTML = "Octave 5";
    document.getElementById("octave5").style.background = buttonNormalColor;
    noteAdapter = 36;
});

$('#octave5').click(function () {

    document.getElementById("octave2").style.background = buttonNormalColor;
    document.getElementById("octave4").style.background = buttonNormalColor;
    document.getElementById("octave3").style.background = buttonNormalColor;
    document.getElementById("octave2").innerHTML = "Octave 2";
    document.getElementById("octave3").innerHTML = "Octave 3";
    document.getElementById("octave4").innerHTML = "Octave 4";

    document.getElementById("octave5").innerHTML = "Octave 5 (selected)";
    document.getElementById("octave5").style.background = buttonColor;
    noteAdapter = 48;
});
$('.dropdown-item').click(function () {

    document.getElementById('songtitlespot').innerHTML = (this.innerHTML);
});
$('#directions').click(function () {
    playASongLink("quiet.mp3");
    // playASong("stromae");
});

$('#quiet').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("quiet.mp3");
    // playASong("stromae");
});

$('#quiet').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("quiet.mp3");
    // playASong("stromae");
});
$('#shatterme').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("shatterme.mp3");
    // playASong("stromae");
});
$('#kenshi').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("kenshi.mp3");
    // playASong("stromae");
});
$('#joji').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("joji.mp3");
    // playASong("stromae");
});
$('#round').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("round.mp3");
    // playASong("stromae");
});
$('#delilah').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("delilah.mp3");
    // playASong("stromae");
});
$('#saymyname').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("saymyname.mp3");
    // playASong("stromae");
});
$('#titanium').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("titanium.mp3");
    // playASong("stromae");
});

$('#vacant').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("vacant.mp3");
    // playASong("stromae");
});

$('#lethergo').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("lethergo.mp3");
    // playASong("stromae");
});

$('#talk').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("talk.mp3");
    // playASong("stromae");
});
$('#samurai').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("samurai.mp3");
    // playASong("stromae");
});
$('#takecare').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("takecare.mp3");
    // playASong("stromae");
});
$('#radioactive').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("radioactive.mp3");
    // playASong("stromae");
});
$('#swimmingpools').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("swimmingpools.mp3");
    // playASong("stromae");
});
$('#nightingale').click(function () {
    try {
        currentTag = this.id

            currentSong.pause();
    } catch (error) {}
    playASongLink("nightingale.mp3");
    // playASong("stromae");
});
$('#stromae').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("stromae.mp3");
    // playASong("stromae");
});

$('#wakemeup').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("wakemup.mp3");
    // playASong("stromae");
});
$('#sendmylove').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("sendmylove.mp3");
    // playASong("stromae");
});
$('#closer').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("closer.mp3");
    // playASong("stromae");
});
$('#griftwood').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("griftwood.mp3");
    // playASong("stromae");
});


$('#blackparade').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("blackparade.mp3");
    // playASong("stromae");
});
$('#hello').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("hello.mp3");
    // playASong("stromae");
});
$('#glimpse').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("glimpse.mp3");
    // playASong("stromae");
});
$('#starships').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("starships.mp3");
    // playASong("stromae");
});
$('#everytime').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("everytime.mp3");
    // playASong("stromae");
});
$('#sprung').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("sprung.mp3");
    // playASong("stromae");
});
$('#tiger').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("tiger.mp3");
    // playASong("stromae");
});

$('#oldtown').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("oldtown.mp3");
    // playASong("stromae");
});
$('#ghost').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("ghost.mp3");
    // playASong("stromae");
});
$('#highhopes').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("highhopes.mp3");
    // playASong("stromae");
});
$('#phoenix').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("phoenix.mp3");
    // playASong("stromae");
});
$('#attention').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("attention.mp3");
    // playASong("stromae");
});
$('#halo').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("halo.mp3");
    // playASong("stromae");
});

$('#centuries').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("centuries.mp3");
    // playASong("stromae");
});
$('#chungus').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("chungus.mp3");
    // playASong("stromae");
});
$('#breathe').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("breathe.mp3");
    // playASong("stromae");
});
$('#day5').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("day5.mp3");
    // playASong("stromae");
});
$('#wildfree').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("wildfree.mp3");
    // playASong("stromae");
});
$('#sadipop').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("sadipop.mp3");
    // playASong("stromae");
});
$('#tochurch').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("tochurch.mp3");
    // playASong("stromae");
});

$('#likeaprayer').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("likeaprayer.mp3");
    // playASong("stromae");
});
$('#glory').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("glory.mp3");
    // playASong("stromae");
});
$('#setfire').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("setfire.mp3");
    // playASong("stromae");
});
$('#1999').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("1999.mp3");
    // playASong("stromae");
});
$('#twicemore').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("twicemore.mp3");
    // playASong("stromae");
});
$('#lovesong').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("lovesong.mp3");
    // playASong("stromae");
});




$('#takeonme').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("takeonme.mp3");
    // playASong("stromae");
});

$('#besideyou').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("besideyou.mp3");
    // playASong("stromae");
});
$('#befour').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("befour.mp3");
    // playASong("stromae");
});
$('#lasttime').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("lasttime.mp3");
    // playASong("stromae");
});
$('#kaisarion').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("kaisarion.mp3");
    // playASong("stromae");
});
$('#notcalling').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("notcalling.mp3");
    // playASong("stromae");
});
$('#heartless').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("heartless.mp3");
    // playASong("stromae");
});
$('#waitforyou').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("waitforyou.mp3");
    // playASong("stromae");
});
$('#dream').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("dream.mp3");
    // playASong("stromae");
});
$('#smashing').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("smashing.mp3");
    // playASong("stromae");
});
$('#girlthat').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("girlthat.mp3");
    // playASong("stromae");
});
$('#tabu').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("tabu.mp3");
    // playASong("stromae");
});
$('#harleys').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("harleys.mp3");
    // playASong("stromae");
});

$('#danishsweet').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("danishsweet.mp3");
    // playASong("stromae");
});
$('#linger').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("linger.mp3");
    // playASong("stromae");
});
$('#hihigh').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("hihigh.mp3");
    // playASong("stromae");
});

$('#wait').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("wait.mp3");
    // playASong("stromae");
});
$('#lighters').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("lighters.mp3");
    // playASong("stromae");
});

$('#riseup').click(function () {
    try {
        currentTag = this.id
            currentSong.pause();
    } catch (error) {}
    playASongLink("riseup.mp3");
    // playASong("stromae");
});
$('#resetSwitchesButton').click(function () {
    resetSwitches();
});

$('#submitButton').click(function () {
    if (currentSong != null) {
        try {
            generateMySubmissionKeys();
        } catch (error) {}
        try {
            checkCurrentSongAnswer();
        } catch (error) {}

        try {
            if (JSON.stringify(mySubmissionKeys) === JSON.stringify(currentSongKeys)) {
                if (!(grumpsofar.includes(currentSong.src))) {
                    grumpsofar.push(currentSong.src);
                    score = score + 1;
                    updateScores();

                    document.getElementById(currentTag).innerHTML = document.getElementById(currentTag).innerHTML + "&#10004";
                }
                setTimeout(goToMajor, 200);
            } else {
                alert('Not quite, try again');
                if (!(grumpsofarmajor.includes(currentSong.src))) {
                    score = score - 1;
                    updateScores();
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
});
$('#pausePlayButton').click(function () {
    if (playingState == "invisible") {
        document.getElementById('pausePlayButton').hidden = false;
        playingState = "playing";
    } else if (playingState == "paused") {
        currentSong.play();
        playingState = "playing";
        document.getElementById('pausePlayButton').innerHTML = "&nbsp;&#9613;&#9613;";
    } else if (playingState == "playing") {
        // alert ("yo")
        currentSong.pause();
        playingState = "paused"
            document.getElementById('pausePlayButton').innerHTML = "&#9658;";
    }

});
function goToMajor() {

    let answer = prompt('YOU GOT IT!!! Now... \n\nfollow-up question... what major key is this?');
    checkMajorKeyAnswer(answer);
}
$(function () {
    $("#slider-horizontal").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        value: 50,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
            accompanimentVolume = Number(document.getElementById("amount").value) + 0;
            // console.log("set to " + accompanimentVolume);
        }
    });
    $("#amount").val($("#slider-horizontal").slider("value"));
    accompanimentVolume = Number(document.getElementById("amount").value) + 0;
    // console.log("set to " + accompanimentVolume);
});
$(function () {
    $("#slider-horizontal-rhythm").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        value: 50,
        slide: function (event, ui) {
            $("#rhythmamount").val(ui.value);
            rhythmVolume = Number(document.getElementById("rhythmamount").value) + 0;
            for (let i = 0; i < audioArray.length; i++) {
                if (audioArray[i][1][1] == "song") {
                    audioArray[i][0].volume = ((0.01 + rhythmVolume)) / 400.0 - .00001; //accompanimentVolume/50;
                }
            }
            currentSong.volume = ((0.01 + rhythmVolume)) / 400.0 - .00001;
            // audio.volume = ((0.01 + rhythmVolume)) / 400.0 - .00001; //accompanimentVolume/50;
            // console.log("set to " + accompanimentVolume);
        }
    });
    $("#rhythmamount").val($("#slider-horizontal-rhythm").slider("value"));
    rhythmVolume = Number(document.getElementById("rhythmamount").value) + 0;
    // console.log("set to " + accompanimentVolume);
});
numInClass = function (nameOfClass) {
    let counter = 0;
    let targetrollpulldownelements = document.getElementsByClassName(nameOfClass);
    for (var i = 0; i < targetrollpulldownelements.length; i++) {
        counter++;
    }
    return counter;

}

updateScores = function () {
    // alert ("hi");
    // document.getElementById('totalscore').innerHTML=correct;
    document.getElementById('currentScore').innerHTML = score;

}
function updateOnOffCounters() {
    let numChecks = numInClass('onButtonSelected') / 2;
    let numXs = numInClass('offButtonSelected') / 2
        let isCheckTooMany = "";
    if (numChecks > 7) {
        isCheckTooMany = " (Too many)"
    }
    let isXTooMany = "";
    if (numXs > 5) {
        isXTooMany = " (Too many)"
    }
    document.getElementById('onCounter').innerHTML = (numChecks) + "/7 &#10004's" + isCheckTooMany;
    document.getElementById('offCounter').innerHTML = (numXs) + "/5 &#10060's" + isXTooMany;

}

function generateMySubmissionKeys() {
    mySubmissionKeys = [];
    if (cChoice == "on") {
        mySubmissionKeys.push("C");
    }
    if (csChoice == "on") {
        mySubmissionKeys.push("C#/Db");
    }
    if (dChoice == "on") {
        mySubmissionKeys.push("D");
    }
    if (dsChoice == "on") {
        mySubmissionKeys.push("D#/Eb");
    }
    if (eChoice == "on") {
        mySubmissionKeys.push("E");
    }
    if (fChoice == "on") {
        mySubmissionKeys.push("F");
    }
    if (fsChoice == "on") {
        mySubmissionKeys.push("F#/Gb");
    }
    if (gChoice == "on") {
        mySubmissionKeys.push("G");
    }
    if (gsChoice == "on") {
        mySubmissionKeys.push("G#/Ab");
    }
    if (aChoice == "on") {
        mySubmissionKeys.push("A");
    }
    if (asChoice == "on") {
        mySubmissionKeys.push("A#/Bb");
    }
    if (bChoice == "on") {
        mySubmissionKeys.push("B");
    }
    mySubmissionKeys.sort();
}

// initializePlayer();
function intializePlayer() {
    audio = currentSong;
    // playbtn = document.getElementById("controlTogglePlay");
    seekslider = document.getElementById("seekslider");
    // playbtn.addEventListener("click",playPause,false);
    audio.addEventListener("timeupdate", seektimeupdate, false);
    audio.addEventListener("ended", function () {
        clickToPlay = true;
    });
    seekslider = $("#seekslider");
    seekslider.slider({
        orientation: "horizantal",
        value: 25,
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        slide: function (event, ui) { // CHANGED HERE
            var seekto = audio.duration * (ui.value / 100);
            console.log('seekto:', seekto); // check console to see if this is getting called.
            audio.currentTime = seekto;
            if (clickToPlay) {
                audio.play();
                clickToPlay = false;
            }
        }
    });
}

// window.onload = intializePlayer;

// CHANGED HERE
function seektimeupdate() {
    var nt = audio.currentTime * (100 / audio.duration);
//    console.log('nt:', nt); // check console to see if this is getting called.
    seekslider.slider("value", nt); // CHANGED HERE
}

function checkCurrentSongAnswer() {
    currentSongKeys = [];
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/shatterme.mp3") {  //C major
        currentSongKeys = ["A", "B", "C", "D", "E", "F", "G"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/besideyou.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F", "G"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/notcalling.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F", "G"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/hihigh.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F", "G"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/stromae.mp3") { //Db major
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }	
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/heartless.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }	
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/waitforyou.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/harleys.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/danishsweet.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/tabu.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/wildfree.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/linger.mp3") { // D Major
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
		if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/samurai.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }		
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/starships.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/titanium.mp3") { // Eb
        currentSongKeys = ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/vacant.mp3") { // E Major
        currentSongKeys = ["A", "E", "C#/Db", "D#/Eb", "B", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/highhopes.mp3") { // F Major
        currentSongKeys = ["A", "C", "D", "E", "G", "F", "A#/Bb"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/round.mp3") {
        currentSongKeys = ["A", "C", "D", "E", "G", "F", "A#/Bb"];
    }	
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/attention.mp3") { // F#
        currentSongKeys = ["A#/Bb", "B", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/girlthat.mp3") {
        currentSongKeys = ["A#/Bb", "B", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/lethergo.mp3") { //G
        currentSongKeys = ["A", "B", "C", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/closer.mp3") { // Ab
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "G", "F", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/griftwood.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "G", "F", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/hello.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "G", "F", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/glimpse.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "G", "F", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/sprung.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "G", "F", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/kalisarion.mp3") { //A major
        currentSongKeys = ["A", "D", "C#/Db", "E", "B", "F#/Gb", "G#/Ab"];
    }	
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/day5.mp3") { //A major
        currentSongKeys = ["A", "D", "C#/Db", "E", "B", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/takeonme.mp3") {
        currentSongKeys = ["A", "D", "C#/Db", "E", "B", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/oldtown.mp3") { //B
        currentSongKeys = ["A#/Bb", "E", "C#/Db", "D#/Eb", "B", "F#/Gb", "G#/Ab"];
    }    
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/dream.mp3") {
        currentSongKeys = ["A#/Bb", "E", "C#/Db", "D#/Eb", "B", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/quiet.mp3") { // Bb
        currentSongKeys = ["C", "D", "D#/Eb", "F", "G", "A", "A#/Bb"];
    }

	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/talk.mp3") {
        currentSongKeys = ["A", "A#/Bb", "C", "D", "E", "F", "G"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/breathe.mp3") {
        currentSongKeys = ["C", "D", "D#/Eb", "F", "G", "A", "A#/Bb"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/joji.mp3") {
        currentSongKeys = ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/tiger.mp3") {
        currentSongKeys = ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/wakemup.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
	    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/lasttime.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/takecare.mp3") {
        currentSongKeys = ["A#/Bb", "G#/Ab", "C", "D", "D#/Eb", "F", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/radioactive.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/swimmingpools.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/nightingale.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/sendmylove.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/delilah.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/ghost.mp3") {
        currentSongKeys = ["A", "D", "C#/Db", "E", "B", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/phoenix.mp3") {
        currentSongKeys = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/attention.mp3") {
        currentSongKeys = ["A#/Bb", "B", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/girlthat.mp3") {
        currentSongKeys = ["A#/Bb", "B", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/centuries.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F#/Gb", "G"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/befour.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F#/Gb", "G"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/chungus.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/blackparade.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/sadipop.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/halo.mp3") {
        currentSongKeys = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/tochurch.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F#/Gb", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/likeaprayer.mp3") {
        currentSongKeys = ["A", "A#/Bb", "C", "D", "E", "F", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/lovesong.mp3") {
        currentSongKeys = ["A", "A#/Bb", "C", "D", "E", "F", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/setfire.mp3") {
        currentSongKeys = ["A", "A#/Bb", "C", "D", "E", "F", "G"];
    }
	    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/1999.mp3") {
        currentSongKeys = ["A", "A#/Bb", "C", "D", "E", "F", "G"];
    }
	    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/twicemore.mp3") {
        currentSongKeys = ["A", "A#/Bb", "C", "D", "E", "F", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/glory.mp3") {
        currentSongKeys = ["A", "B", "C", "D", "E", "F", "G"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/riseup.mp3") {
        currentSongKeys = ["A#/Bb", "F", "C#/Db", "C", "D#/Eb", "F#/Gb", "G#/Ab"];
    }    
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/kenshi.mp3") {
        currentSongKeys = ["A#/Bb", "F", "C#/Db", "C", "D#/Eb", "F#/Gb", "G#/Ab"];
    }
	    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/wait.mp3") {
        currentSongKeys = ["A#/Bb", "F", "C#/Db", "C", "D#/Eb", "F#/Gb", "G#/Ab"];
    }
    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/lighters.mp3") {
        currentSongKeys = ["A#/Bb", "C", "D#/Eb", "D", "F", "G", "G#/Ab"];
    }
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/smashing.mp3") {
        currentSongKeys = ["A#/Bb", "C", "D#/Eb", "D", "F", "G", "G#/Ab"];
    }
	
	
	if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/saymyname.mp3") {
        currentSongKeys = ["A#/Bb", "C", "D#/Eb", "D", "F", "G", "G#/Ab"];
    }
	    if (currentSong.src == "https://www.nwhsaob.com/Midi/samplestwo/everytime.mp3") {
        currentSongKeys = ["A#/Bb", "C", "D#/Eb", "D", "F", "G", "G#/Ab"];
    }
    currentSongKeys.sort();
}

getMajorKey = function (localArrayOfNotes) {
    localArrayOfNotes.sort();
    let thisLocalKey = "";
    if (JSON.stringify(localArrayOfNotes) === JSON.stringify(cMajorScale)) {
        thisLocalKey = "C"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(cSharpMajorScale)) {
        thisLocalKey = "C#/Db"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(dMajorScale)) {
        thisLocalKey = "D"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(dSharpMajorScale)) {
        thisLocalKey = "D#/Eb"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(eMajorScale)) {
        thisLocalKey = "E"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(fMajorScale)) {
        thisLocalKey = "F"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(fSharpMajorScale)) {
        thisLocalKey = "F#/Gb"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(gMajorScale)) {
        thisLocalKey = "G"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(gSharpMajorScale)) {
        thisLocalKey = "G#/Ab"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(aMajorScale)) {
        thisLocalKey = "A"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(aSharpMajorScale)) {
        thisLocalKey = "A#/Bb"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(bMajorScale)) {
        thisLocalKey = "B"
    }
    return (thisLocalKey);
}

getMinorKey = function (localArrayOfNotes) {
    localArrayOfNotes.sort();
    let thisLocalKey = "";
    if (JSON.stringify(localArrayOfNotes) === JSON.stringify(cMajorScale)) {
        thisLocalKey = "A"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(cSharpMajorScale)) {
        thisLocalKey = "A#/Bb"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(dMajorScale)) {
        thisLocalKey = "B"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(dSharpMajorScale)) {
        thisLocalKey = "C"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(eMajorScale)) {
        thisLocalKey = "C#/Db"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(fMajorScale)) {
        thisLocalKey = "D"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(fSharpMajorScale)) {
        thisLocalKey = "D#/Eb"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(gMajorScale)) {
        thisLocalKey = "E"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(gSharpMajorScale)) {
        thisLocalKey = "F"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(aMajorScale)) {
        thisLocalKey = "F#/Gb"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(aSharpMajorScale)) {
        thisLocalKey = "G"
    } else if (JSON.stringify(localArrayOfNotes) === JSON.stringify(bMajorScale)) {
        thisLocalKey = "G#/Ab"
    }
    return (thisLocalKey);
}

checkMajorKeyAnswer = function (userAnswer) {
    userAnswer = userAnswer.toUpperCase();
    userAnswer = userAnswer.replace(/\s/g, '');
    userAnswer = userAnswer.replace(/-/g, '');
    userAnswer = userAnswer.replace('FLAT', 'B');
    userAnswer = userAnswer.replace('SHARP', '#');
    userAnswer = userAnswer.replace('M', '');
    userAnswer = userAnswer.replace('AJOR', '');
    userAnswer = userAnswer.replace('INOR', '');
    if (userAnswer == "C#") {
        userAnswer = "C#/DB";
    } else if (userAnswer == "DB") {
        userAnswer = "C#/DB";
    } else if (userAnswer == "D#") {
        userAnswer = "D#/EB";
    } else if (userAnswer == "EB") {
        userAnswer = "D#/EB";
    } else if (userAnswer == "F#") {
        userAnswer = "F#/GB";
    } else if (userAnswer == "GB") {
        userAnswer = "F#/GB";
    } else if (userAnswer == "G#") {
        userAnswer = "G#/AB";
    } else if (userAnswer == "AB") {
        userAnswer = "G#/AB";
    } else if (userAnswer == "A#") {
        userAnswer = "A#/BB";
    } else if (userAnswer == "BB") {
        userAnswer = "A#/BB";
    }
    if (userAnswer.toLowerCase() === getMajorKey(currentSongKeys).toLowerCase()) {

        if (!(grumpsofarmajor.includes(currentSong.src))) {
            score = score + .25;

            document.getElementById(currentTag).innerHTML = document.getElementById(currentTag).innerHTML + "&#10004";
            document.getElementById('currentScore').innerHTML = score;

            updateScores();
            grumpsofarmajor.push(currentSong.src);
        }

        setTimeout(goToMinor, 200);
    } else {
        alert("Not Quite, click submit if you'd like to try again!");
        if (!(grumpsofarmajor.includes(currentSong.src))) {}
    }
}
goToMinor = function () {

    setTimeout(checkMinorKeyAnswer(prompt('YOU GOT IT!!! Now... \n\nfollow-up question... what minor key is this?')), 200);
}

checkMinorKeyAnswer = function (userAnswer) {
    userAnswer = userAnswer.toUpperCase();
    userAnswer = userAnswer.replace(/\s/g, '');
    userAnswer = userAnswer.replace(/-/g, '');
    userAnswer = userAnswer.replace('FLAT', 'B');
    userAnswer = userAnswer.replace('SHARP', '#');
    userAnswer = userAnswer.replace('M', '');
    userAnswer = userAnswer.replace('AJOR', '');
    userAnswer = userAnswer.replace('INOR', '');
    if (userAnswer == "C#") {
        userAnswer = "C#/DB";
    } else if (userAnswer == "DB") {
        userAnswer = "C#/DB";
    } else if (userAnswer == "D#") {
        userAnswer = "D#/EB";
    } else if (userAnswer == "EB") {
        userAnswer = "D#/EB";
    } else if (userAnswer == "F#") {
        userAnswer = "F#/GB";
    } else if (userAnswer == "GB") {
        userAnswer = "F#/GB";
    } else if (userAnswer == "G#") {
        userAnswer = "G#/AB";
    } else if (userAnswer == "AB") {
        userAnswer = "G#/AB";
    } else if (userAnswer == "A#") {
        userAnswer = "A#/BB";
    } else if (userAnswer == "BB") {
        userAnswer = "A#/BB";
    }
    if (userAnswer.toLowerCase() === getMinorKey(currentSongKeys).toLowerCase()) {
        alert("You got it!! Select another song from the 'Select Song' pulldown menu above. Once you have gotten five songs in a row perfectly that is probably a sign that you have masterd this skill.")
        if (!(grumpsofarminor.includes(currentSong.src))) {
            // correct++;
            document.getElementById(currentTag).innerHTML = document.getElementById(currentTag).innerHTML + "&#10004";

            score = score + .25;
            updateScores();

            grumpsofarminor.push(currentSong.src);
        }
    } else {
        alert("Not Quite, click submit if you'd like to try again. Note, you'll have to enter your major key again.");
        if (!(grumpsofarminor.includes(currentSong.src))) {
            // correct++;
            // score=score-.5;
            // updateScores();
        }
    }
}

resetSwitches = function () {
    cChoice = "unselected";
    csChoice = "unselected";
    dChoice = "unselected";
    dsChoice = "unselected";
    eChoice = "unselected";
    fChoice = "unselected";
    fsChoice = "unselected";
    gChoice = "unselected";
    gsChoice = "unselected";
    aChoice = "unselected";
    asChoice = "unselected";
    bChoice = "unselected";

    onOffButtonHandle("unselect", 'cOnButton', 'cOffButton');
    onOffButtonHandle("unselect", 'csOnButton', 'csOffButton');
    onOffButtonHandle("unselect", 'dOnButton', 'dOffButton');
    onOffButtonHandle("unselect", 'dsOnButton', 'dsOffButton');
    onOffButtonHandle("unselect", 'eOnButton', 'eOffButton');
    onOffButtonHandle("unselect", 'fOnButton', 'fOffButton');
    onOffButtonHandle("unselect", 'fsOnButton', 'fsOffButton');
    onOffButtonHandle("unselect", 'gOnButton', 'gOffButton');
    onOffButtonHandle("unselect", 'gsOnButton', 'gsOffButton');
    onOffButtonHandle("unselect", 'aOnButton', 'aOffButton');
    onOffButtonHandle("unselect", 'asOnButton', 'asOffButton');
    onOffButtonHandle("unselect", 'bOnButton', 'bOffButton');
}