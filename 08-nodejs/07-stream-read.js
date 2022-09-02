const fs = require( 'fs' );
const path = require( 'path' );

const filePath = path.join( __dirname, '03-hello-node.js' );

// creates a readable stream object
// rs is like "straw" that helps read the contents of the file little-by-little (reading in "chunks")
const rs = fs.createReadStream( filePath, { encoding: 'utf-8' } );

// chunk size is 64KB by default
// an event called 'data' is fired when a chunk is read from the file
rs.on( 'data', ( chunk ) => {
    console.log( chunk );
});

// an event called 'end' is fired when the entire file has been read
rs.on( 'end', () => {
    console.log( 'file has been read' );
});

// if error occurs, 'error' event is fired
rs.on( 'error', err => {
    console.log( err.message );
});