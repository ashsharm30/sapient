/**
 * namespace is a convenient syntax to implement the Augmentation pattern to avoid global variables and instead create a single global variables.
 * 
 * "Declaration merging" - You can split the namespace definition and it will still result in a single top-level namespace (MeetingsApp here)
 */
 namespace MeetingsApp {
    // when we export, a sub-namespace / variable / function / class gets added to the namespace publicly (else it can be used only within that namespace)
    export namespace Teams {
        // this variable can still be used within the namespace in which it exists (Teams)
        // private to namespace
        const teamUrl = `https://mymeetingsapp.herokuapp.com/api/teams`;

        export function getTeams() {
            console.log( 'getTeams' );
            console.log( teamUrl ); // we can freely use the things within a namespace
        }
    }
}

namespace MeetingsApp {
    export namespace Meetings {
        export function getMeetings() {
            console.log( 'getMeetings' );
        }
    }
}

console.log( MeetingsApp );

MeetingsApp.Teams.getTeams();
MeetingsApp.Meetings.getMeetings();