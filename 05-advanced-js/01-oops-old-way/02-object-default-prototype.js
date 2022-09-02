// Every object has a "prototype" associated with it (prototype is also an object)
// An object inherits from another object

// Every object has the same prototype
const john = {
    name: 'John',
    age: 32
};

// The__proto__ property refers to the prototype object
console.log( john.__proto__ );

const jane = {
    name: 'Jane',
    age: 28
};

console.log( jane.__proto__ );