const personPrototype = {
    nationality: 'Indian',
    immigrate( nationality ) {
        this.nationality = nationality;
    }
};

const jane = {
    name: 'Jane',
    age: 28
};

jane.__proto__ = personPrototype;

const john = {
    name: 'John',
    age: 32
};

john.__proto__ = personPrototype;

// nationality is set up as jane's "own property" (directly on jane)
jane.nationality = 'American'; // not set on personPrototype

console.log( jane.nationality ); // 'American'
console.log( john.nationality ); // 'Indian' (coming from prototype)