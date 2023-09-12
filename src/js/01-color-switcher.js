function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

const changeColor = () => {
  timerId = setInterval(() => {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
  }, 1000);

  btnStart.disabled = true;
};
btnStart.addEventListener('click', changeColor);

const stopChangeColor = () => {
  clearInterval(timerId);
  btnStart.disabled = false;
};

btnStop.addEventListener('click', stopChangeColor);
