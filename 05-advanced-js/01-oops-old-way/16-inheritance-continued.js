function Person( name, age ) {
    this.name = name;
    this.age = age;
}

Person.prototype.constructor = Person;

Person.prototype.celebrateBirthday = function() {
    this.age++;
};

Person.prototype.changeName = function( name ) {
    this.name = name;
};

function Employee( name, age, role, dept ) {
    Person.call( this, name, age );

    this.role = role;
    this.dept = dept;
}

// The default Employee.prototype is being overwritten here
// This default object will have a constructor property which will be set to refer to the constructor function (Employee)
// Employee.prototype = { constructor: Employee }
Employee.prototype = Object.create( Person.prototype ); // {} -> Person.prototype

Employee.prototype.constructor = Employee;

Employee.prototype.promote = function() {
    this.role = `Senior ${this.role}`;
};

// john, jane -> Employee.prototype -> Person.prototype
const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );

john.promote();
jane.promote();
john.celebrateBirthday();
jane.changeName( 'Janette' );

console.log( john );
console.log( jane );

console.log( john instanceof Employee ); // true (will print false on old browsers)