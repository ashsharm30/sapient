import Person from './15-interface';

interface Employee extends Person {
    role: string,
    dept: string,
    promote: () => void;
}

const john : Employee = {
    name: 'John',
    age: 28,
    role: 'Accountant',
    dept: 'Finance',
    celebrateBirthday() {
        if( typeof this.age === 'number' ) {
            this.age++;
        }
    },
    promote() {
        this.role = `Senior ${this.role}`
    }
};

john.celebrateBirthday();
john.promote();
console.log( john );

export {}