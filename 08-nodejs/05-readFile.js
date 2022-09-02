/** Filesystem (fs), path modules */
// import fs from 'fs';
const fs = require( 'fs' );
const path = require( 'path' );

// console.log( __dirname ); // path to the folder with the currently running script
// console.log( __filename ); // path to the currently running script

const filePath = path.join( __dirname, '03-hello-node.js' );
// console.log( filePath );

// async function (non-blocking function)
fs.readFile( filePath, 'utf-8', ( err, contents ) => {
    if( err ) {
        console.log( err.message );
        return;
    }

    // If encoding is NOT passed, we get a Buffer object (an array of raw bytes)
    // console.log( contents.toString( 'utf-8' ) );
    console.log( contents );
});

console.log( 'last line of script' );