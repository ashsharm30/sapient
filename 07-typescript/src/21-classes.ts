import IPerson from './15-interface';

class Person implements IPerson {
    // All data members MUST be initialized at the time of declaration / in constructor
    public readonly name: string;
    public age: number | string;
    public spouse?: Person;
    
    private aadhaarNumber : string;

    // optional parameter is indicated by ? (can be used in ANY function)
    // optional parameters have to be placed at the end of the the arguments list
    constructor( name : string, age: number, aadhaarNumber : string, spouse?: Person ) {
        this.name = name;
        this.age = age;
        this.aadhaarNumber = aadhaarNumber;

        if( spouse ) {
            this.spouse = spouse;
        }
    }
    
    public celebrateBirthday() {
        if( this.isNumber( this.age ) ) {
            this.age++;
        }
    }
    
    // Reference for this usage : https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
    private isNumber( val : any ) : val is number {
        return typeof val === 'number';
    }
}

const john = new Person( 'John', 32, '1234-2345-3456' );
john.celebrateBirthday();

// john.name = 'Jonathan'; // error

console.log( john );

const jane = new Person( 'Jane', 28, '2345-3456-4567', john );
console.log( jane );

// console.log( jane.aadhaarNumber ); // error (private property)

export {};