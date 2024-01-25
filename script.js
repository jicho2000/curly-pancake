// header moving js
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
        if (scrollPosition === 0) {
        header.style.backgroundColor = 'rgba(26, 30, 31, 1)';
        } else {
        header.style.backgroundColor = 'rgba(26, 30, 31, 0.9)';
        }
    });
    });
// carousel js
let currentSlide = 1;

function showSlide(slideIndex) {
const slides = document.querySelectorAll('.slider__logos > div');
const dots = document.querySelectorAll('.slider__btn__ol a');

if (slideIndex > slides.length) {
    currentSlide = 1;
} else if (slideIndex < 1) {
    currentSlide = slides.length;
} else {
    currentSlide = slideIndex;
}

slides.forEach((slide, index) => {
    slide.style.display = index + 1 === currentSlide ? 'flex' : 'none';
});

dots.forEach((dot, index) => {
    dot.classList.toggle('active', index + 1 === currentSlide);
});
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

const dotButtons = document.querySelectorAll('.slider__btn__ol a');
dotButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        goToSlide(index + 1);
    });
});
setInterval(() => {
    nextSlide();
}, 4000);


function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    var arrow = event.currentTarget.querySelector('svg');

    // Check if the answer is currently visible
    var isAnswerVisible = answer.style.display !== 'none' && answer.style.display !== '';

    // Hide all answers
    var allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(function (a) {
        a.style.display = 'none';
    });

    // Reset all arrows
    var allArrows = document.querySelectorAll('svg');
    allArrows.forEach(function (a) {
        a.style.transform = 'rotate(0deg)';
    });

    // If the answer is not currently visible, show it with an upward arrow
    if (!isAnswerVisible) {
        answer.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
}












