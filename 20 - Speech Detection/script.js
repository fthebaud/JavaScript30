'use strict';

// webkitSpeechRecognition in Chrome
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; //on veut les résultats intérmédiaires, on ne veut pas avoir à attendre d'arreter de parler pour avoir les resultats

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
    let p = document.createElement('p');
    words.appendChild(p);
  }

});

function analyse(transcript) {
  if (transcript.includes('the most beautiful dog')) {
    const image = document.createElement('img');
    image.src = 'loustic.jpg';
    image.style ='opacity: 0 ; transition: opacity 3s; width: 415px; height:550px';
    image.onload = function() {
      this.style.opacity='1';
    };
    // image.onload = (e) => e.target.style.opacity='1';
    document.querySelector('body').appendChild(image);
  }
}

recognition.addEventListener('end', recognition.start);

recognition.start();
