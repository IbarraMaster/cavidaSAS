const track = document.querySelector('.js-carousel-track');
const images = track.querySelectorAll('img');
let currentIndex = 0;

function autoSlide() {
  const total = images.length;
  currentIndex++;

  if (currentIndex >= total) {
    currentIndex = 0;
  }

  const imageWidth = images[0].offsetWidth + 16; // margen entre imágenes
  track.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
}

let slideInterval = setInterval(autoSlide, 3000);

// Pausa al pasar el mouse
track.addEventListener('mouseenter', () => clearInterval(slideInterval));
track.addEventListener('mouseleave', () => {
  slideInterval = setInterval(autoSlide, 3000);
});
