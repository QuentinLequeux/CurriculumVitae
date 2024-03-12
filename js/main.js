// Burger-menu

const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");

burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("show");
});

const icon = document.querySelector('.burger-menu');

function toggleIcon() {

    if (icon.textContent === '☰') {
        icon.textContent = '×';
    } else {
        icon.textContent = '☰';
    }
}

icon.addEventListener("click", toggleIcon);

// Slider

const slider = document.querySelector(".image-comparaison .slider");
const beforeImage = document.querySelector(".image-comparaison .before");
const sliderLine = document.querySelector(".image-comparaison .slider-line");
const sliderIcon = document.querySelector(".image-comparaison .slider-icon");

slider.addEventListener("input", (e) => {
    let sliderValue = e.currentTarget.value + '%';
    beforeImage.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
});

const popUpButton = document.querySelector(".button");
const close = document.querySelector(".close-exp");

function on() {
    document.querySelector(".overlay").style.display = "block";
}

function off() {
    document.querySelector(".overlay").style.display = "none";
}

popUpButton.addEventListener("click", on);
close.addEventListener("click", off);
