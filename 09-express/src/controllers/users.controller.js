const getUsers = ( req, res ) => {
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
};

module.exports = {
    getUsers
};