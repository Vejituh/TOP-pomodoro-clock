const btnStart = document.querySelector('.start-button');
const btnReset = document.querySelector('.reset-button');
const btnPause = document.querySelector('.pause-button');
const btnStop = document.querySelector('.stop-button');
const inputSession = document.querySelector('#session-input');
const breakSession = document.querySelector('#break-input');
const displayMinutes = document.querySelector(".display-minutes");
const displaySeconds = document.querySelector(".display-seconds");
let isPaused = false;
let onBreak = false;

timerReset = () =>{
    clearInterval(timerInterval);
    };

function updateDisplay(minutes, seconds) {
  seconds = seconds < 10 ? "0" + seconds : seconds;
  displayMinutes.textContent = minutes;
  displaySeconds.textContent = seconds;
  document.title = `${minutes}:${seconds}`;
}

let timerInterval;

function startTimer(){
        let countdown = 
        parseInt(displayMinutes.textContent * 60) +
        parseInt(displaySeconds.textContent);
        onBreak = true;
        timerInterval = setInterval( () => {
            countdown --;
         updateDisplay(parseInt(countdown / 60, 10), parseInt(countdown % 60, 10));
         if (isPaused) {
             return;
         } 
         if (countdown === 0){
             if(onBreak) {
                  countdown = inputSession.value * 60 + 1;
                  onBreak = false;
             } else {
                 countdown = breakSession.value * 60 + 1;
                 onBreak = true;
             }
         }
        }, 1000);
        }
        
btnStart.addEventListener('click', startTimer);

inputSession.addEventListener('keyup', () =>{
    displayMinutes.textContent = inputSession.value;
})

btnReset.addEventListener('click',() =>{
    timerReset();
    displayMinutes.textContent = inputSession.value;
    displaySeconds.textContent = '00';
});

btnPause.addEventListener('click', timerReset);

btnStop.addEventListener('click',() => {
        timerReset();
    displayMinutes.textContent = inputSession.value;
    displaySeconds.textContent = '00';
});
