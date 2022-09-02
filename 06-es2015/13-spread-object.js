// ... - spread operator (overloaded with rest operator)
// 2 situations

// situation #2 (applied on an object)
const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@sapient.com'
    ],
    address: {
        area: 'Mulund',
        city: 'Mumbai'
    }
};

// primitives are copied by value, non-primitives are copied by reference
const johnCopy = { ...john }; // { name: john.name, age: john.age, emails: john.emails, address: john.address }

johnCopy.age++; // john.age is not affected
johnCopy.emails.push( 'john@outlook.com' ); // john.emails is affected

console.log( john ); // age will be 32. Has 3 emails.
console.log( johnCopy ); // age will be 33. Has 3 emails.

const johnEmployment = {
    name: 'Jonathan',
    company: 'Sapient',
    role: 'Accountant',
    dept: 'Finance'
};

// name will be 'Jonathan' (last value assigned for johnAllDetails.name)
// age will be 33 (last value assigned for johnAllDetails.age)
const johnAllDetails = {
    nationality: 'Indian',
    ...john,
    age: 33,
    ...johnEmployment,
    spouse: {
        name: 'Jane',
        age: 28
    },
    children: [ 'Jack', 'Jill' ]
};

console.log( johnAllDetails );