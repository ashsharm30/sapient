/**
 * Template string
 * 1. Multi line
 * 2. ${} to get variable/expression values
 */
 const persons = [
    {
        name: 'John',
        age: 32
    },
    {
        name: 'Jane',
        age: 28
    },
    {
        name: 'Mark',
        age: 40
    }
];

const innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            ${
                persons.map(
                    person => `
                        <tr>
                            <td>${person.name}</td>
                            <td>${person.age}</td>
                        <tr>
                    `
                ).join( '' )
            }
        </tbody>
    </table>
`;

console.log( innerHTML );