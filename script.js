const btnStart = document.querySelector('.start-button');
const btnReset = document.querySelector('.reset-button');
const inputSession = document.querySelector('#session-input');
let labelTimer = document.querySelector('.timer');
let timerInterval = 0;

let userMinutes = 0;
let count = 1;
let userBreak = 0;



function startTimer(duration, display){
    let timer = duration, minutes, seconds;
     count ++;
    timerInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
            
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
            
        if(--timer < 0 && count%2 == 0 ){
            userBreak = 60 * document.querySelector('#break-input').value;
            timer = userBreak;
            count++
        } else if (--timer < 0 && !count%2 == 0){
            timer = userMinutes;
            count++
        }
    }, 1000);
    }
        
btnStart.addEventListener('click', () =>{
    userMinutes = 60 * document.querySelector('#session-input').value;
    display = document.querySelector('.timer')
    startTimer(userMinutes, display);
})

inputSession.addEventListener('keyup', () =>{
    labelTimer.textContent = inputSession.value + ':00';
})

btnReset.addEventListener('click',() =>{
    timerReset();
    labelTimer.textContent = inputSession.value + ':00';
});

timerReset = () =>{
    clearInterval(timerInterval);
    }
