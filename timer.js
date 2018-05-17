console.log('hello world - timer.js connected');

// dom elements declared by id
var restartButton = document.getElementById('restart');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var timerDisplay = document.getElementById('display');

// js variables for timer
var timerCount = 0; // seconds
var timer = null;   // switches on and off
var cycle = false;  // cycle to prevent clicking start twice

// update timer display method
var updateTimerDisplay = function(){
  timerDisplay.innerText = timerCount
}

// increment timer count method
var incrementTimer = function(){
  timerCount += 1;
}

// restart method
restartButton.addEventListener('click', function(){
  console.log('restart clicked');
  console.log('restart state');
  timerCount = 0;
  timer = null;
  cycle = false;
  updateTimerDisplay();
});

// start method
startButton.addEventListener('click', function(){
  if (cycle === true){
    console.log('there is a current timer running');
  } else {
    cycle = true;
    console.log('start clicked');
    console.log('for every second, increment timer & update display')
    timer = setInterval( function(){
      incrementTimer();
      updateTimerDisplay();
    }, 1000);
  }
});

// pause method
pauseButton.addEventListener('click', function(){
  console.log('pause clicked');
  console.log('pause timer incrementation by using clearInterval')
  if (cycle === true){
    clearInterval(timer);
  } else {
    console.log('there is no cycle running');
  }
});
