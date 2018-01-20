/*

Kylinna Williams
DES 157-001, Winter 2018
Studio 0: "script.js"

Description: Interactive piano banner for class portal. Notes can be played by clicking on the white keys.

*/

var x = [32, 79, 173, 220, 267, 361, 408, 502, 549, 596, 690, 738]; // Array of values for black key x positions
var activeWhite; // Variable for the color of a key when it is pressed down
var toneC3, toneD3, toneE3, toneF3, toneG3, toneA3, toneB3, toneC4, toneD4, toneE4, toneF4, toneG4, toneA4, toneB4, toneC5, toneD5, toneE5;

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    activeWhite = color(244, 96, 96); // Set active white key color
    toneC3 = new p5.Oscillator(); // Use oscillator to facilitate the piano notes from wave frequencies
    toneD3 = new p5.Oscillator();
    toneE3 = new p5.Oscillator();
    toneF3 = new p5.Oscillator();
    toneG3 = new p5.Oscillator();
    toneA3 = new p5.Oscillator();
    toneB3 = new p5.Oscillator();
    toneC4 = new p5.Oscillator();
    toneD4 = new p5.Oscillator();
    toneE4 = new p5.Oscillator();
    toneF4 = new p5.Oscillator();
    toneG4 = new p5.Oscillator();
    toneA4 = new p5.Oscillator();
    toneB4 = new p5.Oscillator();
    toneC5 = new p5.Oscillator();
    toneD5 = new p5.Oscillator();
    toneE5 = new p5.Oscillator();
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
                toneC3.start(.05); // Start in .05 seconds after clicking (to get rid of the clipping sound)
                toneC3.freq(130.813); // Sets frequency to play the correct tone
                toneC3.amp(.1); // Lower the volume
                toneC3.fade(0, 1); // Fade the tone out over the span of one second (also to get rid of clipping sound and so it doesn't end so abruptly)
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 2 * width / 17) && (mouseX > width / 17) && (i == width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // D3 pressed
                toneD3.start(.05);
                toneD3.freq(146.832);
                toneD3.amp(.1);
                toneD3.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 3 * width / 17) && (mouseX > 2 * width / 17) && (i == 2 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // E3 pressed
                toneE3.start(.05);
                toneE3.freq(164.814);
                toneE3.amp(.1);
                toneE3.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 4 * width / 17) && (mouseX > 3 * width / 17) && (i == 3 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // F3 pressed
                toneF3.start(.05);
                toneF3.freq(174.614);
                toneF3.amp(.1);
                toneF3.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 5 * width / 17) && (mouseX > 4 * width / 17) && (i == 4 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // G3 pressed
                toneG3.start(.05);
                toneG3.freq(195.998);
                toneG3.amp(.1);
                toneG3.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 6 * width / 17) && (mouseX > 5 * width / 17) && (i > 5 * width / 17) && (i < 6 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // A3 pressed
                toneA3.start(.05);
                toneA3.freq(220.000);
                toneA3.amp(.1);
                toneA3.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 7 * width / 17) && (mouseX > 6 * width / 17) && (i == 6 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // B3 pressed
                toneB3.start(.05);
                toneB3.freq(246.942);
                toneB3.amp(.1);
                toneB3.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 8 * width / 17) && (mouseX > 7 * width / 17) && (i == 7 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // C4 pressed
                toneC4.start(.05);
                toneC4.freq(261.626);
                toneC4.amp(.1);
                toneC4.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 9 * width / 17) && (mouseX > 8 * width / 17) && (i == 8 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // D4 pressed
                toneD4.start(.05);
                toneD4.freq(293.665);
                toneD4.amp(.1);
                toneD4.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 10 * width / 17) && (mouseX > 9 * width / 17) && (i > 9 * width / 17) && (i < 10 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // E4 pressed
                toneE4.start(.05);
                toneE4.freq(329.628);
                toneE4.amp(.1);
                toneE4.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 11 * width / 17) && (mouseX > 10 * width / 17) && (i > 10 * width / 17) && (i < 11 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // F4 pressed
                toneF4.start(.05);
                toneF4.freq(349.228);
                toneF4.amp(.1);
                toneF4.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 12 * width / 17) && (mouseX > 11 * width / 17) && (i > 11 * width / 17) && (i < 12 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // G4 pressed
                toneG4.start(.05);
                toneG4.freq(391.995);
                toneG4.amp(.1);
                toneG4.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 13 * width / 17) && (mouseX > 12 * width / 17) && (i == 12 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // A4 pressed
                toneA4.start(.05);
                toneA4.freq(440.000);
                toneA4.amp(.1);
                toneA4.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 14 * width / 17) && (mouseX > 13 * width / 17) && (i == 13 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // B4 pressed
                toneB4.start(.05);
                toneB4.freq(493.883);
                toneB4.amp(.1);
                toneB4.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 15 * width / 17) && (mouseX > 14 * width / 17) && (i > 13 * width / 17) && (i < 14 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // C5 pressed
                toneC5.start(.05);
                toneC5.freq(523.251);
                toneC5.amp(.1);
                toneC5.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 16 * width / 17) && (mouseX > 15 * width / 17) && (i > 14 * width / 17) && (i < 15 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // D6 pressed
                toneD5.start(.05);
                toneD5.freq(587.330);
                toneD5.amp(.1);
                toneD5.fade(0, 1);
            } else if ((mouseIsPressed) && (mouseY < 250) && (mouseX < 800) && (mouseX > 16 * width / 17) && (i > 15 * width / 17) && (i < 16 * width / 17)) {
                fill(activeWhite);
                rect(i, 0, width / 17, height); // E7 pressed
                toneE5.start(.05);
                toneE5.freq(659.255);
                toneE5.amp(.1);
                toneE5.fade(0, 1);
            }

            // Draw black keys
            fill(0);
            rect(x[j], 0, 30, height * .65);
        }
    }
}
