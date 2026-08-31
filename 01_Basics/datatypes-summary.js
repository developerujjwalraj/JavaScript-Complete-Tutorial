/* 7 types of primitive data types. They are: 
1. Number
2. String
3. Boolean
4. BigInt
5. Symbol
6. Null
7. Undefined */

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;


const id = Symbol("2334")
const anotherId = Symbol("2334");

console.log(id === anotherId); //false because Symbol('123') creates a new unique symbol every time, even if the description text is the same. So id and anotherId are two different values, and strict equality === checks whether they are exactly the same symbol reference, not whether their descriptions match.



//reference (non primitives)

//Array, Objects and functions

const heroes = ["shaktimaan", "hero", "Spiderman"];
let myObj = {
    Name : "Ujjwal Raj",
    Age : 22,
};
console.log(myObj)


const myFunction = function(){
    console.log("hello bros");
};

console.log(myFunction);

console.log(typeof anotherId); //symbol

