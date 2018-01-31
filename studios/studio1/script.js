"use strict";

console.log("we good.");

document.test.onreset = resetForm; // Form reset to a function
document.test.onsubmit = processForm; // Form submit to a function

results.setAttribute('class', 'hide'); // Results are initially hidden

// Getting the breakup music ready
var broke = new Audio();
broke.src = "../../audio/breakup.mp3";

function processForm() {
    // Show the results when the form is processed
    results.setAttribute('class', 'show');

    // Initiate the dramatic transition
    fade();
    broke.play();

    // Each paragraph of results
    var myMsg = document.getElementById('first');
    var myMsg = document.getElementById('second');
    var myMsg = document.getElementById('third');

    // Value for each field
    var name = document.test.name.value;
    var time = document.test.time.value;
    var pastVerb1 = document.test.pastVerb1.value;
    var pet = document.test.pet.value;
    var verb1 = document.test.verb1.value;
    var noun1 = document.test.noun1.value;
    var verb2 = document.test.verb2.value;
    var pluralNoun = document.test.pluralNoun.value;
    var adjective = document.test.adjective.value;
    var verbIng1 = document.test.verbIng1.value;
    var bodyPart = document.test.bodyPart.value;
    var verbIng2 = document.test.verbIng2.value;
    var occupation = document.test.occupation.value;
    var goodbye = document.test.goodbye.value;

    // Results message with variables for each field in place
    first.innerHTML =
        "There's no easy way to say this, so I'm just going to get right to it. It's over, " + name + ". And I mean it this time. This has been the longest " + time + " of my life, and I should have left right when you " + pastVerb1 + " my " + pet + ", but I thought, hey, maybe I'm just being picky.";

    second.innerHTML =
        "But surprise, surprise... Here we are, and everything has just gone downhill. It's like we're on completely different wavelengths. You never " + verb1 + " out the " + noun1 + " or " + verb2 + " the " + pluralNoun + ". And when I ask you if I look " + adjective + ", you just sort of stare at me... One time, you didn't even stare, you just went outside and started " + verbIng1 + " your " + bodyPart + "! Right in front of the neighbors, too! And that's only one of the many moments that you have embarassed me. But the most embarrassing moment of all was when I found out that you've been " + verbIng2 + " with my " + occupation + " behind my back. Oh, what? You thought I didn't know? Give me a break. Actually, no. Let me give you a break. A permanent one! Don't text me. Don't call me. Don't even speak my name... ";

    third.innerHTML =
        goodbye;

    return false; // Prevent reloading
}

function resetForm() {
    myMsg.innerHTML = ""; // Clear the message
    results.setAttribute('class', 'hide'); // Hide the results
}

function fade() {
    // Starts the results animation (in the CSS, I had it paused since I used keyframe, which are time-based)
    document.getElementById('fade').style.animationPlayState = "running";
}
