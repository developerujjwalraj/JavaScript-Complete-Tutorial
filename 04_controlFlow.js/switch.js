// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 9;

switch (month) {
    case 1:
        console.log("January");
        break; //this keyword is used to break the control flow otherwise if we don't use break then wherever the case will match it will execute everything below that.
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Enter the valid month number");
        
        break;
}


//what if a string comes in the variable value. Like this: 
//then we just need to change the case value with the strings

const monthName = "march"
switch (monthName) {
    case "jan":
        console.log("January");
        break; 
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    default:
        console.log("Enter the valid month number");
        
        break;
}
