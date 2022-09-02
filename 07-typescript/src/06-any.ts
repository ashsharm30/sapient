/**
 * any is the type assigned when there is no explicit type that is assigned, nor inferred. Any value can be assigned later.
 * 
 * Try not to ever use ANY - no point in using TypeScript if we use any
 */
 let x;
 let y : any;
 let a : string, b : number; // aside: single line can have declarations of different types
 
 x = 100;
 x = true;
 x = 'TypeScript any type is baaaddd';
 
 export {}