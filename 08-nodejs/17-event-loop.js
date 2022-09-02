console.log( 1 );

setTimeout(
    () => {
        console.log( 2 );
    },
    0 // will get queued immediately (but executed only later)
);

console.log( 3 );

for( let i = 0; i < 4e9; i++ ) {
    ;
}