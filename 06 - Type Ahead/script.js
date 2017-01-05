'use strict';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities = data);

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regexp = new RegExp(wordToMatch, 'gi');
    return place.city.match(regexp) || place.state.match(regexp);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatcher(){
  const matches = findMatches(this.value, cities);
  const regexp = new RegExp(this.value, 'gi');
  const html = matches.map(place => {
    const cityName = place.city.replace(regexp, `<span class='hl'>${this.value}</span>`);
    const stateName = place.state.replace(regexp, `<span class='hl'>${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  document.querySelector('.suggestions').innerHTML = html;
}

document.querySelector('.search').addEventListener('keyup', displayMatcher);
