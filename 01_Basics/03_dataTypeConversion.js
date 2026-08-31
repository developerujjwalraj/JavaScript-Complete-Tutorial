let score = "Ujjwal";

console.log(typeof score); //string
console.log(typeof(score)); //string and it is same as above statement

let valueInNumber = Number(score);
console.log(valueInNumber); // output is NaN 
//but
score = "234";

console.log(typeof score); //string

let valueOfScoreInNumber = Number(score);
console.log(valueOfScoreInNumber);
console.log(typeof valueOfScoreInNumber); //number

//"33" this can be converted to 33
//"33an" cannot be converted to a number because it is not a number (NaN)
//true = 1; false = 0;

let isLoggedIn = "Ujjwal";

let booleanConvert = Boolean(isLoggedIn);
console.log(booleanConvert); //true because there is some value in isLoggedIn variable but if we put no value in therer it will print false

isLoggedIn = "";
let boolConvert = Boolean(isLoggedIn);
console.log(boolConvert); // gives false as result because the string is empty


let someNum = 33;

let stringNum = String(someNum); //conversion of number to string
console.log(stringNum); //type is string
console.log(typeof stringNum); // string

//*************************OPERATIONS************************** 

let value = 3;
let negValue = -value;
console.log(negValue); //-3

console.log(2+2); //4 addition
console.log(2-2); //0 subtraction
console.log(2*2); //4 multiplication
console.log(2/2); //1 division
console.log(13%2); //1 modulus
console.log(8**2); //64 exponent

let str1 = "Ujjwal";
let str2 = "hello";

let str3 = str1+str2;
console.log(str3); //Ujjwalhello because it concatenates the string

console.log("1" + 2); //12
//but 
console.log(Number(1) + 2); //3 because Number() converts the string to number

console.log(1 + '2');
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); //because JS reads statement from left to right and here first 2 are numbers and 3rd one is string so firstly it adds ! and 2 then it concatenates the result 3 with "2" and makes it 32



console.log((2+3)*2/4); // according to BODMAS it will first solve bracket and then it will move to multiplication and then to division


let num1, num2, num3;

num1 = num2 = num3 = 2+3;
console.log(num2);

// let gameCounter = 100;
// ++gameCounter;
// console.log(gameCounter); // don't run this code because it is an endless code and will make my system crash












