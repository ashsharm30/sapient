class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }

    changeName( name ) {
        this.name = name;
    }
}

const printPerson = person => console.log( `${person.name} is ${person.age} years old` );

module.exports = {
    // Person: Person,
    Person,
    printPerson
};