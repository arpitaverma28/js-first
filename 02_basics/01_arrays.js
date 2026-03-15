//Array in JavaScript is a data structure used to store multiple values in a single variable.

const myArray = [1,2,3,4];
console.log(myArray);

//add element

// push() → add at the end
myArray.push(5);
console.log(myArray);

//unshift() → add at the beginning
myArray.unshift(0);
console.log(myArray);

//Remove Elements

//pop() → remove last element
myArray.pop();
console.log(myArray);
//shift() → remove first element
myArray.shift();
  
console.log(myArray);

console.log(myArray.includes(3));  //true

//Array elements are accessed using index numbers.Index always starts from 0.
console.log(myArray[0]);

//index of element
console.log(myArray.indexOf(4));


//join() in JavaScript is an array method used to convert an array into a string by joining all elements together.
let newArray = myArray.join();  // 1,2,3,4
console.log(newArray);

let newArray1 = myArray.join(" "); // 1 2 3 4
console.log(newArray1);

//slice() is used to extract a part of an array or string and return it as a new array or string.It does not change the original array.
let sli = myArray.slice(1,3); //ending index (not included)
console.log(sli);


//splice() is a JavaScript array method used to add, remove, or replace elements in an array, and it modifies the original array.
let spli = myArray.splice(1,3); //remove element
console.log(spli);
console.log(myArray);

let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 0, "mango");  // splice(1,0,"mango") : Go to index 1 , Remove 0 elements , Add mango
console.log(fruits);


//Slice with Negative Index : Negative index means count from the end.
console.log(fruits.slice(-2));

//Arrays Can Store Different Types
let data = [10, "Arpita", true, null];
console.log(data);

let a1 = ["Anurag","Akash","Shivam","Anuj"];
let a2 =["Arpita","Anjali"];

let con = a1.concat(a2);[ 'Anurag', 'Akash', 'Shivam', 'Anuj', 'Arpita', 'Anjali' ]
console.log(con);
console.log(a1); // [ 'Anurag', 'Akash', 'Shivam', 'Anuj' ]

let allEle = [...a1,...a2];
console.log(a1); 
console.log(allEle) //[ 'Anurag', 'Akash', 'Shivam', 'Anuj', 'Arpita', 'Anjali' ]

let p =a1.push(a2); 
console.log(a1); //[ 'Anurag', 'Akash', 'Shivam', 'Anuj', [ 'Arpita', 'Anjali' ] ]


// flat() is a JavaScript array method used to convert a nested array into a single-level array by removing one or more levels of nesting.
let arr = [1, [2, [3, [4]]]];

console.log(arr.flat(Infinity));

console.log(Array.isArray("Arpita")); //false
console.log(Array.isArray([1,2,"RASHI"])); //true
//Array.from() in JavaScript is a static method used to create a new array from an array-like or iterable object.
console.log(Array.from("Arpita"));  // make array : [ 'A', 'r', 'p', 'i', 't', 'a' ]
console.log(Array.from({name:"Arpita"}));  //[]

//Array.of() in JavaScript is a static method used to create a new array from given elements.
let x = 100;
let y =200;
let z = 300;
console.log(Array.of(x,y,z));