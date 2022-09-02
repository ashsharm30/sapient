/**
 * Create an object with the following requirements (use the Module pattern)
 * 
 * 1. It must maintain an array of tasks (private). Every task is a string.
 * 2. Three methods - to add, remove, and show task (public)
 * 
 * Hint: To implement remove(), filter() method of arrays can be used to update the tasks array. Alternatively you can use indexOf() and splice() mehods in conjunction.
 */
 const jiraBoard = (function() {
    // private data and methods
    let tasks = [];

    // private method
    function isString( val ) {
        return typeof val === 'string';
    }

    const board = {
        addTask( task ) {
            if( isString( task ) ) {
                tasks.push( task );
            }
        },
        removeTask( task ) {
            // keep everything except the one task which is to be removed
            // approach #1
            // tasks = tasks.filter(
            //     function( t ) {
            //         return t !== task;
            //     }
            // );

            // approach #2
            const idx = tasks.indexOf( task );
            tasks.splice( idx, 1 );
        },
        showTasks() {
            console.log( tasks );
        }
    };

    return board;
})();

jiraBoard.addTask( 'Prepare presentation' );
jiraBoard.addTask( 'Complete XT-101 spillover topics' );
jiraBoard.addTask( 'Complete Day 2 topics in XT-102' );
jiraBoard.addTask( 'Implement feedback from SMEs' );

jiraBoard.removeTask( 'Prepare presentation' );

jiraBoard.showTasks();