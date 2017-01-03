'use strict';

function playsound(keycode) {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; //rewind
  audio.play();
}

function animate(keycode) {
  const key = document.querySelector(`.key[data-key="${keycode}"]`);
  if (!key) {
    return;
  }
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName === 'transform') {
    // note : this = e.target dans le contexte d'une fonction appelée pour un evenement
    this.classList.remove('playing');
  }
}

window.addEventListener('keydown', function (e) {
  const keycode = e.keyCode;
  console.log('keycode: ', keycode);
  playsound(keycode);
  animate(keycode);
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
