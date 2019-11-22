const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// uma vez que o map retorna um array, você pode chamar outro map...
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)  