var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)
console.log(header.display("William", "Simpson", "Assignment 3.3"));
console.log("\n");

var eventKeyCode = 13;

switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed");
        break; 
    case 16: 
        console.log("The shift key was pressed");
        break; 
    case 32: 
        console.log("The spacebar key was pressed");
        break;
    case 8:
        console.log("The backspace / delete key was pressed");
        break;
    deafult:
        console.log("Unrecognized key press"); 
}


// end program 