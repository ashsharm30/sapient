var MeetingsApp = MeetingsApp || {};

MeetingsApp.Users = (function() {
    const usersUrl = 'https://mymeetingsapp.herokuapp.com/api/users';
    
    const getUsers = () => {
        console.log( 'I will get users' );
    };

    return {
        getUsers: getUsers
    };
})();