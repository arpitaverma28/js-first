//***********Conversion**********  : changing one data type into another data type

//implicit conversion : happend automaatically
let result1 ="5" +5; //string
console.log(typeof(result1),result1)

let result2 ="5" - 1; //number
console.log(typeof(result2),result2)


//Explicit Conversion : Manual Conversion
let score = 35;
console.log( typeof score,score);
console.log(typeof(score));

let valueInNumber = String(score);
console.log(typeof(valueInNumber),  valueInNumber);

let str = "123abc";
console.log(typeof(str) , str);
 str = Number(str);
 console.log(typeof(str) , str);  //NaN : not a number

 let x = null;
 console.log(typeof(x),x);

 x=Number(x);  //0
// x=String(x); //null
 console.log(typeof(x),x); 

 let isTrue =true;
 console.log(typeof(isTrue),isTrue);

 let isTrueNum =Number(isTrue) ; //1
 console.log(typeof(isTrueNum),isTrueNum);

let isTrueStr =String(isTrue); //true
 console.log(typeof(isTrueStr),isTrueStr);

 let name1 ="";
 let name2 ="Rashi"
 console.log(typeof(name1),name1);
 console.log(typeof(name2),name2);
 let change1 = Boolean(name1);
 let change2 = Boolean(name2);
  console.log(typeof(change1),change1);
  console.log(typeof(change2),change2);

  //***********Oprations********** : perform some Action on values(data) using operators to produce a result
//Arithmetic Operations
// + , - , * , / , %
  let a =10;
  let b = 5;
  console.log("Addition",a+b);
  console.log("Substraction",a-b);
  console.log("Multiplication",a*b);
  console.log("Division",a/b);
  console.log("Modulus",a%b);
  console.log("Power",a**5);
//Assignment Operations 
// = , += ,-=
  let y =10;
  y +=5;

//Comparison Operations
//== , === , != , < , >
  let p1 = 5;
  let p2 =10;
  console.log(a<b);

//Logical Operations
// && , || , !
let q =20;
console.log(q<50 && q>10);  