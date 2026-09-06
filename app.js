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
