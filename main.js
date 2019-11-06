const workBtn = document.getElementById('work');
const breakBtn = document.getElementById('break');
const startStopBtn = document.getElementById('startStop');
const resetTime = document.getElementById('resetBtn');
const displayModeText = document.getElementById('heading-2')
const defaultNum = '0' + '0';
let min = 0;
let sec = 5;


let currentMinEl = document.getElementById('minutes');
currentMinEl.innerText = min;

let currentSecEl = document.getElementById('seconds');
currentSecEl.innerText = defaultNum;

let currentIntervalId;
let isActive = false;
let isBreak = false;

//EVENT LISTENERS

workBtn.addEventListener('click', function() {
  min = 0;
  sec = 5;
  displayModeText.innerText = 'Hit Start to Get Back to Work';
  displayModeText.style.color = 'red';
  resetTime.disabled = true;
});
breakBtn.addEventListener('click', function(){
  min = 0;
  sec = 6;
  displayModeText.innerText = 'Hit Start to Take A Break';
  displayModeText.style.color = 'green';
  resetTime.disabled = true;
})


startStopBtn.addEventListener('click', function() {
  if (isActive == true) {
    //stopCount();
    clearInterval(currentIntervalId);
    workBtn.disabled = false;
    breakBtn.disabled = false;
    resetTime.disabled = false;
    startStopBtn.innerText = 'start';
    isActive = !isActive;
    if (min == 0 && sec == 0) {
      if (isBreak == false) {
        displayModeText.innerText = 'Hit Start to Take A Break';
        displayModeText.style.color = 'green';
        return;
      } displayModeText.innerText = 'Hit Start to Get Back to Work';
        displayModeText.style.color = 'red';
    }
    return;
  } //else if (isActive === false) {
    currentIntervalId = setInterval(decrement, 1000);
    resetTime.disabled = true;
    isActive = true;
    startStopBtn.innerText = 'stop';
    workBtn.disabled = true;
    breakBtn.disabled = true;
    if (min == 0 && sec ==0){
      resetTime.disabled = true;
    }
    if (min == 0 && sec == 0) {
      if (isBreak == false) {
        isBreak = true; //sets to work time
        min = 0;
        sec = 6;
        //displayModeText.innerText = 'Hit Start to Take A Break';
        //startStopBtn.disabled = false;
      } else if (isBreak == true) {
        isBreak = !isBreak; //sets to break time
        min = 0;
        sec = 5;
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
      min = 0;
      sec = 6;
      //startStopBtn.disabled = false;
    } else if (isBreak == false) {
      isBreak = true; //sets to break time
      min = 0;
      sec = 5;
      //startStopBtn.disabled = false;
    }
  }  if (min != 0 || sec != 0) {
        if (isBreak == true) {
          min = 0;
          sec = 6;
        } else if (isBreak == false){
          min = 0;
          sec = 5;
        }
    }  
  console.log(isBreak);
});

//MAIN TIMER FUNCTION
function decrement() {
  sec--;
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
    //startStopBtn.disabled = true;
    //resetTime.disabled = false;
  }
}
