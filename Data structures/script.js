"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
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
  },

  order: function (starterIndex, mainIndex) {
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
};

restaurant.orderDilevery({
  time: "22:30",
  address: "Kathmandu",
  mainIndex: 2,
  starterIndex: 2,
});

//Destructuring Objects
const { name, categories, openingHours } = restaurant;
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
