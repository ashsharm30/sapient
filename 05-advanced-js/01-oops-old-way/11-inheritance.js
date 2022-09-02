function Person( name, age ) {
    // global in Node JS / window in browser (by default)
    // But we shall use DerivedClass.call() to set this to the newly created object
    console.log( this );
    this.name = name;
    this.age = age;
}

Person.prototype.celebrateBirthday = function() {
    this.age++;
};

Person.prototype.changeName = function( name ) {
    this.name = name;
};

function Employee( name, age, role, dept ) {
    // Person( name, age ) // in C++
    // super( name, age ) // in Java
    Person.call( this, name, age ); // function.call( ... ) calls the function given a predefined "this"

    this.role = role;
    this.dept = dept;
}

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );

console.log( john );
console.log( jane );