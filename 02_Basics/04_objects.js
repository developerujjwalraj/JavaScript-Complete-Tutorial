// const tinderUser = new Object (); (singleton object) //this is same as 
/*this*/ const tinderuser = {}; //(non singleton object)

// console.log(tinderuser);

tinderuser.id ="123abc";
tinderuser.name = "Sammy";
tinderuser.isLoggedIn = false;

// console.log(tinderuser );

const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Ujjwal",
            lastName : "Raj",
        },
    },
};

console.log(regularUser.fullname.userFullName.lastName);


