let firstSequence = ["images/cloudy.jpeg", "images/rain.jpeg", "images/sunny.jpeg"];
let secondSequence = ["images/sunny.jpeg", "images/rain.jpeg", "images/cloudy.jpeg"];

let showingFirst = true;

let firstBox = document.getElementById("firstBox");
let scndBox = document.getElementById("scndBox");
let thrdBox = document.getElementById("thrdBox");

let changeButton = document.getElementById("changeBut");
let sequenceTitle = document.getElementById("sequenceTitle");


function changeSequence() {

    if (showingFirst == true) {
        firstBox.src = secondSequence[0];
        scndBox.src = secondSequence[1];
        thrdBox.src = secondSequence[2];
        sequenceTitle.textContent = "Second Sequence";
        showingFirst = false;
    } else {
        firstBox.src = firstSequence[0];
        scndBox.src = firstSequence[1];
        thrdBox.src = firstSequence[2];
        sequenceTitle.textContent = "First Sequence";
        showingFirst = true;
    }
}

changeButton.addEventListener("click", changeSequence);