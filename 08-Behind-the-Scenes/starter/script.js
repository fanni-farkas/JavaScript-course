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
*/

//var firstName = 'Matilda'

const Fanni = {
    firstName: 'Fanni',
    year: 2004,
    calcAge: function(){
        console.log(this);
        console.log(2023 - this.year);
    },

    greet: () => {
        console.log(this);
        console.log(`hey ${this.firstName}`)}
};
Fanni.greet();