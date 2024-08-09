const fs = require('fs')
const colors = require('colors/safe');

const crearArchivo = async( base = 5, listar = false, hasta) =>{
    try {
        console.log(colors.bgMagenta('========================'));
        console.log('Tabla del',base);
        console.log(colors.bgMagenta('========================'));

        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += (`${base} ${'x'.green} ${index} ${'='.red } ${base * index} \n`);
        }

        if (listar) {
            console.log(salida);
        }
      
        
        fs.writeFileSync( `salida/tabla-${base}.txt`,salida);
        return(`tabla-${base} creada`);
    } catch (error) {
        throw error;
    }
    

}


module.exports = {
    crearArchivo // redundante crearArchivo:crearArchivo, pero si queremos ponerle otro nombre si puede hacerse bien
}