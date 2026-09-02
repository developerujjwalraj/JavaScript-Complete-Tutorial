const user = {
    userName : "Kamal",
    price : 299,


    welcomeMessage : function(user) {
        console.log((`${this.userName}, Welcome to our website`));
         
        console.log(this); //here this keyword is giving the context of the object user. So it will give the object user.
        
    }
}

// const message = user.welcomeMessage(); //It will give username : Kamal

// user.userName = "Sam";
// user.welcomeMessage(); //It will give username : Sam


// console.log(this); //this will give an empty object because right now this keyword is not giving context of any object. So it will give an empty object. But if we use this keyword inside a function then it will give the context of that function.


// function chai() {
//     let userName = "Kamal";
//     console.log(this); //this will give a list of properties and methods
    
// };
// chai();

//but if we use this.userName there then it will give undefined because this keyword will not work inside a function. It will work only if its inside an object. then we can nest a function inside an object and then we can use this keyword to get context of that object.

// function chai() {
//     let userName = "Kamal";
//     console.log(this.userName); //this will give undefined
    
// };
// chai();

// const chai = function (){
//     let userName = "Kamal";
//     console.log(this.userName);
    
// }
// chai(); //it will still give undefined 

// const chai = () =>{
//     let userName = "Kamal";
//     // console.log(this.userName); //undefined
//     console.log(this); //empty object 
    
    
// }
// chai();


// const addTwo = (num1, num2) => { //this syntax is called syntax of an arrow function
//     return num1+num2;
// }
console.log(addTwo(4, 45)); //49

//there is one more way which is called as Implicit return

// const addTwo = (num1, num2) =>  num1+num2; //here wr do not need to use return and braces {} because Javascript automatically assumes that we want to return a value this way.

//note if we use curly braces {} then we need to write return keyword but if we used parenthesis() or no brackets then there is no need to write return keyword

// const addTwo = (num1, num2) =>  {userName : "Mayank"} //this will not work because this object need to be in parenthesis before curly braces. only then it will work

const addTwo = (num1, num2) =>  ({userName : "Mayank"});




