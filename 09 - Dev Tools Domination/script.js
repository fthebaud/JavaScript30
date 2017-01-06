'use strict';

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

// Interpolated

// Styled

// warning!

// Error :|

// Info

// Testing

// clearing

// Viewing DOM Elements

// Grouping together
dogs.forEach(dog => {
  // console.group(dog.name);
  console.groupCollapsed(dog.name);
  console.log('this is ', dog.name);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(dog.name);
});

// counting

// timing
console.time('test');
fetch('https://api.github.com/users/fthebaud')
  .then(data => data.json())
  .then(data => {
    console.log(data);
    console.timeEnd('test');
  });
