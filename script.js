/*

Kylinna Williams
DES 157-001, Winter 2018
Studio 0: "script.js"

Description: Interactive piano banner for class portal. Notes can be played by clicking on the white keys.

*/

var x = [32, 79, 173, 220, 267, 361, 408, 502, 549, 596, 690, 738]; // Array of values for black key x positions
var activeWhite; // Variable for the color of a key when it is pressed down
var tone;

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    activeWhite = color(244, 96, 96); // Set active white key color
    tone = new p5.Oscillator(); // Use oscillator to facilitate the piano notes from wave frequencies
}

function draw() {
    // Create piano keys
    for (var i = 0; i < width; i += width / 17) {
        for (var j = 0; j < 12; j++) {

            // Draw white keys
            fill(255);
            rect(i, 0, width / 17, height);

            // Make it so that when one of the keys are clicked on, they change color and play the appropriate tone
            if ((mouseIsPressed) && (mouseY < 250) && (mouseX < width / 17) && (i == 0)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // C3 pressed
                tone.start(.05); // Start in .05 seconds after clicking (to get rid of the clipping sound)
                tone.freq(130.813); // Sets frequency to play the correct tone
                tone.amp(.1); // Lower the volume
                tone.fade(0, 1); // Fade the tone out over the span of one second (also to get rid of clipping sound and so it doesn't end so abruptly)
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 2 * width / 17) && (mouseX > width / 17) && (i == width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // D3 pressed
                tone.start(.05);
                tone.freq(146.832);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 3 * width / 17) && (mouseX > 2 * width / 17) && (i == 2 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // E3 pressed
                tone.start(.05);
                tone.freq(164.814);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 4 * width / 17) && (mouseX > 3 * width / 17) && (i == 3 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // F3 pressed
                tone.start(.05);
                tone.freq(174.614);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 5 * width / 17) && (mouseX > 4 * width / 17) && (i == 4 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // G3 pressed
                tone.start(.05);
                tone.freq(195.998);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 6 * width / 17) && (mouseX > 5 * width / 17) && (i > 5 * width / 17) && (i < 6 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // A3 pressed
                tone.start(.05);
                tone.freq(220.000);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 7 * width / 17) && (mouseX > 6 * width / 17) && (i == 6 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // B3 pressed
                tone.start(.05);
                tone.freq(246.942);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 8 * width / 17) && (mouseX > 7 * width / 17) && (i == 7 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // C4 pressed
                tone.start(.05);
                tone.freq(261.626);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 9 * width / 17) && (mouseX > 8 * width / 17) && (i == 8 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // D4 pressed
                tone.start(.05);
                tone.freq(293.665);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 10 * width / 17) && (mouseX > 9 * width / 17) && (i > 9 * width / 17) && (i < 10 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // E4 pressed
                tone.start(.05);
                tone.freq(329.628);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 11 * width / 17) && (mouseX > 10 * width / 17) && (i > 10 * width / 17) && (i < 11 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // F4 pressed
                tone.start(.05);
                tone.freq(349.228);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 12 * width / 17) && (mouseX > 11 * width / 17) && (i > 11 * width / 17) && (i < 12 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // G4 pressed
                tone.start(.05);
                tone.freq(391.995);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 13 * width / 17) && (mouseX > 12 * width / 17) && (i == 12 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // A4 pressed
                tone.start(.05);
                tone.freq(440.000);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 14 * width / 17) && (mouseX > 13 * width / 17) && (i == 13 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // B4 pressed
                tone.start(.05);
                tone.freq(493.883);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 15 * width / 17) && (mouseX > 14 * width / 17) && (i > 13 * width / 17) && (i < 14 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // C5 pressed
                tone.start(.05);
                tone.freq(523.251);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 16 * width / 17) && (mouseX > 15 * width / 17) && (i > 14 * width / 17) && (i < 15 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // D6 pressed
                tone.start(.05);
                tone.freq(587.330);
                tone.amp(.1);
                tone.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 800) && (mouseX > 16 * width / 17) && (i > 15 * width / 17) && (i < 16 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // E7 pressed
                tone.start(.05);
                tone.freq(659.255);
                tone.amp(.1);
                tone.fade(0, 1);
            }

            // Draw black keys
            fill(0);
            rect(x[j], 0, 30, height * .65);
        }
    }
}
