 window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".custom-navbar");

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // participants school
    const track = document.querySelector('.logo-track');

let position = 0;

function moveLogos() {
    position -= 0.5;

    track.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
    }

    requestAnimationFrame(moveLogos);
}

moveLogos();

// left to right
const trackright = document.querySelector('.logo-trackekd');
let positionright = 0;
function moveLogosRight() {
    positionright += 0.5;
    trackright.style.transform = `translateX(${positionright}px)`;
    if(positionright >= trackright.scrollWidth / 2){
        positionright = 0;
    }       
    requestAnimationFrame(moveLogosRight);
}
moveLogosRight();

// dots
const tracks = document.querySelector(".school-track");
const cards = document.querySelectorAll(".school-card");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let startX = 0;

/* ===== CREATE DOTS ===== */
cards.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

/* ===== UPDATE SLIDER ===== */
function updateSlider() {
    tracks.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

/* ===== SWIPE SUPPORT (MOBILE) ===== */
tracks.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

tracks.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50 && currentIndex < cards.length - 1) {
        currentIndex++;
    } else if (endX - startX > 50 && currentIndex > 0) {
        currentIndex--;
    }

    updateSlider();
});

// exhibition slider
document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".exhibition-track");
    const cards = document.querySelectorAll(".exhibition-card");
    const prev = document.querySelector(".arrow.left");
    const next = document.querySelector(".arrow.right");

    let index = 0;

    function slide() {
        track.style.transform =
            `translateX(-${index * (cards[0].offsetWidth + 20)}px)`;
    }

    next.addEventListener("click", () => {
        if (index < cards.length - 1) {
            index++;
            slide();
        }
    });

    prev.addEventListener("click", () => {
        if (index > 0) {
            index--;
            slide();
        }
    });

});
