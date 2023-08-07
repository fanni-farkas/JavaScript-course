'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
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


console.log(restaurant.openingHours.mon);

/*

// THE FOR-OF LOOP ------------------------------------------------------------------------
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

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
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi']
  ],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich']
}

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
//const [gk, ...fieldplayers] = game.players[0]
const [gk, ...fieldplayers] = players1
console.log(gk, fieldplayers);

// 3
const allPlayers = [...players1,...players2]
console.log(allPlayers);

// 4
const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

// 5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function(...players){
  console.log(`${players.length} goals were scored`);
}

//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');


const rest1 = {
  name: 'Capri',
  //numGuests: 20
  numGuests: 0

}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

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