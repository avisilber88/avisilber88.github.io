var randomNoteNum
var buttonPlay = false;
var cMajorArray = [0, [0, 2, 4, 5, 7, 9, 11]];
var cSharpMajorArray = [1, [1, 3, 5, 6, 8, 10, 0]];
var dMajorArray = [2, [2, 4, 6, 7, 9, 11, 1]];
var dSharpMajorArray = [3, [3, 5, 7, 8, 10, 0, 2]];
var eMajorArray = [4, [4, 6, 8, 9, 11, 1, 3]];
var fMajorArray = [5, [5, 7, 9, 10, 0, 2, 4]];
var fSharpMajorArray = [6, [6, 8, 10, 11, 1, 3, 5]];
var gMajorArray = [7, [7, 9, 11, 0, 2, 4, 6]];
var gSharpMajorArray = [8, [8, 10, 0, 1, 3, 5, 7]];
var aMajorArray = [9, [9, 11, 1, 2, 4, 6, 8]];
var aSharpMajorArray = [10, [10, 0, 2, 3, 5, 7, 9]];
var bMajorArray = [11, [11, 1, 3, 4, 6, 8, 10]];
var allTheMajors = [cMajorArray, cSharpMajorArray, dMajorArray, dSharpMajorArray, eMajorArray, fMajorArray, fSharpMajorArray, gMajorArray, gSharpMajorArray, aMajorArray, aSharpMajorArray, bMajorArray];
var highScoreKeys = [];
var startTime;
var rhythmSense = false;
var messageOn = "on"
    var simplifiedDenominator = 1;
var availableSteps = "sixteenths";
var source
var timeDomainData
var bitCounter
var audioCtx
var analyzer
var correlator = "locator"
    var hr = "hr"
    var frameCounter = 0
    var measureLength = 25
    var minDrawRate = .6
    var minDrawMLength = measureLength * minDrawRate
    var oST = "ghost"
    var measurements = []
    var gaugeAccuracy = 5 // Avi says lower is less accurate sensitive, higher requires higher accuracy. It used to be set at 16.
    var gaugeNear = 1.4
    var tunerWidth = Math.floor($("#tunerframe").width() - 0);
var tempSequenceArray = [];
var tempKickSequenceArray = [];
var tempHatSequenceArray = [];
var tempSnareSequenceArray = [];
var tempClapSequenceArray = []; // inst copy
var tempInst5SequenceArray = []; // inst copy
var tempInst6SequenceArray = []; // inst copy
var tempInst7SequenceArray = []; // inst copy
var metronome = true;
var levelOneMessageShown = false;

var levelTwoMessageShown = false;
var levelThreeMessageShown = false;
var levelFourMessageShown = false;
var levelFiveMessageShown = false;
var levelSixMessageShown = false;
var levelSevenMessageShown = false;
var levelEightMessageShown = false;
var levelNineMessageShown = false;
var levelTenMessageShown = false;

var theirEmail;

// if tunerWidth > 600 && (tunerWidth = 600)
// $("#tunerback").css({
// width: tunerWidth,
// height: .92 * tunerWidth,
// "margin-bottom": .08 * tunerWidth
// }),
// $("#tunerframe").css({
// "margin-bottom": .1 * tunerWidth
// });
var highScoreKeysNames = [];
var highScore = 0;
var totalScore = 0;
var timerLength = 10 / 60; // in minutes
var timerTripped = false;
var keyType = "major";
var noteRange = 1 * 12;
var scaleInterval = 2;
var frameCounter = 0;
var keyOf = 0;
var synthStarted;
var noteKeyRange = 7;
var scaleAdapter = 0;
var noteAdapter = 24; // limited by the lower limit of my audio files, 10 is the lowest you should go.
var testing = "yep";
var noteToSing = "";
var instrument = "synth";
var newQuestionTime = false;
var beginning = true;
var previousNote = "";
var audioArray = [];
var arpeggioAudioArray = [];
var mostRecentSungNum = 0;
var rootAudioArray = [];
var synthTone = new Tone.PolySynth(1, Tone.Synth);
var synth = synthTone.toMaster();
var synthTone2 = new Tone.PolySynth(1, Tone.Synth);
var synth2 = synthTone2.toMaster();
var score = 0;
var intervalDirection = "up";
var randomScaleNum = 0;
var randomArpeggioScaleNum = 0;
var buttonColor = '#00cc00';
var buttonNormalColor = 'buttonface';
var accompaniment = true;
var chordIsDone = false;
var lastReferenceInversion = false;
var referenceInversion = false;
var lastReference = 0;
var lastRandomScaleNum = 0;
var firstChordOver = false;
var inversionsAreOn = true;
var shiftAdapter = 0;
var newLastRandomScaleNum = 0;
var referenceVolume = 60;
var rhythmVolume = 50;
var accompanimentVolume = 60;
var justPlayingScaleFam = false;
var continuous = false;
var globalTimeRequirement = 2;
var timeRequirement = 2;
var scorePauseTimeStart = 0;
var pauseTimeStart = 0;
var pauseTimeAmount = 0;
var paused = false;
var scorePaused = false;
var scorePauseTimeAmount = 0;
var majorCheck = false;
var thirdType = "";
var previousPauseTimeAmount = 0;
var previousScorePauseTimeAmount = 0;
var noteTimeStart = 0;
var noteTime = 0;
var currentBPM = 100;
var noteTimeBeats = 0;
var noteTimeSeconds = 0;
var rootTimeBeats = 0;
var rootTimeSeconds = 0;
var rootTimeStart = 0;
var rootTime = 0;
var arpeggioTimeBeats = 0;
var arpeggioTimeSeconds = 0;
var arpeggioTimeStart = 0;
var arpeggioTime = 0;
var rhythmTimeBeats = 0;
var rhythmTimeSeconds = 0;
var rhythmTimeStart = 0;
var rhythmTime = 0;
var snareTimeBeats = 0;
var snareTimeSeconds = 0;
var snareTimeStart = 0;
var snareTime = 0;
var kickTimeBeats = 0;
var kickTimeSeconds = 0;
var kickTimeStart = 0;
var kickTime = 0;
var hatTimeBeats = 0;
var hatTimeSeconds = 0;
var hatTimeStart = 0;
var hatTime = 0;
var snareTimeBeats = 0;
var snareTimeSeconds = 0;
var snareTimeStart = 0;
var snareTime = 0;
var chordTimeBeats = 0;
var chordTimeSeconds = 0;
var chordTimeStart = 0;
var chordTime = 0;
var playSequences;
var playArpeggioSequences;
var playRootSequences;
var sequenceStarted = false;
var sequenceArray = [];
var sequencePlay = false;
var arpeggioSequenceStarted = false;
var arpeggioSequenceArray = [];
var arpeggioSequencePlay = false;
var rhythmSequenceStarted = false;
var rhythmSequenceArray = [];
var rhythmSequencePlay = false;
var kickSequenceStarted = false;
var kickSequenceArray = [];
var kickSequencePlay = false;
var kickinstrument = "kick";
var hatinstrument = "hat";
var snareinstrument = "snare";
var clapinstrument = "openhat"; // inst copy
var randomizeClaps = false; // inst copy
var clapSequenceStarted = false; // inst copy
var clapSequenceArray = []; // inst copy
var clapSequencePlay = false; // inst copy
var currentclapBeats = 0; // inst copy
var clapTimeStart = 0; // inst copy
var clapStepArray = []; // inst copy
var clapTimerStarted = false; // inst copy
var clapStarted = false; // inst copy
var clapSequenceCopy = []; // inst copy
var inst5SequenceStarted = false; // inst copy
var inst5SequenceArray = []; // inst copy
var inst5SequencePlay = false; // inst copy
var currentinst5Beats = 0; // inst copy
var inst5TimeStart = 0; // inst copy
var inst5instrument = "openhat"; // inst copy
var randomizeInst5 = false; // inst copy
var inst5StepArray = []; // inst copy
var inst5TimerStarted = false; // inst copy
var inst5Started = false; // inst copy
var inst5SequenceCopy = []; // inst copy
var inst6SequenceStarted = false; // inst copy
var inst6SequenceArray = []; // inst copy
var inst6SequencePlay = false; // inst copy
var currentinst6Beats = 0; // inst copy
var inst6TimeStart = 0; // inst copy
var inst6instrument = "openhat"; // inst copy
var randomizeInst6 = false; // inst copy
var inst6StepArray = []; // inst copy
var inst6TimerStarted = false; // inst copy
var inst6Started = false; // inst copy
var inst6SequenceCopy = []; // inst copy
var inst7SequenceStarted = false; // inst copy
var inst7SequenceArray = []; // inst copy
var inst7SequencePlay = false; // inst copy
var currentinst7Beats = 0; // inst copy
var inst7TimeStart = 0; // inst copy
var inst7instrument = "openhat"; // inst copy
var randomizeInst7 = false; // inst copy
var inst7StepArray = []; // inst copy
var inst7TimerStarted = false; // inst copy
var inst7Started = false; // inst copy
var inst7SequenceCopy = []; // inst copy
var hatSequenceStarted = false;
var hatSequenceArray = [];
var hatSequencePlay = false;
var snareSequenceStarted = false;
var snareSequenceArray = [];
var snareSequencePlay = false;
var chordSequenceStarted = false;
var chordSequenceArray = [];
var chordSequencePlay = false;
var rootSequenceStarted = false;
var rootSequenceArray = [];
var rootSequencePlay = false;
var currentNoteBeats = 0;
var currentRootBeats = 0;
var currentArpeggioBeats = 0;
var currentRhythmBeats = 0;
var currentkickBeats = 0;
var currentsnareBeats = 0;
var currenthatBeats = 0;
var currentChordBeats = 0;
var currentRandomNoteNum = 0;
var currentRandomRootNum = 0;
var currentRandomArpeggioNum = 0;
var sequenceLength = 8;
var sequenceCopy = [];
var chordSequenceCopy = [];
var rootSequenceLength = 2;
var rootSequenceCopy = [];
var rhythmSequenceCopy = [];

var kickSequenceCopy = [];
var snareSequenceCopy = [];
var hatSequenceCopy = [];
var arpeggioSequenceLength = 4;
var arpeggioSequenceCopy = [];
var beatsExpected = 2;
var sequenceFirst = true;
var currentScore = 0;
var scoreTimeStart = 0;
var scoreTimeBeats = 0;
var scoreTimeSeconds = 0;
var melodicRange = 3;
var noteLengthMax = 4;
var noteLengthMin = 3;
var scoreTimeStart;
var newScore = false;
var wrongNote = false;
var wrongPoints = 0;
var deficitBoost = 0;
var mostRecentPostingNum = 0;
var lastMostRecentPostingNum = 0;
var weGotArpeggios = true;
var arpeggioPlay = true;
var arpeggioPlayBackup = false;
var arpeggioNoteLength = 0.5;
var rootNoteLength = 2;
var sequenceLeadLength = 2;
var arpeggioAdded = false;
var synthTimePassed = 0;
var rootPlay = true;
var arpeggioChoice = 0;
var hiddenOptions = false;
var singingStartTime = 0;
var singingEndTime = 0;
var singCaptureButtons = false;
var youAreSinging = false;
var singingTimeArray = [];
var captureSinging = false;
var singingCaptured = false;
var captureButtons = false;
var buttonsCaptured = false;
var rhythmStarted = false;
var kickStarted = false;
var snareStarted = false;
var hatStarted = false;
var buttonStartEndTimes = [];
$(".sequence-mode").slideToggle();
var rootOnButton = document.getElementById('play-root-on');
var rootOffButton = document.getElementById('play-root-on');
var arpeggioOneButton = document.getElementById('arpeggio-one');
var arpeggioTwoButton = document.getElementById('arpeggio-two');
var arpeggioZeroButton = document.getElementById('arpeggio-zero');
var arpeggioTimerStarted = false;
var noteTimerStarted = false;
var rootTimerStarted = false;
var scoreTimerStarted = false;
var pauseTimerStarted = false;
var wrongNoteStarted = false;
var rhythmTimerStarted = false;
var kickTimerStarted = false;
var snareTimerStarted = false;
var hatTimerStarted = false;
var chordTimerStarted = false;
var newWrong = false;
var scorePauseTime = 0;
var previousScorePauseTime = 0;
var leftHandDrop = -12;
var rhythmPlay = true;
var genrePullDown = false;
var referenceIgnore = true;
var nonReferencePlay = false;
var referenceNoteArray = [];
var chordSequenceLength = 2;
var arrayOfSungNotesOnly = [];
var activeChord = [];
var specificActiveChord = [];
var micMute = false;
var firstNoteShown = false;
var lastImageNote;
var currentImageNote;
var rememberSingingGroup;
var rememberTargetGroup;
var referenceGroups = [];
var rememberReferenceGroup;
var notationMode = "stationaryNotesMode";
var dotTheNote = false;
var dotTheSecondNote = false;
var tieOn = false;
var tieTime = false;
var tieAmountOne = 1;
var tieAmountTwo = 1;
var smallestNoteDenominator = 8;
var wholesToTieAtTheBeginning = 0;
var startingXSetting = 400;
var setupAFirstNote = false;
var firstNotationToCome = false;
var singAndTargetPlacement = 400;
var allTheButtons = [];
var allTheButtonsWithStatus = []; //[buttonid, status]
var scoreLevel = 0;
var currentLevelScore = 0;
var visualMode = "both";
var notesChangeable = true;
var intervalRotationType = "normal";
var lengthRotationType = "normal";
var sequenceIntervalArray = [];
var staffWidth = 500;
var numOfThisNoteInSequence = 0;
var wrongTarget = 'blue';
var correctTarget = 'lime';
var colorTarget = wrongTarget;
var answerRevealed = false;
var whoItIsUsingThis = "";
var ourLevelNumber = 0;
var kickStepArray = [];
var hatStepArray = [];
var snareStepArray = [];
var rhythmFreestyle = false;
var rhythmSpeedMode = false;
var randomizeKicks = false;
var randomizeHats = false;
var noMorePoints = false;
var numOfRandomSteps = 2;
var backbeat = true;
noteOnListener(0, 0);
var loadDatabase = [];
var db;
var loginMessageShown = true;

// init on doc ready
$(document).ready(init);

// sign-in anonymously
var auth = function () {
    // alert ("auth");
    firebase.auth().signInAnonymously()
    .then(function (result) {
        db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });

        db.collection("rhythmsenselogins").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // clone template row and append to table body
                // var tr = tempTr.clone();
                // tr.data('id', doc.id);
                console.warn(doc.id + "");
                loadDatabase.push(doc.id + "");
                // var data = doc.data();
                // // set cell values from Contact data
                // tr.find('td[data-prop]').each(function () {
                // var td = $(this);
                // td.text(data[td.data('prop')] || '');
                // });
                // tblBody.append(tr);
            });
        });
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

var logintothisapp = function () {
    tempname = prompt("what is your name?");
    tempemail = prompt("what is your e-mail?");
    if ((tempname.length > 0) && (tempemail.length > 0)) {
        loginMessageShown = false;
        levelOneMessageShown = false;
        levelTwoMessageShown = false;
        levelThreeMessageShown = false;
        levelFourMessageShown = false;
        levelFiveMessageShown = false;
        levelSixMessageShown = false;
        levelSevenMessageShown = false;
        levelEightMessageShown = false;
        levelNineMessageShown = false;
        levelTenMessageShown = false;
        makeAClassVisible('rhythmsettingbuttons');
        makeAClassVisible('scoreRow');
        updateUnlockedLevelsByUser(tempname, tempemail);
    }
}
document.getElementById('level-progress').style.display = 'none';

// document.getElementById('topButtons').style.display='none';
// document.getElementById('instrumentSettings').style.display='none';
// document.getElementById('harmonyChoices').style.display='none';
// document.getElementById('scaleChoices').style.display='none';
// document.getElementById('volumeChoices').style.display='none';
// document.getElementById('sequenceChoices').style.display='none';
// document.getElementById('sequenceSettingChoices').style.display='none';
// document.getElementById('recruitYourOwnChoices').style.display='none';
// document.getElementById('recruitYourOwnChoices').style.display='none';

//this isn't being used
// var function updateButtonStatuses() {
// allTheButtonsWithStatus=[topButtons, "useP iano", "useSynth", "useHumanVoice", "accompanimentOn", "accompanimentOff", "arpeggiosOn", "arpeggiosOff", "arpeggio-zero", "arpeggio-one", "arpeggio-two", "play-root-on", "play-root-off", "inversionsOn", "inversionsOff", "rhythmOn", "rhythmOff", "thirdDown", "thirdUp", "unison", "fourthDown", "fourthUp", "allHarmonies", "useSynth", "useSynth", ];
// for (var i=0; i <allTheButtons.length; i++){
// allTheButtonsWithStatus.push(allTheButtons[i]+"", document.getElementById(allTheButtons[i]).style.display));
// alert (allTheButtonsWithStatus[0]+" "+allTheButtonsWithStatus[1]);
// }
// $('accompanimentOff').click();
//


function setRhythmInstrument(instvariablename, instrumentname, instrumentfilename) { //example: inst5, open hat, openhat
    if (instvariablename == "inst5") {
        document.getElementById('inst5-row-title').innerHTML = instrumentname + "";
        inst5instrument = instrumentfilename + "";
    } else if (instvariablename == "inst6") {
        document.getElementById('inst6-row-title').innerHTML = instrumentname + "";
        inst6instrument = instrumentfilename + "";
    } else if (instvariablename == "inst7") {
        document.getElementById('inst7-row-title').innerHTML = instrumentname + "";
        inst7instrument = instrumentfilename + "";
    } else if (instvariablename == "clap") {
        document.getElementById('clap-row-title').innerHTML = instrumentname + "";
        clapinstrument = instrumentfilename + "";
    } else if (instvariablename == "kick") {
        document.getElementById('kick-row-title').innerHTML = instrumentname + "";
        kickinstrument = instrumentfilename + "";
    } else if (instvariablename == "hat") {
        document.getElementById('hat-row-title').innerHTML = instrumentname + "";
        hatinstrument = instrumentfilename + "";
    } else if (instvariablename == "snare") {
        document.getElementById('snare-row-title').innerHTML = instrumentname + "";
        snareinstrument = instrumentfilename + "";
    }

}

function setupStepSequencerArray() {
    kickStepArray = []
    kickStepArray.unshift(document.getElementById("kickstepsixteen"));
    kickStepArray.unshift(document.getElementById("kickstepfifteen"));
    kickStepArray.unshift(document.getElementById("kickstepfourteen"));
    kickStepArray.unshift(document.getElementById("kickstepthirteen"));
    kickStepArray.unshift(document.getElementById("kicksteptwelve"));
    kickStepArray.unshift(document.getElementById("kickstepeleven"));
    kickStepArray.unshift(document.getElementById("kickstepten"));
    kickStepArray.unshift(document.getElementById("kickstepnine"));
    kickStepArray.unshift(document.getElementById("kickstepeight"));
    kickStepArray.unshift(document.getElementById("kickstepseven"));
    kickStepArray.unshift(document.getElementById("kickstepsix"));
    kickStepArray.unshift(document.getElementById("kickstepfive"));
    kickStepArray.unshift(document.getElementById("kickstepfour"));
    kickStepArray.unshift(document.getElementById("kickstepthree"));
    kickStepArray.unshift(document.getElementById("kicksteptwo"));
    kickStepArray.unshift(document.getElementById("kickstepone"));

    clapStepArray = []// inst copy start
    clapStepArray.unshift(document.getElementById("clapstepsixteen"));
    clapStepArray.unshift(document.getElementById("clapstepfifteen"));
    clapStepArray.unshift(document.getElementById("clapstepfourteen"));
    clapStepArray.unshift(document.getElementById("clapstepthirteen"));
    clapStepArray.unshift(document.getElementById("clapsteptwelve"));
    clapStepArray.unshift(document.getElementById("clapstepeleven"));
    clapStepArray.unshift(document.getElementById("clapstepten"));
    clapStepArray.unshift(document.getElementById("clapstepnine"));
    clapStepArray.unshift(document.getElementById("clapstepeight"));
    clapStepArray.unshift(document.getElementById("clapstepseven"));
    clapStepArray.unshift(document.getElementById("clapstepsix"));
    clapStepArray.unshift(document.getElementById("clapstepfive"));
    clapStepArray.unshift(document.getElementById("clapstepfour"));
    clapStepArray.unshift(document.getElementById("clapstepthree"));
    clapStepArray.unshift(document.getElementById("clapsteptwo"));
    clapStepArray.unshift(document.getElementById("clapstepone")); // inst copy end


    inst5StepArray = []// inst copy start
    inst5StepArray.unshift(document.getElementById("inst5stepsixteen"));
    inst5StepArray.unshift(document.getElementById("inst5stepfifteen"));
    inst5StepArray.unshift(document.getElementById("inst5stepfourteen"));
    inst5StepArray.unshift(document.getElementById("inst5stepthirteen"));
    inst5StepArray.unshift(document.getElementById("inst5steptwelve"));
    inst5StepArray.unshift(document.getElementById("inst5stepeleven"));
    inst5StepArray.unshift(document.getElementById("inst5stepten"));
    inst5StepArray.unshift(document.getElementById("inst5stepnine"));
    inst5StepArray.unshift(document.getElementById("inst5stepeight"));
    inst5StepArray.unshift(document.getElementById("inst5stepseven"));
    inst5StepArray.unshift(document.getElementById("inst5stepsix"));
    inst5StepArray.unshift(document.getElementById("inst5stepfive"));
    inst5StepArray.unshift(document.getElementById("inst5stepfour"));
    inst5StepArray.unshift(document.getElementById("inst5stepthree"));
    inst5StepArray.unshift(document.getElementById("inst5steptwo"));
    inst5StepArray.unshift(document.getElementById("inst5stepone")); // inst copy end


    inst6StepArray = []// inst copy start
    inst6StepArray.unshift(document.getElementById("inst6stepsixteen"));
    inst6StepArray.unshift(document.getElementById("inst6stepfifteen"));
    inst6StepArray.unshift(document.getElementById("inst6stepfourteen"));
    inst6StepArray.unshift(document.getElementById("inst6stepthirteen"));
    inst6StepArray.unshift(document.getElementById("inst6steptwelve"));
    inst6StepArray.unshift(document.getElementById("inst6stepeleven"));
    inst6StepArray.unshift(document.getElementById("inst6stepten"));
    inst6StepArray.unshift(document.getElementById("inst6stepnine"));
    inst6StepArray.unshift(document.getElementById("inst6stepeight"));
    inst6StepArray.unshift(document.getElementById("inst6stepseven"));
    inst6StepArray.unshift(document.getElementById("inst6stepsix"));
    inst6StepArray.unshift(document.getElementById("inst6stepfive"));
    inst6StepArray.unshift(document.getElementById("inst6stepfour"));
    inst6StepArray.unshift(document.getElementById("inst6stepthree"));
    inst6StepArray.unshift(document.getElementById("inst6steptwo"));
    inst6StepArray.unshift(document.getElementById("inst6stepone")); // inst copy end

    inst7StepArray = []// inst copy start
    inst7StepArray.unshift(document.getElementById("inst7stepsixteen"));
    inst7StepArray.unshift(document.getElementById("inst7stepfifteen"));
    inst7StepArray.unshift(document.getElementById("inst7stepfourteen"));
    inst7StepArray.unshift(document.getElementById("inst7stepthirteen"));
    inst7StepArray.unshift(document.getElementById("inst7steptwelve"));
    inst7StepArray.unshift(document.getElementById("inst7stepeleven"));
    inst7StepArray.unshift(document.getElementById("inst7stepten"));
    inst7StepArray.unshift(document.getElementById("inst7stepnine"));
    inst7StepArray.unshift(document.getElementById("inst7stepeight"));
    inst7StepArray.unshift(document.getElementById("inst7stepseven"));
    inst7StepArray.unshift(document.getElementById("inst7stepsix"));
    inst7StepArray.unshift(document.getElementById("inst7stepfive"));
    inst7StepArray.unshift(document.getElementById("inst7stepfour"));
    inst7StepArray.unshift(document.getElementById("inst7stepthree"));
    inst7StepArray.unshift(document.getElementById("inst7steptwo"));
    inst7StepArray.unshift(document.getElementById("inst7stepone")); // inst copy end


    hatStepArray = []
    hatStepArray.unshift(document.getElementById("hatstepsixteen"));
    hatStepArray.unshift(document.getElementById("hatstepfifteen"));
    hatStepArray.unshift(document.getElementById("hatstepfourteen"));
    hatStepArray.unshift(document.getElementById("hatstepthirteen"));
    hatStepArray.unshift(document.getElementById("hatsteptwelve"));
    hatStepArray.unshift(document.getElementById("hatstepeleven"));
    hatStepArray.unshift(document.getElementById("hatstepten"));
    hatStepArray.unshift(document.getElementById("hatstepnine"));
    hatStepArray.unshift(document.getElementById("hatstepeight"));
    hatStepArray.unshift(document.getElementById("hatstepseven"));
    hatStepArray.unshift(document.getElementById("hatstepsix"));
    hatStepArray.unshift(document.getElementById("hatstepfive"));
    hatStepArray.unshift(document.getElementById("hatstepfour"));
    hatStepArray.unshift(document.getElementById("hatstepthree"));
    hatStepArray.unshift(document.getElementById("hatsteptwo"));
    hatStepArray.unshift(document.getElementById("hatstepone"));

    snareStepArray = []
    snareStepArray.unshift(document.getElementById("snarestepsixteen"));
    snareStepArray.unshift(document.getElementById("snarestepfifteen"));
    snareStepArray.unshift(document.getElementById("snarestepfourteen"));
    snareStepArray.unshift(document.getElementById("snarestepthirteen"));
    snareStepArray.unshift(document.getElementById("snaresteptwelve"));
    snareStepArray.unshift(document.getElementById("snarestepeleven"));
    snareStepArray.unshift(document.getElementById("snarestepten"));
    snareStepArray.unshift(document.getElementById("snarestepnine"));
    snareStepArray.unshift(document.getElementById("snarestepeight"));
    snareStepArray.unshift(document.getElementById("snarestepseven"));
    snareStepArray.unshift(document.getElementById("snarestepsix"));
    snareStepArray.unshift(document.getElementById("snarestepfive"));
    snareStepArray.unshift(document.getElementById("snarestepfour"));
    snareStepArray.unshift(document.getElementById("snarestepthree"));
    snareStepArray.unshift(document.getElementById("snaresteptwo"));
    snareStepArray.unshift(document.getElementById("snarestepone"));
}

var stepelements = document.getElementsByClassName("rhythmstep");
var rowpulldownelements = document.getElementsByClassName("kick-row-choices");

var makeARowPulldownVisible = function (rowclassname) {
    let targetrollpulldownelements = document.getElementsByClassName(rowclassname);
    for (var i = 0; i < targetrollpulldownelements.length; i++) {
        targetrollpulldownelements[i].hidden = false;
    }
}

var makeAClassVisible = function (rowclassname) {
    let targetrollpulldownelements = document.getElementsByClassName(rowclassname);
    for (var i = 0; i < targetrollpulldownelements.length; i++) {
        targetrollpulldownelements[i].hidden = false;
    }
}

var makeAClassInvisible = function (rowclassname) {
    let targetrollpulldownelements = document.getElementsByClassName(rowclassname);
    for (var i = 0; i < targetrollpulldownelements.length; i++) {
        targetrollpulldownelements[i].hidden = true;
    }
}
var makeARowPulldownInvisible = function (rowclassname) {
    let targetrollpulldownelements = document.getElementsByClassName(rowclassname);
    for (var i = 0; i < targetrollpulldownelements.length; i++) {
        targetrollpulldownelements[i].hidden = true;
    }
}

var setupThisRow = function (rowname, targetshowname, targetinstrumentfilename) {
    setRhythmInstrument(rowname, targetshowname, targetinstrumentfilename); //example: inst5, open hat, openhat

    // let targetrollpulldownelements = document.getElementsByClassName(rowclassname);
    // for (var i = 0; i < targetrollpulldownelements.length; i++) {
    // targetrollpulldownelements[i].hidden=false;
    // }
}

var addrhythmsteplisteners = function () {
    // var rhythm = this.getAttribute("data-myattribute");
    // alert(rhythm);
    if (!(this.classList.contains("unselectable"))) {
        if (this.classList.contains("unselectedstep")) {
            this.classList.add("selectedstep");
            this.classList.remove("unselectedstep");
        } else if (this.classList.contains("selectedstep")) {
            this.classList.add("unselectedstep");
            this.classList.remove("selectedstep");
        }
    }
    // setupStepRhythmSequence();
    if (rhythmFreestyle) {
        sequenceStarted = false;
        stopAllNotes();
        // stopAllVoices();
    } //7-24-20
    else {
        generateStepKickSequence();
        generateStepHatSequence();
    }

};

for (var i = 0; i < stepelements.length; i++) {
    stepelements[i].addEventListener('click', addrhythmsteplisteners, false);
}

function resetStepElements() {
    for (var i = 0; i < stepelements.length; i++) {
        if (stepelements[i].classList.contains("unselectedstep")) {}
        else if (stepelements[i].classList.contains("selectedstep")) {
            stepelements[i].classList.add("unselectedstep");
            stepelements[i].classList.remove("selectedstep");
        }

        if (stepelements[i].classList.contains("unselectable")) {
            // alert ("hi");
            stepelements[i].classList.remove("unselectable");

        }

    }
    // setupSteps();
}

function levelToNum(levelcomplete) {
    let levelcompletenumber = 0;
    if (levelcomplete === "levelOne") {
        levelcompletenumber = 1;
    } else if (levelcomplete === "levelTwo") {
        levelcompletenumber = 2;
    } else if (levelcomplete === "levelThree") {
        levelcompletenumber = 3;
    } else if (levelcomplete === "levelFour") {
        levelcompletenumber = 4;
    } else if (levelcomplete === "levelFive") {
        levelcompletenumber = 5;
    } else if (levelcomplete === "levelSix") {
        levelcompletenumber = 6;
    } else if (levelcomplete === "levelSeven") {
        levelcompletenumber = 7;
    } else if (levelcomplete === "levelEight") {
        levelcompletenumber = 8;
    } else if (levelcomplete === "levelNine") {
        levelcompletenumber = 9;
    } else if (levelcomplete === "levelTen") {
        levelcompletenumber = 10;
    }
    return levelcompletenumber;
}

function alertIntervalMessage(interval) {
    if (interval == "up") {
        alert("For this next note, sing a 3rd above the reference in the key of " + numToKeyName(keyOf) + " major");
    } else if (interval == "down") {
        alert("For this next note, sing a 3rd below the reference in the key of " + numToKeyName(keyOf) + " major");
    } else if (interval == "fourthUp") {
        alert("For this next note, sing a 4th above the reference in the key of " + numToKeyName(keyOf) + " major");
    } else if (interval == "fourthDown") {
        alert("For this next note, sing a 4th below the reference in the key of " + numToKeyName(keyOf) + " major");
    }
}
function setProgressGoals(goal1, goal2, goal3, goal4) {
    document.getElementById('levelOneNotProgress').innerHTML = goal1;
    document.getElementById('levelTwoNotProgress').innerHTML = goal2;
    document.getElementById('levelThreeNotProgress').innerHTML = goal3;
    document.getElementById('levelFourNotProgress').innerHTML = goal4;
    updateProgress();
}

function setupSteps() {

    for (var i = 0; i < 16; i++) {
        if (availableSteps == "quarters") {
            if (!((i == 0) || (i == 4) || (i == 8) || (i == 12))) {
                kickStepArray[i].classList.add('unselectable');
                clapStepArray[i].classList.add('unselectable'); // inst copy
                inst5StepArray[i].classList.add('unselectable'); // inst copy
                inst6StepArray[i].classList.add('unselectable'); // inst copy
                inst7StepArray[i].classList.add('unselectable'); // inst copy
                hatStepArray[i].classList.add('unselectable');
                snareStepArray[i].classList.add('unselectable');
            }
        } else if (availableSteps == "eighths") {
            if (!((i == 0) || (i == 4) || (i == 8) || (i == 12) || (i == 2) || (i == 6) || (i == 10) || (i == 14))) {
                kickStepArray[i].classList.add('unselectable');
                clapStepArray[i].classList.add('unselectable'); // inst copy
                inst5StepArray[i].classList.add('unselectable'); // inst copy
                inst6StepArray[i].classList.add('unselectable'); // inst copy
                inst7StepArray[i].classList.add('unselectable'); // inst copy
                hatStepArray[i].classList.add('unselectable');
                snareStepArray[i].classList.add('unselectable');
            }
        }
    }
}

function resetProgress() {
    // alert (currentLevelScore);
    // alert (((currentLevelScore/40)*100)+'%');
    if (currentLevelScore == 0) {
        document.getElementById('levelOneProgress').style.width = ((0) * 100) + '%';
        document.getElementById('levelOneNotProgress').style.width = (25 - ((0) * 100)) + '%';
        document.getElementById('levelOneProgress').innerHTML = (0) + "/5";
        document.getElementById('levelTwoProgress').style.width = (((0) / 20) * 100) + '%';
        document.getElementById('levelTwoNotProgress').style.width = (25 - (((0) / 20) * 100)) + '%';
        document.getElementById('levelTwoProgress').innerHTML = ((0)) + "/5";
        document.getElementById('levelThreeProgress').style.width = (((0) / 20) * 100) + '%';
        document.getElementById('levelThreeNotProgress').style.width = (25 - (((0) / 20) * 100)) + '%';
        document.getElementById('levelThreeProgress').innerHTML = ((0)) + "/5";
        document.getElementById('levelFourProgress').style.width = (((0) / 20) * 100) + '%';
        document.getElementById('levelFourNotProgress').style.width = (25 - (((0) / 20) * 100)) + '%';
        document.getElementById('levelFourProgress').innerHTML = ((0)) + "/5";
    }
}
function updateProgress() {
    // alert (currentLevelScore);
    // alert (((currentLevelScore/40)*100)+'%');
    if (currentLevelScore == 0) {
        document.getElementById('levelOneProgress').style.width = ((0) * 100) + '%';
        document.getElementById('levelOneNotProgress').style.width = (25 - ((0) * 100)) + '%';
        document.getElementById('levelOneProgress').innerHTML = (0) + "/5";
        document.getElementById('levelTwoProgress').style.width = (((0) / 20) * 100) + '%';
        document.getElementById('levelTwoNotProgress').style.width = (25 - (((0) / 20) * 100)) + '%';
        document.getElementById('levelTwoProgress').innerHTML = ((0)) + "/5";
        document.getElementById('levelThreeProgress').style.width = (((0) / 20) * 100) + '%';
        document.getElementById('levelThreeNotProgress').style.width = (25 - (((0) / 20) * 100)) + '%';
        document.getElementById('levelThreeProgress').innerHTML = ((0)) + "/5";
        document.getElementById('levelFourProgress').style.width = (((0) / 20) * 100) + '%';
        document.getElementById('levelFourNotProgress').style.width = (25 - (((0) / 20) * 100)) + '%';
        document.getElementById('levelFourProgress').innerHTML = ((0)) + "/5";
    } else if (currentLevelScore <= 5) {
        document.getElementById('levelOneProgress').style.width = ((currentLevelScore / 20) * 100) + '%';
        document.getElementById('levelOneNotProgress').style.width = (25 - ((currentLevelScore / 20) * 100)) + '%';
        document.getElementById('levelOneProgress').innerHTML = (currentLevelScore) + "/5";
    } else if (currentLevelScore <= 10) {
        document.getElementById('levelTwoProgress').style.width = (((currentLevelScore - 5) / 20) * 100) + '%';
        document.getElementById('levelTwoNotProgress').style.width = (25 - (((currentLevelScore - 5) / 20) * 100)) + '%';
        document.getElementById('levelTwoProgress').innerHTML = ((currentLevelScore - 5)) + "/5";
    } else if (currentLevelScore <= 15) {
        document.getElementById('levelThreeProgress').style.width = (((currentLevelScore - 10) / 20) * 100) + '%';
        document.getElementById('levelThreeNotProgress').style.width = (25 - (((currentLevelScore - 10) / 20) * 100)) + '%';
        document.getElementById('levelThreeProgress').innerHTML = ((currentLevelScore - 10)) + "/5";
    } else if (currentLevelScore <= 20) {
        document.getElementById('levelFourProgress').style.width = (((currentLevelScore - 15) / 20) * 100) + '%';
        document.getElementById('levelFourNotProgress').style.width = (25 - (((currentLevelScore - 15) / 20) * 100)) + '%';
        document.getElementById('levelFourProgress').innerHTML = ((currentLevelScore - 15)) + "/5";
    } else if (currentLevelScore >= 20) {
        alert("Congratulations! You have completed this level. Select a new level from the 'select level' menu");
        // alert (scoreLevel);
        addLevelCompleted(whoItIsUsingThis, theirEmail, scoreLevel);
        if (ourLevelNumber < levelToNum(scoreLevel)) {
            ourLevelNumber = levelToNum(scoreLevel);
            updateTheLevel(ourLevelNumber);
        }
        setupTheLevel(levelToNum(scoreLevel) + 1);
    }
}
function checkForUpdatedDifficulty() {
	rhythmFreestyle=true;
	rhythmFreestyleButton.click();
    if (currentLevelScore < 5) {
        if (availableSteps == "quarters") {
            numOfRandomSteps = 1;
        } else if (availableSteps == "eighths") {
            numOfRandomSteps = 1;
        } else if (availableSteps == "sixteenths") {
            numOfRandomSteps = 2;
        }
    } else if (currentLevelScore < 10) {
        if (availableSteps == "quarters") {
            numOfRandomSteps = 2;
        } else if (availableSteps == "eighths") {
            numOfRandomSteps = 3;
        } else if (availableSteps == "sixteenths") {
            numOfRandomSteps = 3;
        }
    } else if (currentLevelScore < 15) {
        if (availableSteps == "quarters") {
            backbeat = false;
            numOfRandomSteps = 2;
        } else if (availableSteps == "eighths") {
            numOfRandomSteps = 5;
        } else if (availableSteps == "sixteenths") {
            numOfRandomSteps = 5;
        }
    } else if (currentLevelScore < 20) {
        backbeat = false;
        if (availableSteps == "quarters") {
            numOfRandomSteps = 1;
        } else if (availableSteps == "eighths") {
            numOfRandomSteps = 3;
        } else if (availableSteps == "sixteenths") {
            numOfRandomSteps = 3;
        }
    }
    // updateTheLevel(ourLevelNumber);
    makeAClassInvisible('steprowpulldown');
}

function hideAllLevels() {
    document.getElementById('rhythm-level-one').hidden = true;
    document.getElementById('rhythm-level-two').hidden = true;
    document.getElementById('rhythm-level-three').hidden = true;
    document.getElementById('rhythm-level-four').hidden = true;
    document.getElementById('rhythm-level-five').hidden = true;
    document.getElementById('rhythm-level-six').hidden = true;
    document.getElementById('rhythm-level-seven').hidden = true;
    document.getElementById('rhythm-level-eight').hidden = true;
    document.getElementById('rhythm-level-nine').hidden = true;
    // document.getElementById('rhythm-level-ten').hidden = true;
}

function updateTheLevel(levelNumber) {
    if (levelNumber == 0) {
        if (!loginMessageShown) {
            loginMessageShown = true;

            alertify("We see you haven't completed a level here before, " + whoItIsUsingThis + ". We've set up a new account for you. If you have logged in before and completed a level, chances are you typed something wrong. If that is the case, click login and try again. (Note: logins are case-sensitive)")
        }
    } else {
        if (!loginMessageShown) {
            loginMessageShown = true;

            alertify(whoItIsUsingThis + "! Welcome back! You have at least a couple of levels unlocked! Check them out in the pulldown menu!");
        }
    }
    hideAllLevels();
    console.log(levelNumber);
    if (levelNumber >= 0) {
        document.getElementById('rhythm-level-one').hidden = false;
        makeAClassVisible("kick-choice");
        makeAClassVisible("kick-row");
        //make the hat row become visible after this point!
    }
    if (levelNumber > 0) {
        document.getElementById('rhythm-level-two').hidden = false;
        //make the snare row become visible after this point!
        makeAClassVisible("hat-choice");
        makeAClassVisible("hat-row");
        setRhythmInstrument("hat", "closed hat", "hat");
        if (!levelTwoMessageShown) {
            levelTwoMessageShown = true;
            alertify("Congratulations! Based on your progress up to this point, you have now unlocked the following:<br><br>-Level 2<br>-An additional instrument row, Closed Hats!!!!")
        }
    }
    if (levelNumber > 1) {
        document.getElementById('rhythm-level-three').hidden = false;
        //make the clave row become visible after this point!
        makeAClassVisible("snare-choice");
        makeAClassVisible("snare-row");
        if (!levelThreeMessageShown) {
            levelThreeMessageShown = true;
            alertify("Congratulations! Based on your progress up to this point, you have now unlocked the following:<br><br>-Level 3<br>-An additional instrument row, Snares!!!!<br>(You had heard them before as the backbeat snares)")
        }
    }
    if (levelNumber > 2) {
        document.getElementById('rhythm-level-four').hidden = false;
        //make the open-hat row become visible after this point!
        makeAClassVisible("clave-choice");
        makeAClassVisible("inst6-row");

        setRhythmInstrument("inst6", "clave", "clave");
        if (!levelFourMessageShown) {
            levelFourMessageShown = true;
            alertify("Congratulations! Based on your progress up to this point, you have now unlocked the following:<br><br>-Level 4<br>-An additional instrument row, Claves!!!!<br>(You had heard them before as the metronome)")
        }
    }
    if (levelNumber > 3) {
        document.getElementById('rhythm-level-five').hidden = false;
        makeAClassVisible('temposlider');
        makeAClassVisible("openhat-choice");
        makeAClassVisible("clap-row");
        setRhythmInstrument("clap", "open-hat", "openhat");
        if (!levelFiveMessageShown) {
            levelFiveMessageShown = true;
            alertify("Congratulations! Based on your progress up to this point, you have now unlocked the following:<br><br>-Level 5<br>-An additional instrument row, Open Hats!!!!<br>And...<br>-A TEMPO SLIDER!!!!<br>(use this to change the tempo of your drum pattern)")
        }
    }
    if (levelNumber > 4) {
        document.getElementById('rhythm-level-six').hidden = false;
        makeAClassVisible('steprowpulldown');
        makeAClassVisible('tom-choice');
        makeAClassVisible('inst7-row');
        setRhythmInstrument("inst7", "tom", "kick"); //replace kick with tom
        if (!levelSixMessageShown) {
            levelSixMessageShown = true;
            alertify("Congratulations! Based on your progress up to this point, you have now unlocked the following:<br><br>-Level 6<br>-An additional instrument row, Toms!!!!<br>And...<br>-pull-down options to alter your step-sequencer/channel-rack layout!!!! <br>(Note: as you unlock more instruments, they will appear in these menus. All of the currently unlocked instruments are now available to you.)")
        }
    }
    if (levelNumber > 5) {
        document.getElementById('rhythm-level-seven').hidden = false;
        makeAClassVisible("rim-choice");
        makeAClassVisible("inst5-row");
        setRhythmInstrument("inst5", "rim", "rim");
        if (!levelSevenMessageShown) {
            levelSevenMessageShown = true;
            alertify("Congratulations! Based on your progress up to this point, you have now unlocked the following:<br><br>-Level 7<br>-An additional instrument row, Rims!!!! <br>(Note: they have also been added to your instrument pulldowns!")
        }
    }
    if (levelNumber > 6) {
        document.getElementById('rhythm-level-eight').hidden = false;
        makeAClassVisible("triangle-choice");
        if (!levelEightMessageShown) {
            levelEightMessageShown = true;
            alertify("Congratulations! Based on your progress up to this point, you have now unlocked the following:<br><br>-An additional instrument, the Triangle has been added to your instrument pulldowns!!!!<br><br>(more levels and unlockables coming soon)")
        }
    }
    if (levelNumber > 7) {
        if (!levelNineMessageShown) {
            levelNineMessagShowne = true;
            document.getElementById('rhythm-level-nine').hidden = false;
        }
    }
    // if (levelNumber > 8) {
    // document.getElementById('rhythm-level-ten').hidden = false;
    // }
}

function setupTheLevel(levelNumber) {
    console.log(levelNumber);
    if (levelNumber == 1) {
        document.getElementById('rhythm-level-one').click()
    }
    if (levelNumber == 2) {
        document.getElementById('rhythm-level-two').click()
    }
    if (levelNumber == 3) {
        document.getElementById('rhythm-level-three').click()
    }
    if (levelNumber == 4) {
        document.getElementById('rhythm-level-four').click()
    }
    if (levelNumber == 5) {
        document.getElementById('rhythm-level-five').click()
    }
    if (levelNumber == 6) {
        document.getElementById('rhythm-level-six').click()
    }
    if (levelNumber == 7) {
        document.getElementById('rhythm-level-seven').click()
    }
    if (levelNumber == 8) {
        document.getElementById('rhythm-level-eight').click()
    }
    if (levelNumber == 9) {
        document.getElementById('rhythm-level-nine').click()
    }
    // if (levelNumber == 10) {
    // document.getElementById('rhythm-level-ten').click()
    // }

}

function swapVisualMode() {
    if (visualMode == "both") {
        visualMode = "tuner";
        document.getElementById('tunerframe').style.display = 'block';

        document.getElementById('staff-box').style.display = 'none';
        document.getElementById('viewBox').style.borderWidth = '0px';

    } else if (visualMode == "tuner") {
        visualMode = "sheetMusic";

        document.getElementById('tunerframe').style.display = 'none';

        document.getElementById('staff-box').style.display = 'block';

        document.getElementById('viewBox').style.borderWidth = '1px';
    } else if (visualMode == "sheetMusic") {

        visualMode = "tuner";

        document.getElementById('tunerframe').style.display = 'block';

        document.getElementById('staff-box').style.display = 'none';

        document.getElementById('viewBox').style.borderWidth = '1px';
        staffWidth = 500;
        renderer.resize(staffWidth, 200);
        startingXSetting = staffWidth - 100;

        document.getElementById('staff-box').style.paddingRight = '20px';
    }
}

function setVisualMode(visualModeLocal) {
    if (visualModeLocal == "both") {

        document.getElementById('viewBox').style.borderWidth = '0px';
        document.getElementById('viewStaff').classList.remove('active');
        document.getElementById('viewTuner').classList.remove('active');
        document.getElementById('viewBoth').classList.remove('active');
        document.getElementById('viewBoth').classList.add('active');
        visualModeLocal = "both";
        document.getElementById('tunerframe').style.display = 'block';

        document.getElementById('staff-box').style.display = 'block';
        staffWidth = 500;
        renderer.resize(staffWidth, 200);
        startingXSetting = staffWidth - 100;

        document.getElementById('staff-box').style.paddingRight = '0px';
    } else if (visualModeLocal == "tuner") {

        document.getElementById('viewBox').style.borderWidth = '1px';
        document.getElementById('viewStaff').classList.remove('active');
        document.getElementById('viewTuner').classList.remove('active');
        document.getElementById('viewBoth').classList.remove('active');
        document.getElementById('viewTuner').classList.add('active');
        visualModeLocal = "tuner";

        document.getElementById('tunerframe').style.display = 'block';

        document.getElementById('staff-box').style.display = 'none';
    } else if (visualModeLocal == "sheetMusic") {

        document.getElementById('viewStaff').classList.remove('active');
        document.getElementById('viewTuner').classList.remove('active');
        document.getElementById('viewBoth').classList.remove('active');
        document.getElementById('viewStaff').classList.add('active');

        visualModeLocal = "sheetMusic";

        document.getElementById('viewBox').style.borderWidth = '1px';
        document.getElementById('tunerframe').style.display = 'none';

        document.getElementById('staff-box').style.display = 'block';
        document.getElementById('staff-box').style.paddingRight = '20px';
        staffWidth = 500;
        renderer.resize(staffWidth, 200);
        startingXSetting = staffWidth - 100;

    }
}

function clearRhythms() {
    document.getElementById('level-progress').style.display = 'none';
    totalScore = 0;
    currentLevelScore = 0;
    randomizeKicks = false;
    randomizeHats = false;
    randomizeSnares = false;
    randomizeClaps = false; // inst copy
    randomizeInst5 = false; // inst copy
    randomizeInst6 = false; // inst copy
    randomizeInst7 = false; // inst copy
    backbeat = false;
    document.getElementById('kick-row').hidden = true;
    document.getElementById('snare-row').hidden = true;
    document.getElementById('hat-row').hidden = true;
    document.getElementById('inst5-row').hidden = true;
    document.getElementById('clap-row').hidden = true;
    document.getElementById('inst6-row').hidden = true;
    document.getElementById('inst7-row').hidden = true;

    currentLevelScore = 0;
    restartTimer();
    clearAllNotes();
    newQuestionTime = true;
    resetStepElements();
}

function clearButtons() {
    totalScore = 0;
    currentLevelScore = 0;
    sequenceOff.click();
    restartTimer();
    clearAllNotes();
    // document.getElementById('topButtons').style.display = 'none';

    document.getElementById('opening-card').style.display = 'none';
    document.getElementById('opening-card').style.display = 'none';
    document.getElementById('card-section').style.display = 'block';
    document.getElementById('instrumentSettings').style.display = 'none';
    document.getElementById('harmonyChoices').style.display = 'none';
    document.getElementById('scaleChoices').style.display = 'none';
    document.getElementById('volumeChoices').style.display = 'none';
    document.getElementById('sequenceChoices').style.display = 'none';
    document.getElementById('sequenceSettingChoices').style.display = 'none';
    document.getElementById('recruitYourOwnChoices').style.display = 'none';
    document.getElementById('staff-box').style.display = 'none';
    document.getElementById('hide-button').style.display = 'none';
    document.getElementById('opening-info').style.display = 'none';

    $("button.tuneron").click();

}
function allButtonsOn() {

    document.getElementById('level-progress').style.display = 'block';
    document.getElementById('scoreRow').style.display = 'block';
    document.getElementById('octaves').style.display = 'block';
    // document.getElementById('topButtons').style.display = 'block';
    document.getElementById('instrumentSettings').style.display = 'block';
    document.getElementById('harmonyChoices').style.display = 'block';
    document.getElementById('scaleChoices').style.display = 'block';
    document.getElementById('volumeChoices').style.display = 'block';
    document.getElementById('sequenceChoices').style.display = 'block';
    document.getElementById('sequenceSettingChoices').style.display = 'block';
    document.getElementById('recruitYourOwnChoices').style.display = 'block';
    document.getElementById('staff-box').style.display = 'block';
    document.getElementById('hide-button').style.display = 'block';
    setVisualMode("both");
    // document.getElementById('tunerAndSettings').style.display = 'block';
}
function setupSimpleMode() {
    document.getElementById("accompanimentOff").click();
    clearButtons();
    scoreLevel = "levels";
    // accompaniment=false;'
    turnAccompanimentOff();
}
function setupFreestyleMode() {

    document.getElementById('opening-card').style.display = 'none';
    document.getElementById('card-section').style.display = 'block';
    document.getElementById('opening-info').style.display = 'block';

    intervalRotationType = "normal";
    lengthRotationType = "normal";
    allButtonsOn();
    turnAccompanimentOff();

    document.getElementById('level-progress').style.display = 'none';
    document.getElementById('lesson-directions').innerHTML = "";
    document.getElementById('lesson-name').innerHTML = "";
    scoreLevel = "freestyle";
    notesChangeable = true;
    // accompaniment=false;'
    // turnAccompanimentOff();
}
function playYourOwn() {
    document.getElementById('opening-card').style.display = 'none';
    document.getElementById('card-section').style.display = 'block';
    document.getElementById('opening-info').style.display = 'block';

    intervalRotationType = "normal";
    lengthRotationType = "normal";
    document.getElementById("accompanimentOn").click();
    allButtonsOn();
    scoreLevel = "freestyle";
    notesChangeable = true;
    document.getElementById('tunerframe').style.display = 'none';

    document.getElementById('staff-box').style.display = 'none';
    clearButtons();
    document.getElementById('opening-card').style.display = 'none';
    document.getElementById('card-section').style.display = 'block';
    document.getElementById('scoreRow').style.display = 'none';
    document.getElementById('lesson-directions').innerHTML = "";
    document.getElementById('lesson-name').innerHTML = "";
    document.getElementById('level-progress').style.display = 'none';
    document.getElementById('octaves').style.display = 'none';
    // document.getElementById('tunerAndSettings').style.display = 'none';
    document.getElementById('recruitYourOwnChoices').style.display = 'block';
    // accompaniment=false;'

    setVisualMode("sheetMusic");
    // turnAccompanimentOff();
}

function setupRhythmSense() {
    rhythmSense = true;
    clearButtons();
    clearRhythms();
    document.getElementById('octaves').style.display = 'none';
    document.getElementById('scale-buttons').style.display = 'none';
    document.getElementById('tunerAndSettings').style.display = 'none';

    // document.getElementById('kick-row').hidden=false;
    // document.getElementById('snare-row').hidden=false;
    // document.getElementById('hat-row').hidden=false;
    // document.getElementById('clap-row').hidden=false;
    // document.getElementById('inst5-row').hidden=false;
    // document.getElementById('inst6-row').hidden=false;
    // document.getElementById('inst7-row').hidden=false;

    document.getElementById('harmony-interact-column').style.display = 'none';

    document.getElementById("lesson-name").innerHTML = "Rhythm Sense";

    document.getElementById("rhythmBox").hidden = false;

    setupStepSequencerArray();
    alertify("Welcome to Rhythm Sense! Login and then select your level from the pull-down menu");
    sequenceOn.click();
    turnAccompanimentOn();
    accompanimentVolume = 0;
    referenceVolume = 0;
    // paused=true;
    rhythmVolume = 0;
    // restartTimer();
    repeatOnFrame();

    setupMakeYourOwnMode();

}

function setupMakeYourOwnMode() {
    // alert(ourLevelNumber);
    clearRhythms();
    updateTheLevel(ourLevelNumber);
    // document.getElementById('kick-row').hidden=false;
    // document.getElementById('snare-row').hidden=false;
    // document.getElementById('hat-row').hidden=false;
    // document.getElementById('clap-row').hidden=false;
    // document.getElementById('inst5-row').hidden=false;
    // document.getElementById('inst6-row').hidden=false;
    // document.getElementById('inst7-row').hidden=false;
    setRhythmInstrument("inst5", "rim", "rim");
    setRhythmInstrument("inst6", "clave", "clave");
    setRhythmInstrument("inst7", "tom", "kick");

    setRhythmInstrument("hat", "closed hat", "hat");
    setupStepSequencerArray();

}

function setupLevelOne() { //one note over and over again. sameintervals, 3rd, 4th, 5th)
    // accompaniment = false;


    document.getElementById('level-progress').style.display = 'block';
    intervalRotationType = "scoreBased";
    lengthRotationType = "normal";

    scoreLevel = "levelOne";

    notesChangeable = false;
    clearButtons();

    document.getElementById("lesson-name").innerHTML = "Level 1:";
    document.getElementById("lesson-directions").innerHTML = "Directions: One note over and over again. Do ten reps, and then the interval changes(3rd up, 3rd down, 4th up, 5th up)\n\n";

    turnAccompanimentOff();
    setVisualMode("sheetMusic");
    globalTimeRequirement = 1;
    // document.getElementById('tunerframe').style.display = 'none';
}

function setupLevelTwo() { //the note changes under you. And interval changes.
    accompaniment = false;
    intervalRotationType = "scoreBased";
    lengthRotationType = "normal";

    scoreLevel = "levelTwo";
    notesChangeable = true;
    allButtonsOn();
    clearButtons();
    turnAccompanimentOff();
    setVisualMode("sheetMusic");

    document.getElementById("lesson-name").innerHTML = "Level 2:"
        document.getElementById("lesson-directions").innerHTML = "Directions: The note changes each time. And interval changes.";

    globalTimeRequirement = 1;
    repeatOnFrame();
}
function setupLevelThree() { //one note over and over again. (different intervals, 3rd, 4th, 5th)
    accompaniment = false;
    intervalRotationType = "randomIntervals";
    scoreLevel = "levelThree";
    lengthRotationType = "normal";
    notesChangeable = false;
    allButtonsOn();
    clearButtons();
    turnAccompanimentOff();
    document.getElementById("lesson-name").innerHTML = "Level 3: ";
    document.getElementById("lesson-directions").innerHTML = "Directions:  One note repeatedly. Intervals shuffle each rep";

    setVisualMode("sheetMusic");
}
function setupLevelFour() { //Sequence of 2 notes, same interval for each (The interval changes every 10 reps)\n\n

    accompaniment = false;
    intervalRotationType = "scoreBased";
    scoreLevel = "levelFour";
    lengthRotationType = "normal";
    allButtonsOn();
    clearButtons();
    sequenceOn.click();
    setVisualMode("sheetMusic");
    document.getElementById("lesson-name").innerHTML = "Level 4:";
    document.getElementById("lesson-directions").innerHTML = "Directions: Sequence of 2 notes, interval changes every 10 reps";

    turnAccompanimentOff();
}
function setupLevelFive() { //Sequence of notes 2 (The interval changes each rep, every 10 reps the length of the sequence lengthens)\n\n
    accompaniment = false;
    intervalRotationType = "randomIntervals";
    scoreLevel = "levelFive";
    lengthRotationType = "scoreBased"; //7-20-20
    allButtonsOn();
    clearButtons();
    setVisualMode("sheetMusic");
    document.getElementById("lesson-name").innerHTML = "Level 5:";
    document.getElementById("lesson-directions").innerHTML = "Directions: Sequence of notes, new interval each rep, every 10 reps the length of the sequence lengthens";

    sequenceOn.click();
    turnAccompanimentOff();
}
function setupLevelSix() { //Sequence of notes (The interval changes each note, every 10 reps the length of the sequence lengthens)\n\n
    // clearAllNotes();
    accompaniment = true;
    intervalRotationType = "randomIntervalsEachNote"; //THIS MUST BE CHANGED
    // sequence-mode=
    lengthRotationType = "scoreBased";
    scoreLevel = "levelSix";
    allButtonsOn();
    clearButtons();
    setVisualMode("sheetMusic");
    document.getElementById("lesson-name").innerHTML = "Level 6:";
    document.getElementById("lesson-directions").innerHTML = "Sequence of notes, the interval changes each note. Sequence lengthens every 10 reps";

    sequenceOn.click();
    turnAccompanimentOff();
}
function setupLevelSeven() { //Sequence of notes with background music (rules just like level 6)\n\n
    intervalRotationType = "randomIntervalsEachNote"; //THIS MUST BE CHANGED

    accompaniment = true;
    // sequence-mode=
    scoreLevel = "levelSeven";
    lengthRotationType = "scoreBased";
    allButtonsOn();
    clearButtons();
    setVisualMode("sheetMusic");
    document.getElementById("lesson-name").innerHTML = "Level 7:";
    document.getElementById("lesson-directions").innerHTML = "Directions: Sequence of notes, the interval changes each note. Sequence lengthens every 10 reps. Same as #6, but now with background music!!!";

    sequenceOn.click();
    turnAccompanimentOn();
}
function setupLevelEight() { //Sequence of notes with varying lengths without background music (The interval changes each rep, every 10 reps the length of the sequence lengthens by 4)\n\n
    // clearAllNotes();
    intervalRotationType = "randomIntervals";
    accompaniment = true;
    // sequence-mode=
    scoreLevel = "levelEight";
    lengthRotationType = "scoreBasedByFour";
    allButtonsOn();
    clearButtons();
    setVisualMode("sheetMusic");
    document.getElementById("lesson-name").innerHTML = "Level 8:";
    document.getElementById("lesson-directions").innerHTML = "Directions: Sequence of notes with varying lengths, same intervals. Every 10 reps the sequence lengthens";

    complexSequence.click();
    turnAccompanimentOff();
    sequenceLength = 4;
}
function setupLevelNine() { //Sequence of notes with varying lengths without background music (The interval changes each note, every 10 reps the length of the sequence lengthens by 4)\n\n
    // clearAllNotes();
    accompaniment = true;
    // sequence-mode=
    scoreLevel = "levelNine";
    intervalRotationType = "randomIntervalsEachNote";
    lengthRotationType = "scoreBasedByFour";
    allButtonsOn();

    clearButtons();
    setVisualMode("sheetMusic");
    document.getElementById("lesson-name").innerHTML = "Level 9:";
    document.getElementById("lesson-directions").innerHTML = "Sequence of notes with varying lengths and intervals. Every 10 reps the sequence lengthens";

    turnAccompanimentOff();
    complexSequence.click();
    sequenceLength = 4;
}
function setupLevelTen() { //Sequence of notes with varying lengths with background music (rules just like level 9)\n\n
    intervalRotationType = "randomIntervalsEachNote"; //THIS MUST BE CHANGED
    // clearAllNotes();
    accompaniment = true;
    // sequence-mode=
    scoreLevel = "levelTen";
    intervalRotationType = "randomIntervalsEachNote";
    lengthRotationType = "scoreBasedByFour";
    allButtonsOn();
    clearButtons();
    setVisualMode("sheetMusic");
    document.getElementById("lesson-name").innerHTML = "Level 10:";
    document.getElementById("lesson-directions").innerHTML = "Sequence of notes with varying lengths and intervals. Every 10 reps the sequence lengthens. Same as #9, but now with background music!!";
    turnAccompanimentOn();
    complexSequence.click();
    sequenceLength = 4;
}

function songWritingWorkshop() {
    accompaniment = true;
    // sequence-mode=
    scoreLevel = "writingWorkshop";
    turnAccompanimentOn();
    clearButtons();

    document.getElementById('recruitYourOwnChoices').style.display = 'block';

}

function getRandomInterval() {
    let theInterval = "up";
    let randomSpot = Math.floor(Math.random() * 4);
    if (randomSpot == 1) {
        theInterval = "down";
    } else if (randomSpot == 2) {
        theInterval = "fourthDown";
    } else if (randomSpot == 3) {
        theInterval = "fourthUp";
    }
    return theInterval;

}

//the above isn't being used
// select the INPUT element that will handle
// the file selection.
let sourceofmidi = document.getElementById('filereader');
// provide the File source and a callback function

var midiToNoteArray = 24;
var trackPicked = false;
var channels = 0;

// channels=6;


MidiParser.parse(sourceofmidi, function (obj) {
    $("button.tuneron").click();
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

                    if ((obj.track[i].event[j].type == 9) && (!trackPicked)) {
                        console.log("channel " + obj.track[i].event[j].channel);
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

                if (lastNote != 0) {
                    singingTimeArray.push([lastNote - 24, (60 * (ticksOfThisNote + 0) / importTicksPerBeat) / currentBPM, 0]);
                } else {
                    singingTimeArray.push([72, (60 * (ticksOfThisNote + 0) / importTicksPerBeat) / currentBPM, 0]);
                }
                currentNote = obj.track[noteContainingTrack].event[i].data[0];
                ticksOfThisNote = 0;
            }

        }
        lastNote = currentNote + 0;
        // alert (lastNote);

        if (lastNote != 0) {
            singingTimeArray.push([lastNote - 24, (60 * (ticksOfThisNote + 0) / importTicksPerBeat) / currentBPM, 0]);
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
    arrayOfSungNotesOnly = [];
    for (i = 0; i < singingTimeArray.length; i++) {
        arrayOfSungNotesOnly.push(basicNote(singingTimeArray[i][0]));
    }
    console.log(singingTimeArray.toString());
    findKey(arrayOfSungNotesOnly);

    // console.log(obj.track[2].event[i].data);
});
// const VF = Vex.Flow;

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
renderer.resize(500, 200); //size of the box
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
tickContext.preFormat().setX(startingXSetting);

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
// if (!firstNoteShown) {

// makeAndShowANote(37, 2, "referenceNote");
// makeAndShowANote(50, 2, "referenceNote");
// makeAndShowANote(40, 2, "singingNote");
// makeAndShowANote(41, 2, "targetNote");
// // makeAndShowANote(47,2, "singingNote");
// firstNoteShown = true;
// } else {
// makeAndShowANote(37, 2, "referenceNote");
// makeAndShowANote(50, 2, "referenceNote");
// makeAndShowANote(45, 2, "targetNote");
// makeAndShowANote(47, 2, "singingNote");
// }
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

// If a user plays/identifies the note in time, send it up to note heaven.
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
        if ((beatCount == 0) && (wholesToTieAtTheBeginning == 1)) {
            beatCount = 8;
            wholesToTieAtTheBeginning = 0;
        }
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

async function makeAndShowANote(noteArrayNum, theNoteLength, voiceType) {
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
        // console.log(theNoteLength);
        theNoteLength = durationNoteSelect(theNoteLength);
        // console.log(theNoteLength);
        var lastImageNote = currentImageNote;
        var currentImageNote = notes.shift();
        var currentSecondImageNote = note2.shift();
        var currentWholeImageNote = noteWhole.shift();
        let noteStr = noteArray[noteArrayNum][1];
        // noteStr='E5';
        // alert (noteStr);
        let partOne = noteStr.slice(0, 1) + '';
        let partTwo = noteStr.slice(+2) + '';
        let partThree = noteStr.slice(1, 2) + '';
        // alert (partOne+" "+partTwo+" "+partThree+" "+wholesToTieAtTheBeginning);
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
            // console.log("tie on");
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

            // console.log("tie off");
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
                let transformMatrix = 5;
                // console.warn(visibleReferenceNoteGroups.length);
                if (sequencePlay) {
                    transformMatrix = window.getComputedStyle(visibleReferenceNoteGroups[visibleReferenceNoteGroups.length - 2]).transform;
                } else {
                    transformMatrix = window.getComputedStyle(visibleReferenceNoteGroups[visibleReferenceNoteGroups.length - 1]).transform;

                }
                // console.warn("it is "+transformMatrix);
                // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
                // where, since we're only translating in x, the 4th property will be
                // the current x-translation. You can dive into the gory details of
                // CSS3 transform matrices (along with matrix multiplication) if you want
                // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
                const x = transformMatrix.split(',')[4].trim();
                // console.warn(x);
                singAndTargetPlacement = Math.floor(x) + startingXSetting;

            } catch (error) {
                // alert ("hi");
                console.error(error.toString());
                tickContext.preFormat().setX(startingXSetting);
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
                // console.log(visibleReferenceNoteGroups.length + " is the length");
                const transformMatrix = window.getComputedStyle(visibleReferenceNoteGroups[visibleReferenceNoteGroups.length - 1]).transform;
                // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
                // where, since we're only translating in x, the 4th property will be
                // the current x-translation. You can dive into the gory details of
                // CSS3 transform matrices (along with matrix multiplication) if you want
                // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
                const x = transformMatrix.split(',')[4].trim();
                tickContext.preFormat().setX(Math.floor(x) + startingXSetting); //.setX(visibleNoteGroups[0].getX());//.setX(tickContext.getTickables().getX());
                // alert (visibleNoteGroups.getX().toString());
                // alert notes[0].
            } catch (error) {
                tickContext.preFormat().setX(startingXSetting);
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
            if (sequencePlay) {
                try {
                    // alert ("hi");
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group)].classList.add('prescroll');
                } catch (error) {
                    // alert("hi");
                }
                try {
                    // alert ("hi");
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group)].classList.add('nextNote');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 1].classList.remove('prescroll');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 1].classList.remove('nextNote');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 1].classList.add('currentnote');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('currentnote');
                } catch (error) {}
                try {
                    // visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('scroll');
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('partscroll');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('partscrolling');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('scroll');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('scrolling');

                } catch (error) {}
            }
            // console.error(referenceGroups.toString());
        }
        let startingSetX = startingXSetting - wholesToTieAtTheBeginning * 25;
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
        if (setupAFirstNote) {
            tickContext.preFormat().setX(startingXSetting + 25);
            setupAFirstNote = false;
        } else {
            tickContext.preFormat().setX(startingXSetting);
        }
        if ((voiceType == "singingNote") || (voiceType == "targetNote")) {
            tickContext.preFormat().setX(singAndTargetPlacement);
        }
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
    } else if (notationMode == "stationaryNotesMode") {
        theNoteLength = durationNoteSelect(theNoteLength);
        // console.log(theNoteLength);
        var lastImageNote = currentImageNote;
        var currentImageNote = notes.shift();
        var currentSecondImageNote = note2.shift();
        var currentWholeImageNote = noteWhole.shift();
        let noteStr = noteArray[noteArrayNum][1];
        // noteStr='E5';
        // alert (noteStr);
        let partOne = noteStr.slice(0, 1) + '';
        let partTwo = noteStr.slice(+2) + '';
        let partThree = noteStr.slice(1, 2) + '';
        // alert (partOne+" "+partTwo+" "+partThree+" "+wholesToTieAtTheBeginning);
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
            // console.log("tie on");
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

            // console.log("tie off");
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
                // let transformMatrix = 5;
                // // console.warn(visibleReferenceNoteGroups.length);
                // if (sequencePlay) {
                // // transformMatrix = window.getComputedStyle(visibleReferenceNoteGroups[visibleReferenceNoteGroups.length - 2]).transform;
                // } else {
                // // transformMatrix = window.getComputedStyle(visibleReferenceNoteGroups[visibleReferenceNoteGroups.length - 1]).cx;

                // }
                // console.warn("it is "+transformMatrix);
                // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
                // where, since we're only translating in x, the 4th property will be
                // the current x-translation. You can dive into the gory details of
                // CSS3 transform matrices (along with matrix multiplication) if you want
                // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
                // console.warn(visibleReferenceNoteGroups.length+" "+transformMatrix.toString());
                // console.warn(startingXSetting+" "+sequenceLength+" "+(numOfThisNoteInSequence));
                // console.warn(startingXSetting/(sequenceLength)*(numOfThisNoteInSequence-2));

                // const x = transformMatrix.split(',')[4].trim();
                // const x = transformMatrix.replace("px", "");
                // console.warn(x);
                if (sequencePlay) {
                    singAndTargetPlacement = (startingXSetting / (sequenceLength) * (numOfThisNoteInSequence - 2)) //Math.floor(x);
                    if (singAndTargetPlacement < 0) {
                        singAndTargetPlacement = (sequenceLength - 1) * startingXSetting / (sequenceLength);
                    }
                } else {
                    singAndTargetPlacement = startingXSetting / (sequenceLength) * (numOfThisNoteInSequence - 1) //Math.floor(x);
                }
            } catch (error) {
                // alert ("hi");
                console.error(error.toString());
                tickContext.preFormat().setX(startingXSetting);
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

            // let color = rgb(0, 155+score, 0);

            notes[0].setKeyStyle(0, {
                fillStyle: colorTarget
            });

            //GO HERE TO UPDATE COLOR AS YOU GET THE NOTE RIGHT!!!
            try {
                // console.log(visibleReferenceNoteGroups.length + " is the length");
                const transformMatrix = window.getComputedStyle(visibleReferenceNoteGroups[visibleReferenceNoteGroups.length - 1]).transform;
                // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
                // where, since we're only translating in x, the 4th property will be
                // the current x-translation. You can dive into the gory details of
                // CSS3 transform matrices (along with matrix multiplication) if you want
                // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
                const x = transformMatrix.split(',')[4].trim();
                tickContext.preFormat().setX(Math.floor(x) + startingXSetting); //.setX(visibleNoteGroups[0].getX());//.setX(tickContext.getTickables().getX());
                // alert (visibleNoteGroups.getX().toString());
                // alert notes[0].
            } catch (error) {
                tickContext.preFormat().setX(startingXSetting);
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
            if (sequencePlay) {

                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group)].classList.add('nextNotestationary');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 1].classList.remove('prescrollstationary');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 1].classList.remove('nextNotestationary');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 1].classList.add('currentnotestationary');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('currentnotestationary');
                } catch (error) {}
                try {
                    // visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('scroll');
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('partscrollstationary');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.remove('partscrollingstationary');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('nextnotestationary');
                } catch (error) {}
                try {
                    visibleReferenceNoteGroups[visibleReferenceNoteGroups.indexOf(group) - 2].classList.add('scrollingstationary');

                } catch (error) {}
            }
            // console.error(referenceGroups.toString());
        }
        let startingSetX = startingXSetting - wholesToTieAtTheBeginning * 25;
        startingSetX = startingSetX / sequenceLength * numOfThisNoteInSequence;
        let tieOffset = 0;
        if (tieOn) {
            startingSetX = startingSetX - 50;
        }

        for (i = 0; i < wholesToTieAtTheBeginning; i++) {

            // alert ("hi");
            tiedNote = new VF.StaveTie({
                    first_note: currentWholeImageNote,
                    last_note: currentImageNote,
                    first_indices: [0],
                    last_indices: [0]
                })
                tickContext.preFormat().setX(startingSetX);
            currentWholeImageNote.draw();
            tickContext.preFormat().setX(startingSetX + 12);
            tiedNote.setContext(context).draw();
            startingSetX = startingSetX + 25;
            tieOffset = 25;
        }
        tickContext.preFormat().setX(startingSetX);
        if (setupAFirstNote) {
            tickContext.preFormat().setX(startingXSetting / sequenceLength * numOfThisNoteInSequence + tieOffset);
            setupAFirstNote = false;
        } else {
            tickContext.preFormat().setX(startingXSetting / sequenceLength * numOfThisNoteInSequence + tieOffset);
        }
        if ((voiceType == "singingNote") || (voiceType == "targetNote")) {
            tickContext.preFormat().setX(singAndTargetPlacement);
        }
        currentImageNote.draw();
        if (tieOn) {
            // alert ("hi");
            tickContext.preFormat().setX(startingSetX + 50);
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
        if (voiceType == "referenceNote") {

            // numOfThisNoteInSequence++; 7-15-20
            // alert (numOfThisNoteInSequence);
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
                // visibleReferenceNoteGroups.shift();
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
function clearAllNotes() {
    try {

        // alert (visibleReferenceNoteGroups.length);
        visibleTargetNoteGroups.forEach(element => element.classList.add('correct'));

        visibleSingingNoteGroups.forEach(element => element.classList.add('correct'));
        visibleSingingNoteGroups.splice(0, visibleReferenceNoteGroups.length);
        visibleTargetNoteGroups.splice(0, visibleReferenceNoteGroups.length);
        visibleReferenceNoteGroups.forEach(element => element.classList.add('correct'));

        visibleReferenceNoteGroups.forEach(element => element.classList.remove('currentnotestationary'));

        visibleReferenceNoteGroups.splice(0, visibleReferenceNoteGroups.length);
        // alert (visibleReferenceNoteGroups.length);
        // const visibleReferenceNoteGroups=[];
        // visibleReferenceNoteGroups=[];
        // alert ('hi');
    } catch (error) {
        alert(visibleReferenceNoteGroups.toString());
    }
}

function rightAnswer() {
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
    group.style.transform = `translate(${x}px, (0-startingXSetting)+'px')`;
}

if (navigator.requestMIDIAccess) {
    //console.log('This browser supports WebMIDI!');

    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

} else {
    console.log('WebMIDI is not supported in this browser.');
    // console.lot( 'Error: This browser does not support WebMIDI.');
}

function onMIDISuccess(midiAccess) {
    // document.querySelector('.step0').innerHTML = 'Click here to begin...';
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;

    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
    }
}
function onMIDIFailure() {
    console.log('WebMIDI is not supported in this browser.');
    // document.querySelector('.step0').innerHTML = 'Error: Could not access MIDI devices. Connect a device and refresh to try again.';
}

function getMIDIMessage(message) {
    var command = message.data[0];
    var note = message.data[1];
    var velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command
    switch (command) {
    case 144: // noteOn
        var keyboardAudio = document.getElementById(soundId(getNoteName(note)));
        if (velocity > 0) {
            if (keyboardAudio) {
                keyboardAudio.pause();
                keyboardAudio.volume = 1.0;
                if (keyboardAudio.readyState >= 2) {
                    keyboardAudio.currentTime = 0;
                    var promise = keyboardAudio.play();

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
            var keyboardAudio = document.getElementById("sound-A3");
            if (playPromise !== null) {
                playPromise.catch(() => {
                    keyboardAudio.pause();
                    keyboardAudio.volume = 1.0;
                    if (keyboardAudio.readyState >= 2) {
                        keyboardAudio.currentTime = 0;
                        keyboardAudio.pause();
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

    // runSequence('gamestart');

    // show the requisite number of note placeholders

    // when the array is the same length as the correct sequence, compare the two
    if ((captureButtons)) {
        // console.log("note is number " + note);
        buttonStartEndTimes.push([note - 24, new Date(new Date().getTime())]);
        if (buttonStartEndTimes.length > 1) {
            // alert("long");
            singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000.0001, 0]);
            buttonStartEndTimes.shift();
            // console.log(singingTimeArray.toString());
        }
    }
    if (specificActiveChord.includes(note) == false) {
        specificActiveChord.push(note);
        specificActiveChord.sort();
    }
    if (activeChord.includes(arrangeNote(note)) == false) { //4/9/2020 I think I may need to add a new activeChordlisting that includes the actual note and not just the arrangenote, so I can be certain the note order in addition here. Avi
        activeChord.push(arrangeNote(note));
        // console.log(arrangeNote(specificActiveChord[0]));
    }

}

function noteOffListener(note) {
    specificActiveChord.splice(specificActiveChord.indexOf(note), 1);
    activeChord.splice(activeChord.indexOf(note), 1);
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

function startTimer() {
    // set timer for 60 minutes from start
    var now = new Date();
    timeEnd = new Date(now.getTime());
    // updateTimer();
}

function restartTimer() {
    totalScore = 0;
    currentLevelScore = 0;
    var now = new Date();
    timeEnd = new Date(now.getTime());
}

function pauseTimer() {
    pauseTimerStarted = true;
    // var pauseTime = new Date();
    // pauseTimeStart = new Date(pauseTime.getTime());
}
function pauseScoreTimer() {
    // var scorePauseTime = new Date();
    // scorePauseTimeAmount = 0;
    // previousScorePauseTimeAmount = 0;
    // scorePauseTimeStart = new Date(scorePauseTime.getTime());
    // // updateTimer();
}
function startNoteTimer() {
    noteTimerStarted = true;
    if (nonReferencePlay) {
        currentNoteBeats = 0;
    }
    // updateTimer();
}
function startRootTimer() {
    rootTimerStarted = true;
    currentRootBeats = 0;
    // var rootTimeLocal = new Date();
    // rootTimeStart = new Date(rootTimeLocal.getTime());
    // updateTimer();
}
function startArpeggioTimer() {
    arpeggioTimerStarted = true;
    currentArpeggioBeats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}
function startRhythmTimer() {
    rhythmTimerStarted = true;
    currentRhythmBeats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}

function startKickTimer() {
    kickTimerStarted = true;
    currentkickBeats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}

function startSnareTimer() {
    snareTimerStarted = true;
    currentsnareBeats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}

function startHatTimer() {
    hatTimerStarted = true;
    currenthatBeats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}

function startClapTimer() { // inst copy  start
    clapTimerStarted = true;
    currentclapBeats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
} // inst copy end
function startInst5Timer() { // inst copy  start
    inst5TimerStarted = true;
    currentinst5Beats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}
function startInst6Timer() { // inst copy  start
    inst6TimerStarted = true;
    console.warn("hi");
    currentinst6Beats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}
function startInst7Timer() { // inst copy  start
    inst7TimerStarted = true;
    currentinst7Beats = 0;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}
function startChordTimer() {
    chordTimerStarted = true;
    // var arpeggioTimeLocal = new Date();
    // arpeggioTimeStart = new Date(arpeggioTimeLocal.getTime());
    // updateTimer();
}

function startScoreTimer() {
    // var scoreTimeLocal = new Date();
    // previousPauseTimeAmount = 0;
    previousScorePauseTime = scorePauseTime + 0;
    if (newScore) {
        scoreTimerStarted = true;
        currentScore = 0;
        score = 0;
        scorePauseTimeAmount = 0;
        scorePauseTime = 0;
        previousScorePauseTime = 0;
        scoreTimeBeats = 0;
        deficitBoost = 0;
        // alert("yo");
        previousScorePauseTimeAmount = 0;
        newWrong = true;
        newScore = false;
    }

    // scoreTimeStart = new Date(scoreTimeLocal.getTime());
    unpauseScore();
    pauseScore();
    // updateTimer();
}

function startWrongTimer() {
    if ((newWrong) && (!newScore)) {
        wrongNoteStarted = true;
        newWrong = false;
    }
}
/**
 * Function to update the time remaining every second
 */
function updateTimer() { //what to do when time zone
    var now = new Date();
    if (noteTimerStarted) {
        noteTimeStart = new Date(now.getTime());
        noteTimerStarted = false;
    }
    if (arpeggioTimerStarted) {
        arpeggioTimeStart = new Date(now.getTime());
        arpeggioTimerStarted = false;
    }
    if (kickTimerStarted) {
        kickTimeStart = new Date(now.getTime());
        kickTimerStarted = false;
    }
    if (clapTimerStarted) { // inst copy  start
        clapTimeStart = new Date(now.getTime());
        clapTimerStarted = false;
    } // inst copy end
    if (inst5TimerStarted) { // inst copy  start
        inst5TimeStart = new Date(now.getTime());
        inst5TimerStarted = false;
    }
    if (inst6TimerStarted) { // inst copy  start
        inst6TimeStart = new Date(now.getTime());
        inst6TimerStarted = false;
    }
    if (inst7TimerStarted) { // inst copy  start
        inst7TimeStart = new Date(now.getTime());
        inst7TimerStarted = false;
    }
    if (hatTimerStarted) {
        hatTimeStart = new Date(now.getTime());
        hatTimerStarted = false;
    }
    if (snareTimerStarted) {
        snareTimeStart = new Date(now.getTime());
        snareTimerStarted = false;
    }
    if (rhythmTimerStarted) {
        rhythmTimeStart = new Date(now.getTime());
        rhythmTimerStarted = false;
    }

    if (chordTimerStarted) {
        chordTimeStart = new Date(now.getTime());
        chordTimerStarted = false;
    }
    if (rootTimerStarted) {
        rootTimeStart = new Date(now.getTime());
        // arpeggioTimerStarted=false;
        rootTimerStarted = false;
    }
    if (scoreTimerStarted) {
        scoreTimeStart = new Date(now.getTime());
        scoreTimerStarted = false;
    }
    if (pauseTimerStarted) {
        pauseTimeStart = new Date(now.getTime());
        pauseTimerStarted = false;
    }
    if (wrongNoteStarted) {
        scorePauseTimeStart = new Date(now.getTime());
        wrongNoteStarted = false;
    }
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
        if (wrongNote) {
            scorePauseTime = previousScorePauseTime + (now.getTime() - scorePauseTimeStart); //gotta setup scorePauseTimeStart
        }

    } catch (error) {}
    synthTimePassed = (synthStarted - now.getTime());
    // wrongPoints=now.getTime()-wrongTimer.getTime()+wrongPoints;
    // console.log("wrong points: "+wrongPoints);

    if (paused) {
        pauseTimeAmount = previousPauseTimeAmount + (now.getTime() - pauseTimeStart);
    }
    // if (scorePaused) {
    // // console.log("score pause time amount " + (((now.getTime() - scorePauseTimeStart) % (1000.001 * 60.001)) / 1000.001));
    // scorePauseTimeAmount = now.getTime() - scorePauseTimeStart; //previousScorePauseTimeAmount + (now.getTime() - scorePauseTimeStart);
    // }
    noteTime = (now.getTime()) - noteTimeStart; //the Time of a note.
    noteTimeSeconds = ((noteTime % (1000 * 60)) / 1000);
    noteTimeBeats = noteTimeSeconds / (60 / currentBPM);
    // try {
    rootTime = (now.getTime()) - rootTimeStart; //the Time of a note.
    rootTimeSeconds = ((rootTime % (1000 * 60)) / 1000);
    rootTimeBeats = rootTimeSeconds / (60 / currentBPM);
    // } catch (error) {}

    arpeggioTime = (now.getTime()) - arpeggioTimeStart; //the Time of a note.
    arpeggioTimeSeconds = ((arpeggioTime % (1000 * 60)) / 1000);
    arpeggioTimeBeats = arpeggioTimeSeconds / (60 / currentBPM);

    rhythmTime = (now.getTime()) - rhythmTimeStart; //the Time of a note.
    rhythmTimeSeconds = ((rhythmTime % (1000 * 60)) / 1000);
    rhythmTimeBeats = rhythmTimeSeconds / (60 / currentBPM);

    kickTime = (now.getTime()) - kickTimeStart; //the Time of a note.
    kickTimeSeconds = ((kickTime % (1000 * 60)) / 1000);
    kickTimeBeats = kickTimeSeconds / (60 / currentBPM);

    clapTime = (now.getTime()) - clapTimeStart; //the Time of a note. // inst copy start
    clapTimeSeconds = ((clapTime % (1000 * 60)) / 1000);
    clapTimeBeats = clapTimeSeconds / (60 / currentBPM); // inst copy end

    inst5Time = (now.getTime()) - inst5TimeStart; //the Time of a note. // inst copy start
    inst5TimeSeconds = ((inst5Time % (1000 * 60)) / 1000);
    inst5TimeBeats = inst5TimeSeconds / (60 / currentBPM); // inst copy end

    inst6Time = (now.getTime()) - inst6TimeStart; //the Time of a note. // inst copy start
    inst6TimeSeconds = ((inst6Time % (1000 * 60)) / 1000);
    inst6TimeBeats = inst6TimeSeconds / (60 / currentBPM); // inst copy end

    inst7Time = (now.getTime()) - inst7TimeStart; //the Time of a note. // inst copy start
    inst7TimeSeconds = ((inst7Time % (1000 * 60)) / 1000);
    inst7TimeBeats = inst7TimeSeconds / (60 / currentBPM); // inst copy end

    hatTime = (now.getTime()) - hatTimeStart; //the Time of a note.
    hatTimeSeconds = ((hatTime % (1000 * 60)) / 1000);
    hatTimeBeats = hatTimeSeconds / (60 / currentBPM);

    snareTime = (now.getTime()) - snareTimeStart; //the Time of a note.
    snareTimeSeconds = ((snareTime % (1000 * 60)) / 1000);
    snareTimeBeats = snareTimeSeconds / (60 / currentBPM);

    chordTime = (now.getTime()) - chordTimeStart; //the Time of a note.
    chordTimeSeconds = ((chordTime % (1000 * 60)) / 1000);
    chordTimeBeats = chordTimeSeconds / (60 / currentBPM);
    // console.log(arpeggioTimeBeats);
    // console.log(arpeggioTimeBeats+" and " +rootTimeBeats+ " and "+ noteTimeBeats);
    try {

        // console.log(deficitBoost +" d");
        scoreTime = ((now.getTime() - scorePauseTime) - scoreTimeStart.getTime()); //-wrongPoints;///1000.01-deficitBoost/1000.01;
        if (scoreTime < 0) {
            // deficitBoost=scoreTime;
        } //scorePauseTimeAmount) - scoreTimeStart.getTime();
        scoreTimeSeconds = ((scoreTime % (1000 * 60)) / 1000);
        scoreTimeBeats = scoreTimeSeconds / (60 / currentBPM);
        // if (sequencePlay) {
        // timeRequirement = (beatsExpected-1) / 2.0001; // after doing the math... it should be beats expected. / (currentBPM/60.000001);
        // // console.log(timeRequirement + " is time requirement");
        // }
        // currentScore = 50.00001 * (scoreTimeBeats + .001) / (timeRequirement + .001); //(currentScore+.000001)+2.00/timeRequirement;
        // score = Math.floor(currentScore);
        // gauge.update({
        // majorTicks: [(noteArray[mostRecentPostingNum - 1] || "")[1] || "", noteArray[mostRecentPostingNum][1], (noteArray[mostRecentPostingNum + 1] || "")[1] || ""],
        // units: (noteArray[mostRecentPostingNum][1] + " " + Math.floor(score)) //sets the 3 notes in there.
        // });
        // console.log("scoreTime beats are " + scoreTimeBeats); //+ " and pausetime is "+scorePauseTimeAmount+ " and scoretimestart is "+scoreTimeStart.getTime());
    } catch (error) {}
    // console.log ("note time is " +noteTime + " seconds is "+noteTimeSeconds+" beats at 120bpm are "+noteTimeBeats);
    var distance = (now.getTime() - pauseTimeAmount) - timeEnd.getTime();
    var minutes = Math.floor(distance / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var distance2 = distance / (totalScore + 1);
    var minutes2 = Math.floor(distance2 / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    document.querySelector('#countdown').innerText = minutes + ":" + seconds + " ";
    document.getElementById("averagetime").innerText = minutes2 + ":" + seconds2 + " ";
    // if (minutes > 0 || seconds > 0) {
    // window.setTimeout(function () {
    // updateTimer();
    // }, 1);
    // } else if (minutes == 0 && seconds == 0) {
    // window.setTimeout(function () {
    // updateTimer();
    // }, 1);
    // }

}

!function (e) {
    "use strict";

    function t(e) {
        if (Array.isArray(e)) {
            for (var t = 0, i = Array(e.length); t < e.length; t++)
                i[t] = e[t];
            return i
        }
        return Array.from(e)
    }

    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }

    function n(e, t) {
        if (t || (t = "undefined" == typeof window ? global : window), void 0 !== t[e])
            return t[e];
        for (var i = ["webkit", "moz", "ms", "o"], r = 0, o = i.length, n = e.charAt(0).toUpperCase() + e.substr(1); r < o; r++) {
            var a = t[i[r] + n];
            if (void 0 !== a)
                return a
        }
        return null
    }

    function a(e, t, i, r, o, n, l) {
        if ("function" != typeof r)
            throw new TypeError("Invalid animation rule:", r);
        var s = e - i,
        d = s / o,
        c = 0;
        d > 1 && (d = 1),
        1 !== d && (c = r(d), isFinite(c) && !isNaN(c) && (d = c)),
        t && t(d),
        s < o ? l.frame = ue(function (e) {
                return a(e, t, i, r, o, n, l)
            }) : (n && n(), l.inProgress = !1)
    }

    function l() {
        Array.prototype.constructor.apply(this, arguments)
    }

    function s(e) {
        if (!(e instanceof DOMException && 2152923147 === e.result))
            throw e
    }

    function d(e) {
        return e.majorTicks instanceof Array || (e.majorTicks = e.majorTicks ? [e.majorTicks] : []),
        e.majorTicks.length || (e.majorTicks.push(Te.formatMajorTickNumber(e.minValue, e)), e.majorTicks.push(Te.formatMajorTickNumber(e.maxValue, e))),
        ["right" !== e.tickSide, "left" !== e.tickSide]
    }

    function c(e, t, i, r, o, n) {
        e.beginPath(),
        e.moveTo(t + n, i),
        e.lineTo(t + r - n, i),
        e.quadraticCurveTo(t + r, i, t + r, i + n),
        e.lineTo(t + r, i + o - n),
        e.quadraticCurveTo(t + r, i + o, t + r - n, i + o),
        e.lineTo(t + n, i + o),
        e.quadraticCurveTo(t, i + o, t, i + o - n),
        e.lineTo(t, i + n),
        e.quadraticCurveTo(t, i, t + n, i),
        e.closePath()
    }

    function h(e, t) {
        var i = t.valueDec,
        r = t.valueInt,
        o = 0,
        n = void 0,
        a = void 0,
        l = void 0;
        if (e = parseFloat(e), l = e < 0, e = Math.abs(e), i > 0) {
            for (a = e.toFixed(i).toString().split("."), n = r - a[0].length; o < n; ++o)
                a[0] = "0" + a[0];
            a = (l ? "-" : "") + a[0] + "." + a[1]
        } else {
            for (a = Math.round(e).toString(), n = r - a.length; o < n; ++o)
                a = "0" + a;
            a = (l ? "-" : "") + a
        }
        return a
    }

    function u(e, t) {
        var i = void 0,
        r = !1;
        return i = 0 === t.majorTicksDec ? Math.round(e).toString() : e.toFixed(t.majorTicksDec),
        t.majorTicksInt > 1 ? (r = ~i.indexOf("."), ~i.indexOf("-") ? "-" + [t.majorTicksInt + t.majorTicksDec + 2 + (r ? 1 : 0) - i.length].join("0") + i.replace("-", "") : [t.majorTicksInt + t.majorTicksDec + 1 + (r ? 1 : 0) - i.length].join("0") + i) : i
    }

    function f(e) {
        return e * Math.PI / 180
    }

    function m(e, t) {
        return {
            x: -e * Math.sin(t),
            y: e * Math.cos(t)
        }
    }

    function v(e, t, i, r) {
        var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
        a = e.createLinearGradient(o ? 0 : n, o ? n : 0, o ? 0 : r, o ? r : 0);
        return a.addColorStop(0, t),
        a.addColorStop(1, i),
        a
    }

    function b(e, t) {
        if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
            return e.restore(), !0;
        e.save();
        var i = t.borderShadowWidth;
        return i && (e.shadowBlur = i, e.shadowColor = t.colorBorderShadow),
        !0
    }

    function g(e, t) {
        t.needleShadow && (e.shadowOffsetX = 2, e.shadowOffsetY = 2, e.shadowBlur = 10, e.shadowColor = t.colorNeedleShadowDown)
    }

    function p(e, t, i) {
        return e["font" + t + "Style"] + " " + e["font" + t + "Weight"] + " " + e["font" + t + "Size"] * i + "px " + e["font" + t]
    }

    function w(e) {
        e.shadowOffsetX = null,
        e.shadowOffsetY = null,
        e.shadowBlur = null,
        e.shadowColor = "",
        e.strokeStyle = null,
        e.lineWidth = 0,
        e.save()
    }

    function k(e, t, i, r) {
        t.valueTextShadow && (e.shadowOffsetX = i, e.shadowOffsetY = i, e.shadowBlur = r, e.shadowColor = t.colorValueTextShadow)
    }

    function y(e, t, i, r, o, n) {
        if (t.valueBox) {
            w(e);
            var a = t.valueDec ? 1 + t.valueDec : 0,
            l = "9".repeat(Math.max.apply(null, [String(parseInt(i)).length + a].concat(t.majorTicks.map(function (e) {
                                return String(parseInt(e, 10)).length + a
                            })))),
            s = t.valueText || h(i, t),
            d = n / 200,
            u = n / 100,
            f = .4 * u,
            m = 1.2 * u;
            e.font = p(t, "Value", d),
            k(e, t, f, m);
            var v = e.measureText(t.valueText ? s : "-" + h(Number(l), t)).width;
            w(e);
            var b = parseFloat(t.fontValueSize) * d + f + m,
            g = u * parseFloat(t.valueBoxStroke),
            y = 2 * n - 2 * g,
            x = v + 10 * u,
            T = 1.1 * b + f + m,
            S = u * t.valueBoxBorderRadius,
            W = (parseFloat(t.valueBoxWidth) || 0) / 100 * y;
            W > x && (x = W),
            x > y && (x = y);
            var O = r - x / 2,
            V = o - T / 2,
            P = o - 5.75 * u;
            if (e.beginPath(), S ? c(e, O, V, x, T, S) : e.rect(O, V, x, T), g) {
                var M = e.createRadialGradient(r, P, 10 * u, r, P, 20 * u);
                M.addColorStop(0, t.colorValueBoxRect),
                M.addColorStop(1, t.colorValueBoxRectEnd),
                e.strokeStyle = M,
                e.lineWidth = g,
                e.stroke()
            }
            t.colorValueBoxShadow && (e.shadowBlur = 1.2 * u, e.shadowColor = t.colorValueBoxShadow),
            t.colorValueBoxBackground && (e.fillStyle = t.colorValueBoxBackground, e.fill()),
            e.closePath(),
            e.restore(),
            k(e, t, f, m),
            e.fillStyle = t.colorValueText,
            e.textAlign = "center",
            e.textBaseline = "alphabetic",
            e.fillText(s, O + x / 2, o + T / 2 - b / 3),
            e.restore()
        }
    }

    function x(e) {
        var t = e.value,
        i = e.minValue,
        r = e.maxValue,
        o = .01 * (r - i);
        return {
            normal: t < i ? i : t > r ? r : t,
            indented: t < i ? i - o : t > r ? r + o : t
        }
    }

    function T(e, t, i, r, o) {
        i.beginPath(),
        i.arc(0, 0, ke(e), 0, 2 * Se, !0),
        i.lineWidth = t,
        i.strokeStyle = o ? Te.linearGradient(i, r, o, e) : r,
        i.stroke(),
        i.closePath()
    }

    function S(e, t) {
        var i = be.pixelRatio;
        return e.maxRadius || (e.maxRadius = e.max - t.borderShadowWidth - t.borderOuterWidth * i - t.borderMiddleWidth * i - t.borderInnerWidth * i + (t.borderOuterWidth ? .5 : 0) + (t.borderMiddleWidth ? .5 : 0) + (t.borderInnerWidth ? .5 : 0)),
        e.maxRadius
    }

    function W(e, t) {
        var i = be.pixelRatio,
        r = t.borderShadowWidth * i,
        o = e.max - r - t.borderOuterWidth * i / 2,
        n = o - t.borderOuterWidth * i / 2 - t.borderMiddleWidth * i / 2 + .5,
        a = n - t.borderMiddleWidth * i / 2 - t.borderInnerWidth * i / 2 + .5,
        l = S(e, t),
        s = void 0,
        d = !1;
        e.save(),
        t.borderOuterWidth && (d = Te.drawShadow(e, t, d), T(o, t.borderOuterWidth * i, e, t.colorBorderOuter, t.colorBorderOuterEnd)),
        t.borderMiddleWidth && (d = Te.drawShadow(e, t, d), T(n, t.borderMiddleWidth * i, e, t.colorBorderMiddle, t.colorBorderMiddleEnd)),
        t.borderInnerWidth && (d = Te.drawShadow(e, t, d), T(a, t.borderInnerWidth * i, e, t.colorBorderInner, t.colorBorderInnerEnd)),
        Te.drawShadow(e, t, d),
        e.beginPath(),
        e.arc(0, 0, ke(l), 0, 2 * Se, !0),
        t.colorPlateEnd ? (s = e.createRadialGradient(0, 0, l / 2, 0, 0, l), s.addColorStop(0, t.colorPlate), s.addColorStop(1, t.colorPlateEnd)) : s = t.colorPlate,
        e.fillStyle = s,
        e.fill(),
        e.closePath(),
        e.restore()
    }

    function O(e, t) {
        var i = e.max * (parseFloat(t.highlightsWidth) || 0) / 100;
        if (i) {
            var r = ke(P(e, t) - i / 2),
            o = 0,
            n = t.highlights.length,
            a = (t.maxValue - t.minValue) / t.ticksAngle;
            for (e.save(); o < n; o++) {
                var l = t.highlights[o];
                e.beginPath(),
                e.rotate(We),
                e.arc(0, 0, r, Te.radians(t.startAngle + (l.from - t.minValue) / a), Te.radians(t.startAngle + (l.to - t.minValue) / a), !1),
                e.strokeStyle = l.color,
                e.lineWidth = i,
                e.stroke(),
                e.closePath(),
                e.restore(),
                e.save()
            }
        }
    }

    function V(e, t) {
        var i = P(e, t),
        r = void 0,
        o = void 0,
        n = void 0,
        a = 0,
        l = 0,
        s = Math.abs(t.minorTicks) || 0,
        d = t.ticksAngle / (t.maxValue - t.minValue);
        for (e.lineWidth = be.pixelRatio, e.strokeStyle = t.colorMinorTicks || t.colorStrokeTicks, e.save(), t.exactTicks ? (o = t.maxValue - t.minValue, r = s ? o / s : 0, l = (t.majorTicks[0] % s || 0) * d) : r = s * (t.majorTicks.length - 1); a < r; ++a)
            n = t.startAngle + l + a * (t.ticksAngle / r), e.rotate(Te.radians(n)), e.beginPath(), e.moveTo(0, i), e.lineTo(0, i - .075 * e.max), A(e)
    }

    function P(e, t) {
        var i = e.max / 100;
        return S(e, t) - 5 * i - (t.barWidth ? 2 * (parseFloat(t.barStrokeWidth) || 0) + ((parseFloat(t.barWidth) || 0) + 5) * i : 0)
    }

    function M(e, t) {
        Te.prepareTicks(t);
        var i = ke(P(e, t)),
        r = void 0,
        o = void 0,
        n = t.majorTicks.length,
        a = be.pixelRatio;
        for (e.lineWidth = 2 * a, e.save(), o = t.colorMajorTicks instanceof Array ? t.colorMajorTicks : new Array(n).fill(t.colorStrokeTicks || t.colorMajorTicks), r = 0; r < n; ++r)
            e.strokeStyle = o[r], e.rotate(Te.radians(B(t, t.exactTicks ? t.majorTicks[r] : r, n))), e.beginPath(), e.moveTo(0, i), e.lineTo(0, i - .15 * e.max), A(e);
        t.strokeTicks && (e.strokeStyle = t.colorStrokeTicks || o[0], e.rotate(We), e.beginPath(), e.arc(0, 0, i, Te.radians(t.startAngle), Te.radians(t.startAngle + t.ticksAngle), !1), A(e))
    }

    function B(e, t, i) {
        if (e.exactTicks) {
            var r = e.ticksAngle / (e.maxValue - e.minValue);
            return e.startAngle + r * (t - e.minValue)
        }
        return e.startAngle + t * (e.ticksAngle / (i - 1))
    }

    function A(e) {
        e.stroke(),
        e.restore(),
        e.closePath(),
        e.save()
    }

    function j(e, t) {
        var i = P(e, t) - .15 * e.max,
        r = {},
        o = 0,
        n = t.majorTicks.length,
        a = "needle" !== t.animationTarget,
        l = t.colorNumbers instanceof Array ? t.colorNumbers : new Array(n).fill(t.colorNumbers),
        s = a ?  - (t.value - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle : 0;
        for (a && (e.save(), e.rotate(-Te.radians(s))), e.font = Te.font(t, "Numbers", e.max / 200), e.lineWidth = 0, e.textAlign = "center", e.textBaseline = "middle"; o < n; ++o) {
            var d = s + B(t, t.exactTicks ? t.majorTicks[o] : o, n),
            c = e.measureText(t.majorTicks[o]).width,
            h = t.fontNumbersSize,
            u = Math.sqrt(c * c + h * h) / 2,
            f = Te.radialPoint(i - u - t.numbersMargin / 100 * e.max, Te.radians(d));
            360 === d && (d = 0),
            r[d] || (r[d] = !0, e.fillStyle = l[o], e.fillText(t.majorTicks[o], f.x, f.y))
        }
        a && e.restore()
    }

    function C(e, t) {
        t.title && (e.save(), e.font = Te.font(t, "Title", e.max / 200), e.fillStyle = t.colorTitle, e.textAlign = "center", e.fillText(t.title, 0, -e.max / 4.25, .8 * e.max), e.restore())
    }

    function N(e, t) {
        t.units && (e.save(), e.font = Te.font(t, "Units", e.max / 200), e.fillStyle = t.colorUnits, e.textAlign = "center", e.fillText(t.units, 0, e.max / 3.25, .8 * e.max), e.restore())
    }

    function E(e, t) {
        if (t.needle) {
            var i = t.ticksAngle < 360 ? Te.normalizedValue(t).indented : t.value,
            r = S(e, t),
            o = ke(r / 100 * t.needleCircleSize),
            n = ke(r / 100 * t.needleCircleSize * .75),
            a = ke(r / 100 * t.needleEnd),
            l = ke(t.needleStart ? r / 100 * t.needleStart : 0),
            s = r / 100 * t.needleWidth,
            d = r / 100 * t.needleWidth / 2,
            c = be.pixelRatio,
            h = "needle" !== t.animationTarget;
            e.save(),
            Te.drawNeedleShadow(e, t),
            e.rotate(Te.radians(h ? t.startAngle : t.startAngle + (i - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle)),
            e.fillStyle = Te.linearGradient(e, t.colorNeedle, t.colorNeedleEnd, a - l),
            "arrow" === t.needleType ? (e.beginPath(), e.moveTo(-d, -l), e.lineTo(-s, 0), e.lineTo(-1 * c, a), e.lineTo(c, a), e.lineTo(s, 0), e.lineTo(d, -l), e.closePath(), e.fill(), e.beginPath(), e.lineTo( - .5 * c, a), e.lineTo(-1 * c, a), e.lineTo(-s, 0), e.lineTo(-d, -l), e.lineTo(d / 2 * c - 2 * c, -l), e.closePath(), e.fillStyle = t.colorNeedleShadowUp, e.fill()) : (e.beginPath(), e.moveTo(-d, a), e.lineTo(-d, l), e.lineTo(d, l), e.lineTo(d, a), e.closePath(), e.fill()),
            t.needleCircleSize && (e.restore(), Te.drawNeedleShadow(e, t), t.needleCircleOuter && (e.beginPath(), e.arc(0, 0, o, 0, 2 * Se, !0), e.fillStyle = Te.linearGradient(e, t.colorNeedleCircleOuter, t.colorNeedleCircleOuterEnd, o), e.fill(), e.closePath()), t.needleCircleInner && (e.beginPath(), e.arc(0, 0, n, 0, 2 * Se, !0), e.fillStyle = Te.linearGradient(e, t.colorNeedleCircleInner, t.colorNeedleCircleInnerEnd, n), e.fill(), e.closePath()), e.restore())
        }
    }

    function _(e, t, i) {
        Te.drawValueBox(e, t, i, 0, e.max - .33 * e.max, e.max)
    }

    function R(e, t) {
        var i = e.max / 100,
        r = S(e, t) - 5 * i,
        o = parseFloat(t.barStrokeWidth) || 0,
        n = (parseFloat(t.barWidth) || 0) * i,
        a = r - 2 * o - n,
        l = (r - a) / 2,
        s = a + l,
        d = o / s,
        c = t.startAngle,
        h = t.startAngle + t.ticksAngle;
        e.save(),
        e.rotate(We),
        o && (e.beginPath(), e.arc(0, 0, s, Te.radians(c) - d, Te.radians(h) + d, !1), e.strokeStyle = t.colorBarStroke, e.lineWidth = 2 * l, e.stroke(), e.closePath()),
        n && (e.beginPath(), e.arc(0, 0, s, Te.radians(c), Te.radians(h), !1), e.strokeStyle = t.colorBar, e.lineWidth = n, e.stroke(), e.closePath(), t.barShadow && (e.beginPath(), e.arc(0, 0, r, Te.radians(c), Te.radians(h), !1), e.clip(), e.beginPath(), e.strokeStyle = t.colorBar, e.lineWidth = 1, e.shadowBlur = t.barShadow, e.shadowColor = t.colorBarShadow, e.shadowOffsetX = 0, e.shadowOffsetY = 0, e.arc(0, 0, r, Te.radians(t.startAngle), Te.radians(t.startAngle + t.ticksAngle), !1), e.stroke(), e.closePath(), e.restore(), e.rotate(We)), t.barProgress && (e.beginPath(), e.arc(0, 0, s, Te.radians(c), Te.radians(c + (Te.normalizedValue(t).normal - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle), !1), e.strokeStyle = t.colorBarProgress, e.lineWidth = n, e.stroke(), e.closePath())),
        e.restore()
    }

    function I(e) {
        return e.options.animatedValue ? e.options.value : e.value
    }

    function D(e, t, i, r, o, n, a, l) {
        e.beginPath(),
        e.fillStyle = l ? Te.linearGradient(e, a, l, o > n ? o : n, n > o, o > n ? i : r) : a,
        t > 0 ? Te.roundRect(e, i, r, o, n, t) : e.rect(i, r, o, n),
        e.fill(),
        e.closePath()
    }

    function z(e, t, i, r, o, n, a, l, s) {
        e.beginPath(),
        e.lineWidth = t,
        e.strokeStyle = s ? Te.linearGradient(e, l, s, a, !0, o) : l,
        i > 0 ? Te.roundRect(e, r, o, n, a, i) : e.rect(r, o, n, a),
        e.stroke(),
        e.closePath()
    }

    function L(e, t, i, r, o, n) {
        var a = be.pixelRatio;
        e.save();
        var l = t.borderRadius * a,
        s = o - t.borderShadowWidth - t.borderOuterWidth * a,
        d = s - t.borderOuterWidth * a - t.borderMiddleWidth * a,
        c = d - t.borderMiddleWidth * a - t.borderInnerWidth * a,
        h = c - t.borderInnerWidth * a,
        u = n - t.borderShadowWidth - t.borderOuterWidth * a,
        f = u - t.borderOuterWidth * a - t.borderMiddleWidth * a,
        m = f - t.borderMiddleWidth * a - t.borderInnerWidth * a,
        v = m - t.borderInnerWidth * a,
        b = i - (d - s) / 2,
        g = b - (c - d) / 2,
        p = g - (h - c) / 2,
        w = r - (f - u) / 2,
        k = w - (m - f) / 2,
        y = k - (v - m) / 2,
        x = 0,
        T = !1;
        return t.borderOuterWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderOuterWidth * a, l, i + t.borderOuterWidth * a / 2 - x, r + t.borderOuterWidth * a / 2 - x, s, u, t.colorBorderOuter, t.colorBorderOuterEnd), x += .5 * a),
        t.borderMiddleWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderMiddleWidth * a, l -= 1 + 2 * x, b + t.borderMiddleWidth * a / 2 - x, w + t.borderMiddleWidth * a / 2 - x, d + 2 * x, f + 2 * x, t.colorBorderMiddle, t.colorBorderMiddleEnd), x += .5 * a),
        t.borderInnerWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderInnerWidth * a, l -= 1 + 2 * x, g + t.borderInnerWidth * a / 2 - x, k + t.borderInnerWidth * a / 2 - x, c + 2 * x, m + 2 * x, t.colorBorderInner, t.colorBorderInnerEnd), x += .5 * a),
        Te.drawShadow(e, t, T),
        D(e, l, p, y, h + 2 * x, v + 2 * x, t.colorPlate, t.colorPlateEnd),
        e.restore(),
        [p, y, h, v]
    }

    function G(e, t, i, r, o, n) {
        var a = be.pixelRatio,
        l = n >= o,
        s = l ? .85 * o : n,
        d = l ? n : o;
        i = l ? we(i + (o - s) / 2) : i;
        var c = !!t.title,
        h = !!t.units,
        u = !!t.valueBox,
        f = void 0,
        m = void 0,
        v = void 0;
        l ? (m = we(.05 * d), f = we(.075 * d), v = we(.11 * d), c && (d -= f, r += f), h && (d -= m), u && (d -= v)) : (m = f = we(.15 * s), c && (s -= f, r += f), h && (s -= m));
        var b = 2 * t.barStrokeWidth,
        g = t.barBeginCircle ? we(s * t.barBeginCircle / 200 - b / 2) : 0,
        p = we(s * t.barWidth / 100 - b),
        w = we(d * t.barLength / 100 - b),
        k = we((d - w) / 2),
        y = we(i + (l ? s / 2 : k + g)),
        x = we(r + (l ? d - k - g + b / 2 : s / 2)),
        T = !l || t.hasLeft && t.hasRight ? 0 : (t.hasRight ? -1 : 1) * t.ticksWidth / 100 * s,
        S = l || t.hasLeft && t.hasRight ? 0 : (t.hasRight ? -1 : 1) * t.ticksWidth / 100 * s;
        return e.barDimensions = {
            isVertical: l,
            width: s,
            length: d,
            barWidth: p,
            barLength: w,
            strokeWidth: b,
            barMargin: k,
            radius: g,
            pixelRatio: a,
            barOffset: null,
            titleMargin: c ? f : 0,
            unitsMargin: h ? m : 0,
            get ticksLength() {
                return this.barLength - this.barOffset - this.strokeWidth
            },
            X: i + T,
            Y: r + S,
            x0: y + T,
            y0: x + S,
            baseX: i,
            baseY: r,
            ticksPadding: t.ticksPadding / 100
        },
        e.barDimensions
    }

    function F(e, t, i, r, o, n, a) {
        var l = G(e, t, r, o, n, a),
        s = l.isVertical,
        d = l.width,
        c = l.barWidth,
        h = l.barLength,
        u = l.strokeWidth,
        f = l.barMargin,
        m = l.radius,
        v = l.x0,
        b = l.y0,
        g = l.X,
        p = l.Y,
        w = h;
        if (e.save(), e.beginPath(), t.barBeginCircle) {
            var k = Te.radians(s ? 270 : 0),
            y = Math.asin(c / 2 / m),
            x = Math.cos(y),
            T = Math.sin(y),
            S = v + (s ? m * T : m * x - u / 2),
            W = s ? b - m * x : b + m * T,
            O = ke(s ? W - b : S - v);
            e.barDimensions.barOffset = we(O + m);
            var V = s ? we(v - m * T) : S,
            P = s ? W : we(b - m * T);
            "progress" === i && (h = e.barDimensions.barOffset + (h - e.barDimensions.barOffset) * (Te.normalizedValue(t).normal - t.minValue) / (t.maxValue - t.minValue));
            var M = we(S + h - e.barDimensions.barOffset + u / 2),
            B = we(W - h + e.barDimensions.barOffset - u / 2);
            e.arc(v, b, m, k + y, k - y),
            s ? (e.moveTo(S, P), e.lineTo(S, B), e.lineTo(V, B), e.lineTo(V, P)) : (e.moveTo(S, P), e.lineTo(M, P), e.lineTo(M, W), e.lineTo(S, W))
        } else {
            var A = we(s ? g + (d - c) / 2 : g + f),
            j = we(s ? p + h + f : p + (d - c) / 2);
            "progress" === i && (h *= (t.value - t.minValue) / (t.maxValue - t.minValue)),
            s ? e.rect(A, j, c, -h) : e.rect(A, j, h, c)
        }
        "progress" !== i && t.barStrokeWidth && (e.lineWidth = u, e.strokeStyle = t.colorBarStroke, e.stroke()),
        "progress" !== i && t.colorBar ? (e.fillStyle = t.colorBarEnd ? Te.linearGradient(e, t.colorBar, t.colorBarEnd, h, s, s ? p : g) : t.colorBar, e.fill()) : "progress" === i && t.colorBarProgress && (e.fillStyle = t.colorBarProgressEnd ? Te.linearGradient(e, t.colorBarProgress, t.colorBarProgressEnd, w, s, s ? p : g) : t.colorBarProgress, e.fill()),
        e.closePath(),
        t.barBeginCircle && (e.barDimensions.radius += u),
        e.barDimensions.barWidth += u,
        e.barDimensions.barLength += u
    }

    function X(e, t, i, r, o, n) {
        F(e, t, "", i, r, o, n)
    }

    function Y(e, t) {
        return t.needleSide !== e || t.tickSide !== e || t.numberSide !== e
    }

    function U(e, t, i, r, o, n) {
        t.barProgress && F(e, t, "progress", i, r, o, n)
    }

    function q(e, t) {
        var i = e.barDimensions,
        r = i.isVertical,
        o = i.width,
        n = i.length,
        a = i.barWidth,
        l = i.barOffset,
        s = i.barMargin,
        d = i.X,
        c = i.Y,
        h = i.ticksLength,
        u = i.ticksPadding,
        f = o * (parseFloat(t.highlightsWidth) || 0) / 100;
        if (t.highlights && f) {
            var m = "right" !== t.tickSide,
            v = "left" !== t.tickSide,
            b = 0,
            g = t.highlights.length,
            p = (o - a) / 2,
            w = t.maxValue - t.minValue,
            k = we(r ? d + p : d + s + l),
            y = f,
            x = r ? c + n - s - l : c + p,
            T = we((t.ticksWidth / 100 + u) * o) + (f - t.ticksWidth / 100 * o),
            S = we(a + u * o);
            for (e.save(); b < g; b++) {
                var W = t.highlights[b],
                O = h * ke(t.minValue - W.from) / w,
                V = h * ke((W.to - W.from) / w);
                e.beginPath(),
                e.fillStyle = W.color,
                r ? (m && e.rect(k - T, x - O, y, -V), v && e.rect(k + S, x - O, y, -V)) : (m && e.rect(k + O, x - T, V, y), v && e.rect(k + O, x + S, V, y)),
                e.fill(),
                e.closePath()
            }
        }
    }

    function H(e, t, i, r, o) {
        e.beginPath(),
        e.moveTo(t, i),
        e.lineTo(r, o),
        e.stroke(),
        e.closePath(),
        e.save()
    }

    function J(e, t, i, r, o, n, a, l, s) {
        var d = e.barDimensions,
        c = d.isVertical,
        h = d.length,
        u = d.barWidth,
        f = d.barOffset,
        m = d.barMargin,
        v = d.pixelRatio,
        b = d.width,
        g = d.X,
        p = d.Y,
        w = d.ticksLength,
        k = d.ticksPadding,
        y = (b - u) / 2,
        x = void 0,
        T = void 0,
        S = 0,
        W = i.length,
        O = void 0,
        V = s * b,
        P = y - k * b,
        M = y + u + V + k * b,
        B = t instanceof Array ? t : new Array(i.length).fill(t);
        e.lineWidth = l * v,
        e.save();
        for (var A = w / (o - r); S < W; S++)
            O = i[S], e.strokeStyle = B[S], c ? (T = p + h - m - f + (r - O) * A, n && (x = g + P, H(e, x, T, we(x - V), T)), a && (x = g + M, H(e, x, T, we(x - V), T))) : (x = g + m + f - (r - O) * A, n && (T = p + P, H(e, x, T, x, we(T - V))), a && (T = p + M, H(e, x, we(T), x, T - V)))
    }

    function $(e, t) {
        var i = Te.prepareTicks(t),
        r = le(i, 2),
        o = r[0],
        n = r[1],
        a = 2,
        l = (t.maxValue - t.minValue) / (t.majorTicks.length - 1),
        s = t.colorMajorTicks instanceof Array ? t.colorMajorTicks : new Array(t.majorTicks.length).fill(t.colorStrokeTicks || t.colorMajorTicks);
        if (J(e, s, t.exactTicks ? t.majorTicks : t.majorTicks.map(function (e, i) {
                    return t.minValue + l * i
                }), t.minValue, t.maxValue, o, n, a, t.ticksWidth / 100), t.strokeTicks) {
            var d = e.barDimensions,
            c = d.isVertical,
            h = d.length,
            u = d.width,
            f = d.barWidth,
            m = d.barMargin,
            v = d.barOffset,
            b = d.X,
            g = d.Y,
            p = d.ticksLength,
            w = d.pixelRatio,
            k = d.ticksPadding,
            y = (u - f) / 2 + f + k * u,
            x = (u - f) / 2 - k * u,
            T = void 0,
            S = void 0,
            W = void 0,
            O = void 0;
            e.strokeStyle = t.colorStrokeTicks || s[0],
            a *= w,
            c ? (S = g + h - m - v + a / 2, O = S - p - a, o && (W = T = we(b + x), Z(e, T, S, W, O)), n && (W = T = we(b + y), Z(e, T, S, W, O))) : (T = b + m + v - a / 2, W = T + p + a, o && (O = S = we(g + x), Z(e, T, S, W, O)), n && (O = S = we(g + y), Z(e, T, S, W, O)))
        }
    }

    function Z(e, t, i, r, o) {
        e.beginPath(),
        e.moveTo(t, i),
        e.lineTo(r, o),
        e.stroke(),
        e.closePath()
    }

    function K(e, t) {
        var i = Te.prepareTicks(t),
        r = le(i, 2),
        o = r[0],
        n = r[1],
        a = [],
        l = t.minValue,
        s = Math.abs(t.minorTicks) || 0,
        d = s ? (t.maxValue - t.minValue) / (s * (t.majorTicks.length - 1)) : 0;
        if (s)
            if (t.exactTicks)
                for (var c = t.majorTicks[0] % s || 0; l < t.maxValue; l += s)
                    a.push(c + l);
            else
                for (; l < t.maxValue; l += d)
                    a.push(l);
        J(e, t.colorMinorTicks || t.colorStrokeTicks, a, t.minValue, t.maxValue, o, n, 1, t.ticksWidthMinor / 100)
    }

    function Q(e, t) {
        var i = e.barDimensions,
        r = i.isVertical,
        o = i.length,
        n = i.width,
        a = i.barWidth,
        l = i.barMargin,
        s = i.barOffset,
        d = i.X,
        c = i.Y,
        h = i.ticksLength,
        u = i.ticksPadding,
        f = t.maxValue - t.minValue,
        m = f / (t.majorTicks.length - 1),
        v = t.exactTicks ? t.majorTicks : t.majorTicks.map(function (e, i) {
                return t.minValue + m * i
            }),
        b = v.length,
        g = "right" !== t.numberSide,
        p = "left" !== t.numberSide,
        w = t.fontNumbersSize * n / 200,
        k = 0,
        y = (t.ticksWidth / 100 + 2 * u) * n,
        x = (n - a) / 2 - y,
        T = (n - a) / 2 + a + y,
        S = void 0,
        W = void 0,
        O = void 0,
        V = void 0,
        P = t.colorNumbers instanceof Array ? t.colorNumbers : new Array(b).fill(t.colorNumbers),
        M = t.numbersMargin / 100 * n;
        for (e.font = Te.font(t, "Numbers", n / 200), e.lineWidth = 0, e.textAlign = "center"; k < b; k++)
            e.fillStyle = P[k], V = t.majorTicks[k], O = t.exactTicks ? h * ((v[k] - t.minValue) / f) : k * h / (b - 1), r ? (W = c + o - l - s - O + w / 3, g && (e.textAlign = "right", e.fillText(V, d + x - M, W)), p && (e.textAlign = "left", e.fillText(V, d + T + M, W))) : (e.measureText(V).width, S = d + l + s + O, g && e.fillText(V, S, c + x - M), p && e.fillText(V, S, c + T + w + M))
    }

    function ee(e, t) {
        if (t.title) {
            var i = e.barDimensions,
            r = i.isVertical,
            o = i.width,
            n = i.length,
            a = i.baseX,
            l = i.baseY,
            s = i.titleMargin,
            d = t.fontTitleSize * o / 200,
            c = we(a + (r ? o : n) / 2),
            h = we(l + s / 2 - (r ? d : d / 2) - .025 * (r ? n : o));
            e.save(),
            e.textAlign = "center",
            e.fillStyle = t.colorTitle,
            e.font = Te.font(t, "Title", o / 200),
            e.lineWidth = 0,
            e.fillText(t.title, c, h, r ? o : n)
        }
    }

    function te(e, t) {
        if (t.units) {
            var i = e.barDimensions,
            r = i.isVertical,
            o = i.width,
            n = i.length,
            a = i.baseX,
            l = i.baseY,
            s = i.unitsMargin,
            d = t.fontUnitsSize * o / 200,
            c = we(a + (r ? o : n) / 2),
            h = we(l + (r ? n : o) + s / 2 - d / 2);
            e.save(),
            e.textAlign = "center",
            e.fillStyle = t.colorUnits,
            e.font = Te.font(t, "Units", o / 200),
            e.lineWidth = 0,
            e.fillText(t.units, c, h, r ? o : n)
        }
    }

    function ie(e, t) {
        if (t.needle) {
            var i = e.barDimensions,
            r = i.isVertical,
            o = i.width,
            n = i.length,
            a = i.barWidth,
            l = i.barOffset,
            s = i.barMargin,
            d = i.ticksLength,
            c = i.X,
            h = i.Y,
            u = i.ticksPadding,
            f = "right" !== t.needleSide,
            m = "left" !== t.needleSide,
            v = d * (Te.normalizedValue(t).indented - t.minValue) / (t.maxValue - t.minValue),
            b = (t.ticksWidth / 100 + u) * o,
            g = a / 2 + b,
            p = g * (t.needleEnd / 100),
            w = void 0,
            k = void 0,
            y = void 0,
            x = void 0,
            T = "arrow" === t.needleType.toLowerCase() ? ne : oe,
            S = (o - a) / 2,
            W = g * (t.needleStart / 100),
            O = S - b - W,
            V = S + a + b + W;
            e.save(),
            Te.drawNeedleShadow(e, t),
            r ? (y = we(h + n - s - l - v), f && (w = we(c + O), k = w + p, T(e, t, w, y, k, y, p)), m && (w = we(c + V), k = w - p, T(e, t, w, y, k, y, p, !0))) : (w = we(c + s + l + v), f && (y = we(h + O), x = y + p, T(e, t, w, y, w, x, p)), m && (y = we(h + V), x = y - p, T(e, t, w, y, w, x, p, !0))),
            e.restore()
        }
    }

    function re(e, t, i, r) {
        return t.colorNeedleEnd ? Te.linearGradient(e, r ? t.colorNeedleEnd : t.colorNeedle, r ? t.colorNeedle : t.colorNeedleEnd, i, !e.barDimensions.isVertical) : t.colorNeedle
    }

    function oe(e, t, i, r, o, n, a, l) {
        e.lineWidth = t.needleWidth,
        e.strokeStyle = re(e, t, a, l),
        e.beginPath(),
        e.moveTo(i, r),
        e.lineTo(o, n),
        e.stroke(),
        e.closePath()
    }

    function ne(e, t, i, r, o, n, a, l) {
        var s = we(.4 * a),
        d = a - s,
        c = i === o,
        h = t.needleWidth / 2;
        e.fillStyle = re(e, t, a, l),
        e.beginPath(),
        c ? (r > n && (d *= -1), e.moveTo(i - h, r), e.lineTo(i + h, r), e.lineTo(i + h, r + d), e.lineTo(i, n), e.lineTo(i - h, r + d), e.lineTo(i - h, r)) : (i > o && (d *= -1), e.moveTo(i, r - h), e.lineTo(i, r + h), e.lineTo(i + d, r + h), e.lineTo(o, r), e.lineTo(i + d, r - h), e.lineTo(i, r - h)),
        e.fill(),
        e.closePath()
    }

    function ae(e, t, i, r, o, n, a) {
        var l = (parseFloat(t.fontValueSize) || 0) * n / 200,
        s = (.11 * a - l) / 2;
        e.barDimensions.isVertical && Te.drawValueBox(e, t, i, r + n / 2, o + a - l - s, n)
    }
    var le = function () {
        function e(e, t) {
            var i = [],
            r = !0,
            o = !1,
            n = void 0;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0);
            } catch (e) {
                o = !0,
                n = e
            }
            finally {
                try {
                    !r && l.return && l.return()
                }
                finally {
                    if (o)
                        throw n
                }
            }
            return i
        }
        return function (t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }
    (),
    se = function e(t, i, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, i);
        if (void 0 === o) {
            var n = Object.getPrototypeOf(t);
            return null === n ? void 0 : e(n, i, r)
        }
        if ("value" in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(r)
    },
    de = function e(t, i, r, o) {
        var n = Object.getOwnPropertyDescriptor(t, i);
        if (void 0 === n) {
            var a = Object.getPrototypeOf(t);
            null !== a && e(a, i, r, o)
        } else if ("value" in n && n.writable)
            n.value = r;
        else {
            var l = n.set;
            void 0 !== l && l.call(o, r)
        }
        return r
    },
    ce = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, i, r) {
            return i && e(t.prototype, i),
            r && e(t, r),
            t
        }
    }
    ();
    Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, t) {
            if (void 0 === e || null === e)
                throw new TypeError("Cannot convert first argument to object");
            for (var i = Object(e), r = 1; r < arguments.length; r++) {
                var o = arguments[r];
                if (void 0 !== o && null !== o)
                    for (var n = Object.keys(Object(o)), a = 0, l = n.length; a < l; a++) {
                        var s = n[a],
                        d = Object.getOwnPropertyDescriptor(o, s);
                        void 0 !== d && d.enumerable && (i[s] = o[s])
                    }
            }
            return i
        }
    }),
    Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        var i;
        if (null === this)
            throw new TypeError('"this" is null or not defined');
        var r = Object(this),
        o = r.length >>> 0;
        if (0 === o)
            return -1;
        var n = +t || 0;
        if (Math.abs(n) === 1 / 0 && (n = 0), n >= o)
            return -1;
        for (i = Math.max(n >= 0 ? n : o - Math.abs(n), 0); i < o; ) {
            if (i in r && r[i] === e)
                return i;
            i++
        }
        return -1
    }),
    Array.prototype.fill || (Array.prototype.fill = function (e) {
        if (null === this)
            throw new TypeError("this is null or not defined");
        for (var t = Object(this), i = t.length >>> 0, r = arguments[1], o = r >> 0, n = o < 0 ? Math.max(i + o, 0) : Math.min(o, i), a = arguments[2], l = void 0 === a ? i : a >> 0, s = l < 0 ? Math.max(i + l, 0) : Math.min(l, i); n < s; )
            t[n] = e, n++;
        return t
    }),
    "undefined" == typeof window && (window = "undefined" == typeof global ? {}
         : global);
    var he = function () {
        function e() {
            o(this, e),
            this._events = {},
            this.addListener = this.on,
            this.removeListener = this.off
        }
        return ce(e, [{
                    key: "emit",
                    value: function (e) {
                        if (this._events[e]) {
                            for (var t = 0, i = this._events[e].length, r = arguments.length, o = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                                o[n - 1] = arguments[n];
                            for (; t < i; t++)
                                this._events[e][t] && this._events[e][t].apply(this, o)
                        }
                    }
                }, {
                    key: "once",
                    value: function (e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            i[r - 1] = arguments[r];
                        for (var o = 0, n = i.length, a = this; o < n; o++)
                            !function () {
                                var t = i[o],
                                r = function i() {
                                    a.off(e, i),
                                    t.apply(a, arguments)
                                };
                                i[o] = r
                            }
                        ();
                        this.on.apply(this, [e].concat(i))
                    }
                }, {
                    key: "on",
                    value: function (e) {
                        this._events[e] || (this._events[e] = []);
                        for (var t = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; t < i; t++)
                            this._events[e].push(arguments.length <= t + 1 ? void 0 : arguments[t + 1])
                    }
                }, {
                    key: "off",
                    value: function (e) {
                        if (this._events[e])
                            for (var t = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; t < i; t++)
                                for (var r = arguments.length <= t + 1 ? void 0 : arguments[t + 1], o = void 0; ~(o = this._events[e].indexOf(r)); )
                                    this._events[e].splice(o, 1)
                    }
                }, {
                    key: "removeAllListeners",
                    value: function (e) {
                        delete this._events[e]
                    }
                }, {
                    key: "listeners",
                    get: function () {
                        return this._events
                    }
                }
            ]),
        e
    }
    (),
    ue = n("requestAnimationFrame") || function (e) {
        return setTimeout(function () {
            return e((new Date).getTime())
        }, 1e3 / 60)
    },
    fe = {
        linear: function (e) {
            return e
        },
        quad: function (e) {
            return Math.pow(e, 2)
        },
        dequad: function (e) {
            return 1 - fe.quad(1 - e)
        },
        quint: function (e) {
            return Math.pow(e, 5)
        },
        dequint: function (e) {
            return 1 - Math.pow(1 - e, 5)
        },
        cycle: function (e) {
            return 1 - Math.sin(Math.acos(e))
        },
        decycle: function (e) {
            return Math.sin(Math.acos(1 - e))
        },
        bounce: function (e) {
            return 1 - fe.debounce(1 - e)
        },
        debounce: function (e) {
            for (var t = 0, i = 1; 1; t += i, i /= 2)
                if (e >= (7 - 4 * t) / 11)
                    return -Math.pow((11 - 6 * t - 11 * e) / 4, 2) + Math.pow(i, 2)
        },
        elastic: function (e) {
            return 1 - fe.delastic(1 - e)
        },
        delastic: function (e) {
            return Math.pow(2, 10 * (e - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * e)
        }
    },
    me = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "linear",
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
            if (o(this, e), this.duration = i, this.rule = t, this.draw = r, this.end = n, "function" != typeof this.draw)
                throw new TypeError("Invalid animation draw callback:", r);
            if ("function" != typeof this.end)
                throw new TypeError("Invalid animation end callback:", n)
        }
        return ce(e, [{
                    key: "animate",
                    value: function (e, t) {
                        var i = this;
                        this.frame && this.cancel();
                        var r = window.performance && window.performance.now ? window.performance.now() : n("animationStartTime") || Date.now();
                        e = e || this.draw,
                        t = t || this.end,
                        this.draw = e,
                        this.end = t,
                        this.frame = ue(function (o) {
                                return a(o, e, r, fe[i.rule] || i.rule, i.duration, t, i)
                            })
                    }
                }, {
                    key: "cancel",
                    value: function () {
                        if (this.frame) {
                            (n("cancelAnimationFrame") || function (e) {})(this.frame),
                            this.frame = null
                        }
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.cancel(),
                        this.draw = null,
                        this.end = null
                    }
                }
            ]),
        e
    }
    ();
    me.rules = fe;
    var ve = function () {
        function t(i, r, n) {
            o(this, t),
            this.options = i,
            this.element = r.toLowerCase(),
            this.type = t.toDashed(n),
            this.Type = e[n],
            this.mutationsObserved = !1,
            this.isObservable = !!window.MutationObserver,
            window.GAUGES_NO_AUTO_INIT || t.domReady(this.traverse.bind(this))
        }
        return ce(t, [{
                    key: "isValidNode",
                    value: function (e) {
                        return !(!e.tagName || e.tagName.toLowerCase() !== this.element || e.getAttribute("data-type") !== this.type)
                    }
                }, {
                    key: "traverse",
                    value: function () {
                        for (var e = document.getElementsByTagName(this.element), t = 0, i = e.length; t < i; t++)
                            this.process(e[t]);
                        this.isObservable && !this.mutationsObserved && (new MutationObserver(this.observe.bind(this)).observe(document.body, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0,
                                characterData: !0,
                                attributeOldValue: !0,
                                characterDataOldValue: !0
                            }), this.mutationsObserved = !0)
                    }
                }, {
                    key: "observe",
                    value: function (e) {
                        for (var t = 0, i = e.length; t < i; t++) {
                            var r = e[t];
                            if ("attributes" === r.type && "data-type" === r.attributeName && this.isValidNode(r.target) && r.oldValue !== this.type)
                                setTimeout(this.process.bind(this, r.target));
                            else if (r.addedNodes && r.addedNodes.length)
                                for (var o = 0, n = r.addedNodes.length; o < n; o++)
                                    setTimeout(this.process.bind(this, r.addedNodes[o]))
                        }
                    }
                }, {
                    key: "process",
                    value: function (e) {
                        var i = this;
                        if (!this.isValidNode(e))
                            return null;
                        var r = void 0,
                        o = JSON.parse(JSON.stringify(this.options)),
                        n = null;
                        for (r in o)
                            if (o.hasOwnProperty(r)) {
                                var a = t.toAttributeName(r),
                                l = t.parse(e.getAttribute(a));
                                null !== l && void 0 !== l && (o[r] = l)
                            }
                        return o.renderTo = e,
                        n = new this.Type(o),
                        n.draw && n.draw(),
                        this.isObservable ? (n.observer = new MutationObserver(function (r) {
                                    r.forEach(function (r) {
                                        if ("attributes" === r.type) {
                                            var o = r.attributeName.toLowerCase(),
                                            a = e.getAttribute(o).toLowerCase();
                                            if ("data-type" === o && a && a !== i.type)
                                                n.observer.disconnect(), delete n.observer, n.destroy && n.destroy();
                                            else if ("data-" === o.substr(0, 5)) {
                                                var l = o.substr(5).split("-").map(function (e, t) {
                                                        return t ? e.charAt(0).toUpperCase() + e.substr(1) : e
                                                    }).join(""),
                                                s = {};
                                                s[l] = t.parse(e.getAttribute(r.attributeName)),
                                                "value" === l ? n && (n.value = s[l]) : n.update && n.update(s)
                                            }
                                        }
                                    })
                                }), n.observer.observe(e, {
                                attributes: !0
                            }), n) : n
                    }
                }
            ], [{
                    key: "parse",
                    value: function (e) {
                        if ("true" === e)
                            return !0;
                        if ("false" === e)
                            return !1;
                        if ("undefined" !== e) {
                            if ("null" === e)
                                return null;
                            if (/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e))
                                return e.split(",");
                            try {
                                return JSON.parse(e)
                            } catch (e) {}
                            return e
                        }
                    }
                }, {
                    key: "toDashed",
                    value: function (e) {
                        for (var t = e.split(/(?=[A-Z])/), i = 1, r = t.length, o = t[0].toLowerCase(); i < r; i++)
                            o += "-" + t[i].toLowerCase();
                        return o
                    }
                }, {
                    key: "toCamelCase",
                    value: function (e) {
                        for (var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = e.split(/-/), r = 0, o = i.length, n = ""; r < o; r++)
                            n += r || t ? i[r][0].toUpperCase() + i[r].substr(1).toLowerCase() : i[r].toLowerCase();
                        return n
                    }
                }, {
                    key: "toAttributeName",
                    value: function (e) {
                        return "data-" + t.toDashed(e)
                    }
                }, {
                    key: "domReady",
                    value: function (e) {
                        if (/comp|inter|loaded/.test((window.document || {}).readyState + ""))
                            return e();
                        window.addEventListener ? window.addEventListener("DOMContentLoaded", e, !1) : window.attachEvent && window.attachEvent("onload", e)
                    }
                }
            ]),
        t
    }
    (),
    be = function () {
        function e(t, i, r) {
            o(this, e),
            e.collection.push(this),
            this.width = i || 0,
            this.height = r || 0,
            this.element = t,
            this.init()
        }
        return ce(e, [{
                    key: "init",
                    value: function () {
                        var t = e.pixelRatio;
                        this.element.width = this.width * t,
                        this.element.height = this.height * t,
                        this.element.style.width = this.width + "px",
                        this.element.style.height = this.height + "px",
                        this.elementClone = this.element.cloneNode(!0),
                        this.context = this.element.getContext("2d"),
                        this.contextClone = this.elementClone.getContext("2d"),
                        this.drawWidth = this.element.width,
                        this.drawHeight = this.element.height,
                        this.drawX = this.drawWidth / 2,
                        this.drawY = this.drawHeight / 2,
                        this.minSide = this.drawX < this.drawY ? this.drawX : this.drawY,
                        this.elementClone.initialized = !1,
                        this.contextClone.translate(this.drawX, this.drawY),
                        this.contextClone.save(),
                        this.context.translate(this.drawX, this.drawY),
                        this.context.save(),
                        this.context.max = this.contextClone.max = this.minSide,
                        this.context.maxRadius = this.contextClone.maxRadius = null
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        var t = e.collection.indexOf(this);
                        ~t && e.collection.splice(t, 1),
                        this.context.clearRect(-this.drawX, -this.drawY, this.drawWidth, this.drawHeight),
                        this.context.max = null,
                        delete this.context.max,
                        this.context.maxRadius = null,
                        delete this.context.maxRadius,
                        this.context = null,
                        this.contextClone = null,
                        this.elementClone = null,
                        this.element = null,
                        this.onRedraw = null
                    }
                }, {
                    key: "commit",
                    value: function () {
                        var t = e.pixelRatio;
                        return 1 !== t && (this.contextClone.scale(t, t), this.contextClone.save()),
                        this
                    }
                }, {
                    key: "redraw",
                    value: function () {
                        return this.init(),
                        this.onRedraw && this.onRedraw(),
                        this
                    }
                }
            ], [{
                    key: "redraw",
                    value: function () {
                        for (var t = 0, i = e.collection.length; t < i; t++)
                            e.collection[t].redraw()
                    }
                }, {
                    key: "pixelRatio",
                    get: function () {
                        return window.devicePixelRatio || 1
                    }
                }
            ]),
        e
    }
    ();
    be.collection = [],
    window.matchMedia && window.matchMedia("screen and (min-resolution: 2dppx)").addListener(be.redraw);
    var ge = {
        renderTo: null,
        width: 0,
        height: 0,
        minValue: 0,
        maxValue: 100,
        value: 0,
        units: !1,
        exactTicks: !1,
        majorTicks: [0, 20, 40, 60, 80, 100],
        minorTicks: 10,
        strokeTicks: !0,
        animatedValue: !1,
        animateOnInit: !1,
        title: !1,
        borders: !0,
        numbersMargin: 1,
        listeners: null,
        valueInt: 3,
        valueDec: 2,
        majorTicksInt: 1,
        majorTicksDec: 0,
        animation: !0,
        animationDuration: 500,
        animationRule: "cycle",
        colorPlate: "#fff",
        colorPlateEnd: "",
        colorMajorTicks: "#444",
        colorMinorTicks: "#666",
        colorStrokeTicks: "",
        colorTitle: "#888",
        colorUnits: "#888",
        colorNumbers: "#444",
        colorNeedle: "rgba(240,128,128,1)",
        colorNeedleEnd: "rgba(255,160,122,.9)",
        colorValueText: "#444",
        colorValueTextShadow: "rgba(0,0,0,0.3)",
        colorBorderShadow: "rgba(0,0,0,0.5)",
        colorBorderOuter: "#ddd",
        colorBorderOuterEnd: "#aaa",
        colorBorderMiddle: "#eee",
        colorBorderMiddleEnd: "#f0f0f0",
        colorBorderInner: "#fafafa",
        colorBorderInnerEnd: "#ccc",
        colorValueBoxRect: "#888",
        colorValueBoxRectEnd: "#666",
        colorValueBoxBackground: "#babab2",
        colorValueBoxShadow: "rgba(0,0,0,1)",
        colorNeedleShadowUp: "rgba(2,255,255,0.2)",
        colorNeedleShadowDown: "rgba(188,143,143,0.45)",
        colorBarStroke: "#222",
        colorBar: "#ccc",
        colorBarProgress: "#888",
        colorBarShadow: "#000",
        fontNumbers: "Arial",
        fontTitle: "Arial",
        fontUnits: "Arial",
        fontValue: "Arial",
        fontNumbersSize: 20,
        fontTitleSize: 24,
        fontUnitsSize: 22,
        fontValueSize: 26,
        fontNumbersStyle: "normal",
        fontTitleStyle: "normal",
        fontUnitsStyle: "normal",
        fontValueStyle: "normal",
        fontNumbersWeight: "normal",
        fontTitleWeight: "normal",
        fontUnitsWeight: "normal",
        fontValueWeight: "normal",
        needle: !0,
        needleShadow: !0,
        needleType: "arrow",
        needleStart: 5,
        needleEnd: 85,
        needleWidth: 4,
        borderOuterWidth: 3,
        borderMiddleWidth: 3,
        borderInnerWidth: 3,
        borderShadowWidth: 3,
        valueBox: !0,
        valueBoxStroke: 5,
        valueBoxWidth: 0,
        valueText: "",
        valueTextShadow: !0,
        valueBoxBorderRadius: 2.5,
        highlights: [{
                from: 20,
                to: 60,
                color: "#eee"
            }, {
                from: 60,
                to: 80,
                color: "#ccc"
            }, {
                from: 80,
                to: 100,
                color: "#999"
            }
        ],
        highlightsWidth: 15,
        barWidth: 20,
        barStrokeWidth: 0,
        barProgress: !0,
        barShadow: 0
    };
    l.prototype = Object.create(Array.prototype),
    l.prototype.constructor = l,
    l.prototype.get = function (e) {
        if ("string" == typeof e)
            for (var t = 0, i = this.length; t < i; t++) {
                var r = this[t].options.renderTo.tagName ? this[t].options.renderTo : document.getElementById(this[t].options.renderTo || "");
                if (r.getAttribute("id") === e)
                    return this[t]
            }
        else if ("number" == typeof e)
            return this[e];
        return null
    };
    var pe = "2.1.4",
    we = Math.round,
    ke = Math.abs,
    ye = new l;
    ye.version = pe;
    var xe = function (t) {
        function n(t) {
            o(this, n);
            var r = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)),
            a = r.constructor.name;
            if ("BaseGauge" === a)
                throw new TypeError("Attempt to instantiate abstract class!");
            if (ye.push(r), t.listeners && Object.keys(t.listeners).forEach(function (e) {
                    (t.listeners[e]instanceof Array ? t.listeners[e] : [t.listeners[e]]).forEach(function (t) {
                        r.on(e, t)
                    })
                }), r.version = pe, r.type = e[a] || n, r.initialized = !1, t.minValue = parseFloat(t.minValue), t.maxValue = parseFloat(t.maxValue), t.value = parseFloat(t.value) || 0, t.borders || (t.borderInnerWidth = t.borderMiddleWidth = t.borderOuterWidth = 0), !t.renderTo)
                throw TypeError("Canvas element was not specified when creating the Gauge object!");
            var l = t.renderTo.tagName ? t.renderTo : document.getElementById(t.renderTo);
            if (!(l instanceof HTMLCanvasElement))
                throw TypeError("Given gauge canvas element is invalid!");
            return t.width = parseFloat(t.width) || 0,
            t.height = parseFloat(t.height) || 0,
            t.width && t.height || (t.width || (t.width = l.parentNode ? l.parentNode.offsetWidth : l.offsetWidth), t.height || (t.height = l.parentNode ? l.parentNode.offsetHeight : l.offsetHeight)),
            r.options = t || {},
            r.options.animateOnInit && (r._value = r.options.value, r.options.value = r.options.minValue),
            r.canvas = new be(l, t.width, t.height),
            r.canvas.onRedraw = r.draw.bind(r),
            r.animation = new me(t.animationRule, t.animationDuration),
            r
        }
        return r(n, t),
        ce(n, [{
                    key: "update",
                    value: function (e) {
                        return Object.assign(this.options, this.type.configure(e || {})),
                        this.canvas.width = this.options.width,
                        this.canvas.height = this.options.height,
                        this.animation.rule = this.options.animationRule,
                        this.animation.duration = this.options.animationDuration,
                        this.canvas.redraw(),
                        this
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        var e = ye.indexOf(this);
                        ~e && ye.splice(e, 1),
                        this.canvas.destroy(),
                        this.canvas = null,
                        this.animation.destroy(),
                        this.animation = null,
                        this.emit("destroy")
                    }
                }, {
                    key: "draw",
                    value: function () {
                        return this.options.animateOnInit && !this.initialized && (this.value = this._value, this.initialized = !0, this.emit("init")),
                        this.emit("render"),
                        this
                    }
                }, {
                    key: "value",
                    set: function (e) {
                        var t = this;
                        e = n.ensureValue(e, this.options.minValue);
                        var i = this.options.value;
                        if (e !== i)
                            if (this.options.animation) {
                                if (this.animation.frame && (this.options.value = this._value, this._value === e))
                                    return this.animation.cancel(), void delete this._value;
                                void 0 === this._value && (this._value = e),
                                this.emit("animationStart"),
                                this.animation.animate(function (r) {
                                    var o = i + (e - i) * r;
                                    t.options.animatedValue && t.emit("value", o, t.value),
                                    t.options.value = o,
                                    t.draw(),
                                    t.emit("animate", r, t.options.value)
                                }, function () {
                                    void 0 !== t._value && (t.emit("value", t._value, t.value), t.options.value = t._value, delete t._value),
                                    t.draw(),
                                    t.emit("animationEnd")
                                })
                            } else
                                this.emit("value", e, this.value), this.options.value = e, this.draw()
                    },
                    get: function () {
                        return void 0 === this._value ? this.options.value : this._value
                    }
                }
            ], [{
                    key: "configure",
                    value: function (e) {
                        return e
                    }
                }, {
                    key: "initialize",
                    value: function (e, t) {
                        return new ve(t, "canvas", e)
                    }
                }, {
                    key: "fromElement",
                    value: function (e) {
                        var t = ve.toCamelCase(e.getAttribute("data-type")),
                        i = e.attributes,
                        r = 0,
                        o = i.length,
                        n = {};
                        if (t) {
                            for (/Gauge$/.test(t) || (t += "Gauge"); r < o; r++)
                                n[ve.toCamelCase(i[r].name.replace(/^data-/, ""), !1)] = ve.parse(i[r].value);
                            new ve(n, e.tagName, t).process(e)
                        }
                    }
                }, {
                    key: "ensureValue",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return e = parseFloat(e),
                        !isNaN(e) && isFinite(e) || (e = parseFloat(t) || 0),
                        e
                    }
                }, {
                    key: "version",
                    get: function () {
                        return pe
                    }
                }
            ]),
        n
    }
    (he);
    void 0 !== e && (e.BaseGauge = xe, e.gauges = (window.document || {}).gauges = ye);
    var Te = {
        roundRect: c,
        padValue: h,
        formatMajorTickNumber: u,
        radians: f,
        radialPoint: m,
        linearGradient: v,
        drawNeedleShadow: g,
        drawValueBox: y,
        verifyError: s,
        prepareTicks: d,
        drawShadow: b,
        font: p,
        normalizedValue: x
    },
    Se = Math.PI,
    We = Se / 2,
    Oe = Object.assign({}, ge, {
            ticksAngle: 270,
            startAngle: 45,
            colorNeedleCircleOuter: "#f0f0f0",
            colorNeedleCircleOuterEnd: "#ccc",
            colorNeedleCircleInner: "#e8e8e8",
            colorNeedleCircleInnerEnd: "#f5f5f5",
            needleCircleSize: 10,
            needleCircleInner: !0,
            needleCircleOuter: !0,
            needleStart: 20,
            animationTarget: "needle",
            useMinPath: !1,
            barWidth: 0
        }),
    Ve = function (e) {
        function t(e) {
            return o(this, t),
            e = Object.assign({}, Oe, e || {}),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.configure(e)))
        }
        return r(t, e),
        ce(t, [{
                    key: "draw",
                    value: function () {
                        try {
                            var e = this.canvas,
                            i = [-e.drawX, -e.drawY, e.drawWidth, e.drawHeight],
                            r = i[0],
                            o = i[1],
                            n = i[2],
                            a = i[3],
                            l = this.options;
                            if ("needle" === l.animationTarget) {
                                if (!e.elementClone.initialized) {
                                    var s = e.contextClone;
                                    s.clearRect(r, o, n, a),
                                    s.save(),
                                    this.emit("beforePlate"),
                                    W(s, l),
                                    this.emit("beforeHighlights"),
                                    O(s, l),
                                    this.emit("beforeMinorTicks"),
                                    V(s, l),
                                    this.emit("beforeMajorTicks"),
                                    M(s, l),
                                    this.emit("beforeNumbers"),
                                    j(s, l),
                                    this.emit("beforeTitle"),
                                    C(s, l),
                                    this.emit("beforeUnits"),
                                    N(s, l),
                                    e.elementClone.initialized = !0
                                }
                                this.canvas.commit(),
                                e.context.clearRect(r, o, n, a),
                                e.context.save(),
                                e.context.drawImage(e.elementClone, r, o, n, a),
                                e.context.save(),
                                this.emit("beforeProgressBar"),
                                R(e.context, l),
                                this.emit("beforeValueBox"),
                                _(e.context, l, I(this)),
                                this.emit("beforeNeedle"),
                                E(e.context, l)
                            } else {
                                var d = -Te.radians((l.value - l.minValue) / (l.maxValue - l.minValue) * l.ticksAngle);
                                if (e.context.clearRect(r, o, n, a), e.context.save(), this.emit("beforePlate"), W(e.context, l), e.context.rotate(d), this.emit("beforeHighlights"), O(e.context, l), this.emit("beforeMinorTicks"), V(e.context, l), this.emit("beforeMajorTicks"), M(e.context, l), this.emit("beforeNumbers"), j(e.context, l), this.emit("beforeProgressBar"), R(e.context, l), e.context.rotate(-d), e.context.save(), !e.elementClone.initialized) {
                                    var c = e.contextClone;
                                    c.clearRect(r, o, n, a),
                                    c.save(),
                                    this.emit("beforeTitle"),
                                    C(c, l),
                                    this.emit("beforeUnits"),
                                    N(c, l),
                                    this.emit("beforeNeedle"),
                                    E(c, l),
                                    e.elementClone.initialized = !0
                                }
                                e.context.drawImage(e.elementClone, r, o, n, a)
                            }
                            this.emit("beforeValueBox"),
                            _(e.context, l, I(this)),
                            se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "draw", this).call(this)
                        } catch (e) {
                            Te.verifyError(e)
                        }
                        return this
                    }
                }, {
                    key: "value",
                    set: function (e) {
                        e = xe.ensureValue(e, this.options.minValue),
                        this.options.animation && 360 === this.options.ticksAngle && this.options.useMinPath && (this._value = e, e = this.options.value + ((e - this.options.value) % 360 + 540) % 360 - 180),
                        de(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", e, this)
                    },
                    get: function () {
                        return se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this)
                    }
                }
            ], [{
                    key: "configure",
                    value: function (e) {
                        return e.barWidth > 50 && (e.barWidth = 50),
                        isNaN(e.startAngle) && (e.startAngle = 45),
                        isNaN(e.ticksAngle) && (e.ticksAngle = 270),
                        e.ticksAngle > 360 && (e.ticksAngle = 360),
                        e.ticksAngle < 0 && (e.ticksAngle = 0),
                        e.startAngle < 0 && (e.startAngle = 0),
                        e.startAngle > 360 && (e.startAngle = 360),
                        e
                    }
                }
            ]),
        t
    }
    (xe);
    void 0 !== e && (e.RadialGauge = Ve),
    xe.initialize("RadialGauge", Oe);
    var Pe = Object.assign({}, ge, {
            borderRadius: 0,
            barBeginCircle: 30,
            colorBarEnd: "",
            colorBarProgressEnd: "",
            needleWidth: 6,
            tickSide: "both",
            needleSide: "both",
            numberSide: "both",
            ticksWidth: 10,
            ticksWidthMinor: 5,
            ticksPadding: 5,
            barLength: 85,
            fontTitleSize: 26,
            highlightsWidth: 10
        }),
    Me = function (e) {
        function n(e) {
            return o(this, n),
            e = Object.assign({}, Pe, e || {}),
            i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n.configure(e)))
        }
        return r(n, e),
        ce(n, [{
                    key: "draw",
                    value: function () {
                        try {
                            var e = this.canvas,
                            i = [-e.drawX, -e.drawY, e.drawWidth, e.drawHeight],
                            r = i[0],
                            o = i[1],
                            a = i[2],
                            l = i[3],
                            s = this.options;
                            if (!e.elementClone.initialized) {
                                var d = e.contextClone;
                                d.clearRect(r, o, a, l),
                                d.save(),
                                this.emit("beforePlate"),
                                this.drawBox = L(d, s, r, o, a, l),
                                this.emit("beforeBar"),
                                X.apply(void 0, [d, s].concat(t(this.drawBox))),
                                e.context.barDimensions = d.barDimensions,
                                this.emit("beforeHighlights"),
                                q(d, s),
                                this.emit("beforeMinorTicks"),
                                K(d, s),
                                this.emit("beforeMajorTicks"),
                                $(d, s),
                                this.emit("beforeNumbers"),
                                Q(d, s),
                                this.emit("beforeTitle"),
                                ee(d, s),
                                this.emit("beforeUnits"),
                                te(d, s),
                                e.elementClone.initialized = !0
                            }
                            this.canvas.commit(),
                            e.context.clearRect(r, o, a, l),
                            e.context.save(),
                            e.context.drawImage(e.elementClone, r, o, a, l),
                            e.context.save(),
                            this.emit("beforeProgressBar"),
                            U.apply(void 0, [e.context, s].concat(t(this.drawBox))),
                            this.emit("beforeNeedle"),
                            ie(e.context, s),
                            this.emit("beforeValueBox"),
                            ae.apply(void 0, [e.context, s, s.animatedValue ? this.options.value : this.value].concat(t(this.drawBox))),
                            se(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "draw", this).call(this)
                        } catch (e) {
                            Te.verifyError(e)
                        }
                        return this
                    }
                }
            ], [{
                    key: "configure",
                    value: function (e) {
                        return e.barStrokeWidth >= e.barWidth && (e.barStrokeWidth = we(e.barWidth / 2)),
                        e.hasLeft = Y("right", e),
                        e.hasRight = Y("left", e),
                        e.value > e.maxValue && (e.value = e.maxValue),
                        e.value < e.minValue && (e.value = e.minValue),
                        xe.configure(e)
                    }
                }
            ]),
        n
    }
    (xe);
    void 0 !== e && (e.LinearGauge = Me),
    xe.initialize("LinearGauge", Pe),
    "undefined" != typeof module && Object.assign(e, {
        Collection: l,
        GenericOptions: ge,
        Animation: me,
        BaseGauge: xe,
        drawings: Te,
        SmartCanvas: be,
        DomObserver: ve,
        vendorize: n
    })
}
("undefined" != typeof module ? module.exports : window);

function enhancedFreq(e, r) {
    return Math.floor(Math.random() * (r - e + 1)) + e
}

function findWaveLength(e, r, t, o, n, a, i) { //Avi thinks this is cool. It seems to identify wavelength.
    for (var u = 0, c = 0, l = 0, s = [], m = 0; m < e.length - 1; m++) {
        s.push(e[m]);
        for (var d = 1; i > d; d++)
            s.push(e[m] + (e[m + 1] - e[m]) * d / i)
    }
    s.push(e[e.length - 1]),
    r *= i,
    t *= i;
    for (var g = s.length, f = [], h = 0, w = 0, A = 0, d = 0; t > d; d++)
        Math.abs(s[d]) > h && (w = d, h = Math.abs(s[d])), A += Math.abs(s[d]);
    if (a > A / t)
        return -1;
    if (0 == w || w == t)
        return -1;
    for (var C = 0, D = 0, v = 0, y = 0, p = 0, T = 0, F = 0, b = 0, k = 0, d = r; t >= d; d++) {
        F = 0,
        b = 0,
        C = 0,
        D = 0;
        for (var N = w; g > N; N += d)
            F += s[N], 0 != b && g - 5 * i > N && (k = s[N] / s[w], k > 0 && (k > 1 && (k = 1), u = s[N], l = s[N - 5 * i], c = s[N + 5 * i], s[w] >= 0 ? u > c && u > l && (C += k * k * k * k * s[w] * o * (t - d) / t, D++) : c > u && l > u && (C += k * k * k * k * s[w] * o * (t - d) / t, D++))), b++, b >= n && (N = g);
        F += C * D / b,
        F /= b,
        F > v ? (v = F, p = d) : y > F && (y = F, T = d),
        f.push(F)
    }
    return s[w] >= 0 ? p / i : T / i
}

function findNote(e) { //Avi thinks this determines what note frequency the note is rounded to.
    if (254.285 >= e) {
        if (89.903 >= e) {
            for (var r = 0; 17 >= r; r++)
                if (e > noteBorders[r][0] && e <= noteBorders[r][1])
                    return r
        } else
            for (var r = 18; 35 >= r; r++)
                if (e > noteBorders[r][0] && e <= noteBorders[r][1])
                    return r
    } else if (719.225 >= e) {
        for (var r = 36; 53 >= r; r++)
            if (e > noteBorders[r][0] && e <= noteBorders[r][1])
                return r
    } else
        for (var r = 54; 71 >= r; r++)
            if (e > noteBorders[r][0] && e <= noteBorders[r][1])
                return r;
    return -1
}

function findNoteDeviation(e) { //returns a range of -.5 to .5//Avi copied the other one to make this one. FASCINATING. so it breaks it down to minimize the for loops.

    if (254.285 >= e) {
        if (89.903 >= e) {
            for (var r = 0; 17 >= r; r++)
                if (e > noteBorders[r][0] && e <= noteBorders[r][1])
                    return (((noteBorders[r][1] + noteBorders[r][0]) / 2 - e) / (noteBorders[r][1] - noteBorders[r][0]))
        } else
            for (var r = 18; 35 >= r; r++)
                if (e > noteBorders[r][0] && e <= noteBorders[r][1])
                    return (((noteBorders[r][1] + noteBorders[r][0]) / 2 - e) / (noteBorders[r][1] - noteBorders[r][0]))
    } else if (719.225 >= e) {
        for (var r = 36; 53 >= r; r++)
            if (e > noteBorders[r][0] && e <= noteBorders[r][1])
                return (((noteBorders[r][1] + noteBorders[r][0]) / 2 - e) / (noteBorders[r][1] - noteBorders[r][0]))
    } else
        for (var r = 54; 71 >= r; r++)
            if (e > noteBorders[r][0] && e <= noteBorders[r][1])
                return (((noteBorders[r][1] + noteBorders[r][0]) / 2 - e) / (noteBorders[r][1] - noteBorders[r][0]))
                return -1
}

// function playASequence() {
// // if (!sequenceStarted){
// // sequenceStarted=true;
// // startNoteTimer();
// // }

// // console.log("currentnotebeats "+currentNoteBeats + " note time "+noteTimeBeats);
// if ((!sequenceStarted) && (sequenceArray.length > 0)) {
// console.log(sequenceArray);
// let currentNoteInfo = sequenceArray.shift();
// currentNoteBeats = currentNoteInfo[1] + 0;
// currentRandomNoteNum = currentNoteInfo[0] + 0;

// console.log(noteArray[currentRandomNoteNum][1] + " currentnotebeats " + currentNoteBeats + " note time " + noteTimeBeats);
// // playANote(currentRandomNoteNum);

// // console.log("currentnotebeats "+currentNoteBeats + " note time "+noteTimeBeats);
// sequenceStarted = true;
// startNoteTimer();
// }
// if (noteTimeBeats > currentNoteBeats) {
// sequenceStarted = false; //proceed to the next note.
// }

// // console.log("sequenceArray "+sequenceArray.length);
// if (sequenceArray.length > 0) {

// // console.log("GJSLK");

// playASequence();
// }
// }

function harmonizeBecauseYouRight() {
    playANote(randomNoteNum);
    lastReference = randomNoteNum + 0;
    if (referenceInversion) {
        lastReferenceInversion = true;
    } else {
        lastReferenceInversion = false;
    }
    while (newLastRandomScaleNum > 11) {
        newLastRandomScaleNum = newLastRandomScaleNum - 12;
    }
    while (newLastRandomScaleNum < 0) {
        newLastRandomScaleNum = newLastRandomScaleNum + 12;
    }
    if (keyType == "major") {
        // console.log("new is " + newLastRandomScaleNum);
        lastRandomScaleNum = getScaleNumMajorNote(newLastRandomScaleNum);
    } else {
        // alert ("hi");
        // console.log("newMinor is " + newLastRandomScaleNum);
        lastRandomScaleNum = getScaleNumMinorNote(newLastRandomScaleNum);
    }
    referenceInversion = false;
    firstChordOver = true;
    //	setTimeout(stopAllNotes, 0);
    //setTimeout(alert ("hi"), 5000);
    // var audio = document.getElementById(soundId(noteArray[randomNoteNum][1]));

    // //	alert (""+soundId(getNoteName(note)));
    // // if audio(const playPromise = audio.play();
    // // if (playPromise !== null) {
    // // playPromise.catch(() => {
    // // audio.pause();
    // // audio.volume = 1.0;
    // // if (audio.readyState >= 2) {
    // // audio.currentTime = 0;
    // // // audio.play();
    // // }
    // // })
    // // }
    // // if (audio) {

    // // }

    // //press();
    // //playNote(midiNoteToFrequency(note));
    // //press(note);
    // //if (velocity > 0) {
    // if (audio) {
    // audio.pause();
    // audio.volume = 1.0;
    // if (audio.readyState >= 2) {
    // audio.currentTime = 0;
    // var promise = audio.play();

    // if (promise !== undefined) {
    // promise.then(_ => {
    // // Autoplay started!
    // }).catch(error => {
    // //alert ("it worked");
    // // Autoplay was prevented.
    // // Show a "Play" button so that user can start playback.
    // });
    // }

    // }
    // }
};
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

function getNoteNumMajorScale(scaleNum) {
    while (scaleNum > 6) {
        scaleNum = scaleNum - 7;
    }
    while (scaleNum < 0) {
        scaleNum = scaleNum + 7;
    }
    var noteNumReturn = 0;

    switch (scaleNum) {
    case 0:
        noteNumReturn = 0;
        break;
    case 1:
        noteNumReturn = 2;
        break;
    case 2:
        noteNumReturn = 4;
        break;
    case 3:
        noteNumReturn = 5;
        break;
    case 4:
        noteNumReturn = 7;
        break;
    case 5:
        noteNumReturn = 9;
        break;
    case 6:
        noteNumReturn = 11;
        break;
    }
    return noteNumReturn;
}

function getScaleNumMajorNote(scaleNum) {
    scaleNum = scaleNum - keyOf;
    while (scaleNum > 11) {
        scaleNum = scaleNum - 12;
    }
    while (scaleNum < 0) {
        scaleNum = scaleNum + 12;
    }
    var noteNumReturn = 0;

    switch (scaleNum) {
    case 0:
        noteNumReturn = 0;
        break;
    case 2:
        noteNumReturn = 1;
        break;
    case 4:
        noteNumReturn = 2;
        break;
    case 5:
        noteNumReturn = 3;
        break;
    case 7:
        noteNumReturn = 4;
        break;
    case 9:
        noteNumReturn = 5;
        break;
    case 11:
        noteNumReturn = 6;
        break;
    }
    return noteNumReturn;
}

function getScaleNumMinorNote(scaleNum) {
    scaleNum = scaleNum - keyOf;
    while (scaleNum > 11) {
        scaleNum = scaleNum - 12;
    }
    while (scaleNum < 0) {
        scaleNum = scaleNum + 12;
    }
    var noteNumReturn = 0;
    switch (scaleNum) {
    case 0:
        noteNumReturn = 0;
        break;
    case 2:
        noteNumReturn = 1;
        break;
    case 3:
        noteNumReturn = 2;
        break;
    case 5:
        noteNumReturn = 3;
        break;
    case 7:
        noteNumReturn = 4;
        break;
    case 8:
        noteNumReturn = 5;
        break;
    case 10:
        noteNumReturn = 6;
        break;
    }
    return noteNumReturn;
}

function getNoteNumMinorScale(scaleNum) {
    while (scaleNum > 6) {
        scaleNum = scaleNum - 7;
    }
    while (scaleNum < 0) {
        scaleNum = scaleNum + 7;
    }
    var noteNumReturn = 0;
    switch (scaleNum) {
    case 0:
        noteNumReturn = 0;
        break;
    case 1:
        noteNumReturn = 2;
        break;
    case 2:
        noteNumReturn = 3;
        break;
    case 3:
        noteNumReturn = 5;
        break;
    case 4:
        noteNumReturn = 7;
        break;
    case 5:
        noteNumReturn = 8;
        break;
    case 6:
        noteNumReturn = 10;
        break;
    }
    return noteNumReturn;
}
function getNoteUpInterval(currentNoteNum, intervalUp) {
    //0C, 2D,, 4E, 5F, 7G, 9A, 11B
    //04, 23, 43, 54, 74, 93, 113
    // var newInterval=4;
    // if ((currentNoteNum==0)||(currentNoteNum==5)||(currentNoteNum==7)){ //major thirds
    // }
    // else if ((currentNoteNum==2)||(currentNoteNum==4)||(currentNoteNum==9)||(currentNoteNum==11)){ //minor thirds
    // newInterval=3;
    // }
    // return newInterval;
    // };
    while (currentNoteNum > 11) {
        currentNoteNum = currentNoteNum - 12;
    }
    while (currentNoteNum < 0) {
        currentNoteNum = currentNoteNum + 12;
    }
    var newInterval = 4;
    if (majorCheck) {
        thirdType = "major";
    }
    if (keyType == "minor") {
        // alert("minor");
        if ((currentNoteNum == 3) || (currentNoteNum == 8) || (currentNoteNum == 10)) { //major thirds
        } else if ((currentNoteNum == 0) || (currentNoteNum == 2) || (currentNoteNum == 5) || (currentNoteNum == 7)) { //minor thirds
            newInterval = 3;
            if (majorCheck) {
                thirdType = "minor";
            }
        }
    } else {
        // alert ("major");
        if ((currentNoteNum == 0) || (currentNoteNum == 5) || (currentNoteNum == 7)) { //major thirds
        } else if ((currentNoteNum == 2) || (currentNoteNum == 4) || (currentNoteNum == 9) || (currentNoteNum == 11)) { //minor thirds
            newInterval = 3;
            if (majorCheck) {
                thirdType = "minor";
            }
        }
    }
    //alert (newInterval);
    return newInterval;
};

function getNoteDownInterval(currentNoteNum, intervalUp) {
    //0C, 2D,, 4E, 5F, 7G, 9A, 11B
    //03, 23, 44, 53, 73, 94, 114
    var newInterval = -4;
    if (majorCheck) {
        thirdType = "major";
    }
    if (keyType == "major") {
        if ((currentNoteNum == 4) || (currentNoteNum == 9) || (currentNoteNum == 11)) { //major thirds
        } else if ((currentNoteNum == 0) || (currentNoteNum == 2) || (currentNoteNum == 5) || (currentNoteNum == 7)) { //minor thirds
            newInterval = -3;
            if (majorCheck) {
                thirdType = "minor";
            }
        }
    } else {

        if ((currentNoteNum == 0) || (currentNoteNum == 2) || (currentNoteNum == 7)) { //major thirds
        } else if ((currentNoteNum == 3) || (currentNoteNum == 5) || (currentNoteNum == 8) || (currentNoteNum == 10)) { //minor thirds
            newInterval = -3;
            if (majorCheck) {
                thirdType = "minor";
            }
        }
    }
    return newInterval;
};

function playMajorScale(scaleRootArrayPlace) {
    beginning = false;
    // (playANote(getNoteNumMajorScale(0)+scaleRootArrayPlace));
    // var audio = document.getElementById(soundId(noteArray[getNoteNumMajorScale(0)+scaleRootArrayPlace][1]));
    // if (audio) {
    // audio.pause();
    // audio.volume = 1.0;
    // if (audio.readyState >= 2) {
    // audio.currentTime = 0;
    // var promise = audio.play();

    // if (promise !== undefined) {
    // promise.then(_ => {}).catch(error => {});
    // }
    // }

    // //alert ("do");

    // }
    // audio.onended=function(){
    // //alert ("do");
    // var audio2 = document.getElementById(soundId(noteArray[getNoteNumMajorScale(1)+scaleRootArrayPlace][1]));
    // if (audio2) {
    // audio2.pause();
    // audio2.volume = 1.0;
    // if (audio2.readyState >= 2) {
    // audio2.currentTime = 0;
    // var promise = audio2.play();

    // if (promise !== undefined) {
    // promise.then(_ => {}).catch(error => {});
    // }
    // }
    // alert ("now begin");

    newQuestionTime = true;
    // }
};
// setTimeout(playANote(getNoteNumMajorScale(1)+scaleRootArrayPlace), 0);
// alert ("re");
// setTimeout(playANote(getNoteNumMajorScale(2)+scaleRootArrayPlace), 0);
// alert ("mi");
// setTimeout(playANote(getNoteNumMajorScale(3)+scaleRootArrayPlace), 0);
// alert ("fa");
// setTimeout(playANote(getNoteNumMajorScale(4)+scaleRootArrayPlace), 0);
// alert ("sol");
// setTimeout(playANote(getNoteNumMajorScale(5)+scaleRootArrayPlace), 0);
// alert ("la");
// setTimeout(playANote(getNoteNumMajorScale(6)+scaleRootArrayPlace), 0);
// alert ("ti");
// setTimeout(playANote(12+scaleRootArrayPlace), 0);
// alert ("do");
function isolateAWorkingKey(theSequenceYouSung) {
    let totalDeviation = 0;
    let justCheckingDeviation = 0;
    theSequenceYouSung = JSON.parse(JSON.stringify(theSequenceYouSung));
    let theSequenceYouSungLowestFinder = JSON.parse(JSON.stringify(theSequenceYouSung));
    let lowestNote = 100;
    let lowestPlace = 0;
    for (var o = 0; o < theSequenceYouSungLowestFinder.length; o++) {
        if (lowestNote > theSequenceYouSungLowestFinder[o][0]) {
            lowestNote = theSequenceYouSungLowestFinder[o][0] + 0;
            lowestPlace = o + 0;
        }
    }
    let firstNoteAndRange = [theSequenceYouSung[lowestPlace][0], noteBorders[theSequenceYouSung[lowestPlace][0]][0], noteBorders[theSequenceYouSung[lowestPlace][0]][1]];
    let tweakAmount = 0;
    let hundredthSize = ((firstNoteAndRange[2] - firstNoteAndRange[1]) / 100);
    let increment = 0;
    let lowestDeviation = 100;
    let correctedSequence = [];
    // for (var i=0; i<theSequenceYouSung.length; i++){
    // totalDeviation=totalDeviation+Math.abs(theSequenceYouSung[i][3]);
    // // justCheckingDeviation=justCheckingDeviation+Math.abs(findNoteDeviation(theSequenceYouSung[i][4]+increment));
    // }
    for (var j = 0; j < 100; j++) {
        increment = (j - (hundredthSize / 2)) * hundredthSize;
        justCheckingDeviation = 0;
        for (var i = 0; i < theSequenceYouSung.length; i++) {
            // totalDeviation=totalDeviation+Math.abs(theSequenceYouSung[i][3]);
            justCheckingDeviation = justCheckingDeviation + Math.abs(findNoteDeviation(theSequenceYouSung[i][4] + increment));
        }
        if (justCheckingDeviation < lowestDeviation) {
            lowestDeviation = justCheckingDeviation + 0;
            tweakAmount = increment + 0;
        }
    }
    console.warn(theSequenceYouSung.toString());
    for (var k = 0; k < theSequenceYouSung.length; k++) {
        correctedSequence.push([findNote(theSequenceYouSung[k][4] + increment) + 0, theSequenceYouSung[k][1] + 0, theSequenceYouSung[k][2] + 0]);
    }
    console.warn(correctedSequence.toString());

    // alert (firstNoteAndRange[0]+" and then an increment of " +increment+ " with a deviation of "+lowestDeviation + " which is an improvement over "+totalDeviation + " after "+theSequenceYouSung.length+" notes.");

    // alert (totalDeviation+" vs "+justCheckingDeviation);
    return correctedSequence; //This should now return a sequence of new notes that are now in the key.
}

function compoundNeighborTones(theSequenceYouSung) {
    let correctedSequence = [];
    let originalSequenceLength = theSequenceYouSung.length + 0;
    console.warn(theSequenceYouSung.toString());
    theSequenceYouSung = JSON.parse(JSON.stringify(theSequenceYouSung));
    for (var k = 0; k < (theSequenceYouSung.length - 1); k++) {
        let index = originalSequenceLength - k - 1;
        if (theSequenceYouSung[index - 1][0] == theSequenceYouSung[index][0]) {
            theSequenceYouSung[index - 1][1] = theSequenceYouSung[index - 1][1] + theSequenceYouSung[index][1];
            theSequenceYouSung.splice(index, 1);
        }
        console.warn(theSequenceYouSung.toString());
    }
    //beginning to try to address the fact that we randomly record octaves up or down in here.. don't know what that is about.
    theSequenceYouSung = JSON.parse(JSON.stringify(theSequenceYouSung));
    originalSequenceLength = theSequenceYouSung.length + 0;
    let averageNumber = 0;
    let totalNumbers = 0;
    let sumNumbers = 0;
    for (var l = 0; l < (theSequenceYouSung.length - 1); l++) {
        if (theSequenceYouSung[l][0] > 0) {
            totalNumbers++;
            sumNumbers = sumNumbers + theSequenceYouSung[l][0];
        }
    }
    averageNumber = sumNumbers / totalNumbers;

    for (var i = 0; i < (theSequenceYouSung.length - 1); i++) {
        let index = originalSequenceLength - i - 1;
        if ((theSequenceYouSung[index - 1][0] == (theSequenceYouSung[index][0] + 12)) && ((theSequenceYouSung[index][0]) < averageNumber)) { //if this one is 12 below the one before, and it is less than the average
            theSequenceYouSung[index - 1][1] = theSequenceYouSung[index - 1][1] + theSequenceYouSung[index][1];
            theSequenceYouSung.splice(index, 1);
        } else if ((theSequenceYouSung[index - 1][0] == (theSequenceYouSung[index][0] - 12)) && ((theSequenceYouSung[index][0]) > averageNumber)) { //if this one is 12 higher the one before, and it is higher than the average
            theSequenceYouSung[index - 1][1] = theSequenceYouSung[index - 1][1] + theSequenceYouSung[index][1];
            theSequenceYouSung.splice(index, 1);
        } else if ((theSequenceYouSung[index - 1][0] == (theSequenceYouSung[index][0] + 24)) && ((theSequenceYouSung[index][0]) < averageNumber)) { //if this one is 12 below the one before, and it is less than the average
            theSequenceYouSung[index - 1][1] = theSequenceYouSung[index - 1][1] + theSequenceYouSung[index][1];
            theSequenceYouSung.splice(index, 1);
        } else if ((theSequenceYouSung[index - 1][0] == (theSequenceYouSung[index][0] - 24)) && ((theSequenceYouSung[index][0]) > averageNumber)) { //if this one is 12 higher the one before, and it is higher than the average
            theSequenceYouSung[index - 1][1] = theSequenceYouSung[index - 1][1] + theSequenceYouSung[index][1];
            theSequenceYouSung.splice(index, 1);
        }
        console.warn(theSequenceYouSung.toString());
    }

    //ending to try to address the fact that we randomly record octaves up or down in here.. don't know what that is about.
    return theSequenceYouSung;
}

function compoundShortTones(theSequenceYouSung) {
    theSequenceYouSung = JSON.parse(JSON.stringify(theSequenceYouSung));
    let correctedSequence = [];
    let removeNotesArray = [];
    console.warn("at the beginning of compounding " + theSequenceYouSung.toString());
    for (var i = 0; sequenceLength > i; i++) {
        let thisNoteTime = theSequenceYouSung[i][1] + 0;

        thisNoteTime = thisNoteTime / (60 / currentBPM);
        thisNoteTime = Math.round(thisNoteTime * 2) / 2;
        console.warn(thisNoteTime);
        if (thisNoteTime == 0) {
            // console.warn("we removed " + i + " " + theSequenceYouSung[i].toString()); //fixed this spot
            // alert (i+0);
            removeNotesArray.push(i + 0);
        }
        // else {
        // theSequenceYouSung[i][1] = thisNoteTime;
        // randomNoteNum = theSequenceYouSung[i][0];

        // if (keyType == "major") {
        // // console.log("new is " + newLastRandomScaleNum);
        // randomScaleNum = getScaleNumMajorNote(randomNoteNum);
        // } else {
        // // alert ("hi");
        // // console.log("newMinor is " + newLastRandomScaleNum);
        // randomScaleNum = getScaleNumMinorNote(randomNoteNum);
        // }
        // theSequenceYouSung[i][2] = randomScaleNum + 0;
        // // console.log(noteArray[theSequenceYouSung[i][0]][1] + " for " + thisNoteTime);
        // }
    }
    for (var i = 0; (removeNotesArray.length) > i; i++) { //fixed this spot
        let index = removeNotesArray[removeNotesArray.length - i - 1]; //fixed this spot
        console.warn(index + " is index is " + theSequenceYouSung.toString());
        try {
            if (theSequenceYouSung[index - 1][0] == theSequenceYouSung[index][0]) {
                theSequenceYouSung[index - 1][1] = theSequenceYouSung[index - 1][1] + theSequenceYouSung[index][1];
            }
        } catch (error) {}
        try {
            if (theSequenceYouSung[index + 1][0] == theSequenceYouSung[index][0]) {
                theSequenceYouSung[index + 1][1] = theSequenceYouSung[index + 1][1] + theSequenceYouSung[index][1];
            }
        } catch (error) {}
        theSequenceYouSung.splice(index, 1);
        //fixed this spot
        // console.warn(theSequenceYouSung.toString());
    }
    // for (var i=0; i<theSequenceYouSung.length; i++){


    // }
    return theSequenceYouSung;
}

function stopAllNotes() {
    try {
        for (var i = 0; i < audioArray.length; i++) {
            try {
                audioArray[i][0].pause();
            } catch (error) {}
        }
    } catch (error) {}
}

function stopArpeggioNotes() {
    try {
        for (var i = 0; i < arpeggioAudioArray.length; i++) {
            try {
                arpeggioAudioArray[i][0].pause();
            } catch (error) {}
        }
    } catch (error) {}
}

function stopRootNotes() {
    try {
        for (var i = 0; i < rootAudioArray.length; i++) {
            try {
                rootAudioArray[i][0].pause();
            } catch (error) {}
        }
    } catch (error) {}
}

function stopVoices() {
    // alert ("hi");
    try {
        for (var i = 0; i < audioArray.length; i++) {
            try {
                console.warn(audioArray[i][1][1]);
                if (audioArray[i][1][1] == "humanVoice") {

                    audioArray[i][0].pause();
                }

            } catch (error) {}
        }
        // alert ("ho");
    } catch (error) {
        console.error(error.toString)
    }
}

function amplifyMedia(mediaElem, multiplier) {
    var context = new(window.AudioContext || window.webkitAudioContext),
    result = {
        context: context,
        source: context.createMediaElementSource(mediaElem),
        gain: context.createGain(),
        media: mediaElem,
        amplify: function (multiplier) {
            result.gain.gain.value = multiplier;
        },
        getAmpLevel: function () {
            return result.gain.gain.value;
        }
    };
    result.source.connect(result.gain);
    result.gain.connect(context.destination);
    result.amplify(multiplier);
    return result;
}

async function playANote(arrayPlace) { // where we Play Notes  //important chordIsDone means we are not playing the chord. !chordIsDone means we are playing the chord or arpeggios.


    // console.log("Playing "+ noteArray[arrayPlace][1]);
    // console.log(arrayPlace + " " + noteArray[arrayPlace][1]);
    //beginning of section on playing the notes using time.
    //TRANSPLANT END
    if ((captureButtons) && (justPlayingScaleFam)) {
        buttonStartEndTimes.push([arrayPlace, new Date(new Date().getTime())]);
        if (buttonStartEndTimes.length > 1) {
            // alert("long");
            singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000.0001, 0]);
            buttonStartEndTimes.shift();
            // console.log(singingTimeArray.toString());
        }
    }
    if (instrument == "synth") {
        var noteStr = noteArray[arrayPlace][1];
        noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);

        synth.triggerRelease();
        try {
            synth.set("volume", (referenceVolume / 10) - 17); //(((0.01+referenceVolume))/100-.0001));
        } catch (error) {
            console.log(error.toString());
        }
        // synth.volume=(((0.01+referenceVolume))/100-.0001);
        // console.log("it is" +(((0.01+referenceVolume))/100-.0001));
        if (referenceVolume > 0) {
            synth.triggerAttackRelease(noteStr, '10');
            // alert ("hi");
            synthStarted = new Date(new Date().getTime());
        } //([noteStr, noteArray[53][0]],['10', '1']); // ((0.01+referenceVolume))/100-.0001);
    } else if (instrument == "synth2") {
        try {
            var noteStr = noteArray[arrayPlace - 24][1];
        } catch (err) {
            var noteStr = noteArray[arrayPlace][1];
        }
        noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
        synth2.triggerRelease();
        synth2.set("volume", (accompanimentVolume / 10) - 30); //(((0.01+referenceVolume))/100-.0001));
        // synth.volume=(((0.01+referenceVolume))/100-.0001);
        // console.log("it is" +(((0.01+referenceVolume))/100-.0001));
        // alert("hi");
        synth2.triggerAttackRelease(noteStr, '10');

        // synthStarted=new Date(new Date().getTime());//([noteStr, noteArray[53][0]],['10', '1']); // ((0.01+referenceVolume))/100-.0001);
    } else {
        if ((chordIsDone)) { // Avi changed this on 5-22 5/22
            synthStarted = new Date(new Date().getTime()); //([noteStr, noteArray[53][0]],['10', '1']); // ((0.01+referenceVolume))/100-.0001);
        }
        var noteStr = "";
        // console.log(instrument);
        if (instrument != "rhythmInstruments") {
            // alert (instrument);
            var noteStr = noteArray[arrayPlace][2]; // error spot 1
            noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
        } else {
            var noteStr = arrayPlace;
        }
        if (!((!accompaniment) && (instrument == "pianoAccompaniment"))) {
            let audio = (document.getElementById(soundId(noteStr)));

            // var audioContextual= amplifyMedia(audio, 1);
            // audio.crossOrigin = "anonymous";
            var newNote = true;
            try {
                for (var i = 0; i < audioArray.length; i++) {
                    // console.log(audioArray[i].includes(noteArray[arrayPlace][1]));}
                    // console.log(audioArray.length);

                    if ((audioArray[i].includes([noteStr, (instrument + "")])) == true) {
                        //	console.log("hi");
                        if (arpeggioPlay) {
                            console.log(audioArray[i][0]);
                            audioArray[i][0].pause();
                            newNote = false;
                            0
                            audioArray[i] = [audio, [noteStr, (instrument + "")]];
                        } else {
                            // console.log(arpeggioAudioArray[i][0]);
                            arpeggioAudioArray[i][0].pause();
                            newNote = false;
                            0
                            arpeggioAudioArray[i] = [audio, [noteStr, (instrument + "")]];

                        }

                    }
                }
                document.querySelector('.step2 .note:nth-child(' + (i + 1) + ')').classList.add('on');
            } catch (error) {}
            if (newNote == true) {
                if (instrument != "rhythmInstruments") {
                    audioArray.push([audio, [noteArray[arrayPlace][1], (instrument + "")]])
                } else {
                    audioArray.push([audio, [arrayPlace, (instrument + "")]])
                }
            }

            //console.log(audioArray.toString());
            if (audio) {
                try {
                    // audio.pause();
                    if ((!chordIsDone) || (arpeggioPlay)) {
                        // console.log("chordisplaying");
                        // console.log(instrument);
                        if ((instrument == "piano") || (instrument == "pianoAccompaniment")) {
                            audio.volume = ((0.01 + accompanimentVolume)) / 100 - .0001; //accompanimentVolume/50;
                        } else if (instrument == "humanVoice") {
                            audio.volume = ((0.01 + accompanimentVolume)) / 500.0 - .0001; //accompanimentVolume/50;
                        } else if (instrument == "rhythmInstruments") {
                            // console.log (((0.01 + rhythmVolume)) / 400.0 - .0001);
                            try {
                                audio.volume = ((0.01 + rhythmVolume)) / 400.0 - .00001; //accompanimentVolume/50;
                            } catch (error) {
                                console.log(error.toString());
                            }
                        }
                        // console.log("volume setting "+(((0.01+accompanimentVolume)/100)-.0001));
                    } else {
                        if (instrument == "piano") {
                            audio.volume = ((0.01 + referenceVolume)) / 100 - .0001; //accompanimentVolume/50;
                        } else if (instrument == "humanVoice") {

                            audio.volume = ((0.01 + referenceVolume)) / 300.0 - .0001; //accompanimentVolume/50;
                        }

                    }
                } catch (error) {}
                // audioContextual.amplify(accompanimentVolume/50);//1.0;

                if (audio.readyState >= 2) {
                    audio.currentTime = 0;

                    if (arpeggioPlay) {
                        await audio.play();
                    } else {
                        var promise = audio.play();

                        if (promise !== undefined) {
                            promise.then(_ => {}).catch(error => {});
                        }
                    }
                }
            }
        }
    }
    if (!justPlayingScaleFam) { //this is where we play not scales


        if ((accompaniment) && (chordIsDone) && (arpeggioPlay) && (!arpeggioAdded)) { //TRANSPLANT ENTRY FOR ARPEGGIO INFO!!     //this is where we play the accompaniment.
            chordIsDone = false;
            // alert (arpeggioPlay);
            // nonReferencePlay = false; //AVI you mmay
            if (rhythmPlay) {
                rhythmSequenceArray = [];
                // alert ("hi");
                if (!rhythmSense) {
                    setupRhythmSequence();
                } else {
                    setupStepRhythmSequence();
                }

                rhythmSequenceCopy = [];
                rhythmSequenceCopy = rhythmSequenceArray.slice();
            }
            // alert ("you should hear a chord");
            let currentInstrument = instrument + "";
            if (currentInstrument == "piano") {
                instrument = "humanVoice";
            } else {
                instrument = "pianoAccompaniment";
            }
            let randomNoteLocal = randomNoteNum + 0;

            let randomScaleLocal = randomScaleNum + 0;
            if (intervalDirection == "fourthUp") {
                randomScaleLocal = randomScaleLocal + 3;
            } else if (intervalDirection == "fourthDown") {
                randomScaleLocal = randomScaleLocal;
            } else if (intervalDirection == "up") {
                randomScaleLocal = randomScaleLocal;
            } else if (intervalDirection == "down") {
                randomScaleLocal = randomScaleLocal - 2;
            } else if (intervalDirection == "fourthUp") {
                randomScaleLocal = randomScaleLocal;
            }
            if (randomScaleLocal > 6) {
                randomScaleLocal = randomScaleLocal - 7;
            }
            if (randomScaleLocal < 0) {
                randomScaleLocal = randomScaleLocal + 7;
            }
            if ((keyType == "major") && (randomScaleLocal == 6)) { // if it would be a diminished chord, let's swap it out for something else

                randomScaleLocal = 4;
            } else if ((keyType == "minor") && (randomScaleLocal == 1)) {
                randomScaleLocal = 6;
            }
            if (keyType == "major") {
                randomNoteLocal = getNoteNumMajorScale(randomScaleLocal) + noteAdapter + scaleAdapter + shiftAdapter;
                shiftAdapter = 0;
            } else if (keyType == "minor") {
                randomNoteLocal = getNoteNumMinorScale(randomScaleLocal) + noteAdapter + scaleAdapter + shiftAdapter;
                shiftAdapter = 0;
            }
            // console.log("current is "+randomScaleLocal+" and last was "+lastRandomScaleNum);
            let rootDifference = randomNoteLocal - lastReference + 0;
            let scaleDifference = randomScaleLocal - lastRandomScaleNum + 0;
            let scaleAbsDifference = Math.abs(randomScaleLocal - lastRandomScaleNum) + 0; //Avi 4-22-2020 you are going to need to update this so you don't screw up the inversions.
            let rootAbsDifference = Math.abs(randomNoteLocal - lastReference) + 0; //the difference between the root note for now, might change later to be the bottom note.
            if (((scaleAbsDifference) > 2) && (!lastReferenceInversion) && (firstChordOver) && (inversionsAreOn)) { //these are the rules for thirdup, and usually assuming the reference is the root.
                // console.log("inversion time");

                referenceInversion = true;
                // if (keyType == "major") {
                let chordRoot = randomNoteLocal + 0;
                newLastRandomScaleNum = chordRoot + 0;
                // console.log(scaleDifference+" is the diff");
                switch (scaleDifference) {
                case (-6):
                    chordRoot = randomNoteLocal + 12;
                    thumb = chordRoot;
                    middle = (chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    pinkie = (chordRoot) + 7;
                    if (!arpeggioPlay) {
                        playANote((chordRoot));
                        playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                        playANote((chordRoot) + 7);
                    } else {
                        // console.log("arpeggiopushing");


                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot]);
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot]);
                        if (arpeggioChoice == 0) {
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                        } else if (arpeggioChoice == 1) {
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        } else if (arpeggioChoice == 2) {
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        }
                    }
                    newLastRandomScaleNum = chordRoot + 0;
                    break;
                case (-5):
                    chordRoot = randomNoteLocal + 12;
                    thumb = ((chordRoot) + 7 - 12)
                    middle = ((chordRoot));
                    pinkie = ((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    if (!arpeggioPlay) {
                        playANote((chordRoot));
                        playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                        playANote((chordRoot) + 7 - 12);
                    } else {
                        // console.log("arpeggiopushing");
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot + 7 - 12]);
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot + 7 - 12]);
                        if (arpeggioChoice == 0) {
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        } else if (arpeggioChoice == 1) {
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        } else if (arpeggioChoice == 2) {
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        }
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);

                    }
                    newLastRandomScaleNum = chordRoot + 7 - 12;
                    break;
                case (-4):
                    chordRoot = randomNoteLocal + 12;
                    thumb = ((chordRoot) + 7 - 12)
                    middle = ((chordRoot));
                    pinkie = ((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    if (!arpeggioPlay) {
                        playANote((chordRoot));
                        playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                        playANote((chordRoot) + 7 - 12);
                    } else {
                        // console.log("arpeggiopushing");
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot + 7 - 12]);
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot + 7 - 12]);
                        if (arpeggioChoice == 0) {
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        } else if (arpeggioChoice == 1) {
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        } else if (arpeggioChoice == 2) {
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        }

                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);

                    }
                    newLastRandomScaleNum = chordRoot + 7 - 12;
                    break;
                case (-3):
                    chordRoot = randomNoteLocal + 12;
                    thumb = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)
                    middle = ((chordRoot - 12) + 7);
                    pinkie = ((chordRoot));
                    if (!arpeggioPlay) {
                        // console.log((chordRoot - (noteAdapter + scaleAdapter)), 3);
                        playANote((chordRoot));
                        playANote((chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                        playANote((chordRoot - 12) + 7);
                    } else {
                        // console.log("arpeggiopushing");
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot + 7 - 12]);
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot + 7 - 12]);
                        if (arpeggioChoice == 0) {
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        } else if (arpeggioChoice == 1) {
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        } else if (arpeggioChoice == 2) {
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        }
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);

                    }
                    newLastRandomScaleNum = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    break;
                case (3):
                    chordRoot = randomNoteLocal;
                    thumb = ((chordRoot) + 7 - 12)
                    middle = ((chordRoot));
                    pinkie = ((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    if (!arpeggioPlay) {
                        playANote((chordRoot));
                        playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                        playANote((chordRoot) + 7 - 12);
                    } else {
                        // console.log("arpeggiopushing");
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot + 7 - 12]);
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot + 7 - 12]);
                        if (arpeggioChoice == 0) {
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        } else if (arpeggioChoice == 1) {
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        } else if (arpeggioChoice == 2) {
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        }

                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot + 7 - 12]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot + 7 - 12]);

                    }

                    newLastRandomScaleNum = chordRoot + 7 - 12;
                    break;
                case (4):
                    chordRoot = randomNoteLocal;
                    thumb = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)
                    middle = ((chordRoot - 12) + 7);
                    pinkie = ((chordRoot));
                    if (!arpeggioPlay) {
                        playANote((chordRoot));
                        playANote((chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                        playANote((chordRoot - 12) + 7);
                    } else {
                        // console.log("arpeggiopushing");
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        if (arpeggioChoice == 0) {
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        } else if (arpeggioChoice == 1) {
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        } else if (arpeggioChoice == 2) {
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        }
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);

                    }
                    newLastRandomScaleNum = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    break;
                case (5):
                    chordRoot = randomNoteLocal;
                    thumb = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)
                    middle = ((chordRoot - 12) + 7);
                    pinkie = ((chordRoot));
                    if (!arpeggioPlay) {
                        playANote((chordRoot));
                        playANote((chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                        playANote((chordRoot - 12) + 7);
                    } else {
                        // console.log("arpeggiopushing");
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        if (arpeggioChoice == 0) {
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        } else if (arpeggioChoice == 1) {
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        } else if (arpeggioChoice == 2) {
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        }
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3)]);

                    }
                    newLastRandomScaleNum = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    break;
                case (6):
                    chordRoot = randomNoteLocal - 12;
                    thumb = chordRoot;
                    middle = (chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    pinkie = (chordRoot) + 7;
                    if (!arpeggioPlay) {
                        playANote((chordRoot));
                        playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                        playANote((chordRoot) + 7);
                    } else {
                        // console.log("arpeggiopushing");
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot]);
                        rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot]);

                        if (arpeggioChoice == 0) {
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                        } else if (arpeggioChoice == 1) {
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        } else if (arpeggioChoice == 2) {
                            arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                            arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        }
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                        // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);

                    }
                    newLastRandomScaleNum = chordRoot + 0;
                    break;
                    // randomNoteLocal = getNoteNumMajorScale(randomScaleLocal) + noteAdapter + scaleAdapter;
                    // } else {
                    // alert ("hi");
                    // randomNoteLocal = getNoteNumMinorScale(randomScaleLocal) + noteAdapter + scaleAdapter;
                }
            } else {
                // console.log("normal time");
                chordRoot = randomNoteLocal;
                thumb = chordRoot;
                middle = (chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                pinkie = (chordRoot) + 7;
                if (!arpeggioPlay) {
                    playANote((randomNoteLocal));
                    playANote((randomNoteLocal) + getNoteUpInterval((randomNoteLocal - (noteAdapter + scaleAdapter)), 3));
                    playANote((randomNoteLocal) + 7);
                } else if ((!arpeggioAdded)) {
                    // console.log("arpeggiopushing");
                    rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot]);
                    rootSequenceArray.push([thumb + leftHandDrop, rootNoteLength, chordRoot]);
                    if (arpeggioChoice == 0) {
                        arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                    } else if (arpeggioChoice == 1) {
                        arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                        arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                    } else if (arpeggioChoice == 2) {
                        arpeggioSequenceArray.push([thumb + 0, arpeggioNoteLength, chordRoot]);
                        arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                        arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                        arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                    }
                    // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                    // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                    // // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                    // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);
                    // arpeggioSequenceArray.push([pinkie + 0, arpeggioNoteLength, chordRoot]);
                    // arpeggioSequenceArray.push([middle + 0, arpeggioNoteLength, chordRoot]);

                }

                newLastRandomScaleNum = randomNoteLocal + 0;
            }
            if ((arpeggioPlay)) {
                arpeggioSequenceCopy = [];
                arpeggioSequenceCopy = arpeggioSequenceArray.slice();
                // arpeggioSequenceCopy.unshift([arpeggioSequenceCopy[0][0], arpeggioNoteLength, arpeggioSequenceCopy[0][2]]);

                rootSequenceCopy = [];
                rootSequenceCopy = rootSequenceArray.slice();
                // console.log(arpeggioAdded + " " + arpeggioSequenceArray[0][1]);
                // rootSequenceCopy.unshift([rootSequenceCopy[0][0], rootNoteLength, rootSequenceCopy[0][2]]);

                // console.log(rootSequenceCopy[0][0]);
            }
            if (rhythmPlay) {
                rhythmSequenceCopy = [];
                rhythmSequenceCopy = rhythmSequenceArray.slice();
            }
            // console.log("the last is "+newLastRandomScaleNum);
            instrument = currentInstrument;
            if (!nonReferencePlay) {
                chordIsDone = true;
            }
            // console.log("arpeggioAdded " + arpeggioAdded);
            arpeggioAdded = true;
            // console.log("then arpeggioAdded " + arpeggioAdded);
        } else if ((accompaniment) && (chordIsDone) && (!arpeggioPlay)) { //this is where we play the accompaniment.
            chordIsDone = false;
            if (rhythmPlay) {
                rhythmSequenceArray = [];
                setupRhythmSequence();
                rhythmSequenceCopy = [];
                rhythmSequenceCopy = rhythmSequenceArray.slice();
            }
            // alert ("you should hear a chord");
            let currentInstrument = instrument + "";
            if (currentInstrument == "piano") {
                instrument = "humanVoice";
            } else {
                instrument = "pianoAccompaniment";
            }
            let randomNoteLocal = randomNoteNum + 0;

            let randomScaleLocal = randomScaleNum + 0;
            if (intervalDirection == "fourthUp") {
                randomScaleLocal = randomScaleLocal + 3;
            } else if (intervalDirection == "fourthDown") {
                randomScaleLocal = randomScaleLocal;
            } else if (intervalDirection == "up") {
                randomScaleLocal = randomScaleLocal;
            } else if (intervalDirection == "down") {
                randomScaleLocal = randomScaleLocal - 2;
            } else if (intervalDirection == "fourthUp") {
                randomScaleLocal = randomScaleLocal;
            }
            if (randomScaleLocal > 6) {
                randomScaleLocal = randomScaleLocal - 7;
            }
            if (randomScaleLocal < 0) {
                randomScaleLocal = randomScaleLocal + 7;
            }
            if ((keyType == "major") && (randomScaleLocal == 6)) { // if it would be a diminished chord, let's swap it out for something else

                randomScaleLocal = 4;
            } else if ((keyType == "minor") && (randomScaleLocal == 1)) {
                randomScaleLocal = 6;
            }
            if (keyType == "major") {
                randomNoteLocal = getNoteNumMajorScale(randomScaleLocal) + noteAdapter + scaleAdapter + shiftAdapter;
                shiftAdapter = 0;
            } else if (keyType == "minor") {
                randomNoteLocal = getNoteNumMinorScale(randomScaleLocal) + noteAdapter + scaleAdapter + shiftAdapter;
                shiftAdapter = 0;
            }
            // console.log("current is "+randomScaleLocal+" and last was "+lastRandomScaleNum);
            let rootDifference = randomNoteLocal - lastReference + 0;
            let scaleDifference = randomScaleLocal - lastRandomScaleNum + 0;
            let scaleAbsDifference = Math.abs(randomScaleLocal - lastRandomScaleNum) + 0; //Avi 4-22-2020 you are going to need to update this so you don't screw up the inversions.
            let rootAbsDifference = Math.abs(randomNoteLocal - lastReference) + 0; //the difference between the root note for now, might change later to be the bottom note.
            if (((scaleAbsDifference) > 2) && (!lastReferenceInversion) && (firstChordOver) && (inversionsAreOn)) { //these are the rules for thirdup, and usually assuming the reference is the root.
                // console.log("inversion time");
                referenceInversion = true;
                // if (keyType == "major") {
                let chordRoot = randomNoteLocal + 0;
                newLastRandomScaleNum = chordRoot + 0;
                // console.log(scaleDifference+" is the diff");
                switch (scaleDifference) {
                case (-6):
                    chordRoot = randomNoteLocal + 12;
                    playANote((chordRoot));
                    playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    playANote((chordRoot) + 7);
                    newLastRandomScaleNum = chordRoot + 0;
                    break;
                case (-5):
                    chordRoot = randomNoteLocal + 12;
                    playANote((chordRoot));
                    playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    playANote((chordRoot) + 7 - 12);
                    newLastRandomScaleNum = chordRoot + 7 - 12;
                    break;
                case (-4):
                    chordRoot = randomNoteLocal + 12;
                    playANote((chordRoot));
                    playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    playANote((chordRoot) + 7 - 12);
                    newLastRandomScaleNum = chordRoot + 7 - 12;
                    break;
                case (-3):
                    chordRoot = randomNoteLocal + 12;
                    console.log((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    playANote((chordRoot));
                    playANote((chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    playANote((chordRoot - 12) + 7);
                    newLastRandomScaleNum = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    break;
                case (3):
                    chordRoot = randomNoteLocal;
                    playANote((chordRoot));
                    playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    playANote((chordRoot) + 7 - 12);
                    newLastRandomScaleNum = chordRoot + 7 - 12;
                    break;
                case (4):
                    chordRoot = randomNoteLocal;
                    playANote((chordRoot));
                    playANote((chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    playANote((chordRoot - 12) + 7);
                    newLastRandomScaleNum = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    break;
                case (5):
                    chordRoot = randomNoteLocal;
                    playANote((chordRoot));
                    playANote((chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    playANote((chordRoot - 12) + 7);
                    newLastRandomScaleNum = (chordRoot - 12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
                    break;
                case (6):
                    chordRoot = randomNoteLocal - 12;
                    playANote((chordRoot));
                    playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
                    playANote((chordRoot) + 7);
                    newLastRandomScaleNum = chordRoot + 0;
                    break;
                    // randomNoteLocal = getNoteNumMajorScale(randomScaleLocal) + noteAdapter + scaleAdapter;
                    // } else {
                    // alert ("hi");
                    // randomNoteLocal = getNoteNumMinorScale(randomScaleLocal) + noteAdapter + scaleAdapter;
                }
            } else {
                // console.log("normal time");
                playANote((randomNoteLocal));
                playANote((randomNoteLocal) + getNoteUpInterval((randomNoteLocal - (noteAdapter + scaleAdapter)), 3));
                playANote((randomNoteLocal) + 7);
                newLastRandomScaleNum = randomNoteLocal + 0;
            }
            // console.log("the last is "+newLastRandomScaleNum);
            instrument = currentInstrument;
            if (!nonReferencePlay) {
                chordIsDone = true;
            }
        }

    } else {
        justPlayingScaleFam = false;
    }

}

function setupStepRhythmSequence() {
    if (rhythmFreestyle) {
        rhythmStarted = true;
        setupStepKickSequence();
        setupStepClapSequence(); // inst copy
        setupStepInst5Sequence(); // inst copy
        setupStepInst6Sequence(); // inst copy
        setupStepInst7Sequence(); // inst copy
        setupStepHatSequence();
        setupStepSnareSequence();
    } else {
        rhythmStarted = true;
        if (backbeat) {
            setupBackbeat();
        } else {
            snareSequenceArray = [];
            snareSequenceCopy = [];
            snareStarted = false;
            snareStepArray[4].classList.add("unselectedstep");
            snareStepArray[4].classList.remove("selectedstep");
            snareStepArray[12].classList.add("unselectedstep");
            snareStepArray[12].classList.remove("selectedstep");
            tempSnareSequenceArray = [];
        }
        if (metronome) {
            setupMetronome();
        }
        if (randomizeKicks) {
            setupRandomKickSequence(numOfRandomSteps);
        }
        if (randomizeHats) {
            setupRandomHatSequence(numOfRandomSteps);
        }
        if (randomizeClaps) { // inst copy start
            setupRandomClapSequence(numOfRandomSteps);
        } // inst copy end
        if (randomizeInst5) {
            setupRandomInst5Sequence(numOfRandomSteps);
        }
        if (randomizeInst6) {
            setupRandomInst6Sequence(numOfRandomSteps);
        }
        if (randomizeInst7) {
            setupRandomInst7Sequence(numOfRandomSteps);
        }
        if (randomizeSnares) {
            setupRandomSnareSequence(numOfRandomSteps);
        }
    }

}
function setupBackbeat() {
    snareSequenceArray = [];
    snareStarted = true;
    snareStepArray[4].classList.add("selectedstep");
    snareStepArray[4].classList.remove("unselectedstep");
    snareStepArray[12].classList.add("selectedstep");
    snareStepArray[12].classList.remove("unselectedstep");
    snareSequenceArray.push(["rest", 1, 0]);
    snareSequenceArray.push(["snare", 2, 0]);
    snareSequenceArray.push(["snare", 1, 0]);
    tempSnareSequenceArray = [];
    tempSnareSequenceArray.push(["rest", 1, 0]);
    tempSnareSequenceArray.push(["snare", 2, 0]);
    tempSnareSequenceArray.push(["snare", 1, 0]);

}
function setupMetronome() {

    inst6SequenceArray = [];
    if (metronome) {
        // alertify("metronome");
        setRhythmInstrument("inst6", "metronome", "clave");
        inst6Started = true;
        inst6StepArray[0].classList.add("selectedstep");
        inst6StepArray[0].classList.remove("unselectedstep");
        inst6StepArray[4].classList.add("selectedstep");
        inst6StepArray[4].classList.remove("unselectedstep");
        inst6StepArray[8].classList.add("selectedstep");
        inst6StepArray[8].classList.remove("unselectedstep");
        inst6StepArray[12].classList.add("selectedstep");
        inst6StepArray[12].classList.remove("unselectedstep");
        inst6SequenceArray.push(["triangle", 1, 0]);
        inst6SequenceArray.push(["clave", 1, 0]);
        inst6SequenceArray.push(["clave", 1, 0]);
        inst6SequenceArray.push(["clave", 1, 0]);
        tempInst6SequenceArray = [];
        tempInst6SequenceArray.push(["triangle", 1, 0]);
        tempInst6SequenceArray.push(["clave", 1, 0]);
        tempInst6SequenceArray.push(["clave", 1, 0]);
        tempInst6SequenceArray.push(["clave", 1, 0]);

        inst6SequenceCopy = inst6SequenceArray.slice();
    } else {
        inst6SequenceCopy = [];
        tempInst6SequenceArray = [];
        inst6StepArray[0].classList.add("unselectedstep");
        inst6StepArray[0].classList.remove("selectedstep");
        inst6StepArray[4].classList.add("unselectedstep");
        inst6StepArray[4].classList.remove("selectedstep");
        inst6StepArray[8].classList.add("unselectedstep");
        inst6StepArray[8].classList.remove("selectedstep");
        inst6StepArray[12].classList.add("unselectedstep");
        inst6StepArray[12].classList.remove("selectedstep");
    }

}
function setupRandomKickSequence(amountOfRandomKicks) {
    // alertify ("hello");
    document.getElementById('kickstepone').classList.add("lititup");
    document.getElementById('snarestepone').classList.add("lititup");
    document.getElementById('clapstepone').classList.add("lititup"); // inst copy
    document.getElementById('inst5stepone').classList.add("lititup"); // inst copy
    document.getElementById('inst6stepone').classList.add("lititup"); // inst copy
    document.getElementById('inst7stepone').classList.add("lititup"); // inst copy
    document.getElementById('hatstepone').classList.add("lititup");
    // document.getElementById('kickstepone').classList.remove('unselectedstep');
    // document.getElementById('kickstepone').classList.remove('selectedstep');
    if (kickSequenceCopy.length == 0) {
        // hatSequenceArray = [];
        // hatStarted = true;

        // hatSequenceArray.push(["hat", 4 , 0]);

        kickSequenceArray = [];
        kickStarted = true;
        var remainingKicks = amountOfRandomKicks + 0;
        var kickStepsLeft = 16 / simplifiedDenominator;
        for (kickNum = 0; kickNum < amountOfRandomKicks; kickNum++) {
            // console.warn("kickStepsLeft " + kickStepsLeft + " remainingKicks " + remainingKicks);
            let thisRandomKickTime = Math.ceil(Math.random() * (kickStepsLeft - remainingKicks + 0))
                kickSequenceArray.push([kickinstrument, thisRandomKickTime / (4 / simplifiedDenominator), 0]);
            remainingKicks = remainingKicks - 1;
            kickStepsLeft = kickStepsLeft - thisRandomKickTime;

            // console.warn("kickStepsLeft " + kickStepsLeft + " remainingKicks " + remainingKicks);
        }
        kickSequenceArray.push([kickinstrument, kickStepsLeft / (4 / simplifiedDenominator), 0]);
        kickSequenceCopy = kickSequenceArray.slice();
        // hatSequenceCopy = hatSequenceArray.slice();
        snareSequenceCopy = snareSequenceArray.slice();
        inst6SequenceCopy = inst6SequenceArray.slice();
        // console.warn(kickSequenceCopy.toString());
        // console.warn(kickSequenceCopy.toString());
    } else {
        // hatSequenceArray = hatSequenceCopy.slice();
        snareSequenceArray = snareSequenceCopy.slice();
        inst6SequenceArray = inst6SequenceCopy.slice();
        kickSequenceArray = kickSequenceCopy.slice();
        // console.warn(hatSequenceCopy.toString());
    }
}

function setupRandomHatSequence(amountOfRandomHats) {
    // alertify ("hello");
    // document.getElementById('hatstepone').classList.remove('unselectedstep');
    // document.getElementById('hatstepone').classList.remove('selectedstep');
    if (hatSequenceCopy.length == 0) {
        hatSequenceArray = [];
        hatStarted = true;
        var remainingHats = amountOfRandomHats + 0;
        var hatStepsLeft = 16 / simplifiedDenominator;
        for (hatNum = 0; hatNum < amountOfRandomHats; hatNum++) {
            // console.warn("hatStepsLeft " + hatStepsLeft + " remainingHats " + remainingHats);
            let thisRandomHatTime = Math.ceil(Math.random() * (hatStepsLeft - remainingHats + 0))
                hatSequenceArray.push([hatinstrument, thisRandomHatTime / (4 / simplifiedDenominator), 0]);
            remainingHats = remainingHats - 1;
            hatStepsLeft = hatStepsLeft - thisRandomHatTime;

            // console.warn("hatStepsLeft " + hatStepsLeft + " remainingHats " + remainingHats);
        }
        hatSequenceArray.push([hatinstrument, hatStepsLeft / (4 / simplifiedDenominator), 0]);
        // hatSequenceCopy = hatSequenceArray.slice();
        hatSequenceCopy = hatSequenceArray.slice();
        snareSequenceCopy = snareSequenceArray.slice();
        // console.warn(hatSequenceCopy.toString());
        // console.warn(hatSequenceCopy.toString());
    } else {
        // hatSequenceArray = hatSequenceCopy.slice();
        snareSequenceArray = snareSequenceCopy.slice();
        hatSequenceArray = hatSequenceCopy.slice();
        // console.warn(hatSequenceCopy.toString());
    }
}

function setupRandomClapSequence(amountOfRandomClaps) {
    // alertify ("hello");
    // document.getElementById('hatstepone').classList.remove('unselectedstep');
    // document.getElementById('clapstepone').classList.remove('selectedstep');
    if (clapSequenceCopy.length == 0) {
        clapSequenceArray = [];
        clapStarted = true;
        var remainingClaps = amountOfRandomClaps + 0;
        var clapStepsLeft = 16 / simplifiedDenominator;
        for (clapNum = 0; clapNum < amountOfRandomClaps; clapNum++) {
            // console.warn("clapStepsLeft " + clapStepsLeft + " remainingClaps " + remainingClaps);
            let thisRandomClapTime = Math.ceil(Math.random() * (clapStepsLeft - remainingClaps + 0))
                clapSequenceArray.push([clapinstrument, thisRandomClapTime / (4 / simplifiedDenominator), 0]);
            remainingClaps = remainingClaps - 1;
            clapStepsLeft = clapStepsLeft - thisRandomClapTime;

            // console.warn("clapStepsLeft " + clapStepsLeft + " remainingClaps " + remainingClaps);
        }
        clapSequenceArray.push([clapinstrument, clapStepsLeft / (4 / simplifiedDenominator), 0]);
        // clapSequenceCopy = clapSequenceArray.slice();
        clapSequenceCopy = clapSequenceArray.slice();
        snareSequenceCopy = snareSequenceArray.slice();
        // console.warn(clapSequenceCopy.toString());
        // console.warn(clapSequenceCopy.toString());
    } else {
        // clapSequenceArray = clapSequenceCopy.slice();
        snareSequenceArray = snareSequenceCopy.slice();
        clapSequenceArray = clapSequenceCopy.slice();
        // console.warn(clapSequenceCopy.toString());
    }
}

function setupRandomInst5Sequence(amountOfRandomInst5s) {
    // alertify ("hello");
    // document.getElementById('inst5stepone').classList.remove('unselectedstep');
    // document.getElementById('inst5stepone').classList.remove('selectedstep');
    if (inst5SequenceCopy.length == 0) {
        inst5SequenceArray = [];
        inst5Started = true;
        var remainingInst5s = amountOfRandomInst5s + 0;
        var inst5StepsLeft = 16 / simplifiedDenominator;
        for (inst5Num = 0; inst5Num < amountOfRandomInst5s; inst5Num++) {
            // console.warn("inst5StepsLeft " + inst5StepsLeft + " remainingInst5s " + remainingInst5s);
            let thisRandomInst5Time = Math.ceil(Math.random() * (inst5StepsLeft - remainingInst5s + 0))
                inst5SequenceArray.push([inst5instrument, thisRandomInst5Time / (4 / simplifiedDenominator), 0]);
            remainingInst5s = remainingInst5s - 1;
            inst5StepsLeft = inst5StepsLeft - thisRandomInst5Time;

            // console.warn("inst5StepsLeft " + inst5StepsLeft + " remainingInst5s " + remainingInst5s);
        }
        inst5SequenceArray.push([inst5instrument, inst5StepsLeft / (4 / simplifiedDenominator), 0]);
        // inst5SequenceCopy = inst5SequenceArray.slice();
        inst5SequenceCopy = inst5SequenceArray.slice();
        snareSequenceCopy = snareSequenceArray.slice();
        // console.warn(inst5SequenceCopy.toString());
        // console.warn(inst5SequenceCopy.toString());
    } else {
        // inst5SequenceArray = inst5SequenceCopy.slice();
        snareSequenceArray = snareSequenceCopy.slice();
        inst5SequenceArray = inst5SequenceCopy.slice();
        // console.warn(inst5SequenceCopy.toString());
    }
}

function setupRandomInst6Sequence(amountOfRandomInst6s) {
    // alertify ("hello");
    // document.getElementById('inst6stepone').classList.remove('unselectedstep');
    // document.getElementById('inst6stepone').classList.remove('selectedstep');
    if (inst6SequenceCopy.length == 0) {
        inst6SequenceArray = [];
        inst6Started = true;
        var remainingInst6s = amountOfRandomInst6s + 0;
        var inst6StepsLeft = 16 / simplifiedDenominator;
        for (inst6Num = 0; inst6Num < amountOfRandomInst6s; inst6Num++) {
            // console.warn("inst6StepsLeft " + inst6StepsLeft + " remainingInst6s " + remainingInst6s);
            let thisRandomInst6Time = Math.ceil(Math.random() * (inst6StepsLeft - remainingInst6s + 0))
                inst6SequenceArray.push([inst6instrument, thisRandomInst6Time / (4 / simplifiedDenominator), 0]);
            remainingInst6s = remainingInst6s - 1;
            inst6StepsLeft = inst6StepsLeft - thisRandomInst6Time;

            // console.warn("inst6StepsLeft " + inst6StepsLeft + " remainingInst6s " + remainingInst6s);
        }
        inst6SequenceArray.push([inst6instrument, inst6StepsLeft / (4 / simplifiedDenominator), 0]);
        // inst6SequenceCopy = inst6SequenceArray.slice();
        inst6SequenceCopy = inst6SequenceArray.slice();
        snareSequenceCopy = snareSequenceArray.slice();
        // console.warn(inst6SequenceCopy.toString());
        // console.warn(inst6SequenceCopy.toString());
    } else {
        // inst6SequenceArray = inst6SequenceCopy.slice();
        snareSequenceArray = snareSequenceCopy.slice();
        inst6SequenceArray = inst6SequenceCopy.slice();
        // console.warn(inst6SequenceCopy.toString());
    }
}

function setupRandomInst7Sequence(amountOfRandomInst7s) {
    // alertify ("hello");
    // document.getElementById('inst7stepone').classList.remove('unselectedstep');
    // document.getElementById('inst7stepone').classList.remove('selectedstep');
    if (inst7SequenceCopy.length == 0) {
        inst7SequenceArray = [];
        inst7Started = true;
        var remainingInst7s = amountOfRandomInst7s + 0;
        var inst7StepsLeft = 16 / simplifiedDenominator;
        for (inst7Num = 0; inst7Num < amountOfRandomInst7s; inst7Num++) {
            // console.warn("inst7StepsLeft " + inst7StepsLeft + " remainingInst7s " + remainingInst7s);
            let thisRandomInst7Time = Math.ceil(Math.random() * (inst7StepsLeft - remainingInst7s + 0))
                inst7SequenceArray.push([inst7instrument, thisRandomInst7Time / (4 / simplifiedDenominator), 0]);
            remainingInst7s = remainingInst7s - 1;
            inst7StepsLeft = inst7StepsLeft - thisRandomInst7Time;

            // console.warn("inst7StepsLeft " + inst7StepsLeft + " remainingInst7s " + remainingInst7s);
        }
        inst7SequenceArray.push([inst7instrument, inst7StepsLeft / (4 / simplifiedDenominator), 0]);
        // inst7SequenceCopy = inst7SequenceArray.slice();
        inst7SequenceCopy = inst7SequenceArray.slice();
        snareSequenceCopy = snareSequenceArray.slice();
        // console.warn(inst7SequenceCopy.toString());
        // console.warn(inst7SequenceCopy.toString());
    } else {
        // inst7SequenceArray = inst7SequenceCopy.slice();
        snareSequenceArray = snareSequenceCopy.slice();
        inst7SequenceArray = inst7SequenceCopy.slice();
        // console.warn(inst7SequenceCopy.toString());
    }
}

function setupRandomSnareSequence(amountOfRandomSnares) {
    // alertify ("hello");
    // document.getElementById('snarestepone').classList.remove('unselectedstep');
    // document.getElementById('snarestepone').classList.remove('selectedstep');
    if (snareSequenceCopy.length == 0) {
        snareSequenceArray = [];
        snareStarted = true;
        var remainingSnares = amountOfRandomSnares + 0;
        var snareStepsLeft = 16 / simplifiedDenominator;
        for (snareNum = 0; snareNum < amountOfRandomSnares; snareNum++) {
            // console.warn("snareStepsLeft " + snareStepsLeft + " remainingSnares " + remainingSnares);
            let thisRandomSnareTime = Math.ceil(Math.random() * (snareStepsLeft - remainingSnares + 0))
                snareSequenceArray.push([snareinstrument, thisRandomSnareTime / (4 / simplifiedDenominator), 0]);
            remainingSnares = remainingSnares - 1;
            snareStepsLeft = snareStepsLeft - thisRandomSnareTime;

            // console.warn("snareStepsLeft " + snareStepsLeft + " remainingSnares " + remainingSnares);
        }
        snareSequenceArray.push([snareinstrument, snareStepsLeft / (4 / simplifiedDenominator), 0]);
        // snareSequenceCopy = snareSequenceArray.slice();
        snareSequenceCopy = snareSequenceArray.slice();
        snareSequenceCopy = snareSequenceArray.slice();
        // console.warn(snareSequenceCopy.toString());
        // console.warn(snareSequenceCopy.toString());
    } else {
        // snareSequenceArray = snareSequenceCopy.slice();
        snareSequenceArray = snareSequenceCopy.slice();
        snareSequenceArray = snareSequenceCopy.slice();
        // console.warn(snareSequenceCopy.toString());
    }
}
function generateStepKickSequence() {
    tempKickSequenceArray = [];
    var firstkicksounded = false;
    var kicksToAddToEnd = 0;
    var thiskickLength = 0.25;
    var kickOnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (kickStepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                kickOnOne = true;
            }
            if (!firstkicksounded) {
                firstkicksounded = true;
            } else {
                tempKickSequenceArray.push([kickinstrument, thiskickLength + 0, 0]);
                var thiskickLength = .25;
            }
        } else if (kickStepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstkicksounded) {
                kicksToAddToEnd = kicksToAddToEnd + .25;
            } else {
                var thiskickLength = thiskickLength + .25;
            }
        }

    }
    if (firstkicksounded) {
        if (kickOnOne) {
            tempKickSequenceArray.push([kickinstrument, thiskickLength + 0 + kicksToAddToEnd, 0]);
        } else {
            tempKickSequenceArray.push([kickinstrument, thiskickLength + 0, 0]);
            tempKickSequenceArray.unshift(["rest", kicksToAddToEnd + 0, 0]);
        }
    }
    if (rhythmSpeedMode) {
        checkMyRhythmAnswer();
    }
}
function generateStepHatSequence() {
    tempHatSequenceArray = [];
    var firsthatsounded = false;
    var hatsToAddToEnd = 0;
    var thishatLength = 0.25;
    var hatOnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (hatStepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                hatOnOne = true;
            }
            if (!firsthatsounded) {
                firsthatsounded = true;
            } else {
                tempHatSequenceArray.push([hatinstrument, thishatLength + 0, 0]);
                var thishatLength = .25;
            }
        } else if (hatStepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firsthatsounded) {
                hatsToAddToEnd = hatsToAddToEnd + .25;
            } else {
                var thishatLength = thishatLength + .25;
            }
        }

    }

    if (firsthatsounded) {
        if (hatOnOne) {
            tempHatSequenceArray.push([hatinstrument, thishatLength + 0 + hatsToAddToEnd, 0]);
        } else {
            tempHatSequenceArray.push([hatinstrument, thishatLength + 0, 0]);
            tempHatSequenceArray.unshift(["rest", hatsToAddToEnd + 0, 0]);
        }
    }
    if (rhythmSpeedMode) {
        checkMyRhythmAnswer();
    }
}

function generateStepClapSequence() { //inst copy
    tempClapSequenceArray = [];
    var firstclapsounded = false;
    var clapsToAddToEnd = 0;
    var thisclapLength = 0.25;
    var clapOnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (clapStepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                clapOnOne = true;
            }
            if (!firstclapsounded) {
                firstclapsounded = true;
            } else {
                tempClapSequenceArray.push([clapinstrument, thisclapLength + 0, 0]);
                var thisclapLength = .25;
            }
        } else if (clapStepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstclapsounded) {
                clapsToAddToEnd = clapsToAddToEnd + .25;
            } else {
                var thisclapLength = thisclapLength + .25;
            }
        }

    }

    if (firstclapsounded) {
        if (clapOnOne) {
            tempClapSequenceArray.push([clapinstrument, thisclapLength + 0 + clapsToAddToEnd, 0]);
        } else {
            tempClapSequenceArray.push([clapinstrument, thisclapLength + 0, 0]);
            tempClapSequenceArray.unshift(["rest", clapsToAddToEnd + 0, 0]);
        }
    }
    if (rhythmSpeedMode) {
        checkMyRhythmAnswer();
    }
} //inst copy


function generateStepInst5Sequence() { //inst copy
    tempInst5SequenceArray = [];
    var firstinst5sounded = false;
    var inst5sToAddToEnd = 0;
    var thisinst5Length = 0.25;
    var inst5OnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (inst5StepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                inst5OnOne = true;
            }
            if (!firstinst5sounded) {
                firstinst5sounded = true;
            } else {
                tempInst5SequenceArray.push([inst5instrument, thisinst5Length + 0, 0]);
                var thisinst5Length = .25;
            }
        } else if (inst5StepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstinst5sounded) {
                inst5sToAddToEnd = inst5sToAddToEnd + .25;
            } else {
                var thisinst5Length = thisinst5Length + .25;
            }
        }

    }

    if (firstinst5sounded) {
        if (inst5OnOne) {
            tempInst5SequenceArray.push([inst5instrument, thisinst5Length + 0 + inst5sToAddToEnd, 0]);
        } else {
            tempInst5SequenceArray.push([inst5instrument, thisinst5Length + 0, 0]);
            tempInst5SequenceArray.unshift(["rest", inst5sToAddToEnd + 0, 0]);
        }
    }
    if (rhythmSpeedMode) {
        checkMyRhythmAnswer();
    }
} //inst copy


function generateStepInst6Sequence() { //inst copy
    tempInst6SequenceArray = [];
    var firstinst6sounded = false;
    var inst6sToAddToEnd = 0;
    var thisinst6Length = 0.25;
    var inst6OnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (inst6StepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                inst6OnOne = true;
            }
            if (!firstinst6sounded) {
                firstinst6sounded = true;
            } else {
                tempInst6SequenceArray.push([inst6instrument, thisinst6Length + 0, 0]);
                var thisinst6Length = .25;
            }
        } else if (inst6StepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstinst6sounded) {
                inst6sToAddToEnd = inst6sToAddToEnd + .25;
            } else {
                var thisinst6Length = thisinst6Length + .25;
            }
        }

    }

    if (firstinst6sounded) {
        if (inst6OnOne) {
            tempInst6SequenceArray.push([inst6instrument, thisinst6Length + 0 + inst6sToAddToEnd, 0]);
        } else {
            tempInst6SequenceArray.push([inst6instrument, thisinst6Length + 0, 0]);
            tempInst6SequenceArray.unshift(["rest", inst6sToAddToEnd + 0, 0]);
        }
    }
    if (rhythmSpeedMode) {
        checkMyRhythmAnswer();
    }
} //inst copy


function generateStepInst7Sequence() { //inst copy
    tempInst7SequenceArray = [];
    var firstinst7sounded = false;
    var inst7sToAddToEnd = 0;
    var thisinst7Length = 0.25;
    var inst7OnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (inst7StepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                inst7OnOne = true;
            }
            if (!firstinst7sounded) {
                firstinst7sounded = true;
            } else {
                tempInst7SequenceArray.push([inst7instrument, thisinst7Length + 0, 0]);
                var thisinst7Length = .25;
            }
        } else if (inst7StepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstinst7sounded) {
                inst7sToAddToEnd = inst7sToAddToEnd + .25;
            } else {
                var thisinst7Length = thisinst7Length + .25;
            }
        }

    }

    if (firstinst7sounded) {
        if (inst7OnOne) {
            tempInst7SequenceArray.push([inst7instrument, thisinst7Length + 0 + inst7sToAddToEnd, 0]);
        } else {
            tempInst7SequenceArray.push([inst7instrument, thisinst7Length + 0, 0]);
            tempInst7SequenceArray.unshift(["rest", inst7sToAddToEnd + 0, 0]);
        }
    }
    if (rhythmSpeedMode) {
        checkMyRhythmAnswer();
    }
} //inst copy

function generateStepSnareSequence() { //inst copy
    tempSnareSequenceArray = [];
    var firstsnaresounded = false;
    var snaresToAddToEnd = 0;
    var thissnareLength = 0.25;
    var snareOnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (snareStepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                snareOnOne = true;
            }
            if (!firstsnaresounded) {
                firstsnaresounded = true;
            } else {
                tempSnareSequenceArray.push([snareinstrument, thissnareLength + 0, 0]);
                var thissnareLength = .25;
            }
        } else if (snareStepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstsnaresounded) {
                snaresToAddToEnd = snaresToAddToEnd + .25;
            } else {
                var thissnareLength = thissnareLength + .25;
            }
        }

    }

    if (firstsnaresounded) {
        if (snareOnOne) {
            tempSnareSequenceArray.push([snareinstrument, thissnareLength + 0 + snaresToAddToEnd, 0]);
        } else {
            tempSnareSequenceArray.push([snareinstrument, thissnareLength + 0, 0]);
            tempSnareSequenceArray.unshift(["rest", snaresToAddToEnd + 0, 0]);
        }
    }
    if (rhythmSpeedMode) {
        checkMyRhythmAnswer();
    }
}
function checkMyRhythmAnswer() {
    let didYouKickIt = ((JSON.stringify(tempKickSequenceArray) == JSON.stringify(kickSequenceCopy)) && (JSON.stringify(tempHatSequenceArray) == JSON.stringify(hatSequenceCopy)) && (JSON.stringify(tempClapSequenceArray) == JSON.stringify(clapSequenceCopy)) && (JSON.stringify(tempInst5SequenceArray) == JSON.stringify(inst5SequenceCopy)) && (JSON.stringify(tempInst6SequenceArray) == JSON.stringify(inst6SequenceCopy)) && (JSON.stringify(tempInst7SequenceArray) == JSON.stringify(inst7SequenceCopy)) && (JSON.stringify(tempSnareSequenceArray) == JSON.stringify(snareSequenceCopy))); //inst copy

    console.warn("temp hat sequence " + tempHatSequenceArray.toString() + " hat sequence " + hatSequenceCopy.toString());
    console.warn("temp kick sequence " + tempKickSequenceArray.toString() + " kick sequence " + kickSequenceCopy.toString());
    console.warn("temp snare sequence " + tempSnareSequenceArray.toString() + " snare sequence " + snareSequenceCopy.toString());
    if (didYouKickIt) {

        if (!noMorePoints) {
            currentLevelScore++;
            totalScore++;
            updateProgress();
        }
        noMorePoints = true;
        document.getElementById("totalscore").innerHTML = "#Correct = " + totalScore;

        alertify("Nice Job! You got that one! Hit 'Give me another!' to move on.")
        if (rhythmSpeedMode) {
            checkForUpdatedDifficulty();
            newQuestionTime = true;
            resetStepElements();
            setupSteps();
        }
    }
}
function setupStepKickSequence() {
    kickSequenceArray = [];
    kickStarted = true;
    var firstkicksounded = false;
    var kicksToAddToEnd = 0;
    var thiskickLength = 0.25;
    var kickOnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (kickStepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                kickOnOne = true;
            }
            if (!firstkicksounded) {
                firstkicksounded = true;
            } else {
                kickSequenceArray.push([kickinstrument, thiskickLength + 0, 0]);
                var thiskickLength = .25;
            }
        } else if (kickStepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstkicksounded) {
                kicksToAddToEnd = kicksToAddToEnd + .25;
            } else {
                var thiskickLength = thiskickLength + .25;
            }
        }

    }

    if (firstkicksounded) {
        if (kickOnOne) {
            kickSequenceArray.push([kickinstrument, thiskickLength + 0 + kicksToAddToEnd, 0]);
        } else {
            kickSequenceArray.push([kickinstrument, thiskickLength + 0, 0]);
            kickSequenceArray.unshift(["rest", kicksToAddToEnd + 0, 0]);
        }
    }
    console.warn(kickSequenceArray.toString());
}

function setupStepClapSequence() { // inst copy  start
    clapSequenceArray = [];
    clapStarted = true;
    var firstclapsounded = false;
    var clapsToAddToEnd = 0;
    var thisclapLength = 0.25;
    var clapOnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (clapStepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                clapOnOne = true;
            }
            if (!firstclapsounded) {
                firstclapsounded = true;
            } else {
                clapSequenceArray.push([clapinstrument, thisclapLength + 0, 0]);
                var thisclapLength = .25;
            }
        } else if (clapStepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstclapsounded) {
                clapsToAddToEnd = clapsToAddToEnd + .25;
            } else {
                var thisclapLength = thisclapLength + .25;
            }
        }

    }
    if (firstclapsounded) {
        if (clapOnOne) {
            clapSequenceArray.push([clapinstrument, thisclapLength + 0 + clapsToAddToEnd, 0]);
        } else {
            clapSequenceArray.push([clapinstrument, thisclapLength + 0, 0]);
            clapSequenceArray.unshift(["rest", clapsToAddToEnd + 0, 0]);
        }
    }
    // console.warn(clapSequenceArray.toString());
} // inst copy


function setupStepInst5Sequence() { // inst copy  start
    inst5SequenceArray = [];
    inst5Started = true;
    var firstinst5sounded = false;
    var inst5sToAddToEnd = 0;
    var thisinst5Length = 0.25;
    var inst5OnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (inst5StepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                inst5OnOne = true;
            }
            if (!firstinst5sounded) {
                firstinst5sounded = true;
            } else {
                inst5SequenceArray.push([inst5instrument, thisinst5Length + 0, 0]);
                var thisinst5Length = .25;
            }
        } else if (inst5StepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstinst5sounded) {
                inst5sToAddToEnd = inst5sToAddToEnd + .25;
            } else {
                var thisinst5Length = thisinst5Length + .25;
            }
        }

    }
    if (firstinst5sounded) {
        if (inst5OnOne) {
            inst5SequenceArray.push([inst5instrument, thisinst5Length + 0 + inst5sToAddToEnd, 0]);
        } else {
            inst5SequenceArray.push([inst5instrument, thisinst5Length + 0, 0]);
            inst5SequenceArray.unshift(["rest", inst5sToAddToEnd + 0, 0]);
        }
    }
    // console.warn(inst5SequenceArray.toString());
} // inst copy


function setupStepInst6Sequence() { // inst copy  start
    inst6SequenceArray = [];
    inst6Started = true;
    var firstinst6sounded = false;
    var inst6sToAddToEnd = 0;
    var thisinst6Length = 0.25;
    var inst6OnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (inst6StepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                inst6OnOne = true;
            }
            if (!firstinst6sounded) {
                firstinst6sounded = true;
            } else {
                inst6SequenceArray.push([inst6instrument, thisinst6Length + 0, 0]);
                var thisinst6Length = .25;
            }
        } else if (inst6StepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstinst6sounded) {
                inst6sToAddToEnd = inst6sToAddToEnd + .25;
            } else {
                var thisinst6Length = thisinst6Length + .25;
            }
        }

    }
    if (firstinst6sounded) {
        if (inst6OnOne) {
            inst6SequenceArray.push([inst6instrument, thisinst6Length + 0 + inst6sToAddToEnd, 0]);
        } else {
            inst6SequenceArray.push([inst6instrument, thisinst6Length + 0, 0]);
            inst6SequenceArray.unshift(["rest", inst6sToAddToEnd + 0, 0]);
        }
    }
    // console.warn(inst6SequenceArray.toString());
} // inst copy


function setupStepInst7Sequence() { // inst copy  start
    inst7SequenceArray = [];
    inst7Started = true;
    var firstinst7sounded = false;
    var inst7sToAddToEnd = 0;
    var thisinst7Length = 0.25;
    var inst7OnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (inst7StepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                inst7OnOne = true;
            }
            if (!firstinst7sounded) {
                firstinst7sounded = true;
            } else {
                inst7SequenceArray.push([inst7instrument, thisinst7Length + 0, 0]);
                var thisinst7Length = .25;
            }
        } else if (inst7StepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstinst7sounded) {
                inst7sToAddToEnd = inst7sToAddToEnd + .25;
            } else {
                var thisinst7Length = thisinst7Length + .25;
            }
        }

    }
    if (firstinst7sounded) {
        if (inst7OnOne) {
            inst7SequenceArray.push([inst7instrument, thisinst7Length + 0 + inst7sToAddToEnd, 0]);
        } else {
            inst7SequenceArray.push([inst7instrument, thisinst7Length + 0, 0]);
            inst7SequenceArray.unshift(["rest", inst7sToAddToEnd + 0, 0]);
        }
    }
    // console.warn(inst7SequenceArray.toString());
} // inst copy

function setupStepHatSequence() {
    hatSequenceArray = [];
    hatStarted = true;
    var firsthatsounded = false;
    var hatsToAddToEnd = 0;
    var thishatLength = 0.25;
    var hatOnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (hatStepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                hatOnOne = true;
            }
            if (!firsthatsounded) {
                firsthatsounded = true;
            } else {
                hatSequenceArray.push([hatinstrument, thishatLength + 0, 0]);
                var thishatLength = .25;
            }
        } else if (hatStepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firsthatsounded) {
                hatsToAddToEnd = hatsToAddToEnd + .25;
            } else {
                var thishatLength = thishatLength + .25;
            }
        }

    }
    if (firsthatsounded) {
        if (hatOnOne) {
            hatSequenceArray.push([hatinstrument, thishatLength + 0 + hatsToAddToEnd, 0]);
        } else {
            hatSequenceArray.push([hatinstrument, thishatLength + 0, 0]);
            hatSequenceArray.unshift(["rest", hatsToAddToEnd + 0, 0]);
        }
    }
}

function setupStepSnareSequence() {
    snareSequenceArray = [];
    snareStarted = true;
    var firstsnaresounded = false;
    var snaresToAddToEnd = 0;
    var thissnareLength = 0.25;
    var snareOnOne = false;
    for (var stepnum = 0; stepnum < 16; stepnum++) {

        if (snareStepArray[stepnum].classList.contains("selectedstep")) {
            if (stepnum == 0) {
                snareOnOne = true;
            }
            if (!firstsnaresounded) {
                firstsnaresounded = true;
            } else {
                snareSequenceArray.push([snareinstrument, thissnareLength + 0, 0]);
                var thissnareLength = .25;
            }
        } else if (snareStepArray[stepnum].classList.contains("unselectedstep")) {
            if (!firstsnaresounded) {
                snaresToAddToEnd = snaresToAddToEnd + .25;
            } else {
                var thissnareLength = thissnareLength + .25;
            }
        }

    }
    if (firstsnaresounded) {
        if (snareOnOne) {
            snareSequenceArray.push([snareinstrument, thissnareLength + 0 + snaresToAddToEnd, 0]);
        } else {
            snareSequenceArray.push([snareinstrument, thissnareLength + 0, 0]);
            snareSequenceArray.unshift(["rest", snaresToAddToEnd + 0, 0]);
        }
    }
}
function setupRhythmSequence() {

    rhythmStarted = true;
    var genre = "";
    if (!genrePullDown) { //if we don't have the genre pulldown yet, which we don't, we're going to have it select the rhythm by the current tempo.
        if (currentBPM < 80) {
            genre = "rnb";
        } else if (currentBPM < 110) {
            genre = "hiphop";
        } else if (currentBPM < 140) {
            genre = "rock";
        } else if (currentBPM < 170) {
            genre = "trap";
        } else if (currentBPM < 201) {
            genre = "metal";
        }
    }
    switch (genre) {
    case "rnb":
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["hat", .5, 0]);
        rhythmSequenceArray.push(["snare", .5, 0]);
        rhythmSequenceArray.push(["hat", .25, 0]);
        rhythmSequenceArray.push(["kick", .25, 0]);
        break;
    case "rock": //not programmed yet
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["hat", .5, 0]);
        rhythmSequenceArray.push(["snare", .5, 0]);
        rhythmSequenceArray.push(["hat", .5, 0]);
        break;
    case "trap": //not programmed yet
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["hat", .5, 0]);
        rhythmSequenceArray.push(["hat", .333, 0]);
        rhythmSequenceArray.push(["hat", .333, 0]);
        rhythmSequenceArray.push(["hat", .334, 0]);
        rhythmSequenceArray.push(["snare", .5, 0]);
        rhythmSequenceArray.push(["hat", .5, 0]);
        rhythmSequenceArray.push(["hat", .5, 0]);
        rhythmSequenceArray.push(["hat", .5, 0]);
        break;
    case "metal": // not programmed yet
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["snare", .5, 0]);
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["snare", .5, 0]);
        rhythmSequenceArray.push(["kick", .5, 0]);

        break;
    case "hiphop":
        rhythmSequenceArray.push(["kick", 1, 0]);
        rhythmSequenceArray.push(["snare", 1, 0]);
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["kick", .5, 0]);
        rhythmSequenceArray.push(["snare", 1, 0]);
        break;
    }

}

function repeatOnFrame() {
    updateTimer();
    if (beginning == true) {
        playMajorScale(noteAdapter + scaleAdapter);

    }
    if ((noteTimeBeats > currentNoteBeats) && (sequencePlay) && (!nonReferencePlay)) {
        sequenceStarted = false; //proceed to the next note.
        // synth.triggerRelease();
        // stopAllNotes();
    }
    // console.log(sequenceStarted + " " + sequenceArray.length + " " + paused + " " + nonReferencePlay);
    if ((!sequenceStarted) && (sequenceArray.length > 0) && (!paused) && (!nonReferencePlay)) {
        if (sequenceArray.length == (sequenceLength)) { // this is the beginning of the sequence every time.
            score = 0;
            scoreTimeBeats = 0;
            currentScore = 0;
            previousScorePauseTimeAmount = 0;
            scorePauseTimeAmount = 0;
            // alert ("hi");
            // scorePauseTimeAmount=0;
            newScore = true;
            newWrong = false;
            wrongNote = false;
            wrongPoints = 0;
            // numOfThisNoteInSequence=0;
            // startScoreTimer();
            pauseScore();
        }
        // console.log(sequenceCopy.toString());
        // console.log(sequenceArray.toString());
        if (firstNotationToCome) {
            // alert(sequenceArray[0][0]+" "+sequenceArray[0][1]);
            if (!rhythmSense) {
                makeAndShowANote(sequenceArray[0][0], sequenceArray[0][1], "referenceNote");
            }
            numOfThisNoteInSequence++;
            // alert("checkpointTwo");
            firstNotationToCome = false;
            setupAFirstNote = true;
        }
        let currentNoteInfo = sequenceArray.shift();

        if (sequenceArray.length > 0) {

            makeAndShowANote(sequenceArray[0][0], sequenceArray[0][1], "referenceNote");
            numOfThisNoteInSequence++;
        } else {
            numOfThisNoteInSequence = 0;
            makeAndShowANote(sequenceCopy[0][0], sequenceCopy[0][1], "referenceNote");
            numOfThisNoteInSequence++;
        }
        // let currentRandomScaleNum=
        // console.log(currentNoteInfo.toString());
        currentNoteBeats = currentNoteInfo[1] + 0;
        currentRandomNoteNum = currentNoteInfo[0] + 0;
        randomScaleNum = currentNoteInfo[2] + 0;
        // console.log(sequenceArray.to
        arpeggioSequenceArray = [];
        arpeggioAdded = false;
        rootSequenceArray = [];
        arpeggioSequenceCopy = [];
        rhythmSequenceArray = [];
        rhythmSequenceCopy = [];
        kickSequenceArray = [];
        // kickSequenceCopy = [];
        snareSequenceArray = [];
        // snareSequenceCopy = [];
        hatSequenceArray = [];
        // hatSequenceCopy = [];
        clapSequenceArray = []; //inst copy
        inst5SequenceArray = []; //inst copy
        inst6SequenceArray = []; //inst copy
        inst7SequenceArray = []; //inst copy
        // clapSequenceCopy = [];
        rootSequenceCopy = [];
        synth.triggerRelease();
        if (instrument != "synth") { //if it isn't the synth
            // stopAllNotes();
            try {
                for (var i = 0; i < audioArray.length; i++) {
                    // console.log(audioArray[i][1][1]);
                    try {
                        if (audioArray[i][1][1] == "humanVoice") {
                            // console.log(audioArray[i][1]);
                            audioArray[i][0].pause();
                        }
                    } catch (error) {}
                }
            } catch (error) {}
        }
        // stopAllNotes();
        chordIsDone = true;
        if (intervalRotationType == "randomIntervalsEachNote") {
            // alert ("hi");
            intervalDirection = sequenceIntervalArray[sequenceIntervalArray.length - sequenceArray.length - 1];
            // alertify("first "+intervalDirection);
        }
        // alertify("first "+intervalDirection);
        playANote(currentRandomNoteNum);
        if (sequencePlay) {
            randomNoteNum = currentRandomNoteNum + 0;
        }
        let localMovement = 0;
        if (intervalDirection == "up") {
            // alert("hi");
            majorCheck = true;
            localMovement = getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3) + 0;

            document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third above that:<p style='font-size: 20px;  color: red'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
            majorCheck = false;
        } else if (intervalDirection == "down") {
            majorCheck = true;
            localMovement = getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
            document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third below that:<p style='font-size: 20px;  color: red'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
            majorCheck = false;
        } else if (intervalDirection == "unison") {
            document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
        } else if (intervalDirection == "fourthUp") {
            if (toSolFej(keyOf, randomScaleNum) == "Fa") {
                newQuestionTime = true;
            }
            localMovement = 5;
            document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px; color: red'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
        } else if (intervalDirection == "fourthDown") {
            if (toSolFej(keyOf, randomScaleNum) == "Fa") {
                newQuestionTime = true;
            }
            localMovement = -5;
            document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
        }
        if (sequenceArray.length > 0) {
            makeAndShowANote(currentRandomNoteNum + localMovement + 0, sequenceArray[0][1], "targetNote");
            // numOfThisNoteInSequence++;
        } else {
            // numOfThisNoteInSequence=0;
            makeAndShowANote(currentRandomNoteNum + localMovement + 0, sequenceCopy[0][1], "targetNote");
            // numOfThisNoteInSequence++;
        }
        //beginningtakenfromharmonizebecauseyougotitrright
        lastReference = currentRandomNoteNum + 0;

        if (referenceInversion) {
            lastReferenceInversion = true;
        } else {
            lastReferenceInversion = false;
        }
        // while (newLastRandomScaleNum > 11) {
        newLastRandomScaleNum = newLastRandomScaleNum % 12;
        // }
        while (newLastRandomScaleNum < 0) {
            newLastRandomScaleNum = newLastRandomScaleNum + 12;
        }
        if (keyType == "major") {
            // console.log("new is " + newLastRandomScaleNum);
            lastRandomScaleNum = getScaleNumMajorNote(newLastRandomScaleNum);
        } else {
            // alert ("hi");
            // console.log("newMinor is " + newLastRandomScaleNum);
            lastRandomScaleNum = getScaleNumMinorNote(newLastRandomScaleNum);
        }

        referenceInversion = false;
        firstChordOver = true;
        //end of taken from harmonizebecauseyougotitright

        sequenceStarted = true;
        startNoteTimer();
        rootSequenceStarted = true;
        startRootTimer();
        arpeggioSequenceStarted = true;
        // console.log("sequence arpeggio!");
        startArpeggioTimer();
        startRhythmTimer();
        startKickTimer();
        startClapTimer(); // inst copy

        startInst5Timer();
        startInst6Timer();

        startInst7Timer();

        startHatTimer();
        startSnareTimer();
        if (sequenceArray.length == 0) {
            console.error('6115'); //7-15-2020
            sequenceArray = sequenceCopy.slice();

            // console.log("sup "+ sequenceArray.toString());

        }
    } else if (nonReferencePlay) {
        if ((chordTimeBeats >= currentChordBeats)) {
            // alert ("hi");
            chordSequenceStarted = false; //proceed to the next note.

        }
        // console.warn("is it started "+chordSequenceStarted);
        if ((!chordSequenceStarted) && (chordSequenceArray.length > 0) && (!paused)) { //TRANSPLANT BEGIN //Avi thinks he should definitely return here!!

            if (chordSequenceArray.length == (chordSequenceLength)) { // this is the beginning of the sequence every time.
                score = 0;
                scoreTimeBeats = 0;
                currentScore = 0;
                previousScorePauseTimeAmount = 0;
                scorePauseTimeAmount = 0;

                // numOfThisNoteInSequence=0;
                // scorePauseTimeAmount=0;
                newScore = true;
                newWrong = false;
                wrongNote = false;
                wrongPoints = 0;
                // startScoreTimer();
                pauseScore();

                console.error('6144'); //7-15-2020

                sequenceArray = sequenceCopy.slice();
                // numOfThisNoteInSequence=0;
                console.error("copy is " + sequenceCopy.length + " length of sequence is " + sequenceArray.length + " num of notes is " + numOfThisNoteInSequence);

                console.error(sequenceArray.toString());
                // console.log(sequenceArray.toString());
                synth.triggerRelease();
                sequenceStarted = true;
                startNoteTimer();
                // alert ("starting again "+chordSequenceLength);
            }
            // else if(chordSequenceArray.length == (chordSequenceLength)){

            // // alert (chordSequenceArray.length+" "+chordSequenceLength);


            // }

            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());
            // alert(chordSequenceArray.toString());
            let currentNoteInfo = chordSequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentChordBeats = currentNoteInfo[1] + 0;
            // alert (chordTimeBeats);
            currentRandomChordNum = currentNoteInfo[0] + 0;
            randomChordScaleNum = currentNoteInfo[2] + 0;
            arpeggioSequenceArray = [];
            arpeggioAdded = false;
            rootSequenceArray = [];
            arpeggioSequenceCopy = [];
            rhythmSequenceArray = [];
            rhythmSequenceCopy = [];
            clapSequenceArray = []; //inst copy
            clapSequenceCopy = []; //inst copy
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
            rootSequenceCopy = [];

            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "pianoAccompaniment";
            chordIsDone = true;
            randomNoteNum = currentRandomChordNum + 0;
            randomScaleNum = randomChordScaleNum + 0;
            // alert (randomNoteNum);
            playANote(currentRandomChordNum);
            // console.warn("chord " + numToKeyNamePullDown(basicNote(currentRandomChordNum)));
            //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;

            //beginningtakenfromharmonizebecauseyougotitrright
            lastReference = currentRandomChordNum + 0;

            if (referenceInversion) {
                lastReferenceInversion = true;
            } else {
                lastReferenceInversion = false;
            }
            // while (newLastRandomScaleNum > 11) {
            newLastRandomScaleNum = newLastRandomScaleNum % 12;
            // }
            while (newLastRandomScaleNum < 0) {
                newLastRandomScaleNum = newLastRandomScaleNum + 12;
            }
            if (keyType == "major") {
                // console.log("new is " + newLastRandomScaleNum);
                lastRandomScaleNum = getScaleNumMajorNote(newLastRandomScaleNum);
            } else {
                // alert ("hi");
                // console.log("newMinor is " + newLastRandomScaleNum);
                lastRandomScaleNum = getScaleNumMinorNote(newLastRandomScaleNum);
            }
            referenceInversion = false;
            firstChordOver = true;
            // alert (randomNoteNum);
            //end of taken from harmonizebecauseyougotitright


            chordSequenceStarted = true;
            startChordTimer();
            rootSequenceStarted = true;
            startRootTimer();
            arpeggioSequenceStarted = true;
            // console.log("sequence arpeggio!");
            startArpeggioTimer();
            startRhythmTimer();
            startKickTimer();
            startClapTimer();
            startHatTimer();
            startSnareTimer();
            if (chordSequenceArray.length == 0) {

                chordSequenceArray = chordSequenceCopy.slice();
                // alert (chordSequenceArray.length);
                // console.log("sup "+ sequenceArray.toString());

            }
        }

    }
    if (nonReferencePlay) { //TRANSPLANT BEGIN

        if ((noteTimeBeats >= currentNoteBeats)) {
            // alert (sequenceArray.length);
            sequenceStarted = false; //proceed to the next note.

        }

        if ((!sequenceStarted) && (sequenceArray.length > 0)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());
            if (firstNotationToCome) {
                makeAndShowANote(sequenceArray[0][0], sequenceArray[0][1], "referenceNote");
                numOfThisNoteInSequence++;
                firstNotationToCome = false;
                setupAFirstNote = true;
            }
            let currentNoteInfo = sequenceArray.shift();

            if (sequenceArray.length > 0) {
                console.error("length of sequence is " + sequenceArray.length + " num of notes is " + numOfThisNoteInSequence + " length of chords is " + chordSequenceArray.length);
                makeAndShowANote(sequenceArray[0][0], sequenceArray[0][1], "referenceNote");
                numOfThisNoteInSequence++;
            } else {
                console.error("restarted numnotes");
                numOfThisNoteInSequence = 0;
                makeAndShowANote(sequenceCopy[0][0], sequenceCopy[0][1], "referenceNote");
                numOfThisNoteInSequence++;
            }

            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentNoteBeats = currentNoteBeats + currentNoteInfo[1] + 0;
            currentRandomNoteNum = currentNoteInfo[0] + 0;
            let randomNoteScaleNum = currentNoteInfo[2] + 0;

            // console.log ("instrument is "+instrument);
            // let currentInstrument = instrument + "";
            // instrument = "synth"; //error spot 2
            // alert (currentRandomRhythmNum);
            if (instrument != "synth") { //if it isn't the synth
                // stopAllNotes();
                try {
                    for (var i = 0; i < audioArray.length; i++) {
                        // console.log(audioArray[i][1][1]);
                        try {
                            if (audioArray[i][1][1] == "humanVoice") {
                                // console.log(audioArray[i][1]);
                                audioArray[i][0].pause();
                            }
                        } catch (error) {}
                    }
                } catch (error) {}
            }
            if (intervalRotationType == "randomIntervalsEachNote") {
                // alert ("hi");

                intervalDirection = sequenceIntervalArray[sequenceIntervalArray.length - sequenceArray.length - 1];
                // alertify("second "+intervalDirection);
            }
            playANote(currentRandomNoteNum); //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            // console.warn("synth "+ numToKeyName(basicNote(currentRandomNoteNum)));

            // instrument = currentInstrument;
            if (sequencePlay) {
                randomNoteNum = currentRandomNoteNum + 0;
                randomScaleNum = randomNoteScaleNum + 0;
                // console.log("the note is " + randomScaleNum);
            }
            if (noteArray[randomNoteNum][1] != "rest0") {
                // if (intervalDirection == "up") {
                // // alert(noteArray[randomNoteNum][1]);
                // majorCheck = true;
                // getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);

                // // console.log("the note is " + randomScaleNum);
                // document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                // majorCheck = false;
                // } else if (intervalDirection == "down") {
                // majorCheck = true;
                // getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
                // document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                // majorCheck = false;
                // } else if (intervalDirection == "unison") {
                // document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
                // } else if (intervalDirection == "fourthUp") {
                // if (toSolFej(keyOf, randomScaleNum) == "Fa") {
                // newQuestionTime = true;
                // }
                // document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                // } else if (intervalDirection == "fourthDown") {
                // if (toSolFej(keyOf, randomScaleNum) == "Fa") {
                // newQuestionTime = true;
                // }
                // document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                // }
                let localMovement = 0;
                if (intervalDirection == "up") {
                    // alert("hi");
                    majorCheck = true;
                    localMovement = getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3) + 0;

                    document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third above that:<p style='font-size: 20px;  color: red'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                    majorCheck = false;
                } else if (intervalDirection == "down") {
                    majorCheck = true;
                    localMovement = getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
                    document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third below that:<p style='font-size: 20px;  color: red'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                    majorCheck = false;
                } else if (intervalDirection == "unison") {
                    document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
                } else if (intervalDirection == "fourthUp") {
                    if (toSolFej(keyOf, randomScaleNum) == "Fa") {
                        newQuestionTime = true;
                    }
                    localMovement = 5;
                    document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px; color: red'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                } else if (intervalDirection == "fourthDown") {
                    if (toSolFej(keyOf, randomScaleNum) == "Fa") {
                        newQuestionTime = true;
                    }
                    localMovement = -5;
                    document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                }
                if (sequenceArray.length > 0) {
                    makeAndShowANote(currentRandomNoteNum + localMovement + 0, sequenceArray[0][1], "targetNote");
                    // numOfThisNoteInSequence++;
                } else {
                    // numOfThisNoteInSequence=0;
                    makeAndShowANote(currentRandomNoteNum + localMovement + 0, sequenceCopy[0][1], "targetNote");
                    // numOfThisNoteInSequence++;
                }
            }

            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            sequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((sequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    // sequenceArray = sequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }

        }

    }

    if (rhythmPlay) { //TRANSPLANT BEGIN

        if ((rhythmTimeBeats >= currentRhythmBeats) && (rhythmPlay)) {

            rhythmSequenceStarted = false; //proceed to the next note.

        }

        if ((!rhythmSequenceStarted) && (rhythmSequenceArray.length > 0) && (rhythmStarted)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());

            let currentNoteInfo = rhythmSequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentRhythmBeats = currentRhythmBeats + currentNoteInfo[1] + 0;
            currentRandomRhythmNum = currentNoteInfo[0] + 0;
            randomRhythmScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "rhythmInstruments"; //error spot 2
            // alert (currentRandomRhythmNum);
            if (currentRandomRhythmNum != "rest0") {
                playANote(currentRandomRhythmNum);
            } //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            rhythmSequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((rhythmSequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    rhythmSequenceArray = rhythmSequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        }
        // console.warn(kickTimeBeats+" "+currentkickBeats);
        if (kickTimeBeats >= .5) {
            document.getElementById('kickstepone').classList.remove("lititup");
            document.getElementById('snarestepone').classList.remove("lititup");
            document.getElementById('clapstepone').classList.remove("lititup"); //inst copy
            document.getElementById('inst5stepone').classList.remove("lititup"); //inst copy
            document.getElementById('inst6stepone').classList.remove("lititup"); //inst copy
            document.getElementById('inst7stepone').classList.remove("lititup"); //inst copy
            document.getElementById('hatstepone').classList.remove("lititup");
            // console.warn(kickTimeBeats+" "+currentkickBeats);
            // document.getElementById('kickstepone').classList.add('lititup');
            // document.getElementById('kickstepone').classList.add('unselectedstep');
            // document.getElementById('kickstepone').classList.add('selectedstep');
        } else {
            document.getElementById('kickstepone').classList.add("lititup");
            document.getElementById('snarestepone').classList.add("lititup");
            document.getElementById('clapstepone').classList.add("lititup"); //inst copy
            document.getElementById('inst5stepone').classList.add("lititup"); //inst copy
            document.getElementById('inst6stepone').classList.add("lititup"); //inst copy
            document.getElementById('inst7stepone').classList.add("lititup"); //inst copy
            document.getElementById('hatstepone').classList.add("lititup");
            // console.warn(kickTimeBeats+" "+currentkickBeats);
            // document.getElementById('kickstepone').classList.add('lititup');
            // document.getElementById('kickstepone').classList.remove('unselectedstep');
            // document.getElementById('kickstepone').classList.remove('selectedstep');
        }
        if ((kickTimeBeats >= currentkickBeats) && (rhythmPlay)) {

            kickSequenceStarted = false; //proceed to the next note.

        }

        if ((!kickSequenceStarted) && (kickSequenceArray.length > 0) && (kickStarted)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());

            let currentNoteInfo = kickSequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentkickBeats = currentkickBeats + currentNoteInfo[1] + 0;
            currentRandomkickNum = currentNoteInfo[0] + 0;
            randomkickScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "rhythmInstruments"; //error spot 2
            // alert (currentRandomkickNum);
            if (currentRandomkickNum != "rest0") {
                playANote(currentRandomkickNum);
            } //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            kickSequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((kickSequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    kickSequenceArray = kickSequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        }
        if ((clapTimeBeats >= currentclapBeats) && (rhythmPlay)) { //inst copy start

            clapSequenceStarted = false; //proceed to the next note. //inst copy

        } //inst copy
        if ((!clapSequenceStarted) && (clapSequenceArray.length > 0) && (clapStarted)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());

            let currentNoteInfo = clapSequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentclapBeats = currentclapBeats + currentNoteInfo[1] + 0;
            currentRandomclapNum = currentNoteInfo[0] + 0;
            randomclapScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "rhythmInstruments"; //error spot 2
            // console.warn(currentRandomclapNum);
            if (currentRandomclapNum != "rest0") {
                playANote(currentRandomclapNum);
            }; //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            clapSequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((clapSequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    clapSequenceArray = clapSequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        } //inst copy end


        if ((inst5TimeBeats >= currentinst5Beats) && (rhythmPlay)) { //inst copy start

            inst5SequenceStarted = false; //proceed to the next note. //inst copy

        } //inst copy
        if ((!inst5SequenceStarted) && (inst5SequenceArray.length > 0) && (inst5Started)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());

            let currentNoteInfo = inst5SequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentinst5Beats = currentinst5Beats + currentNoteInfo[1] + 0;
            currentRandominst5Num = currentNoteInfo[0] + 0;
            randominst5ScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "rhythmInstruments"; //error spot 2
            // console.warn(currentRandominst5Num);
            if (currentRandominst5Num != "rest0") {
                playANote(currentRandominst5Num);
            }; //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            inst5SequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((inst5SequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    inst5SequenceArray = inst5SequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        } //inst copy end


        if ((inst6TimeBeats >= currentinst6Beats) && (rhythmPlay)) { //inst copy start
            // console.warn("inst6");
            // console.warn(currentinst6Beats+" "+inst6TimeBeats);
            // console.warn(inst6SequenceArray.length);
            inst6SequenceStarted = false; //proceed to the next note. //inst copy

        } //inst copy
        if ((!inst6SequenceStarted) && (inst6SequenceArray.length > 0) && (inst6Started)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());
            console.warn(inst6SequenceArray.length);
            let currentNoteInfo = inst6SequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentinst6Beats = currentinst6Beats + currentNoteInfo[1] + 0;
            currentRandominst6Num = currentNoteInfo[0] + 0;
            randominst6ScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "rhythmInstruments"; //error spot 2
            // console.warn(currentRandominst6Num);
            if (currentRandominst6Num != "rest0") {
                playANote(currentRandominst6Num);
            }; //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            inst6SequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((inst6SequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    inst6SequenceArray = inst6SequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        } //inst copy end


        if ((inst7TimeBeats >= currentinst7Beats) && (rhythmPlay)) { //inst copy start

            inst7SequenceStarted = false; //proceed to the next note. //inst copy

        } //inst copy
        if ((!inst7SequenceStarted) && (inst7SequenceArray.length > 0) && (inst7Started)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());

            let currentNoteInfo = inst7SequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentinst7Beats = currentinst7Beats + currentNoteInfo[1] + 0;
            currentRandominst7Num = currentNoteInfo[0] + 0;
            randominst7ScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "rhythmInstruments"; //error spot 2
            // console.warn(currentRandominst7Num);
            if (currentRandominst7Num != "rest0") {
                playANote(currentRandominst7Num);
            }; //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            inst7SequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((inst7SequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    inst7SequenceArray = inst7SequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        } //inst copy end

        if ((hatTimeBeats >= currenthatBeats) && (rhythmPlay)) {

            hatSequenceStarted = false; //proceed to the next note.

        }
        if ((!hatSequenceStarted) && (hatSequenceArray.length > 0) && (hatStarted)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());

            let currentNoteInfo = hatSequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currenthatBeats = currenthatBeats + currentNoteInfo[1] + 0;
            currentRandomhatNum = currentNoteInfo[0] + 0;
            randomhatScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "rhythmInstruments"; //error spot 2
            // alert (currentRandomhatNum);
            if (currentRandomhatNum != "rest0") {
                // alert (currentRandomhatNum);
                playANote(currentRandomhatNum);
            } else {
                // alert ("did it");
            }
            //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            hatSequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((hatSequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    hatSequenceArray = hatSequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        }
        if ((snareTimeBeats >= currentsnareBeats) && (rhythmPlay)) {

            snareSequenceStarted = false; //proceed to the next note.

        }
        if ((!snareSequenceStarted) && (snareSequenceArray.length > 0) && (snareStarted)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());

            let currentNoteInfo = snareSequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentsnareBeats = currentsnareBeats + currentNoteInfo[1] + 0;
            currentRandomsnareNum = currentNoteInfo[0] + 0;
            randomsnareScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            instrument = "rhythmInstruments"; //error spot 2
            // alert (currentRandomsnareNum);
            if (currentRandomsnareNum != "rest0") {
                playANote(currentRandomsnareNum);
            }; //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            snareSequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((snareSequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (accompaniment) && (!paused)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    snareSequenceArray = snareSequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        }

    }

    if (arpeggioPlay) { //TRANSPLANT BEGIN
        // console.log (arpeggioSequenceArray.length);
        // console.log(arpeggioSequenceArray.length)
        if ((arpeggioTimeBeats >= currentArpeggioBeats) && (arpeggioPlay)) {

            // console.log("arpeggio "+arpeggioTimeBeats + " currentArpeggioBeats "+currentArpeggioBeats);

            arpeggioSequenceStarted = false; //proceed to the next note.
            // console.log (currentArpeggioBeats+" trigger false");
            // synth.triggerRelease();
            // stopArpeggioNotes();
        }
        if ((rootTimeBeats >= (currentRootBeats)) && (arpeggioPlay)) {

            // console.log("root "+rootTimeBeats + " currentRootBeats "+currentRootBeats);

            rootSequenceStarted = false; //proceed to the next note.
            // synth.triggerRelease();
            // stopRootNotes();
        }
        if ((!rootSequenceStarted) && (rootSequenceArray.length > 0)) {
            // // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());
            let currentNoteInfo = rootSequenceArray.shift();
            currentRootBeats = currentRootBeats + currentNoteInfo[1] + 0;
            currentRandomRootNum = currentNoteInfo[0] + 0;
            randomRootScaleNum = currentNoteInfo[2] + 0;
            // console.log("instrument is " + instrument);
            // console.log(rootSequenceCopy.toString());
            let currentInstrument = instrument + "";
            if (currentInstrument == "piano") {
                instrument = "humanVoice";
            } else {
                instrument = "pianoAccompaniment"; //"synth2"; //
            }
            // console.log("playing");
            if (rootPlay) {
                playANote(currentRandomRootNum);
            } //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            rootSequenceStarted = true;
            // startRootTimer();
            if ((rootSequenceArray.length == 0)) {
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (!paused) && (!captureSinging) && (!captureButtons) && (accompaniment)) {

                    rootSequenceArray = rootSequenceCopy.slice();
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        }

        if ((!arpeggioSequenceStarted) && (arpeggioSequenceArray.length > 0)) {
            // console.log(arpeggioSequenceArray.length+" "+arpeggioSequenceArray.toString());

            let currentNoteInfo = arpeggioSequenceArray.shift();
            // console.log(currentNoteInfo.toString()+" "+arpeggioSequenceStarted);
            currentArpeggioBeats = currentArpeggioBeats + currentNoteInfo[1] + 0;
            currentRandomArpeggioNum = currentNoteInfo[0] + 0;
            randomArpeggioScaleNum = currentNoteInfo[2] + 0;
            // console.log ("instrument is "+instrument);
            let currentInstrument = instrument + "";
            if (currentInstrument == "piano") {
                instrument = "humanVoice";
            } else {
                instrument = "pianoAccompaniment";
            }
            playANote(currentRandomArpeggioNum); //Thoughts: I may need to put all of this into a new method specifically for arpeggiation.
            instrument = currentInstrument;
            // if (sequencePlay) {
            // randomNoteNum = currentRandomNoteNum + 0;
            // }
            arpeggioSequenceStarted = true;
            // console.log("arpeggio");
            // startArpeggioTimer();

            if ((arpeggioSequenceArray.length == 0)) {
                // console.log(synthTimePassed);
                // alert ("hi");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.
                if (((sequencePlay) || ((synthTimePassed) > -9000)) && (!paused) && (!captureSinging) && (!captureButtons) && (accompaniment)) {
                    // alert ("hiya");// THIS SPOT IS WHERE WE LOOP AT THE END OF EACH NOTE IN AN ARPEGGIO.

                    // rootSequenceArray = rootSequenceCopy.slice();
                    arpeggioSequenceArray = arpeggioSequenceCopy.slice();
                    // rootSequenceStarted = false;
                }
                // console.log("sup "+ sequenceArray.toString());

            }
        }

        if (arpeggioPlayBackup) { //this section created the expectations as well as chose the root note, I'm not sure if we need it at all.
            arpeggioSequenceArray = [];
            // beatsExpected =  - .9;
            var arpeggioSequenceFirst = true;
            // for (var i = 0; sequenceLength > i; i++) {
            // if (i == 0) {
            // randomScaleNum = Math.floor(Math.random() * 7);
            // console.log(i + " sequencefirst");
            // } else {
            // console.log(i + " notfirst " + randomScaleNum);
            // let intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
            // if (intervalChange == 0) {
            // while (intervalChange == 0) {

            // intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
            // }
            // }
            // randomScaleNum = randomScaleNum + intervalChange;
            // if (randomScaleNum > 6) {
            // shiftAdapter = 12;
            // } else if (randomScaleNum < 0) {
            // shiftAdapter = -12;
            // } else {
            // shiftAdapter = 0;
            // }
            // console.log(randomScaleNum + " is the scale change");
            // }
            // if (keyType == "major") {
            // randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
            // shiftAdapter = 0;
            // } else {
            // // alert ("hi");
            // randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
            // shiftAdapter = 0;
            // }
            // console.log(i+" "+randomNoteNum);
            // let thisNoteTime = Math.floor(Math.random() * (noteLengthMax - noteLengthMin) + 1) + noteLengthMin; //length of random notes
            // IMPORTANT LINE: arpeggioSequenceArray.push([randomNoteNum + 0, thisNoteTime + 0, randomScaleNum + 0]);
            // beatsExpected = beatsExpected + thisNoteTime;
            // console.log("beats" + thisNoteTime);
            // console.log(beatsExpected + " is beats amount");

        }
        // arpeggioSequenceCopy = [];
        // arpeggioSequenceCopy = arpeggioSequenceArray.slice();
        // arpeggioSequenceCopy.unshift([arpeggioSequenceCopy[0][0], 1, arpeggioSequenceCopy[0][2]]);

    }

    if (newQuestionTime == true) {
        noMorePoints = false;
        numOfThisNoteInSequence = 0;
        // alert ("a new questions!");
        chordSequenceStarted = false;
        if (!nonReferencePlay) {
            sequenceStarted = false;
        }
        clearAllNotes();
        currentScore = 0;
        score = 0;
        wrongPoints = 0;
        wrongNote = false;
        newWrong = false;
        newScore = true;
        // startScoreTimer();
        // pauseScore();
        firstNotationToCome = true;
        newQuestionTime = false;

        stopAllNotes();
        if (arpeggioPlay) {
            arpeggioSequenceArray = [];
            arpeggioSequenceCopy = [];
            arpeggioAdded = false;
            rootSequenceArray = [];
            rootSequenceCopy = [];
        }
        if (rhythmPlay) {
            rhythmSequenceArray = [];
            rhythmSequenceCopy = [];
            kickSequenceArray = [];
            kickSequenceCopy = [];
            clapSequenceArray = []; //inst copy
            clapSequenceCopy = []; //inst copy
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
        }
        if (!sequencePlay) {
            if (accompaniment) {
                chordIsDone = true;
                if (arpeggioPlay) {
                    if (rootPlay) {
                        startRootTimer();
                        startArpeggioTimer();
                    } else {
                        startArpeggioTimer();
                    }
                }
                if (rhythmPlay) {
                    startRhythmTimer();
                    startKickTimer();
                    startClapTimer();
                    startHatTimer();
                    startSnareTimer();
                }
            }
            if ((scoreLevel == "freestyle") || (currentLevelScore == 0) || (notesChangeable)) {
                // alert (scoreLevel+" "+currentLevelScore);
                randomScaleNum = Math.floor(Math.random() * 7);
                // alert ("Now you'll be practicing a new note");
            }
            if (scoreLevel != "freestyle") {
                if (intervalRotationType == "scoreBased") {
                    setProgressGoals("3rd Up", "3rd Down", "4th Up", "4th Down");
                    if (currentLevelScore == 0) {
                        intervalDirection = "up";
                    } else if (currentLevelScore == 10) {
                        intervalDirection = "down";
                        alert("now practice doing a 3rd down of this note");
                    } else if (currentLevelScore == 20) {
                        intervalDirection = "fourthUp";
                        alert("now practice doing a 4th up of this note (Note: This is the same as a 5th down)");
                    } else if (currentLevelScore == 30) {
                        intervalDirection = "fourthDown";
                        alert("now practice doing a 5th up of this note (Note: This is the same as a 4th down)");
                    }
                } else if (intervalRotationType == "randomIntervals") {
                    intervalDirection = getRandomInterval();
                    if (scoreLevel == "levelThree") {
                        setProgressGoals("Random Intervals with Note #1", "Random Intervals with Note #2", "Random Intervals with Note #3", "Random Intervals with Note #4");
                        alertIntervalMessage(intervalDirection);
                    }

                }
                if (lengthRotationType == "scoreBased") {
                    // alert ("hi");
                    setProgressGoals("2 notes", "3 Notes", "4 Notes", "5 Notes");
                    if (currentLevelScore == 0) {
                        sequenceLength = 2;
                    } else if (currentLevelScore == 10) {
                        sequenceLength = 3;
                        // alert("now practice doing a 3rd down of this note");
                    } else if (currentLevelScore == 20) {
                        sequenceLength = 4;
                        // alert("now practice doing a 4th up of this note (Note: This is the same as a 5th down)");
                    } else if (currentLevelScore == 30) {
                        sequenceLength = 5;
                        // alert("now practice doing a 5th up of this note (Note: This is the same as a 4th down)");
                    }
                } else if (lengthRotationType == "scoreBasedByFour") {
                    setProgressGoals("4 Notes", "8 Notes", "12 Notes", "16 Notes");
                    if (currentLevelScore == 0) {
                        sequenceLength = 4;
                    } else if (currentLevelScore == 10) {
                        sequenceLength = 8;
                        // alert("now practice doing a 3rd down of this note");
                    } else if (currentLevelScore == 20) {
                        sequenceLength = 12;
                        // alert("now practice doing a 4th up of this note (Note: This is the same as a 5th down)");
                    } else if (currentLevelScore == 30) {
                        sequenceLength = 16;
                        // alert("now practice doing a 5th up of this note (Note: This is the same as a 4th down)");
                    }
                }
                updateProgress();
                if (currentLevelScore >= 40) {
                    alert("Congratulations! You have completed this level. Select a new level from the 'select level' menu");
                    addLevelCompleted(whoItIsUsingThis, theirEmail, scoreLevel);

                    if (ourLevelNumber < levelToNum(scoreLevel)) {
                        ourLevelNumber = levelToNum(scoreLevel);
                        updateTheLevel(ourLevelNumber);
                    }
                    setupTheLevel(levelToNum(scoreLevel) + 1);
                    // updateUnlockedLevelsByUser(whoItIsUsingThis);
                }

            }
            if (keyType == "major") {
                randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter;
            } else {

                randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter;

            }
        } else if (singingCaptured) {
            if (!buttonPlay) { //if we are playing with the voices not the buttons. // SINGINGMODEKEYFINDER Singing Mode Key Finder

                // console.log("the original singing array " + (singingTimeArray).toString());
                // console.log("the original singing array " + gimmeThatAgainAsNoteAndBeats(singingTimeArray).toString());
                referenceNoteArray = [];
                chordSequenceArray = [];
                chordSequenceCopy = [];
                nonReferencePlay = true;
                // console.log(singingTimeArray.toString());
                sequenceArray = JSON.parse(JSON.stringify(singingTimeArray));
                if (!buttonsCaptured) {
                    // sequenceArray.shift();
                }
                beatsExpected = 0.00;
                sequenceFirst = true;
                sequenceLength = sequenceArray.length;
                sequenceArray = JSON.parse(JSON.stringify(isolateAWorkingKey(sequenceArray))); // planning here.
                sequenceArray = JSON.parse(JSON.stringify(compoundShortTones(sequenceArray))); // planning here.
                sequenceArray = JSON.parse(JSON.stringify(compoundNeighborTones(sequenceArray))); // planning here.

                sequenceLength = sequenceArray.length;
                arrayOfSungNotesOnly = [];
                for (i = 0; i < sequenceArray.length; i++) {
                    arrayOfSungNotesOnly.push(basicNote(sequenceArray[i][0]));
                }

                findKey(arrayOfSungNotesOnly);
                let removeNotesArray = [];
                let shiftNotesArray = [];
                let temporarySequence = JSON.parse(JSON.stringify(compoundShortTones(sequenceArray)));
                console.warn("just before the final removals " + sequenceArray.toString());
                // BEGIN FIXED AREA 6 11 2020 FOR FIXING 0 NOTELENGTH OF NOTES
                for (var i = 0; sequenceLength > i; i++) {
                    let thisNoteTime = sequenceArray[i][1] + 0;
                    console.log("currently " + sequenceArray[i][1]);

                    thisNoteTime = thisNoteTime / (60 / currentBPM);
                    thisNoteTime = Math.round(thisNoteTime * 2) / 2;
                    console.warn(thisNoteTime);
                    console.log("currently " + sequenceArray[i][1]);
                    if ((thisNoteTime == 0) || (sequenceArray[i][0] < 0)) {
                        // console.warn("we removed " + i + " " + sequenceArray[i].toString()); //fixed this spot
                        // alert (i+0);
                        removeNotesArray.push(i + 0);
                    } else {
                        sequenceArray[i][1] = thisNoteTime;
                        randomNoteNum = sequenceArray[i][0];

                        if (keyType == "major") {
                            // console.log("new is " + newLastRandomScaleNum);
                            randomScaleNum = getScaleNumMajorNote(randomNoteNum);
                        } else {
                            // alert ("hi");
                            // console.log("newMinor is " + newLastRandomScaleNum);
                            randomScaleNum = getScaleNumMinorNote(randomNoteNum);
                        }
                        sequenceArray[i][2] = randomScaleNum + 0;
                        beatsExpected = beatsExpected + thisNoteTime;

                        // console.log(noteArray[sequenceArray[i][0]][1] + " for " + thisNoteTime);
                    }
                    // console.log("currently "+ sequenceArray[i][1]);
                }
                for (var i = 0; (removeNotesArray.length) > i; i++) { //fixed this spot
                    let index = removeNotesArray[removeNotesArray.length - i - 1]; //fixed this spot
                    console.warn(index + " is index is " + sequenceArray.toString()); //fixed this spot
                    sequenceArray.splice(index, 1); //fixed this spot
                    // console.warn(sequenceArray.toString());
                }
                sequenceLength = sequenceArray.length;
                console.warn("just after the final removals " + sequenceArray.toString());
                alert(sequenceArray.toString());

                // END FIXED AREA 6 11 2020 FOR FIXING 0 NOTELENGTH OF NOTES
                // alert(sequenceArray.toString());
                // randomNoteNum = sequenceArray[0][0];
                // if (keyType == "major") {
                // // console.log("new is " + newLastRandomScaleNum);
                // randomScaleNum = getScaleNumMajorNote(randomNoteNum);
                // } else {
                // // alert ("hi");
                // // console.log("newMinor is " + newLastRandomScaleNum);
                // randomScaleNum = getScaleNumMinorNote(randomNoteNum);
                // }

                // nonreference section begin

                // for (var i = 0; sequenceLength > i; i++) {
                // if (i == 0) {
                // randomScaleNum = Math.floor(Math.random() * 7);
                // // console.log(i + " sequencefirst");
                // } else {
                // // console.log(i + " notfirst " + randomScaleNum);
                // let intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                // if (intervalChange == 0) {
                // while (intervalChange == 0) {

                // intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                // }
                // }
                // randomScaleNum = randomScaleNum + intervalChange;
                // if (randomScaleNum > 6) {
                // shiftAdapter = 12;
                // } else if (randomScaleNum < 0) {
                // shiftAdapter = -12;
                // } else {
                // shiftAdapter = 0;
                // }
                // // console.log(randomScaleNum + " is the scale change");
                // }
                // if (keyType == "major") {
                // randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                // shiftAdapter = 0;
                // // alert (randomNoteNum);
                // } else {

                // randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                // shiftAdapter = 0;
                // }
                // // console.log(i+" "+randomNoteNum);
                // let thisNoteTime = Math.floor(Math.random() * (noteLengthMax - noteLengthMin + 1)) + noteLengthMin; //length of random notes
                // // alert (basicNote(randomNoteNum));
                // beatsExpected = beatsExpected + thisNoteTime;
                // console.log("beats" + thisNoteTime);
                // console.log(beatsExpected + " is beats amount");
                arrayOfSungNotesOnly = [];
                for (i = 0; i < sequenceArray.length; i++) {
                    arrayOfSungNotesOnly.push(basicNote(sequenceArray[i][0]));
                }
                findKey(arrayOfSungNotesOnly);
                for (var i = 0; (Math.floor((beatsExpected - 2) / 4) + 1) > i; i++) {
                    if (i == 0) {
                        randomScaleNum = Math.floor(Math.random() * 7);
                        // console.log(i + " sequencefirst");
                    } else {
                        // console.log(i + " notfirst " + randomScaleNum);
                        let intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                        if (intervalChange == 0) {
                            while (intervalChange == 0) {

                                intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                            }
                        }
                        randomScaleNum = randomScaleNum + intervalChange;
                        if (randomScaleNum > 6) {
                            shiftAdapter = 12;
                        } else if (randomScaleNum < 0) {
                            shiftAdapter = -12;
                        } else {
                            shiftAdapter = 0;
                        }
                        // console.log(randomScaleNum + " is the scale change");
                    }
                    if (keyType == "major") {
                        randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    } else {
                        // alert ("hi");
                        randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    }
                    // console.log(i+" "+randomNoteNum);
                    // let thisNoteTime = Math.floor(Math.random() * (noteLengthMax - noteLengthMin + 1)) + noteLengthMin; //length of random notes
                    // referenceNoteArray.push(basicNote(randmonNoteNum));
                    // alert ("that's one");
                    chordSequenceArray.push([randomNoteNum + 0, 4, randomScaleNum + 0]);

                    // beatsExpected = beatsExpected + thisNoteTime;
                    // console.log("beats" + thisNoteTime);
                    // console.log(beatsExpected + " is beats amount");

                }
                chordSequenceLength = chordSequenceArray.length + 0;
                chordSequenceCopy = [];
                chordSequenceCopy = chordSequenceArray.slice();
                // chordSequenceCopy.unshift([chordSequenceCopy[0][0], 4, chordSequenceCopy[0][2]]);

                sequenceCopy = [];
                sequenceCopy = sequenceArray.slice();

                //nonreference section end

            } else if (buttonPlay) {
                referenceNoteArray = [];
                chordSequenceArray = [];
                chordSequenceCopy = [];
                nonReferencePlay = true;
                sequenceArray = JSON.parse(JSON.stringify(singingTimeArray));
                if (!buttonsCaptured) {
                    sequenceArray.shift();
                }
                beatsExpected = 0.00;
                sequenceFirst = true;
                sequenceLength = sequenceArray.length;

                findKey(arrayOfSungNotesOnly);
                let removeNotesArray = [];
                // BEGIN FIXED AREA 6 11 2020 FOR FIXING 0 NOTELENGTH OF NOTES
                for (var i = 0; sequenceLength > i; i++) {
                    let thisNoteTime = sequenceArray[i][1];

                    thisNoteTime = thisNoteTime / (60 / currentBPM);
                    thisNoteTime = Math.round(thisNoteTime * 2) / 2;
                    console.warn(thisNoteTime);
                    if (thisNoteTime == 0) {
                        // console.warn("we removed " + i + " " + sequenceArray[i].toString()); //fixed this spot
                        // alert (i+0);
                        removeNotesArray.push(i + 0);
                    } else {
                        sequenceArray[i][1] = thisNoteTime;
                        randomNoteNum = sequenceArray[i][0];

                        if (keyType == "major") {
                            // console.log("new is " + newLastRandomScaleNum);
                            randomScaleNum = getScaleNumMajorNote(randomNoteNum);
                        } else {
                            // alert ("hi");
                            // console.log("newMinor is " + newLastRandomScaleNum);
                            randomScaleNum = getScaleNumMinorNote(randomNoteNum);
                        }
                        sequenceArray[i][2] = randomScaleNum + 0;
                        beatsExpected = beatsExpected + thisNoteTime;

                        // console.log(noteArray[sequenceArray[i][0]][1] + " for " + thisNoteTime);
                    }
                }
                for (var i = 0; (removeNotesArray.length) > i; i++) { //fixed this spot
                    let index = removeNotesArray[removeNotesArray.length - i - 1]; //fixed this spot
                    console.warn(index + " is index is " + sequenceArray.toString()); //fixed this spot
                    sequenceArray.splice(index, 1); //fixed this spot
                    // console.warn(sequenceArray.toString());
                }

                // END FIXED AREA 6 11 2020 FOR FIXING 0 NOTELENGTH OF NOTES
                // alert(sequenceArray.toString());
                // randomNoteNum = sequenceArray[0][0];
                // if (keyType == "major") {
                // // console.log("new is " + newLastRandomScaleNum);
                // randomScaleNum = getScaleNumMajorNote(randomNoteNum);
                // } else {
                // // alert ("hi");
                // // console.log("newMinor is " + newLastRandomScaleNum);
                // randomScaleNum = getScaleNumMinorNote(randomNoteNum);
                // }

                // nonreference section begin

                // for (var i = 0; sequenceLength > i; i++) {
                // if (i == 0) {
                // randomScaleNum = Math.floor(Math.random() * 7);
                // // console.log(i + " sequencefirst");
                // } else {
                // // console.log(i + " notfirst " + randomScaleNum);
                // let intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                // if (intervalChange == 0) {
                // while (intervalChange == 0) {

                // intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                // }
                // }
                // randomScaleNum = randomScaleNum + intervalChange;
                // if (randomScaleNum > 6) {
                // shiftAdapter = 12;
                // } else if (randomScaleNum < 0) {
                // shiftAdapter = -12;
                // } else {
                // shiftAdapter = 0;
                // }
                // // console.log(randomScaleNum + " is the scale change");
                // }
                // if (keyType == "major") {
                // randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                // shiftAdapter = 0;
                // // alert (randomNoteNum);
                // } else {

                // randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                // shiftAdapter = 0;
                // }
                // // console.log(i+" "+randomNoteNum);
                // let thisNoteTime = Math.floor(Math.random() * (noteLengthMax - noteLengthMin + 1)) + noteLengthMin; //length of random notes
                // // alert (basicNote(randomNoteNum));
                // beatsExpected = beatsExpected + thisNoteTime;
                // console.log("beats" + thisNoteTime);
                // console.log(beatsExpected + " is beats amount");

                findKey(arrayOfSungNotesOnly);
                // alert (beatsExpected); 7-19-20
                // alert (Math.floor((beatsExpected - 2) / 4) + 1);
                for (var i = 0; (Math.ceil((beatsExpected - 2) / 4) + 1) > i; i++) {
                    if (i == 0) {
                        randomScaleNum = Math.floor(Math.random() * 7);
                        // console.log(i + " sequencefirst");
                    } else {
                        // console.log(i + " notfirst " + randomScaleNum);
                        let intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                        if (intervalChange == 0) {
                            while (intervalChange == 0) {

                                intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                            }
                        }
                        randomScaleNum = randomScaleNum + intervalChange;
                        if (randomScaleNum > 6) {
                            shiftAdapter = 12;
                        } else if (randomScaleNum < 0) {
                            shiftAdapter = -12;
                        } else {
                            shiftAdapter = 0;
                        }
                        // console.log(randomScaleNum + " is the scale change");
                    }
                    if (keyType == "major") {
                        randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    } else {
                        // alert ("hi");
                        randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    }
                    // console.log(i+" "+randomNoteNum);
                    // let thisNoteTime = Math.floor(Math.random() * (noteLengthMax - noteLengthMin + 1)) + noteLengthMin; //length of random notes
                    // referenceNoteArray.push(basicNote(randmonNoteNum));
                    // alert ("that's one");
                    chordSequenceArray.push([randomNoteNum + 0, 4, randomScaleNum + 0]);
                    // alert ("added");
                    // beatsExpected = beatsExpected + thisNoteTime;
                    // console.log("beats" + thisNoteTime);
                    // console.log(beatsExpected + " is beats amount");

                }
                chordSequenceLength = chordSequenceArray.length + 0;
                chordSequenceCopy = [];
                chordSequenceCopy = chordSequenceArray.slice();
                // chordSequenceCopy.unshift([chordSequenceCopy[0][0], 4, chordSequenceCopy[0][2]]);

                sequenceCopy = [];
                sequenceCopy = sequenceArray.slice();
                //nonreference section end
            }
        } else { // regular sequenceplay is on
            // alert ("hi");
            if (scoreLevel != "freestyle") {
                if (intervalRotationType == "scoreBased") {
                    setProgressGoals("3rd Up", "3rd Down", "4th Up", "4th Down");
                    if (currentLevelScore == 0) {
                        intervalDirection = "up";
                    } else if (currentLevelScore == 10) {
                        intervalDirection = "down";
                        alert("now practice doing a 3rd down of this note");
                    } else if (currentLevelScore == 20) {
                        intervalDirection = "fourthUp";
                        alert("now practice doing a 4th up of this note (Note: This is the same as a 5th down)");
                    } else if (currentLevelScore == 30) {
                        intervalDirection = "fourthDown";
                        alert("now practice doing a 5th up of this note (Note: This is the same as a 4th down)");
                    }
                } else if (intervalRotationType == "randomIntervals") {
                    intervalDirection = getRandomInterval();
                }
                if (lengthRotationType == "scoreBased") { //7-20-20

                    setProgressGoals("2 notes", "3 Notes", "4 Notes", "5 Notes");

                    if (currentLevelScore == 0) {
                        sequenceLength = 2;
                    } else if (currentLevelScore == 10) {
                        sequenceLength = 3;
                        // alert("now practice doing a 3rd down of this note");
                    } else if (currentLevelScore == 20) {
                        sequenceLength = 4;
                        // alert("now practice doing a 4th up of this note (Note: This is the same as a 5th down)");
                    } else if (currentLevelScore == 30) {
                        sequenceLength = 5;
                        // alert("now practice doing a 5th up of this note (Note: This is the same as a 4th down)");
                    }
                } else if (lengthRotationType == "scoreBasedByFour") {

                    setProgressGoals("4 Notes", "8 Notes", "12 Notes", "16 Notes");
                    if (currentLevelScore == 0) {
                        sequenceLength = 4;
                    } else if (currentLevelScore == 10) {
                        sequenceLength = 8;
                        // alert("now practice doing a 3rd down of this note");
                    } else if (currentLevelScore == 20) {
                        sequenceLength = 12;
                        // alert("now practice doing a 4th up of this note (Note: This is the same as a 5th down)");
                    } else if (currentLevelScore == 30) {
                        sequenceLength = 16;
                        // alert("now practice doing a 5th up of this note (Note: This is the same as a 4th down)");
                    }
                }
                updateProgress();
                if (currentLevelScore >= 20) {
                    alert("Congratulations! You have completed this level. Select a new level from the 'select level' menu");
                    addLevelCompleted(whoItIsUsingThis, theirEmail, scoreLevel);
                    if (ourLevelNumber < scoreLevel) {
                        ourLevelNumber = scoreLevel + 0; ;
                        updateTheLevel(ourLevelNumber);
                    }
                    setupTheLevel(scoreLevel + 1);
                }

            }
            sequenceIntervalArray = [];
            chordSequenceArray = [];
            sequenceChordCopy = [];
            sequenceArray = [];
            sequenceCopy = [];
            beatsExpected = 0;
            sequenceFirst = true;
            if (!nonReferencePlay) {
                for (var i = 0; sequenceLength > i; i++) {
                    if (i == 0) {
                        randomScaleNum = Math.floor(Math.random() * 7);
                        console.log(i + " sequencefirst");
                    } else {
                        console.log(i + " notfirst " + randomScaleNum);
                        let intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                        if (intervalChange == 0) {
                            while (intervalChange == 0) {

                                intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                            }
                        }
                        randomScaleNum = randomScaleNum + intervalChange;
                        if (randomScaleNum > 6) {
                            shiftAdapter = 12;
                        } else if (randomScaleNum < 0) {
                            shiftAdapter = -12;
                        } else {
                            shiftAdapter = 0;
                        }
                        // console.log(randomScaleNum + " is the scale change");
                    }
                    if (keyType == "major") {
                        randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    } else {
                        // alert ("hi");
                        randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    }
                    // console.log(i+" "+randomNoteNum);
                    let thisNoteTime = Math.floor(Math.random() * (noteLengthMax - noteLengthMin + 1)) + noteLengthMin; //length of random notes
                    sequenceArray.push([randomNoteNum + 0, thisNoteTime + 0, randomScaleNum + 0]);
                    sequenceIntervalArray.push(getRandomInterval() + "");
                    beatsExpected = beatsExpected + thisNoteTime;
                    // console.log("beats" + thisNoteTime);
                    // console.log(beatsExpected + " is beats amount");

                }
                sequenceCopy = [];
                sequenceCopy = sequenceArray.slice();
                // sequenceCopy.unshift([sequenceCopy[0][0], 2, sequenceCopy[0][2]]);

            } else { //this is where I am making first the notes of reference and then the chords around them.
                referenceNoteArray = [];
                for (var i = 0; sequenceLength > i; i++) {
                    if (i == 0) {
                        randomScaleNum = Math.floor(Math.random() * 7);
                        // console.log(i + " sequencefirst");
                    } else {
                        // console.log(i + " notfirst " + randomScaleNum);
                        let intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                        if (intervalChange == 0) {
                            while (intervalChange == 0) {

                                intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                            }
                        }
                        randomScaleNum = randomScaleNum + intervalChange;
                        if (randomScaleNum > 6) {
                            shiftAdapter = 12;
                        } else if (randomScaleNum < 0) {
                            shiftAdapter = -12;
                        } else {
                            shiftAdapter = 0;
                        }
                        // console.log(randomScaleNum + " is the scale change");
                    }
                    if (keyType == "major") {
                        randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                        // alert (randomNoteNum);
                    } else {

                        randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    }
                    // console.log(i+" "+randomNoteNum);
                    let thisNoteTime = Math.floor(Math.random() * (noteLengthMax - noteLengthMin + 1)) + noteLengthMin; //length of random notes
                    // alert (basicNote(randomNoteNum));
                    referenceNoteArray.push(basicNote(randomNoteNum));
                    sequenceArray.push([randomNoteNum + 0, thisNoteTime + 0, randomScaleNum + 0]);
                    sequenceIntervalArray.push(getRandomInterval() + "");
                    beatsExpected = beatsExpected + thisNoteTime;
                    console.log("original beats expected " + beatsExpected);
                    // console.log("beats" + thisNoteTime);
                    // console.log(beatsExpected + " is beats amount");

                }
                console.log("Final original beats expected " + beatsExpected);
                findKey(referenceNoteArray);
                for (var i = 0; (Math.floor((beatsExpected - 2) / 4) + 1) > i; i++) {
                    if (i == 0) {
                        randomScaleNum = Math.floor(Math.random() * 7);
                        // console.log(i + " sequencefirst");
                    } else {
                        // console.log(i + " notfirst " + randomScaleNum);
                        let intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                        if (intervalChange == 0) {
                            while (intervalChange == 0) {

                                intervalChange = (Math.floor(Math.random() * (2 * melodicRange)) - melodicRange);
                            }
                        }
                        randomScaleNum = randomScaleNum + intervalChange;
                        if (randomScaleNum > 6) {
                            shiftAdapter = 12;
                        } else if (randomScaleNum < 0) {
                            shiftAdapter = -12;
                        } else {
                            shiftAdapter = 0;
                        }
                        // console.log(randomScaleNum + " is the scale change");
                    }
                    if (keyType == "major") {
                        randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    } else {
                        // alert ("hi");
                        randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter + shiftAdapter;
                        shiftAdapter = 0;
                    }
                    // console.log(i+" "+randomNoteNum);
                    // let thisNoteTime = Math.floor(Math.random() * (noteLengthMax - noteLengthMin + 1)) + noteLengthMin; //length of random notes
                    // referenceNoteArray.push(basicNote(randmonNoteNum));
                    // alert ("that's one");
                    chordSequenceArray.push([randomNoteNum + 0, 4, randomScaleNum + 0]);
                    // beatsExpected = beatsExpected + thisNoteTime;
                    // console.log("beats" + thisNoteTime);
                    // console.log(beatsExpected + " is beats amount");

                }
                chordSequenceLength = chordSequenceArray.length + 0;
                beatsExpected = chordSequenceLength * 4;
                console.log(beatsExpected + " after chordsequencelengh");
                chordSequenceCopy = [];
                chordSequenceCopy = chordSequenceArray.slice();
                // chordSequenceCopy.unshift([chordSequenceCopy[0][0], 2, chordSequenceCopy[0][2]]); I undid this, and I don't know if I agree with it.

                sequenceCopy = [];
                sequenceCopy = sequenceArray.slice();

                console.error("started with " + sequenceArray.toString()); //7-15-2020
                // sequenceCopy.unshift([sequenceCopy[0][0], 2, sequenceCopy[0][2]]);

            }
        }

        //console.log(randomNoteNum);
        //			console.log (randomNoteArray+" "+noteArray[findNote(randomNoteNum)][1]);
        // console.log(randomScaleNum + " " + getNoteNumMajorScale(randomScaleNum) + " " + randomNoteNum + " " + noteArray[randomNoteNum][1] + "");

        if (sequencePlay) { //I don't remember what this is for.
            randomNoteNum = currentRandomNoteNum + 0;

        } else {
            if (intervalDirection == "up") {
                // alert("hi");
                majorCheck = true;
                getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
                document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                majorCheck = false;
            } else if (intervalDirection == "down") {
                majorCheck = true;
                getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
                document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
                majorCheck = false;
            } else if (intervalDirection == "unison") {
                document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
            } else if (intervalDirection == "fourthUp") {
                if (toSolFej(keyOf, randomScaleNum) == "Fa") {
                    newQuestionTime = true;
                }
                document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
            } else if (intervalDirection == "fourthDown") {
                if (toSolFej(keyOf, randomScaleNum) == "Fa") {
                    newQuestionTime = true;
                }
                document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
            }
        }
        r = randomNoteNum;
        if (!sequencePlay) {
            makeAndShowANote(r, 2, "referenceNote");
            numOfThisNoteInSequence++;
        }
        if (!paused) {
            lastMostRecentPostingNum = mostRecentPostingNum + 0;

            mostRecentPostingNum = r;
            // gauge.update({
            // majorTicks: [(noteArray[r - 1] || "")[1] || "", noteArray[r][1], (noteArray[r + 1] || "")[1] || ""],
            // units: (noteArray[r][1] + " " + Math.floor(score)) //sets the 3 notes in there.
            // });
        } else {
            // gauge.update({
            // units: "Paused"
            // }); //sets the 3 notes in there.
        }
        if ((!newQuestionTime) && (!sequencePlay)) {
            r = randomNoteNum;
            lastMostRecentPostingNum = mostRecentPostingNum + 0;
            mostRecentPostingNum = r;
            // gauge.update({
            // majorTicks: [(noteArray[r - 1] || "")[1] || "", noteArray[r][1], (noteArray[r + 1] || "")[1] || ""],
            // units: (noteArray[r][1] + " " + Math.floor(score)) //sets the 3 notes in there.

            // });
            playANote(randomNoteNum);
        }
        if ((!newQuestionTime) && (sequencePlay)) {
            // sequenceArray.push([randomNoteNum, 1]);
            // sequenceArray.push([randomNoteNum+1, 3]);
            // sequenceArray.push([randomNoteNum+2, 2]);
            // sequenceArray.push([randomNoteNum+3, 1]);

            // console.log(sequenceArray);
            // playASequence();

        }

        // var audio = document.getElementById(soundId(noteArray[randomNoteNum][1]));
        // //	alert (""+soundId(getNoteName(note)));
        // // if audio(const playPromise = audio.play();
        // // if (playPromise !== null) {
        // // playPromise.catch(() => {
        // // audio.pause();
        // // audio.volume = 1.0;
        // // if (audio.readyState >= 2) {
        // // audio.currentTime = 0;
        // // // audio.play();
        // // }
        // // })
        // // }
        // // if (audio) {

        // // }

        // //press();
        // //playNote(midiNoteToFrequency(note));
        // //press(note);
        // //if (velocity > 0) {
        // if (audio) {
        // audigo.pause();
        // audio.volume = 1.0;
        // if (audio.readyState >= 2) {
        // audio.currentTime = 0;
        // var promise = audio.play();

        // if (promise !== undefined) {
        // promise.then(_ => {
        // // Autoplay started!
        // }).catch(error => {
        // //alert ("it worked");
        // // Autoplay was prevented.
        // // Show a "Play" button so that user can start playback.
        // });
        // }

        // }
        // }

        //noteOnListener(note, velocity); //
        //} else {
        //		noteOffListener(note);


    }
    //console.log("sup");

    // frameCounter++,
    // Date.now() - startTime >= 60 && (measureLength = frameCounter, minDrawMLength = frameCounter * minDrawRate, startTime = Date.now(), frameCounter = 0), // Avi Changed this from 450 to 250 on 5-23
    // analyzer.getFloatTimeDomainData(timeDomainData);
    // var e = bitCounter / findWaveLength(timeDomainData, window.globk * 24, window.globk * 1200, 10, 10, .016, Math.ceil(10 / window.globk)); //e is the value of the sound
    // if (e > 0) {
    // console.log("you're singing");
    // console.log("you started singing "+noteArray[findNote(e)][1] + " "+noteArray[mostRecentPostingNum][1]);
    // if (captureSinging) {
    // if (findNote(e) != mostRecentPostingNum) { //I currently don't have any way of recognizing that notes were changed. this boolean is a placeholder.
    // try {
    // singingEndTime = new Date().getTime() + 0;
    // let timeChange = singingEndTime - singingStartTime;
    // // console.log("time change "+timeChange);
    // if (timeChange > 20) {
    // let singingTimeSeconds = (timeChange / 1000);
    // let singingTimeBeats = singingTimeSeconds / (60 / currentBPM);
    // console.log(noteArray[lastMostRecentPostingNum][1] + " was added from making noise");
    // singingTimeArray.push([lastMostRecentPostingNum, singingTimeSeconds]);
    // console.log("Yo" + singingTimeArray.toString());
    // // if (singingTimeArray.length > 5) {

    // // }
    // // console.log("time you sang was " + singingTimeSeconds + " " + noteArray[mostRecentPostingNum][1]);
    // }
    // youAreSinging = false;
    // // singingStartTime = new Date().getTime() + 0;

    // } catch (error) {
    // console.log(error);
    // }

    // } else {
    // console.log("they were the same");
    // }

    // if (!youAreSinging) {
    // try {
    // singingStartTime = new Date().getTime() + 0;
    // } catch (error) {}

    // youAreSinging = true;
    // }
    // }
    // console.log("you are singing " + noteArray[findNote(e)][1] + " " + r);
    // measurements.push([e, findNote(e)]),
    // measurements.length > measureLength && (measurements = measurements.slice(measurements.length - measureLength));
    // for (var r = 0, t = 0, o = 0, n = measurements.length, a = 0; n > a; a++) {
    // t = 0;
    // for (var i = 0; n > i; i++)
    // measurements[a][1] == measurements[i][1] && (t++, t >= r && (r = t, o = a))
    // }
    // for (var u = [], a = 0; n > a; a++)
    // measurements[a][1] == measurements[o][1] && u.push(measurements[a][0]);
    // u.length >= minDrawMLength && (e = u.reduce(function (e, r) {
    // return e + r
    // }) / u.length, drawGaugeNote(e))
    // //this spot is Avi important
    // } else { //WHAT TO DO WHEN NO SOUND

    // if (captureSinging) {
    // try {
    // singingEndTime = new Date().getTime() + 0;
    // let timeChange = singingEndTime - singingStartTime;
    // if (timeChange > 20) {
    // let singingTimeSeconds = ((timeChange % (1000 * 60)) / 1000);
    // let singingTimeBeats = singingTimeSeconds / (60 / currentBPM);
    // console.log(noteArray[mostRecentPostingNum][1] + " was added from being quiet");
    // singingTimeArray.push([mostRecentPostingNum, singingTimeSeconds]);
    // console.log("Yo" + singingTimeArray.toString());
    // if (singingTimeArray.length > 5) {
    // // alert("cool");

    // }
    // // console.log("time you sang was " + singingTimeSeconds + " " + noteArray[mostRecentPostingNum][1]);
    // }

    // singingStartTime = new Date().getTime() + 0;
    // } catch (error) {
    // console.log(error);
    // }

    // youAreSinging = false;
    // }
    // if (!sequencePlay) {
    // startWrongTimer();
    // //startScoreTimer();
    // if (scoreTimeBeats < (1)) {
    // wrongNote = false;
    // wrongPoints = 0;
    // // startScoreTimer();

    // // console.log("s " + scoreTimeBeats);
    // } else {
    // wrongNote = true;

    // // updateTimer();
    // // console.log(wrongPoints);
    // }
    // } else {
    // startWrongTimer();
    // wrongNote = true;
    // if (scoreTimeBeats < (1)) {
    // wrongNote = false;
    // wrongPoints = 0;
    // // startScoreTimer();

    // // console.log("s " + scoreTimeBeats);
    // } else {
    // wrongNote = true;
    // // updateTimer();
    // // console.log(wrongPoints);
    // }

    // pauseScore();
    // }

    // alert("yo");
    // }
    // currentScore = 50.00001 * (scoreTimeBeats + .000001) / (timeRequirement + .000001);
    if (currentScore < 0) {

        scorePauseTimeAmount = 0;
        previousScorePauseTimeAmount = 0;
        currentScore = 0;
        score = 0;
        scoreTimeBeats = 0;

        // if (r){
        // gauge.update({
        // majorTicks: [(noteArray[r - 1] || "")[1] || "", noteArray[r][1], (noteArray[r + 1] || "")[1] || ""],
        // units: (noteArray[r][1] + " " + Math.floor(score)) //sets the 3 notes in there.
        // });
        // }
    }
    // score=Math.floor(currentScore);
    // console.log ("score is "+score);
    requestAnimationFrame(repeatOnFrame)
}
window.requestAnimationFrame || (window.requestAnimationFrame = function () {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, r) {
        window.setTimeout(e, 1e3 / 30)
    }
}
    ());

window.onresize = function (event) {

    // tunerWidth = Math.floor($("#tunerframe").width() - 0);
    // tunerWidth > 600 && (tunerWidth = 600),
    // $("#tunerback").css({
    // width: tunerWidth,
    // height: .92 * tunerWidth,
    // "margin-bottom": .08 * tunerWidth
    // }),
    // $("#tunerframe").css({
    // "margin-bottom": .1 * tunerWidth
    // });
}
function initTuner() {
    $("#preloader").remove();
    // var e = "-analytics.";
    // gauge.draw();

    $("#tunercanvas").one("click", function () {
        $("button.tuneron").click();
    });
}
var lightColor = "#ffa500",
darkColor = "#0B8043",
noteBorders = [
    [31.786, 33.676],
    [33.676, 35.678],
    [35.678, 37.8],
    [37.8, 40.047],
    [40.047, 42.429],
    [42.429, 44.952],
    [44.952, 47.624],
    [47.624, 50.456],
    [50.456, 53.457],
    [53.457, 56.635],
    [56.635, 60.003],
    [60.003, 63.571],
    [63.571, 67.351],
    [67.351, 71.356],
    [71.356, 75.599],
    [75.599, 80.095],
    [80.095, 84.857],
    [84.857, 89.903],
    [89.903, 95.249],
    [95.249, 100.915],
    [100.915, 106.915],
    [106.915, 113.27],
    [113.27, 120.005],
    [120.005, 127.14],
    [127.14, 134.7],
    [134.7, 142.71],
    [142.71, 151.195],
    [151.195, 160.185],
    [160.185, 169.71],
    [169.71, 179.805],
    [179.805, 190.5],
    [190.5, 201.825],
    [201.825, 213.825],
    [213.825, 226.54],
    [226.54, 240.01],
    [240.01, 254.285],
    [254.285, 269.405],
    [269.405, 285.42],
    [285.42, 302.395],
    [302.395, 320.38],
    [320.38, 339.43],
    [339.43, 359.61],
    [359.61, 380.995],
    [380.995, 403.65],
    [403.65, 427.65],
    [427.65, 453.08],
    [453.08, 480.02],
    [480.02, 508.565],
    [508.565, 538.81],
    [538.81, 570.85],
    [570.85, 604.79],
    [604.79, 640.755],
    [640.755, 678.86],
    [678.86, 719.225],
    [719.225, 761.99],
    [761.99, 807.3],
    [807.3, 855.305],
    [855.305, 906.165],
    [906.165, 960.05],
    [960.05, 1017.135],
    [1017.135, 1077.6],
    [1077.6, 1141.7],
    [1141.7, 1209.6],
    [1209.6, 1281.5],
    [1281.5, 1357.7],
    [1357.7, 1438.45],
    [1438.45, 1524],
    [1524, 1614.6],
    [1614.6, 1710.6],
    [1710.6, 1812.35],
    [1812.35, 1920.1],
    [1920.1, 2034.25]
]

function inTimeOut() {
    newQuestionTime = true;
    if (!continuous) {
        alert("now sing with the note! After you press okay you'll get your next note.");
    }
};
function basicNote(complexNote) {
    var newNoteNumber = complexNote;
    while (newNoteNumber > 11) {
        newNoteNumber = newNoteNumber - 12;
    }
    return newNoteNumber;
};

function gimmeThatAgainAsNoteAndBeats(aSequenceArray) {
    let tempSequence = [];
    for (i = 0; i < aSequenceArray.length; i++) {
        tempSequence.push([noteArray[aSequenceArray[i][0]][1], Math.round(aSequenceArray[i][1])])
    }
    return tempSequence;
}

function drawGaugeNote(e) { //here it is drawing stuff based on the noteArray
    //console.log((thanote)+","+(findNote(randomNoteNum)+4))
    if (sequencePlay) {
        randomNoteNum = currentRandomNoteNum + 0;
    }
    if (intervalDirection == "up") {
        var legalInterval = getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
    } else if (intervalDirection == "down") {
        var legalInterval = getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
    } else if (intervalDirection == "unison") {
        var legalInterval = 0; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
    } else if (intervalDirection == "fourthUp") {
        var legalInterval = 5; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
    } else if (intervalDirection == "fourthDown") {
        var legalInterval = 7; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
    } else if (intervalDirection == "allHarmonies") {
        if (keyType == "major") {
            // console.log("new is " + newLastRandomScaleNum);
            randomScaleNum = getScaleNumMajorNote(randomNoteNum);
        } else {
            // alert ("hi");
            // console.log("newMinor is " + newLastRandomScaleNum);
            randomScaleNum = getScaleNumMinorNote(randomNoteNum);
        }
        var legalInterval = getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
        var legalIntervalTwo = getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            var legalIntervalThree = 7;
        } else {
            var legalIntervalThree = 5;
        }
        var legalIntervalFour = 7;

    }

    //console.log(basicNote(thanote));
    // console.log(noteArray[randomNoteNum+legalInterval][1]);
    if (captureSinging) {
        // if ((captureButtons) && (justPlayingScaleFam)) {
        // buttonStartEndTimes.push([arrayPlace, new Date(new Date().getTime())]);
        // if (buttonStartEndTimes.length > 1) {
        // // alert("long");
        // singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000.01]);
        // buttonStartEndTimes.shift();
        // console.log(singingTimeArray.toString());
        // }
        // }


        if (r != mostRecentSungNum) { //I currently don't have any way of recognizing that notes were changed. this boolean is a placeholder.
            try {
                console.log("you are singing " + noteArray[r][1] + " " + r);
                // console.log(0/5);
                buttonStartEndTimes.push([r, new Date(new Date().getTime())]);
                if (buttonStartEndTimes.length > 1) {
                    singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000, 0, findNoteDeviation(e), e]);
                    // console.log(singingTimeArray.toString());
                    buttonStartEndTimes.shift();
                }
                // singingEndTime = new Date().getTime() + 0;
                // let timeChange = singingEndTime - singingStartTime;
                // console.log("time change "+timeChange);
                // if (timeChange > 20) {
                // let singingTimeSeconds = (timeChange / 1000);
                // let singingTimeBeats = singingTimeSeconds / (60 / currentBPM);
                // console.log(noteArray[lastMostRecentPostingNum][1] + " was added from making noise");
                // singingTimeArray.push([lastMostRecentPostingNum, singingTimeSeconds]);
                // console.log("Yo" + singingTimeArray.toString());
                // // if (singingTimeArray.length > 5) {

                // // }
                // // console.log("time you sang was " + singingTimeSeconds + " " + noteArray[mostRecentPostingNum][1]);
                // }
                // youAreSinging = false;
                // // singingStartTime = new Date().getTime() + 0;

            } catch (error) {
                console.log(error);
            }

        } else {
            // console.log("they were the same");
        }

        // if (!youAreSinging) {
        // try {
        // singingStartTime = new Date().getTime() + 0;
        // } catch (error) {}

        // youAreSinging = true;
        // }
    }
    if ((((basicNote(thanote)) == (basicNote((randomNoteNum) + legalInterval))) || ((intervalDirection == "allHarmonies") && ((((basicNote(thanote)) == (basicNote((randomNoteNum) + legalIntervalTwo)))) || (((basicNote(thanote)) == (basicNote((randomNoteNum) + legalIntervalThree)))) || (((basicNote(thanote)) == (basicNote((randomNoteNum) + legalIntervalFour))))))) && (!paused)) { //WHAT TO DO WHEN correct
        // unpauseScore();
        // console.log("awesome");

        wrongPoints = 0;
        wrongNote = false;
        newWrong = true;
        if (newScore) {
            colorTarget = correctTarget;

            // makeAndShowANote(randomNoteNum + legalInterval, 1, "targetNote");
            makeAndShowANote(thanote, 1, "singingNote");

        }
        visibleSingingNoteGroups[0].style.backgroundColor = 'blue';
        console.warn(visibleSingingNoteGroups[0].style.color); //7-20-20
        startScoreTimer();
        // updateTimer();
        if ((sequencePlay) && (!nonReferencePlay)) {
            // alert (beatsExpected+" "+sequenceLength);
            timeRequirement = (beatsExpected) / 2 - (.8 * ((sequenceLength) * (currentBPM / 120))); // / (currentBPM/60) - (.55*sequenceLength); // after doing the math... it should be beats expected. / (currentBPM/60.000001);
            console.log(timeRequirement + " is time requirement");
        } else if ((nonReferencePlay)) {
            // alert (beatsExpected+" "+sequenceLength);

            console.log("testing original beats expected " + beatsExpected);
            timeRequirement = (beatsExpected) / 2 - (.6 * ((sequenceLength) * (currentBPM / 120)));
            if (timeRequirement < (beatsExpected / 4)) {
                timeRequirement = beatsExpected / 4; // this was a fail safe because I kept finding the time requirement was far too severe.
            }
            // / (currentBPM/60) - (.55*sequenceLength); // after doing the math... it should be beats expected. / (currentBPM/60.000001);
            console.log(timeRequirement + " is time requirement");
        } else {
            timeRequirement = globalTimeRequirement / (120 / currentBPM);
        }
        currentScore = 50 * (scoreTimeBeats) / (timeRequirement); //(currentScore+.000001)+2.00/timeRequirement;
        // console.log(newScore + " beats " + scoreTimeBeats + " timerequirement " + timeRequirement + " currentScore " + currentScore + " scoreTimeStart " + scoreTimeStart + " scoreTime " + scoreTimeSeconds);
        score = Math.floor(currentScore);
        if ((score >= 100) && (!micMute)) { //100 is 2 seconds... 200 is 4 seconds.

            score = 0;
            currentScore = 0;
            scoreTimeBeats = 0;
            if (!answerRevealed) {
                totalScore++;

                currentLevelScore++;
            } else {
                answerRevealed = false;
            }
            document.getElementById("totalscore").innerHTML = "#Correct = " + totalScore;
            previousNote = noteArray[((randomNoteNum) + legalInterval)][1];
            harmonizeBecauseYouRight();
            setTimeout(inTimeOut(), 3000);

        }
    } else { //WHAT TO DO WHEN WRONG
        colorTarget = wrongTarget;
        if (!sequencePlay) {
            makeAndShowANote(randomNoteNum + legalInterval, 1, "targetNote");
        }
        makeAndShowANote(thanote, 1, "singingNote");

        // console.log("not awesome");
        if ((sequencePlay) && (score > 0)) {
            startWrongTimer();
            wrongNote = true;
            // updateTimer();
            // startScoreTimer();
            // currentScore = currentScore - 1.00 / timeRequirement;
            // score = Math.floor(currentScore);
        } else {
            currentScore = 0;
            score = 0;
            scoreTimeBeats = 0;
            wrongNote = false;
            wrongPoints = 0;
            newScore = true;
            // startScoreTimer();
            // pauseScore();
            if (!sequencePlay) {}

            // alert ("wrong");
            // console.log("beats "+scoreTimeBeats+" timerequirement "+timeRequirement+" currentScore "+currentScore+" scoreTimeStart "+scoreTimeStart+" scoreTime "+scoreTimeSeconds);

        }
    }
    //console.log(noteArray[43][1]); // Here Avi is writing down what note is being played based on the find note thing.
    //alert (r+"");
}

function isItInKey(aNoteNumber) {
    let wellIsIt = false;
    let minorVersion = highScoreKeys[0];
    if (keyType == "minor") {
        let minorVersion = highScoreKeys[0] - 3;
        if (minorVersion < 0) {
            minorVersion = minorVersion + 12;
        }
    }
    if ((allTheMajors[minorVersion])[1].includes(basicNote(aNoteNumber))) {
        // alert(currentKey+ " "+(allTheMajors[i])[1].toString());
        wellIsIt = true;
        // alert (currentKey+" " +currentKeyScore+" "+j);
    }

    return wellIsIt;
}

function tryToShiftToKey(aNoteNumber) {
    let minorVersion = highScoreKeys[0] - 3;
    if (minorVersion < 0) {
        minorVersion = minorVersion + 12;
    }

}

function findKey(notesWeHaveArray) {
    let sungNotes = notesWeHaveArray.slice();
    // alert(sungNotes.toString());
    highScoreKeys = [];
    highScoreKeysNames = [];
    highScore = 0;
    for (var i = 0; i < allTheMajors.length; i++) {
        let currentKey = (allTheMajors[i])[0];
        let currentKeyScore = 0;
        for (var j = 0; j < sungNotes.length; j++) {
            // alert (j+ " "+ sungNotes[j]);
            // alert (sungNotes.length);
            // alert (allTheMajors[i][1].length);
            if ((allTheMajors[i])[1].includes(sungNotes[j])) {

                // alert(currentKey+ " "+(allTheMajors[i])[1].toString());
                currentKeyScore++;
                // alert (currentKey+" " +currentKeyScore+" "+j);
            }
            // alert (currentKey+" "+currentKeyScore);
        }
        if (currentKeyScore > highScore) {
            highScore = currentKeyScore + 0; ;
            highScoreKeys = [(currentKey)];
            highScoreKeysNames = [numToKeyName(currentKey)];
        } else if (currentKeyScore == highScore) {
            highScoreKeys.push((currentKey));
            highScoreKeysNames.push(numToKeyName(currentKey));
        }

    }
    // alert (highScoreKeys[0]);
    // $("#referenceKeySelect option[id='']").attr("selected", "selected");
    // document.getElementById("referenceKeySelect").options["D"].select
    // $("#referenceKeySelect option[value=(highScoreKeys[0])]").attr("selected", "selected");
    // $('select').val(highScoreKeys[0]);
    let minorVersion = highScoreKeys[0] - 3;
    if (minorVersion < 0) {
        minorVersion = minorVersion + 12;
    }
    if (buttonsCaptured) {
        console.log(highScoreKeysNames.toString() + " major " + " with a score of " + highScore);
    }
    if (keyType == "major") {
        $('#referenceKeySelect option[value="' + numToKeyNamePullDown(highScoreKeys[0]) + '"]').prop("selected", true);
        updateScaleAdapter(numToKeyNamePullDown(highScoreKeys[0]));
        drawKeySignature(highScoreKeysNames[0]);
    } else {
        $('#referenceKeySelect option[value="' + numToKeyNamePullDown(minorVersion) + '"]').prop("selected", true);
        updateScaleAdapter(numToKeyNamePullDown(minorVersion));
        drawKeySignature(numToKeyNameMinor(minorVersion));
    }

    // $('#referenceKeySelect').trigger("change");
}

function numToKeyName(numOfKey) {
    let nameOfKey = "";
    switch (numOfKey) {
    case 0:
        nameOfKey = "C";
        break;
    case 1:
        nameOfKey = "Db";
        break;
    case 2:
        nameOfKey = "D";
        break;
    case 3:
        nameOfKey = "Eb";
        break;
    case 4:
        nameOfKey = "E";
        break;
    case 5:
        nameOfKey = "F";
        break;
    case 6:
        nameOfKey = "Gb";
        break;
    case 7:
        nameOfKey = "G";
        break;
    case 8:
        nameOfKey = "Ab";
        break;
    case 9:
        nameOfKey = "A";
        break;
    case 10:
        nameOfKey = "Bb";
        break;
    case 11:
        nameOfKey = "B";
        break;
    }
    return nameOfKey;
}

function numToKeyNamePullDown(numOfKey) {
    let nameOfKey = "";
    switch (numOfKey) {
    case 0:
        nameOfKey = "C";
        break;
    case 1:
        nameOfKey = "C#/Db";
        break;
    case 2:
        nameOfKey = "D";
        break;
    case 3:
        nameOfKey = "D#/Eb";
        break;
    case 4:
        nameOfKey = "E";
        break;
    case 5:
        nameOfKey = "F";
        break;
    case 6:
        nameOfKey = "F#/Gb";
        break;
    case 7:
        nameOfKey = "G";
        break;
    case 8:
        nameOfKey = "G#/Ab";
        break;
    case 9:
        nameOfKey = "A";
        break;
    case 10:
        nameOfKey = "A#/Bb";
        break;
    case 11:
        nameOfKey = "B";
        break;
    }
    return nameOfKey;
}
function numToKeyNameMinor(numOfKey) {
    let nameOfKey = "";
    switch (numOfKey) {
    case 0:
        nameOfKey = "Cm";
        break;
    case 1:
        nameOfKey = "C#m";
        break;
    case 2:
        nameOfKey = "Dm";
        break;
    case 3:
        nameOfKey = "D#m";
        break;
    case 4:
        nameOfKey = "Em";
        break;
    case 5:
        nameOfKey = "Fm";
        break;
    case 6:
        nameOfKey = "F#m";
        break;
    case 7:
        nameOfKey = "Gm";
        break;
    case 8:
        nameOfKey = "G#m";
        break;
    case 9:
        nameOfKey = "Am";
        break;
    case 10:
        nameOfKey = "A#m";
        break;
    case 11:
        nameOfKey = "Bm";
        break;
    }
    return nameOfKey;
}
function pauseUnpauseScore() {
    if (scorePaused) {
        scorePaused = false;
        // if (!scorePaused) {
        // gauge.update({
        // majorTicks: [(noteArray[randomNoteNum - 1] || "")[1] || "", noteArray[randomNoteNum][1], (noteArray[randomNoteNum + 1] || "")[1] || ""],
        // units: (noteArray[randomNoteNum][1] + " " + Math.floor(score)) //sets the 3 notes in there.
        // });
        // }
        previousScorePauseTimeAmount = scorePauseTimeAmount + 0;

    } else if (!scorePaused) {
        scorePaused = true;
        // gauge.update({
        // units: "Paused"
        // }); //sets the 3 notes in there.
        pauseScoreTimer();
    }
}
function pauseScore() {
    if (!scorePaused) {
        scorePaused = true;
        pauseScoreTimer();

        // gauge.update({
        // units: "Paused"
        // }); //sets the 3 notes in there.

    } else {
        // previousPauseTimeAmount++;
    }
}

function unpauseScore() {
    if (scorePaused) {
        scorePaused = false;
        // if (!scorePaused) {
        // gauge.update({
        // majorTicks: [(noteArray[randomNoteNum - 1] || "")[1] || "", noteArray[randomNoteNum][1], (noteArray[randomNoteNum + 1] || "")[1] || ""],
        // units: (noteArray[randomNoteNum][1] + " " + Math.floor(score)) //sets the 3 notes in there.
        // });
        // }
        previousScorePauseTimeAmount = scorePauseTimeAmount + 0;

    }
}

function toSolFej(keyOfWhat, scaleNumOfNote) {
    var scaleNumHere = scaleNumOfNote; //used to add keyOfWhat
    // alert (scaleNumHere);
    while (scaleNumHere > 6) {
        scaleNumHere = scaleNumHere - 7;
    }
    var solFej = "C";
    if (keyType == "major") {
        switch (scaleNumHere) {
        case 0:
            solFej = "Do";
            break;
        case 1:
            solFej = "Re";
            break;
        case 2:
            solFej = "Mi";
            break;
        case 3:
            solFej = "Fa";
            break;
        case 4:
            solFej = "Sol";
            break;
        case 5:
            solFej = "La";
            break;
        case 6:
            solFej = "Ti";
            break;
        }
    } else {
        switch (scaleNumHere) {
        case 0:
            solFej = "Do";
            break;
        case 1:
            solFej = "Re";
            break;
        case 2:
            solFej = "Me";
            break;
        case 3:
            solFej = "Fa";
            break;
        case 4:
            solFej = "Sol";
            break;
        case 5:
            solFej = "Le";
            break;
        case 6:
            solFej = "Te";
            break;
        }
    }
    return solFej;

}

function beginAudio(e) { //Avi thinks It all begins here.
    startTimer();
    window.globk = 1;
    var msg = "Access to the microphone is not supported by this browser.";
    var msg2 = "You did not allow access to the microphone. Reload the page and try again. If reloading does not help, open the browser settings and remove the ban on using the microphone.";

    if (e) {
        msg += " Use Safari.";
    } else {
        msg += " Use the latest version of Google Chrome.";
    }
    try {
        gauge.update({
            units: "Wait"
        });
        $("#tunercanvas").unbind("click");
        // $(document).ready( function(){ PRELOADER.RUN(30000, appStart) } );
        if (audioCtx = new(window.AudioContext || window.webkitAudioContext), analyzer = audioCtx.createAnalyser(), !e) {
            if (audioCtx.sampleRate > 160000) {
                window.globk = 4
            } else if (audioCtx.sampleRate > 90000) {
                window.globk = 2
            }
            analyzer.fftSize = window.globk * 4096;
            analyzer.smoothingTimeConstant = 0;
            var r = new Date((new Date).getTime() + 2592e6);
        }
        navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
            audio: {
                noiseSuppression: !1,
                echoCancellation: !0
            }
        })
        .then(function (r) {
            source = audioCtx.createMediaStreamSource(r),
            source.connect(analyzer),
            timeDomainData = new Float32Array(analyzer.fftSize),
            bitCounter = audioCtx.sampleRate,
            e ? jsHelper.waitForMic(900) : jsHelper.waitForMic(200)
        })["catch"](function (e) {
            console.log(e);
            $("#tunerframe").append('<b style="padding-left:10px;display: block;">' + msg2 + "</b>");
        }) : alert(msg)
    } catch (y) {
        alert(y);
        $("#tunerframe").append('<b style="padding-left:10px;display: block;">' + msg + "</b>");
    }
}
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
    [1000000, "rest0", "rest0"],
];
$('#thirdUp').click(function () {
    document.getElementById("thirdDown").innerHTML = "3rd down";
    document.getElementById("thirdUp").innerHTML = "3rd up (selected)";
    document.getElementById("thirdUp").style.background = buttonColor;
    document.getElementById("thirdDown").style.background = buttonNormalColor;
    document.getElementById("unison").innerHTML = "unison";
    document.getElementById("unison").style.background = buttonNormalColor;
    document.getElementById("fourthDown").innerHTML = "4th down";
    document.getElementById("fourthDown").style.background = buttonNormalColor;
    document.getElementById("fourthUp").innerHTML = "4th up";
    document.getElementById("fourthUp").style.background = buttonNormalColor;

    document.getElementById("allHarmonies").innerHTML = "mixed harmonies (all of these but unisons)";
    document.getElementById("allHarmonies").style.background = buttonNormalColor;

    intervalDirection = "up";
    if (intervalDirection == "up") {
        majorCheck = true;
        getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) +
                ((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
        majorCheck = false;
    } else if (intervalDirection == "down") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "unison") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
    } else if (intervalDirection == "fourthUp") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "fourthDown") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    }
});
var slider = document.getElementById('noteLengthSlider');

noUiSlider.create(slider, {
    start: [3, 4],
    connect: true,
    step: 1,
    range: {
        'min': 1,
        'max': 4
    },
    pips: {
        mode: 'count',
        values: 4,
        stepped: false,
        density: 40
    },
});

slider.noUiSlider.on('change', function () {
    noteLengthMin = Number(slider.noUiSlider.get()[0]);
    noteLengthMax = Number(slider.noUiSlider.get()[1]);
    newQuestionTime = true;
    // alert(noteLengthMin+" sup " +noteLengthMax);
});
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
            // console.log("set to " + accompanimentVolume);
        }
    });
    $("#rhythmamount").val($("#slider-horizontal-rhythm").slider("value"));
    rhythmVolume = Number(document.getElementById("rhythmamount").value) + 0;
    // console.log("set to " + accompanimentVolume);
});
$(function () {
    $("#slider-horizontal-reference").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        value: 50,
        slide: function (event, ui) {
            $("#referenceamount").val(ui.value);
            referenceVolume = Number(document.getElementById("referenceamount").value) + 0;
            try {
                synth.set("volume", (referenceVolume / 10) - 17); //(((0.01+referenceVolume))/100-.0001));
            } catch (error) {}
        }
    });
    $("#referenceamount").val($("#slider-horizontal-reference").slider("value"));
    referenceVolume = Number(document.getElementById("referenceamount").value) + 0;
    try {
        synth.set("volume", (referenceVolume / 10) - 17); //(((0.01+referenceVolume))/100-.0001));
    } catch (error) {}

});

$(function () {
    $("#slider-horizontal-timeRequirement").slider({
        orientation: "horizontal",
        range: "min",
        min: 1,
        max: 4,
        value: 2,
        slide: function (event, ui) {
            $("#timeRequirementAmount").val(ui.value);
            globalTimeRequirement = Number(document.getElementById("timeRequirementAmount").value) + 0;
        }
    });
    $("#timeRequirementAmount").val($("#slider-horizontal-timeRequirement").slider("value"));
    globalTimeRequirement = Number(document.getElementById("timeRequirementAmount").value) + 0;

});

$(function () {
    $("#slider-horizontal-sequenceLengthAmount").slider({
        orientation: "horizontal",
        range: "min",
        min: 2,
        max: 20,
        value: 2,
        slide: function (event, ui) {
            $("#sequenceLengthAmount").val(ui.value);
            sequenceLength = Number(document.getElementById("sequenceLengthAmount").value) + 0;
            newQuestionTime = true;
        }
    });
    $("#sequenceLengthAmount").val($("#slider-horizontal-sequenceLengthAmount").slider("value"));
    sequenceLength = Number(document.getElementById("sequenceLengthAmount").value) + 0;
    // console.log("it is " + sequenceLength);
    stopAllNotes();
});

$(function () {
    $("#slider-horizontal-melodicRangeAmount").slider({
        orientation: "horizontal",
        range: "min",
        min: 1,
        max: 7,
        value: 3,
        slide: function (event, ui) {
            $("#melodicRangeAmount").val(ui.value);
            melodicRange = Number(document.getElementById("melodicRangeAmount").value) + 0;
            newQuestionTime = true;
        }
    });
    $("#melodicRangeAmount").val($("#slider-horizontal-melodicRangeAmount").slider("value"));
    melodicRange = Number(document.getElementById("melodicRangeAmount").value) + 0;
    // console.log("it is " + sequenceLength);
    newQuestionTime = true;
    stopAllNotes();
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
        }
    });
    $("#BPMAmount").val($("#slider-horizontal-BPMAmount").slider("value"));
    currentBPM = Number(document.getElementById("BPMAmount").value) + 0;
    // console.log("it is " + sequenceLength);
    stopAllNotes();
    clearAllNotes();
    newQuestionTime = true;

});
// $('#amount').change(function () {
// accompanimentVolume=Number(document.getElementById("amount").value)+0;
// console.log("set to "+accompanimentVolume);
// });

$('#thirdDown').click(function () {
    document.getElementById("thirdDown").innerHTML = "3rd down (selected)";
    document.getElementById("thirdUp").innerHTML = "3rd up";
    document.getElementById("thirdDown").style.background = buttonColor;
    document.getElementById("thirdUp").style.background = buttonNormalColor;
    document.getElementById("unison").innerHTML = "unison";
    document.getElementById("unison").style.background = buttonNormalColor;
    document.getElementById("fourthDown").innerHTML = "4th down";
    document.getElementById("fourthDown").style.background = buttonNormalColor;
    document.getElementById("fourthUp").innerHTML = "4th up";
    document.getElementById("fourthUp").style.background = buttonNormalColor;
    document.getElementById("allHarmonies").innerHTML = "mixed harmonies (all of these but unisons)";
    document.getElementById("allHarmonies").style.background = buttonNormalColor;
    intervalDirection = "down";
    if (intervalDirection == "up") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + "third above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "down") {
        majorCheck = true;
        getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
        majorCheck = false;
    } else if (intervalDirection == "unison") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
    } else if (intervalDirection == "fourthUp") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "fourthDown") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    }
});
$('#unison').click(function () {
    document.getElementById("thirdDown").innerHTML = "3rd down";
    document.getElementById("thirdUp").innerHTML = "3rd up";
    document.getElementById("unison").innerHTML = "unison (selected)";
    document.getElementById("unison").style.background = buttonColor;
    document.getElementById("thirdDown").style.background = buttonNormalColor;
    document.getElementById("thirdUp").style.background = buttonNormalColor;
    document.getElementById("fourthDown").innerHTML = "4th down";
    document.getElementById("fourthDown").style.background = buttonNormalColor;
    document.getElementById("fourthUp").innerHTML = "4th up";
    document.getElementById("fourthUp").style.background = buttonNormalColor;
    document.getElementById("allHarmonies").innerHTML = "mixed harmonies (all of these but unisons)";
    document.getElementById("allHarmonies").style.background = buttonNormalColor;
    intervalDirection = "unison";
    if (intervalDirection == "up") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one third " + thirdType + " above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "down") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one third below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "unison") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
    } else if (intervalDirection == "fourthUp") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "fourthDown") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    }

});

$('#fourthUp').click(function () {
    document.getElementById("thirdDown").innerHTML = "3rd down";
    document.getElementById("thirdUp").innerHTML = "3rd up";
    document.getElementById("unison").innerHTML = "unison";
    document.getElementById("unison").style.background = buttonNormalColor;
    document.getElementById("thirdDown").style.background = buttonNormalColor;
    document.getElementById("thirdUp").style.background = buttonNormalColor;
    document.getElementById("fourthDown").innerHTML = "4th down";
    document.getElementById("fourthDown").style.background = buttonNormalColor;
    document.getElementById("fourthUp").innerHTML = "4th up (selected)";
    document.getElementById("fourthUp").style.background = buttonColor;
    document.getElementById("allHarmonies").innerHTML = "mixed harmonies (all of these but unisons)";
    document.getElementById("allHarmonies").style.background = buttonNormalColor;
    intervalDirection = "fourthUp";
    if (intervalDirection == "up") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "down") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one third below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "unison") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
    } else if (intervalDirection == "fourthUp") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "fourthDown") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    }

});

$('#fourthDown').click(function () {
    document.getElementById("thirdDown").innerHTML = "3rd down";
    document.getElementById("thirdUp").innerHTML = "3rd up";
    document.getElementById("unison").innerHTML = "unison";
    document.getElementById("unison").style.background = buttonNormalColor;
    document.getElementById("thirdDown").style.background = buttonNormalColor;
    document.getElementById("thirdUp").style.background = buttonNormalColor;
    document.getElementById("fourthDown").innerHTML = "4th down (selected)";
    document.getElementById("fourthDown").style.background = buttonColor;
    document.getElementById("fourthUp").innerHTML = "4th up";
    document.getElementById("fourthUp").style.background = buttonNormalColor;
    document.getElementById("allHarmonies").innerHTML = "mixed harmonies (all of these but unisons)";
    document.getElementById("allHarmonies").style.background = buttonNormalColor;
    intervalDirection = "fourthDown";
    if (intervalDirection == "up") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one " + thirdType + " third above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "down") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one third below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "unison") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing that";
    } else if (intervalDirection == "fourthUp") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth above that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    } else if (intervalDirection == "fourthDown") {
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            newQuestionTime = true;
        }
        document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing one fourth below that:<p style='font-size: 20px;  color: red;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;  color: black;'> in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    }

});

$('#allHarmonies').click(function () {
    document.getElementById("thirdDown").innerHTML = "3rd down";
    document.getElementById("thirdUp").innerHTML = "3rd up";
    document.getElementById("unison").innerHTML = "unison";
    document.getElementById("unison").style.background = buttonNormalColor;
    document.getElementById("thirdDown").style.background = buttonNormalColor;
    document.getElementById("thirdUp").style.background = buttonNormalColor;
    document.getElementById("fourthDown").innerHTML = "4th down";
    document.getElementById("fourthDown").style.background = buttonNormalColor;
    document.getElementById("fourthUp").innerHTML = "4th up";
    document.getElementById("fourthUp").style.background = buttonNormalColor;
    document.getElementById("allHarmonies").innerHTML = "mixed harmonies (all of these but unisons)  (selected)";
    document.getElementById("allHarmonies").style.background = buttonColor;
    intervalDirection = "allHarmonies";
    if (intervalDirection == "allHarmonies") {
        document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;  color: black;'>Sing any 3rd, 4th, 5th, or 6th</b> <p style='font-size: 20px;  color: black;'>in the key of " + document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML + " " + keyType + "<p style='font-size: 20px;  color: black;'>Your last note was " + previousNote;
    }
    newQuestionTime = true;

});
$(function () {
    $('#referenceKeySelect').change(function () {
        var selected = document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML;
        updateScaleAdapter(selected);
        if (keyType == "major") {
            // alert("hi");
            drawKeySignature(numToKeyName(scaleAdapter));
        } else {
            drawKeySignature(numToKeyNameMinor(scaleAdapter)); //numToKeyName((scaleAdapter+9)%12));
        }
        newQuestionTime = true;
    });
});

var updateReferences = function () {
    if (keyType == "major") {
        randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter;
    } else {

        randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter;
    }
    playANote(randomNoteNum);
}

var getRomanNumeral = function (scaleIs) {
    if (scaleIs < 0) {
        scaleIs = scaleIs + 7;
    } else if (scaleIs > 6) {
        scaleIs = scaleIs - 7;
    }
    let romanN = "I";
    switch (scaleIs) {
    case 0:
        if (keyType = "major") {
            romanN = "I"
        } else {
            romanN = "i"
        }
        break;
    case 1:
        if (keyType = "major") {
            romanN = "ii"
        } else {
            romanN = "VII"
        }
        break;
    case 2:
        if (keyType = "major") {
            romanN = "iii"
        } else {
            romanN = "III"
        }
        break;
    case 3:
        if (keyType = "major") {
            romanN = "IV"
        } else {
            romanN = "iv"
        }
        break;
    case 4:
        if (keyType = "major") {
            romanN = "V"
        } else {
            romanN = "v"
        }
        break;
    case 5:
        if (keyType = "major") {
            romanN = "vi"
        } else {
            romanN = "VI"
        }
        break;
    case 6:
        if (keyType = "major") {
            romanN = "V"
        } else {
            romanN = "VII"
        }
        break;
    }
    return romanN;
}
var getMinorEnd = function (scaleIs) {
    if (scaleIs < 0) {
        scaleIs = scaleIs + 7;
    } else if (scaleIs > 6) {
        scaleIs = scaleIs - 7;
    }
    let romanN = "I";
    switch (scaleIs) {
    case 0:
        if (keyType = "major") {
            romanN = ""
        } else {
            romanN = "m"
        }
        break;
    case 1:
        if (keyType = "major") {
            romanN = "m"
        } else {
            romanN = ""
        }
        break;
    case 2:
        if (keyType = "major") {
            romanN = "m"
        } else {
            romanN = ""
        }
        break;
    case 3:
        if (keyType = "major") {
            romanN = ""
        } else {
            romanN = "m"
        }
        break;
    case 4:
        if (keyType = "major") {
            romanN = ""
        } else {
            romanN = "m"
        }
        break;
    case 5:
        if (keyType = "major") {
            romanN = "m"
        } else {
            romanN = ""
        }
        break;
    case 6:
        if (keyType = "major") {
            romanN = ""
        } else {
            romanN = ""
        }
        break;
    }
    return romanN;
}

var getChordNameAltered = function (scaleIs, chordName) {
    if (scaleIs < 0) {
        scaleIs = scaleIs + 7;
    } else if (scaleIs > 6) {
        scaleIs = scaleIs - 7;
    }
    let romanN = chordName
        romanN = romanN.substring(0, romanN.length - 1);
    switch (scaleIs) {
    case 0:
        if (keyType = "major") {
            romanN = romanN;
        } else {
            romanN = romanN + "m";
        }
        break;
    case 1:
        if (keyType = "major") {
            romanN = romanN + "m";
        } else {
            alert("it's happening")
            romanN = noteArray[10 + scaleAdapter][1] + "";
            romanN = romanN.substring(0, romanN.length - 1);
        }
        break;
    case 2:
        if (keyType = "major") {
            romanN = romanN + "m";
        } else {
            romanN = romanN;
        }
        break;
    case 3:
        if (keyType = "major") {
            romanN = romanN;
        } else {
            romanN = romanN + "m";
        }
        break;
    case 4:
        if (keyType = "major") {
            romanN = romanN;
        } else {
            romanN = romanN + "m";
        }
        break;
    case 5:
        if (keyType = "major") {
            romanN = romanN + "m";
        } else {
            romanN = romanN;
        }
        break;
    case 6:
        if (keyType = "major") {
            romanN = noteArray[7 + scaleAdapter][1] + "";
            romanN = romanN.substring(0, romanN.length - 1);
        } else {
            romanN = romanN;
        }
        break;
    }
    return romanN;
}
var updateScaleAdapter = function (selected) {
    selected = selected.trim() + "";
    switch (selected) {
    case "C":
        scaleAdapter = 0;
        keyOf = 0;
        break;
    case "C#/Db":
        scaleAdapter = 1;
        keyOf = 1;
        break;
    case "D":
        scaleAdapter = 2;
        keyOf = 2;
        break;
    case "D#/Eb":
        scaleAdapter = 3;
        keyOf = 3;
        break;
    case "Eb":
        scaleAdapter = 3;
        keyOf = 3;
        break;
    case "E":
        scaleAdapter = 4;
        keyOf = 4;
        break;
    case "F":
        scaleAdapter = 5;
        keyOf = 5;
        break;
    case "F#/Gb":
        scaleAdapter = 6;
        keyOf = 6;
        break;
    case "Gb":
        scaleAdapter = 6;
        keyOf = 6;
        break;
    case "G":
        scaleAdapter = 7;
        keyOf = 7;
        break;
    case "G#/Ab":
        scaleAdapter = 8;
        keyOf = 8;
        break;
    case "Ab":
        scaleAdapter = 8;
        keyOf = 8;
        break;
    case "A":
        scaleAdapter = 9;
        keyOf = 9;
        break;
    case "A#/Bb":
        scaleAdapter = 10;
        keyOf = 10;
        break;
    case "Bb":
        scaleAdapter = 10;
        keyOf = 10;
        break;
    case "B":
        scaleAdapter = 11;
        keyOf = 11;
        break;
    }
}

$("#my-dialog").dialog({
    modal: true,
    autoOpen: false,
    buttons: {
        Ok: function () {
            $(this).dialog("close");
        }
    }
});
// var counter = 0;

// var intervalID = setInterval(function() {

// // Update counter info
// $("#counter").html(++counter);
// // Show dialog
// $("#my-dialog").dialog("open");
// }, 1000);

$('#natMinorScale').click(function () {
    document.getElementById("natMinorScale").innerHTML = "Natural Minor Scale (selected)";
    document.getElementById("majorScale").innerHTML = "Major Scale";
    document.getElementById("natMinorScale").style.background = buttonColor;
    document.getElementById("majorScale").style.background = buttonNormalColor;
    //change all of the do re mi's...
    //make a new note
    keyType = "minor";
    document.getElementById("miButton").innerHTML = "Me";
    document.getElementById("laButton").innerHTML = "Le";
    document.getElementById("tiButton").innerHTML = "Te";
    newQuestionTime = true;
});

$('#majorScale').click(function () {
    document.getElementById("natMinorScale").innerHTML = "Natural Minor Scale";
    document.getElementById("majorScale").innerHTML = "Major Scale (selected)";
    document.getElementById("majorScale").style.background = buttonColor;
    document.getElementById("natMinorScale").style.background = buttonNormalColor;
    //change all of the do re mi's...
    //make a new note
    keyType = "major";
    document.getElementById("miButton").innerHTML = "Mi";
    document.getElementById("laButton").innerHTML = "La";
    document.getElementById("tiButton").innerHTML = "Ti";
    newQuestionTime = true;
});
$('#continuousOff').click(function () {

    document.getElementById("continuousOn").innerHTML = "On";
    document.getElementById("continuousOff").innerHTML = "Off (selected)";
    document.getElementById("continuousOff").style.background = buttonColor;
    document.getElementById("continuousOn").style.background = buttonNormalColor;
    continuous = false;
});
$('#continuousOn').click(function () {

    document.getElementById("continuousOff").innerHTML = "Off";
    document.getElementById("continuousOn").innerHTML = "On (selected)";
    document.getElementById("continuousOn").style.background = buttonColor;
    document.getElementById("continuousOff").style.background = buttonNormalColor;
    continuous = true;
});

$('#sequenceOff').click(function () {
    if (sequencePlay) {
        $(".regular-mode").slideToggle();
        $(".sequence-mode").slideToggle();
    }
    document.getElementById("sequenceOn").innerHTML = "Basic Sequence";
    document.getElementById("sequenceOff").innerHTML = "Single Notes (selected)";
    document.getElementById("sequenceOff").style.background = buttonColor;
    document.getElementById("sequenceOn").style.background = buttonNormalColor;
    document.getElementById("complexSequence").innerHTML = "Complex Sequence (beta)";
    document.getElementById("complexSequence").style.background = buttonNormalColor;
    singingTimeArray = [];
    sequenceArray = [];
    sequenceCopy = [];
    arpeggioArray = [];
    chordSequenceArray = [];
    chordSequenceCopy = [];
    buttonsCaptured = false;
    captureButtons = false;
    singingCaptured = false;
    buttonPlay = false;
    buttonStartEndTimes = [];
    sequencePlay = false;
    newQuestionTime = true;
    nonReferencePlay = false;
});
$('#sequenceOn').click(function () {
    if ((!sequencePlay) && (!nonReferencePlay)) {
        $(".regular-mode").slideToggle();
        $(".sequence-mode").slideToggle();
    }
    document.getElementById("sequenceOff").innerHTML = "Single Notes";
    document.getElementById("sequenceOn").innerHTML = "Basic Sequence (selected)";
    document.getElementById("sequenceOn").style.background = buttonColor;
    document.getElementById("sequenceOff").style.background = buttonNormalColor;
    document.getElementById("complexSequence").innerHTML = "Complex Sequence (beta)";
    document.getElementById("complexSequence").style.background = buttonNormalColor;
    slider.noUiSlider.set([4, 4]);
    sequenceLength = 2;
    singingTimeArray = [];
    sequenceArray = [];
    sequenceCopy = [];
    arpeggioArray = [];
    chordSequenceArray = [];
    chordSequenceCopy = [];
    buttonsCaptured = false;
    captureButtons = false;

    buttonPlay = false;
    singingCaptured = false;
    buttonStartEndTimes = [];
    $("#sequenceLengthAmount").val(2);
    noteLengthMin = 4;
    noteLengthMax = 4;
    sequencePlay = true;
    newQuestionTime = true;
    nonReferencePlay = false;
});
$('#complexSequence').click(function () {
    if ((!sequencePlay) && (!nonReferencePlay)) {
        $(".regular-mode").slideToggle();
        $(".sequence-mode").slideToggle();
    }
    document.getElementById("sequenceOff").innerHTML = "Single Notes";
    document.getElementById("sequenceOn").innerHTML = "Basic Sequence";
    document.getElementById("complexSequence").innerHTML = "Complex Sequence (beta)(selected)";
    document.getElementById("sequenceOn").style.background = buttonNormalColor;
    document.getElementById("sequenceOff").style.background = buttonNormalColor;
    document.getElementById("complexSequence").style.background = buttonColor;
    noteLengthMin = 1;
    noteLengthMax = 2;
    sequenceLength = 8;
    singingTimeArray = [];
    sequenceArray = [];
    sequenceCopy = [];
    arpeggioArray = [];
    chordSequenceArray = [];
    chordSequenceCopy = [];
    buttonsCaptured = false;
    captureButtons = false;

    buttonPlay = false;
    singingCaptured = false;
    buttonStartEndTimes = [];
    slider.noUiSlider.set([1, 2]);
    // $("#slider-horizontal-BPMAmount").slide(78);
    $("#BPMAmount").val(78);

    $("#sequenceLengthAmount").val(8);
    sequenceLength = 8;
    currentBPM = 78;
    // $("#slider-horizontal-BPMAmount").slider('option', 'slide').call($slider, event, ui);
    sequencePlay = true;
    newQuestionTime = true;
    nonReferencePlay = true;
});

$('#viewTuner').click(function () {

    setVisualMode("tuner");
});
$('#viewStaff').click(function () {
    setVisualMode("sheetMusic");
});
$('#viewBoth').click(function () {

    setVisualMode("both");
});
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
$('#doButton').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }

    if (keyType == "major") {
        (playANote(getNoteNumMajorScale(0) + (noteAdapter + scaleAdapter)));
    } else {
        (playANote(getNoteNumMinorScale(0) + (noteAdapter + scaleAdapter)));
    }

});
$('#reButton').click(function () {

    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }
    if (keyType == "major") {
        (playANote(getNoteNumMajorScale(1) + (noteAdapter + scaleAdapter)));
    } else {
        (playANote(getNoteNumMinorScale(1) + (noteAdapter + scaleAdapter)));
    }
});
$('#miButton').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }
    if (keyType == "major") {
        console.log("it's a " + getNoteNumMinorScale(2) + " octave " + noteAdapter + " scale note " + scaleAdapter);
        (playANote(getNoteNumMajorScale(2) + (noteAdapter + scaleAdapter)));
    } else {

        console.log("it's a " + getNoteNumMinorScale(2) + " octave " + noteAdapter + " scale note " + scaleAdapter);
        (playANote(getNoteNumMinorScale(2) + (noteAdapter + scaleAdapter)));
    }
});
$('#faButton').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }
    if (keyType == "major") {
        (playANote(getNoteNumMajorScale(3) + (noteAdapter + scaleAdapter)));
    } else {
        (playANote(getNoteNumMinorScale(3) + (noteAdapter + scaleAdapter)));
    }
});
$('#solButton').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }
    if (keyType == "major") {
        (playANote(getNoteNumMajorScale(4) + (noteAdapter + scaleAdapter)));
    } else {
        (playANote(getNoteNumMinorScale(4) + (noteAdapter + scaleAdapter)));
    }
});
$('#laButton').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }
    if (keyType == "major") {
        (playANote(getNoteNumMajorScale(5) + (noteAdapter + scaleAdapter)));
    } else {
        (playANote(getNoteNumMinorScale(5) + (noteAdapter + scaleAdapter)));
    }
});
$('#tiButton').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }
    if (keyType == "major") {
        (playANote(getNoteNumMajorScale(6) + (noteAdapter + scaleAdapter)));
    } else {
        (playANote(getNoteNumMinorScale(6) + (noteAdapter + scaleAdapter)));
    }
});
$('#do2Button').click(function () {
    justPlayingScaleFam = true;
    if (instrument == "humanVoice") {
        stopAllNotes();
    }
    if (keyType == "major") {
        (playANote(12 + (noteAdapter + scaleAdapter)));
    } else {
        (playANote(12 + (noteAdapter + scaleAdapter)));
    }
});
$('#mute-button').click(function () {
    micMute = true;
});
$('#unmute-button').click(function () {
    micMute = false;
});

$('#pauseButton').click(function () {
    if (paused) {
        document.getElementById("pauseButton").innerHTML = "Pause Timer and Sound";
        paused = false;

        if (!paused) {
            mostRecentPostingNum = randomNoteNum;
            gauge.update({
                majorTicks: [(noteArray[randomNoteNum - 1] || "")[1] || "", noteArray[randomNoteNum][1], (noteArray[randomNoteNum + 1] || "")[1] || ""],
                units: (noteArray[randomNoteNum][1] + " " + Math.floor(score)) //sets the 3 notes in there.
            });
        }
        previousPauseTimeAmount = pauseTimeAmount + 0;

    } else if (!paused) {
        try {
            synth.triggerRelease();

            stopAllNotes();
        } catch (error) {}

        document.getElementById("pauseButton").innerHTML = "Unpause Timer and Sound";
        paused = true;
        gauge.update({
            units: "Paused"
        }); //sets the 3 notes in there.
        pauseTimer();
    }

});

$('#hide-button').click(function () {
    if (!hiddenOptions) {
        document.getElementById("hide-button").innerHTML = "Show Advanced Options";
        $(".options-info").slideToggle();
        if (!accompaniment) {
            $(".accompaniment-buttons").slideToggle();

        }
        if (!arpeggioPlay) {
            $(".arpeggio-type-buttons").slideToggle();
        }

        if (!sequencePlay) {
            $(".sequence-mode").slideToggle();
        } else {
            $(".regular-mode").slideToggle();
        }
        hiddenOptions = true;
    } else if (hiddenOptions) {
        document.getElementById("hide-button").innerHTML = "Hide Advanced Options";
        $(".options-info").slideToggle();
        if (!accompaniment) {
            $(".accompaniment-buttons").slideToggle();

        }
        if (!arpeggioPlay) {
            $(".arpeggio-type-buttons").slideToggle();
        }
        if (!sequencePlay) {
            $(".sequence-mode").slideToggle();
        } else {
            $(".regular-mode").slideToggle();
        }
        hiddenOptions = false;
    }

});
$('#capture-by-sound-button').click(function () {

    $("button.tuneron").click();
    if (!singCaptureButtons) {
        try {
            synth.triggerRelease();
            stopAllNotes();
        } catch (error) {}
        singingTimeArray = [];
        sequenceArray = [];
        sequenceCopy = [];
        singingCaptured = false;
        captureSinging = true;
        buttonsCaptured = false;
        singCaptureButtons = true;
        buttonStartEndTimes = [];
    } else {
        allButtonsOn();
        buttonPlay = false;
        buttonStartEndTimes.push([0, new Date(new Date().getTime()), 0, 0]);
        if (buttonStartEndTimes.length > 1) {
            // alert("long");
            singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000, 0, findNoteDeviation(0), 0]);
            buttonStartEndTimes.shift();
            // console.log(singingTimeArray.toString());
        }
        captureSinging = false;
        singingCaptured = true;
        sequencePlay = true;
        newQuestionTime = true;
        singCaptureButtons = false;
        nonReferencePlay = true;

        arrayOfSungNotesOnly = [];
        for (i = 0; i < singingTimeArray.length; i++) {
            arrayOfSungNotesOnly.push(basicNote(singingTimeArray[i][0]));
        }
        findKey(arrayOfSungNotesOnly);
    }
});
$('#capture-by-buttons-button').click(function () {

    $("button.tuneron").click();
    if (!captureButtons) {
        try {
            synth.triggerRelease();
            stopAllNotes();
        } catch (error) {}
        // alert(rhythmSequenceArray.toString());
        singingTimeArray = [];
        sequenceArray = [];
        sequenceCopy = [];
        arpeggioArray = [];
        chordSequenceArray = [];
        chordSequenceCopy = [];
        buttonsCaptured = false;
        captureButtons = true;
        buttonStartEndTimes = [];
    } else {
        allButtonsOn();
        buttonPlay = true;
        buttonStartEndTimes.push([0, new Date(new Date().getTime())]);
        if (buttonStartEndTimes.length > 1) {
            // alert("long");
            singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000, 0]);
            buttonStartEndTimes.shift();
            // console.log(singingTimeArray.toString());
        }
        captureButtons = false;
        buttonsCaptured = true;
        singingCaptured = true;
        sequencePlay = true;
        nonReferencePlay = true;
        newQuestionTime = true;
        arrayOfSungNotesOnly = [];
        for (i = 0; i < singingTimeArray.length; i++) {
            arrayOfSungNotesOnly.push(basicNote(singingTimeArray[i][0]));
        }
        findKey(arrayOfSungNotesOnly);

        console.log(singingTimeArray.toString()); //singbybuttons
    }
});
$('#testing-button-base-case').click(function () {
    // $(".regular-mode").slideToggle();
    // $(".sequence-mode").slideToggle();
    // // if (!captureButtons) {

    // singingTimeArray = [];
    // sequenceArray = [];
    // sequenceCopy = [];
    // arpeggioArray = [];
    // chordSequenceArray = [];
    // // if (buttonStartEndTimes.length > 1) {
    // // // alert("long");
    // // singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1])/1000.01]);
    // // buttonStartEndTimes.shift();
    // // console.log(singingTimeArray.toString());
    // // }
    // singingTimeArray.push([0 + noteAdapter, 4, 0]);
    // singingTimeArray.push([2 + noteAdapter, 4, 1]);
    // rootNoteLength = 2;
    // captureButtons = false;
    // buttonsCaptured = true;
    // singingCaptured = true;
    // sequencePlay = true;
    // newQuestionTime = true;
    // arpeggiosOn.click();
    // rootOnButton.click();
    // arpeggioTwoButton.click();
    // }

    setupLevelOne();
});
$('#testing-button-test-case-one').click(function () {
    // $(".regular-mode").slideToggle();
    // $(".sequence-mode").slideToggle();
    // if (!captureButtons) {

    // singingTimeArray = [];
    // sequenceArray = [];
    // sequenceCopy = [];
    // if (buttonStartEndTimes.length > 1) {
    // // alert("long");
    // singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000, 0]);
    // buttonStartEndTimes.shift();
    // // console.log(singingTimeArray.toString());
    // }
    // singingTimeArray.push([0 + noteAdapter, 4, 0]);
    // singingTimeArray.push([2 + noteAdapter, 4, 1]);
    // rootNoteLength = 1.5;
    // captureButtons = false;
    // buttonsCaptured = true;
    // singingCaptured = true;
    // sequencePlay = true;
    // newQuestionTime = true;
    // arpeggiosOn.click();
    // rootOnButton.click();
    // arpeggioTwoButton.click();
    // }
    setupLevelTwo();
});

$('#level-three').click(function () {
    setupLevelThree();
});
$('#rhythm-sense').click(function () {
    makeAClassInvisible('questionbuttonrow');
    setupMakeYourOwnMode();
});
$('#play-your-own').click(function () {
    playYourOwn();
});
$('#level-four').click(function () {
    setupLevelFour();
});
$('#level-five').click(function () {
    setupLevelFive();
});
$('#level-six').click(function () {
    setupLevelSix();
});
$('#level-seven').click(function () {
    setupLevelSeven();
});
$('#level-eight').click(function () {
    setupLevelEight();
});
$('#level-nine').click(function () {
    setupLevelNine();
});
$('#level-ten').click(function () {
    setupLevelTen();
});

$('#autocheckbutton').click(function () {
    if (rhythmSpeedMode) {
        rhythmSpeedMode = false;
        document.getElementById('autocheckbutton').innerHTML = "Turn Auto-Check On";
        document.getElementById('submitDrums').hidden = false;
        document.getElementById('nextRhythmButton').hidden = false;
    } else {
        rhythmSpeedMode = true;
        document.getElementById('autocheckbutton').innerHTML = "Turn Auto-Check Off";
        document.getElementById('submitDrums').hidden = true;
        document.getElementById('nextRhythmButton').hidden = true;
        checkMyRhythmAnswer();

    }

});

$('#metronomeButton').click(function () {
    if (metronome) {
        metronome = false;
        document.getElementById('metronomeButton').innerHTML = "Turn Metronome On";
    } else {
        metronome = true;
        document.getElementById('metronomeButton').innerHTML = "Turn Metronome Off";

    }
    setupMetronome();

});
$('#submitDrums').click(function () {
    checkMyRhythmAnswer();
});
$('#nextRhythmButton').click(function () {
    checkForUpdatedDifficulty();
    newQuestionTime = true;
    resetStepElements();
    setupSteps();
});
$('#rhythm-level-one').click(function () {
    scoreLevel = 1;
    rhythmVolume = 50;
    clearRhythms();
    simplifiedDenominator = 4;
    randomizeKicks = true;
    backbeat = true;
    availableSteps = "quarters";

    makeAClassVisible('questionbuttonrow');
    document.getElementById('kick-row').hidden = false;
    currentLevelScore = 0;
    setupSteps();
    document.getElementById('level-progress').style.display = 'block';
    setProgressGoals("2 random steps", "3 random steps", "3 random steps, no snares", "2 random steps, no snares");
    updateProgress();
    checkForUpdatedDifficulty();
});
$('#rhythm-level-two').click(function () {
    scoreLevel = 2;
    rhythmVolume = 50;
    clearRhythms();
    simplifiedDenominator = 4;
    randomizeKicks = true;
    randomizeHats = true;
    backbeat = true;
    availableSteps = "quarters";
    currentLevelScore = 0;
    setupSteps();

    makeAClassVisible('questionbuttonrow');
	document.getElementById('kick-row').hidden=false;
	document.getElementById('hat-row').hidden=false;	
    // document.getElementById('snare-row').hidden=false;
    document.getElementById('level-progress').style.display = 'block';
    setProgressGoals("2 random steps", "3 random steps", "3 random steps, no snares", "2 random steps, no snares");
    updateProgress();
    checkForUpdatedDifficulty();
});
$('#rhythm-level-three').click(function () {
    scoreLevel = 3;
    rhythmVolume = 50;
    clearRhythms();
    randomizeKicks = true;
    simplifiedDenominator = 2;
    backbeat = true;
    availableSteps = "eighths";

    currentLevelScore = 0;
    setupSteps();
    makeAClassVisible('questionbuttonrow');
document.getElementById('kick-row').hidden=false;
document.getElementById('hat-row').hidden=false;
document.getElementById('snare-row').hidden=false;
    document.getElementById('level-progress').style.display = 'block';
    setProgressGoals("2 random steps", "4 random steps", "6 random steps", "4 random steps, no snares");
    updateProgress();
    checkForUpdatedDifficulty();
});
$('#rhythm-level-four').click(function () {
    scoreLevel = 4;
    rhythmVolume = 50;
    simplifiedDenominator = 2;
    clearRhythms();
    randomizeKicks = true;
    randomizeHats = true;
    backbeat = true;
    availableSteps = "eighths";
    currentLevelScore = 0;
    setupSteps();
    makeAClassVisible('questionbuttonrow');
document.getElementById('kick-row').hidden=false;
document.getElementById('hat-row').hidden=false;
document.getElementById('snare-row').hidden=false;
    document.getElementById('level-progress').style.display = 'block';
    setProgressGoals("2 random steps", "4 random steps", "6 random steps", "4 random steps, no snares");
    updateProgress();
    checkForUpdatedDifficulty();
});
$('#rhythm-level-five').click(function () {
    scoreLevel = 5;
    rhythmVolume = 50;
    clearRhythms();
    randomizeKicks = true;
    backbeat = true;

    availableSteps = "sixteenths";
    simplifiedDenominator = 1;

    currentLevelScore = 0;
    setupSteps();
    makeAClassVisible('questionbuttonrow');
document.getElementById('kick-row').hidden=false;
document.getElementById('hat-row').hidden=false;
document.getElementById('snare-row').hidden=false;
    document.getElementById('level-progress').style.display = 'block';
    setProgressGoals("3 random steps", "4 random steps", "6 random steps", "6 random steps, no snares");
    updateProgress();
    checkForUpdatedDifficulty();
});
$('#rhythm-level-six').click(function () {
    scoreLevel = 6;
    rhythmVolume = 50;
    simplifiedDenominator = 1;
    clearRhythms();
    randomizeKicks = true;
    randomizeHats = true;
    backbeat = true;
    availableSteps = "sixteenths";
    currentLevelScore = 0;
    setupSteps();
    makeAClassVisible('questionbuttonrow');
document.getElementById('kick-row').hidden=false;
document.getElementById('hat-row').hidden=false;
document.getElementById('snare-row').hidden=false;
    document.getElementById('level-progress').style.display = 'block';
    setProgressGoals("3 random steps", "4 random steps", "6 random steps", "6 random steps, no snares");
    updateProgress();
    checkForUpdatedDifficulty();
});

$('#rhythm-level-seven').click(function () {
    scoreLevel = 6;
    rhythmVolume = 50;
    simplifiedDenominator = 1;
    clearRhythms();
    randomizeKicks = true;
    randomizeHats = true;
    randomizeClaps = true;
    backbeat = true;
    availableSteps = "sixteenths";
    currentLevelScore = 0;
    setupSteps();
    makeAClassVisible('questionbuttonrow');
document.getElementById('kick-row').hidden=false;
document.getElementById('hat-row').hidden=false;
document.getElementById('snare-row').hidden=false;
document.getElementById('clap-row').hidden=false;
    document.getElementById('level-progress').style.display = 'block';
    setProgressGoals("3 random steps", "4 random steps", "6 random steps", "6 random steps, no snares");
    updateProgress();
    checkForUpdatedDifficulty();
});

$('#rhythm-level-eight').click(function () {
    scoreLevel = 6;
    rhythmVolume = 50;
    simplifiedDenominator = 1;
    clearRhythms();
    randomizeKicks = true;
    randomizeHats = true;
    randomizeClaps = true;
    randomizeInst5 = true;
    backbeat = true;
    availableSteps = "sixteenths";
    currentLevelScore = 0;
    setupSteps();

document.getElementById('kick-row').hidden=false;
document.getElementById('hat-row').hidden=false;
document.getElementById('snare-row').hidden=false;
document.getElementById('clap-row').hidden=false;
document.getElementById('inst5-row').hidden=false;
    makeAClassVisible('questionbuttonrow');
    // document.getElementById('kick-row').hidden=false;
    // document.getElementById('snare-row').hidden=false;
    // document.getElementById('hat-row').hidden=false;
    document.getElementById('level-progress').style.display = 'block';
    setProgressGoals("3 random steps", "4 random steps", "6 random steps", "6 random steps, no snares");
    updateProgress();
    checkForUpdatedDifficulty();
});

$('#rhythm-level-nine').click(function () {
    // scoreLevel=6;
    // rhythmVolume = 50;
    // simplifiedDenominator=1;
    // clearRhythms();
    // randomizeKicks=true;
    // randomizeHats=true;
    // backbeat=true;
    // availableSteps="sixteenths";
    // currentLevelScore=0;
    // setupSteps();
    // makeAClassVisible('questionbuttonrow');

    // document.getElementById('kick-row').hidden=false;
    // document.getElementById('snare-row').hidden=false;
    // document.getElementById('hat-row').hidden=false;
    // document.getElementById('level-progress').style.display = 'block';
    // setProgressGoals("3 random steps", "4 random steps", "6 random steps", "6 random steps, no snares");
    // updateProgress();
    // checkForUpdatedDifficulty();
});
$('#rhythmFreestyleButton').click(function () {
    scoreLevel = "freestyle";
    rhythmVolume = 50;
    if (rhythmFreestyle) {
        rhythmFreestyle = false;
        document.getElementById('rhythmFreestyleButton').innerHTML = "Play What I have Showing";
    } else {
        rhythmFreestyle = true;
        document.getElementById('rhythmFreestyleButton').innerHTML = "Don't Play What Is Showing (Ex: In levels, play the prompt)";
    }
    sequenceStarted = false;
    newQuestionTime = true;
});
$('#testing-button-test-case-zero').click(function () {
    // $(".regular-mode").slideToggle();
    // $(".sequence-mode").slideToggle();
    // if (!captureButtons) {

    // singingTimeArray = [];
    // sequenceArray = [];
    // sequenceCopy = [];
    // if (buttonStartEndTimes.length > 1) {
    // // alert("long");
    // singingTimeArray.push([buttonStartEndTimes[0][0], (buttonStartEndTimes[1][1] - buttonStartEndTimes[0][1]) / 1000, 0]);
    // buttonStartEndTimes.shift();
    // // console.log(singingTimeArray.toString());
    // }
    // singingTimeArray.push([0 + noteAdapter, 4, 0]);
    // singingTimeArray.push([2 + noteAdapter, 4, 1]);
    // captureButtons = false;
    // buttonsCaptured = true;
    // singingCaptured = true;
    // sequencePlay = true;
    // newQuestionTime = true;
    // arpeggiosOff.click();
    // rootOffButton.click();
    // }

    setupFreestyleMode();
});
$('#accompanimentOn').click(turnAccompanimentOn);
function turnAccompanimentOn() {
    if (!accompaniment) {
        $(".accompaniment-buttons").slideToggle();

        if (!arpeggioPlay) {
            $(".arpeggio-type-buttons").slideToggle();
        }
    }
    document.getElementById("accompanimentOff").innerHTML = "Off";
    document.getElementById("accompanimentOn").innerHTML = "On (selected)";
    document.getElementById("accompanimentOn").style.background = buttonColor;
    document.getElementById("accompanimentOff").style.background = buttonNormalColor;

    accompaniment = true;
    chordIsDone = true;
    if (arpeggioPlay) {
        if (rootPlay) {
            startRootTimer();
            startArpeggioTimer();
        } else {
            startArpeggioTimer();
        }
    }
    if (rhythmPlay) {
        startRhythmTimer();
        startKickTimer();
        startClapTimer();
        startHatTimer();
        startSnareTimer();
    }
    playItAgain();
}

$('#accompanimentOff').click(turnAccompanimentOff);

function turnAccompanimentOff() {
    if (accompaniment) {
        $(".accompaniment-buttons").slideToggle();
        if (!arpeggioPlay) {
            $(".arpeggio-type-buttons").slideToggle();
        }

    }
    document.getElementById("accompanimentOff").innerHTML = "Off (selected)";
    document.getElementById("accompanimentOn").innerHTML = "On";
    document.getElementById("accompanimentOn").style.background = buttonNormalColor;
    document.getElementById("accompanimentOff").style.background = buttonColor;
    accompaniment = false;
    playItAgain();
}

$('#arpeggiosOn').click(function () {
    if (!arpeggioPlay) {
        $(".arpeggio-type-buttons").slideToggle();
    }
    document.getElementById("arpeggiosOff").innerHTML = "Off";
    document.getElementById("arpeggiosOn").innerHTML = "On (selected)";
    document.getElementById("arpeggiosOn").style.background = buttonColor;
    document.getElementById("arpeggiosOff").style.background = buttonNormalColor;
    arpeggioPlay = true;
    playItAgain();
});
$('#arpeggiosOff').click(function () {
    if (arpeggioPlay) {
        $(".arpeggio-type-buttons").slideToggle();
    }
    document.getElementById("arpeggiosOff").innerHTML = "Off (selected)";
    document.getElementById("arpeggiosOn").innerHTML = "On";
    document.getElementById("arpeggiosOn").style.background = buttonNormalColor;
    document.getElementById("arpeggiosOff").style.background = buttonColor;
    arpeggioPlay = false;
});
$('#chord-progression-roman').click(function () {
    // if (!rhythmPlay) {
    // $(".rhythm-type-buttons").slideToggle();
    // }
    let romanString = "Chord Progression";
    if (chordSequenceCopy.length > 0) {
        for (i = 0; i < chordSequenceCopy.length; i++) {
            romanString = romanString + "-" + getRomanNumeral(chordSequenceCopy[i][2]);
        }
        $("#alertMessage").html(romanString);
        // // Show dialog
        $("#my-dialog").dialog("open");
        // alert(romanString);
    }
});

function alertify(messageThis) {
    $("#alertMessage").html(messageThis);
    // // Show dialog
    $("#my-dialog").dialog("open");
}

$('#chord-progression-names').click(function () {
    // if (!rhythmPlay) {
    // $(".rhythm-type-buttons").slideToggle();
    // }
    let romanString = "Chord Pressiong";
    if (chordSequenceCopy.length > 0) {

        for (i = 0; i < chordSequenceCopy.length; i++) {
            romanString = romanString + "-" + getChordNameAltered(chordSequenceCopy[i][2], noteArray[chordSequenceCopy[i][0]][1]);
        }
        $("#alertMessage").html(romanString);
        // // Show dialog
        $("#my-dialog").dialog("open");
    }
});
$('#chord-progression-next').click(function () {
    // if (!rhythmPlay) {
    // $(".rhythm-type-buttons").slideToggle();
    // }
    if (singingCaptured) {
        // alert ("yeah");
        newQuestionTime = true;
    }
});
$('#rhythmOn').click(function () {
    // if (!rhythmPlay) {
    // $(".rhythm-type-buttons").slideToggle();
    // }
    document.getElementById("rhythmOff").innerHTML = "Off";
    document.getElementById("rhythmOn").innerHTML = "On (selected)";
    document.getElementById("rhythmOn").style.background = buttonColor;
    document.getElementById("rhythmOff").style.background = buttonNormalColor;
    rhythmPlay = true;
    playItAgain();
});
$('#rhythmOff').click(function () {
    // if (rhythmPlay) {
    // $(".rhythm-type-buttons").slideToggle();
    // }
    document.getElementById("rhythmOff").innerHTML = "Off (selected)";
    document.getElementById("rhythmOn").innerHTML = "On";
    document.getElementById("rhythmOn").style.background = buttonNormalColor;
    document.getElementById("rhythmOff").style.background = buttonColor;
    rhythmPlay = false;
});
$('#inversionsOn').click(function () {
    document.getElementById("inversionsOff").innerHTML = "Off";
    document.getElementById("inversionsOn").innerHTML = "On (selected)";
    document.getElementById("inversionsOn").style.background = buttonColor;
    document.getElementById("inversionsOff").style.background = buttonNormalColor;
    inversionsAreOn = true;
});
$('#inversionsOff').click(function () {
    document.getElementById("inversionsOff").innerHTML = "Off (selected)";
    document.getElementById("inversionsOn").innerHTML = "On";
    document.getElementById("inversionsOn").style.background = buttonNormalColor;
    document.getElementById("inversionsOff").style.background = buttonColor;
    inversionsAreOn = false;
});
$('#arpeggio-zero').click(function () {
    document.getElementById("arpeggio-two").innerHTML = "C";
    document.getElementById("arpeggio-one").innerHTML = "B";
    document.getElementById("arpeggio-zero").innerHTML = "A (selected)";
    document.getElementById("arpeggio-zero").style.background = buttonColor;
    document.getElementById("arpeggio-one").style.background = buttonNormalColor;
    document.getElementById("arpeggio-two").style.background = buttonNormalColor;
    arpeggioChoice = 0;
    playItAgain();

});
$('#arpeggio-one').click(function () {
    document.getElementById("arpeggio-two").innerHTML = "C";
    document.getElementById("arpeggio-one").innerHTML = "B (selected)";
    document.getElementById("arpeggio-zero").innerHTML = "A";
    document.getElementById("arpeggio-zero").style.background = buttonNormalColor;
    document.getElementById("arpeggio-one").style.background = buttonColor;
    document.getElementById("arpeggio-two").style.background = buttonNormalColor;
    arpeggioChoice = 1;

    playItAgain();

});
$('#arpeggio-two').click(function () {
    document.getElementById("arpeggio-two").innerHTML = "C (selected)";
    document.getElementById("arpeggio-one").innerHTML = "B";
    document.getElementById("arpeggio-zero").innerHTML = "A";
    document.getElementById("arpeggio-zero").style.background = buttonNormalColor;
    document.getElementById("arpeggio-one").style.background = buttonNormalColor;
    document.getElementById("arpeggio-two").style.background = buttonColor;
    arpeggioChoice = 2;

    playItAgain();

});
$('#play-root-on').click(function () {
    document.getElementById("play-root-off").innerHTML = "Off";
    document.getElementById("play-root-on").innerHTML = "On (selected)";
    document.getElementById("play-root-on").style.background = buttonColor;
    document.getElementById("play-root-off").style.background = buttonNormalColor;
    rootPlay = true;
    playItAgain();
});
$('#play-root-off').click(function () {
    document.getElementById("play-root-off").innerHTML = "Off (selected)";
    document.getElementById("play-root-on").innerHTML = "On";
    document.getElementById("play-root-on").style.background = buttonNormalColor;
    document.getElementById("play-root-off").style.background = buttonColor;
    rootPlay = false;
    playItAgain();
});
$('#useSynth').click(function () {
    document.getElementById("usePiano").innerHTML = "Use Piano";
    document.getElementById("useHumanVoice").innerHTML = "Use Human Voice";
    document.getElementById("useSynth").innerHTML = "Use Synth (selected)";
    document.getElementById("useSynth").style.background = buttonColor;
    document.getElementById("useHumanVoice").style.background = buttonNormalColor;
    document.getElementById("usePiano").style.background = buttonNormalColor;
    instrument = "synth";
    try {
        synth.triggerRelease();

        stopAllNotes();
    } catch (error) {}
    playItAgain();

});

$('#useHumanVoice').click(function () {
    document.getElementById("usePiano").innerHTML = "Use Piano";
    document.getElementById("useHumanVoice").innerHTML = "Use Human Voice (selected)";
    document.getElementById("useSynth").innerHTML = "Use Synth";
    document.getElementById("useSynth").style.background = buttonNormalColor;
    document.getElementById("useHumanVoice").style.background = buttonColor;
    document.getElementById("usePiano").style.background = buttonNormalColor;
    instrument = "humanVoice";
    // alert ("human");
    try {
        synth.triggerRelease();
    } catch (error) {}
    try {
        stopAllNotes();
    } catch (error) {}
    playItAgain();
});

$('#usePiano').click(function () {
    document.getElementById("usePiano").innerHTML = "Use Piano (selected)";
    document.getElementById("useSynth").innerHTML = "Use Synth";
    document.getElementById("useHumanVoice").innerHTML = "Use Human Voice";
    document.getElementById("usePiano").style.background = buttonColor;
    document.getElementById("useHumanVoice").style.background = buttonNormalColor;
    document.getElementById("useSynth").style.background = buttonNormalColor;
    instrument = "piano";
    try {
        synth.triggerRelease();
    } catch (error) {}
    try {
        stopAllNotes();
    } catch (error) {}
    playItAgain();
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

    sequenceCopy.forEach(element => element[0] = element[0] - noteAdapter + 0);
    noteAdapter = 12;
    sequenceCopy.forEach(element => element[0] = element[0] + noteAdapter + 0);
    updateReferences();
    // updateUnlockedLevelsByUser("test3", 3);
    currentLevelScore = 40;
    playItAgain();
});

function addLevelCompleted(nameis, emailis, levelcomplete) {
    // alert (levelcomplete);
    // let levelcompletenumber = 0;
    // if (levelcomplete === "levelOne") {
    // levelcompletenumber = 1;
    // } else if (levelcomplete === "levelTwo") {
    // levelcompletenumber = 2;
    // } else if (levelcomplete === "levelThree") {
    // levelcompletenumber = 3;
    // } else if (levelcomplete === "levelFour") {
    // levelcompletenumber = 4;
    // } else if (levelcomplete === "levelFive") {
    // levelcompletenumber = 5;
    // } else if (levelcomplete === "levelSix") {
    // levelcompletenumber = 6;
    // } else if (levelcomplete === "levelSeven") {
    // levelcompletenumber = 7;
    // } else if (levelcomplete === "levelEight") {
    // levelcompletenumber = 8;
    // } else if (levelcomplete === "levelNine") {
    // levelcompletenumber = 9;
    // } else if (levelcomplete === "levelTen") {
    // levelcompletenumber = 10;
    // }
    var data = {
        email: emailis,
        name: nameis,
        levelcomplete: levelcomplete,
    }
    db.collection("rhythmsenselogins").add(data).then(function (result) {
        // list();
    })
    .catch(function (error) {
        console.warn("failed to save contact");
    });
}
// function insertRowIntoTable(data){
// 	const table = document.querySelector('table tbody');
// 	const isTableData = table.querySelector('.no-data');
// 	let tableHtml = "<tr>";

// for (var key in data){
// 	if (data.hasOwnProperty(key)){
// 		if (key === 'dateAdded'){
// 			data[key] = new Date(data[key]).toLocaleString();

// 		}
// 		tableHtml += `<td>${data[key]}</td>`;
// 	}
// }
// function updateUnlockedLevelsByUser(nameToFetch, emailToFetch){ //7-26-2020  THIS CODE IS FROM THE OLD SERVER!
// // const searchValue = prompt ("type test3");
// whoItIsUsingThis=nameToFetch+"";
// theirEmail=emailToFetch+"";
// document.getElementById('welcomefam').innerHTML='Welcome to Harmony Sense, '+nameToFetch+'!<br><br>Select your level from above, or select freestyle to open up all of the options and settings (how it used to look before).';
// fetch('http://localhost:5000/search/' + nameToFetch+"")
// .then(response => response.json())
// .then(data => loadHTMLTable(data['data']));
// }


// function loadHTMLTable(data){

// if (data.length ===0){
// alertify("Welcome! Proceed to Level 1");
// // return;
// }
// // let tableHtml = "";
// let levelNumber=0;
// data.forEach(function ({id, name, date_added, levelcomplete}){
// // console.log(levelcomplete);
// if (levelcomplete>levelNumber){
// levelNumber=levelcomplete+0;
// }
// // console.log("now it is "+levelcomplete);
// // tableHtml += "<tr>";
// // tableHtml += `<td>${id}</td>`;
// // tableHtml += `<td>${name}</td>`;
// // tableHtml += `<td>${new Date(date_added).toLocaleString()}</td>`;
// // tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Delete</td>`;
// // tableHtml += `<td><button class="edit-row-btn" data-id=${id}>Edit</td>`;
// // tableHtml += "</tr>";
// });
// // table.innerHTML = tableHtml;
// ourLevelNumber=levelNumber+0;
// updateTheLevel(levelNumber);
// }


var updateUnlockedLevelsByUser = function (nameis, emailis) {
    whoItIsUsingThis = nameis + "";
    theirEmail = emailis + "";
    document.getElementById('login-button').innerHTML = whoItIsUsingThis + " (Logged in), (Click to login as someone else)"
        // document.getElementById('welcomefam').hidden=false;
        // document.getElementById('welcomefamprelogin').hidden=true;

        // var emailis= prompt ('what you sent fool?');
        // var nameis= prompt ('what you called fool?');
        document.getElementById('welcomefam').innerHTML = 'Welcome to Harmony Sense, ' + nameis + '!<br><br>Select your level from above, or select freestyle to open up all of the options and settings (how it used to look before).';
    let levelNumber = 0;
    // alert (loadDatabase.length);
    for (var loadlistplace = 0; loadlistplace < loadDatabase.length; loadlistplace++) {
        db.collection("rhythmsenselogins").doc(loadDatabase[loadlistplace]).get().then(function (doc) {
            if (doc.exists) {
                // alert ("hi") we got in here
                var data = doc.data();
                console.warn(data.email);
                console.warn(data.name);
                if ((JSON.stringify(emailis) === JSON.stringify(data.email)) && (JSON.stringify(whoItIsUsingThis) === JSON.stringify(data.name))) {
                    let blob = Number(data.levelcomplete) + 0;
                    console.log("you have the score " + blob + " " + levelNumber);
                    try {
                        if (blob > levelNumber) {

                            levelNumber = blob + 0;
                            // alert (levelNumber);


                        }

                    } catch (e) {}

                }

                ourLevelNumber = levelNumber + 0;
                updateTheLevel(levelNumber);
            } else {
                console.error("No such record");
            }
        }).catch(function (error) {
            console.error(error);
            console.error("failed to read contact");
        });

    }
}

$('#octave3').click(function () {
    document.getElementById("octave2").style.background = buttonNormalColor;
    document.getElementById("octave3").style.background = buttonColor;
    document.getElementById("octave4").style.background = buttonNormalColor;
    document.getElementById("octave2").innerHTML = "Octave 2";
    document.getElementById("octave3").innerHTML = "Octave 3 (selected)";
    document.getElementById("octave4").innerHTML = "Octave 4";
    document.getElementById("octave5").innerHTML = "Octave 5";
    document.getElementById("octave5").style.background = buttonNormalColor;

    sequenceCopy.forEach(element => element[0] = element[0] - noteAdapter + 0);
    noteAdapter = 24;
    sequenceCopy.forEach(element => element[0] = element[0] + noteAdapter + 0);
    updateReferences();

    playItAgain();
});
$('#addAPerson').click(function () {
    let personName = prompt("what is the name?");

    let levelCompleted = prompt("what is the max level completed");

    addLevelCompleted(personName, theirEmail, levelCompleted);

    // updateUnlockedLevelsByUser(whoItIsUsingThis);
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
    sequenceCopy.forEach(element => element[0] = element[0] - noteAdapter + 0);
    noteAdapter = 36;
    sequenceCopy.forEach(element => element[0] = element[0] + noteAdapter + 0);
    updateReferences();

    playItAgain();
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
    sequenceCopy.forEach(element => element[0] = element[0] - noteAdapter + 0);
    noteAdapter = 48;
    sequenceCopy.forEach(element => element[0] = element[0] + noteAdapter + 0);
    updateReferences();

    playItAgain();
});

$('#playAgainButton').click(playItAgain);

$('#login-button').click(logintothisapp);

function playItAgain() {
    r = randomNoteNum;

    if (!paused) {
        mostRecentPostingNum = r;
        try {
            // gauge.update({
            // majorTicks: [(noteArray[r - 1] || "")[1] || "", noteArray[r][1], (noteArray[r + 1] || "")[1] || ""],
            // units: (noteArray[r][1] + " " + Math.floor(score)) //sets the 3 notes in there.
            // });
        } catch (error) {}
    } else {
        // gauge.update({
        // units: "Paused"
        // }); //sets the 3 notes in there.
    }
    if (arpeggioPlay) {
        arpeggioSequenceArray = [];
        rootSequenceArray = [];
        arpeggioSequenceCopy = [];
        rootSequenceCopy = [];
        arpeggioAdded = false;
    }
    stopAllNotes();
    clearAllNotes();
    // alert (sequenceArray.length);
    numOfThisNoteInSequence = 0;
    firstNotationToCome = true;
    // setupAFirstNote = false;
    // alert (sequencePlay);
    if ((sequencePlay)) {
        if (nonReferencePlay) {

            // sequenceArray= sequenceCopy.slice();
            chordSequenceStarted = false;
            chordSequenceArray = chordSequenceCopy.slice();
        } else {
            sequenceStarted = false;
            sequenceArray = sequenceCopy.slice();

            console.error(sequenceArray.toString());
        }
    } else {
        // alert ("not a sequence");
        makeAndShowANote(randomNoteNum, 2, "referenceNote");
        numOfThisNoteInSequence++;
        playANote(randomNoteNum);
    }

    // var audio = document.getElementById(soundId(noteArray[randomNoteNum][1]));
    // //	alert (""+soundId(getNoteName(note)));
    // // if audio(const playPromise = audio.play();
    // // if (playPromise !== null) {
    // // playPromise.catch(() => {
    // // audio.pause();
    // // audio.volume = 1.0;
    // // if (audio.readyState >= 2) {
    // // audio.currentTime = 0;
    // // // audio.play();
    // // }
    // // })
    // // }
    // // if (audio) {

    // // }

    // //press();
    // //playNote(midiNoteToFrequency(note));
    // //press(note);
    // //if (velocity > 0) {
    // if (audio) {
    // audio.pause();
    // audio.volume = 1.0;
    // if (audio.readyState >= 2) {
    // audio.currentTime = 0;
    // var promise = audio.play();

    // if (promise !== undefined) {
    // promise.then(_ => {
    // // Autoplay started!
    // }).catch(error => {
    // //alert ("it worked");
    // // Autoplay was prevented.
    // // Show a "Play" button so that user can start playback.
    // });
    // }

    // }
    // }

}

$('#playTargetButton').click(function () {
    answerRevealed = true;
    if (intervalDirection == "up") {
        var legalInterval = getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
    } else if (intervalDirection == "down") {
        var legalInterval = getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
    } else if (intervalDirection == "unison") {
        var legalInterval = 0; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
    } else if (intervalDirection == "fourthUp") {
        var legalInterval = 5; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
    } else if (intervalDirection == "fourthDown") {
        var legalInterval = 7; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
    } else if (intervalDirection == "allHarmonies") {
        if (keyType == "major") {
            // console.log("new is " + newLastRandomScaleNum);
            randomScaleNum = getScaleNumMajorNote(randomNoteNum);
        } else {
            // alert ("hi");
            // console.log("newMinor is " + newLastRandomScaleNum);
            randomScaleNum = getScaleNumMinorNote(randomNoteNum);
        }
        var legalInterval = getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
        var legalIntervalTwo = getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
        if (toSolFej(keyOf, randomScaleNum) == "Fa") {
            var legalIntervalThree = 7;
        } else {
            var legalIntervalThree = 5;
        }
        var legalIntervalFour = 7;

    }
    r = randomNoteNum + legalInterval;
    // alert ('r');
    if (!paused) {
        mostRecentPostingNum = r;
        // gauge.update({
        // majorTicks: [(noteArray[r - 1] || "")[1] || "", noteArray[r][1], (noteArray[r + 1] || "")[1] || ""],
        // units: (noteArray[r][1] + " " + Math.floor(score)) //sets the 3 notes in there.
        // });
    } else {
        // gauge.update({
        // units: "Paused"
        // }); //sets the 3 notes in there.
    }
    // if (arpeggioPlay) {
    // arpeggioSequenceArray = [];
    // rootSequenceArray = [];
    // arpeggioSequenceCopy = [];
    // rootSequenceCopy = [];
    // arpeggioAdded = false;
    // }

    // makeAndShowANote(randomNoteNum, 2, "referenceNote");
    let tempInstrument = instrument + "";
    stopVoices();
    instrument = "humanVoice"
        playANote(r);
    instrument = tempInstrument + "";

    // var audio = document.getElementById(soundId(noteArray[randomNoteNum][1]));
    // //	alert (""+soundId(getNoteName(note)));
    // // if audio(const playPromise = audio.play();
    // // if (playPromise !== null) {
    // // playPromise.catch(() => {
    // // audio.pause();
    // // audio.volume = 1.0;
    // // if (audio.readyState >= 2) {
    // // audio.currentTime = 0;
    // // // audio.play();
    // // }
    // // })
    // // }
    // // if (audio) {

    // // }

    // //press();
    // //playNote(midiNoteToFrequency(note));
    // //press(note);
    // //if (velocity > 0) {
    // if (audio) {
    // audio.pause();
    // audio.volume = 1.0;
    // if (audio.readyState >= 2) {
    // audio.currentTime = 0;
    // var promise = audio.play();

    // if (promise !== undefined) {
    // promise.then(_ => {
    // // Autoplay started!
    // }).catch(error => {
    // //alert ("it worked");
    // // Autoplay was prevented.
    // // Show a "Play" button so that user can start playback.
    // });
    // }

    // }
    // }

});
// songWritingWorkshop();
auth();
document.getElementById('card-section').style.display = 'none';
// updateUnlockedLevelsByUser(prompt ("what is your name?"));

setupRhythmSense();
hideAllLevels();
// makeARowPulldownVisible("clave-choice"); // for testing purposes
// makeARowPulldownVisible("kick-choice"); // for testing purposes
makeARowPulldownInvisible("steprowpulldown"); // for testing purposes
initTuner();
window.tuner_rand = 1111111;