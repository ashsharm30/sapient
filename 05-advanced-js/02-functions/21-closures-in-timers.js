function sum( x, y, cb ) {
    setTimeout(
        function() { // f
            // x, y continue to be alive in memory and there f is able to use it here
            const result = x + y;
            cb( result );
        },
        3000
    );
}

// the outer function, i.e. sum() returns immediately. f executes after 3 seconds.
sum( 12, 13, function( result ) {
    console.log( 'result = ', result );
});