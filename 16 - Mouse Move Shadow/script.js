'use strict';

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // distance max => max coordinates are going to be -50 et +50 around the element

const {offsetHeight: height, offsetWidth: width} = hero;

function shadow(event) {
  let {offsetX: x, offsetY: y} = event;
  //this = hero, but event.target = hero or h1 (children of hero)
  if (this !== event.target) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }

  const xwalk = Math.round(x / width * walk - walk / 2);
  const ywalk = Math.round(y / height * walk - walk / 2);
  console.log(xwalk, ywalk);
  text.style.textShadow = `
    ${xwalk}px ${ywalk}px 0 rgb(87, 140, 32),
    ${xwalk * -1}px ${ywalk * - 1}px 0 rgb(164, 111, 5)
  `;
}


hero.addEventListener('mousemove', shadow);
