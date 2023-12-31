'use strict';
/*
let hasDriversLiscence = false;
const passTest = true;

if (passTest) {
  hasDriversLiscence = true;
}
if (hasDriversLiscence) console.log("I can Drive");


function logger() {
  console.log("My name is Sulav");
}
// Calling, Running or Invoking the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function Declaration

function caclAge1(birthYear) {
  const age1 = 2037 - birthYear;
  return age1;
}

//Function Expression

const calcAge2 = function (birthYear) {
  const age2 = 2037 - birthYear;
  return age2;
};

console.log(caclAge1(1990), calcAge2(1990));


//Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 70 - age;
  return `${firstName} retires in ${retirement} years`;
  //return retirement;
};

const retire = yearsUntilRetirement(1991, "Sulav");
console.log(retire);


function cutFruitPiece(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPiece(apples);
  const orangePieces = cutFruitPiece(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


//Array
const friends = ["Sulav", "Ashish", "Prabu"];
console.log(friends);

const year = new Array(2000, 2001, 2002, 2003);
console.log(year);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const sulav = ["sulav", "Shrestha", 24, friends];
console.log(sulav);

//Exercise
const calcAge2 = function (birthYear) {
  const age2 = 2037 - birthYear;
  return age2;
};

const birth = [1990, 1900, 1991, 2000];

const age1 = calcAge2(birth[0]);
const age2 = calcAge2(birth[1]);
const age3 = calcAge2(birth[birth.length - 1]);

console.log(age1, age2, age3);


const sulav = ["sulav", "Shrestha", 24];
const newlength = sulav.push("Jay"); // Add elements to the back of the array
console.log(sulav);
console.log(newlength);

sulav.unshift("jump"); //Add elements to the front of array
console.log(sulav);

//Remove elements
const popped = sulav.pop(); //Removes elements from the back of array
console.log(popped);
console.log(sulav);
sulav.shift(); //Removes elements from the front of the array
console.log(sulav);

console.log(sulav.indexOf("Shrestha"));
console.log(sulav.includes("Shrestha"));

if (sulav.includes("Shrestha")) {
  console.log("Your surname is Shrestha.");
}


//Objects

const sulav = {
  firstName: "Sulav",
  lastName: "Shrestha",
  age: 20,
  hobby: ["football", "gaming"],
};

console.log(sulav.firstName);
console.log(sulav["lastName"]);

const nameKey = "Name";
console.log(sulav["first" + nameKey]);
console.log(sulav["last" + nameKey]);

const interestedIn = prompt(
  "What do you wanna know about me? firstName,lastNAme,age or hobby?"
);

if (sulav[interestedIn]) {
  console.log(sulav[interestedIn]);
} else {
  console.log("Np information found");
}

//Add properties to object
sulav.location = "Gongabu";
sulav["skill"] = ["nodejs", "reactjs"];

console.log(sulav);

//Challenge
const client = {
  name: "Johnas",
  friends: ["Sulav", "Sham", "Prabu"],
};
console.log(
  `${client.name} has ${client.friends.length} friends and his best friend is ${client.friends[0]}`
);


//Object Methods

const sulav = {
  firstName: "Sulvav",
  lastName: "Shrestha",
  birthYear: "2000",
  job: "student",
  hasDriverLiscence: false,
  friends: ["ram", "shyam", "hari"],

  //   calcAge: function () {
  //     return 2024 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${sulav.firstName} is a ${sulav.age} year old student. He has ${
      sulav.hasDriverLiscence ? "has" : "no"
    } Driver's liscence`;
  },
};

console.log(sulav.calcAge());
console.log(sulav.age);
//console.log(sulav["calcAge"](2000));

//Challenge
//"Sulav is a 20 year old student. He has a/no Driver's liscence."

console.log(sulav.getSummary());



//Loops

for (let rep = 0; rep <= 10; rep++) {
  console.log("repetition");
}

const sulav = ["Sulav", "Shrestha", 23, ["google", "facebook"]];

for (let i = 0; i <= sulav.length; i++) {
  console.log(`${sulav[i]}`);
}

const birthYear = [1999, 2000, 2024, 1991];
const age = [];
for (let i = 0; i < birthYear.length; i++) {
  let temp = 2024 - birthYear[i];
  age.push(temp);
  temp = 0;
  console.log(age[i]);
}

//continue and break
console.log("--ONLY STRINGS--");

for (let i = 0; i <= sulav.length; i++) {
  if (typeof sulav[i] !== "string") continue;
  console.log(sulav[i], typeof sulav[i]);
}

console.log("--BREAK WITH NUMBER--");

for (let i = 0; i <= sulav.length; i++) {
  if (typeof sulav[i] === "number") break;
  console.log(sulav[i], typeof sulav[i]);
}
*/

//Looping backward

const sulav = ['Sulav', 'Shrestha', 23, 'student', ['google', 'facebook']];

for (let i = sulav.length - 1; i >= 0; i--) {
  console.log(sulav[i]);
}

//while loop
let rep = 1;
while (rep < 10) {
  console.log('you are doing great');
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
while (dice != 6) {
  console.log(`You rolled dice ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log('Loop is ending..');
  }
}
