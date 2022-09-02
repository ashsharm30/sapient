/**
 * When is Singleton used?
 * 1. We want to ensure there is only 1 object of a class
 * 2. We want to create that object dynamically (at runtime)
 */
 function ShoppingCart() {
    // init() takes in the initial set of items and returns a shopping cart object with those items, and add() and show() methods.
    function init( initialItems ) {
        const shoppingCart = (function makeShoppingCart() {
            // private data
            const items = initialItems;

            // private method
            function isString( val ) {
                return typeof val === 'string';
            }

            // public data member and methods
            const shoppingCart = {
                // items: [],
                add( item ) {
                    if( isString( item ) ) {
                        items.push( item );
                    }
                },
                show() {
                    console.log( items );
                }
            };

            return shoppingCart;
        })();

        return shoppingCart;
    }

    return {
        getInstance( initialItems ) {
            // creates a new shopiing cart each time
            // return init( initialItems );
            
            if( ShoppingCart.instance === null ) {
                ShoppingCart.instance = init( initialItems );
            }

            return ShoppingCart.instance;
        }
    }
}

ShoppingCart.instance = null;

// do an Ajax call, fetch the items already added earlier in the cart, and create the cart
const cart1 = ShoppingCart().getInstance( [ 'Soap', 'Bisuits' ] );
const cart2 = ShoppingCart().getInstance( [ 'Soap', 'Bisuits' ] );

cart1.add( 'Chips' );
cart1.show();

console.log( '****' );

cart2.show();