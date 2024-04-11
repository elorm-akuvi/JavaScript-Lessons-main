"use strict";
/*
// Function Declarations

function logger(){
  console.log("My name is Lucy");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice =`Juice with ${apples} apples and ${oranges} oranges`

  return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3,6);
console.log(appleOrangeJuice); 

//Function Declaration
function calcAge1(birthYear) {
  const age = 2024 - birthYear;
  return age;
}

 const age1 = calcAge1(1997);
 console.log(age1); 

//Function Expression
 const calcAge2 = function (birthYear) {
  return 2024 - birthYear
 }
//  const age2 = calcAge2(1996);
//  console.log(age1, age2); 


 //Arrow Function
 const calcAge3 = birthYear => 2024 - birthYear;
 const age3 =calcAge3(1999)
 console.log(age3);

 const retirementYear = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`
 }
 console.log(retirementYear(1997, "Lucy"));
 console.log(retirementYear(1995, "Seth")); 

 function cutFruitPieces(fruit) {
  return fruit * 4
 }
 
 function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
 }
 console.log(fruitProcessor(2,3)); 

 function calcAge (birthYear) {
  return 2024 - birthYear;
 }

 function retirementYear (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years `);
    return retirement;
  } else{
    console.log(`${firstName} has already retired`);
    return -1;
  }
 }
 console.log(retirementYear(1997, "Lucy"));
 console.log(retirementYear(1923, "Lucy")); 
 //Coding Challenge  #1

 const calcAverage = (score1, score2, score3)  => (score1 + score2 + score3) / 3;

 let avgDolphins = calcAverage(44, 23, 71);
 let avgKoalas = calcAverage(65, 54, 49);

 function checkWinner(avgDolphins,avgKoalas) {
  if(avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphin win (${avgDolphins} vs ${avgKoalas})`);
    return;
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    return;
  } else{
    console.log(`No team wins`);
  }
 }

 checkWinner(avgDolphins, avgKoalas);

//Data 2
 avgDolphins = calcAverage(85,54, 41);
 avgKoalas = calcAverage(23,34,27);
 console.log(avgDolphins, avgKoalas)
 checkWinner(avgDolphins, avgKoalas); 

 //Arrays
 const friends = ["Lucy", "Aku", "Elorm"];
 console.log(friends);

 const years = new Array (1997, 1999, 2001, 2006);


 console.log(friends[0]);
 console.log(friends[2]);
 console.log(friends.length);
 console.log(friends[friends.length - 1]);

 friends[2] = "Mercy";
 console.log(friends);
 const firstName = "Lucy";
 const lucy = [firstName, "Ahadzi", 2024 - 1997, "Digital Marketer", friends];
 console.log(lucy);
 console.log(lucy.length);

 //Exercise
 const calcAge = function(birthYear) {
  return 2024 - birthYear;
 }
 const birthYears = [1995, 1996, 1997, 1999, 2001, 2006];
 const age1 = calcAge(birthYears[0]);
 const age2 = calcAge(birthYears[1]);
 const age3 = calcAge(birthYears[birthYears.length -1]);
 console.log(age1, age2, age3);

 const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length -1])];
 console.log(ages); 
 //Array Methods

 //Add Elements
 const friends = ["Lucy", "Aku", "Elorm"];
 const newLength = friends.push("Mercy");
 console.log(friends);
 console.log(newLength);

 friends.unshift("Bene");
 console.log(friends);

 //Remove Elements
 friends.pop();
 console.log(friends);

 friends.shift();
 console.log(friends);

 console.log(friends.indexOf ("Aku"));

 friends.push(23);
 console.log(friends.includes ("Lucy"));
 console.log(friends.includes("Samuel")); 


 //Coding Challenge #2

 function calcTip(bill) {
  if(bill >= 50 && bill <= 300){
     return (15/100) * bill;
    } else{
     return (20/100) * bill;
    };
 }
 console.log(calcTip(100));

 const bills = [125, 555, 44];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
 console.log(tips);
 const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[tips.length-1] ];
 console.log(total); 

 //Objects

 const lucy = {
  firstName: "Lucy",
  lastName: "Ahadzi",
  age: 2024 - 1997,
  job: "Digital Marketer",
  friends: ["Elorm", "Aku", "Mercy"]
 };
 console.log(lucy);

 //Dot vs Bracket Notation

 console.log(lucy.lastName);
 console.log(lucy["lastName"]);

 const nameKey = "Name";
 console.log(lucy["first" + nameKey]);
 console.log(lucy["last" + nameKey]);

 const interestedIn = prompt("What do you want to know about Lucy? Choose between firstName, lastName, age, job, and friends");

console.log(lucy[interestedIn]);

if(lucy[interestedIn]) {
  console.log(lucy[interestedIn]);
} else{
  console.log("Wrong request! Choose between firstName, lastName, age, job, and friends")
}

lucy.location = "Ghana";
lucy["twitter"] = "@elorm_akuvi";
console.log(lucy);

//Challenge

console.log(lucy.firstName + " has" + " " + lucy.friends.length + " friends and her best friend is called" + " " + lucy.friends[0] + ".") 

// Object Method
const lucy = {
  firstName: "Lucy",
  lastName: "Ahadzi",
  birthYear: 1997,
  job: "Digital Marketer",
  friends: ["Elorm", "Aku", "Mercy"],
  hasDriversLicense: true,

  // 
  // calcAge: function() {
  //   return 2024 - this.birthYear;
  // }

  calcAge: function() {
   this.age = 2024 - this.birthYear;
   return this.age;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${lucy.job} and has ${this.hasDriversLicense ? "a" : "no"} drivers license`
  }
 };

 console.log(lucy.calcAge());

 console.log(lucy.getSummary());

 // Coding Challenge #3

 const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass/ (this.height * this.height);
    return this.BMI;
  }
 };

 const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass/ (this.height * this.height);
    return this.BMI;
  }
 };

 if(mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.fullName}'s BMI(${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
 } else if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.fullName}'s BMI(${this.BMI}) is higher than ${mark.fullName}'s (${this.BMI})!`);
 } 

 // Loops

//  for(let rep = 1; rep <= 10 ; rep++) {
//   console.log(`Lifting weight repetition ${rep}`);
//  }

 const lucy = [
  "Lucy",
 "Ahadzi",
  2024 - 1997,
  "Digital Marketer",
  ["Elorm", "Aku", "Mercy"],
  true
 ];

 const types =[];

 for (let i = 0; i < lucy.length; i++) {
  // Reading from lucy array
  console.log(lucy[i], typeof lucy[i]);


  //Filling types array
  // types[i] = typeof lucy[i];
  types.push(typeof lucy[i]);
 }
 console.log(types);

 const birthYears = [1995, 1996, 1997, 1999, 2001, 2006];
 const ages =[];

 for(let i= 0; i < birthYears.length; i++) {
  ages.push(2037 - birthYears[i]);
 }
 console.log(ages);

 // Continue and Break Statement

 console.log("---ONLY STRINGS---")
 for (let i = 0; i < lucy.length; i++) {
  if(typeof lucy[i] !== "string") continue;
  console.log(lucy[i], typeof lucy[i]);
 }

 console.log("---BREAK WITH NUMBER---")
 for (let i = 0; i < lucy.length; i++) {
  if(typeof lucy[i] === "number") break;
  console.log(lucy[i], typeof lucy[i]);
 } */

 const lucy = [
  "Lucy",
 "Ahadzi",
  2024 - 1997,
  "Digital Marketer",
  ["Elorm", "Aku", "Mercy"],
  true
 ];

 for(let i = lucy.length -1; i >=0; i--){
  console.log(i, lucy[i]);
 }

 for(let exercise = 1; exercise <= 3;  exercise++) {
  console.log(`--------Starting Exercise ${exercise}--------`);
  for(let rep = 1; rep <= 6; rep++) {
    console.log(`........Lifting Weight Repetition ${rep}........`)
  }
 }

