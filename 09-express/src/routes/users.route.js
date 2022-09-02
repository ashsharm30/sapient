const express = require( 'express' );

const router = express.Router();

// router.get( '', ( req, res ) => {
//     res.write( 'API under construction. Try again later.' );
//     res.end();
// });
    
// GET '/api/users'
router.get( '', ( req, res ) => {
    res.json([
        {
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            name: 'Jane Doe',
            email: 'jane.doe@example.com'
        },
        {
            name: 'Mark Smith',
            email: 'mark.smith@example.com'
        },
        {
            name: 'Mary Smith',
            email: 'mary.smith@example.com'
        }
    ])
});

module.exports = router;