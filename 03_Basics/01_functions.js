//Its a lengthy process 
// console.log("R");
// console.log("A");
// console.log("M");
// console.log("E");
// console.log("S");
// console.log("H");

//thats why we use functions

function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();


// function addNumbers (num1, num2, num3){
//     console.log(num1+num2+num3);
// }

// addNumbers(3,4,5); //this will give the output which is 12. But

// const result =addNumbers(3,4,5);
// console.log(result); //why is it still undefined? because we never asked the function to return any value

// function addNumbers (num1, num2, num3){
//     let result = (num1+num2+num3);
//     return result;
// }


//OR WE CAN USE IT ANOTHER WAY AS DESCRIBED BELOW:


function addNumbers (num1, num2, num3){
    return (num1+num2+num3);
    
}
const result =addNumbers(3,4,5);
console.log(`The result is ${result}`); //this is working because we used return keyword inside the function to return a value after execution of the function.



function loginUserMessage(userName) {
    if(userName === undefined) {
        return `Please write a valid username`
    }
    return `${userName}, welcome to our website`
};

// const loggedIn = loginUserMessage("Ramesh"); 
// const loggedIn = loginUserMessage(""); // Returns ,Welcome to our website
const loggedIn = loginUserMessage("Ramesh"); //returns undefined thats why we will use if block to check if the username is empty or not
console.log(loggedIn);


// function calculateCartPrice(num1) {
//     return num1;
// }

console.log(calculateCartPrice(200,400,600,800)); //since we used num1 as parameter, it will only return the first value of the arguement.
function calculateCartPrice(...num1) {
    return num1;
}; //...num1 is called rest operator which is used when we don't know how many arguements are there.

const user = {
    username : "abc",
    price : 199
}

function anyObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

anyObject(user); 

//OR we can declare the object while using console.log while executing the output

anyObject({
    username : "Sam",
    price : 2399,
});


const myNewArray = [200,400,600,1000];

function returnValueFromIndex(getArray){
    return getArray[1];
};

console.log(returnValueFromIndex(myNewArray)); //returns value by using Index of an array
console.log(returnValueFromIndex([200,500,324,222])); //we can also find specific index value by declaring an array while executing it.














