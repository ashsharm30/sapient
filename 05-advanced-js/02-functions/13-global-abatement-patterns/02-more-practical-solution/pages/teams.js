// Problem: Many global variables
// Solution #2: Augmentation
(function() {
    const teamsList = document.querySelector( '.teams-list' );

    function showTeams() {
        Teams.getTeams();
    }

    function addNewTeam() {
        Teams.addTeam( 'Sapient July React' );
    }

    Users.getUsers();
    
    showTeams();
    addNewTeam();
})();