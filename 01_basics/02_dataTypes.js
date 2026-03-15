"user strict" // treat all js code as newer version
//alert(3+3) // we are using node js not browser

// ************** primitive data type(call by value)  == 7 ***********
 
//number : use for number
let age = 20;
let price=199.99;

//string :user for text
let name = "Arpita";

//boolean : for true or false value
let isStudent = true;

//undefined : a variable decleared but not assigned a value
let x;
console.log(x); 

//null : for represents empty or no value
let data = null;

//BigInt : for large number
let bigNumber = 68268009463n;

//Symbol : used to create unique identifiers
let id = Symbol("id");



 
// *****************Non-primitive (Reference) data type ***********




//Object : store multiple values together
let student ={
    name: "Rashi",
    age:20,
    city:"Barabanki"
};

//Array : store multiple values is a list
let fruit =["Apple","Mango","Banana"];

//funtion : funtions are also treated as objects
function greet(){
    console.log("Hi");
}


//for type 
console.log(typeof"Rashi");
console.log(typeof age);
console.log(typeof null); //returns Object


//*********** Type of Javascript ********
//javascript is a dynamically typed language because variable types are deytermined at runtime and can change during execution
//Dynamib Type : you do not neet to declear tha Data Type of the Variable
//Static type : the type must be Declear and cannot change

//++++++++++ Memory *******************

/*
Memory in JavaScript means how JavaScript stores and manages data in RAM (computer memory) while the program runs.

JavaScript mainly uses two types of memory areas:

1️⃣ Stack Memory
Stack memory is used for primitive data types.
Examples of primitive types:
Number,String,Boolean,Null,Undefined,Symbol,BigInt

Example
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
Explanation
a stores 10 in stack memory
b gets a copy of a
When b changes to 20, a does not change
✔ Stack stores actual values.

2️⃣ Heap Memory
Heap memory is used for reference data types.
Examples of reference types:
Object,Array,Function

Example
let obj1 = {name: "Arpita"};
let obj2 = obj1;

obj2.name = "Star";

console.log(obj1.name); // Star
console.log(obj2.name); // Star

Explanation
Object is stored in heap memory
obj1 stores the reference (address)
obj2 gets the same reference
Changing obj2 also changes obj1

✔ Heap stores objects and complex data.

📊 Simple Difference
Feature	            Stack	                   Heap
Used for    	Primitive types         	Objects, arrays
Stores	        Actual value	           Reference (address)
Speed          	Faster	                   Slower
Example	        let a = 10	               let obj = {}

🧠 Easy Way to Remember
Stack → Copy value
Heap → Copy reference (address)

⭐ one-line answer:

In JavaScript, primitive values are stored in stack memory, while objects and arrays are stored in heap memory, and variables hold references to them  
*/