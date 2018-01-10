var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program

console.log(header.display("William", "Simpson", "Assignment 5.2"));
console.log("\n");

var food = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

food.forEach(function (num) { // This function will iterate through the variable "food" and for each value in the variable, it will be assigned to "num" and then logged to the console.
    console.log(num)
});

// end program