"use strict";
/*
const calcAverage = (score1, score2, score3) => {
  const avg = (score1 + score2 + score3) / 3;
  return avg;
};

let avgDolphine = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphine, avgKoalas) {
  if (avgDolphine >= 2 * avgKoalas) {
    console.log(`Dolphine wins (${avgDolphine} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphine) {
    console.log(`Koala wins (${avgKoalas} vs ${avgDolphine})`);
  } else {
    console.log("No one wins");
  }
};

checkWinner(avgDolphine, avgKoalas);


const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = (15 / 100) * bill;
    return tip;
  } else {
    let tip = (20 / 100) * bill;
    return tip;
  }
};

const bill = [100, 120, 200, 50, 300, 350, 670];
console.log(`Bills are ${bill}`);
const tips = [
  calcTip(bill[0]),
  calcTip(bill[1]),
  calcTip(bill[2]),
  calcTip(bill[3]),
  calcTip(bill[4]),
  calcTip(bill[5]),
  calcTip(bill[6]),
];

console.log(`Tips are ${tips}`);
const totalTips =
  tips[0] + tips[1] + tips[2] + tips[3] + tips[4] + tips[5] + tips[6];
console.log(`Total Tips is ${totalTips}`);
const totalBills =
  bill[0] + bill[1] + bill[2] + bill[3] + bill[4] + bill[5] + bill[6];
console.log(`Total Bills is ${totalBills}`);
const total = totalTips + totalBills;
console.log(`Total amount will be ${total}`);


//Challenge 3

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
  },
};
const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is greater than ${john.firstName}'s BMI (${john.bmi})`
  );
} else {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is greater than ${mark.firstName}'s BMI (${mark.bmi})`
  );
}

console.log(
  `${mark.bmi > john.bmi ? mark.firstName : john.firstName}'s BMI(${
    mark.bmi > john.bmi ? mark.bmi : john.bmi
  } )is greater than ${
    mark.bmi < john.bmi ? mark.firstName : john.firstName
  }'s BMI (${mark.bmi < john.bmi ? mark.bmi : john.bmi}) `
);



//Challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = (15 / 100) * bill;
    return tip;
  } else {
    let tip = (20 / 100) * bill;
    return tip;
  }
};

for (let i = 0; i <= bills.length - 1; i++) {
  let temp = calcTip(bills[i]);
  tips.push(temp);
  total.push(bills[i] + tips[i]);
}

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(bills);
console.log(tips);
console.log(total);
console.log(calcAvg(total));
*/
