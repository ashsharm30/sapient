const fs = require( 'fs' );
const path = require( 'path' );

const filePath = path.join( __dirname, '03-hello-node.js' );

// blocking synchronous function - Please DO NOT use this to read a file
// it will waste CPU time (since no other lines in your application script execute when the contents are read)
try {
    const contents = fs.readFileSync( filePath, 'utf-8' );
    console.log( contents );
} catch( error ) {
    console.log( error.message );
}

console.log( 'end of script' );