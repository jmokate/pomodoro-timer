const workBtn = document.getElementById('work');
const breakBtn = document.getElementById('break');
const startStopBtn = document.getElementById('startStop');
const resetTime = document.getElementById('resetBtn');
const displayModeText = document.getElementById('heading-2');
const audioBell = new Audio('bell.wav');
const defaultNum = '0' + '0';

let min = 25;
let sec = 60;
let currentIntervalId;
let isActive = false;
let isBreak = false;

const currentMinEl = document.getElementById('minutes');
currentMinEl.innerText = min;
const currentSecEl = document.getElementById('seconds');
currentSecEl.innerText = defaultNum;

//EVENT LISTENERS

workBtn.addEventListener('click', function() {
  isBreak = false;
  workTimeDisplay();
  displayModeText.innerText = 'Hit Start to Begin Work';
  displayModeText.style.color = 'white';
  resetTime.disabled = true;
  resetTime.style.background = 'black';
});
breakBtn.addEventListener('click', function(){
  isBreak = true;
  breakTimeDisplay();
  displayModeText.innerText = 'Hit Start to Take A Break';
  displayModeText.style.color = 'white';
  resetTime.disabled = true;
  resetTime.style.background = 'black';
  console.log(isBreak);
})


startStopBtn.addEventListener('click', function() {
  if (isActive == true) {
    clearInterval(currentIntervalId);
    buttonsEnabledStyle();
    isActive = !isActive;
    //return; was here but greyed out below (and below code still worked)
    if (min == 0 && sec == 0) {
      if (isBreak == false) {
        displayModeText.innerText = 'Hit Start to Take A Break';
        return;
      } displayModeText.innerText = 'Hit Start to Begin Work';       
    }
    return;
  }
    currentIntervalId = setInterval(decrement, 1000);
    buttonsDisabledStyle();
    if (min == 25) {
    min--;
    } else if (min == 5 && isBreak == true) {
      min--;
    }
    if (min == 0 && sec ==0){
      resetTime.disabled = true;
    }
    if (min == 0 && sec == 0) {
      if (isBreak == false) {
        isBreak = true; //sets to work time
        breakTimeDisplay();
        //displayModeText.innerText = 'Hit Start to Take A Break';
        //startStopBtn.disabled = false;
      } else if (isBreak == true) {
        isBreak = !isBreak; //sets to break time
        workTimeDisplay();
        //startStopBtn.disabled = false;
      }
    }
    console.log(isBreak);
  //console.log(isActive);
})


resetTime.addEventListener('click', function(e) {
  if (min == 0 && sec == 0) {
    if (isBreak == true) {
      isBreak = !isBreak; //sets to work time
      breakTimeDisplay();
      //startStopBtn.disabled = false;
    } else if (isBreak == false) {
      isBreak = true; //sets to break time
      workTimeDisplay();
      //startStopBtn.disabled = false;
    }
  }  if (min != 0 || sec != 0) {
        if (isBreak == true) {
          breakTimeDisplay();
        } else if (isBreak == false){
          workTimeDisplay();
        }
    }  
  console.log(isBreak);
});

//MAIN TIMER FUNCTION
function decrement() {
  sec--;
  currentMinEl.innerText = min;
  currentSecEl.innerText = sec;
  if (sec < 10){
    currentSecEl.innerText = '0' + sec;
  }
  if (min < 10) {
    currentMinEl.innerText = '0' + min;
  }
  if (sec < 0) {
    min--;
    currentMinEl.innerText = min;
    sec = 59;
    currentSecEl.innerText = sec;
  }
  if (sec == 0 && min == 0) {
    clearTimeout(currentIntervalId);    
    audioBell.play();
  }
}

function workTimeDisplay() {
  min = 25;
  sec = 60;
  currentMinEl.innerText = min;
  currentSecEl.innerText = defaultNum;
}

function breakTimeDisplay() {
  min = 5;
  sec = 60;
  currentMinEl.innerText = '0' + min;
  currentSecEl.innerText = defaultNum;
}

function buttonsEnabledStyle() {
  workBtn.disabled = false;
  breakBtn.disabled = false;
  resetTime.disabled = false;
  startStopBtn.innerText = 'start';
  startStopBtn.style.background = 'rgb(12, 80, 15)';
  workBtn.style.background = 'rgb(12, 80, 15)';
  breakBtn.style.background = 'rgb(201, 133, 44)';
  resetTime.style.background = '#999';
}

function buttonsDisabledStyle() {
  resetTime.disabled = true;
  isActive = true;
  startStopBtn.innerText = 'stop';
  startStopBtn.style.background = 'red';
  workBtn.disabled = true;
  breakBtn.disabled = true;
  workBtn.style.background = 'black';
  breakBtn.style.background = 'black';
  resetTime.style.background = 'black';
}
