// Map - a collection of key-value pairs

const hotels = new Map();

const bengaluruWhitefield = {
    name: 'Bengaluru',
    state: 'Karnataka',
    location: 'Whitefield'
};

const bengaluruBellandur = {
    name: 'Bengaluru',
    state: 'Karnataka',
    location: 'Bellandur'
};

const hotelsInBengaluru = [ 'Hotel A', 'Hotel B' ]

// In a map, the key can be primitive / non-primitive
hotels.set( bengaluruWhitefield, hotelsInBengaluru );
hotels.set( bengaluruBellandur, hotelsInBengaluru );
hotels.set( 'Noida', [ 'Hotel C', 'Hotel D', 'Hotel E' ] );
hotels.set( 'Gurugram', [ 'Hotel F', 'Hotel G' ] );
hotels.set( 'Mumbai', [ 'Hotel H', 'Hotel I', 'Hotel J' ] );

console.log( hotels.get( bengaluruWhitefield ) );

hotels.forEach(
    ( hotelsInLocation, key ) => {
        console.log( 'Location: ', key );
        hotelsInLocation.forEach( hotelInCity => console.log( hotelInCity ) );

        console.log( '\n' );
    }
);