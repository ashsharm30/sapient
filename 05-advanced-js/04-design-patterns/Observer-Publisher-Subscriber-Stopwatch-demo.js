// Problem of communication between 2 parts of the application

function printTime1( timeElapsed ) {
    console.log( 'printTime1 timeElapsed = ', timeElapsed );
}

function printTime2( timeElapsed ) {
    console.log( 'printTime2 timeElapsed = ', timeElapsed );
}

const watch1 = new Stopwatch();

// add the callback functions to be called
watch1.addListener( 'tick', printTime1 );
watch1.addListener( 'tick', printTime2 );
watch1.addListener( 'stop', function() {
    console.log( 'stopwatch has stopped' );
});
watch1.addListener( 'pause', function() {
    console.log( 'stopwatch has been paused' );
});

watch1.start();

setTimeout(
    () => watch1.stop(),
    10100
);