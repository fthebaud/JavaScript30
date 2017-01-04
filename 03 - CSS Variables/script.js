'use strict';

const inputs = document.querySelectorAll('.controls input');

function handleEvent() {
  // this = input sur lequel l'évènement a été déclenché.
  //using dataset to retreive personnal html attribute
  const sizing = this.dataset.sizing || '';
  // magic line
  /* The Document.documentElement read-only property returns the Element that is the root element of the document
   (for example, the <html> element for HTML documents).*/
  /* The HTMLElement.style property returns a CSSStyleDeclaration object that represents only the element's inline style attribute,
   ignoring any applied style rules */
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}

inputs.forEach(input => input.addEventListener('change', handleEvent));
inputs.forEach(input => input.addEventListener('mousemove', handleEvent));
