//Singleton

//Object.create - This method is also used to create an object and it is called as constructor method.

//object literals

const mySym = Symbol("key1")


const jsUser = {
    Name : "abc",
    "full name" : "abc Raj",
    [mySym] : "myKey1",
    Age : 18,
    Location : "Patna",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],


};

// console.log(jsUser.email); //dot method to access keys in an object
// console.log(jsUser["email"]); //box method to access keys in an object and it is a recommended method

// console.log(jsUser["full name"]); //if keys are in string form then you can only use bracket notation to access key values in an object
// console.log(jsUser[mySym]);


// jsUser.email = "abc@chatgpt.com";
// console.log(jsUser['email']);

// Object.freeze(jsUser); // it freezes the contents of an object. It cannot be changed further
// jsUser.email = "hello, Surprise Surprise";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.Name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



 








