const user = {
    userName : "Kamal",
    price : 299,


    welcomeMessage : function(user) {
        console.log((`${this.userName}, Welcome to our website`));
         
        console.log(this); //here this keyword is giving the context of the object user. So it will give the object user.
        
    }
}

// const message = user.welcomeMessage(); //It will give username : Kamal

// user.userName = "Sam";
// user.welcomeMessage(); //It will give username : Sam


// console.log(this); //this will give an empty object because right now this keyword is not giving context of any object. So it will give an empty object. But if we use this keyword inside a function then it will give the context of that function.


