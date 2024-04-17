// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1.Understanding the problem
//What is amplitude? Answer: Difference between highest and lowest temperature

//How to compute the max and min temperatures?
//What's sensor error? And what to do?

//2. Breaking up into sub-problems
//- How to ignore error?
//- Find max value in temp array
//-Find min value in temp array
// Subtract min from max (amplitude) and return it

// function calcTempAmplitude(temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if(typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if(curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Problem Two

// Coding Challenge #1

// 1. Understanding the Problem
//Array of strings print the forecast for the upcoming days

let tempList = [17, 21, 23];
function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `${arr[i]} degrees celsius in ${i + 1} day${i === 0 ? "" : "s"}...`
    );
  }
}
printForecast(tempList);

console.log("------DATASET TWO-------")
tempList = [12, 5, -5, 0, 4];
console.log(printForecast(tempList));