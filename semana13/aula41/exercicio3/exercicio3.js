var colors = require('colors')
var fs = require('fs')


const listaDeTarefas = [
    'Ir ao mercado',
    'Ir a fisioterapia'
]

const newToDo = String(process.argv[2])
listaDeTarefas.push(newToDo)

console.log('Tarefa adicionada com sucesso!'.underline.yellow.bgBlue)
console.log(`tarefas :  \n ${listaDeTarefas}`.rainbow)