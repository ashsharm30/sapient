type Amount = number | string;

let chequeAmount : Amount;
let chequesArr : Amount[] = [];

chequeAmount = 'Ten thousand';
chequeAmount = 20000;
// chequeAmount = true; // error

chequesArr.push( 30000 );
chequesArr.push( 'Forty thousand' );
// chequesArr.push( true ); // error