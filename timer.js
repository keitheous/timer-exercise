console.log('hello world - timer.js connected');

// dom elements declared by id
var restartButton = document.getElementById('restart');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var timerDisplay = document.getElementById('display');

// js variables for timer
var timerCount = 0; // seconds
var timer = null; // switches on and off

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
  updateTimerDisplay();
})

// start method
startButton.addEventListener('click', function(){
  console.log('start clicked');
})

// pause method
pauseButton.addEventListener('click', function(){
  console.log('pause clicked');
})
