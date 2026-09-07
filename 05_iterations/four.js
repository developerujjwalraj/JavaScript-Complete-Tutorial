const myObj = {
    name : "Dhanush",
    age : 45,
    profession: "Software developer"
};

//for objects we can use for...in loop 

//for...in loop - for...in loop is used to loop through the keys of an object in JavaScript. It is mainly used for objects, not arrays.

for (const key in myObj) {
    console.log(key); //this will print all keys of the object
    
}
for (const key in myObj) {
    console.log(`${key} => ${myObj[key]}`); //this will print all keys as well as values of the object.
    
}


//can we use for...in loop for arrays. lets find out

const programming = ["java", "js", "html", "rb", "cpp", "py"];

for (const key in programming) {
    console.log(programming[key]);
    
}

//lets find out if it works with maps
const map = new Map(); //It will not work because maps are not iteratable. so this won't work but it will not show error either


map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('NED', "Netherlands")


for (const key in map) {
    
    console.log(key);
    
}

