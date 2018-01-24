var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program
console.log(header.display("William", "Simpson", "Assignment 7.2"));
console.log("\n");

function EmployeeDetails(id, firstName, lastName, title) { // constructor object that is created as a function with four arguments.
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

var employees = [

    new EmployeeDetails("1", "Thomas", "Edison", "Software Engineer"),
    new EmployeeDetails("2", "Benjamin", "Franklin", "Programmer"),
    new EmployeeDetails("3", "Nikola", "Tesla", "Project Manager"),
    new EmployeeDetails("4", "Charles", "Babbage", "Product Manager"),
    new EmployeeDetails("5", "Alexander", "Bell", "Analyst")

];

var arrayLoop = employees.length; 
for (var i = 0; i < employees.length; i++) { // loop will iterate through the array
        console.log(employees[i]);

}


// end program