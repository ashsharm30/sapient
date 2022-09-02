const express = require( 'express' );

const router = express.Router();

// Express adds properties / methods to the request and response objects
// router.get( '', ( req, res ) => {
//     // write(), end() and sets 'Content-Type' in response headers to 'text/html'
//     res.send( `API under construction. Try again later.` )
// });

router.get( '', ( req, res ) => {
    res.json([
        {
            name: 'Frontend',
            members: [
                'john.doe@example.com',
                'jane.doe@example.com'
            ]
        },
        {
            name: 'Backend',
            members: [
                'mark.smith@example.com',
                'mary.smith@example.com'
            ]
        }
    ])
});

module.exports = router;