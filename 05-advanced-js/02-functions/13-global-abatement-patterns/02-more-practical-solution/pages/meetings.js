// Problem: Many global variables
// Solution #2: Augmentation
(function() {
    const meetingsList = document.querySelector( '.meetings-list' );

    function searchFilterMeetings() {
        Meetings.getMeetings();
    }

    function addNewMeeting() {
        Meetings.addMeeting( 'XT-102 Project presentation' );
    }

    searchFilterMeetings();
    addNewMeeting();
})();