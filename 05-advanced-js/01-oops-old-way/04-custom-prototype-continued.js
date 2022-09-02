const personPrototype = {
    nationality: 'Indian',
    celebrateBirthday() {
        this.age++;
    }
};

const john = Object.create( personPrototype ); // john ({}) -> personPrototype

// john has name, age as its "own properties"
john.name = 'John';
john.age = 32;

john.celebrateBirthday();

console.log( john );

const jane = Object.create( personPrototype ); // jane ({}) -> personPrototype

// jane's own properties
jane.name = 'Jane';
jane.age = 28;

jane.celebrateBirthday();

console.log( jane );