const john = {
    name: 'John',
    age: 32
};

with( john ) {
    console.log( name );
    console.log( age );
}