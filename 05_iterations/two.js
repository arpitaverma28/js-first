const day =["Sunday","Monday","Tuesdsay","Wednesday","Thursday"];
const store =day.forEach(ele => {
    console.log(ele);
});
console.log(store);//undefined


//filter
const arr =[1,2,3,4,5,6,7,8,9,10];
const newarr =arr.filter((num)=> num>4)
const newarr1 =arr.filter((num)=> {
 return   num>4}); //return if { } used
console.log(newarr);
console.log(newarr1);


//map
//map() is an array method used to create a new array by applying a function to each element of the original array. 
// imp point:map() does not change the original array
let add = arr.map((n) => n+10);
console.log(add);

let mf = arr.map((num) => num*10)
.map((num) => num +5)
.filter((num) => num>=45);

console.log(mf);

/*
🔹 What is reduce()? : reduce() is an array method used to reduce an array to a single value.

For example:
sum of numbers
product of numbers
total price
counting items
Syntax:
array.reduce((accumulator, currentValue) => {
   // logic
}, initialValue);
*/
let red =[1,2,3,4,5];
let str = red.reduce(function(acc,curr) {
   return  acc+curr;
},0);
console.log(str);

let arrow = red.reduce((a,c) => a+c ,0);
console.log(arrow);