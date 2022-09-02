const john = {
    name: 'John',
    emails: [
        { type: 'personal', value: 'john@example.com' }
    ],
    addEmail( email,  ) {
        this.emails.push( email );
    }
};

john.addEmail({
    type: 'official',
    value: 'john@sapient.com'
});

const jane = {
    name: 'Jane',
    emails: [
        { type: 'official', value: 'jane@example.com' }
    ]
}

john.addEmail.call( jane, {
    type: 'personal',
    value: 'jane@gmail.com'
});

john.addEmail.call( jane, {
    type: 'personal',
    value: 'jane@yahoo.com'
});

// bind returns a new function
const janeAddEmail = john.addEmail.bind( jane );

// john.addEmail.call( jane )
janeAddEmail({
    type: 'official',
    value: 'jane@publicissapient.net'
})

console.log( jane );