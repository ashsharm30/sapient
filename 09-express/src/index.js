require( './data/init' );

const fs = require( 'fs' );
const path = require( 'path' );
const express = require( 'express' );
const morgan = require( 'morgan' );
const meetingsRouter = require( './routes/meetings.route' );
const teamsRouter = require( './routes/teams.route' );
const usersRouter = require( './routes/users.route' );

const app = express();

// What is "Express Middleware" - a function which is called whenever a request comes in. It is called in the SAME order that it is passed to app.use(). A middleware must call next() in order ro pass control to the following middleware.
// Middleware can do some useful operation and make the result available to the following middleware(s)

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use( morgan( 'combined', { stream: accessLogStream } ) );

app.use(( req, res, next ) => {
    req.date = new Date();
    console.log( 'Middleware #1' );
    next(); // if we do not call next(), the request will be stuck on this middleware
});

// read the data in any incoming request, and set the data on req.body
app.use( express.json() ); // express.json() returns a middleware (a function)

app.use( '/api/meetings', meetingsRouter );
app.use( '/api/teams', teamsRouter );
app.use( '/api/users', usersRouter );

// creates an HTTP server and calls server.listen()
const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log( 'server started' );
});