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



var convertToHHMMSS = function(timerCount) {
    var sec_num = parseInt(timerCount, 10); // don't forget the second param
    var hourlyDigits   = Math.floor(sec_num / 3600);
    var minutelyDigits = Math.floor((sec_num - (hourlyDigits * 3600)) / 60);
    var secondlyDigits = sec_num - (hourlyDigits * 3600) - (minutelyDigits * 60);

    if (hourlyDigits   < 10) {hourlyDigits   = "0"+hourlyDigits;}
    if (minutelyDigits < 10) {minutelyDigits = "0"+minutelyDigits;}
    if (secondlyDigits < 10) {secondlyDigits = "0"+secondlyDigits;}

    console.log(hourlyDigits+ ":" + minutelyDigits + ":"+  secondlyDigits)
    return hourlyDigits+':'+minutelyDigits+':'+secondlyDigits;
}

// update timer display method
var updateTimerDisplay = function(){
  timerDisplay.innerText = convertToHHMMSS(timerCount)
}

// increment timer count method
var incrementTimer = function(){
  timerCount += 1;
}

// restart method
restartButton.addEventListener('click', function(){
  clearInterval(timer);
  timerCount = 0;
  timer = null;
  cycle = false;
  updateTimerDisplay();
});

// start method
startButton.addEventListener('click', function(){
  if (cycle === false){
    cycle = true;
    timer = setInterval( function(){
      incrementTimer();
      updateTimerDisplay();
    }, 1000);
  }
});

// pause method
pauseButton.addEventListener('click', function(){
  if (cycle === true){
    cycle = false
    clearInterval(timer);
  };
});
