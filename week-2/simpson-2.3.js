var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
myName.yourActualName = "William Simpson";

// function 
function myName() {
    return myName.yourActualName
}



// output 
console.log(header.display("William", "Simpson", "Assignment 2.3"));
console.log("\n");
console.log(myName());
 





// end program 