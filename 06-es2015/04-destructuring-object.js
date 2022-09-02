const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@sapient.com'
    ],
    address: {
        area: 'Mulund',
        city: 'Mumbai'
    }
};

// const officialName = john.name, age = john.age, secondaryEmail = john.emails[1], area = john.address.area, city = john.address.city;

const {
    name : officialName,
    age,
    emails: [
        ,
        secondaryEmail
    ],
    address: {
        area,
        city = 'New Delhi',
        country = 'India'
    }
} = john;

console.log( officialName, age, secondaryEmail, area, city, country );