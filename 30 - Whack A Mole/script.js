'use strict';

const scoreBoard = document.querySelector('.score');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timesup = true;
let score = 0;

function randtime(min, max) {
  // randtime = rand * (max - min) + min
  return Math.round(Math.random() * (max - min) + min);
}


function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
     console.log('same, retry !');
     randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randtime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timesup) peep(); // eslint-disable-line curly
  }, time);
}

function startGame() {
  score = 0;
  scoreBoard.textContent = 0;
  timesup = false;
  peep();
  setTimeout(() => {
    timesup = true;
  }, 10000);
}

function bonk(event) {
  if (!event.isTrusted) return; // eslint-disable-line curly
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

document.querySelector('button').addEventListener('click', startGame);

moles.forEach(mole => {
  mole.addEventListener('click', bonk);
});