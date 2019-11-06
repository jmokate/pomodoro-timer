const startStopBtn = document.getElementById('startStop');
const resetTime = document.getElementById('resetBtn');

const defaultNum = '0' + '0';
let min = 0;
let sec = 5;


let minText = document.getElementById('minutes');
minText.innerText = min;

let secondsText = document.getElementById('seconds');
secondsText.innerText = defaultNum;


let isActive = false;
let currentIntervalId;
let isBreak = false;
//let isWork = true;

//EVENT LISTENERS

startStopBtn.addEventListener('click', function() {
  if (isActive == true) {
    //stopCount();
    clearInterval(currentIntervalId);
    resetTime.disabled = false;
    startStopBtn.innerText = 'start';
    isActive = !isActive;
    return;
  } //else if (isActive === false) {
    currentIntervalId = setInterval(decrement, 1000);
    resetTime.disabled = true;
    isActive = true;
    startStopBtn.innerText = 'stop';
    if (min == 0 && sec ==0){
      resetTime.disabled = false;
    }

  console.log(isActive);
})

// startStopButton.addEventListener('click', function() {
//   if (isActive === false) {
//     isActive = true;
//     resetTime.disabled = true;
//     startStopButton.innerText = 'stop';
//     currentIntervalId = setInterval(decrement, 1000);
//   } else if (isActive === true) {
//     isActive = !isActive;
//     stopCount();
//   }
//   console.log(isActive);
// });

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
    clearTimeout(currentIntervalId);    
    //startStopBtn.disabled = true;
    //resetTime.disabled = false;
  
   // min = 0;
   // sec = 6;
    //startTime.addEventListener('click', breakTimer());
  }
}
