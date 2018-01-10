var famousPoets = [
    {
        firstName: "William",
        lastName: "Wordsworth"
    },
    {
        firstName: "William",
        lastName: "Shakespeare"
    },
    {
        firstName: "Percy",
        lastName: "Shelley"
    },
    {
        firstName: "Robert",
        lastName: "Frost"
    },
    {
        firstName: "Maya",
        lastName: "Angelou"
    }
];

var lastNames = famousPoets.map(function (poet) {
    return poet.lastName
});

lastNames.forEach(function (lastName) {
    console.log(lastName)
});