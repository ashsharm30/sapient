// return type is automatically inferred based on arguments types and the code that we write within the function
function sum1( x : number, y : number ) /*: number*/ {
    return x + y;
}

console.log( sum1( 12, 13 ) );
// console.log( sum( 12, 'hello' ) ); // error

const sum2 = ( x : number, y : number ) /*: number*/ => x + y;

console.log( sum2( 12, 13 ) );
// console.log( sum2( 12, 'hello' ) ); // error

export {}