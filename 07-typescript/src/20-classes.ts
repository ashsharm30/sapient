import IPerson from './15-interface';

class Person implements IPerson {
    // All data members MUST be initialized at the time of declaration / in constructor
    readonly name: string;
    age: number | string;
    spouse?: Person;

    // optional parameter is indicated by ? (can be used in ANY function)
    // optional parameters have to be placed at the end of the the arguments list
    constructor( name : string, age: number, spouse?: Person ) {
        this.name = name;
        this.age = age;

        if( spouse ) {
            this.spouse = spouse;
        }
    }
    
    celebrateBirthday() {
        if( typeof this.age === 'number' ) {
            this.age++;
        }
    }
}

const john = new Person( 'John', 32 );
john.celebrateBirthday();

// john.name = 'Jonathan'; // error

console.log( john );

const jane = new Person( 'Jane', 28, john );
console.log( jane );

export {};