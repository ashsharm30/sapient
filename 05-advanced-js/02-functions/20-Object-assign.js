const john = {
    name: 'John',
    age: 32
};

const johnEmployment = {
    company: 'Sapient',
    role: 'Accountant',
    dept: 'Finance'
};

Object.assign( john, johnEmployment );

console.log( john );