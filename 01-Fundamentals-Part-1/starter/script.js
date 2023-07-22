/*
let js = "amazing";
console.log(40 + 5 + 23 - 10);

console.log("Szabi");
console.log(23);

let firstname = "Szabi";
console.log(firstname);
console.log(firstname);
console.log(firstname);

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob)


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 33);
// console.log(typeof "Pamacs");

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null)

const birthYear = 1991;
// birthYear = 1990;

var job = "programmer";
job = "teacher";

lastName = "Farkas";
console.log(lastName);

//MATH OPERATORS
const now = 2037
const ageFanni = now - 2004;
const ageSzabi = now - 2005;
console.log(ageFanni, ageSzabi);

console.log(ageFanni * 2, ageSzabi / 10, 2 ** 3);

// 2 **3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Fanni";
const lastName = "Farkas";
console.log(firstName + " " + lastName);

//ASSIGNMENT OPERATORS
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x)

//COMPARISON OPERATORS

console.log(ageSzabi > ageFanni);
console.log(ageFanni >= 18);

const isFullAge = ageFanni >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037
const ageFanni = now - 2004;
const ageSzabi = now - 2005;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageSzabi + ageFanni) / 2
console.log(ageFanni, ageSzabi, averageAge);

// CHALLENGE 1 

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

const firstName = "Fanni";
const job = "programmer";
const birthYear = 2004;
const year = 2023;

const fanni = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(fanni)

const fanniNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(fanniNew)

console.log(`string
multiple 
lines`);

const age = 15;

if (age >= 18) {
    console.log(`Panda Pamacs can start driving license 🚗 `)
} else {
    const yearsLeft = 18 - age;
    console.log(`Panda Pamacs is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 2004;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//CHALLENGE 2
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is bigger that John's ${BMIJohn}.`)
} else {
    console.log(`John's BMI ${BMIJohn} is bigger that Mark's ${BMIMark}.`)
}

console.log(BMIMark);
console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("fanni"))

console.log(String(23), 23)

//type coercion
console.log("I am " + 18 + " years old")
console.log("23 " + 10 + " 3")
console.log("23" / "2")

let n = "1" + 1;
//string concatenation with number will result in string
n = n - 1;
console.log(n)

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Fanni"));
console.log(Boolean({}));

const money = 100
if (money) {
    console.log("Don't spend it all")
} else {
    console.log("You should get a job")
}

let height = 0;
if (height) {
    console.log("YAY!")
} else {
    console.log("height is undefined")
}

const age = 17;
if (age === 18) console.log("you just became an adult")

const favourite = Number(prompt("What is your favourite number? "));
console.log(favourite)

if (favourite === 23) {
    console.log("cool! 23 is a good number")
} else if (favourite === 9) {
    console.log("9 is also a good number")
} else if (favourite === 7) {
    console.log("7 is also a good number")
} else {
    console.log("number is not 23 or 9 or 7")
}

if (favourite !== 23) console.log("why not 23?")

const hasLicense = true;
const hasGoodVision = true;

console.log(hasLicense && hasGoodVision);
console.log(hasLicense || hasGoodVision);
console.log(!hasLicense);

// if (hasLicense && hasGoodVision) {
//     console.log("Sarah is able to drive")
// } else {
//     console.log("Someone else should drive")
// }

const isTired = true;
console.log(hasLicense && hasGoodVision && isTired);

if (hasLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive")
} else {
    console.log("Someone else should drive")
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins)
console.log(scoreKoalas)

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy!")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy!")
} else {
    console.log("Koalas win the trophy!")
}

const day = "friday"

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan week");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("watch videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("enjoy the weekend")
        break;
    default:
        console.log("not a valid day")
}

if (day === "monday") {
    console.log("Plan week");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("watch videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("enjoy the weekend")
}

3 + 4
1971
true && false && !false

if (23 > 10) {
    const str = '23 is bigger'
}


const age = 23;
age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');

const drink = age >= 18 ? "wine" : "water";
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = "wine"
} else {
    drink2 = "water"
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//CHALLENGE 4

const bill = 40;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/