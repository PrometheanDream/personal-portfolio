var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program
console.log(header.display("William", "Simpson", "Assignment 6.3"));
console.log("\n");

var ticket = {

    id:"109321",
    name:"Billy Joel",
    requester:"Machine 1"

};

console.log("id: " + ticket.id + " "  + "name: " + ticket.name + " "  + "requester: " + " "  + ticket.requester);

// end program