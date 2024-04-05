/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log("23");

let firstName = "Jonas";
console.log(firstName); 

true;
console.log(true);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1997;
console.log(typeof year); 

let age = 30;
age = 31;

const birthYear = 1997;

var job = "programmer";
job = "teacher"; 
const currentYear = 2037;
const ageJonas = currentYear -1995;
const ageLulu = currentYear - 1997;
console.log(ageJonas, ageLulu);

console.log (ageJonas * 3, ageJonas/ 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Lucy";
const lastName = "Ahadzi";
console.log(firstName + " " +lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; 
x *= 4;
x++;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageLulu);
console.log(ageLulu >= 18); 


//Precedence Operator
const currentYear = 2037;
const ageJonas = currentYear -1995;
const ageLulu = currentYear - 1997;

console.log(currentYear - 1995 > currentYear - 1997);

console.log(15 - 3 - 14);

let x, y;
x = y = 15 - 3 - 14;
console.log(x,y);


const averageAge = (ageJonas + ageLulu) / 2;
console.log(ageJonas, ageLulu, averageAge);

 

const firstName = "Lucy";
const currentJob = "Social Media Manager";
const birthYear = 1997;
const currentYear = 2024;

const lucy = "I'm " + firstName + " , a" + " " + (currentYear - birthYear) + " " + currentJob;
console.log(lucy);
const lucyNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${currentJob}!`;
console.log(lucyNew)

console.log(`string with multiple lines \n
are written on \n
different lines`);

console.log(`strings
on multiple
lines`); 

const age = 15;

 if(age >= 18) {
  console.log(`You are old enough to get a license`);
 } else{
  const yearsLeft = 18 - age
  console.log(`You are too young. Wait for another ${yearsLeft} years and apply again!`);
 }

 const birthYear = 1997;
 let century;
 if(birthYear <= 2000) {
 century = 20;
 } else{
 century = 21;
 }
 console.log(century);

 //Coding Challenge #1

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
if(markBMI > johnBMI) {
  console.log(`Mark's BMI is ${Math.floor(markBMI)}, higher than John's ${Math.floor(johnBMI)}!`);
} else{
  console.log(`John's BMI is ${johnBMI} higher than Mark's ${markBMI}!`)
}
//console.log(Math.floor(johnBMI),Math.floor(markBMI),markHigherBMI);

/* 
//Data 2
const markMassTwo = 95;
const markHeightTwo = 1.88;
const johnMassTwo = 85;
const johnHeightTwo = 1.76;
const markBMITwo = markMassTwo / (markHeightTwo * markHeightTwo);
const johnBMITwo = johnMassTwo/ (johnHeightTwo * johnHeightTwo);
const markHigherBMITwo = markBMITwo > johnBMITwo;
console.log(Math.floor(markBMITwo), Math.floor(johnBMITwo), markHigherBMITwo); */

//type conversion
const inputYear = "1997";
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("lucy"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I am 23 years old`);
console.log("23" - "10" - 3);
console.log("23" * "2");