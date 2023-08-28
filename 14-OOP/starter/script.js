'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function(){
  //     console.log(2023-this.birthYear);
  //   }
};

const fanni = new Person('Fanni', 2004);
console.log(fanni);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1987);

console.log(matilda, jack);

console.log(fanni instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

fanni.calcAge();
matilda.calcAge();

console.log(fanni.__proto__);
console.log(fanni.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(fanni));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(fanni.species, matilda.species);

console.log(fanni.hasOwnProperty('firstName'));
console.log(fanni.hasOwnProperty('species'));
