const startTime = document.getElementById('startStop');
const stopTime = document.getElementsByClassName('stopBtn');
const breakTime = document.getElementsByClassName('resetBtn');
const resetTime = document.getElementById('resetBtn');

const defaultNum = '0' + '0';
let min = 0;
let sec = 5;


let minText = document.getElementById('minutes');
minText.innerText = min;

let secondsText = document.getElementById('seconds');
secondsText.innerText = defaultNum;


let isActive;
let intFunc;
let isBreak;

//EVENT LISTENERS

startTime.addEventListener('click', function() {
  if (isActive = !isActive) {
    resetTime.disabled = true;
    startTime.innerText = 'stop';
    intFunc = setInterval(decrement, 1000);
  } else if (isActive = true) {
    isActive = !isActive;
    stopCount();
    breakTimer();
  }
  console.log(isActive);
});

resetTime.addEventListener('click', function(e) {
  min = 0;
  sec = 5;
  defaultNum;

  let minText = document.getElementById('minutes');
  minText.innerText = min;

  let secondsText = document.getElementById('seconds');
  secondsText.innerText = defaultNum;
});


//FUNCTIONS

function stopCount() {
  resetTime.disabled = false;
  startTime.innerText = 'start';
  clearInterval(intFunc);
}


//MAIN TIMER FUNCTION
function decrement() {
  sec--;
  secondsText.innerText = sec;
  if (sec < 10){
    secondsText.innerText = '0' + sec;
  }
  if (min < 10) {
    minText.innerText = '0' + min;
  }
  if (sec < 0) {
    min--;
    minText.innerText = min;
    sec = 59;
    secondsText.innerText = sec;
  }
  if (sec == 0 && min == 0) {
    clearTimeout(intFunc);
    //resetTime.disabled = false;
    startTime.addEventListener('click', breakTimer());
  }
}

function breakTimer() {
  min = 0;
  sec = 6;
  defaultNum;
  if (sec == 0 && min == 0) {
    clearInterval(intfunc);
    
  }
}

console.log(isBreak);