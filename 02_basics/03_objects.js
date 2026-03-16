//An object in JavaScript is a collection of key–value pairs used to store related data and functionality.

//new Object() → Singleton

//{} → Object Literal
//An Object Literal means creating an object directly using {} (curly braces).

const user ={
    name : "Rashi",
    age : 20,
    location : "Jhansi",
    "full name": "Arpita verma" //allowed
}
console.log(user);
console.log(user.name);
console.log(user["name"]);

console.log(user["full name"]);
//console.log(user."full name");  //not allowed

let city= Symbol("key1"); 
let student ={
    name : "Veer",
    age : 22,
    [city]: "Kanpur"  //for symbol
    //city: "Kanpur"
}
console.log(student);

//console.log(typeof(student[city])); //undefined      for   city: "Kanpur"
console.log(typeof(student[city]));  //string          for    [city]: "Kanpur" 
console.log(typeof(student["name"])); //string

student.name="Riya";
console.log(student);

student.greeting = function(){
    console.log(`hello ${this.name}`);
}
console.log(student.greeting());  // hello Riya undefined  :undefined is not an error, it just means no value is present.

//Object.freeze() is used to make an object immutable, which means you cannot change its properties, add new properties, or delete properties.
Object.freeze(student);

student.name="Ram";
console.log(student);