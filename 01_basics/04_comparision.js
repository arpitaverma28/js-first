
let a =7;
let b =8;
console.log(a>b);
console.log(a<b);
console.log(a==b);

console.log(null >0); //false
console.log(null <0); //false
console.log(null ==0); //false
console.log(null >=0); //true

console.log(undefined >0); //false
console.log(undefined <0); //false
console.log(undefined ==0); //false
console.log(undefined >=0); //false

// strict euality check (===) : check both value and data type
console.log("10"==10); //true
console.log("10"===10); //false
