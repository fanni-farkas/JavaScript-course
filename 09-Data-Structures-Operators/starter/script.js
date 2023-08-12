'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order /* : function */(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20;00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// CODING CHALLENGE 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`(${half} HALF) ${min} ${event}`);
}

/* MAPS ITERATION ---------------------------------------------

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Quiz app

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map back to array

console.log([...question]);
//console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

// MAPS FUNDAMENTALS ---------------------------------------------

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze');
console.log(rest.set(2, 'Lisbon'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// SETS ---------------------------------------------
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Fanni'));

console.log(orderSet.size);

console.log(orderSet.has('Bread'));
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
//orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

console.log(new Set('FarkasFanni').size); //how many unique characters

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

// ENTIRE OBJECT
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// OPTIONAL CHAINING -------------------------------------------------------------------------

// if (restaurant.openingHours && restaurant.openingHours.mon.open)
// console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// ARRAYS

const users = [{ name: 'Fanni', email: 'fanni@mail.com' }];

console.log(users[0].name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

// THE FOR-OF LOOP ------------------------------------------------------------------------
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item}`);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);

// CODING CHALLENGE 1 ---------------------------------------------------------------------

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies'],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi'],
  ],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
//const [gk, ...fieldplayers] = game.players[0]
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');

const rest1 = {
  name: 'Capri',
  //numGuests: 20
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// CODING CHALLENGE 2 ---------------------------------------------------------------------

// 1
for (const [i, el] of game.scored.entries()) {
  console.log(`${el}: goal ${i + 1}`);
}

// 2
let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


// OR ASSIGNMENT OPERATOR

// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ||=10
// rest2.numGuests ||=10

// NULLISH ASSIGNMENT OPERATOR (NULL OR UNDEFINED)
rest1.numGuests ??=10
rest2.numGuests ??=10


// AND ASSIGNMENT OPERATOR
//rest1.owner = rest1.owner && '<ANONYMOUS>'
//rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMUS>'
rest2.owner &&= '<ANONYMUS>'


console.log(rest1);
console.log(rest2);



restaurant.numGuests = 0
const guest = restaurant.numGuests || 10
console.log(guest);

const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect);

console.log('---- OR ----');

console.log(3 || 'Fanni');
console.log('' || 'Fanni');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10
console.log(guest2);


console.log('---- AND ----');

console.log(0 && 'Fanni');
console.log(7 && 'Fanni');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') // if the first is a truthy vlue, then the second part will be evaluated 



// REST PATTERN AND PARAMETERS
// 1) Destructuring--------------------------------------------------------------

// SPREAD operator because on the right side of the = 
const arr = [1,2, ...[3,4]]

// REST pattern because on the left side of the = 
const [a, b, ...others]= [1,2,3,4,5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays} = restaurant.openingHours
console.log(weekdays);


// 2) Functions -----------------------------------------------------------------

const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i ++) sum += numbers[i]
  console.log(sum);
}

add(2, 3)
add(5, 3, 7, 2)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')


// THE SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

// Copy array 
const mainMenuCopy = [...restaurant.mainMenu]

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

const str = 'Fanni'
const letters = [...str, ' ', 'S.']
console.log(letters);
console.log(...str);

// Example
// const ingredients = [prompt('Let\'s make pasta! Ingedient 1?'), 
// prompt('Let\'s make pasta! Ingedient 2?'), 
// prompt('Let\'s make pasta! Ingedient 3?')
// ]

//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name);
console.log(restaurant.name);



restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex:2,
})

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1
})

const { name, openingHours, categories }=restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, 
  openingHours: hours, 
  categories: tags
} = restaurant
console.log(restaurantName, hours, tags);


// Default values
const {menu = [], starterMenu: starters = []} = restaurant
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c}} = openingHours
console.log(o, c);  

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
