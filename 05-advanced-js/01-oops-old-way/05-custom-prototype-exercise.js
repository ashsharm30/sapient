/**
 * Create a common prototype with these methods
 * - addToCast( member ) : adds the member to the cast
 * - addToCollection( amount ) : adds the amount to the existing collection
 */
 const moviePrototype = {
    addToCast( member ) {
        this.cast.push( member );
    },
    addToCollection( amount ) {
        this.collection += amount;
    }
};

/**
 * NOTE: You need to modify how these objects are created
 */
const pushpa = {
    name: 'Pushpa',
    year: 2022,
    cast: [ 'Allu Arjun', 'Rashmika' ],
    collection: 200
};

// You can also maintain the above code to create the object, and reset the prototype this way...
pushpa.__proto__ = moviePrototype;

const laalSingh = {
    name: 'Laal Singh Chaddha',
    year: 2022,
    cast: [ 'Aamir Khan', 'Kareena Kapoor' ],
    collection: 300
};

laalSingh.__proto__ = moviePrototype;

pushpa.addToCast( 'Fahad Fazil' );
pushpa.addToCollection( 100 );

laalSingh.addToCast( 'Naga Chaitanya' );
laalSingh.addToCollection( 100 );

console.log( pushpa );
console.log( laalSingh );