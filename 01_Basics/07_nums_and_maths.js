const score = 400;
console.log(score);


const balance = new Number(100);//creates a number object with value 100
console.log(balance);

console.log(balance.toString().length); //converts number to string and then gives length of that string

console.log(balance.toFixed(1)); //shows upto 1 decimal place if toFixed(1), if it will be toFixed(2) then it will show upto 2 decimal places.


const anotherNumber = 234.23244;

console.log(anotherNumber.toPrecision(3)); //cuts down number to whatever is written in parameter

const rupees = 10000000000;
console.log(rupees.toLocaleString('en-IN')); //converts a number into a human-readable formatted string.'en-IN' tells JavaScript to use the Indian numbering system.


//+++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++


console.log(Math); //returns math as an object. recommended to use on browser to check

console.log(Math.abs(-4)) //returns the absolute value of -4 which is 4.

console.log(Math.round(4.6)); //rounds of to the nearest whole number

console.log(Math.ceil(4.2)); //rounds of to the forwarding nearest whole number

console.log(Math.floor(4.9)); //rounds of to the backwarding nearest whole number

console.log(Math.min(4,3,6,8)); //returns the lowest value out of the given values

console.log(Math.max(4,5,7,8,22));//returns the highest value out of the given value


console.log(Math.random()) //gives random number between 0 and 1 but not including 1

console.log((Math.random()*10) +1); //gives random number between 0 and 11 but not including 11

console.log(Math.floor(Math.random()*10) +1);// shows that random number can be 10 which is nearest backwarding number to the given expression

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);











