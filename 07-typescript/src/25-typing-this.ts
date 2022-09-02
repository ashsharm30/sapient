type Person = {
    name: string,
    age: number
};

// we want to tell TS that "this" will be objects of Person type
function printPerson( this : Person ) {
    console.log( this );
}

// Recollect that the first argument passed to call() is the function context ("this")
printPerson.call({
    name: 'John',
    age: 32
});

// error ("this" that is set does not look like a Person)
// printPerson.call({
//     name: 'John'
// });