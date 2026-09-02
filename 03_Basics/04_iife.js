//Immediately invoked function expression (IIFE)

//An Immediately Invoked Function Expression (IIFE) is needed primarily to create a private scope so that variables and functions inside it don’t pollute the global scope.

// function chai () {
//     console.log(`Welcome to JS tutorial`);
//     } //this is a normal function declaration

//     chai();

(function chai () {
    console.log(`Welcome to JS tutorial`);
    })(); //the first () which consists of function delcaration while the second () which is empty is used to execute the function. The second () is same as chai() here.


//we can also use arrow function in iife
( () => {
    console.log(`Welcome to JS tutorial again`);
    })(); 


//also if we need to write a variable inside it then we need to pass parameter and give argument 

( (user) => {
    console.log(`${user}, Welcome to JS tutorial again`);
    })("Raman");  







