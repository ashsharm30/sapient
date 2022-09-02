class Stopwatch {
    constructor() {
        this.timeElapsed = 0;
        this.intervalId = -1;
    }

    start() {
        console.log( 'this in start = ', this );

        // any inner function has a different "this" from the enclosing function
        // function inner() {
        //     console.log( 'this in inner = ', this );
        // }

        // inner();

        this.intervalId = setInterval(
            // function() { // f
            //     console.log( 'this in f = ', this );
            //     // console.log( 'i am running' );
            // },
            () => { // arrow functions carry of the context ("this") from the enclosing scope
                // console.log( 'this = ', this );
                this.timeElapsed++;
                console.log( this.timeElapsed );
            },
            1000
        );
    }

    stop() {
        clearInterval( this.intervalId );
    }
}

const watch1 = new Stopwatch();
watch1.start();

setTimeout(
    () => watch1.stop(),
    10100
);