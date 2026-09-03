let index = 0;


//while loop first checks for the condition then it executes the block of code.

while (index <= 20) {
    console.log(`value of index is ${index}`);
    index += 2;
      
}


//lets check while loop with arrays

let myArray = ["Superman", "Batman", "Spiderman", "Shaktimaan"];
let arr = 0;

while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}


//do while loop first executes the block of code then it checks for the condition

let num = 1;
do {
    // console.log(`value of num is ${num}`);
    num++
} while (num<= 50);

//but what if the value of num1 is 168 and all the conditions are same as above? lets find out

let num1 = 168;
do {
    console.log(`value of num is ${num1}`);
    num1++
} while (num1<= 50);

//here the value of num1 is printed for 1 time and then the condition is checked which did not pass.


