//A function is a block of code that performs a specific task.
//We write it once and call it whenever we need it.
//👉 It helps to reuse code.


//basic function
function say(){
    console.log("hello");
}
say();


function addTwo (a,b){
    console.log(a+b);
}
const abc = addTwo(4,22); //26
console.log("Result : ",abc); // Result :  undefined

// 🔹 Parameter : A parameter is the variable written in the function definition.
// 🔹 Argument : An argument is the actual value passed to the function when calling it.

//Function with Parameters
function  seyHello(name){
    console.log("Hello "+name);
}
seyHello("Arpita");

//Function with Return Value
function add(a,b){
  return a+b;
}
console.log(add(5,6));

//Function Expression : A function can also be stored in a variable.
const storeVal =function(){
    console.log("Stored value");
}
storeVal();

function fullName(name){
    return `${name} how Are You?`;
}
console.log(fullName("arpita"));  //arpita how Are You?
console.log(fullName(""));    // how Are You?
console.log(fullName());      //undefined how Are You?


function handlenull(name ){
    if(!name){
        console.log("give name...")
        return;
    }
    return `hello ${name} ! how are you??`;
}
console.log(handlenull());  //give name... undefined
console.log(handlenull("Anurag"));  //hello Anurag ! how are yoy??


function notnull(name ="Rashi"){
  
    return `hello ${name} ! how are you??`;
}
console.log(notnull());  // hello Rashi ! how are yoy??
console.log(notnull("Akash"));  //hello Anurag ! how are yoy??


function cartItem(...item){
    return item;
}
console.log(cartItem(100,200,300,400));  //array of values

function  someItem(a,b,...c){
    return c;
}
console.log(someItem(100,200,300,400)); //a==100,b==200 , other in array


//obect parameter in function
const item ={
    name :"shirt",
    color:"black",
    price:199
}
function cart (anyObject){
  return `item name is ${anyObject.name} and price is ${anyObject.price}`;
}
console.log(cart(item));

//Array parameter in function
const arr =[10,20,30,40];
function arrFun(anyArray){
    return anyArray[2];
}
console.log(arrFun(arr));