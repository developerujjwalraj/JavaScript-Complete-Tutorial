//array

const myArr = [0, 1, 2, 3, 4];
const myHeroes = ["Shaktimaan", "Naagraaj"];

console.log(myArr);
console.log(typeof myArr); //array is kind of an object so it will show object

const myArr2 = new Array(1,2,3,4);


console.log(myArr[1]); //1
console.log(myHeroes [1]); //NAagraaj

//Array Methods

myArr.push(5); //pushes the element at the end of the array
console.log(myArr);

myArr.push(6); //pushes the element at the end of the array
console.log(myArr); 

myArr.pop(); //pops the last inserted element of the array
console.log(myArr); 

myArr.unshift(9); //adds the element at the start of the array
console.log(myArr);

myArr.shift(); //deletes the element present at the start of the array
console.log(myArr);

console.log(myArr.includes(2)); //checks if 2 is present in the array or not and returns boolean value

console.log(myArr.indexOf(2)); //gives the index number of 2 element

const newArray = myArr.join();

console.log(myArr);
console.log(typeof myArr); //object in array form
console.log(newArray);
console.log(typeof newArray); //string

//slice, splice

//slice is used to create a new array out of an existing array but it does not modify the existing array.

const arr1 = [0,1,2,3,4,5,6];
console.log(arr1.slice(0,3));
console.log(arr1); //the existing array is still unchanged


//splice is used to create an array out of an exsiting array but it modifies the existing array. It takes out the elements from the existing array which makes existing array lose those elements.

const arr2 = [0,1,2,3,4,5,6];
console.log(arr2.splice(0,3));
console.log(arr2); //the existing array is modified and all those elements which were in splash are not here in this arr2 array.











