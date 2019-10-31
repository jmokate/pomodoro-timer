const startTime = document.getElementById('startStop');
const stopTime = document.getElementsByClassName('stopBtn');
const breakTime = document.getElementsByClassName('resetBtn');
const resetTime = document.getElementById('resetBtn');

// let date = new Date();
// date.setMinutes(25);
// date.setSeconds(59);
// min = date.getMinutes();
// sec = date.getSeconds();

// let sec = Math.floor((1000 * 60) % 1);
// let timeMin = Math.floor((60000 * 25) % 1);
// let breakMin = 5;

let min = 0;
let sec = 5;
let defaultNum = '0' + '0';

let interval;


let minText = document.getElementById('minutes');
minText.innerText = min;

let secondsText = document.getElementById('seconds');
secondsText.innerText = defaultNum;

//let id = setInterval(decrement, 1000);
let id;
let intFunc;

//EVENT LISTENERS
// startTime.addEventListener('click', function() {setTimeout(decrement, 1000)});
// //startTime.addEventListener('click', function() {InnerText = 'stop'});
// startTime.addEventListener('click', stopText);
// resetTime.addEventListener('click', reset);
startTime.addEventListener('click', function(e) {
  if (id = !id) {
    resetTime.disabled = true;
    startTime.innerText = 'stop';
    intFunc = setInterval(decrement, 1000);
  } else if (id = true) {
    stopCount();
  } 
});

//FUNCTIONS

function stopCount() {
  resetTime.disabled = false;
  clearInterval(intFunc);
}

function resumeCount() {
  setInterval(intFunc);
}

//MAIN TIMER FUNCTION
function decrement() {
  //let id = setTimeout(decrement, 1000);
  

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
    startTime.disabled = true;
    resetTime.disabled = false;
  }
}

function reset() {
  if (sec == 0 && min == 0) {

  }
}










// startTime.addEventListener('click', startClock())
// function startClock(){
//   sec - 1;

  
// }
// setInterval(startClock, 1000);


// console.log(countDown);
