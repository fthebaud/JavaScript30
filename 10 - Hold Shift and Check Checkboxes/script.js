'use strict';

// Useless, there is an event.shifKey !
// let isShiftDown = false;

// document.addEventListener('keydown', event => {
//   console.log(event.code);
//   isShiftDown = event.keyCode === 16;
//   console.log('isShiftDown: ', isShiftDown);
// });
//
// document.addEventListener('keyup', () => {
//   isShiftDown = false;
//   console.log('isShiftDown: ', isShiftDown);
// });

let lastCheckBox;

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkboxChange)); // for a checkbox, click event will fire even if we use the keyboard

function checkboxChange(event) {
  // if (!isShiftDown) return; //eslint-disable-line curly
  let inBetween = false;
  if (event.shiftKey && this.checked && lastCheckBox) {
    checkboxes.forEach(checkbox => {
      if (inBetween) {
        checkbox.checked = true;
      }
      if (checkbox === this || checkbox === lastCheckBox) {
        inBetween = !inBetween;
      }
    });
  }
  lastCheckBox = this;
  if (this.checked) {
    lastCheckBox = this;
  } else {
    lastCheckBox = null;
  }
}
