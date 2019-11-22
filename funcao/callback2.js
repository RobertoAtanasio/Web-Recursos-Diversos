const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback - a function (nota) retonará true ou false, daí o filter selecionará o elemento
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)     // passando uma callback
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7     // aqui retorna uma function que será a callback
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)