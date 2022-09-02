
const Employee = require( './Employee.js' );

// john, jane are "module-scoped" ("file-scoped")

// john, jane -> Employee.prototype -> Person.prototype
const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );
john.promote();
jane.promote();
john.celebrateBirthday();
jane.changeName( 'Janette' );

console.log( john );
console.log( jane );

console.log( john instanceof Employee );

// How to use global variables
console.log( global.sum( 12, 13 ) );
console.log( sum( 100, 200 ) );