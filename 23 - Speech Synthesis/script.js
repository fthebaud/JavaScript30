'use strict';


const utterance = new SpeechSynthesisUtterance();
let voices;
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// on donne le texte du textarea
utterance.text = document.querySelector('[name=text]').value;

function populateVoices() {
  //on recupere les voices du speechSynthesis un fois qu'elles sont chargées
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    // .filter (voice => voice.lang.includes('fr'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}
speechSynthesis.addEventListener('voiceschanged', populateVoices);


function setVoice() {
  utterance.voice = voices.find(v => v.name  === this.value);
  toggle();
}

voicesDropdown.addEventListener('change', setVoice);

function toggle(startover = true) {
  // stop the speaking
  speechSynthesis.cancel();
  if(startover) {
    // and we start over
    speechSynthesis.speak(utterance);
  }
}

function setOption() {
  console.log(this.name, this.value);
  utterance[this.name] = this.value;
  toggle();
}

speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));

options.forEach(o => o.addEventListener('change', setOption));
