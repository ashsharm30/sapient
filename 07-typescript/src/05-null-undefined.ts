/**
 * These 2 types are not useful when used standalone (they will be useful when used in union types, function return types, function argument types etc.). null and undefined types acept ONLY null and undefined as values respectively.
 */
 let x : undefined;
 x = undefined;
 
 // x = 1; // error
 // x = 'hello'; // error
 
 let john : null;
 // john = 1; // error
 // john = 'hello'; //error
 john = null;
 
 export {}