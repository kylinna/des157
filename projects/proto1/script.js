var page1 = document.querySelector('#page1');
var page2 = document.querySelector('#page2');
var page3 = document.querySelector('#page3');
var page4 = document.querySelector('#page4');
var page5 = document.querySelector('#page5');

var start = document.querySelector("#begin");
var songNext = document.querySelector("#next1");
var colorNext = document.querySelector("#next2");
var backgroundNext = document.querySelector("#next3");

var song1 = document.querySelector("#song1");
var song2 = document.querySelector("#song2");
var song3 = document.querySelector("#song3");
var song4 = document.querySelector("#song4");

var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var color4 = document.querySelector("#color4");

var background1 = document.querySelector("#back1");
var background2 = document.querySelector("#back2");
var background3 = document.querySelector("#back3");
var background4 = document.querySelector("#back4");

var home = document.querySelector("#home");

var pulse = 0;
var song, amp, volLevel;

function preload() {
  song = loadSound("https://kylinna.github.io/des157/audio/synthy.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(0);

  amp = new p5.Amplitude();
  amp.setInput(song);
}

function draw() {
  pulse = amp.getLevel();
}


home.addEventListener('click', function() {
  page1.style.display = 'block';
  page2.style.display = 'none';
  page3.style.display = 'none';
  page4.style.display = 'none';
  page5.style.display = 'none';

  song1.style.backgroundColor = "rgb(255, 255, 255)";
  song2.style.backgroundColor = "rgb(255, 255, 255)";
  song3.style.backgroundColor = "rgb(255, 255, 255)";
  song4.style.backgroundColor = "rgb(255, 255, 255)";

  color1.style.backgroundColor = "rgb(255, 255, 255)";
  color2.style.backgroundColor = "rgb(255, 255, 255)";
  color3.style.backgroundColor = "rgb(255, 255, 255)";
  color4.style.backgroundColor = "rgb(255, 255, 255)";

  background1.style.backgroundColor = "rgb(255, 255, 255)";
  background2.style.backgroundColor = "rgb(255, 255, 255)";
  background3.style.backgroundColor = "rgb(255, 255, 255)";
  background4.style.backgroundColor = "rgb(255, 255, 255)";

  document.body.style.backgroundColor = "rgb(255, 255, 255)";

  clear();
  song.stop();
});

start.addEventListener('click', function() {
  page1.style.display = 'none';
  page2.style.display = 'block';
});

songNext.addEventListener('click', function() {
  page2.style.display = 'none';
  page3.style.display = 'block';
});

colorNext.addEventListener('click', function() {
  page3.style.display = 'none';
  page4.style.display = 'block';
});

backgroundNext.addEventListener('click', function() {
  page4.style.display = 'none';
  page5.style.display = 'block';

  song.play();
});

song1.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(255, 127, 80)";
  song2.style.backgroundColor = "rgb(255, 255, 255)";
  song3.style.backgroundColor = "rgb(255, 255, 255)";
  song4.style.backgroundColor = "rgb(255, 255, 255)";
});

song2.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(255, 255, 255)";
  song2.style.backgroundColor = "rgb(255, 127, 80)";
  song3.style.backgroundColor = "rgb(255, 255, 255)";
  song4.style.backgroundColor = "rgb(255, 255, 255)";
});

song3.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(255, 255, 255)";
  song2.style.backgroundColor = "rgb(255, 255, 255)";
  song3.style.backgroundColor = "rgb(255, 127, 80)";
  song4.style.backgroundColor = "rgb(255, 255, 255)";
});

song4.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(255, 255, 255)";
  song2.style.backgroundColor = "rgb(255, 255, 255)";
  song3.style.backgroundColor = "rgb(255, 255, 255)";
  song4.style.backgroundColor = "rgb(255, 127, 80)";
});



color1.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(255, 127, 80)";
  color2.style.backgroundColor = "rgb(255, 255, 255)";
  color3.style.backgroundColor = "rgb(255, 255, 255)";
  color4.style.backgroundColor = "rgb(255, 255, 255)";

  document.body.style.backgroundColor = "rgb(0, 255, 125)";
});

color2.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(255, 255, 255)";
  color2.style.backgroundColor = "rgb(255, 127, 80)";
  color3.style.backgroundColor = "rgb(255, 255, 255)";
  color4.style.backgroundColor = "rgb(255, 255, 255)";

  document.body.style.backgroundColor = "rgb(0, 100, 255)";
});

color3.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(255, 255, 255)";
  color2.style.backgroundColor = "rgb(255, 255, 255)";
  color3.style.backgroundColor = "rgb(255, 127, 80)";
  color4.style.backgroundColor = "rgb(255, 255, 255)";

  document.body.style.backgroundColor = "rgb(255, 75, 200)";
});

color4.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(255, 255, 255)";
  color2.style.backgroundColor = "rgb(255, 255, 255)";
  color3.style.backgroundColor = "rgb(255, 255, 255)";
  color4.style.backgroundColor = "rgb(255, 127, 80)";

  document.body.style.backgroundColor = "rgb(200, 75, 255)";
});



background1.addEventListener('click', function() {
  background1.style.backgroundColor = "rgb(255, 127, 80)";
  background2.style.backgroundColor = "rgb(255, 255, 255)";
  background3.style.backgroundColor = "rgb(255, 255, 255)";
  background4.style.backgroundColor = "rgb(255, 255, 255)";

  clear();
  rect(30, 500, pulse + 120, pulse + 120);
});

background2.addEventListener('click', function() {
  background1.style.backgroundColor = "rgb(255, 255, 255)";
  background2.style.backgroundColor = "rgb(255, 127, 80)";
  background3.style.backgroundColor = "rgb(255, 255, 255)";
  background4.style.backgroundColor = "rgb(255, 255, 255)";

  clear();
  ellipse(100, 250, pulse + 200, pulse + 120);
});

background3.addEventListener('click', function() {
  background1.style.backgroundColor = "rgb(255, 255, 255)";
  background2.style.backgroundColor = "rgb(255, 255, 255)";
  background3.style.backgroundColor = "rgb(255, 127, 80)";
  background4.style.backgroundColor = "rgb(255, 255, 255)";

  clear();
  line(100, 100, pulse + 350, pulse + 120);
});

background4.addEventListener('click', function() {
  background1.style.backgroundColor = "rgb(255, 255, 255)";
  background2.style.backgroundColor = "rgb(255, 255, 255)";
  background3.style.backgroundColor = "rgb(255, 255, 255)";
  background4.style.backgroundColor = "rgb(255, 127, 80)";

  clear();
  rect(200, 200, pulse + 120, pulse + 500);
});