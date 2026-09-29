// js/slider.js
const heroImg = document.querySelector('.hero-img');
const prevBtn = document.querySelector('.slider-arrow.left');
const nextBtn = document.querySelector('.slider-arrow.right');
const dots = document.querySelectorAll('.slider-dots .dot');

const slides = [
    'images/hovedbanner 4.jpg',
    'images/hovedbanner.jpg',
    'images/hovedbanner 2.jpg',
    'images/hovedbanner 1.jpg',
   'images/hovedbanner 3.jpg',

];

const intervalTime = 4000; // Tid for automatisk skift (4 sekunder)
let current = 0;
let timer;

// Vis bestemt slide og opdater prikkerne (dots)
function showSlide(index) {
    if (!heroImg) return;
    current = (index + slides.length) % slides.length;
    
    // Skift bannerbillede
    heroImg.src = slides[current];

    // Opdater active-klasse på prikkerne
    dots.forEach((dot, i) => {
        if (i === current) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Start eller genstart timeren for den automatiske slider
function startAutoSlide() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), intervalTime);
}

// Klik-hændelse for forrige knap (venstre)
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        showSlide(current - 1);
        startAutoSlide(); // Når brugeren klikker, genstartes timeren forfra
    });
}

// Klik-hændelse for næste knap (højre)
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        showSlide(current + 1);
        startAutoSlide();
    });
}

// Klik-hændelse på prikkerne for at gå til et bestemt slide
dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        showSlide(index);
        startAutoSlide();
    });
});

// Første kørsel af slideren
showSlide(0);
startAutoSlide();