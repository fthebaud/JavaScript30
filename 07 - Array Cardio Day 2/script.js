'use strict';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen in my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const isAdult = people.some(adult => new Date().getFullYear() - adult.year >= 19);
console.log(isAdult);

const allAdults = people.every(adult => new Date().getFullYear() - adult.year >= 19);
console.log(allAdults);


//Find the comment with the id of 823423
const comment = comments.find(c => c.id === 823423);
console.log(comment.text);

const index = comments.findIndex(c => c.id === 823423);

// normal way
comments.splice(index, 1);
console.log(comments);

//redux way ?
// const newArray = [
//   ...comments.slice(0, index),
//   ...comments.slice(index + 1)
// ];
// console.log(newArray);
