//Stack (primitive data types) such as Number, Boolean, string, bigint, symbol, null, undefined. Stack memory saves value in the stack format.

//Heap (non - primitives) such as Array, objects and functions. Heap memory saves the reference of the value stored.

let user = "abc Raj"
let email = "abc@gmail.com";

let user2 = user

user = "Ramesh";

console.log(user);//Ramesh
console.log(user2); //abc Raj because value change does not affect if we already assigned the value earlier.

//but if we move to heap memory

let userOne ={
    userName : "abc",
    upiId : "abc@paytm",
};
let userTwo = userOne;

userOne.userName = "ramesh@234";
userOne.upiId = "ramesh@paytm";

console.log(userOne);
console.log(userTwo); //both the values will be same unlike stack memory because heap memory stores reference to the data and if we changed the data then it will reflect to all of the places where the reference to that data is available



