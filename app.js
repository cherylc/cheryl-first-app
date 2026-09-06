const text = 'bubblegum';
const container = document.getElementById('bubblegum-text');
const totalDuration = 2000;
const overlap = 0.55;
const stepDuration = totalDuration / (text.length + 1 - overlap * (text.length - 1));

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.textContent = text[i];
  span.style.animationDelay = `${i * stepDuration * (1 - overlap)}ms`;
  container.appendChild(span);
}

const popSound = new Audio('pop.wav');
const button = document.getElementById('pop-button');

let popInterval = null;

function playPop() {
  popSound.currentTime = 0;
  popSound.play().catch(() => {});
}

function startPopping() {
  playPop();
  if (popInterval) return;
  popInterval = setInterval(() => {
    playPop();
  }, 420);
}

function stopPopping() {
  if (popInterval) {
    clearInterval(popInterval);
    popInterval = null;
  }
  button.textContent = 'pop!';
  button.classList.remove('active');
}

function press() {
  button.textContent = 'POP!';
  button.classList.add('active');
  startPopping();
}

button.addEventListener('mousedown', press);
button.addEventListener('touchstart', (event) => {
  event.preventDefault();
  press();
}, { passive: false });

button.addEventListener('mouseup', stopPopping);
button.addEventListener('mouseleave', stopPopping);
button.addEventListener('touchend', stopPopping);
button.addEventListener('touchcancel', stopPopping);
