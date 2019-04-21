const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); 

let comando = argv._[0];

switch (comando) {
    case 'listar':
    listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( res => {
            console.log(`Archivo creado:`, colors.green(res));
        })
        .catch(err =>{
            console.log(err);
        }) 
    break;

    default:
        console.log('Comando no reconocio'); 
    break;
}

// let base = 'asd';

// console.log(process.argv);

// let argv2 = process.argv

// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]


// crearArchivo(base)
// .then( res => {
//     console.log(`Archivo creado: ${res}`);
// })
// .catch(err =>{
//     console.log(err);
// })