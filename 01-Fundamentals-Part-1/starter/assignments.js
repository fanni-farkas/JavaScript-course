// LECTURE: Values and Variables

/*
const country = "Hungary";
const continent = "Europe";
const population = 10;

console.log(country);
console.log(continent);
console.log(population);


const isIsland = false;

const language = "hungarian";

console.log(isIsland, population, country, language);

const finnland = 6;

console.log(population + 1);

console.log(finnland > population);

console.log(33 > population);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese'

console.log(
    '9' - '5',
    '19' - '13' + '17',
    '19' - '13' + 17,
    '123' < 57,
    5 + 6 + '4' + 9 - 4 - 2)


let numNeighbours = Number(prompt("How many neighbours does your country have?"))

if (numNeighbours === 1) {
    console.log('Your country has one neighbour')
} else if (numNeighbours > 1) {
    console.log("more than 1 neighbours")
} else {
    console.log("No neighbours")
}

if (population > 50 && language === "english" && isIsland === false) {
    console.log('You should live in Hungary:)')
} else {
    console.log("You shouldn't live in Hungary:( ")
}

switch (language) {
    case "chinese" || "mandarin":
        console.log(`MOST number of native speakers`)
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("number 4")
        break;
    case "arabic":
        console.log('5th most spoken language');
        break;
    default:
        console.log("unknown or not listed as a major language.")
        break;
}

const message = population > 33 ? "Hungary's population is above average" : "Hungary's population is below average"

console.log(message)

console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
);

const describeCountry = function (country, population, capitalCity) {
    console.log(`${country} has a population of ${population} million and it's capital city is ${capitalCity}`)
}
describeCountry("Finnland", 6, "Helsinki")
describeCountry("Japan", 130, "Tokyo")
describeCountry("France", 70, "Paris")

//FUNCTION DECLARATION
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}
percentageOfWorld1(130)

//FUNCTION EXPRRESSION
const percentageOfWorld2 = function (population) {
    console.log((population / 7900) * 100)
}
percentageOfWorld2(130);


//ARROW FUNCTION
const percentageOfWorld3 = (population) => {
    console.log((population / 7900) * 100)
}
percentageOfWorld3(130);


function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
};
describePopulation('China', 1441);

const populations = [6, 70, 130, 1441];

console.log(populations.length === 4);

percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
]

console.log(percentages)

let neighbours = ['Croatia', 'Romaniaaa', 'Austria', 'Serbia', 'Slovenia', 'Ukraine', 'Slovakia']

neighbours.push('Utopia')
console.log(neighbours)

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf("Romaniaaa")] = 'Romania'
console.log(neighbours);

myCountry = {
    country: 'Hungary',
    capital: 'Budapest',
    language: 'hungarian',
    population: 10,
    neighbours: ['Croatia', 'Romaniaaa', 'Austria', 'Serbia', 'Slovenia', 'Ukraine', 'Slovakia'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },

    isIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}

myCountry.describe();
myCountry.isIsland();
console.log(myCountry);


console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


for (let voting = 0; voting <= 10; voting++) {
    console.log(`voter number ${voting} is voting`);
}

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++);
for (let y = 0; y < listOfNeighbours[i].length; y++);
console.log(`neihbour: ${listOfNeighbours[i][y]}`);
*/

const populations = [10, 1441, 332, 83];
// const percentages2 = [];

const percentageOfWorld1 = function (population) {
    console.log((population / 7900) * 100)
}

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc);
// }
// console.log(percentages2);

// while (i < populations.length) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages3.push(perc);
//     i++
// }

// console.log(percentages3)

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
