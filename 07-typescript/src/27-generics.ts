/**
 * A generic represents a blueprint for generating classes, function, types, interfaces
 */
 interface DetailedName {
    manufacturer: string,
    productName: string
}

interface DetailedPrice {
    basePrice: number,
    tax: number
}

// This is NOT an interface (you use this to generate interfaces)
interface Product<NameType = string, PriceType = number> {
    name:  NameType,
    price: PriceType
}

// No need to define individual types
// interface Product {
//     name: string,
//     price: number
// }

// interface ProductDetailedName {
//     name: DetailedName,
//     price: number
// }

// interface ProductDetailedTax {
//     name: string,
//     price: DetailedPrice
// }

// interface ProductDetailedNamePrice {
//     name: DetailedName,
//     price: DetailedPrice
// }

const pen : Product = { // uses the default types for the generic parameters
    name: 'Reynolds Ball Point Pen',
    price: 10
};

const pencil : Product<DetailedName> = { // we use the default for PriceType, i.e number
    name: {
        manufacturer: 'Camlin',
        productName: 'Dark Pencil'
    },
    price: 5
};

// EXERCISE: Please assign the types for these 2 using he generic interface - Product
const eraser = {
    name: 'Camlin',
    price: {
        basePrice: 8,
        tax: 2
    }
};

const sharpener = {
    name: {
        manufacturer: 'Natraj',
        productName: 'Super Sharpener'
    },
    price: {
        basePrice: 12,
        tax: 3
    }
};