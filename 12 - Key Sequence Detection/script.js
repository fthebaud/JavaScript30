'use strict';

const secretCode = ['b', 'e', 'f', 'a', 'ArrowUp'];
let pressed = [];


document.addEventListener('keyup', (event) => {
  pressed.push(event.key);
  if (pressed.length > secretCode.length) {
    pressed.shift();
  }
  let match = pressed.every((key, index) => key === secretCode[index]);
  if(match){
    cornify_add(); //eslint-disable-line no-undef
  }
});
