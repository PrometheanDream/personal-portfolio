var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program
var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];
var x;



// function
function getFruit(one) {
    for (x = 0; x < fruit.length; x++) {
        console.log(fruit[x]);
    }

    
}


// Output from the getFruit() function
console.log(header.display("William", "Simpson", "Assignment 4.2"));
console.log("\n");
getFruit(fruit);


// end program