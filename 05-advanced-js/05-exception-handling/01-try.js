// What is a try block? - You write a piece of code that may result in error within a try block
// try {
    
// } catch( error ) {

// }

try {
    const result = foo(); // may throw an error
    console.log( 'after call to foo, result = ', result ); // this DOES NOT execute as the previous line threw an error
} catch( error ) { // new Error( message )
    if( error.name === 'ReferenceError' ) {
        console.log( 'ReferenceError - error.message =', error.message );
    } else {
        console.log( 'Some other error' );
    }
}

console.log( 'something important happens here' );