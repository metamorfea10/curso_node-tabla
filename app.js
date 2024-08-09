const { crearArchivo } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');
var colors = require('colors');

//5 x 1 = 5
console.clear(); // limpia la consola
console.log( argv );


crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
.catch( (err) => { console.log(err); });

