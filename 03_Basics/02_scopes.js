let a = 10;
const b = 20;
var c = 30;

if(true){
    let a = 100;
    const b = 200;
    var c = 300;
    console.log(a,b,c);
    
}

console.log(a,b,c); //Output is 10 20 300 because let and const is a local scope while var is a global scope. So the value of c is changed to 300 because it is a global variable.

//let can not be redeclared but can be reassigned. It is a block scope variable

// const can neither be redeclared nor reassigned. It is also a block scope variable

// var can be redeclared and reassigned. It is a global scope variable.


function one() {
    const userName = "Ramesh";


    function two(){
        const website = "wikipedia.com";
        const price =200;
        console.log(userName); //this will be executed because the function two is inside the function one so it can access the variable of function one. This is called closure.
        
    }
    // console.log(website); //this will give an error because the function one can not access the variable of function two because function two is inside the function one. This is called closure.

    two(); //This will call the function two inside the function one. So the output will be Ramesh because the function two can access the variable of function one.

};
one();//This will call the function one. So the output will be Ramesh because the function two can access the variable of function one.

if (true){
    const userName = "Ramesh";
    if(userName === "Ramesh"){
        const website = " wikipedia.com";
        console.log(userName + website);
    };
    // console.log(website); //this will show an error
    };

    // console.log(userName);



    //**********************Interesting Fact****************************************

    // function addOne(num){
    //      return num + 1;
    // }
    
    // console.log(addOne(7)); 

    // const addTwo = function(num){
    //     return num+2;
    // }

    // console.log(addTwo(8));


    //All these will give output correctly without any error but if we execute console log statements of both functions before actually declaring a function what will happen? lets find out: 

    console.log(addOne(7)); //This will still work fine because function declaration is hoisted to the top of the code. So it can be called before declaring it.


    function addOne(num){
         return num + 1;
    }
    
    
    // console.log(addTwo(8)); //this will give an error because function expression is not hoisted to the top of the code. So it can not be called before declaring it.

    const addTwo = function(num){
        return num+2;
    }

    
    


