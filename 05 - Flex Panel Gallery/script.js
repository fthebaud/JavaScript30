'use strict';

const panels = document.querySelectorAll('.panel');

function togglePanel() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(this.classList);
  if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', togglePanel));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
