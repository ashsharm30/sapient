// ES2015 "rest" operator (overloaded with "spread")
// ...
// 3 situations in which to use rest
// 2 situations in which to use spread

const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@sapient.com'
    ],
    address: {
        area: 'Mulund',
        city: 'Mumbai',
        pinCode: 400101
    }
};

// rest - situation #1: object destructuring
const {
    name,
    address: {
        city,
        ...restOfAddress
    },
    ...restOfDetails
} = john;

console.log( restOfDetails );
console.log( restOfAddress );

// rest - situation #2: array destructuring
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const [ first, second, , fourth, ...restOfDays ] = days;
console.log( restOfDays );