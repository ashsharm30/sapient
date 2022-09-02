/**
 * Different Shapes
 * Rectangle
 * Circle
 * 
 * They all have area, perimeter etc.
 */
 type FillColor = 'red' | 'green' | 'blue' | 'black' | 'white'; // type literals
 // type ProductRating = 1 | 2 | 3 | 4 | 5;
 
 interface IShape {
     color: FillColor;
     area: () => number,
     perimeter: () => number
 }
 
 interface Diagonal {
     getDiagonals: () => number[]
 }
 
 class Rectangle implements IShape, Diagonal {
     color: FillColor;
     l: number;
     b: number;
 
     constructor( l : number, b : number, color : FillColor ) {
         this.l = l;
         this.b = b;
         this.color = color;
     }
 
     area() {
         return this.l * this.b;
     }
 
     perimeter() {
         return 2 * ( this.l + this.b );
     }
 
     getDiagonals() {
         return [
             Math.sqrt( this.l ** 2 + this.b ** 2 ),
             Math.sqrt( this.l ** 2 + this.b ** 2 )
         ]
     }
 }
 
 class Circle implements IShape {
     color: FillColor;
     r: number;
 
     constructor( r : number, color: FillColor ) {
         this.r = r;
         this.color = color;
     }
 
     area() {
         return Math.PI * this.r ** 2;
     }
 
     perimeter() {
         return 2 * Math.PI * this.r;
     }
 }
 
 const monitor = new Rectangle( 12, 9, 'black' );
 console.log( monitor.area() );
 
 const pizza = new Circle( 8, 'white' );
 console.log( pizza.area() );
 console.log( pizza.perimeter() );
 
 export {};