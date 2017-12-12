var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variable
var test = 7;
console.log(match(test, randomNumber()));



// for loop
console.log(header.display("William", "Simpson", "Assignment 3.4"));
console.log("\n");
console.log("-- Displaying for loop --");

for (var x = 0; x <= 10; x++) {
    logMatch(test, randomNumber());
    
}



// while loop
console.log("\n-- Displaying while loop --"); 
var index = 0
while (index < 10){
    logMatch(test, randomNumber());
index++;
}



// Reused functions from exercise-3.2.js

function match(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
} 

function logMatch(c, d) {
    if (c === d) {
         return console.log(c + " and " + d + " do match!" );
    } else {
         return logMismatch(c, d);
    }
}

 function logMismatch(e, f) {
    if (e != f) {
        return console.log(e + " and " + f + " do not match!" );
    } else {
        return logMatch(e, f);
    }
}



// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}