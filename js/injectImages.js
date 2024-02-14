// Path to the elephant, horse, and chariot images
var elephantImagePath = 'img/elephant.png';
var horseImagePath = 'img/horse.jpg';
var chariotImagePath = 'img/chariot.jpeg';
var chariot2ImagePath = 'img/chariot2.png';
var cowImagePath = 'img/cow.jpg';
var femaleSlaveImagePath = 'img/female_slave.png';
var maleSlaveImagePath = 'img/male_slave.png';
var womanImagePath = 'img/woman.png';
var childrenImagePath = 'img/children.png';
var jewelleryImagePath = 'img/jewellery.png';
var coinsImagePath = 'img/coins.png';
var elephant2ImagePath = 'img/elephant2.png';
var wifeImagePath = 'img/wife.jpg'

// Get the container where elephants, horses, and chariots will be injected
var container = document.querySelector('.sacrifice');

// Auto-scrolling function
function autoScroll(element, scrollSpeed) {
    var scrollInterval;
    var scrollAmount = 1; // Adjust scroll amount as needed
    var isScrolling = false;

    // Function to start scrolling
    function startScrolling() {
        if (!isScrolling) {
            isScrolling = true;
            scrollInterval = setInterval(function() {
                // Scroll by the defined amount
                element.scrollTop += scrollAmount;
            }, scrollSpeed); // Adjust scroll speed (milliseconds)
        }
    }

    // Function to stop scrolling
    function stopScrolling() {
        clearInterval(scrollInterval);
        isScrolling = false;
    }

    // Start scrolling
    startScrolling();

    // Resume scrolling when mouse leaves the container
    element.addEventListener('mouseleave', startScrolling);
}

// Loop to inject coins
for (var i = 0; i < 70; i++) {
    var coinsImg = document.createElement('img');
    coinsImg.classList.add('coins');
    coinsImg.src = coinsImagePath;
    container.appendChild(coinsImg);
}

// Loop to inject jewellery
for (var i = 0; i < 10; i++) {
    var jewelleryImg = document.createElement('img');
    jewelleryImg.classList.add('jewellery');
    jewelleryImg.src = jewelleryImagePath;
    container.appendChild(jewelleryImg);
}

// Loop to inject coins
for (var i = 0; i < 4270; i++) {
    var coinsImg = document.createElement('img');
    coinsImg.classList.add('coins2');
    coinsImg.src = coinsImagePath;
    container.appendChild(coinsImg);
}

// Create the children image element
var elephant2Img = document.createElement('img');
elephant2Img.classList.add('elephant2');
elephant2Img.src = elephant2ImagePath;

// Append the children image to the container
container.appendChild(elephant2Img);

// Loop to inject elephants
for (var i = 0; i < 700; i++) {
    var elephantImg = document.createElement('img');
    elephantImg.classList.add('elephant');
    elephantImg.src = elephantImagePath;
    container.appendChild(elephantImg);
}

// Loop to inject horses
for (var i = 0; i < 700; i++) {
    var horseImg = document.createElement('img');
    horseImg.classList.add('horse');
    horseImg.src = horseImagePath;
    container.appendChild(horseImg);
}

// Loop to inject chariots
for (var i = 0; i < 700; i++) {
    var chariotImg = document.createElement('img');
    chariotImg.classList.add('chariot');
    chariotImg.src = chariotImagePath;
    container.appendChild(chariotImg);
}

// Loop to inject cows
for (var i = 0; i < 700; i++) {
    var cowImg = document.createElement('img');
    cowImg.classList.add('cow');
    cowImg.src = cowImagePath;
    container.appendChild(cowImg);
}

// Loop to inject female slaves
for (var i = 0; i < 700; i++) {
    var femaleSlaveImg = document.createElement('img');
    femaleSlaveImg.classList.add('female-slave');
    femaleSlaveImg.src = femaleSlaveImagePath;
    container.appendChild(femaleSlaveImg);
}

// Loop to inject male slaves
for (var i = 0; i < 700; i++) {
    var maleSlaveImg = document.createElement('img');
    maleSlaveImg.classList.add('male-slave');
    maleSlaveImg.src = maleSlaveImagePath;
    container.appendChild(maleSlaveImg);
}

// Loop to inject women
for (var i = 0; i < 700; i++) {
    var womanImg = document.createElement('img');
    womanImg.classList.add('woman');
    womanImg.src = womanImagePath;
    container.appendChild(womanImg);
}

// Loop to inject jewellery
for (var i = 0; i < 19; i++) {
    var jewelleryImg = document.createElement('img');
    jewelleryImg.classList.add('jewellery2');
    jewelleryImg.src = jewelleryImagePath;
    container.appendChild(jewelleryImg);
}

// Loop to inject horses
for (var i = 0; i < 4; i++) {
    var horseImg = document.createElement('img');
    horseImg.classList.add('horse2');
    horseImg.src = horseImagePath;
    container.appendChild(horseImg);
}

// Create the children image element
var chariot2Img = document.createElement('img');
chariot2Img.classList.add('chariot2');
chariot2Img.src = chariot2ImagePath;

// Append the children image to the container
container.appendChild(chariot2Img);

// Create the children image element
var childrenImg = document.createElement('img');
childrenImg.classList.add('children');
childrenImg.src = childrenImagePath;

// Append the children image to the container
container.appendChild(childrenImg);

// Create the children image element
var wifeImg = document.createElement('img');
wifeImg.classList.add('wife');
wifeImg.src = wifeImagePath;

// Append the children image to the container
container.appendChild(wifeImg);

// Apply auto-scroll to the container
autoScroll(container, 40); // Adjust scroll speed (milliseconds)
