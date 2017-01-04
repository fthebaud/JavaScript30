'use strict';
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const oldInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(oldInventors);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const inventorsNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => a.year < b.year ? -1 : 1);
console.log(sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const years = inventors.map(inventor => inventor.passed - inventor.year)
                       .reduce((prev, current) => prev + current, 0);
console.log(years);



// 5. Sort the inventors by years lived
function inventorWithLifeSpan(inventor) {
  inventor.lifeSpan =  inventor.passed - inventor.year;
  return inventor;
}
const sortedInventors2 = inventors.map(inventor => inventorWithLifeSpan(inventor))
                                  .sort((a,b) => a.lifeSpan > b.lifeSpan ? 1 : -1);
console.log('sorted 2: ', sortedInventors2);

console.log(inventors.sort((a, b) => a.passed - a.year > b.passed - b.year ? 1 : -1));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*Array.from(document.querySelectorAll('.mw-category li'))
  .map(li => li.innerText)
  // .filter(s => s.indexOf('de') !== -1);
  .filter(s => s.includes('de'));*/


// 7. sort Exercise
// Sort the people alphabetically by last name
console.log('sort ', people.sort());

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const sumup = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  }else{
    obj[item] += 1;
  }
  return obj;
}, {});
console.log('sumup: ', sumup);
