const baseLocations = new Set();

// There is a concept of ordering in a set
baseLocations.add( 'Bengaluru' );
baseLocations.add( 'Gurugram' );
baseLocations.add( 'Bengaluru' ); // this statement will NOT add Bengaluru again
baseLocations.add( 'Mumbai' );
baseLocations.add( 'Noida' );
baseLocations.add( 'Kolkata' );

const baseLocationsArray = Array.from( baseLocations );
console.log( baseLocationsArray );

// Array.includes() was also introduced in ES2015