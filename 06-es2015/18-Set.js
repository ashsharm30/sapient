/**
 * Set - to make sure we have a collection of things with no duplicates
 * Duplicate for object means SAME object in memory (not 2 separate objects with same key-value pairs)
 */
 const baseLocations = new Set();

 // There is a concept of ordering in a set
 baseLocations.add( 'Bengaluru' );
 baseLocations.add( 'Gurugram' );
 baseLocations.add( 'Bengaluru' ); // this statement will NOT add Bengaluru again
 baseLocations.add( 'Mumbai' );
 baseLocations.add( 'Noida' );
 baseLocations.add( 'Kolkata' );
 
 // if( !baseLocations.has( 'Bengaluru' ) ) {
 //     baseLocations.has( 'Bengaluru' );
 // }
 
 baseLocations.forEach( item => console.log( item ) );
 baseLocations.delete( 'Kolkata' );
 console.log( '***' );
 baseLocations.forEach( item => console.log( item ) );