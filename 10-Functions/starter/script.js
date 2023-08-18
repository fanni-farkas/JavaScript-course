'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123');
createBooking('LM123', 2, 800);
createBooking('LM123', 2);
createBooking('LM123', 5);

createBooking('LM123', undefined, 1000);

const flight = 'LM234';
const fanni = {
  name: 'Fanni Farkas',
  passport: 23456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms' + passenger.name;

  if (passenger.passport === 23456789) {
    alert('Checked In');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, fanni);
// console.log(flight);
// console.log(fanni);

// // Same as doing this:
// const flightNum = flight;
// const passenger = fanni;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(fanni);
checkIn(flight, fanni);
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed stringL ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

// JS uses callback all the time

const high5 = function () {
  console.log('🖐️');
};

document.body.addEventListener('click', high5);

['cat', 'dog', 'rabbit'].forEach(high5);
