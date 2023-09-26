"use strict";

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
