//Date and time

let myDate = new Date();
console.log(myDate.toString()); //Gives date and time in string format
console.log(myDate.toDateString()); //Gives only date in string format
console.log(myDate.toLocaleString()) // gives date and time in readable format
console.log(typeof myDate); //object

console.log(typeof myDate.toLocaleDateString() ); //converts date into readable string format

// let myCreatedDate = new Date (2023, 0, 23);
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date (2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date ("2023-11-14");
// console.log(myCreatedDate.toString());

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());


let timeStamp = Date.now();
console.log(timeStamp);

console.log(myCreatedDate.getDate());








