const persons = [
    {
        name: 'John',
        age: 32
    },
    {
        name: 'Jane',
        age: 28
    },
    {
        name: 'Mark',
        age: 40
    }
];

// We are creating a new array
// i.e. persons and personsCopy are 2 different arrays

// The items are non-primtives (objects) - the copy happens by reference
// persons[0] is SAME as personsCopy[0]

const personsCopy = [ ...persons ]; // [ persons[0], persons[1], persons[2] ]

personsCopy.push({ // not added to persons
    name: 'Mary',
    age: 44
});

personsCopy[0].age++; // persons[0].age++;

console.log( personsCopy ); // 4 items
console.log( persons ); // 3 items