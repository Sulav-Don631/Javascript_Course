// // let country = "Nepal";
// // let continent = "Asia";
// // let population = 21000008;

// // console.log(country);
// // console.log(continent);
// // console.log(population);

// //Code challenge 1

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = 78 / 1.69 ** 2;
// const johnBMI = 92 / 1.95 ** 2;

// let markHigherBMI;
// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's (${markBMI}) BMI is higher than John's (${johnBMI}) `);
// } else {
//   console.log(`John's (${johnBMI}) BMI is higher than Mark's(${markBMI}) BMI`);
// }

//Code Challenge 3
/*
const dolphineScore1 = 96;
const dolphineScore2 = 108;
const dolphineScore3 = 89;

const dolphineAvg = (dolphineScore1 + dolphineScore2 + dolphineScore3) / 3;

const koalaScore1 = 88;
const koalaScore2 = 91;
const koalaScore3 = 110;

const koalaAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

if (dolphineAvg > koalaAvg && dolphineAvg >= 100) {
  console.log("Dolphine Wins");
} else if (dolphineAvg < koalaAvg && koalaAvg >= 100) {
  console.log("Koala Wins");
} else if (
  dolphineAvg === koalaAvg &&
  (dolphineAvg >= 100) & (koalaAvg >= 100)
) {
  console.log("They are same");
} else {
  console.log("No one wins the trophy");
}
*/

//Coding Challenge 4

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
const finalValue = tip + bill;
console.log(
  `The bill value was ${bill}, the tip value was ${tip} and the final value was ${finalValue}`
);
