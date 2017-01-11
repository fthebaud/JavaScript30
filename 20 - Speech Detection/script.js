'use strict';

// webkitSpeechRecognition in Chrome
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; //on veut les resultats intermediaires, on ne veut pas avoir a attendre d'arreter de parler pour avoir les resultats

// on insere le texte dans un paragraphe
const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', event => {
  //e.results is a list, not an array
  const transcript = Array.from(event.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('');

  p.textContent = transcript;

  // si le resultat est final, on remplace p par un nouveau p
  if (event.results[0].isFinal) {
    analyse(transcript);
    p.textContent = '';
    let pFinal = document.createElement('p');
    pFinal.textContent = transcript;
    p.insertAdjacentElement('afterend', pFinal);
  }

});

function analyse(transcript) {
  if (transcript.includes('most beautiful dog')) {
    const image = document.createElement('img');
    image.src = 'loustic.jpg';
    image.classList.add('doggo');
    image.onload = function() {
      this.style.opacity='1';
    };
    // image.onload = (e) => e.target.style.opacity='1';
    const body = document.querySelector('body');
    body.insertBefore(image, body.firstChild);
  }
}

recognition.addEventListener('end', recognition.start);

recognition.start();
