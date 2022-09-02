/**
 * Old way of writing a class
 */
 function Person( name, age ) {
    console.log( this ); // {}
    this.name = name;
    this.age = age;

    // return this;
}

// 1. a new empty object is created
// 2. the function starts executing
const john = new Person( 'John', 32,  ); // {}

console.log( john );
