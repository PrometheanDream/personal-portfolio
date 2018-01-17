var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program
console.log(header.display("William", "Simpson", "Assignment 6.4"));
console.log("\n");

var ticket = {
    // ticket properties
    id:"151231",
    name:"Printer Issue",
    dateCreated:"27 April 2018",
    priority:"Highest",
    personId:"Chief Mugwump",

    person:{
        // person properties
    id:"777",
    firstName:"Albus",
    lastName:"Dumbledore",
    jobTitle:"Headmaster"

    }
};
console.log("Ticket: " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ")." );

// end program