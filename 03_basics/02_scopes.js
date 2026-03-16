//Scope means:👉 Where a variable can be accessed in the program.

/*       Keyword	         Scope

          var           	Function scope
          let	            Block scope
          const         	Block scope
*/

// {
//     let a=10;
//     const b =20;
//     var c =30;
// }
// console.log(a);  // not accessable
// console.log(b); // not accessable
// console.log(c); // accessable


//1️⃣ Global Scope : A variable declared outside all functions is in the global scope.
//It can be accessed anywhere in the program.
let x =100;
{
  let x= 300;
  console.log( "Inner value : ",x);
}
console.log(x);


fun1(); //allowed
function fun1(){
    console.log("hello fun1");
}


//fun2();  // in this before declear calling not allow
const fun2 = function(){
     console.log("hello fun2");
}
fun2();