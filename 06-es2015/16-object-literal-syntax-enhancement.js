// const name = document.getElementById( 'meeting-name' ).value;
// const description = document.getElementById( 'meeting-description' ).value;
const name = 'Google marketing';
const startDate = '2022-08-31';
const meetingDescription = 'Ads on Google search for product launch';
const END_DATE = 'endDate';

// Es2015 introductions to object literal syntax
// const meeting = {
//     name: name,
//     description: description
// }
const meeting = {
    name,
    startDate,
    [END_DATE]: '2022-08-31', // When you want to set the key from a variable, use []
    description: meetingDescription
};

console.log( meeting );

const addMeeting = ( meetingObj ) => {
    // Ajax call goes out here...
}

addMeeting( meeting );