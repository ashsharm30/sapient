/**
 * Define the "overloads" above the function
 */
 function add( x : number, y : number ) : number;
 function add( x : string, y : string ) : string;
 function add( x : number | string, y : number | string ) { // we still have to give argument types in the actual function defintion
     if( typeof x === 'number' && typeof y === 'number' ) {
         return x + y;
     } else if( typeof x === 'string' && typeof y === 'string' ) {
         return x + ' ' + y;
     }/*else { // in JS we may handle this way
         throw new Error( 'both arguments must be of same type' );
     }*/
 }
 
 console.log( add( 12, 13 ) );
 console.log( add( 'John', 'Doe' ) );
 
 // not allowed as there is no matching overload
 // console.log( add( 12, 'Doe' ) ); // should ideally not be allowed
 
 // Aside: Alternative approach to above problem
 // function xyz( ...args : number[] | string[] ) {
 
 // }
 
 // xyz( 12, 13 );
 // xyz( 'John', 'Doe' );
 // xyz( 12, 'Doe' );
 
 export {}