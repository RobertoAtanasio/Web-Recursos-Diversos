const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log('1', alunos.map(a => a.nota))   // array das notas

// no reduce, o resultado de cada iteração é passado como entrada da próxima iteração

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual, indice) {
    console.log(indice + '.', acumulador, atual)
    return acumulador + atual
}, 0)       // o 0 é o valor inicial

console.log('Resultado', resultado)