"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekDaysNew = ["mon", "tue", "wed", "thu", "fri", "sat"];

const openingHours = {
  [weekDaysNew[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  openingHours,

  //ES6 enhanced object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDilevery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be dilevered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ingredients ${ing1},${ing2},${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDilevery({
  time: "22:30",
  address: "Kathmandu",
  mainIndex: 2,
  starterIndex: 2,
});

//Strings

const airline = "Lumbini Airline";
const plane = "A320";

console.log(plane[0]);
console.log(plane.length);

console.log(airline.indexOf("b"));
console.log(airline.lastIndexOf("i"));

console.log(airline.slice(7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are the middle seat
  if (seat.slice(-1) === "B" || seat.slice(-1) === "E") {
    console.log("It is a middle seat");
  } else {
    console.log("Error");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("2C");
checkMiddleSeat("11E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = "SuLaV";
const passengerToLowercase = passenger.toLowerCase();
const passengerCorrect =
  passengerToLowercase[0].toUpperCase() + passengerToLowercase.slice(1);
console.log(passengerCorrect);
/*

//Looping Over Objects - Property Names
const properties = Object.keys(openingHours);
console.log(properties);
let str = `We are open ${properties.length} days of week:`;
for (const day of properties) {
  str += `${day},`;
}
console.log(str);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} We are open at ${open} and closed at ${close}`);
}

//Sets
const orderSets = new Set(["Pizza", "Pizza", "Rissoto", "Burger", "Burger"]);
console.log(orderSets);
console.log(new Set("Sulav"));
console.log(orderSets.size);
console.log(orderSets.has("Pizza"));
console.log(orderSets.has("Bread"));

//Maps
const rest = new Map();
rest.set("name", "Sulav");
rest.set(1, "Nepal");
rest.set(2, "Kathmandu");

rest
  .set("category", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are close");

console.log(rest.get("name"));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//Convert object ro map
const newHour = new Map(Object.entries(openingHours));
console.log(newHour);

const question = new Map([
  ["question", "What is your best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["Correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}

// const answer = Number(prompt("Write your answer?"));
// console.log(answer);

// console.log(question.get(question.get("Correct") === answer));

//Converting Maps to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);


if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} opening hour is ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? "method odes not exist");

//Destructuring Objects
const { name, categories } = restaurant;
//console.log(name, categories, openingHours);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(resturantName, hours, tags);

//Default Vlaues
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating a variables
let a = 111;
let b = 67;

const obj = { a: 11, b: 12, c: 13 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Spread Operators

const arr = [7, 8, 9];
const badarr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badarr);

const newNewArr = [1, 2, ...arr];
console.log(newNewArr);

//Copying array
const menuCpoy = [...restaurant.mainMenu];
console.log(menuCpoy);

//Joining array
const menuList = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuList);

//Iterables : arrays , maps, strings, sets NOT objects.

const str = "Sulav";
const letters = [...str, " ", "st"];
console.log(letters);

// const ingredients = [
//   prompt("Ingredients 1"),
//   prompt("Ingredients 2"),
//   prompt("Ingredients 3"),
// ];
// restaurant.orderPasta(...ingredients);

//Objects
const newResturant = { ...restaurant, founder: "Sulav" };
console.log(newResturant);

//Destructuring with Rest Operators
//Spread, because right side of the =
const spr = [1, 2, ...[3, 4]];

//REST,because left side of the =
const [i, j, ...others] = [1, 2, 3, 4, 5];
console.log(i, j, others);

const [hero, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(hero, otherFood);

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

//Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6);

const x = [1, 2, 3, 4, 5, 6];
add(...x);

restaurant.orderPizza("mushroom", "olivs", "dough", "cheese", "bacon");

//Looping in an array

const menuNew = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuNew) {
  console.log(item);
}

for (const [i, el] of menuNew.entries()) {
  console.log(`${i + 1}:${el}`);
}
///////////////////////////////////
/*
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Return 2 return values from a function
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]];
const [firstArr, , [secondArr, third]] = nested;
console.log(firstArr, secondArr, third);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
