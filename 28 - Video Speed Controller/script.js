'use strict';

const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function speedo(event) {
  const y = event.pageY - this.offsetTop; // -offsetTop car on veut que l'origine (0,0), soit notre élément, pas la page
  const percent = y / this.offsetHeight;
  const height = Math.round(percent * 100) + '%';
  bar.style.height = height;

  const min = 0.4;
  const max = 4;
  // (n - 0.4) / (4 - 0.4) = percent
  // (n - min) / (max - min) = percent
  // n - min = percent * (max - min)
  const playbackRate = percent * (max - min) + min;
  bar.textContent = playbackRate.toFixed(2);

  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', speedo);