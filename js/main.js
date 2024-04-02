// Burger-menu

const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('show');
});

const icon = document.querySelector('.burger-menu');

function toggleIcon() {

    if (icon.textContent === '☰') {
        icon.textContent = '×';
    } else {
        icon.textContent = '☰';
    }
}

icon.addEventListener('click', toggleIcon);

// Slider comparaison

const slider = document.querySelector('.image-comparaison .slider');
const beforeImage = document.querySelector('.image-comparaison .before');
const sliderLine = document.querySelector('.image-comparaison .slider-line');
const sliderIcon = document.querySelector('.image-comparaison .slider-icon');

slider.addEventListener('input', (e) => {
    let sliderValue = e.currentTarget.value + '%';
    beforeImage.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
});

// Slider skills

const imgList = document.querySelector('.slider-image');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

right.addEventListener('click', () => {
    imgList.scrollBy(750, 0);
});

left.addEventListener('click', () => {
    imgList.scrollBy(-750, 0);
});

// images hobbies

const images = document.querySelectorAll('.nav-hobbies a');

images.forEach((image) => {
    image.addEventListener('click', (e) => {
        const img = e.currentTarget.querySelector('img');
        document.querySelector('.main-hobbies img').src = img.src;
    });
});

// Pop-up exp

const popUpButtons = document.querySelectorAll('.button');
const close = document.querySelector('.close-exp');
const overlay = document.querySelector('.overlay');
const popUp = document.getElementById('popup-exp');

function on() {
    overlay.style.display = 'block';
    popUp.style.visibility = 'visible';
}

function off() {
    overlay.style.display = 'none';
    popUp.style.visibility = 'hidden';
}

function offPopUp(e) {
    if (e.currentTarget === overlay) {
        off();
    }
}

popUpButtons.forEach((popUpButton) => {
    popUpButton.addEventListener('click', on);
});

close.addEventListener('click', off);
overlay.addEventListener('click', offPopUp);

// Slider exp

const line = document.querySelector('.timeline');
const left1 = document.querySelector('.left1');
const right1 = document.querySelector('.right1');

left1.addEventListener('click', () => {
    line.scrollBy(-300, 0);
});

right1.addEventListener('click', () => {
    line.scrollBy(300, 0);
});

// Slider comment

const comment = document.querySelector('.comment-img');
const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');

right2.addEventListener('click', () => {
    comment.scrollBy(400, 0);
});

left2.addEventListener('click', () => {
    comment.scrollBy(-400, 0);
});

// Border red hobbies

/*

const border = document.querySelector('.items a');

border.addEventListener('click', function() {
    this.classList.add('active');
});

*/
