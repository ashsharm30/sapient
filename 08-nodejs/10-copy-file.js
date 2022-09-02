

 const fs = require( 'fs' );
 const path = require( 'path' );
 
 const readFilePath = path.join( __dirname, 'topics.md' );
 const writeFilePath = path.join( __dirname, 'topics-copy.md' );
 
 const rs = fs.createReadStream( readFilePath );
 const ws = fs.createWriteStream( writeFilePath );
 
 rs.on( 'data', chunk => {
     ws.write( chunk );
 });
 
 rs.on( 'end', () => {
     ws.end();
 });
 
 rs.on( 'error', error => {
     console.log( 'Reading error : ', error.message );
 });
 
 ws.on( 'error', error => {
     console.log( 'Writing error : ', error.message );
 });