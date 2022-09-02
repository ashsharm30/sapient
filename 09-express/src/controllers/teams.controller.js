const getTeams = ( req, res ) => {
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
};

module.exports = {
    getTeams
}