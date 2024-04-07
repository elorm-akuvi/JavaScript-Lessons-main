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
console.log(Math.floor(markBMITwo), Math.floor(johnBMITwo), markHigherBMITwo); 
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

//Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("lucy"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if(money){
  console.log("Don't spend it all");
} else{
  console.log("You should get a job")
}

let height;
if(height) {
  console.log("YAY! Height is defined");
} else{
  console.log("Height is UNDEFINED")
} 

//Equality Operators
const age = 18;
if (age === 18){
  console.log("You just became an adult");
}

if (age == 18){
  console.log("You just became an adult");
}

const favorite = Number(prompt("What is your favorite number?"));
console.log(typeof favorite);

if(favorite === 2) {
  console.log("Cool! 2 is a great number")
} else if (favorite === 7) {
  console.log("7 is also a cool number")
} else{
  console.log("Number is not 2 or 7!")
}

if(favorite !==2) {
  console.log(" Why not 2?")
} 

//Boolean Logic

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//   console.log("Lucy should be able to drive!")
// } else{
//   console.log("Someone else should drive...")
// }

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Lucy should be able to drive!")
} else{
  console.log("Someone else should drive...")
  } 


  //Coding Challenge #3

  const teamOne = "Dolphins";
  const teamTwo = "Koalas";

  const teamOneFirstGameScore = 96;
  const teamOneSecondGameScore = 108;
  const teamOneThirdGameScore = 89;

  const teamTwoFirstGameScore = 88;
  const teamTwoSecondGameScore = 91;
  const teamTwoThirdGameScore = 110;

  const dolphinsAverage = (teamOneFirstGameScore + teamOneSecondGameScore + teamOneThirdGameScore) / 3;
  console.log(`The Dolphins average score is ${Math.floor(dolphinsAverage)}`);

  const koalasAverage = (teamTwoFirstGameScore + teamTwoSecondGameScore + teamTwoThirdGameScore) / 3;
  console.log(`The Koalas average score is ${Math.floor(koalasAverage)}`);

  if (dolphinsAverage > koalasAverage) {
    console.log(`The Dolphins are the winners of the trophy!!!`)
  } else if(koalasAverage > dolphinsAverage) {
    console.log(`The Koalas are the winners of the trophy!!!`)
  } else if(dolphinsAverage === koalasAverage) {
    console.log(`This is a draw, nobody wins the trophy...`)
  };

  //Bonus 1

  const teamOneBonusOneScoreOne =  97;
  const teamOneBonusOneScoreTwo = 112;
  const teamOneBonusOneScoreThree = 101;

  const teamTwoBonusOneScoreOne = 109;
  const teamTwoBonusOneScoreTwo = 95;
  const teamTwoBonusOneScoreThree = 123;

  const minimumScore = 100;

  if (teamOneBonusOneScoreOne >= minimumScore && teamTwoBonusOneScoreOne) {
    console.log(`Team Dolphins are the winners of round one`);
  } else if(teamTwoBonusOneScoreOne >= minimumScore && teamOneBonusOneScoreOne) {
    console.log(`Team Koalas are the winners of this round`);
  } else{
    `We don't have a winner`
  };

  if (teamOneBonusOneScoreTwo >= minimumScore && teamTwoBonusOneScoreTwo) {
    console.log(`Team Dolphins are the winners of this round`);
  } else if(teamTwoBonusOneScoreTwo >= minimumScore && teamOneBonusOneScoreTwo) {
    console.log(`Team Koalas are the winners of this round`);
  } else{
    `We don't have a winner`
  };

  if (teamOneBonusOneScoreThree >= minimumScore && teamTwoBonusOneScoreThree) {
    console.log(`Team Dolphins are the winners of this round`);
  } else if(teamTwoBonusOneScoreThree >= minimumScore && teamOneBonusOneScoreThree) {
    console.log(`Team Koalas are the winners of this round`);
  } else{
    `We don't have a winner`
  }

  //Bonus 2
const teamOneBonusTwoScoreOne = 97;
const teamOneBonusTwoScoreTwo = 112;
const teamOneBonusTwoScoreThree = 101;

const teamTwoBonusTwoScoreOne = 109;
const teamTwoBonusTwoScoreTwo = 95;
const teamTwoBonusTwoScoreThree = 106;

if(teamOneBonusTwoScoreOne === teamTwoBonusTwoScoreOne && teamOneBonusTwoScoreOne >= minimumScore && teamTwoBonusTwoScoreOne >= minimumScore){
  console.log(`This is a draw`);
} else if (teamOneBonusTwoScoreTwo === teamTwoBonusTwoScoreTwo && teamOneBonusTwoScoreTwo >= minimumScore && teamTwoBonusTwoScoreTwo >= minimumScore) {
  console.log(`This is a draw`);
} else if (teamOneBonusTwoScoreThree === teamTwoBonusTwoScoreThree && teamOneBonusTwoScoreThree >= minimumScore && teamTwoBonusTwoScoreThree >= minimumScore) {
  console.log(`This is a draw`)
} else{
  console.log(`No team wins the trophy`);
} 
//Switch Statement
const day = "monday";
switch(day){
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare tutorial videos");
    break;
  case "wednesday":
    console.log("Go to the market");
    console.log("Prep ingredients for cooking");
    break;
  case "thursday":
  case "friday":
    console.log("Do laundry");
    break;
  case "saturday":
  case "sunday":
    console.log("Write code")
    break;
  default:
    console.log("Invalid day")

} */

const age = 27
// age >= 18 ? console.log("I like to drink wine") :
// console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);