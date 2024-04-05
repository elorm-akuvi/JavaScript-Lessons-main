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
console.log(ageJonas, ageLulu, averageAge);*/

//Coding Challenge #1

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(Math.floor(johnBMI),Math.floor(markBMI),markHigherBMI);

//Data 2
const markMassTwo = 95;
const markHeightTwo = 1.88;
const johnMassTwo = 85;
const johnHeightTwo = 1.76;
const markBMITwo = markMassTwo / (markHeightTwo * markHeightTwo);
const johnBMITwo = johnMassTwo/ (johnHeightTwo * johnHeightTwo);
const markHigherBMITwo = markBMITwo > johnBMITwo;
console.log(Math.floor(markBMITwo), Math.floor(johnBMITwo), markHigherBMITwo);