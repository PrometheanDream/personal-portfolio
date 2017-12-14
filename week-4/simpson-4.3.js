var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program
var vehicles = ["Cars", "Truck", "Motorcycle", "Airplane", "Bus"];
var x;
var result;
// function
function getValue(arr, val) {
    for (x = 0; x < vehicles.length; x++) {
        console.log(vehicles[x]); }
result1 = vehicles.filter(vehicle => vehicle.length > 8);
result2 = vehicles.filter(vehicle => vehicle.length < 4);       

}


// Output
console.log(header.display("William", "Simpson", "Assignment 4.3"));
console.log("\n");
console.log(" -- DISPLAYING ARRAY ITEMS --");
getValue();
console.log("\n");
console.log("-- SELECTED VALUE --");
console.log(result1);
console.log("\n");
console.log("-- SELECTED VALUE --");
console.log(result2);


// end program