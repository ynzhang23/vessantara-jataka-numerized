// Path to the elephant, horse, and chariot images
var elephantImagePath = 'img/elephant.png';
var horseImagePath = 'img/horse.jpg';
var chariotImagePath = 'img/chariot.jpeg';
var cowImagePath = 'img/cow.jpg';
var femaleSlaveImagePath = 'img/female_slave.png';
var maleSlaveImagePath = 'img/male_slave.png';
var womanImagePath = 'img/woman.png';
var childrenImagePath = 'img/children.png';
var jewelleryImagePath = 'img/jewellery.png';
var coinsImagePath = 'img/coins.png';

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

    // Stop scrolling when mouse hovers over the container
    element.addEventListener('mouseenter', stopScrolling);

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
for (var i = 0; i < 4170; i++) {
    var coinsImg = document.createElement('img');
    coinsImg.classList.add('coins2');
    coinsImg.src = coinsImagePath;
    container.appendChild(coinsImg);
}

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

// Create the children image element
var childrenImg = document.createElement('img');
childrenImg.classList.add('children');
childrenImg.src = childrenImagePath;

// Append the children image to the container
container.appendChild(childrenImg);

// Apply auto-scroll to the container
autoScroll(container, 30); // Adjust scroll speed (milliseconds)
