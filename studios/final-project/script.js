//  a project by katy + kylinna
// external patterns and references:
// 2D Sine Wave, by unicar on codepen.io (https://codepen.io/unicar/)

"use strict";
var home = document.querySelector('#home');
var page1 = document.querySelector('#page1');
var page2 = document.querySelector('#page2');
var page3 = document.querySelector('#page3');
var page4 = document.querySelector('#page4');
var page5 = document.querySelector('#page5');
var page6 = document.querySelector('#page6');

var begin = document.querySelector('#begin');
var next1 = document.querySelector('#next1');
var prev2 = document.querySelector('#prev2');
var next2 = document.querySelector('#next2');
var prev3 = document.querySelector('#prev3');
var next3 = document.querySelector('#next3');

var song1 = document.querySelector("#song1");
var song2 = document.querySelector("#song2");
var song3 = document.querySelector("#song3");
var song4 = document.querySelector("#song4");

var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var color4 = document.querySelector("#color4");
var color5 = document.querySelector("#color5");
var color6 = document.querySelector("#color6");
var color7 = document.querySelector("#color7");

var vis1 = document.querySelector("#vis1");
var vis2 = document.querySelector("#vis2");
var vis3 = document.querySelector("#vis3");
var vis4 = document.querySelector("#vis4");

var radialSelected = false;
var barzSelected = false;
var waveSelected = false;

var songA = false;
var songB = false;
var songC = false;
var songD = false;

// for waves
var spacing = 100; // distance between circles
var theta = 0.0; // 0
var amp = 50; // default height
var period = 200.0; // period of time
var dx; // increments
var dots = [];
var amplitude, amp;

// song related

var a, b, c, d;
var song;
var fft;
var pulse;
var waveform, analyze;
var circSize;

// for radial
var r = 150; // radius of ring;
var dr = 70; // outer lines

// for color selector
var colorButtons = document.getElementsByClassName('colorbtn');

var currentColor;

var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var color3 = document.getElementById('color3');
var color4 = document.getElementById('color4');
var color5 = document.getElementById('color5');
var color6 = document.getElementById('color6');
var color7 = document.getElementById('color7');
var color8 = document.getElementById('color8');
var color9 = document.getElementById('color9');
var color10 = document.getElementById('color10');
var color11 = document.getElementById('color11');
var color12 = document.getElementById('color12');

var colorOptions = [
  '#ffaacc',
  '#ffccdd',
  '#ffffdd',
  '#ffaaee',
  '#ccaaff',
  '#ccddff',
  '#ccffff',
  '#ccddee',
  '#ccccdd',
  '#ccffdd',
  '#ccaacc',
  '#ccffcc',
];


function preload() {
  a = loadSound("https://kylinna.github.io/des157/audio/synthy.mp3");
  b = loadSound("https://kylinna.github.io/des157/audio/actuallykindadope.mp3");
  c = loadSound("https://kylinna.github.io/des157/audio/funkyfresh.mp3");
  d = loadSound("https://kylinna.github.io/des157/audio/echoparkrawk.mp3");
}

function setup() {
  rectMode(CENTER);
  colorMode(HSB);
  smooth();
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  fft.setInput(song);
  amp = new p5.Amplitude();
  dx = (TWO_PI / period) * spacing;
  dots = new Array(15);
  currentColor = colorOptions[4];


}

function draw() {
  background('#444444');
  pulse = amp.getLevel();
  circSize = map(pulse, 0, 0.7, 15, 200);
  amplitude = map(mouseY, 0, windowHeight, 15, 75);
  waveform = fft.waveform();
  analyze = fft.analyze();

  //song choice
  if (songA) {
    song = a;
  } else if (songB) {
    song = b;
  } else if (songC) {
    song = c;
  } else if (songD) {
    song = d;
  }

  //patterns
  if (radialSelected) {
    radial();
  } else if (barzSelected) {
    barz();
  } else if (waveSelected) {
    gridWave();
    gridOtherwave();
  }
}

begin.addEventListener('click', function() {
  page1.style.display = 'none';
  page2.style.display = 'block';
});

next1.addEventListener('click', function() {
  page2.style.display = 'none';
  page3.style.display = 'block';
});

prev2.addEventListener('click', function() {
  page3.style.display = 'none';
  page2.style.display = 'block';
});

next2.addEventListener('click', function() {
  page3.style.display = 'none';
  page4.style.display = 'block';
});

// color selectors
for (let i = 0; i < colorButtons.length; i++) {
  console.log(colorButtons[i]);
  colorButtons[i].addEventListener('click', function() {
    currentColor = colorOptions[i];
  });
}

//select + hover a song
song1.addEventListener('click', function() {
  song1.style.backgroundColor = 'rgba(255, 255, 255, .25)';
  song2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song3.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song4.style.backgroundColor = 'rgba(255, 255, 255, 0)';

  songA = true;
  songB = false;
  songC = false;
  songD = false;

  if (a.isPlaying()) {
    a.pause();
  } else {
    a.loop();
    b.pause();
    c.pause();
    d.pause();
  }
});

song2.addEventListener('click', function() {
  song1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song2.style.backgroundColor = 'rgba(255, 255, 255, .25)';
  song3.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song4.style.backgroundColor = 'rgba(255, 255, 255, 0)';

  songA = true;
  songB = false;
  songC = false;
  songD = false;

  if (b.isPlaying()) {
    b.pause();
  } else {
    a.pause();
    b.loop();
    c.pause();
    d.pause();
  }
});

song3.addEventListener('click', function() {
  song1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song3.style.backgroundColor = 'rgba(255, 255, 255, .25)';
  song4.style.backgroundColor = 'rgba(255, 255, 255, 0)';

  songA = true;
  songB = false;
  songC = false;
  songD = false;

  if (c.isPlaying()) {
    c.pause();
  } else {
    a.pause();
    b.pause();
    c.loop();
    d.pause();
  }
});

song4.addEventListener('click', function() {
  song1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song3.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  song4.style.backgroundColor = 'rgba(255, 255, 255, .25)';

  songA = true;
  songB = false;
  songC = false;
  songD = false;

  if (d.isPlaying()) {
    d.pause();
  } else {
    a.pause();
    b.pause();
    c.pause();
    d.loop();
  }
});

//select a pattern
vis1.addEventListener('click', function() {
  vis1.style.backgroundColor = 'rgba(255, 255, 255, .25)';
  vis2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis3.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis4.style.backgroundColor = 'rgba(255, 255, 255, 0)';

  waveSelected = true;
  radialSelected = false;
  barzSelected = false;
});

vis2.addEventListener('click', function() {
  vis1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis2.style.backgroundColor = 'rgba(255, 255, 255, .25)';
  vis3.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis4.style.backgroundColor = 'rgba(255, 255, 255, 0)';

  waveSelected = false;
  radialSelected = true;
  barzSelected = false;
});

vis3.addEventListener('click', function() {
  vis1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis3.style.backgroundColor = 'rgba(255, 255, 255, .25)';
  vis4.style.backgroundColor = 'rgba(255, 255, 255, 0)';

  waveSelected = false;
  radialSelected = false;
  barzSelected = true;
});

vis4.addEventListener('click', function() {
  vis1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis3.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  vis4.style.backgroundColor = 'rgba(255, 255, 255, .25)';
});



//sliding menu
var navToggle = document.getElementsByClassName('js-sidenav-btntoggle')[0];
var navMenu = document.getElementsByClassName('js-sidenav')[0];
var isMouseDown = false;

navToggle.addEventListener('click', function() {
  this.focus();
  navMenu.classList.toggle('js-sidenav-open');
  navMenu.focus();
});

navMenu.addEventListener('mousedown', function() {
  isMouseDown = true;
});

navMenu.addEventListener('mouseup', function() {
  isMouseDown = false;
});

navMenu.addEventListener('mouseleave', function() {
  isMouseDown = false;
});

navMenu.addEventListener('blur', function() {
  if (!isMouseDown) {
    navMenu.classList.remove('js-sidenav-open');
  }
}, true);

//patterns and their variables

//radial
function radial() {
  translate(width / 2, height / 2); // put it in the center
  noFill();
  beginShape();
  stroke(currentColor);
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i += 1) {
    var ang = i * 360 / waveform.length;
    var x = (r) * cos(radians(ang));
    var y = (r) * sin(radians(ang));
    var a = map(waveform[i], -1, 1, r - dr, r + dr) * cos(radians(ang));
    var b = map(waveform[i], -1, 1, r - dr, r + dr) * sin(radians(ang));
    var a2 = map(analyze[i], -1, 1, (r - dr) + random(200, 300), r + dr) * cos(radians(ang));
    var b2 = map(analyze[i], -1, 1, (r - dr) + random(200, 300), r + dr) * sin(radians(ang));

    vertex(a, b);
    push();
    strokeWeight(1);
    line(x, y, a, b); // the inner ring
    line(x, y, a2, b2); // the extended "rays" so when we add + a number it makes them longer
    pop();
    push();
    //stroke(255);
    strokeWeight(2);
    point(a, b);
    pop();
  }
  endShape();
}

//cool barz
function barz() {
  noStroke();
  for (var i = 0; i < analyze.length; i++) {
    var x = map(i, 0, analyze.length, 0, width);
    var h = -height + map(analyze[i], 0, 50, height, 0);
    var h2 = height - map(analyze[i], 0, 50, height, 0);
    fill(currentColor);
    rect(x, height, width / analyze.length - 2, h);
    push();
    rotate(radians(90));
    translate(0, -width);
    rotate(radians(90));
    rect(x, 0, width / analyze.length - 2, h2);
    pop();
  }
}

//grid wave
function gridWave() {
  theta += 0.05;
  // For every x value, calculate a y value with sine function
  var x = theta;
  amplitude = map(mouseY, 0, windowHeight, 15, 75)
  for (var i = 0; i < dots.length; i++) {
    var dot = {};
    dot.yvalue = sin(x) * amplitude;
    dot.size = circSize * cos(2 * x);
    x += dx;
    dots[i] = dot;
  }
}

function gridOtherwave() {
  noStroke();

  // place the wave at the center
  translate((width - (dots.length - 1) * spacing) / 2, (height - 9 * spacing) / 2);

  for (var x = 0; x < dots.length; x++) {
    for (var y = 0; y < 15; y++) {

      fill(currentColor);
      ellipse(x * spacing, dots[x].yvalue + y * spacing, dots[x].size, dots[x].size);
    }
  }
}

//resize function when size of window changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Clear everything and go home
home.addEventListener('click', function() {
    page1.style.display = 'block';
    page2.style.display = 'none';
    page3.style.display = 'none';

    var radialSelected = false;
    var barzSelected = false;
    var waveSelected = false;

    songA = true;
    songB = false;
    songC = false;
    songD = false;

    clear();
    a.stop();
    b.stop();
    c.stop();
    d.stop();
});
