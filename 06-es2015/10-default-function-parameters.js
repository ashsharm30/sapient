const greet = ( message = 'Hello', name = 'World' ) => {
    // old way #1
    // if( name === undefined ) {
    //     name = 'World';
    // }
    
    // old way #2
    // name = name || 'World';

    console.log( `${message} ${name}!` );
};

greet( 'Good morning', 'John' );
greet( 'Good morning' );
greet();
greet( undefined, 'John' );