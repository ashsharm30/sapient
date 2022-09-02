console.log( 1 );

setTimeout(
    () => { // f
        console.log( 2 );

        // we want to read file...
        // Which way should we prefer? - approach #2
        
        // approach #1
        fs.readFileSync(); // avoid long running tasks in Node - it blocks the event queue - other functions will need to wait for a long time in order to execute! BAD!

        // approach #2
        fs.readFile( filePath, 'utf-8', () => {} ); // will not block the execution of rest of code, will not block the queue
    },
    0 // will get queued immediately (but executed only later)
);

console.log( 3 );

setTimeout(
    () => { // g
        console.log( 4 );
    },
    0 // will get queued immediately
);

console.log( 5 );