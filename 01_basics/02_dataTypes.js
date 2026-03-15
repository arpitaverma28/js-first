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