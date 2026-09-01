// const tinderUser = new Object (); (singleton object) //this is same as 
/*this*/ const tinderuser = {}; //(non singleton object)

// console.log(tinderuser);

tinderuser.id ="123abc";
tinderuser.name = "Sammy";
tinderuser.isLoggedIn = false;

// console.log(tinderuser );

const regularUser = { //this is a nested object
    email : "abc@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Ujjwal",
            lastName : "Raj",
        },
    },
};

// console.log(regularUser.fullname.userFullName.lastName); //Nested objects can be accessed this way

const Obj1 = {1 : 'a', 2: 'b'};
const Obj2 = {3 : 'c', 4: 'd'};
const Obj4 = {5 : 'e', 6: 'f'};


// const Obj3 = {Obj1, Obj2} //This method of concating object is not recommended

// const Obj3 = Object.assign({}, Obj1, Obj2) //This method can be used to concat two or more object. If we will not use {} then also this statement will work but then the new concat object will be placed in Obj1, if we want the new object to be placed in a new place then its better to use {}

const Obj3 = { ...Obj1, ...Obj2, ...Obj4} //This method is called scattering of all the keys and values and then making a new object out of all scatterd key and values


console.log(Obj3);

const users = [
    {
        id : 1,
        name : "abc",
        email : "abc@gmail.com",
    },
    {
        id : 1,
        name : "abc",
        email : "abc@gmail.com",
    },
    {
        id : 1,
        name : "abc",
        email : "abc@gmail.com",
    }
];

const print = users[1].name;
console.log(print);


console.log(tinderuser);

console.log(Object.keys(tinderuser)); //returns keys of the object in array format
console.log(Object.values(tinderuser)); //returns values of the object in array format
console.log(Object.entries(tinderuser)); //returns keys and values both in array format

console.log(tinderuser.hasOwnProperty('isLoggedIn')); //checks if there is any property with the given name in the object and returns value in boolean form.

//we can check other prototypes of object by pasting it on browser and then running it. It will show a list of different


const course = {
    courseName : "Javascript tutorial",
    coursePrice : 999,
    courseInstructor : "Chai aur code",
};

//we can access the properties in three ways. First two we know about dot notation and bracket notation

console.log(course.courseInstructor); //Chai aur code
console.log(course["courseInstructor"]); //Chai aur code

//but there is one more method by which we can access the properties directly without writing the object name first

const {courseInstructor} = course;//We can access this way too

const {courseInstructor : CI} = course; // If we want to rename the property then we can write it like this


console.log(courseInstructor); 


















