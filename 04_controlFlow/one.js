//Control Flow means:👉 The order in which the program executes statements.

//Default Control Flow (Top to Bottom) : JavaScript normally runs code line by line from top to bottom.
let a = 5;
let b = 10;
console.log(a);
console.log(b);

// ******** Conditional Control Flow :Sometimes we want code to run only if a condition is true. *******
//if statement
let age = 18;
if (age >= 18) {
  console.log("You can vote");
}


//if...else
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

//else if
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}


