'use strict';

// start with strings, numbers and booleans
// type primitif => passage par copie

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// objet => passage par reference

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
var copy = players.slice();
var copy2 = [].concat(players);
var copy3 = [...players];
var copy4 = Array.from(players);


// one day

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const captain = {
  name: 'igloo',
  age: 76
}


// and think we make a copy:

// how do we take a copy instead?
const marin = Object.assign({}, captain, {age: 99, barbe: true});
console.log(marin);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

// => SHALLOW COPY!




let obj1 = {
  name: 'obj1',
  age: {
    number: 60,
    unit: 'years'
  }
};

const obj2 = Object.assign({}, obj1);

//Poor man's deep clone, not recommended. Probably not the best performance wise !
const obj3 = JSON.parse(JSON.stringify(obj1));

obj1.age.unit = 'months';


console.log(obj1);
console.log(obj2);
console.log(obj3);
