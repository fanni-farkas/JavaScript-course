/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive")

function logger() {
    console.log("My name is Fanni")
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);

const num = Number("23")

//Function declaration
const age1 = calcAge1(2004);

function calcAge1(birthyear) {
    return 2023 - birthyear;
}

console.log(age1)

//Function expression
const calcAge2 = function (birthyear) {
    return 2023 - birthyear;
}

const age2 = calcAge2(2004);

console.log(age1, age2);

//Arrow function
const calcAge3 = birthyear => 2023 - birthyear;

const age3 = calcAge3(2004);
console.log(age3);

const untilRetirement = (birthyear, firstName) => {
    const age = 2023 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(untilRetirement(2004, "Fanni"));
console.log(untilRetirement(2003, "Szabi"));

function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}


console.log(fruitProcessor(2, 3));

const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const untilRetirement = function (birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }

    return retirement;
    //return `${firstName} retires in ${retirement} years`
}

console.log(untilRetirement(2004, "Fanni"));
console.log(untilRetirement(1950, "Szabi"));

//CHALLENGE 1

const calcAverage = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;


const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins);
console.log(avgKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`The Dolphins Win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgDolphins >= avgKoalas * 2) {
        console.log(`The Koalas Win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log("No team wins");
    }
}

checkWinner(avgDolphins, avgKoalas);

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends)
//friends = ["Bob", "Alice"]

const firstName = "Fanni";
const Fanni = ["firstName", "Farkas", 2023 - 2004, friends];
console.log(Fanni);

//Exercise
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)];

console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop()
const popped = friends.pop(); //remove last element of array and returns it
console.log(popped)
console.log(friends)

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); //returns false because it checks for strict equality
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log(`You have a friend called Steven`);
}


//CHALLENGE 2
const bills = [125, 555, 44];
const total = []

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         console.log(`The bill was ${bill}$ and the tip was ${bill * 0.15}$ (15%) and the total is ${bill + (bill * 0.15)}$`)
//     } else {
//         console.log(`The bill was ${bill}$ and the tip was ${bill * 0.2}$ (20%) and the total is ${bill + (bill * 0.2)}$`)
//     }
// }

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)

const fanniArray = [
    "Fanni",
    "Farkas",
    2023 - 2004,
    ["Szabi", "Pamacs", "Panda"],
];

const fanni = {
    firstName: 'Fanni',
    lastName: "Farkas",
    age: 2023 - 2004,
    friend: ["Szabi"]
};

console.log(fanni)

const fanni = {
    firstName: 'Fanni',
    lastName: "Farkas",
    age: 2023 - 2004,
    friends: ["Szabi", "Berni", "Greti"]
};

console.log(fanni);

console.log(fanni.lastName);
console.log(fanni["lastName"]);

const nameKey = "Name";
console.log(fanni["first" + nameKey]);
console.log(fanni["last" + nameKey]);

const interestedIn = prompt("What do you eant to know about Fanni? Choose between firstName, lastName, age and friend")
console.log(fanni[interestedIn]);

if (fanni[interestedIn]) {
    console.log(fanni[interestedIn])
} else {
    console.log("Wrong request")
}

fanni.location = "Budapest";
fanni["instagram"] = '@fanni.frkas'
console.log(fanni);

//Challenge
console.log(`${fanni.firstName} has ${(fanni.friends).length} friends, and her best friend is called ${fanni.friends[0]}`);

const fanni = {
    firstName: 'Fanni',
    lastName: "Farkas",
    birthyear: 2004,
    age: 2023 - 2004,
    job: "programmer",
    friends: ["Szabi", "Berni", "Greti"],
    hasDriversLicense: true,

    // calcAge: function () {
    //     console.log(this)
    //     return 2023 - this.birthyear
    // }
    calcAge: function () {
        this.age = 2023 - this.birthyear;
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${fanni.job} and she has ${this.hasDriversLicense ? "a" : "no"} drivers license`
    }
}

console.log(fanni.calcAge());

console.log(fanni.age);
console.log(fanni.age);
console.log(fanni.age);

//Challenge

//console.log(fanni['calcAge'](2004));

console.log(fanni.getSummary())

//CHALLENGE 3

mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    }
}

john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    }
}
console.log(mark.calcBMI())
console.log(john.calcBMI())

if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`)
} else console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);


//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 2');
//console.log('Lifting weights repetition 3'); ....



for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const fanni = [
    "Fanni",
    "Farkas",
    2023 - 2004,
    ["Szabi", "Pamacs", "Panda"],
    true,
];

const types = [];

for (let i = 0; i < fanni.length; i++) {
    console.log(fanni[i], typeof fanni[i]);

    //types[i] = typeof fanni[i];
    types.push(typeof fanni[i])
}

console.log(types)

const years = [1991, 2007, 2004, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i])
}
console.log(ages)

//continue and break

console.log('----ONLY STRINGS----')
for (let i = 0; i < fanni.length; i++) {
    if (typeof fanni[i] !== 'string') continue;

    console.log(fanni[i], typeof fanni[i]);
}

console.log('----BREAK WITH NUMBER----')
for (let i = 0; i < fanni.length; i++) {
    if (typeof fanni[i] === 'number') break;

    console.log(fanni[i], typeof fanni[i])
}


const fanni = [
    "Fanni",
    "Farkas",
    2023 - 2004,
    ["Szabi", "Pamacs", "Panda"],
    true,
];

for (let i = fanni.length - 1; i >= 0; i--) {
    console.log(i, fanni[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Starting exerxise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }

}


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    //console.log(`Lifting weights repetition ${rep} `);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end, you rolled a 6')
}
*/



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}

console.log(bills, tips, totals)




