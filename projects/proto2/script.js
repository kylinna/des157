"use strict";


// "Pages"
var page1 = document.querySelector('#page1');
var page2 = document.querySelector('#page2');
var page3 = document.querySelector('#page3');
var page4 = document.querySelector('#page4');
var page5 = document.querySelector('#page5');

// Navigational buttons (start, next, home, etc.)
var start = document.querySelector("#begin");
var songNext = document.querySelector("#next1");
var colorNext = document.querySelector("#next2");
var backgroundNext = document.querySelector("#next3");
var home = document.querySelector("#home");

// Song buttons
var song1 = document.querySelector("#song1");
var song2 = document.querySelector("#song2");
var song3 = document.querySelector("#song3");
var song4 = document.querySelector("#song4");


// Color buttons + variables
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var color4 = document.querySelector("#color4");

var colorChoice = document.body.style.backgroundColor;
var green = false;
var blue = false;
var pink = false;
var purple = false;

// Actual patterns that result from clicking background buttons
var texture1 = false;
var texture2 = false;
var texture3 = false;
var texture4 = false;

// Background buttons
var background1 = document.querySelector("#back1");
var background2 = document.querySelector("#back2");
var background3 = document.querySelector("#back3");
var background4 = document.querySelector("#back4");

// To animate the pattern when the music starts
var shapeSize = 0;
var pulse;
var song;
var amp;

var dots = [];
var squares = [];
var lines = [];
var stars = [];

function preload() {
    song = loadSound("https://kylinna.github.io/des157/audio/synthy.mp3");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    noStroke();
    rectMode(CENTER);

    amp = new p5.Amplitude();
    amp.setInput(song);

    for (var i = 0; i < 30; i++) {
        dots.push(new back1());
        squares.push(new back2());
        lines.push(new back3());
        stars.push(new back4());
    }
}

function draw() {
    pulse = amp.getLevel();
    shapeSize = map(pulse, 0, 0.3, 10, 200);

    background(colorChoice);
    colorChoice=('orange');

    if (green == true) {
        colorChoice = "rgb(0, 255, 125)";
    } else if (blue == true) {
        colorChoice = "rgb(0, 100, 255)";
    } else if (pink == true) {
        colorChoice = "rgb(255, 75, 200)";
    } else if (purple == true) {
        colorChoice = "rgb(200, 75, 255)";
    }

    if (texture1 == true) {
        for (var i = 0; i < dots.length; i++) {
            dots[i].display();
        }
    } else if (texture2 == true) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].display();
        }
    } else if (texture3 == true) {
        for (var i = 0; i < lines.length; i++) {
            lines[i].display();
        }
    } else if (texture4 == true) {
        for (var i = 0; i < stars.length; i++) {
            stars[i].display();
        }
    }
}

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
    song2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song4.style.backgroundColor = "rgba(255, 255, 255, 0)";
});

song2.addEventListener('click', function() {
    song1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song2.style.backgroundColor = "rgb(255, 127, 80)";
    song3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song4.style.backgroundColor = "rgba(255, 255, 255, 0)";
});

song3.addEventListener('click', function() {
    song1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song3.style.backgroundColor = "rgb(255, 127, 80)";
    song4.style.backgroundColor = "rgba(255, 255, 255, 0)";
});

song4.addEventListener('click', function() {
    song1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song4.style.backgroundColor = "rgb(255, 127, 80)";
});



color1.addEventListener('click', function() {
    color1.style.backgroundColor = "rgb(255, 127, 80)";
    color2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    green = true;
    blue = false;
    pink = false;
    purple = false;
});

color2.addEventListener('click', function() {
    color1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color2.style.backgroundColor = "rgb(255, 127, 80)";
    color3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    blue = true;
    green = false;
    pink = false;
    purple = false;
});

color3.addEventListener('click', function() {
    color1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color3.style.backgroundColor = "rgb(255, 127, 80)";
    color4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    pink = true;
    green = false;
    blue = false;
    purple = false;
});

color4.addEventListener('click', function() {
    color1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color4.style.backgroundColor = "rgb(255, 127, 80)";

    purple = true;
    green = false;
    blue = false;
    pink = false;
});



background1.addEventListener('click', function() {
  background1.style.backgroundColor = "rgb(255, 127, 80)";
  background2.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    texture1 = true;
    texture2 = false;
    texture3 = false;
    texture4 = false;
});

background2.addEventListener('click', function() {
  background1.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background2.style.backgroundColor = "rgb(255, 127, 80)";
  background3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    texture1 = false;
    texture2 = true;
    texture3 = false;
    texture4 = false;
});

background3.addEventListener('click', function() {

  background1.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background2.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background3.style.backgroundColor = "rgb(255, 127, 80)";
  background4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    texture1 = false;
    texture2 = false;
    texture3 = true;
    texture4 = false;
});

background4.addEventListener('click', function() {
  background1.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background2.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  background4.style.backgroundColor = "rgb(255, 127, 80)";

    texture1 = false;
    texture2 = false;
    texture3 = false;
    texture4 = true;
});



// Clear everything and go home
home.addEventListener('click', function() {
    page1.style.display = 'block';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';

    song1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    song4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    color1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    color4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    background1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    background2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    background3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    background4.style.backgroundColor = "rgba(255, 255, 255, 0)";

    colorChoice = ('orange');
    green = false;
    blue = false;
    pink = false;
    purple = false;

    texture1 = false;
    texture2 = false;
    texture3 = false;
    texture4 = false;

    clear();
    song.stop();
});


// Setup the star shape
function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius2;
        var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

// First pattern option (random circles)
function back1() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 50);

  this.display = function() {
    fill('rgba(255,255,255, 0.5)');
    ellipse(this.x, this.y, this.diameter + shapeSize, this.diameter + shapeSize);
  };
}

// Second pattern option (random squares)
function back2() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 50);

  this.display = function() {
    fill('rgba(255,255,255, 0.5)');
    rect(this.x, this.y, this.diameter + shapeSize, this.diameter + shapeSize);
  };
}

// Third pattern option (random lines)
function back3() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, height);

  this.display = function() {
    stroke('rgba(255,255,255, 0.5)');
    strokeWeight(2);
    line(this.x, this.y, this.diameter + shapeSize , this.diameter + shapeSize);
  };
}

// First pattern option (random stars)
function back4() {
  this.x = random(width);
  this.y = random(height);
  this.edge = random(5,10);

  this.display = function() {
    fill('rgba(255,255,255, 0.5)');
    star(this.x + shapeSize, this.y + shapeSize, 30 + shapeSize, 70 + shapeSize, this.edge);
  };
}
