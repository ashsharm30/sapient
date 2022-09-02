/**
 * Define AnimatedMovie which (imports and) extends the Movie interface.
 * 
 * It should additionally have
 * - dubbingArtists - array of strings
 * - resolution - like 4k / 8K as string
 * - changeResolution - takes in  resolution as argument and sets it 
 * 
 * Define an AnimatedMovie object and use it
 */
 import Movie from './16-interface-exercise';

 interface DubbingArtist {
     character: string,
     artist: string
 }
 
 interface AnimatedMovie extends Movie {
     dubbingArtists: DubbingArtist[],
     resolution: string,
     changeResolution: ( resolution : string ) => void
 }
 
 const tomNJerry : AnimatedMovie = {
     name: 'Tom n Jerry',
     year: 1956,
     cast: [ 'Tom', 'Jerry' ],
     collection: 100,
     dubbingArtists: [
         { character: 'Tom', artist: 'John' },
         { character: 'Jerry', artist: 'Jane' }
     ],
     resolution: '4K',
     addToCast( member ) {
         this.cast.push( member )
     },
     addToCollection( amount ) {
         this.collection += amount;
     },
     changeResolution( resolution ) {
         this.resolution = resolution;
     }
 };
 
 console.log( tomNJerry );