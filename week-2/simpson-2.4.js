var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...
function fullName(first, last) {
    return "Hello my name is " + first + " " + last;
}

function dateWriter(year, month, day) {
    return "Today's date is " + year + "/" + month + "/" + day + " and the current temperature is " + formatNumber(9,1) + " degrees farenheit.";
}

function formatNumber(number, position) {
    
    var temperature = number + position.toFixed(1);
    return temperature;
    
}

function convertToInt(a) {
    var convertInt = Number(a);
    return "I am " + convertInt + " years old and my savings account goal is " + convertToFloat() + " dollars." ;
}

function convertToFloat() {
    var convertFloat = parseFloat("5000000");
    return convertFloat;
}

// output 
console.log(header.display("William", "Simpson", "Assignment 2.4"));
console.log('\n'); 
console.log(fullName("Will", "Simpson"))
console.log('\n');
console.log(dateWriter(2017, 04, 27));
console.log('\n');
console.log(convertToInt("24"))


// end program 