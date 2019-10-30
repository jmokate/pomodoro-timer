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

startTime.addEventListener('click', function() {setTimeout(decrement, 1000)});

startTime.addEventListener('click', function() {InnerText = 'stop'});



function decrement() {
  let id = setTimeout(decrement, 1000);
  startTime.innerText = 'stop';

  sec--;
  secondsText.innerText = sec;
  if (sec < 10){
    secondsText.innerText = '0' + sec;
  }
  if (sec < 0) {
    min--;
    minText.innerText = min;
    sec = 59;
    secondsText.innerText = sec;
  }
  if (sec == 0 && min == 0) {
    clearTimeout(id);
    startTime.disabled = true;

  }
   //setTimeout(decrement, 1000);
}




if (sec == 0 && min == 0) {
  clearInt;
}

function clearD() {
  if (sec === 0 && min === 0) {
      clearInterval(decrement, 1000);
  }
}





// startTime.addEventListener('click', startClock())
// function startClock(){
//   sec - 1;

  
// }
// setInterval(startClock, 1000);


// console.log(countDown);
