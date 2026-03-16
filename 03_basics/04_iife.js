//IIFE stands for:Immediately Invoked Function Expression
//👉 It means a function that runs immediately after it is created.

//normal function : Here we define the function and then call it.
function hello(){
    console.log(" normal Connected...");
}
hello();
// in iife  : Here we define the function and then call it.  (function definition )() → function execution
(function hello(){
    console.log(" iife Connected...");
})();

//IIFE with Arrow Function
(()=>{
    console.log("iife arrow function!")
})();

//parameter
((name)=>{
    console.log(`I'm ${name} Learning js`)
})("Rahul");

// when there is two or more iife then ; is important 