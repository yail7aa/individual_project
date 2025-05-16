const track = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.review-card');
const prev = document.querySelector('.slider-btn.slider-prev');
const next = document.querySelector('.slider-btn.slider-next');

let currentIndex = 1;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth;

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  cards.forEach(card => card.classList.remove('active'));

  if (cards[currentIndex]) {
    cards[currentIndex].classList.add('active');
  }
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateSlider();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
});

window.addEventListener('resize', updateSlider);

window.addEventListener('DOMContentLoaded', updateSlider);
