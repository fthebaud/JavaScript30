'use strict';

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

let intervalId;

function timer(seconds) {
  // clear any existing timer
  clearInterval(intervalId);

  const stop = Date.now() + (seconds * 1000); //when to stop (in ms)
  displayEndTime(stop);
  // toutes les secondes on regarde s'il faut arrêter l'intervale
  // ! setInterval doesn't run immediately
  displayTimeLeft(seconds);
  intervalId = setInterval(() => {
    const msLeft = stop - Date.now();
    const secondsLeft = Math.round(msLeft / 1000);
    //do we need to stop ?
    if (secondsLeft < 0) {
      clearInterval(intervalId);
      return;
    }
    //display the seconds remaining
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hours}:${minutes < 10 ? '0' : '' }${minutes}`;
}

function startTimer() {
  const seconds = Number.parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

// can't use an arrow function here, because the this would be the "inhereted" this, ie the window.
// with function, the this will be binded to the element (the form)
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault(); //prevent page reload
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
})