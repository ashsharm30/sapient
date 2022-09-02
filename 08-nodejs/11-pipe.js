/**
 * We can use pipe when we want to read from a readable stream and write to a writable stream
 */

 const fs = require( 'fs' );
 const path = require( 'path' );
 
 const readFilePath = path.join( __dirname, 'topics.md' );
 const writeFilePath = path.join( __dirname, 'topics-copy.md' );
 
 const rs = fs.createReadStream( readFilePath );
 const ws = fs.createWriteStream( writeFilePath );
 
 // Syntax: readable stream has pipe() method. Call and pass it a writable stream.
 rs.pipe( ws );