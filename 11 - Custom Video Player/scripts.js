'use strict';

// grab the elements
const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('[type="range"]');
const skipButtons = player.querySelectorAll('[data-skip]');


// functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function togglePlayIfSpace(event) {
  if (event.keyCode === 32) {
    togglePlay();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚❚';
  toggle.textContent = icon;
}

function skip() {
  const time = Number.parseFloat(this.dataset.skip);
  video.currentTime += time;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percentage = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = percentage + '%';
}

function scrub(event) {
  const scrubTime = event.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

// hook up the event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
document.addEventListener('keydown', togglePlayIfSpace);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mouseDown && scrub(event));
progress.addEventListener('mousedown', () => {mouseDown = true;});
progress.addEventListener('mouseup', () => mouseDown = false);


const fullScreenButton = document.querySelector('button#fullscreen');

function toggleFullScreen() {
    console.log(window.innerWidth, window.innerHeight);
    video.style.width = `${window.innerWidth}px`;
    video.style.height = `${window.innerHeight}px`;
}

fullScreenButton.addEventListener('click', toggleFullScreen);
