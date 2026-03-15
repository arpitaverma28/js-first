const score = 55; //number 
console.log(typeof score,score); //object
const balance = new Number(100);
console.log(balance);
console.log(score.toString());
console.log(typeof(balance.toString()), balance.toString()); //string
console.log(typeof(balance)); //object

let num = 12345.678;
console.log(num.toPrecision(4)); //limit of accuracy

let hund = 10000000; 
console.log(hund.toLocaleString()); // add , output : 1,00,00,000

console.log(0.1 + 0.2);
console.log(0.1+ 0.2 ===0.3); //false
// because some decimal cannot be represented exactly in binary,while some can be close enough, so sometimes the result looks correct

console.log(0.3 + 0.2);
console.log(0.3+ 0.2 ===0.5); //true


//******************* Maths *********
//Math in JavaScript is a built-in object that provides mathematical functions and constants.
//It helps you perform calculations like rounding numbers, finding square roots, random numbers, etc.
console.log(Math.abs(9-12));

// Math.round() :Rounds a number to the nearest integer.
console.log(Math.round(4.6));  // output 5
console.log(Math.round(4.3)); // output 4

// Math.ceil() : Rounds a number up to the next integer.
console.log(Math.ceil(4.2)); //Output 5

//Math.floor() : Rounds a number down to the nearest integer.
console.log(Math.floor(4.9)); // Output 4

//Math.max() and Math.min() : Find the largest or smallest number.
console.log(Math.max(10, 20, 5));  //Output 20
console.log(Math.min(10, 20, 5)); //Output 20 

//Math.random() :
//  Generates a random number between 0 and 1.
console.log(Math.random()); // 0 - 0.99

//Random number between 1–10

console.log(Math.floor(Math.random() * 10)); // 0-9
console.log(Math.floor(Math.random() * 10) + 1); //1-10

//Math.floor(Math.random() * (max - min + 1)) + min  : It gives a random integer between min and max (both included).
let min =10;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min)); 
