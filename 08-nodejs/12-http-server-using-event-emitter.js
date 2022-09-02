const http = require( 'http' );

// server is an "EventEmitter" (basically implements Observer pattern)
const server = http.createServer();

// when server receives a request the function passed is to be executed...
server.on( 'request', ( req, res ) => {
    res.write( 'Hello Node' );
    res.end( 'I am loving it' );
});

// when server starts successfully...
server.on( 'listening', () => {
    console.log( 'server has started' );
});

// when server does not start...
server.on( 'error', error => {
    console.log( error.message );
});

// non-blocking function
server.listen( 3000 );

console.log( 'after call to listen' );