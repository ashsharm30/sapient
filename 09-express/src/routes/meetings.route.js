const express = require( 'express' );
const { getMeetings, getMeetingById, postMeeting, updateMeetingById, deleteMeetingById } = require( '../controllers/meetings.controller' );

const router = express.Router();

// GET /api/meetings
router.get( '', getMeetings );

// GET /api/meetings/:id
// Example: GET /api/meetings/63105a890163db377d693e83
router.get( '/:id', getMeetingById );

// POST /api/meetings
router.post( '', postMeeting );

// PATCH /api/meetings/:id
// Example: PATCH /api/meetings/63105a890163db377d693e83
router.patch( '/:id', updateMeetingById );

// DELETE /api/meetings/:id
router.delete( '/:id', deleteMeetingById );

module.exports = router;