var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
var x;
var oneState;
var sorted;


// function
function getValue(y, val) {
    for (x = 0; x < states.length; x++) {
        console.log(states[x]); }

sorted = states.sort();
      
oneState = states.filter(state => state.length === 4 );
    
        

}


// Output
console.log(header.display("William", "Simpson", "Assignment 4.4"));
console.log("\n");
console.log("--- Original Array ---");
console.log("\n");
getValue();
console.log("\n");
console.log("--- Sorted Array ---");
console.log("\n");
console.log(sorted);
console.log("\n");
console.log("--- Selected Value ---");
console.log("\n");
console.log(oneState);

// end program
