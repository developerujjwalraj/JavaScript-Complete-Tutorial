const name = "abc";
const repoCount = 50;

// console.log(name + repoCount + "value") //not the correct way

console.log(`Hello, My name is ${name}, and my repo count is ${repoCount}`);

const gameName = new String("abc") //another way to declare a string. try it in a browser console

console.log(gameName[0]); //uoutput is "U" because U is on the 0th index of the string

console.log(gameName.length) //a method of a string which will give length of the string

// console.log(gameName.__proto__);//gives prototypes in a string . Recommended to use in a browser

console.log(gameName.charAt(2)); //gives the chracter placed at index 2 that is 'j'

console.log(gameName.indexOf('w')); //gives the index of the specific character in the string.

console.log(gameName.toUpperCase()); //changes the string to uppercase




const newString = gameName.substring(0,4) // starts from 0 and ends at 3.. it will not include 4

console.log(newString);

const anotherString = gameName.slice(0,4) //starts from 0 and ends at 3 but it is different from .substring because we cannot give negative values in substring but we can give negative values in slice. for example:
console.log(anotherString);


const thirdString = gameName.slice(-6, 4)// this will work fine and start counting from reverse
console.log(thirdString);



const lastOneString = "        abcRaj        ";
console.log(lastOneString); //it will leave spaces as declared in the value

//but
console.log(lastOneString.trim()); //it will trim spaces before and after character starts and ends respectively

const url = "www.abcraj.com";
console.log(url.replace("raj", "raaja")); //replaces the current value with the given value


console.log(url.includes('abc')) //returns true
console.log(url.includes('King')); //returns false

const gamerName = "abc-raj-com"
console.log(gamerName.split("-")); //splits a string into an array wherever it finds a hyphen (-). In your code. better to check it in a browser



