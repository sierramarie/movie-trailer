// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(movieTitle, movieID) {

        // 3. Call the parent constructor function using the super function
        super(movieTitle, movieID);

        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = movieTitle;
        this.id = movieID;

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument
var theLionKingTrailer = new Trailer ('The Lion King', '4sj1MT05lAA');

var dalmationsTrailer = new Trailer ('101 Dalmations', 'x4Nkw59KFBw');

var mouseDetectiveTrailer = new Trailer ('The Great Mouse Detective', 'J5taMQ6Sjag');

var foxAndTheHoundTrailer = new Trailer ('The Fox & the Hound', 'XFwPyqQy9K0');





