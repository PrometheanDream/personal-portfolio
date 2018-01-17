var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program
console.log(header.display("William", "Simpson", "Assignment 6.2"));
console.log("\n");

try {

    var input = "";

if (input == "") throw "Field Empty";

    console.log(input);

} catch (err) {

    console.log("Catch clause: " + err);

} finally {

    console.log("Finally clause reached: End of program.");

}

// end program