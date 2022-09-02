/**
 * Create AnimatedMovie that inherits from Movie, with dubbingArtists, animationStudio as extra properties
 */
 function Movie( name, year, cast, collection ) {
    this.name = name;
    this.year = year;
    this.cast = cast;
    this.collection = collection;
}

Movie.prototype.addToCast = function( member ) {
    this.cast.push( member );
};

Movie.prototype.addToCollection = function( amount ) {
    this.collection += amount;
};

function AnimatedMovie( name, year, cast, collection, dubbingArtists, animationStudio ) {
    Movie.call( this, name, year, cast, collection );

    this.dubbingArtists = dubbingArtists;
    this.animationStudio = animationStudio;
}

const tomNJerry = new AnimatedMovie(
    'Tom n Jerry', 1956, [ 'Tom', 'Jerry' ], 100,
    [
        { character: 'Tom', artist: 'John' },
        { character: 'Jerry', artist: 'Jane' }
    ],
    'Walt Disney'
);

console.log( tomNJerry );