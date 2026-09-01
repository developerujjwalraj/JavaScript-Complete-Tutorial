const accountId = 46464;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // JS is smart and it defauts a variab;e datatype to it if anywhere it is not declared
let accountState;

// accountId = 2;

// console.log(accountId); not possible because we have declared accountId in a const variable

accountEmail = "ur@gmail.com";
accountPassword = "56858";
accountCity = "Bengaluru";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


//Avoid using var because of its issue of local and global scope

console.table([accountId, accountPassword, accountEmail, accountCity, accountState]);




