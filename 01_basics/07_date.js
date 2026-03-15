//Date in JavaScript is a built-in object used to work with date and time.

//Creating a Date
//Current Date and Time
let date = new Date(); //2026-03-15T10:38:17.868Z
console.log(date);
console.log(date.toString()); //Sun Mar 15 2026 16:08:17 GMT+0530 (India Standard Time)


//Get Specific Parts of Date : Get Year
console.log(date.getFullYear()); //2026

console.log(date.toDateString()); //Sun Mar 15 2026
console.log(date.toLocaleDateString()); //15/3/2026

let myCreatedDate = new Date(2025,2,28); //  Month starts from 0
console.log(myCreatedDate.toDateString()); //Fri Mar 28 2025
console.log(myCreatedDate.toLocaleDateString()); //  28/3/2025 


let myCreatedDate1 = new Date("2004-06-28");
console.log(myCreatedDate1.toString()); //Mon Jun 28 2004 05:30:00 GMT+0530 (India Standard Time)


//*********** Time ********** 
console.log(date.getHours()); // Get Hours
console.log(date.getMinutes()); //get minutes

console.log(Date.now()); //This is milliseconds since 1 January 1970.


console.log(date.toLocaleTimeString());  // 4:35:40 pm
console.log(date.toLocaleTimeString([],{
      hour: "2-digit",
      minute: "2-digit" 
}));   //04:35 pm