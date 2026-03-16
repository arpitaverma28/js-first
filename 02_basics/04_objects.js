//A Singleton means:👉 Only one instance (one object) is created and used everywhere.

//In simple words:The same object is shared everywhere in the program.
 
//In JavaScript, this usually happens when we create an object using constructor methods like Object().

const user = new Object();  //new Object() creates a singleton object instance.
console.log(user);

user.name ="Arpita";
user.age=20;
user.city="Barabanki";
console.log(user);

const obj1 ={ 1:"a",2:"b"};
const obj2 ={3:"c",4:"d"};

const obj3 ={obj1,obj2}
console.log(obj3); //object inside object
console.log(obj1);
console.log(obj2);

//Object.assign(obj1, obj2)
const obj4 = Object.assign(obj1, obj2);
/*What happens?
obj1 becomes the target object
obj2 properties are copied into obj1
obj1 itself changes
So obj1 is modified.  */
console.log(obj4); 
console.log(obj1);
console.log(obj2);

// Object.assign({}, obj1, obj2)
const obj5 =Object.assign({},obj1,obj2);
/*What happens?
{} is a new empty object
obj1 and obj2 values are copied into it
obj1 and obj2 stay unchanged */
console.log(obj5); 
console.log(obj1);
console.log(obj2);

//Developers usually use spread operator

const obj6 = { ...obj1, ...obj2 }; // it does not modify the original object.

const sam ={
    name : "aru",
    age :20,
    email:"arpita123@gmail.com",
    address: "Barabanki"
}
console.log(Object.keys(sam)); //access key of object
console.log(Object.values(sam)); //access values of object
console.log(Object.entries(sam)); //array of key-value pair inside array
console.log(sam.hasOwnProperty("age")); //key exist or not


//Object Destructuring means:👉 Extracting values from an object and storing them into variables easily.
//Instead of writing long code, we can get values directly from the object.
//const {propertyName} = objectName;
const course ={
    name: "Javascript",
    tine :4,
    author :"Google"
}
const {author:a} = course  //a instead of cource.author
console.log(a); 