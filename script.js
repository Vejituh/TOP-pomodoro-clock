var btnStart = document.querySelector('.start-button');
var inputSession = document.querySelector('#session-input');
let labelTimer = document.querySelector('.timer');

let userMinutes = 0;
let count = 1;
let userBreak = 0;



function startTimer(duration, display){
    let timer = duration, minutes, seconds;
     count ++;
    setInterval(function () {
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
        
btnStart.addEventListener('click', function(){
    userMinutes = 60 * document.querySelector('#session-input').value;
    display = document.querySelector('.timer')
    startTimer(userMinutes, display);
})

inputSession.addEventListener('keyup', function(){
    labelTimer.textContent = inputSession.value + ':00';
})
