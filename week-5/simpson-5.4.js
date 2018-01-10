var header = require('../header.js');

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program
console.log(header.display("William", "Simpson", "Assignment 5.4"));
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

var composersByRating = famousComposers.map(function(composer) {

});

var composersByGenre = famousComposers.map(function(composer) {

});

console.log("-- COMPOSER BY RATING --");
console.log("\n");

famousComposers.forEach(function(music){console.log("Rating: " + music.rating + "\n" + "Composer: " + music.lastName + "\n")}); // function iterates through each array-like object and then prints the rating and lastName value.

console.log("-- COMPOSER BY GENRE --");
console.log("\n");

famousComposers.forEach(function(music){console.log("Genre: " + music.genre + "\n" +"Composer: " + music.lastName + "\n")}); // just like the function above, but prints the genre instead of the rating.


// end program