function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let colorChange;

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

stopButton.disabled = true;

startButton.addEventListener('click', function () {
  startButton.disabled = true;
  stopButton.disabled = false;

  colorChange = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', function () {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(colorChange);
});
