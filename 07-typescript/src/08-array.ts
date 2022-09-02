/** What is the difference between these 3 types? */
let arr1 : number | string[];
let arr2 : number[] | string[];
let arr3 : ( number | string )[];

arr1 = 100;
arr1 = [ 'John', 'Jane' ];
// arr1 = 'Mark'; // error
// arr1 = [ 1, 2 ]; // error
// arr1 = [ 10000, 'Fifty thousand' ]; // error

arr2 = [ 1, 2 ];
arr2 = [ 'John', 'Jane' ];
// arr2 = [ 10000, 'Fifty thousand' ]; // error

arr3 = [ 10000, 'Fifty thousand' ];
arr3 = [ 1, 2 ];
arr3 = [ 'John', 'Jane' ];

export {}