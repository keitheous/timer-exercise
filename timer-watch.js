console.log('hello world - timer-watch.js connected');

var timerStartButton = document.getElementById('timer-start');
var timerRestartButton = document.getElementById('timer-restart');
var timerPauseButton = document.getElementById('timer-pause');

var timerDisplay = document.getElementById('timer-display');
var userInputSeconds = document.getElementById('timer-seconds');

var decrementalCounter = null // interface's counter
var timer = null;   // switches on and off
var cycle = false

var setInitialState = function(){

  decrementalCounter = null // interface's counter
  clearInterval(timer);  // switches on and off
  timer = null;
  cycle = false
}

var finishCountDown = function(){
  setInitialState();
}
// decremental timer count method
var decrementTimer = function(){
  decrementalCounter -= 1;

  if (decrementalCounter == -1) {
    finishCountDown();
  }
}

var appendTimerDisplay = function(){
  timerDisplay.innerText = decrementalCounter
}

timerRestartButton.addEventListener('click', function(){
  setInitialState();
  appendTimerDisplay();
});

timerStartButton.addEventListener('click', function(){
  if (cycle == false){
    cycle = true
    decrementalCounter = userInputSeconds.value;
    timer = 1
  }

  if (timer != null){
    timer = setInterval( function(){
      appendTimerDisplay();
      decrementTimer();
    }, 1000);
  }
})

timerPauseButton.addEventListener( 'click', function(){
  if (timer != null){
    clearInterval(timer);
  }
})
