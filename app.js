const consola = require('colors')
const { argv } = require('./config/yargs')

// Modulos por hacer
const porHacer = require('./modulos/por-hacer')

let comando = argv._[0]
switch ( comando ) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion)
    console.log(tarea);
    break;
  case 'listar':
    let listado = porHacer.getListado()
    for (let tarea of listado) {
      console.log('\n============ Por Hacer ================='.green)
      console.log(tarea.descripcion)
      console.log('Estado: ', tarea.completado)
      console.log('============ Por Hacer =================\n'.green)
    }
    break;
  case 'actualizar':
    let rs = porHacer.actualizar(argv.descripcion, argv.completado)
    break;
  case 'borrar':
    porHacer.borrar(argv.descripcion)
    break;
  default:
    console.log('Comando no reconocido');
}
