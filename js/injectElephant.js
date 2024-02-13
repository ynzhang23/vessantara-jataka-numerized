// Path to the elephant image
var elephantImagePath = 'img/elephant.png';
var horseImagePath = 'img/horse.jpg';
var chariotImagePath = 'img/chariot.jpeg';

// Get the container where elephants, horses, and chariots will be injected
var elephantContainer = document.querySelector('.sacrifice .elephant');
var horseContainer = document.querySelector('.sacrifice .horse');
var chariotContainer = document.querySelector('.sacrifice .chariot');

// Loop to inject elephants
for (var i = 0; i < 700; i++) {
    var elephantImg = document.createElement('img');
    elephantImg.classList.add('elephant');
    elephantImg.src = elephantImagePath;
    elephantContainer.appendChild(elephantImg);
}

// Loop to inject horses
for (var i = 0; i < 700; i++) {
    var horseImg = document.createElement('img');
    horseImg.classList.add('horse');
    horseImg.src = horseImagePath;
    horseContainer.appendChild(horseImg);
}

// Loop to inject chariots
for (var i = 0; i < 700; i++) {
    var chariotImg = document.createElement('img');
    chariotImg.classList.add('chariot');
    chariotImg.src = chariotImagePath;
    chariotContainer.appendChild(chariotImg);
}
