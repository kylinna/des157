// Variables for object images
var keyImg = document.getElementById("keyImg");
var cacaoImg = document.getElementById("cacaoImg");
var hurrawImg = document.getElementById("hurrawImg");

// Variables for info icons
var keysInfo = document.getElementById('keysInfo');
var cacaoInfo = document.getElementById('cacaoInfo');
var hurrawInfo = document.getElementById('hurrawInfo');

// Variables for overlay that occurs after clicking on info icon
var keysOverlay = document.getElementById('keysOverlay');
var cacaoOverlay = document.getElementById('cacaoOverlay');
var hurrawOverlay = document.getElementById('hurrawOverlay');

// Variables for closing out of info overlay
var closeKeys = document.getElementById('closeKeys');
var closeCacao = document.getElementById('closeCacao');
var closeHurraw = document.getElementById('closeHurraw');

// Variable to target the entire container
var whole = document.body;

// Variables for sound fx
var cacao = new Audio();
var keys = new Audio();
var hurraw = new Audio();
cacao.src = "audio/kindofcoo.mp3";
keys.src = "audio/keys.mp3";
hurraw.src = "audio/cappop.mp3";



// Event listeners for when the key image is touched or pressed on with mouse
keyImg.addEventListener("touchstart", keysActive);
keyImg.addEventListener("mousedown", keysActive);

// Event listeners for when the touch or press on the key image is released
keyImg.addEventListener("touchend", keysNot);
keyImg.addEventListener("mouseup", keysNot);

// Show the overlay for keys when the info icon is clicked
keysInfo.addEventListener('click', function() {
    keysOverlay.style.display = "block";
});

// Show the overlay for keys when the info icon is touched
keysInfo.addEventListener('ontouch', function() {
    keysOverlay.style.display = "block";
});


// Close the overlay for keys when the close icon is clicked
closeKeys.addEventListener('click', function() {
    keysOverlay.style.display = "none";
});

// Close the overlay for keys when the close icon is touched
closeKeys.addEventListener('ontouch', function() {
    keysOverlay.style.display = "none";
});



// Event listeners for when the cacao image is touched or pressed on with mouse
cacaoImg.addEventListener("touchstart", cacaoActive);
cacaoImg.addEventListener("mousedown", cacaoActive);

// Event listeners for when the touch or press on the cacao image is released
cacaoImg.addEventListener("touchend", cacaoNot);
cacaoImg.addEventListener("mouseup", cacaoNot);

// Show the overlay for cacao when the info icon is clicked
cacaoInfo.addEventListener('click', function() {
    cacaoOverlay.style.display = "block";
});

// Show the overlay for cacao when the info icon is touched
cacaoInfo.addEventListener('ontouch', function() {
    cacaoOverlay.style.display = "block";
});

// Close the overlay for cacao when the close icon is clicked
closeCacao.addEventListener('click', function() {
    cacaoOverlay.style.display = "none";
});

// Close the overlay for cacao when the close icon is touched
closeCacao.addEventListener('ontouch', function() {
    cacaoOverlay.style.display = "none";
});



// Event listeners for when the hurraw image is touched or pressed on with mouse
hurrawImg.addEventListener("touchstart", hurrawActive);
hurrawImg.addEventListener("mousedown", hurrawActive);

// Event listeners for when the touch or press on the hurraw image is released
hurrawImg.addEventListener("touchend", hurrawNot);
hurrawImg.addEventListener("mouseup", hurrawNot);

// Show the overlay for hurraw when the info icon is clicked
hurrawInfo.addEventListener('click', function() {
    hurrawOverlay.style.display = "block";
});

// Show the overlay for hurraw when the info icon is touched
hurrawInfo.addEventListener('ontouch', function() {
    hurrawOverlay.style.display = "block";
});

// Close the overlay for hurraw when the close icon is clicked
closeHurraw.addEventListener('click', function() {
    hurrawOverlay.style.display = "none";
});

// Close the overlay for hurraw when the close icon is touched
closeHurraw.addEventListener('ontouch', function() {
    hurrawOverlay.style.display = "none";
});



// Specific instructions for keysActive function that is used in the events above
function keysActive() {
    whole.style.backgroundImage = "url('images/keyhover.png')";
    keyImg.src = "images/move-keys.gif"
    keys.play();
}

// Specific instructions for keysNot function that is used in the events above
function keysNot() {
    whole.style.backgroundImage = "none";
    keyImg.src = "images/key.gif"
}

// Specific instructions for cacaoActive function that is used in the events above
function cacaoActive() {
    whole.style.backgroundImage = "url('images/cacaohover.png')";
    cacaoImg.src = "images/move-cacao.gif";
    cacao.play();
}

// Specific instructions for cacaoNot function that is used in the events above
function cacaoNot() {
    whole.style.backgroundImage = "none";
    cacaoImg.src = "images/cacao.gif";
}

// Specific instructions for hurrawActive function that is used in the events above
function hurrawActive() {
    whole.style.backgroundImage = "url('images/hurrawhover.png')";
    hurrawImg.src = "images/hurraw2.gif"
    hurraw.play();
}

// Specific instructions for hurrawNot function that is used in the events above
function hurrawNot() {
    whole.style.backgroundImage = "none";
    hurrawImg.src = "images/hurraw.gif"
}
