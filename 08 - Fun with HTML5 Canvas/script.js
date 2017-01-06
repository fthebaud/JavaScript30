'use strict';

const canvas = document.querySelector('#draw');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.lineCap = 'round'; // fin de la ligne
ctx.lineJoin = 'round'; // comment se rejoignent les lignes

ctx.globalCompositeOperation = 'xor'; // let's make it trippy

// flag to know when we are actually drawing
let isDrawing = false;

let lastX;
let lastY;

let hue = 0;
let lineWidth = 5;
let lineGrowing = true;

function draw(event) {
  if (!isDrawing) {
    return;
  }

  // colore, le monde, sans feutres, sans épreuves ni bombes
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue++;
  hue = hue%360;
  // gestion de la taille du trait
  ctx.lineWidth = lineWidth;
  if (lineWidth > 150 || lineWidth < 5) {
    // flip the direction !
    lineGrowing = !lineGrowing;
  }
  if (lineGrowing) {
    lineWidth++;
  } else {
    lineWidth--;
  }

  // let's draw !
  lastX = lastX || event.offsetX;
  lastY = lastY || event.offsetY;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // moves the starting point of a line
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke(); // does the actual drawing

  // lastX = event.offsetX;
  // lastY = event.offsetY;
  // same as above, with es6 destructuring
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

// function tooggleIsDrawing(event) {
//   isDrawing = event.type === 'mousedown' ? true : false;
// }

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
  [lastX, lastY] = [event.offsetX, event.offsetY];
  isDrawing = true;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
