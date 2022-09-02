// In essence, private data members are variables that can be used by the methods of the object, which no one else can use
function makeShoppingCart() {
    // private data and methods go in here...
    const items = [];

    const shoppingCart = {
        // items: [],
        add( item ) {
            if( typeof item === 'string' ) {
                items.push( item );
            }
        },
        show() {
            console.log( items );
        }
    };

    return shoppingCart;
}

const shoppingCart = makeShoppingCart();

shoppingCart.add( 'Soap' );
shoppingCart.add( '123' );

// In languages like C++, Java etc. where items would be made private this is not possible
// shoppingCart.items.push( 123 );
// items.push( 123 );

shoppingCart.add( 123 );

shoppingCart.show();