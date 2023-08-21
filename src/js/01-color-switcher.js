

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerId = null;
startBtn.addEventListener("click", onClickStartBtn);
stopBtn.addEventListener("click", onClickStopBtn);

function onClickStartBtn() {
    timerId = setInterval(() => {
        startBtn.disabled = true; 
        body.style.backgroundColor = getRandomHexColor()   
    }, 1000)
      
}

function onClickStopBtn() {
    startBtn.disabled = false;
    clearInterval(timerId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}