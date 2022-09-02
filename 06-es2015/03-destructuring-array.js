// "de-structure" -> breaking up the structure
// arrays and objects are structured data types
// array is a list of values
// object is a collection of key-value pairs
// Using destructuring we try try to assign those values to variables

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// const first = weekdays[0], second = weekdays[1], fifth = weekdays[4];

// Monday Tuesday Friday Holiday
const [ first, second, , , fifth = 'Holiday', sixth = 'Holiday' ] = weekdays;
console.log( first, second, fifth, sixth );