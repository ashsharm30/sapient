type Person = {
    name: string,
    age: number | string,
    spouse?: Person // optional property spouse whose value is another Person object
    // [key : string]: any
};

const john : Person = {
    name: 'John',
    age: 32
};

let jane : Person;

jane = {
    name: 'Jane',
    age: 28,
    spouse: john
};

john.spouse = jane;

console.log( john, jane );

export {}