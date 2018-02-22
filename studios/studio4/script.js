'use strict'

console.log("reading js");

// For control buttons
var circle = document.getElementById('circle');
var square = document.getElementById('square');
var clear = document.getElementById('clear');

// For canvas and context (to allow drawing)
var sketch = document.getElementById('sketch');
var ctx = sketch.getContext('2d');

// For audio
var audioCtrl = document.getElementById('play-pause');
var song, amp, volLevel, pulse;
var play = true;

// For circle/square booleans
var circ;
var squa;


// Preload music to prevent buffering
function preload() {
    song = loadSound("https://kylinna.github.io/des157/audio/synthy.mp3");
}

// Specify amplitude and link music to variable
function setup() {
    amp = new p5.Amplitude();
    amp.setInput(song);
}

// When the circle button is clicked...
circle.addEventListener('click', function() {
    circ = true;
    squa = false;

    circle.style.backgroundColor = "rgba(255, 255, 255, .15)";
    square.style.backgroundColor = "rgba(255, 255, 255, .5)";
});

// When the square button is clicked...
square.addEventListener('click', function() {
    squa = true;
    circ = false;

    square.style.backgroundColor = "rgba(255, 255, 255, .15)";
    circle.style.backgroundColor = "rgba(255, 255, 255, .5)";
});

// When the clear button is clicked...
clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, sketch.width, sketch.height);

    circle.style.backgroundColor = "rgba(255, 255, 255, .5)";
    square.style.backgroundColor = "rgba(255, 255, 255, .5)";
});

// Draw a circle or square wherever the canvas is clicked
sketch.addEventListener('click', function(stamp) {
    volLevel = amp.getLevel();
    pulse = map(volLevel, 0, 1, 0, 200);

    ctx.strokeStyle = "rgba(255, 255, 255, .5)";

    if (circ == true) {
        ctx.lineWidth = "2.5";
        ctx.beginPath();
        ctx.arc(stamp.clientX, stamp.clientY, pulse, 0, 2 * Math.PI);
        ctx.stroke();
    } else if (squa == true) {
        ctx.lineWidth = "5";
        ctx.beginPath();
        ctx.rect(stamp.clientX, stamp.clientY, pulse, pulse);
        ctx.stroke();
    }
});

// When the play/pause button is clicked...
audioCtrl.addEventListener('click', music);

// Play/pause the song and switch the icon
function music() {
    if (play) {
        audioCtrl.src = "images/pause.png";
        song.play();

    } else {
        audioCtrl.src = "images/play.png";
        song.pause();
    }
    play = !play;
}
