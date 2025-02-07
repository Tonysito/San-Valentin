const btnNo = document.querySelector ('#btn-random');

function moverAleatoriamente (btn) {
  btn.style.position = 'absolute';
  btn.style.fontWeight = 'bolder';
  btn.style.top = Math.floor (Math.random () * 90 + 5) + '%';
  btn.style.left = Math.floor (Math.random () * 90 + 5) + '%';
}

btnNo.addEventListener ('mouseenter', function (e) {
  moverAleatoriamente (e.target);
});

// Create floating hearts background
function createHeart () {
  const heart = document.createElement ('div');
  heart.className = 'heart';
  heart.style.cssText = `
        position: fixed;
        font-size: ${Math.random () * 20 + 10}px;
        left: ${Math.random () * 100}vw;
        top: -20px;
        opacity: ${Math.random ()};
        transform: translateY(0);
        animation: fall ${Math.random () * 3 + 2}s linear;
    `;
  heart.innerHTML = '❤️';
  document.querySelector ('.hearts-bg').appendChild (heart);

  heart.addEventListener ('animationend', () => heart.remove ());
}

// Create hearts periodically
setInterval (createHeart, 300);

// Carousel functionality
let currentSlide = 0;
const carousel = document.querySelector ('.carousel');
const slides = document.querySelectorAll ('.carousel img');

function updateCarousel () {
  carousel.style.transform = `translateX(-${currentSlide * 300}px)`;
}

setInterval (() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel ();
}, 3000);

// Button interactions
let noCount = 0;
const phrases = [
  'No 😢',
  '¿Estás segura?',
  '¿De verdad?',
  '¡Piénsalo otra vez!',
  '¡Última oportunidad!',
  '¿Segurísima? 🥺',
  '¡Me vas a hacer llorar!',
  '¡No me hagas esto! 😭',
];

function moveNoButton () {
  const btn = document.querySelector ('.no-btn');
  const container = document.querySelector ('.container');
  const maxX = container.clientWidth - btn.clientWidth;
  const maxY = container.clientHeight - btn.clientHeight;

  const randomX = Math.random () * maxX;
  const randomY = Math.random () * maxY;

  btn.style.position = 'fixed';
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;

  noCount++;
  if (noCount < phrases.length) {
    btn.textContent = phrases[noCount];
  }
}

function handleYesClick () {
  const container = document.querySelector ('.container');
  container.innerHTML = `
        <div class="proposal-card" style="text-align: center;">
            <h1 class="title">¡Gracias mi amor! 💖</h1>
            <p class="subtitle">¡Será el mejor San Valentín!</p>
            <div style="margin: 2rem 0;">
                <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
                     alt="Celebración" 
                     style="width: 200px;">

                    <a href="./margarita.html">Dale click</a>
            </div>
        </div>
    `;
}

// Prevent the no button from being clicked
document.querySelector ('.no-btn').addEventListener ('click', e => {
  e.preventDefault ();
  moveNoButton ();
});
