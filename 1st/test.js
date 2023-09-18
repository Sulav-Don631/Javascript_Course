/*
let j = true;
if (j == true) alert("javascript is fun");

console.log(50 + 12 - 6 + 9);
console.log(23);
let firstName = "Sulav";
console.log(firstName);


//Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;
*/

// now = 2000;
// const ageSulav = 2024 - now;
// const ageRam = 2030 - now;
// console.log(ageSulav, ageRam);

// console.log(ageSulav * 2, ageSulav / 2, 2 ** 3);

// const firstName = "Sulav";
// const lastName = " Shrestha";
// console.log(firstName + lastName);

// // Assignment operators
// let x = 10 + 15;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// //Comparision Operators
// console.log(ageSulav > ageRam);

// //Operator Precedence

// let t, y;
// t = y = 25 - 10 - 5;
// console.log(t, y);

// const averageAge = (ageSulav + ageRam) / 2;
// console.log(ageSulav, ageRam, averageAge);

// const firstName = "Sulav";
// const age = 24;
// const birthYear = 2000;

// const sulav = "I'm" + firstName + "and I'm" + age + "years old.";
// console.log(sulav);

// const sulavNew = `I'm ${firstName} and i am ${age} years old.`;
// console.log(sulavNew);

// console.log(
//   "String \n\
// with \n\
// multiple lines "
// );

// console.log(`String
// with
// multiple lines`);

// const age = 15;
// if (age >= 18) {
//   console.log("you can get driver's liscence 🚀");
// } else {
//   yearsLeft = 18 - age;
//   console.log(`You are too young. Wait another ${yearsLeft} years.`);
// }

// const birthYear = 1999;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//Type Conversion

// const inputYear = "1991";
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// //type coersion
// console.log("I am " + 24 + " years old.");
// console.log("23" - "10" - 3); // Converts strings to integer
// console.log("20" + "10" + 3); //Converts the integrs to string

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Sulav"));
console.log(Boolean({}));

let money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You don't have any money");
}

let height;
if (height) {
  console.log("Yay height is defined");
} else {
  console.log("Height is not defined");
}


const age = "18";
if (age === 18) console.log("Right(strict)");
if (age == 18) console.log("Right(loose)");

const fav = Number(prompt("What is your favourite value?"));
if (fav === 23) {
  console.log("Cool 23 is the right number");
}


const hasDriverLiscence = true;
const hasGoodVision = false;

console.log(hasDriverLiscence && hasGoodVision);
console.log(hasDriverLiscence || hasGoodVision);

if (hasDriverLiscence && hasGoodVision) {
  console.log("You should Drive");
} else {
  console.log("Someone Else Should Drive");
}


const day = "wednesday";

switch (day) {
  case "monday":
    console.log("It is monday");
    break;
  case "tuesday":
    console.log("It is tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("HEHE");
    break;
  case "friday":
    console.log("this is friday");
    break;
  default:
    console.log("Happy Weekends");
    break;
}
*/

//Conditional (Ternary Operator)
const age = 18;

age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
