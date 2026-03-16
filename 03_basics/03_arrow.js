/*
this is a keyword in JavaScript.
👉 It refers to the object that is currently calling the function.
In simple words:
this → current object
*/


//this inside an Object
const user = {
    name :"Arpita",
    age :20,
    city : function(){
        console.log(`${this.name} live in Barabanki..`);
        console.log(this);
    }
}
user.city();
user.name = "Anmol";
user.city();


//this in Global Scope
console.log(this);
/*
In a browser: this → window object
In Node.js : this → {}
*/


//this inside a Normal Function
/*
Here this usually refers to:
global object
But if strict mode is used:
this → undefined 
*/
function hello(){
    let user = "Rashi";
  //  console.log(this);  //global object
    console.log(this.user);  //undefined
}
hello();


//Arrow functions do not have their own this.They take this from the outer scope.
const seyHello = () =>{
   let name ="Krishna";
  // console.log(this.name); //undefined
  //  console.log(this);  //{}
  console.log(name); 
}
seyHello();


//**************** Arrow Function *************
//An Arrow Function is a shorter way to write a function in JavaScript. It uses the => (arrow) symbol. () =>{}
 const fun1 =(a,b) =>{
        return a+b;
    }
 console.log(fun1(3,5));

 //If there is only one return statement, we can write it shorter.
const fun2 =(a,b) =>a+b;
console.log(fun1(30,50));

const fun3 =() => ({user:"Pihu",city:"Jhansi"}); //for oject use (obj)
console.log(fun3());

const arr =[10,20,30,40,50];
arr.forEach(n => console.log(n));