const john = {
    name: 'John',
    emails: [
        { type: 'personal', value: 'john@example.com' }
    ],
    addEmail( type, value ) {
        this.emails.push({
            type: type,
            value: value
        });
    }
};

const jane = {
    name: 'Jane',
    emails: [
        { type: 'official', value: 'jane@example.com' }
    ]
}

// bind leading arguments 
const janeAddOfficialEmail = john.addEmail.bind( jane, 'official' );
const janeAddPersonalEmail = john.addEmail.bind( jane, 'personal' );

janeAddPersonalEmail( 'jane@gmail.com' );
janeAddPersonalEmail( 'jane@yahoo.com' );
janeAddOfficialEmail( 'jane@publicissapient.net' );
janeAddOfficialEmail( 'jane@sapient.net' );
janeAddOfficialEmail( 'jane@outlook.net' );

console.log( jane );