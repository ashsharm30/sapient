// ... - spread operator (overloaded with rest operator)
// 2 situations

// situation #1 (applied on an array)
const nums1 = [ 1, 2, 3 ], nums2 = [ 4, 5, 6 ];

// REMEMBER: primtive (number, boolean, string) are copied by value. Non-primitives (object, array, function) are copied by reference.
// spread is used on an array to "copy over the items with commas in between"
const copyNums1 = nums1; // "copy by reference"

copyNums1[0] += 10;
copyNums1.push( 4 );

console.log( nums1 ); // changed - [ 11, 2, 3, 4 ]

// ...nums2 copies over the items of the array (putting commas in between)
const copyNums2 = [ ...nums2 ]; // [ nums2[0], nums2[1], nums2[2] ]

copyNums2[0] += 10;
copyNums2.push( 7 );

console.log( nums2 ); // no change - [ 4, 5, 6 ]
console.log( copyNums2 ); // [ 14, 5, 6, 7 ]

// EXERCISE: Use the spread operator to form a new array nums5 with items of nums3 followed by items of nums4
const nums3 = [ 1, 2, 3 ], nums4 = [ 4, 5, 6 ];
// nums5 -> [ 1, 2, 3, 4, 5, 6 ]
const nums5 = [ ...nums3, ...nums4 ];
console.log( nums5 );

// Use of spread in passing arguments which are stored in an array
const scores = [ 75, 87, 67, 90, 55 ];
console.log( Math.max( ...scores ) );