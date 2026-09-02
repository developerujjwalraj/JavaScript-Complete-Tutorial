//if else statements

const isUserLoggedIn = false;
const temperature = 41;

if(temperature === 41){
    console.log(`Temperature is less than 50`);
}
else {
    console.log(`Temperature is greater than 50`); //This is not the right approach because if we change the temp even if it is less tha 50 then also it will show more than 50
}

console.log("Execute");

// >, <, <=, >=, ==, !=, !==, ===

const score = 200;

if (score>100){
    let power = "fly";
    console.log(`User Power : ${power} `);
}
// console.log(`User Power : ${power} `) //this will show error because power is defined in local scope and got accessed in global scope.

const balance = 10;

// if(balance>500) console.log("test"), console.log("Test2"); //this is the way to write the code of if else in one line

// if(balance>500) console.log("test"), console.log("Test2");
// else console.log(34);


if (balance < 500){
    console.log('less than 500');
    }

else if (balance  < 750){
    console.log('less than 750');
    
}
else if (balance < 900){
    console.log('less than 900');
    
}
else {
    console.log('less than 1200');
    
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn === true && debitCard === true && 2==3){
    console.log("Allow to buy course");
    
}
else if (loggedInFromGoogle|| loggedInFromEmail){
    console.log("user logged in");
}
//loggedInFromGoogle || loggedInFromEmail is same as loggedInFromGoogle = true || loggedInFrom




