//for each loop

const programming = ["java", "js", "html", "rb", "cpp", "py"];

programming.forEach(function (val){
    console.log(val);
    
})


//also we can write this foreach loop with arrow function

const item = ["apple", "banana", "peas", "soya chunks", "museli"]

item.forEach(val1 => {
    console.log(val1);
    
});

//we can also use one more method where we declare function outside for each loop and then execute for each loop

function name(product) {
    console.log(product);
    
}

item.forEach(name);

// we can access item, index as well as array list using for each loop. 

programming.forEach((language, index, arr) => {
    console.log(language, index, arr);
    
});


//now if we want to access objects which are stored inside an array aka array of objects then also we can use foreach loop

const codingLanguages = [
    {
        language: "Javascript",
        languageFileExtension: "js"
    },
    {
        language: "Python",
        languageFileExtension: "py"
    },
    {
        language: "C++",
        languageFileExtension: "cpp"
    }
];

codingLanguages.forEach(prog => {
    console.log(prog.language, prog.languageFileExtension);
    
});