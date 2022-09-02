const john = {
    name: 'John',
    age: 32,
    emails: [ 'john@example.com' ],
    celebrateBirthday() {
        this.age++;
    },
    addEmail( email ) { // doesn't matter who calls me (the context "this"), it should be an object with emails property ("duck typing")
        this.emails.push( email );
    }
};

john.celebrateBirthday();
john.addEmail( 'john@gmail.com' );

const jane = {
    name: 'Jane',
    age: 28,
    emails: [ 'jane@example.com' ]
}

console.log( john );

// jane can use john's celebrateBirthday() to celebrate her birthday
// apply() can be used when we do not know in advance how many arguments have to be passed to the function that is called
john.celebrateBirthday.apply( jane );
john.addEmail.apply( jane, [ 'jane@gmail.com' ] );

console.log( jane );