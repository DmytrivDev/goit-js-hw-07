function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const cokorOutput = document.querySelector('span.color');
const button = document.querySelector('button.change-color');

button.addEventListener('click', changeColor);

function changeColor(event) {
  event.preventDefault();
  
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  cokorOutput.textContent = newColor;
}
