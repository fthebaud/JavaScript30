'use strict';

const divs = document.querySelectorAll('div');

function logText(event) {
  console.log(this.classList.value);
  // stop the propagation of the event
  event.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // by default it's false (events are bubbling up)
  once: true // will listen for a click once and then unbind itself (removeEventListener)
}));
