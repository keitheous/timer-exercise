console.log('hello world - timer.js connected');

// buttons declaration by dom id
var restartButton = document.getElementById('restart')
var startButton = document.getElementById('start')
var pauseButton = document.getElementById('pause')


// restart method
restartButton.addEventListener('click', function(){
  console.log('restart clicked');
})


// start method
startButton.addEventListener('click', function(){
  console.log('start clicked');
})


// pause method
pauseButton.addEventListener('click', function(){
  console.log('pause clicked');
})
