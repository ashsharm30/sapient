/**
 * Tuple is an array with restrictions on each item of the array
 */

// no restriction on individual items in this variable
let chequeAmounts : (number | string)[] = [ 'Ten thousand', 20000 ];

// sometimes we want an array with 2 items, first is a string, second a number
// Eg. a person's name and age as items in an array
// Requirements: john[0] must be a string, john[1] must be a number
const john : [ string, number ] = [ 'John', 32 ];
// john[0] = 33; // first item MUST be a string // error