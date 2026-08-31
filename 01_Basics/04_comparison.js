console.log(2>1); //true; greater than
console.log(2>=1); //true greater than equal to
console.log(2<1); //false less than
console.log(2==1); //false is it equal?
console.log(2!=1); //true is it not equal? if yes, then true


console.log("2" > 1); //true because JS converts strings to numbers before comparing
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true because >= is handled through relational comparison logic, and null behaves in a way that makes it compare like 0 here. So null >= 0 evaluates to true.

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined < 0); //false

// === this checks if valye as well as data type is equal or not

console.log("2" === 2); //false because "2" is a string but 2 is a number and === checks both data type and value


