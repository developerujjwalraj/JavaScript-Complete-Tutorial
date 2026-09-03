//for loop

// for (let i = 0; i <= 10; i++) {
//     // console.log(i);
//     if (i === 7) {
//         console.log(`${i} is a great number`);
        
//     }  
//     console.log(i);
    
// }


//nested for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop value ${i}`); //here we can access the value of i inside this loop because i is in the parent for loop

        console.log(`${i}x${j} = ${(i*j)}`);
        
    }
    
}


//for loop example with array

let myArray = ["Batman", "Superman", "Spiderman", "Mighty Raju", "Captain America"];
console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
   
    
    const element = myArray[index];
    console.log(element);
    
}


//break and continue statements

//break statement is used to exit out of the loop scope whenever you write this statement

for (let index = 1; index < 20; index++) { //this is a normal for loop
    console.log(`index is at ${index}`);
};


for (let index = 0; index < 20; index++) {

    if(index === 5){
        console.log(`5 is detected`);
        break; //here Javascript will come out of this loop and it will not complete till 19
    }
    console.log(`index is at value ${index}`);

    
}

for (let index = 0; index < 20; index++) {
    

    if(index === 5){
        console.log(`5 is detected`);
        continue; //here Javascript will skip this itertion and continue from the next iteration
    }
    console.log(`index is at value ${index}`);
    
}






