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
 checkWinner(avgDolphins, avgKoalas); */


 //Arrays
 const friends = ["Lucy", "Aku", "Elorm"];
 console.log(friends);
