/**
 * Type inference
 */
// if you declare a variable and assign an initial value, it infers the data type based on the initial value
// tsc has inferred this to be a string
let message = 'Hello TypeScript';

// message = 100; // error

console.log( message );

export {}