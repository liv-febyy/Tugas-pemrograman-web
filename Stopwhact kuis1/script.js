let milliseconds = 0;
let seconds = 0;
let timer;
let running = false;

function updateDisplay() {
  document.getElementById('seconds').textContent = seconds.toString().padStart(3, '0');
  document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(2, '0');
}

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      milliseconds++;
      if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
      }
      updateDisplay();
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  stopTimer();
  milliseconds = 0;
  seconds = 0;
  updateDisplay();
}

updateDisplay();
