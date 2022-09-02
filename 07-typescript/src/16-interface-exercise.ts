/**
 * Define an interface for a Movie
 * name - string
 * cast - array of strings
 * year -  number
 * collection -  number
 * addToCast - takes a string argument (member) and adds to cast
 * addToCollection - takes a number argument (amount) and adds to collection amount
 * 
 * Create 1 Movie object
 */
 interface Movie {
    name: string,
    cast: string[],
    year: number,
    collection: number,
    addToCast: ( member: string ) => void,
    addToCollection: ( amount: number ) => void
}

const pushpa : Movie = {
    name: 'Pushpa',
    year: 2022,
    cast: [ 'Allu Arjun', 'Rashmika' ],
    collection: 200,
    addToCast( member ) {
        this.cast.push( member )
    },
    addToCollection( amount ) {
        this.collection += amount;
    }
};

pushpa.addToCast( 'Fahad Fazil' );
pushpa.addToCollection( 100 );

console.log( pushpa );

export default Movie;