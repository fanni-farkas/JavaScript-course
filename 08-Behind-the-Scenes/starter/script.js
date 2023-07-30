'use strict';

/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    //console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Fanni';
calcAge(1991);

// Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Fanni';
let job = 'programmer';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//console.log(this);

const calcAge = function(birthYear) {
    console.log(2023 - birthYear);
    //console.log(this);
}
calcAge(2004);


const calcAgeArrow = birthYear => {
    console.log(2023 - birthYear);
    //console.log(this);
}
calcAgeArrow(2004);


const Fanni = {
    year: 2004,
    calcAge: function(){
        console.log(this);
        console.log(2023 - this.year);
    }
}
Fanni.calcAge()


const Szabi = {
    year: 2003,
}

Szabi.calcAge = Fanni.calcAge
Szabi.calcAge()

const f = Fanni.calcAge
f()


//var firstName = 'Matilda'

const Fanni = {
  firstName: 'Fanni',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this;
    // const isMilllenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMilllenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMilllenial();
  },

  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
Fanni.greet();
Fanni.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 12);

let age = 30
let oldage = age 
age = 31

console.log(age);
console.log(oldage);

const me = {
    name: 'Fanni',
    age: 18,

}

const friend = me
friend.age = 27
console.log('Friend: ', friend);
console.log('Me:', me);
*/

// Primitive types
let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstname: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
    firstname: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica2) // only creates a shallow copy

jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy)