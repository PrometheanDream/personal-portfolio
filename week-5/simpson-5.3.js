var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program
console.log(header.display("William", "Simpson", "Assignment 5.3"));
console.log("\n");


var famousComposers = [ // stores the data for each composer in it's own section within the array.
    {
        firstName: "Ludwig",
        lastName: "Beethoven",
        genre: "Classical",
        rating: "8"
    },
    {
        firstName: "Johannes",
        lastName: "Mozart",
        genre: "Classical",
        rating: "10"
    },
    {
        firstName: "Johann",
        lastName: "Bach",
        genre: "Classical",
        rating: "9"
    },
    {
        firstName: "Franz",
        lastName: "Haydn",
        genre: "Classical",
        rating: "6"
    },
    {
        firstName: "Franz",
        lastName: "Schubert",
        genre: "Classical",
        rating: "5"
    }

];





console.log("-- COMPOSERS --");
console.log("\n");
// this function will iterate through each object within the array and print lastName, genre, and rating.
famousComposers.forEach(function(music){console.log("Last Name: " + music.lastName + ", Genre: " + music.genre + ", Rating: " + music.rating)});



// end program