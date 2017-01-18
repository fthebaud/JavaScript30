'use strict';

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 200);
  background.classList.add('open');

  // let's get the dropdown associated with the li element
  const dropDown = this.querySelector('.dropdown');
  //gives the coordinates on the page
  const dropDownCoords = dropDown.getBoundingClientRect();
  // we want the coordinates to be relative to the nav, not to the page, in case something gets added
  const navCoords = nav.getBoundingClientRect();
  //calculating the coords
  const coords = {
    height: dropDownCoords.height,
    width: dropDownCoords.width,
    top: dropDownCoords.top - navCoords.top,
    left: dropDownCoords.left - navCoords.left
  };

  background.style.width = `${coords.width}px`;
  background.style.height = `${coords.height}px`;
  background.style.top = `${coords.top}px`;
  background.style.left = `${coords.left}px`;
  // the translate seemed a little bit clunkier ?
  // background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));