//for of loop


//for...of is used when you want to loop through iterable values like arrays, strings, and maps. In your file, it is shown for an array, a string, and a Map

// ["","",""];
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]; //for of example with array

for (const num of arr) { 
    console.log(num);
    
}

const greetings = "Hello World" //for of example with string

for (const greet of greetings) {
    if (greet === " "){
        continue;
    }
    console.log(`Each char is ${greet}`);

}

//Maps - A Map is a JavaScript data structure that stores values as key-value pairs in insertion order. It is useful when you want fast lookup and keys other than just strings.

const map = new Map();

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('NED', "Netherlands")

// console.log(map);


// for (const key of map) { //This will give map in an array form
// console.log(key);
    
// }
for (const [key, value] of map) { //since we used [key, value] then it will give map in string form
console.log(key, value);
    
}


//for of loop doesn't work on objects because objects are not iterable. lets try and check it with an example code

// const myObj = {
//     name : "Dhanush",
//     age : 45,
//     profession: "Software developer"
// };

// for (const obj of myObj) { //this will throw an error because obejects cannot work with for of loops because objects are not iterable
//     console.log(obj);
    
// }