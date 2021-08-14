// make the background red by clicking on a button 
function makeRed() {
    document.body.style.backgroundColor = '#eb4d4b'
}

// make the background blue by clicking on a button by fully javascript

const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = '#1B9CFC';
}

const greenButton = document.querySelector('#green-button')
greenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = '#10ac84';
}

const makeNormalButton = document.querySelector('.make-normal');
makeNormalButton.onclick = makeNormal;

function makeNormal() {
    document.body.style.backgroundColor = '#fff';
}

// make the background light blue by function 

const lightBlueButton = document.getElementById('light-blue');

// anonymous function

lightBlueButton.onclick = function () {
    document.body.style.backgroundColor = '#00d2d3'
}

// add onlick by addEventListener 

const pinkButton = document.getElementById('pink-button');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = '#f368e0';
}

const lightPinkButton = document.getElementById('light-pink-button');
lightPinkButton.addEventListener('click', makeLightPink)

function makeLightPink() {
    document.body.style.backgroundColor = '#ff9ff3';
}

// add onlick by addEventListener and inside function 

const levenderRoseButton = document.getElementById('levender-rose');
levenderRoseButton.addEventListener('click', function () {
    document.body.style.backgroundColor = ' #D980FA';
})

const seaButton = document.getElementById('sea-button');
seaButton.addEventListener('click', function () {
    document.body.style.backgroundColor = '#1289A7';
})

// add onlcik direct shorcut 

document.getElementById('megenta-purple').addEventListener('click', function () {
    document.body.style.backgroundColor = ' #6F1E51'
})

document.getElementById('gloomy-purple').addEventListener('click', function () {
    document.body.style.backgroundColor = '#8854d0';
})