const fs = require ('fs' );
const path = require( 'path' );

const filePath = path.join( __dirname, 'hello-fs-stream.txt' );

const ws = fs.createWriteStream( filePath );

ws.on( 'error', err => {
    console.log( err.message );
});

// write little-by-little using write()
for( let i = 0; i < 1e6; i++ ) {
    ws.write( `${i+1}. Hello fs writable stream\n` );
}

// good to call end() after writing. You cannot call write() once you call end().
ws.end();