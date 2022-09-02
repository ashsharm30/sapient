// The methods which do the same thing are created separately for every object
// If we create 1000 Person objects, we create 2000 methods! BAD - This is a waste of memory.
function Person( name, age ) {
    this.name = name;
    this.age = age;
    
    // "own methods" (the methods are created freshly for every new object)
    this.celebrateBirthday = function() {
        this.age++;
    };

    this.changeName = function( name ) {
        this.name = name
    };
}

const john = new Person( 'John', 32,  );

john.celebrateBirthday();
john.changeName( 'Jonathan' );

console.log( john );

const jane = new Person( 'Jane', 28 );