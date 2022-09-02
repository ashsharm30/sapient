import IPerson from './15-interface';

class Person implements IPerson {
    // public readonly name: string;
    // public age: number | string;
    public spouse?: Person;
    
    // private aadhaarNumber : string;

    // Shortcut syntax for declaring data member and initializing them - simply add access specifiers along with the constructor arguments
    constructor( public name : string, public age: number, private aadhaarNumber : string, spouse?: Person ) {
        // this.name = name;
        // this.age = age;
        // this.aadhaarNumber = aadhaarNumber;

        if( spouse ) {
            this.spouse = spouse;
        }
    }
    
    public celebrateBirthday() {
        if( this.isNumber( this.age ) ) {
            this.age++;
        }
    }
    
    private isNumber( val : any ) : val is number {
        return typeof val === 'number';
    }
}

const john = new Person( 'John', 32, '1234-2345-3456' );
john.celebrateBirthday();

console.log( john );

const jane = new Person( 'Jane', 28, '2345-3456-4567', john );
console.log( jane );

export {};