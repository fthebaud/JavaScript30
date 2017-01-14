'use strict';

const nav = document.querySelector('#main');

// nav.offsetTop will be modified via CSS, so we need to store the original value!!
const initialOffset = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= initialOffset) {
    // nav.style.transform = `translate(0px, ${window.scrollY - nav.offsetTop}px)`;
    // we add a class that will position: fixed the nav
    document.body.classList.add('fixed-nav');
    // since fixed elements don't take up any space, we have to make up for the space lots by nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    console.log('remove');
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

// should use a debounce here
window.addEventListener('scroll', fixNav);
