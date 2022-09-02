/**
 * CRUD - Create, Read, Update, Delete
 */
 const mongoose = require( 'mongoose' );

 // Meeting model is retrieved by Mongoose and returned
 const Meeting = mongoose.model( 'Meeting' );
 
 // EXERCISE: Create controller files similarly for teams and users
 const getMeetings = async ( req, res ) => {
     const date = req.date;
 
     // sends response, after converting the object / array etc. to JSON string, and also adds 'Content-Type' in response headers to 'application/json'
     // find() returns a Promise objects
     // Where should be write await??
     try {
         const meetings = await Meeting.find();
         res.json({
             // meetings: meetings
             meetings,
             date
         });
     } catch( error ) {
         // 500 -> INTERNAL SERVER ERROR
         res.status( 500 ).json({
             message: error.message
         });
     }
 };
 
 const getMeetingById = async ( req, res ) => {
     const { id } = req.params; // { id: '63105c5fd8eeefafe14a54f0' }
 
     try {
         const meeting = await Meeting.findById( id );
         res.json( meeting );
     } catch( error ) {
         res.status( 500 ).json({
             message: error.message
         });
     }
 };
 
 const postMeeting = async ( req, res ) => {
     const meeting = req.body;
 
     try {
         const updatedMeeting = await Meeting.create( meeting );
         res.status( 201 ).json( updatedMeeting );
     } catch( error ) {
         if( error.name === 'ValidationError' ) {
             // 400 -> BAD REQUEST (Client-side error)
             res.status( 400 ).json({
                 message: error.message
             });
         } else {
             res.status( 500 ).json({
                 message: error.message
             });
         }
     }
 };
 
 const updateMeetingById = async ( req, res ) => {
     const { id } = req.params; // { id: '63105c5fd8eeefafe14a54f0' }
 
     const meetingPatch = req.body;
 
     try {
         const updatedMeeting = await Meeting.findByIdAndUpdate( id, meetingPatch, {
             new: true,
             runValidators: true
             // context: 'query'
         });
         res.json( updatedMeeting );
     } catch( error ) {
         if( error.name === 'ValidationError' ) {
             // 400 -> BAD REQUEST (Client-side error)
             res.status( 400 ).json({
                 message: error.message
             });
         } else {
             res.status( 500 ).json({
                 message: error.message
             });
         }
     }
 };
 
 const deleteMeetingById = async ( req, res ) => {
     const { id } = req.params;
 
     try {
         const meeting = await Meeting.findByIdAndDelete( id );
 
         if( !meeting ) {
             // 404 -> NOT FOUND
             res.status( 404 ).json({
                 message: `Meeting with given ${id} does not exist`
             });
             return;
         }
 
         // 204 -> Successful operation, but response body is empty
         res.status( 204 ).json();
     } catch( error ) {
         res.status( 500 ).json({
             message: error.message
         });
     }
 };
 
 module.exports = {
     // getMeetings: getMeetings
     getMeetings,
     getMeetingById,
     postMeeting,
     updateMeetingById,
     deleteMeetingById
 };