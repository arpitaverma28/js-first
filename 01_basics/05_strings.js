//String means a sequence of characters (text) : "rashi"

/*
1️⃣ How to Create a String
In JavaScript, a string can be written in three ways.

1. Double Quotes
let name = "Arpita";

2. Single Quotes
let city = 'Varanasi';

3. Backticks (Template Literal)
let message = `Hello Star`; 
*/
const name = "Arpita";
let age = 20;
console.log("name : "+ name + " , "+ "age : " + age);

//*******Template String (Modern Way)******
console.log(`my name is ${name} and my age is ${age}`)


//3️String Length : length tells how many characters are in the string.
let text = "Hello";
console.log(text.length);

//Access Characters of String You can access characters using index.
console.log(text[0]);  //H
console.log(text[1]); //e

//***********Some Important String Methods********

//toUpperCase()
console.log(text.toUpperCase()); //Output HELLO


//toLowerCase()

console.log(text.toLowerCase()); //Output hello

//trim() :Removes extra spaces.
let text1 = "  hello  ";
console.log(text1.trim()); //Output hello

//includes() :Checks if text exists.
let text2 = "JavaScript";
console.log(text2.includes("Script")); //Output true

//String Concatenation :Joining strings.
let first = "Arpita";
let last = "Verma";

let fullName = first + " " + last;
console.log(fullName); //Output Arpita Verma

//Template String (Modern Way)
let name1 = "Arpita";
let age1 = 22;
console.log(`My name is ${name1} and I am ${age1} years old`);
//Simple definition: A string in JavaScript is a sequence of characters used to represent text and written inside single quotes, double quotes, or backticks.

let str1 = "hello";  //create premitive string stored directly as a simple value
let strObj = new String('StringObject'); //create a string object using a constructor stored as an object in heap memory
console.log(typeof(str1) ,str1); 

console.log(typeof(strObj),strObj)