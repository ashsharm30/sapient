const baseLocations = [
    'Bengaluru',
    'Gurugram',
    'Mumbai',
    'Noida'
];

console.log( baseLocations );

let primes : number[];
// primes = [ 2, 3, 5, 7, 'Eleven' ]; // error
primes = [ 2, 3, 5, 7, 11 ];

console.log( primes );

primes.push( 13 );
// primes.push( 'Seventeen' ); // error

let chequeAmounts : ( string | number )[];

chequeAmounts = [
    10000,
    'Fifty thousand'
];
chequeAmounts.push( 20000 );
chequeAmounts.push( 'Forty thousand' );
// chequeAmounts.push( { name: 'John' } ); // error

export {}