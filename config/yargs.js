const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripciion de la tarea por hacer'
}

const completado = {
  demand: true,
  alias: 'c',
  default: true,
  desc: 'Campo para hacer completado una tarea'
}

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', {
    descripcion
  })
  .command('actualizar', 'Actualiza el estado completo de una tarea', {
    descripcion,
    completado
  })
  .command('borrar', 'Borrar una tarea', {
    descripcion
  })
  .help()
  .argv

module.exports = {
  argv
}