// https://codepen.io/yaclive/pen/EayLYO

// Initialising the canvas

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d");

// Setting the width and height of the canvas

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

// Setting up the letters
var letters = "exabyte".split("")

// Setting up the columns

var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops

var drops = [];

for (var i = 0; i < columns; i++) {
    drops[i] = getRandomInt(1000);
}

var count = 0;

// Setting up the draw function

function draw() {
    ctx.fillStyle = "rgba(174, 52, 68, 0.1)";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < drops.length; i++) {
        var text = letters[count];

        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.font = "10px DotGothic16"

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
    }

    count = (count + 1) % letters.length;
}

// Loop the animation
setInterval(draw, 100);
