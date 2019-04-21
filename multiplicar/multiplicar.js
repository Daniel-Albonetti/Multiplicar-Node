const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`==Tabla de ${base} ==`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }

}

let crearArchivo = (base, limite = 10) =>{

    return new Promise( (resolve, reject) =>{

        if (!Number(base)) {
            reject(`el valor ingresado ${base} no es un numero`);
            return;
        }
        
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data +=`${base} * ${i} = ${base * i}\n`;
            
        }


        fs.writeFile(`fichero/tabla-${base}-al-${limite}.txt`, data, (err) => {

        if (err)
            reject(err);
        else
            resolve (`tabla-${base}-al-${limite}.txt`);

        });


    })

}

module.exports = {
    crearArchivo,
    listarTabla
}