'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - returns new array
console.log(arr.slice(2)); // returns new array
console.log(arr.slice(2, 4)); // end parameter is not incliuded in the output
console.log(arr.slice(-2)); // last 2 elements
console.log(arr.slice(-1)); // last element
console.log(arr.slice(1, -2));
console.log(arr.slice()); // shallow copy
console.log(...arr); // shallow copy

// SPLICE - mutates the original array
//console.log(arr.splice(2));
arr.splice(-1); // delete last element
console.log(arr);

arr.splice(1, 2); // delete 2 elements after position 1
console.log(arr);

// REVERSE - mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// GETTING THE LAST ELEMENT
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('fanni'.at(0));
console.log('fanni'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------ FOR EACH ------');
//  with forEach we can NOT break out of the loop

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`);
  }
});


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SETS
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// CODING CHALLENGE 1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

console.log(movements);

// accumulator is like a snowball
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration number ${i}: ${acc}`);
//   return acc + curr;
// }, 0);

const balance = movements.reduce((acc, curr) => acc + curr, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

// CODING CHALLENGE 2

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
//  if the dog is  years old, . If the dog is > 2 years old,
//  ages = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const averageAdults =
    adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return averageAdults;

  console.log(humanAges);
  console.log(adults);
  console.log(averageAdults);
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
