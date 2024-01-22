let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel .slide');
  const totalSlides = slides.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const newPosition = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + newPosition + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// setInterval(() => {
//   nextSlide();
// }, 3000);
