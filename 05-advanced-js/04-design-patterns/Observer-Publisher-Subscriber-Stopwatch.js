class Stopwatch {
    constructor() {
        this.timeElapsed = 0;
        this.intervalId = -1;

        // arrays of callback functions
        this.callbacks = {
            tick: [],
            stop: []
        };
    }

    // popularly called "add" / "on"
    addListener( event, cb ) {
        // safe navigation
        // if( this.callbacks[event] === undefined ) {
        //     return;
        // }

        // ?. -> safe navigation operator
        this.callbacks[event]?.push( cb );
    }

    // popularly called "emit" / "trigger" / "fire"
    runListeners( event ) {
        this.callbacks[event].forEach(
            ( f ) => {
                f( this.timeElapsed );
            }
        )
    }

    start() {
        this.intervalId = setInterval(
            () => {
                this.timeElapsed++;
                this.runListeners( 'tick' );
            },
            1000
        );
    }

    stop() {
        clearInterval( this.intervalId );
        this.runListeners( 'stop' );
    }
}