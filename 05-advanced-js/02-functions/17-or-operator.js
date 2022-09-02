// We can use var variables on RHS of the assignment operator when creating that variable itself.
// If a is truthy, the value of a || b is a
// If a is falsy, the value of a || b is b
var x = 0 || {};
console.log( x );

var x = "" || "hello";
console.log( x );

var x = [] || {};
console.log( x );