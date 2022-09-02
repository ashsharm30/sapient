const sum1 = function( x, y ) {
    return x + y;
};

const sum2 = ( x, y ) => {
    return x + y;
};

console.log( sum1( 12, 13 ) );
console.log( sum2( 12, 13 ) );

// If we have a single line return / single statement in the function body, we can remove AT ONCE the braces - {}, and the return keyword
const sum3 = ( x, y ) => x + y;

// const sum4 = ( x, y ) => return x + y; // wrong
// IMPORTANT: this function will return undefined!
// const sum4 = ( x, y ) => {
//     x + y;
// }

// when you have ONLY 1 argument in a function, the () around the argument can be removed
const square1 = ( x ) => x * x;
const square2 = x => x * x;
const greet = name => `Hello ${name}`;

console.log( square1( 10 ) );
console.log( square2( 20 ) );

console.log( greet( 'John' ) );