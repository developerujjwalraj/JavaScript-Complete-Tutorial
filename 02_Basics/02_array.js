const marvelHeroes = ['Thor', 'Ironman', 'Spiderman'];
const dcHeroes = ['Superman', 'Flash', 'Batman'];

// marvelHeroes.push(dcHeroes); //It will write dcHeroes in a nested array form inside marvelHeroes. Also this is not a recommended way to use.
// console.log(marvelHeroes);

// console.log(marvelHeroes[3][1]); //It is used to access 3rd index and then 1st index in that 3rd index. Not a recommended approach

const allHeroes = marvelHeroes.concat(dcHeroes); //concats all the elements of both the arrays in a single array
console.log(allHeroes);


//Another way to concat is to spread elements
const finalHeroes = [ ...marvelHeroes, ...dcHeroes] //spreads all elements and then makes one new array out of those spreaded elements.

console.log(finalHeroes);


const anotherArray = [1,2,3 ,[4,5,6],4,3,[5,6,[7,[8],9],10]];

const finalOneArray = anotherArray.flat(Infinity); //returns a new array out of nested arrays and the new array is without any nested array
console.log(finalOneArray);

console.log(Array.isArray("Ujjwal"));
console.log(Array.from("Ujjwal"));
console.log(Array.from( {name : "Ujjwal Raj"})); //returns empty array 

console.log(Array.from(Object.values({name: "Ujjwal Raj"}))); //You can use this to return an object in form of an array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));







