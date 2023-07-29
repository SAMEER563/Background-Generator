var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var reset = document.getElementById("reset");

function backgroundStyle(firstcolor, secondcolor) {
    body.style.background = "linear-gradient(to right, " + firstcolor + ", " + secondcolor + ")";
    css.textContent = body.style.background;
}

function defaultGradient() {
    color1.value = "#FAF86C";
    color2.value = "#7BCDFC";
    backgroundStyle(color1.value, color2.value);
}

function setGradient() {
    backgroundStyle(color1.value, color2.value);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    backgroundStyle(color1.value, color2.value);
}

defaultGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);
reset.addEventListener("click", defaultGradient);
