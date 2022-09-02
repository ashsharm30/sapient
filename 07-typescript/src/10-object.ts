// inferred type
// age property will be automatically inferred as number. If that is not meeting your requirement, you can use "as" to help TS infer the property type as per your requirement.
const john = {
    name: 'John',
    age: 32 as number | string
};

john.age = 'Thirty Three';

// explicit type
let jane : {
    name: string,
    age: number
};

// jane = 100; // error

// jane = { // error
//     name: 'Jane'
// }

// jane = {
//     name: 'Jane',
//     age: 28,
//     spouse: john
// }

jane = {
    name: 'Jane',
    age: 28
};

console.log( john, jane );

export {}