/**
 * Building a simple web server in Node JS
 * 
 * The server MUST be running.
 * To stop it anytime, use Ctrl + C
 */
// import http from 'http';
const http = require( 'http' );

// f is a callback function
// f is called whenever there is an HTTP request
const server = http.createServer(( req, res ) => { // f
    res.write( 'Hello Node' );
    res.end( 'I am loving it' );
});

// 0 - 65364
server.listen( 3000 ); // should be more than 1024