'use strict';

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog', 'YOLO brothers'];


// const forbidden = ['a', 'an', 'the', 'A', 'An', 'The'];
//
// function cleanWord(str) {
//   const firstWord = str.split(' ')[0];
//   if (forbidden.includes(firstWord)) {
//     const regexp = new RegExp(firstWord);
//     return str.replace(regexp, '').substr(1);
//   }
//   return str;
// }

function strip(word) {
  return word.replace(/^a |an |the /i, '');
}

bands.sort((word1, word2) => strip(word1) > strip(word2) ? 1 : -1);

console.log(bands);


function renderBands(bands) {
  return bands.map(b => `<li>${b}</li>`).join('');
}

document.querySelector('#bands').innerHTML = renderBands(bands);
