const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa 1')
    }
}
const pessoa2 = {
    falar: () => {
        console.log('Opa 2')
    }
}
const pessoa3 = {
    falar: () => console.log('Opa 3')
}
const pessoa4 = {
    falar () { return  console.log('Opa 4') }
}

pessoa.falar()
pessoa2.falar()
pessoa3.falar()
pessoa4.falar()