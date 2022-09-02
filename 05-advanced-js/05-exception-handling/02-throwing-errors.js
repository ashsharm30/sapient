// function can stop execution due to
    // - return
    // - throw (is used to signal an error and stop execution of the function)
    // - yield
    const sum = ( x, y ) => {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            // throw "Some error"; // possible but not preferred
            throw new TypeError( 'Both arguments must be numbers' );
        }
    
        return x + y;
    };
    
    try {
        const result = sum( 12, 'hello' );
        console.log( 'result = ', result ); // does not execute
    } catch( error ) {
        console.log( error.message );
    }
    
    console.log( 'something important to be done here' );