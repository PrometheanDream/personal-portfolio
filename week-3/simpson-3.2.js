var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
function match(one, two) {
    if (one === two) {
        return true;
    } else {
        return false;
    }
} 

function logMismatch(three, four) {
    if (three != four) {
        return console.log(three + " and " + four + " do not match!" );
    } else {
        return console.log(three + " and " + four + " do match!" );
    }
}

function logMatch(five, six) {
    if (five === six) {
        return console.log(five + " and " + six + " do match!" );
    } else {
        return false;
    }
}

// six (6) test variables 
var one = "truck";
var two = "car";
var three = "bike";
var four = "bike";
var five = "three";
var six = "four";


// Output from the match() function... 
console.log(header.display("William", "Simpson", "Assignment 3.2"));
console.log("\n");
console.log(match("A", "B"));
console.log(match(2, 2)); 
console.log("\n");


// Conditional "if...else" statements. Include checks for all six (6) test variables 
logMismatch(one, two);
logMatch(three, four);
logMismatch(five, six);



// end program 