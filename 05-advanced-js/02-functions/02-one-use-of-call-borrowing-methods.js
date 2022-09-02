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
john.celebrateBirthday.call( jane );
john.addEmail.call( jane, 'jane@gmail.com' );

console.log( jane );

const mark = {
    name: 'Mark'
};

john.addEmail.call( mark, 'mark@example.com' ); // error