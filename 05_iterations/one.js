//Iteration means: 👉 Repeating a block of code multiple times.This is usually done using loops.
//for loop : fixed number of iterations
for(let i =0;i<10;i++){
    console.log(i);
}

//break : break is used to stop the loop completely.When JavaScript sees break, it exits the loop immediately.
for(let i =0;i<10;i++){
    if(i==5) break;
    console.log(i);
}

//continue : continue is used to skip the current iteration and move to the next iteration.
for(let i =0;i<10;i++){
    if(i==5) continue;
    console.log(i);
}


//while Loop : Runs while the condition is true.

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//do...while Loop : Runs at least once, even if the condition is false.

let j = 1;

do {
  console.log(j);
  j++;
} while (i <= 5);

//for...of Loop (Arrays) : Used to iterate through array values.
const fruits = ["Apple","Mango","Banana","Papaya"];
for(const fruit of fruits ){
    console.log(fruit);
}

//for...in Loop (Objects) : Used to iterate through object keys.
const obj = {
    name : "cloths",
    quantity:40,
    city :"Jhansi"
}
for(const key in obj){
    console.log(key);
}

//Map
// : A JavaScript collection used to store key-value pairs where keys can be of any type.it is uniqe in collection
const map = new Map();
map.set("name ","arpita");
map.set("city","Jhansi");
console.log(map);

 //entire map
for(const k of map){
    console.log(k); //entire map
}
for(const [k,v] of map){
    console.log(k ," -> ",v); //keys
   
}

for(const k in map){
    console.log(k); //show nothing  because not iterable
}

const aarr2 =[88,77,66,55];
for(const x in aarr2){
    console.log(x);  //index
    console.log(aarr2[x]);//value
}


//What is forEach()? : forEach() is a method used to loop through each element of an array.
//It executes a function for every element in the array.

/*Syntax:
array.forEach(function(element, index, array){
   // code
});
*/
const col =["Red","Yellow","Pink","Green","Blue"];
col.forEach(function(val){
console.log(val);
});

const day =["Sunday","Monday","Tuesdsay","Wednesday","Thursday"];
day.forEach((d)=>{
    console.log(d);
})

//array of object
const objArr =[
    {
        language:"java",
        level :"hard"
    },
     {
        language:"Python",
        level :"Easy"
    },
     {
        language:"C",
        level :"Medium"
    }
];
objArr.forEach((i) =>{
    console.log(i.language);
})