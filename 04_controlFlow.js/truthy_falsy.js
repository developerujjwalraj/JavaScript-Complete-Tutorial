const userEmail = [];

if (userEmail){
    console.log("got user Email");
    
}
else {
    console.log("Don't have user Email")
}

//falsy values - These values converts to false
//some of the falsy values are:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values - These values converts to true
//some of the truthy values are: 
//"0", "false", " ", [], {}, function(){} and all other values which are not falsy. "0" and "falsy" is truthy because it is a string not a number or boolean


if(userEmail.length === 0){
    console.log("Array is empty");
  }

  const emptyObj = {};

  if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
  }



  //nullish coalescing operator (??) : null undefined
  //this operator picks the first value which is not null or undefined.

  let val1;
//   val1 = 5 ?? 10;
//   val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = undefined??null??23??43;

  console.log(val1);



//ternary operator - it is a shorthand operator to use if else 

    const iceTeaPrice = 100;

    iceTeaPrice <= 80 ? console.log("Ice tea price is less than 80") : console.log("Ice tea price is more than or equal to 80");
    
  