// 6 values are considered as equivalent of false
// false, 0, '', null, undefined, NaN ("falsy")
// Any value except these 6 values is "truthy"

if( "" ) { // falsy
    console.log( true )
} else {
    console.log( false );
}

if( " " ) { // truthy
    console.log( true )
} else {
    console.log( false );
}

if( 0 ) { // falsy
    console.log( true )
} else {
    console.log( false );
}

if( "0" ) { // truthy
    console.log( true )
} else {
    console.log( false );
}

if( [] ) {
    console.log( true )
} else {
    console.log( false );
}

if( {} ) {
    console.log( true )
} else {
    console.log( false );
}