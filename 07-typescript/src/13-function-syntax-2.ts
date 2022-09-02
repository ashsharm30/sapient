type BinaryFunction = ( x : number, y : number ) => number;

const sum1 : BinaryFunction = ( x, y ) => x + y;

const sum2 : BinaryFunction = function( x, y ) {
    return x + y;
};

console.log( sum1( 12, 13 ) );
// console.log( sum1( 12, 'hello' ) ); // error

console.log( sum2( 12, 13 ) );
// console.log( sum2( 12, 'hello' ) ); // error

/**
 * This syntax helps when we want to specify the data type for a function passed as an argument to another function
 */
type TransformFunction = ( x : number ) => number;

const sum = ( transform : TransformFunction, ...args : number[] ) : number => {
    console.log( 'args = ', args );

    let result = 0;

    for( let i = 0; i < args.length; i++ ) {
        result += transform( args[i] );
    }

    return result;
};

console.log( sum( x => x * x, 10, 20, 30 ) );
console.log( sum( Math.sqrt, 1, 4, 9, 16 ) );


export {}