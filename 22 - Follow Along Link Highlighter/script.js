'use strict';

const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  //on a besoin de connaire la position et la taille de chaque element survolé
  const linkCoords = this.getBoundingClientRect();
  highlight.style.height = linkCoords.height + 'px';
  highlight.style.width = linkCoords.width + 'px';
  highlight.style.transform = `translate(${linkCoords.left + window.scrollX}px, ${linkCoords.top + window.scrollY}px)`;
}


triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
