"use strict";
/*
const calcAge = function (birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName},You are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var malenial = true;
      // Creating new variable with same name inside the inner scope same as
      //that of outer scope's variable
      const firstName = "john";
      const str = `Oh, and you are a malenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //Reassigning outer scope variable
      output = `NEW OUTPUT`;
    }
    console.log(malenial);
    console.log(output);
    // console.log(add(2,3));
    //console.log(str);
  }
  printAge();
  return age;
};

const firstName = "Sulav";
calcAge(1991);


//This Keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
};
calcAge(2037);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //Points to the this keyword in the global scope
};
calcAgeArrow(2037);

const sulav = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

sulav.calcAge();

const matilda = {
  year: 1917,
};

matilda.calcAge = sulav.calcAge; //Method Borrowing
matilda.calcAge();

const f = sulav.calcAge;
//f();  //undefined


var firstName = "Sulav";

const sulav = {
  year: 1991,
  firstName: "Sulav Shrestha",
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Sloution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey,${this.firstName}`);
  },
};

sulav.greet();
sulav.calcAge();

//arguement Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// Arguement is not defined in Arrow function
const addExprArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addExprArrow(2, 5);
addExprArrow(2, 5, 8, 9);
*/
